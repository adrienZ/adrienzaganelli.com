interface IAnalyticsEvents {
	"next project click": {
		projectTransition: `${string} -> ${string}`;
	};
	"project live url click": {
		projectName: string;
	};
	"homepage link click": {
		url: string;
	};
	"footer link click": {
		url: string;
	};
	"toogle dark mode": undefined;
	"rss feed clicked": undefined;
	[key: `homepage contact:${string}`]: undefined;
}

function isNuxt() {
	try {
		useNuxtApp();
		return true;
	} catch {
		console.log("warn no vue instance, skip tracking");
	}
}

export class AnalyticsService {
	static trackEvent<
		EventName extends keyof IAnalyticsEvents,
		EventPayLoad = IAnalyticsEvents[EventName],
	>(
		eventName: EventName,
		...eventProperties: EventPayLoad extends undefined
			? [undefined?]
			: [IAnalyticsEvents[EventName]]
	): void {
		if (isNuxt()) {
			umTrackEvent(eventName, eventProperties[0]);
		}
	}
}
