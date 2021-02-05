import { ActivitySchema } from "./Activity";

export const IdentifySchema = {
	token: String,
	properties: {
		// bruh discord really uses $ in the property key, so we need to double prefix it, because instanceOf treats $ (prefix) as a optional key
		$$os: String,
		$$browser: String,
		$$device: String,
	},
	intents: BigInt, // discord uses a Integer for bitfields we use bigints tho. | instanceOf will automatically convert the Number to a BigInt
	$presence: ActivitySchema,
	$compress: Boolean,
	$large_threshold: Number,
	$shard: [Number],
	$guild_subscriptions: Boolean,
};
