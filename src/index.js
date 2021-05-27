'use strict';

const Util = require('./util/Util');

module.exports = {
  // "Root" classes (starting points)
  BaseClient: require('./client/BaseClient'),
  Client: require('./client/Client'),
  Shard: require('./sharding/Shard'),
  ShardClientUtil: require('./sharding/ShardClientUtil'),
  ShardingManager: require('./sharding/ShardingManager'),
  WebhookClient: require('./client/WebhookClient'),

  // Utilities
  ActivityFlags: require('./util/ActivityFlags'),
  ApplicationFlags: require('./util/ApplicationFlags'),
  BitField: require('./util/BitField'),
  Collection: require('./util/Collection'),
  Constants: require('./util/Constants'),
  DataResolver: require('./util/DataResolver'),
  BaseManager: require('./managers/BaseManager'),
  DiscordAPIError: require('./rest/DiscordAPIError'),
  HTTPError: require('./rest/HTTPError'),
  MessageFlags: require('./util/MessageFlags'),
  Intents: require('./util/Intents'),
  Permissions: require('./util/Permissions'),
  Speaking: require('./util/Speaking'),
  SnowflakeUtil: require('./util/SnowflakeUtil'),
  Structures: require('./util/Structures'),
  SystemChannelFlags: require('./util/SystemChannelFlags'),
  UserFlags: require('./util/UserFlags'),
  Util: Util,
  version: require('../package.json').version,

  // Managers
  ApplicationCommandManager: require('./managers/ApplicationCommandManager'),
  BaseGuildEmojiManager: require('./managers/BaseGuildEmojiManager'),
  ChannelManager: require('./managers/ChannelManager'),
  GuildApplicationCommandManager: require('./managers/GuildApplicationCommandManager'),
  GuildBanManager: require('./managers/GuildBanManager'),
  GuildChannelManager: require('./managers/GuildChannelManager'),
  GuildEmojiManager: require('./managers/GuildEmojiManager'),
  GuildEmojiRoleManager: require('./managers/GuildEmojiRoleManager'),
  GuildMemberManager: require('./managers/GuildMemberManager'),
  GuildMemberRoleManager: require('./managers/GuildMemberRoleManager'),
  GuildManager: require('./managers/GuildManager'),
  ReactionManager: require('./managers/ReactionManager'),
  ReactionUserManager: require('./managers/ReactionUserManager'),
  MessageManager: require('./managers/MessageManager'),
  PresenceManager: require('./managers/PresenceManager'),
  RoleManager: require('./managers/RoleManager'),
  UserManager: require('./managers/UserManager'),

  // Shortcuts to Util methods
  discordSort: Util.discordSort,
  escapeMarkdown: Util.escapeMarkdown,
  fetchRecommendedShards: Util.fetchRecommendedShards,
  resolveColor: Util.resolveColor,
  resolveString: Util.resolveString,
  splitMessage: Util.splitMessage,

  // Structures
  Application: require('./structures/interfaces/Application'),
  ApplicationCommand: require('./structures/ApplicationCommand'),
  Base: require('./structures/Base'),
  Activity: require('./structures/Presence').Activity,
  APIMessage: require('./structures/APIMessage'),
  BaseGuildEmoji: require('./structures/BaseGuildEmoji'),
  BaseGuildVoiceChannel: require('./structures/BaseGuildVoiceChannel'),
  CategoryChannel: require('./structures/CategoryChannel'),
  Channel: require('./structures/Channel'),
  ClientApplication: require('./structures/ClientApplication'),
  get ClientUser() {
    // This is a getter so that it properly extends any custom User class
    return require('./structures/ClientUser');
  },
  Collector: require('./structures/interfaces/Collector'),
  CommandInteraction: require('./structures/CommandInteraction'),
  DMChannel: require('./structures/DMChannel'),
  Emoji: require('./structures/Emoji'),
  Guild: require('./structures/Guild'),
  GuildAuditLogs: require('./structures/GuildAuditLogs'),
  GuildBan: require('./structures/GuildBan'),
  GuildChannel: require('./structures/GuildChannel'),
  GuildEmoji: require('./structures/GuildEmoji'),
  GuildMember: require('./structures/GuildMember'),
  GuildPreview: require('./structures/GuildPreview'),
  GuildTemplate: require('./structures/GuildTemplate'),
  Integration: require('./structures/Integration'),
  IntegrationApplication: require('./structures/IntegrationApplication'),
  Interaction: require('./structures/Interaction'),
  Invite: require('./structures/Invite'),
  Message: require('./structures/Message'),
  MessageAttachment: require('./structures/MessageAttachment'),
  MessageCollector: require('./structures/MessageCollector'),
  MessageEmbed: require('./structures/MessageEmbed'),
  MessageMentions: require('./structures/MessageMentions'),
  MessageReaction: require('./structures/MessageReaction'),
  NewsChannel: require('./structures/NewsChannel'),
  PermissionOverwrites: require('./structures/PermissionOverwrites'),
  Presence: require('./structures/Presence').Presence,
  ClientPresence: require('./structures/ClientPresence'),
  ReactionCollector: require('./structures/ReactionCollector'),
  ReactionEmoji: require('./structures/ReactionEmoji'),
  RichPresenceAssets: require('./structures/Presence').RichPresenceAssets,
  Role: require('./structures/Role'),
  Sticker: require('./structures/Sticker'),
  StoreChannel: require('./structures/StoreChannel'),
  StageChannel: require('./structures/StageChannel'),
  Team: require('./structures/Team'),
  TeamMember: require('./structures/TeamMember'),
  TextChannel: require('./structures/TextChannel'),
  User: require('./structures/User'),
  VoiceChannel: require('./structures/VoiceChannel'),
  VoiceRegion: require('./structures/VoiceRegion'),
  VoiceState: require('./structures/VoiceState'),
  Webhook: require('./structures/Webhook'),
  Widget: require('./structures/Widget'),

  WebSocket: require('./WebSocket'),
};
