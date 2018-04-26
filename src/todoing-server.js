


let todoingServer = {
  path : function(path) {
    return `http://${window.location.hostname}:3001/${this.context()}${path ? path : ''}`;
  },
  
  context : function() {
    return window.location.pathname.substring(1);
  }
  
}

export default todoingServer;
