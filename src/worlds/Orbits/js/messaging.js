AFRAME.registerComponent('messaging', {
    schema: {},
    init() {
        const CONTEXT_AF = this;
        const scene      = CIRCLES.getCirclesSceneElement();

        //have to capture all components we need to play with here
        CONTEXT_AF.light_2    = scene.querySelector('#light_2');

        //want to keep track of which light in on/off
        CONTEXT_AF.light_2.lightOn = false;

        //connect to web sockets so we can sync the campfire lights between users
        CONTEXT_AF.socket     = null;
        CONTEXT_AF.connected  = false;
        CONTEXT_AF.synchEventName = "lights_event";

        CONTEXT_AF.createNetworkingSystem = function () {
            CONTEXT_AF.socket = CIRCLES.getCirclesWebsocket();
            CONTEXT_AF.connected = true;
            console.warn("messaging system connected at socket: " + CONTEXT_AF.socket.id + " in room:" + CIRCLES.getCirclesGroupName() + ' in world:' + CIRCLES.getCirclesWorldName());

            
            //light 2
            CONTEXT_AF.light_2.addEventListener('click', function () {
                CONTEXT_AF.toggleLight(CONTEXT_AF.light_2, false);
                CONTEXT_AF.socket.emit(CONTEXT_AF.synchEventName, { light_2_on:CONTEXT_AF.light_2.lightOn ,
                                                                    room:CIRCLES.getCirclesGroupName(), world:CIRCLES.getCirclesWorldName()});
            });

            
            //listen for when others turn on campfire
            CONTEXT_AF.socket.on(CONTEXT_AF.synchEventName, function(data) {
                
                //light 2
                if (CONTEXT_AF.light_2.lightOn !== data.light_2_on) {
                    CONTEXT_AF.toggleLight(CONTEXT_AF.light_2, true);
                }

            });

            //request other user's state so we can sync up. Asking over a random time to try and minimize users loading and asking at the same time ...
            setTimeout(function() {
                CONTEXT_AF.socket.emit(CIRCLES.EVENTS.REQUEST_DATA_SYNC, {room:CIRCLES.getCirclesGroupName(), world:CIRCLES.getCirclesWorldName()});
            }, THREE.MathUtils.randInt(0,1200));

            //if someone else requests our sync data, we send it.
            CONTEXT_AF.socket.on(CIRCLES.EVENTS.REQUEST_DATA_SYNC, function(data) {
                //if the same world as the one requesting
                if (data.world === CIRCLES.getCirclesWorldName()) {
                    CONTEXT_AF.socket.emit(CIRCLES.EVENTS.SEND_DATA_SYNC, { light_2_on:CONTEXT_AF.light_2.lightOn ,
                                                                            room:CIRCLES.getCirclesGroupName(), world:CIRCLES.getCirclesWorldName()});
                }
            });

            //receiving sync data from others (assuming all others is the same for now)
            CONTEXT_AF.socket.on(CIRCLES.EVENTS.RECEIVE_DATA_SYNC, function(data) {
                //make sure we are receiving data for this world
                if (data.world === CIRCLES.getCirclesWorldName()) {
                    
                    //light 2
                    if (CONTEXT_AF.light_2.lightOn !== data.light_2_on) {
                        CONTEXT_AF.toggleLight(CONTEXT_AF.light_2, false);
                    }

                }
            });
        };

        scene.addEventListener(CIRCLES.EVENTS.READY, function() {
            console.log('Circles is ready: ' + CIRCLES.isReady());

            //this is the camera that is now also ready, if we want to parent elements to it i.e., a user interface or 2D buttons
            console.log("Circles camera ID: " + CIRCLES.getMainCameraElement().id);
        });

        //check if circle networking is ready. If not, add an eent to listen for when it is ...
        if (CIRCLES.isCirclesWebsocketReady()) {
            CONTEXT_AF.createNetworkingSystem();
        }
        else {
            const wsReadyFunc = function() {
                CONTEXT_AF.createNetworkingSystem();
                CONTEXT_AF.el.sceneEl.removeEventListener(CIRCLES.EVENTS.WS_CONNECTED, wsReadyFunc);
            };
            CONTEXT_AF.el.sceneEl.addEventListener(CIRCLES.EVENTS.WS_CONNECTED, wsReadyFunc);
        }
    },
    update() {},
    toggleLight : function (lightElem) {
        lightElem.lightOn = !lightElem.lightOn;

        let emissiveIntensity = (lightElem.lightOn ) ? 6.0 : 0.0;
        let lightIntensity = (lightElem.lightOn ) ? 15.0 : 5.0;

        lightElem.setAttribute('material', {emissiveIntensity:emissiveIntensity});
        lightElem.querySelector('[light]').setAttribute('light', {intensity:lightIntensity});
    }
});