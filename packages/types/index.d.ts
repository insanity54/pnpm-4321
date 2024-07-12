



export interface IMuxAsset {
	id: number;
	attributes: {
		playbackId: string;
		assetId: string;
	}
}

export interface IPagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

export interface IMuxAssetResponse {
	data: IMuxAsset;
	meta: IMeta;
}

export interface IMeta {
	pagination: IPagination;
}



export interface IPlatformNotification {
    id: number;
    attributes: {
        source: string;
        platform: string;
        date: string;
		date2: string;
		vtuber: number;
    }
}

export interface IPlatformNotificationResponse {
    data: IPlatformNotification;
    meta: IMeta;
	error?: any;
}

export interface IStream {
    id: number;
    attributes: {
        date: string;
        date2: string;
        archiveStatus: 'good' | 'issue' | 'missing';
        vods: IVodsResponse;
        cuid: string;
        vtuber: IVtuberResponse;
        tweet: ITweetResponse;
        isChaturbateStream: boolean;
        isFanslyStream: boolean;
        platformNotifications: IPlatformNotification[];
    }
}

export interface IStreamResponse {
    data: IStream;
    meta: IMeta;
	error?: any;
}

export interface IStreamsResponse {
    data: IStream[];
    meta: IMeta;
}


export interface IVtuber {
    id: number;
    attributes: {
        slug: string;
        displayName: string;
        chaturbate?: string;
        twitter?: string;
        patreon?: string;
        twitch?: string;
        tiktok?: string;
        onlyfans?: string;
        youtube?: string;
        linktree?: string;
        carrd?: string;
        fansly?: string;
        pornhub?: string;
        discord?: string;
        reddit?: string;
        throne?: string;
        instagram?: string;
        facebook?: string;
        merch?: string;
        vods: IVod[];
        description1: string;
        description2?: string;
        image: string;
        imageBlur?: string;
        themeColor: string;
        fanslyId?: string;
        chaturbateId?: string;
        twitterId?: string;
    }
}

export interface IVtuberResponse {
    data: IVtuber;
    meta: IMeta;
}

export interface IVtubersResponse {
    data: IVtuber[];
    meta: IMeta;
}

export type NotificationData = {
	isMatch?: boolean;
	url: string;
	platform: string;
	channel: string;
	displayName: string;
	date: string;
	userId: string | null;
	avatar: string;
  };