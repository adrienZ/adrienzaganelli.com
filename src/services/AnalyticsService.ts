interface IAnalyticsEvents {
	"showcase project click": {
		projectName: string;
		isVisual: boolean;
	};
	"showcase project selection": {
		projectName: string;
	};
	// TODO: implement
	"blog article click from index": {
		articlePath: string;
	};
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
