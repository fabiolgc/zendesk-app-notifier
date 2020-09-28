$(function() {
    console.log("background app");
    var debug, messageType, messageTime;

    var client = ZAFClient.init();
    client.on('app.registered', function(data)
		{
			console.log("app.registered top bar");
    });

    //$(document).ready(function() {



        client.metadata().then(function(metadata) {
          this.debug = metadata.settings['debug'];
          this.messageType = metadata.settings['messageType'];
          this.messageTime = metadata.settings['messageTime'];
          if (this.debug) {
            console.log("app : metadata >> ");
            console.log(metadata);
            console.log("var : debug >> " + this.debug);
            console.log("var : messageType >> " + this.messageType);
            console.log("var : messageTime >> " + this.messageTime);
          }
        });



        client.on("api_notification.custom_message", function(data) {
          if (this.debug) {
            console.log("var : messageType >> " + this.messageType);
            console.log("var : messageTime >> " + this.messageTime);
            console.log("param : data >> ");
            console.log(data);
          }

          client.invoke('app.show');
          client.invoke('notify', data.body, this.messageType, this.messageTime);
        });
    //});
});
