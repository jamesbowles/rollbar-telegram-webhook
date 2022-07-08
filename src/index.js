export default {
	async fetch(request, env, context) {
    if (request.headers.get("Content-Type") === "application/json") {
      const rollbarEvent = await request.json();
      // console.log(rollbarEvent);

      const eventName = rollbarEvent.event_name;
      const eventsToNotifyOn = ["occurance", "new_item", "reactivated_item", "reopened_item"];

      if (eventsToNotifyOn.includes(eventName)) {

        let message = "Rollbar Error:";
        message += `\n${rollbarEvent.data.item.title}`;
        message += `\n${rollbarEvent.data.url}`;

        const response = await fetch(`https://api.telegram.org/${env.BOT_TOKEN}/sendMessage`, {
          method: "POST", 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({chat_id: env.CHAT_ID, text: message})
        });

        const data = await response.json();
        if (response.status !== 200) {
          console.log(data);
        }
      }
    };
		return new Response("");
	},
};
