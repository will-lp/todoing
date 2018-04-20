


let todoingServer = {
  path : function(path) {
    return `http://${window.location.hostname}:3001${window.location.pathname}${path ? path : ''}`;
  },
  
}

export default todoingServer;
