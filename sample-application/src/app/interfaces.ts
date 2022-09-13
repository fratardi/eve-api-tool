export interface Welcome {
    basePath:            string;
    consumes:            string[];
    definitions:         Definitions;
    host:                string;
    info:                Info;
    parameters:          Parameters;
    paths:               Paths;
    produces:            string[];
    schemes:             string[];
    securityDefinitions: SecurityDefinitions;
    swagger:             string;
}

export interface Definitions {
    bad_request:           BadRequest;
    error_limited:         BadRequest;
    forbidden:             Forbidden;
    gateway_timeout:       GatewayTimeout;
    internal_server_error: BadRequest;
    service_unavailable:   BadRequest;
    unauthorized:          BadRequest;
}

export interface BadRequest {
    description: string;
    properties:  BadRequestProperties;
    required:    string[];
    title:       Title;
    type:        Type;
}

export interface BadRequestProperties {
    error: ErrorClass;
}

export interface ErrorClass {
    description: ErrorDescription;
    type:        Type;
}

export enum ErrorDescription {
    BadRequestMessage = "Bad request message",
    ErrorLimitedMessage = "Error limited message",
    ForbiddenMessage = "Forbidden message",
    GatewayTimeoutMessage = "Gateway timeout message",
    InternalServerErrorMessage = "Internal server error message",
    NumberOfSecondsTheRequestWasGiven = "number of seconds the request was given",
    RFC7231FormattedDatetimeString = "RFC7231 formatted datetime string",
    RFC7232CompliantEntityTag = "RFC7232 compliant entity tag",
    ServiceUnavailableMessage = "Service unavailable message",
    StatusCodeReceivedFromSSO = "status code received from SSO",
    TheCachingMechanismUsed = "The caching mechanism used",
    UnauthorizedMessage = "Unauthorized message",
}

export enum Type {
    Array = "array",
    Boolean = "boolean",
    Integer = "integer",
    Number = "number",
    Object = "object",
    String = "string",
}

export enum Title {
    ACollectionOfEventSummaries = "A collection of event summaries",
    AListOfAllianceContactLabels = "A list of alliance contact labels",
    AListOfAncestries = "A list of ancestries",
    AListOfBloodlines = "A list of bloodlines",
    AListOfBlueprints = "A list of blueprints",
    AListOfBookmarks = "A list of bookmarks",
    AListOfCharacterRaces = "A list of character races",
    AListOfContactLabels = "A list of contact labels",
    AListOfContacts = "A list of contacts",
    AListOfContracts = "A list of contracts",
    AListOfCorporationContactLabels = "A list of corporation contact labels",
    AListOfCorporationIndustryJobs = "A list of corporation industry jobs",
    AListOfCostIndicies = "A list of cost indicies",
    AListOfFacilities = "A list of facilities",
    AListOfFactions = "A list of factions",
    AListOfFittings = "A list of fittings",
    AListOfIncursions = "A list of incursions",
    AListOfInsuranceLevelsForAllShipTypes = "A list of insurance levels for all ship types",
    AListOfKillmailIDsAndHashes = "A list of killmail IDs and hashes",
    AListOfLoyaltyPoints = "A list of loyalty points",
    AListOfMedals = "A list of medals",
    AListOfNPCFactionsAtWar = "A list of NPC factions at war",
    AListOfOpenMarketOrders = "A list of open market orders",
    AListOfOpportunitiesTaskIDS = "A list of opportunities task ids",
    AListOfOrders = "A list of orders",
    AListOfPrices = "A list of prices",
    AListOfSovereigntyCampaigns = "A list of sovereignty campaigns",
    AListOfSovereigntyInformationForSolarSystemsInNewEden = "A list of sovereignty information for solar systems in New Eden",
    AListOfSovereigntyStructures = "A list of sovereignty structures",
    AListOfStandings = "A list of standings",
    AListOfSystemsAndNumberOfJumps = "A list of systems and number of jumps",
    AListOfSystemsAndNumberOfShipPodAndNPCKills = "A list of systems and number of ship, pod and NPC kills",
    AllFactionWarfareSolarSystems = "All faction warfare solar systems",
    AllianceHistoryForTheGivenCorporation = "Alliance history for the given corporation",
    AttributesOfACharacter = "Attributes of a character",
    BadRequest = "Bad request",
    CharacterCorporationAllianceAndFactionIDs = "Character corporation, alliance and faction IDs",
    CloneInformationForTheGivenCharacter = "Clone information for the given character",
    ContactsDeleted = "Contacts deleted",
    ContactsUpdated = "Contacts updated",
    ContractExpiredOrRecentlyAcceptedByPlayer = "Contract expired or recently accepted by player",
    CorporationHistoryForTheGivenCharacter = "Corporation history for the given character",
    DetailsOfAnOpportunitiesGroup = "Details of an opportunities group",
    DetailsOfAnOpportunitiesTask = "Details of an opportunities task",
    ErrorLimited = "Error limited",
    EventUpdated = "Event updated",
    FittingDeleted = "Fitting deleted",
    FleetInvitationSent = "Fleet invitation sent",
    FleetMemberKicked = "Fleet member kicked",
    FleetUpdated = "Fleet updated",
    Forbidden = "Forbidden",
    GatewayTimeout = "Gateway timeout",
    InformationAboutAStar = "Information about a star",
    InternalServerError = "Internal server error",
    JumpActivationAndFatigueInformation = "Jump activation and fatigue information",
    LabelDeleted = "Label deleted",
    ListOfAllianceIDs = "List of Alliance IDs",
    ListOfColonies = "List of colonies",
    ListOfCorporationBlueprints = "List of corporation blueprints",
    ListOfCorporationFacilities = "List of corporation facilities",
    ListOfCorporationIDs = "List of corporation IDs",
    ListOfCorporationOwnedBookmarks = "List of corporation owned bookmarks",
    ListOfCorporationWallets = "List of corporation wallets",
    ListOfPublicStructureIDs = "List of public structure IDs",
    ListOfRoleChanges = "List of role changes",
    MailDeleted = "Mail deleted",
    MailUpdated = "Mail updated",
    NotModified = "Not modified",
    ObserverListOfACorporation = "Observer list of a corporation",
    OpenWindowRequestReceived = "Open window request received",
    PerFactionBreakdownOfFactionWarfareStatistics = "Per faction breakdown of faction warfare statistics",
    ServerStatus = "Server status",
    ServiceUnavailable = "Service unavailable",
    SquadDeleted = "Squad deleted",
    SquadRenamed = "Squad renamed",
    TheCharacterSRolesInThierCorporation = "The character's roles in thier corporation",
    Unauthorized = "Unauthorized",
    WalletTransactions = "Wallet transactions",
    WingDeleted = "Wing deleted",
    WingRenamed = "Wing renamed",
}

export interface Forbidden {
    description: string;
    properties:  ForbiddenProperties;
    required:    string[];
    title:       Title;
    type:        Type;
}

export interface ForbiddenProperties {
    error:      ErrorClass;
    sso_status: ErrorClass;
}

export interface GatewayTimeout {
    description: string;
    properties:  GatewayTimeoutProperties;
    required:    string[];
    title:       Title;
    type:        Type;
}

export interface GatewayTimeoutProperties {
    error:   ErrorClass;
    timeout: ErrorClass;
}

export interface Info {
    description: string;
    title:       string;
    version:     string;
}

export interface Parameters {
    "Accept-Language": AcceptLanguage;
    "If-None-Match":   IfNoneMatch;
    alliance_id:       AllianceID;
    character_id:      AllianceID;
    corporation_id:    AllianceID;
    datasource:        AcceptLanguage;
    language:          AcceptLanguage;
    page:              AllianceID;
    token:             IfNoneMatch;
}

export interface AcceptLanguage {
    default:     DefaultElement;
    description: string;
    enum:        DefaultElement[];
    in:          string;
    name:        string;
    type:        Type;
}

export enum DefaultElement {
    De = "de",
    En = "en",
    EnUs = "en-us",
    Es = "es",
    Fr = "fr",
    Ja = "ja",
    Ko = "ko",
    Ru = "ru",
    Tranquility = "tranquility",
    Zh = "zh",
}

export interface IfNoneMatch {
    description: string;
    in:          string;
    name:        string;
    type:        Type;
}

export interface AllianceID {
    description?: string;
    format?:      Format;
    in?:          In;
    minimum?:     number;
    name?:        string;
    required?:    boolean;
    type?:        Type;
    default?:     boolean | number | string;
    $ref?:        Ref;
    schema?:      AllianceIDSchema;
    maximum?:     number;
    enum?:        string[];
    items?:       AllianceIDItems;
    maxItems?:    number;
    uniqueItems?: boolean;
}

export enum Ref {
    DefinitionsBadRequest = "#/definitions/bad_request",
    DefinitionsErrorLimited = "#/definitions/error_limited",
    DefinitionsForbidden = "#/definitions/forbidden",
    DefinitionsGatewayTimeout = "#/definitions/gateway_timeout",
    DefinitionsInternalServerError = "#/definitions/internal_server_error",
    DefinitionsServiceUnavailable = "#/definitions/service_unavailable",
    DefinitionsUnauthorized = "#/definitions/unauthorized",
    ParametersAcceptLanguage = "#/parameters/Accept-Language",
    ParametersAllianceID = "#/parameters/alliance_id",
    ParametersCharacterID = "#/parameters/character_id",
    ParametersCorporationID = "#/parameters/corporation_id",
    ParametersDatasource = "#/parameters/datasource",
    ParametersIfNoneMatch = "#/parameters/If-None-Match",
    ParametersLanguage = "#/parameters/language",
    ParametersPage = "#/parameters/page",
    ParametersToken = "#/parameters/token",
}

export enum Format {
    Date = "date",
    DateTime = "date-time",
    Double = "double",
    Float = "float",
    Int32 = "int32",
    Int64 = "int64",
}

export enum In {
    Body = "body",
    Path = "path",
    Query = "query",
}

export interface AllianceIDItems {
    format?:           Format;
    type:              Type;
    collectionFormat?: string;
    items?:            PurpleItems;
    maxItems?:         number;
    minItems?:         number;
    uniqueItems?:      boolean;
}

export interface PurpleItems {
    format: Format;
    type:   Type;
}

export interface AllianceIDSchema {
    description:  string;
    properties?:  PurpleProperties;
    required?:    string[];
    title:        string;
    type:         Type;
    example?:     Array<number | string>;
    items?:       FluffyItems;
    maxItems?:    number;
    minItems?:    number;
    uniqueItems?: boolean;
}

export interface FluffyItems {
    description: string;
    maxLength?:  number;
    minLength?:  number;
    title:       string;
    type:        Type;
    format?:     Format;
}

export interface PurpleProperties {
    response?:               ApprovedCost;
    approved_cost?:          ApprovedCost;
    body?:                   SubjectClass;
    recipients?:             FluffyRecipients;
    subject?:                SubjectClass;
    color?:                  ApprovedCost;
    name?:                   PurpleName;
    labels?:                 PurpleLabels;
    read?:                   ApprovedCost;
    is_free_move?:           ApprovedCost;
    motd?:                   ApprovedCost;
    character_id?:           ApprovedCost;
    role?:                   ApprovedCost;
    squad_id?:               ApprovedCost;
    wing_id?:                ApprovedCost;
    to_corp_or_alliance_id?: ToCorpOrAllianceID;
    to_mailing_list_id?:     ToCorpOrAllianceID;
}

export interface FluffyLabels {
    description:  string;
    items:        EventResponseClass;
    maxItems:     number;
    minimum?:     number;
    title:        string;
    type:         Type;
    uniqueItems?: boolean;
}

export interface TentacledProperties {
    division: ApprovedCost;
    name:     ApprovedCost;
}

export interface HangarItems {
    description: string;
    properties:  TentacledProperties;
    title:       string;
    type:        Type;
}

export interface PropertiesHangar {
    description: string;
    items:       HangarItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface BodyProperties {
    event_date?:               ApprovedCost;
    event_id?:                 ApprovedCost;
    event_response?:           ApprovedCost;
    importance?:               ApprovedCost;
    title?:                    ApprovedCost;
    error?:                    EventResponseClass;
    location_id?:              ApprovedCost;
    location_type?:            ApprovedCost;
    jump_fatigue_expire_date?: ApprovedCost;
    last_jump_date?:           ApprovedCost;
    last_update_date?:         ApprovedCost;
    color?:                    ApprovedCost;
    label_id?:                 ApprovedCost;
    name?:                     SubjectClass;
    unread_count?:             ApprovedCost;
    labels?:                   PurpleLabels;
    read?:                     ApprovedCost;
    roles?:                    Roles;
    roles_at_base?:            Roles;
    roles_at_hq?:              Roles;
    roles_at_other?:           Roles;
    title_id?:                 CharacterID;
    division?:                 ApprovedCost;
    grantable_roles?:          Roles;
    grantable_roles_at_base?:  Roles;
    grantable_roles_at_hq?:    Roles;
    grantable_roles_at_other?: Roles;
    is_free_move?:             ApprovedCost;
    motd?:                     ApprovedCost;
    amount?:                   CharacterID;
    faction_id?:               EventResponseClass;
    character_id?:             ApprovedCost;
    corporation_id?:           EventResponseClass;
    agents?:                   Agents;
    alliances?:                Agents;
    characters?:               Agents;
    constellations?:           Agents;
    corporations?:             Agents;
    factions?:                 Agents;
    inventory_types?:          Agents;
    regions?:                  Agents;
    stations?:                 Agents;
    systems?:                  Agents;
}

export interface EventResponseClass {
    description:  string;
    format?:      Format;
    minimum?:     number;
    title?:       string;
    type:         Type;
    uniqueItems?: boolean;
    maximum?:     number;
    properties?:  BodyProperties;
    enum?:        string[];
    default?:     number;
    maxLength?:   number;
}

export interface ApprovedCostProperties {
    error?:              ApprovedCost;
    px128x128?:          Px128X128;
    px64x64?:            Px128X128;
    character_id?:       CharacterID;
    event_response?:     EventResponseClass;
    from?:               EventResponseClass;
    is_read?:            EventResponseClass;
    labels?:             FluffyLabels;
    mail_id?:            EventResponseClass;
    recipients?:         PurpleRecipients;
    subject?:            Px128X128;
    timestamp?:          CharacterID;
    total_unread_count?: ApprovedCost;
    body?:               EventResponseClass;
    read?:               EventResponseClass;
    px256x256?:          Px128X128;
    px512x512?:          EventResponseClass;
    agent?:              AgentClass;
    alliance?:           Alliance;
    character?:          Alliance;
    constellation?:      Alliance;
    corporation?:        Alliance;
    faction?:            Alliance;
    inventory_type?:     Alliance;
    region?:             Alliance;
    solar_system?:       Alliance;
    station?:            Alliance;
    structure?:          Alliance;
    hangar?:             PropertiesHangar;
    wallet?:             PropertiesHangar;
    division?:           ApprovedCost;
    name?:               ApprovedCost;
    amount?:             ApprovedCost;
    faction_id?:         ApprovedCost;
    corporation_id?:     ApprovedCost;
}

export interface ApprovedCost {
    description:   string;
    format?:       Format;
    title?:        string;
    type:          Type;
    properties?:   ApprovedCostProperties;
    default?:      number | string;
    enum?:         string[];
    maxLength?:    number;
    minimum?:      number;
    minLength?:    number;
    uniqueItems?:  boolean;
    maximum?:      number;
    "x-nullable"?: boolean;
}

export interface Agents {
    description: string;
    items:       OwnerIDClass;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface FluffyProperties {
    id?:    CharacterID;
    name?:  Px128X128;
    error?: OwnerIDClass;
}

export interface OwnerIDClass {
    description: string;
    properties?: FluffyProperties;
    required?:   string[];
    title:       string;
    type:        Type;
    format?:     Format;
    enum?:       string[];
}

export interface CharacterID {
    description: string;
    format:      Format;
    title:       string;
    type:        Type;
}

export interface Px128X128 {
    description: string;
    title:       string;
    type:        Type;
}

export interface Roles {
    description: string;
    items:       RolesItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface RolesItems {
    description: string;
    enum:        string[];
    title:       string;
    type:        Type;
    uniqueItems: boolean;
}

export interface PurpleLabels {
    description: string;
    items:       LabelsItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface LabelsItems {
    description: string;
    format:      Format;
    minimum:     number;
    title:       string;
    type:        Type;
    uniqueItems: boolean;
}

export interface SubjectClass {
    description: string;
    maxLength?:  number;
    title:       string;
    type:        Type;
}

export interface AgentClass {
    description:  string;
    items:        CharacterID;
    maxItems:     number;
    minItems?:    number;
    title:        string;
    type:         Type;
    uniqueItems?: boolean;
    minimum?:     number;
    example?:     number[];
}

export interface Alliance {
    description: string;
    items:       CharacterID;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface PurpleRecipients {
    description:  string;
    items:        TentacledItems;
    maxItems:     number;
    minItems:     number;
    title:        string;
    type:         Type;
    uniqueItems?: boolean;
}

export interface TentacledItems {
    description: string;
    properties:  StickyProperties;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface StickyProperties {
    recipient_id:   CharacterID;
    recipient_type: RecipientType;
}

export interface RecipientType {
    description: string;
    enum:        string[];
    title:       string;
    type:        Type;
}

export interface PurpleName {
    description: string;
    maxLength:   number;
    minLength?:  number;
    title:       string;
    type:        Type;
}

export interface FluffyRecipients {
    description: string;
    items:       StickyItems;
    maxItems:    number;
    minItems:    number;
    title:       string;
    type:        Type;
}

export interface StickyItems {
    description: string;
    properties?: StickyProperties;
    required?:   string[];
    title:       string;
    type:        Type;
    format?:     Format;
}

export interface ToCorpOrAllianceIDProperties {
    error?:          ToCorpOrAllianceID;
    amount?:         CharacterID;
    faction_id?:     ApprovedCost;
    character_id?:   ToCorpOrAllianceID;
    corporation_id?: ApprovedCost;
    alliance_id?:    ApprovedCost;
}

export interface ToCorpOrAllianceID {
    description: string;
    maxLength?:  number;
    minLength?:  number;
    title?:      string;
    type:        Type;
    properties?: ToCorpOrAllianceIDProperties;
    format?:     Format;
    enum?:       string[];
    minimum?:    number;
    default?:    number;
}

export interface Paths {
    "/alliances/":                                                     Alliances;
    "/alliances/{alliance_id}/":                                       AlliancesAllianceID;
    "/alliances/{alliance_id}/contacts/":                              AlliancesAllianceIDContacts;
    "/alliances/{alliance_id}/contacts/labels/":                       IDContactsLabels;
    "/alliances/{alliance_id}/corporations/":                          Alliances;
    "/alliances/{alliance_id}/icons/":                                 AlliancesAllianceIDIcons;
    "/characters/affiliation/":                                        CharactersAffiliation;
    "/characters/{character_id}/":                                     CharactersCharacterID;
    "/characters/{character_id}/agents_research/":                     CharactersCharacterIDAgentsResearch;
    "/characters/{character_id}/assets/":                              CharactersCharacterIDAssets;
    "/characters/{character_id}/assets/locations/":                    CharactersCharacterIDAssetsLocations;
    "/characters/{character_id}/assets/names/":                        CharactersCharacterIDAssetsNamesClass;
    "/characters/{character_id}/attributes/":                          CharactersCharacterIDAttributesClass;
    "/characters/{character_id}/blueprints/":                          IDBlueprints;
    "/characters/{character_id}/bookmarks/":                           IDBookmarks;
    "/characters/{character_id}/bookmarks/folders/":                   CharactersCharacterIDBookmarksFoldersClass;
    "/characters/{character_id}/calendar/":                            CharactersCharacterIDCalendar;
    "/characters/{character_id}/calendar/{event_id}/":                 CharactersCharacterIDCalendarEventID;
    "/characters/{character_id}/calendar/{event_id}/attendees/":       CharactersCharacterIDCalendarEventIDAttendees;
    "/characters/{character_id}/clones/":                              AlliancesAllianceIDContacts;
    "/characters/{character_id}/contacts/":                            CharactersCharacterIDContacts;
    "/characters/{character_id}/contacts/labels/":                     IDContactsLabels;
    "/characters/{character_id}/contracts/":                           CharactersCharacterIDContractsClass;
    "/characters/{character_id}/contracts/{contract_id}/bids/":        CharactersCharacterIDContractsContractIDBids;
    "/characters/{character_id}/contracts/{contract_id}/items/":       CharactersCharacterIDContractsContractIDItems;
    "/characters/{character_id}/corporationhistory/":                  History;
    "/characters/{character_id}/cspa/":                                CharactersCharacterIDAssetsNamesClass;
    "/characters/{character_id}/fatigue/":                             AlliancesAllianceIDContacts;
    "/characters/{character_id}/fittings/":                            CharactersCharacterIDFittings;
    "/characters/{character_id}/fittings/{fitting_id}/":               CharactersCharacterIDFittingsFittingID;
    "/characters/{character_id}/fleet/":                               CharactersCharacterIDFleet;
    "/characters/{character_id}/fw/stats/":                            CharactersCharacterIDFwStats;
    "/characters/{character_id}/implants/":                            CharactersCharacterIDImplants;
    "/characters/{character_id}/industry/jobs/":                       CharactersCharacterIDIndustryJobs;
    "/characters/{character_id}/killmails/recent/":                    IDKillmailsRecent;
    "/characters/{character_id}/location/":                            CharactersCharacterIDLocationClass;
    "/characters/{character_id}/loyalty/points/":                      AlliancesAllianceIDContacts;
    "/characters/{character_id}/mail/":                                CharactersCharacterIDMail;
    "/characters/{character_id}/mail/labels/":                         CharactersCharacterIDMailLabels;
    "/characters/{character_id}/mail/labels/{label_id}/":              CharactersCharacterIDMailLabelsLabelID;
    "/characters/{character_id}/mail/lists/":                          CharactersCharacterIDBookmarksFoldersClass;
    "/characters/{character_id}/mail/{mail_id}/":                      CharactersCharacterIDMailMailID;
    "/characters/{character_id}/medals/":                              CharactersCharacterIDAttributesClass;
    "/characters/{character_id}/mining/":                              CharactersCharacterIDMining;
    "/characters/{character_id}/notifications/":                       CharactersCharacterIDAgentsResearch;
    "/characters/{character_id}/notifications/contacts/":              CharactersCharacterIDContractsClass;
    "/characters/{character_id}/online/":                              CharactersCharacterIDLocationClass;
    "/characters/{character_id}/opportunities/":                       AlliancesAllianceIDContacts;
    "/characters/{character_id}/orders/":                              CharactersCharacterIDOrdersClass;
    "/characters/{character_id}/orders/history/":                      CharactersCharacterIDOrdersHistory;
    "/characters/{character_id}/planets/":                             CharactersCharacterIDPlanets;
    "/characters/{character_id}/planets/{planet_id}/":                 CharactersCharacterIDPlanetsPlanetID;
    "/characters/{character_id}/portrait/":                            CharactersCharacterIDPortrait;
    "/characters/{character_id}/roles/":                               CharactersCharacterIDAttributesClass;
    "/characters/{character_id}/search/":                              CharactersCharacterIDSearch;
    "/characters/{character_id}/ship/":                                CharactersCharacterIDAgentsResearch;
    "/characters/{character_id}/skillqueue/":                          CharactersCharacterIDContractsClass;
    "/characters/{character_id}/skills/":                              CharactersCharacterIDLocationClass;
    "/characters/{character_id}/standings/":                           AlliancesAllianceIDContacts;
    "/characters/{character_id}/titles/":                              CharactersCharacterIDOrdersClass;
    "/characters/{character_id}/wallet/":                              CharactersCharacterIDWallet;
    "/characters/{character_id}/wallet/journal/":                      CharactersCharacterIDOrdersHistory;
    "/characters/{character_id}/wallet/transactions/":                 CharactersCharacterIDCalendar;
    "/contracts/public/bids/{contract_id}/":                           ContractsPublicBidsContractID;
    "/contracts/public/items/{contract_id}/":                          ContractsPublicItemsContractID;
    "/contracts/public/{region_id}/":                                  ContractsPublicRegionID;
    "/corporation/{corporation_id}/mining/extractions/":               CorporationCorporationIDMiningExtractionsClass;
    "/corporation/{corporation_id}/mining/observers/":                 CorporationCorporationIDMiningObserversClass;
    "/corporation/{corporation_id}/mining/observers/{observer_id}/":   CorporationCorporationIDMiningObserversObserverID;
    "/corporations/npccorps/":                                         CorporationsNpccorps;
    "/corporations/{corporation_id}/":                                 CorporationsCorporationID;
    "/corporations/{corporation_id}/alliancehistory/":                 History;
    "/corporations/{corporation_id}/assets/":                          CorporationsCorporationIDAssets;
    "/corporations/{corporation_id}/assets/locations/":                CorporationsCorporationIDAssetsLocationsClass;
    "/corporations/{corporation_id}/assets/names/":                    CorporationsCorporationIDAssetsLocationsClass;
    "/corporations/{corporation_id}/blueprints/":                      IDBlueprints;
    "/corporations/{corporation_id}/bookmarks/":                       IDBookmarks;
    "/corporations/{corporation_id}/bookmarks/folders/":               CharactersCharacterIDAgentsResearch;
    "/corporations/{corporation_id}/contacts/":                        CorporationsCorporationIDContactsClass;
    "/corporations/{corporation_id}/contacts/labels/":                 IDContactsLabels;
    "/corporations/{corporation_id}/containers/logs/":                 CorporationsCorporationIDContainersLogsClass;
    "/corporations/{corporation_id}/contracts/":                       CorporationsCorporationIDContractsClass;
    "/corporations/{corporation_id}/contracts/{contract_id}/bids/":    CorporationsCorporationIDContractsContractIDBids;
    "/corporations/{corporation_id}/contracts/{contract_id}/items/":   CorporationsCorporationIDContractsContractIDItems;
    "/corporations/{corporation_id}/customs_offices/":                 CorporationsCorporationIDCustomsOfficesClass;
    "/corporations/{corporation_id}/divisions/":                       CorporationsCorporationIDDivisions;
    "/corporations/{corporation_id}/facilities/":                      CorporationsCorporationIDFacilitiesClass;
    "/corporations/{corporation_id}/fw/stats/":                        CorporationsCorporationIDFwStats;
    "/corporations/{corporation_id}/icons/":                           CorporationsCorporationIDIcons;
    "/corporations/{corporation_id}/industry/jobs/":                   CorporationsCorporationIDIndustryJobs;
    "/corporations/{corporation_id}/killmails/recent/":                IDKillmailsRecent;
    "/corporations/{corporation_id}/medals/":                          CorporationsCorporationIDMedalsClass;
    "/corporations/{corporation_id}/medals/issued/":                   CorporationsCorporationIDMedalsIssued;
    "/corporations/{corporation_id}/members/":                         CharactersCharacterIDImplants;
    "/corporations/{corporation_id}/members/limit/":                   CharactersCharacterIDWallet;
    "/corporations/{corporation_id}/members/titles/":                  CorporationsCorporationIDContactsClass;
    "/corporations/{corporation_id}/membertracking/":                  CorporationsCorporationIDContainersLogsClass;
    "/corporations/{corporation_id}/orders/":                          CorporationsCorporationIDContractsClass;
    "/corporations/{corporation_id}/orders/history/":                  CorporationsCorporationIDCustomsOfficesClass;
    "/corporations/{corporation_id}/roles/":                           CharactersCharacterIDOrdersHistory;
    "/corporations/{corporation_id}/roles/history/":                   CorporationsCorporationIDFacilitiesClass;
    "/corporations/{corporation_id}/shareholders/":                    CorporationCorporationIDMiningExtractionsClass;
    "/corporations/{corporation_id}/standings/":                       CorporationCorporationIDMiningObserversClass;
    "/corporations/{corporation_id}/starbases/":                       CorporationsCorporationIDMedalsClass;
    "/corporations/{corporation_id}/starbases/{starbase_id}/":         CorporationsCorporationIDStarbasesStarbaseID;
    "/corporations/{corporation_id}/structures/":                      CorporationsCorporationIDContactsClass;
    "/corporations/{corporation_id}/titles/":                          CorporationsCorporationIDContainersLogsClass;
    "/corporations/{corporation_id}/wallets/":                         CorporationsCorporationIDContractsClass;
    "/corporations/{corporation_id}/wallets/{division}/journal/":      CorporationsCorporationIDWalletsDivision;
    "/corporations/{corporation_id}/wallets/{division}/transactions/": CorporationsCorporationIDWalletsDivision;
    "/dogma/attributes/":                                              CorporationsNpccorps;
    "/dogma/attributes/{attribute_id}/":                               DogmaAttributesAttributeID;
    "/dogma/dynamic/items/{type_id}/{item_id}/":                       DogmaDynamicItemsTypeIDItemID;
    "/dogma/effects/":                                                 CorporationsNpccorps;
    "/dogma/effects/{effect_id}/":                                     DogmaEffectsEffectID;
    "/fleets/{fleet_id}/":                                             FleetsFleetID;
    "/fleets/{fleet_id}/members/":                                     FleetsFleetIDMembers;
    "/fleets/{fleet_id}/members/{member_id}/":                         FleetsFleetIDMembersMemberID;
    "/fleets/{fleet_id}/squads/{squad_id}/":                           FleetsFleetIDID;
    "/fleets/{fleet_id}/wings/":                                       FleetsFleetIDWings;
    "/fleets/{fleet_id}/wings/{wing_id}/":                             FleetsFleetIDID;
    "/fleets/{fleet_id}/wings/{wing_id}/squads/":                      FleetsFleetIDWingsWingIDSquads;
    "/fw/leaderboards/":                                               FwLeaderboards;
    "/fw/leaderboards/characters/":                                    FwLeaderboardsCharacters;
    "/fw/leaderboards/corporations/":                                  FwLeaderboardsCorporations;
    "/fw/stats/":                                                      FwStats;
    "/fw/systems/":                                                    FwSystems;
    "/fw/wars/":                                                       FwWars;
    "/incursions/":                                                    Incursions;
    "/industry/facilities/":                                           IndustryFacilities;
    "/industry/systems/":                                              IndustrySystems;
    "/insurance/prices/":                                              InsurancePrices;
    "/killmails/{killmail_id}/{killmail_hash}/":                       KillmailsKillmailIDKillmailHash;
    "/loyalty/stores/{corporation_id}/offers/":                        LoyaltyStoresCorporationIDOffers;
    "/markets/groups/":                                                CorporationsNpccorps;
    "/markets/groups/{market_group_id}/":                              MarketsGroupsMarketGroupID;
    "/markets/prices/":                                                MarketsPrices;
    "/markets/structures/{structure_id}/":                             CharactersCharacterIDCalendar;
    "/markets/{region_id}/history/":                                   MarketsRegionIDHistory;
    "/markets/{region_id}/orders/":                                    MarketsRegionIDOrders;
    "/markets/{region_id}/types/":                                     MarketsRegionIDTypes;
    "/opportunities/groups/":                                          CorporationsNpccorps;
    "/opportunities/groups/{group_id}/":                               OpportunitiesGroupsGroupID;
    "/opportunities/tasks/":                                           CorporationsNpccorps;
    "/opportunities/tasks/{task_id}/":                                 OpportunitiesTasksTaskID;
    "/route/{origin}/{destination}/":                                  RouteOriginDestination;
    "/sovereignty/campaigns/":                                         SovereigntyCampaigns;
    "/sovereignty/map/":                                               SovereigntyMap;
    "/sovereignty/structures/":                                        SovereigntyStructures;
    "/status/":                                                        Status;
    "/ui/autopilot/waypoint/":                                         UIAutopilotWaypoint;
    "/ui/openwindow/contract/":                                        UIOpenwindow;
    "/ui/openwindow/information/":                                     UIOpenwindow;
    "/ui/openwindow/marketdetails/":                                   UIOpenwindow;
    "/ui/openwindow/newmail/":                                         UIOpenwindowNewmail;
    "/universe/ancestries/":                                           UniverseAncestries;
    "/universe/asteroid_belts/{asteroid_belt_id}/":                    UniverseID;
    "/universe/bloodlines/":                                           UniverseBloodlines;
    "/universe/categories/":                                           CorporationsNpccorps;
    "/universe/categories/{category_id}/":                             UniverseCategoriesCategoryID;
    "/universe/constellations/":                                       CorporationsNpccorps;
    "/universe/constellations/{constellation_id}/":                    UniverseConstellationsConstellationID;
    "/universe/factions/":                                             UniverseFactions;
    "/universe/graphics/":                                             CorporationsNpccorps;
    "/universe/graphics/{graphic_id}/":                                UniverseGraphicsGraphicID;
    "/universe/groups/":                                               CorporationsNpccorps;
    "/universe/groups/{group_id}/":                                    UniverseGroupsGroupID;
    "/universe/ids/":                                                  UniverseIDS;
    "/universe/moons/{moon_id}/":                                      UniverseID;
    "/universe/names/":                                                UniverseNames;
    "/universe/planets/{planet_id}/":                                  UniversePlanetsPlanetID;
    "/universe/races/":                                                UniverseRaces;
    "/universe/regions/":                                              CorporationsNpccorps;
    "/universe/regions/{region_id}/":                                  UniverseRegionsRegionID;
    "/universe/schematics/{schematic_id}/":                            UniverseSchematicsSchematicID;
    "/universe/stargates/{stargate_id}/":                              UniverseStargatesStargateID;
    "/universe/stars/{star_id}/":                                      UniverseStarsStarID;
    "/universe/stations/{station_id}/":                                UniverseStationsStationID;
    "/universe/structures/":                                           UniverseStructures;
    "/universe/structures/{structure_id}/":                            CharactersCharacterIDContractsContractIDBids;
    "/universe/system_jumps/":                                         UniverseSystemJumps;
    "/universe/system_kills/":                                         UniverseSystemKills;
    "/universe/systems/":                                              CorporationsNpccorps;
    "/universe/systems/{system_id}/":                                  UniverseSystemsSystemID;
    "/universe/types/":                                                CorporationsNpccorps;
    "/universe/types/{type_id}/":                                      UniverseTypesTypeID;
    "/wars/":                                                          RouteOriginDestination;
    "/wars/{war_id}/":                                                 WarsWarID;
    "/wars/{war_id}/killmails/":                                       WarsWarIDKillmails;
}

export interface Alliances {
    get: AlliancesGet;
}

export interface AlliancesGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: PurpleResponse };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface SchemaElement {
    $ref: Ref;
}

export interface PurpleResponse {
    description: Title;
    examples?:   PurpleExamples;
    headers?:    PurpleHeaders;
    schema?:     PurpleSchema;
}

export interface PurpleExamples {
    "application/json": number[] | PurpleApplicationJSON;
}

export interface PurpleApplicationJSON {
    error: ErrorEnum;
}

export enum ErrorEnum {
    BadRequestMessage = "Bad request message",
    ColonyNotFound = "Colony not found",
    Error520Message = "Error 520 message",
    ErrorLimitedMessage = "Error limited message",
    ForbiddenMessage = "Forbidden message",
    GatewayTimeoutMessage = "Gateway timeout message",
    InternalServerErrorMessage = "Internal server error message",
    MissingWingID = "missing wing_id",
    NoImageServerForThisDatasource = "No image server for this datasource",
    NotFoundMessage = "Not found message",
    RequestedPageDoesNotExist = "Requested page does not exist",
    SchematicNotFound = "Schematic not found",
    ServiceUnavailableMessage = "Service unavailable message",
    UnauthorizedMessage = "Unauthorized message",
    UnprocessableEntityMessage = "Unprocessable entity message",
}

export interface PurpleHeaders {
    "Cache-Control":     ErrorClass;
    ETag:                ErrorClass;
    Expires:             ErrorClass;
    "Last-Modified":     ErrorClass;
    "X-Pages"?:          XPages;
    "Content-Language"?: ContentLanguage;
}

export interface ContentLanguage {
    description: ContentLanguageDescription;
    enum:        DefaultElement[];
    type:        Type;
}

export enum ContentLanguageDescription {
    TheLanguageUsedInTheResponse = "The language used in the response",
}

export interface XPages {
    default:     number;
    description: XPagesDescription;
    format:      Format;
    type:        Type;
}

export enum XPagesDescription {
    MaximumPageNumber = "Maximum page number",
}

export interface PurpleSchema {
    description?: string;
    items?:       LabelsItems;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export enum XAlternateVersion {
    Dev = "dev",
    Legacy = "legacy",
    V1 = "v1",
    V2 = "v2",
    V3 = "v3",
    V4 = "v4",
    V5 = "v5",
    V6 = "v6",
}

export interface AlliancesAllianceID {
    get: AlliancesAllianceIDGet;
}

export interface AlliancesAllianceIDGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: FluffyResponse };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface FluffyResponse {
    description: string;
    examples?:   FluffyExamples;
    headers?:    PurpleHeaders;
    schema?:     FluffySchema;
}

export interface FluffyExamples {
    "application/json": FluffyApplicationJSON;
}

export interface FluffyApplicationJSON {
    creator_corporation_id?:  number;
    creator_id?:              number;
    date_founded?:            Date;
    executor_corporation_id?: number;
    name?:                    string;
    ticker?:                  string;
    error?:                   ErrorEnum;
}

export interface FluffySchema {
    description?: string;
    properties?:  IndigoProperties;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface IndigoProperties {
    creator_corporation_id?:  ApprovedCost;
    creator_id?:              ApprovedCost;
    date_founded?:            ApprovedCost;
    executor_corporation_id?: ApprovedCost;
    faction_id?:              ApprovedCost;
    name?:                    ApprovedCost;
    ticker?:                  ApprovedCost;
    error?:                   Px128X128;
}

export interface AlliancesAllianceIDContacts {
    get: AlliancesAllianceIDContactsGet;
}

export interface AlliancesAllianceIDContactsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: TentacledResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface TentacledResponse {
    description: Title;
    examples?:   TentacledExamples;
    headers?:    PurpleHeaders;
    schema?:     TentacledSchema;
}

export interface TentacledExamples {
    "application/json": TentacledApplicationJSON[] | StickyApplicationJSON;
}

export interface TentacledApplicationJSON {
    contact_id?:            number;
    contact_type?:          string;
    standing?:              number;
    corporation_id?:        number;
    loyalty_points?:        number;
    completed_at?:          Date;
    task_id?:               number;
    from_id?:               number;
    from_type?:             string;
    acceptor_id?:           number;
    assignee_id?:           number;
    availability?:          string;
    buyout?:                number;
    contract_id?:           number;
    date_expired?:          Date;
    date_issued?:           Date;
    days_to_complete?:      number;
    end_location_id?:       number;
    for_corporation?:       boolean;
    issuer_corporation_id?: number;
    issuer_id?:             number;
    price?:                 number;
    reward?:                number;
    start_location_id?:     number;
    status?:                string;
    type?:                  string;
    volume?:                number;
    duration?:              number;
    escrow?:                number;
    is_buy_order?:          boolean;
    issued?:                Date;
    issued_by?:             number;
    location_id?:           number;
    min_volume?:            number;
    order_id?:              number;
    range?:                 string;
    region_id?:             number;
    type_id?:               number;
    volume_remain?:         number;
    volume_total?:          number;
    wallet_division?:       number;
    balance?:               number;
    division?:              number;
}

export interface StickyApplicationJSON {
    home_location?:            HomeLocation;
    jump_clones?:              JumpClone[];
    jump_fatigue_expire_date?: Date;
    last_jump_date?:           Date;
    last_update_date?:         Date;
    error?:                    ErrorEnum;
}

export interface HomeLocation {
    location_id:   number;
    location_type: string;
}

export interface JumpClone {
    implants:      number[];
    jump_clone_id: number;
    location_id:   number;
    location_type: string;
}

export interface TentacledSchema {
    description?: string;
    items?:       IndigoItems;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    properties?:  HilariousProperties;
    required?:    string[];
    $ref?:        Ref;
}

export interface IndigoItems {
    description: PurpleDescription;
    properties:  IndecentProperties;
    required:    string[];
    title:       string;
    type:        Type;
}

export enum PurpleDescription {
    SolarSystemInRoute = "Solar system in route",
    The200OkInteger = "200 ok integer",
    The200OkObject = "200 ok object",
}

export interface IndecentProperties {
    contact_id?:            ApprovedCost;
    contact_type?:          ApprovedCost;
    label_ids?:             Alliance;
    standing?:              CharacterID;
    corporation_id?:        ApprovedCost;
    loyalty_points?:        ApprovedCost;
    completed_at?:          ApprovedCost;
    task_id?:               ApprovedCost;
    from_id?:               EventResponseClass;
    from_type?:             EventResponseClass;
    acceptor_id?:           ApprovedCost;
    assignee_id?:           ApprovedCost;
    availability?:          ApprovedCost;
    buyout?:                ApprovedCost;
    collateral?:            ApprovedCost;
    contract_id?:           ApprovedCost;
    date_accepted?:         ApprovedCost;
    date_completed?:        ApprovedCost;
    date_expired?:          ApprovedCost;
    date_issued?:           ApprovedCost;
    days_to_complete?:      ApprovedCost;
    end_location_id?:       ApprovedCost;
    for_corporation?:       ApprovedCost;
    issuer_corporation_id?: ApprovedCost;
    issuer_id?:             ApprovedCost;
    price?:                 ApprovedCost;
    reward?:                ApprovedCost;
    start_location_id?:     ApprovedCost;
    status?:                ApprovedCost;
    title?:                 ApprovedCost;
    type?:                  ApprovedCost;
    volume?:                ApprovedCost;
    duration?:              ApprovedCost;
    escrow?:                ApprovedCost;
    is_buy_order?:          ApprovedCost;
    issued?:                ApprovedCost;
    issued_by?:             ApprovedCost;
    location_id?:           ApprovedCost;
    min_volume?:            ApprovedCost;
    order_id?:              ApprovedCost;
    range?:                 ApprovedCost;
    region_id?:             ApprovedCost;
    type_id?:               ApprovedCost;
    volume_remain?:         ApprovedCost;
    volume_total?:          ApprovedCost;
    wallet_division?:       ApprovedCost;
    balance?:               EventResponseClass;
    division?:              EventResponseClass;
}

export interface HilariousProperties {
    home_location?:            EventResponseClass;
    jump_clones?:              JumpClones;
    last_clone_jump_date?:     EventResponseClass;
    last_station_change_date?: EventResponseClass;
    jump_fatigue_expire_date?: ApprovedCost;
    last_jump_date?:           ApprovedCost;
    last_update_date?:         ApprovedCost;
}

export interface JumpClones {
    description: string;
    items:       JumpClonesItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface JumpClonesItems {
    description: string;
    properties:  AmbitiousProperties;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface AmbitiousProperties {
    implants:      Alliance;
    jump_clone_id: EventResponseClass;
    location_id:   EventResponseClass;
    location_type: EventResponseClass;
    name:          EventResponseClass;
}

export interface Security {
    evesso: string[];
}

export interface IDContactsLabels {
    get: AlliancesAllianceIDContactsLabelsGet;
}

export interface AlliancesAllianceIDContactsLabelsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: StickyResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles"?:    any[];
}

export interface StickyResponse {
    description: Title;
    examples?:   StickyExamples;
    headers?:    PurpleHeaders;
    schema?:     StickySchema;
}

export interface StickyExamples {
    "application/json": IndigoApplicationJSON[] | PurpleApplicationJSON;
}

export interface IndigoApplicationJSON {
    label_id:   number;
    label_name: string;
}

export interface StickySchema {
    description?: FluffyDescription;
    items?:       IndecentItems;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export enum FluffyDescription {
    JournalEntries = "Journal entries",
    The200OkArray = "200 ok array",
    WalletTransactions = "Wallet transactions",
}

export interface IndecentItems {
    description: PurpleDescription;
    properties:  CunningProperties;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface CunningProperties {
    label_id:   CharacterID;
    label_name: Px128X128;
}

export interface AlliancesAllianceIDIcons {
    get: AlliancesAllianceIDIconsGet;
}

export interface AlliancesAllianceIDIconsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: IndigoResponse };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface IndigoResponse {
    description: string;
    examples?:   IndigoExamples;
    headers?:    PurpleHeaders;
    schema?:     IndigoSchema;
}

export interface IndigoExamples {
    "application/json": IndecentApplicationJSON;
}

export interface IndecentApplicationJSON {
    px128x128?: string;
    px64x64?:   string;
    error?:     ErrorEnum;
}

export interface IndigoSchema {
    description?:  string;
    format?:       Format;
    title?:        string;
    type?:         Type;
    properties?:   ApprovedCostProperties;
    default?:      number | string;
    enum?:         string[];
    maxLength?:    number;
    minimum?:      number;
    minLength?:    number;
    uniqueItems?:  boolean;
    maximum?:      number;
    "x-nullable"?: boolean;
    $ref?:         Ref;
}

export interface CharactersAffiliation {
    post: CharactersAffiliationPost;
}

export interface CharactersAffiliationPost {
    description:            string;
    operationId:            string;
    parameters:             PurpleParameter[];
    responses:              { [key: string]: IndecentResponse };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface PurpleParameter {
    description?: string;
    in?:          In;
    name?:        string;
    required?:    boolean;
    schema?:      AgentClass;
    $ref?:        Ref;
}

export interface IndecentResponse {
    description: Title;
    examples:    IndecentExamples;
    schema:      IndecentSchema;
}

export interface IndecentExamples {
    "application/json": HilariousApplicationJSON[] | PurpleApplicationJSON;
}

export interface HilariousApplicationJSON {
    alliance_id:    number;
    character_id:   number;
    corporation_id: number;
}

export interface IndecentSchema {
    description?: FluffyDescription;
    items?:       HilariousItems;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface HilariousItems {
    description: PurpleDescription;
    properties:  MagentaProperties;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface MagentaProperties {
    alliance_id:    CharacterID;
    character_id?:  ApprovedCost;
    corporation_id: CharacterID;
    faction_id:     CharacterID;
    system_id?:     EventResponseClass;
}

export interface CharactersCharacterID {
    get: CharactersCharacterIDGet;
}

export interface CharactersCharacterIDGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: HilariousResponse };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface HilariousResponse {
    description: string;
    examples?:   HilariousExamples;
    headers?:    PurpleHeaders;
    schema?:     HilariousSchema;
}

export interface HilariousExamples {
    "application/json": AmbitiousApplicationJSON;
}

export interface AmbitiousApplicationJSON {
    birthday?:       Date;
    bloodline_id?:   number;
    corporation_id?: number;
    description?:    string;
    gender?:         string;
    name?:           string;
    race_id?:        number;
    title?:          string;
    error?:          ErrorEnum;
}

export interface HilariousSchema {
    description?: string;
    properties?:  FriskyProperties;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface FriskyProperties {
    alliance_id?:     ApprovedCost;
    birthday?:        ApprovedCost;
    bloodline_id?:    ApprovedCost;
    corporation_id?:  ApprovedCost;
    description?:     ApprovedCost;
    faction_id?:      ApprovedCost;
    gender?:          ApprovedCost;
    name?:            ApprovedCost;
    race_id?:         ApprovedCost;
    security_status?: EventResponseClass;
    title?:           ApprovedCost;
    error?:           Px128X128;
}

export interface CharactersCharacterIDAgentsResearch {
    get: CharactersCharacterIDAgentsResearchGet;
}

export interface CharactersCharacterIDAgentsResearchGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: AmbitiousResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface AmbitiousResponse {
    description: string;
    examples?:   AmbitiousExamples;
    headers?:    PurpleHeaders;
    schema?:     AmbitiousSchema;
}

export interface AmbitiousExamples {
    "application/json": Array<CunningApplicationJSON | number> | MagentaApplicationJSON;
}

export interface CunningApplicationJSON {
    agent_id?:              number;
    points_per_day?:        number;
    remainder_points?:      number;
    skill_type_id?:         number;
    started_at?:            Date;
    activity_id?:           number;
    blueprint_id?:          number;
    blueprint_location_id?: number;
    blueprint_type_id?:     number;
    cost?:                  number;
    duration?:              number;
    end_date?:              Date;
    facility_id?:           number;
    installer_id?:          number;
    job_id?:                number;
    licensed_runs?:         number;
    output_location_id?:    number;
    runs?:                  number;
    start_date?:            Date;
    station_id?:            number;
    status?:                string;
    is_read?:               boolean;
    notification_id?:       number;
    sender_id?:             number;
    sender_type?:           string;
    text?:                  string;
    timestamp?:             Date;
    type?:                  string;
    item_id?:               number;
    position?:              ApplicationJSONPosition;
    name?:                  string;
    location_flag?:         string;
    location_id?:           number;
    material_efficiency?:   number;
    quantity?:              number;
    time_efficiency?:       number;
    type_id?:               number;
    bookmark_id?:           number;
    created?:               Date;
    creator_id?:            number;
    folder_id?:             number;
    item?:                  PurpleItem;
    label?:                 string;
    notes?:                 string;
    coordinates?:           ApplicationJSONPosition;
    character_id?:          number;
    issued_at?:             Date;
    issuer_id?:             number;
    medal_id?:              number;
    reason?:                string;
}

export interface ApplicationJSONPosition {
    x: number;
    y: number;
    z: number;
}

export interface PurpleItem {
    item_id: number;
    type_id: number;
}

export interface MagentaApplicationJSON {
    ship_item_id?:                             number;
    ship_name?:                                string;
    ship_type_id?:                             number;
    allow_alliance_members?:                   boolean;
    allow_corporation_members?:                boolean;
    anchor?:                                   string;
    attack_if_at_war?:                         boolean;
    attack_if_other_security_status_dropping?: boolean;
    fuel_bay_take?:                            string;
    fuel_bay_view?:                            string;
    offline?:                                  string;
    online?:                                   string;
    unanchor?:                                 string;
    use_alliance_standings?:                   boolean;
    error?:                                    ErrorEnum;
}

export interface AmbitiousSchema {
    description?: string;
    items?:       AmbitiousItems;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    properties?:  BraggadociousProperties;
    required?:    string[];
    $ref?:        Ref;
}

export interface AmbitiousItems {
    description: string;
    properties?: MischievousProperties;
    required?:   string[];
    title:       string;
    type:        Type;
    format?:     Format;
}

export interface MischievousProperties {
    agent_id?:               ApprovedCost;
    points_per_day?:         ApprovedCost;
    remainder_points?:       ApprovedCost;
    skill_type_id?:          ApprovedCost;
    started_at?:             ApprovedCost;
    activity_id?:            EventResponseClass;
    blueprint_id?:           EventResponseClass;
    blueprint_location_id?:  EventResponseClass;
    blueprint_type_id?:      EventResponseClass;
    completed_character_id?: EventResponseClass;
    completed_date?:         EventResponseClass;
    cost?:                   EventResponseClass;
    duration?:               EventResponseClass;
    end_date?:               EventResponseClass;
    facility_id?:            EventResponseClass;
    installer_id?:           EventResponseClass;
    job_id?:                 EventResponseClass;
    licensed_runs?:          EventResponseClass;
    output_location_id?:     EventResponseClass;
    pause_date?:             EventResponseClass;
    probability?:            EventResponseClass;
    product_type_id?:        EventResponseClass;
    runs?:                   EventResponseClass;
    start_date?:             EventResponseClass;
    station_id?:             EventResponseClass;
    status?:                 EventResponseClass;
    successful_runs?:        EventResponseClass;
    is_read?:                ApprovedCost;
    notification_id?:        ApprovedCost;
    sender_id?:              ApprovedCost;
    sender_type?:            ApprovedCost;
    text?:                   ApprovedCost;
    timestamp?:              ApprovedCost;
    type?:                   ApprovedCost;
    item_id?:                CharacterID;
    position?:               PropertiesPosition;
    name?:                   ApprovedCost;
    location_flag?:          EventResponseClass;
    location_id?:            EventResponseClass;
    material_efficiency?:    EventResponseClass;
    quantity?:               EventResponseClass;
    time_efficiency?:        EventResponseClass;
    type_id?:                EventResponseClass;
    bookmark_id?:            EventResponseClass;
    coordinates?:            PropertiesPosition;
    created?:                EventResponseClass;
    creator_id?:             CharacterID;
    folder_id?:              CharacterID;
    item?:                   PropertiesItem;
    label?:                  EventResponseClass;
    notes?:                  EventResponseClass;
    character_id?:           EventResponseClass;
    issued_at?:              EventResponseClass;
    issuer_id?:              EventResponseClass;
    medal_id?:               EventResponseClass;
    reason?:                 EventResponseClass;
}

export interface PropertiesPosition {
    description: string;
    properties:  PositionProperties;
    required:    PositionRequired[];
    title:       string;
    type:        Type;
}

export interface PositionProperties {
    x: CharacterID;
    y: CharacterID;
    z: CharacterID;
}

export enum PositionRequired {
    X = "x",
    Y = "y",
    Z = "z",
}

export interface PropertiesItem {
    description: string;
    properties:  ItemProperties;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface ItemProperties {
    item_id: CharacterID;
    type_id: CharacterID;
}

export interface BraggadociousProperties {
    ship_item_id?:                             EventResponseClass;
    ship_name?:                                EventResponseClass;
    ship_type_id?:                             EventResponseClass;
    allow_alliance_members?:                   ApprovedCost;
    allow_corporation_members?:                ApprovedCost;
    anchor?:                                   ApprovedCost;
    attack_if_at_war?:                         ApprovedCost;
    attack_if_other_security_status_dropping?: ApprovedCost;
    attack_security_status_threshold?:         ApprovedCost;
    attack_standing_threshold?:                ApprovedCost;
    fuel_bay_take?:                            ApprovedCost;
    fuel_bay_view?:                            ApprovedCost;
    fuels?:                                    Fuels;
    offline?:                                  EventResponseClass;
    online?:                                   EventResponseClass;
    unanchor?:                                 EventResponseClass;
    use_alliance_standings?:                   EventResponseClass;
    error?:                                    Px128X128;
}

export interface Fuels {
    description: string;
    items:       FuelsItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface FuelsItems {
    description: string;
    properties:  Properties1;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties1 {
    quantity: CharacterID;
    type_id:  CharacterID;
}

export interface CharactersCharacterIDAssets {
    get: CharactersCharacterIDAssetsGet;
}

export interface CharactersCharacterIDAssetsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: CunningResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface CunningResponse {
    description: string;
    examples?:   CunningExamples;
    headers?:    PurpleHeaders;
    schema?:     CunningSchema;
}

export interface CunningExamples {
    "application/json": FriskyApplicationJSON[] | PurpleApplicationJSON;
}

export interface FriskyApplicationJSON {
    is_blueprint_copy?: boolean;
    is_singleton?:      boolean;
    item_id?:           number;
    location_flag?:     string;
    location_id?:       number;
    location_type?:     string;
    quantity?:          number;
    type_id?:           number;
    character_id?:      number;
    join_time?:         Date;
    role?:              string;
    role_name?:         string;
    ship_type_id?:      number;
    solar_system_id?:   number;
    squad_id?:          number;
    station_id?:        number;
    takes_fleet_warp?:  boolean;
    wing_id?:           number;
}

export interface CunningSchema {
    description?: string;
    items?:       CunningItems;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
    properties?:  Properties3;
}

export interface CunningItems {
    description: PurpleDescription;
    properties:  Properties2;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties2 {
    is_blueprint_copy?: Px128X128;
    is_singleton?:      Px128X128;
    item_id?:           CharacterID;
    location_flag?:     RecipientType;
    location_id?:       CharacterID;
    location_type?:     RecipientType;
    quantity?:          CharacterID;
    type_id?:           CharacterID;
    character_id?:      ApprovedCost;
    join_time?:         ApprovedCost;
    role?:              ApprovedCost;
    role_name?:         ApprovedCost;
    ship_type_id?:      ApprovedCost;
    solar_system_id?:   ApprovedCost;
    squad_id?:          ApprovedCost;
    station_id?:        ApprovedCost;
    takes_fleet_warp?:  ApprovedCost;
    wing_id?:           ApprovedCost;
}

export interface Properties3 {
    error: Px128X128;
}

export interface CharactersCharacterIDAssetsLocations {
    post: CharactersCharacterIDAssetsLocationsPost;
}

export interface CharactersCharacterIDAssetsLocationsPost {
    description:            string;
    operationId:            string;
    parameters:             PurpleParameter[];
    responses:              { [key: string]: MagentaResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface MagentaResponse {
    description: string;
    examples?:   MagentaExamples;
    schema?:     MagentaSchema;
    headers?:    PurpleHeaders;
}

export interface MagentaExamples {
    "application/json": Array<MischievousApplicationJSON | number> | PurpleApplicationJSON | number;
}

export interface MischievousApplicationJSON {
    item_id?:               number;
    position?:              ApplicationJSONPosition;
    label_id?:              number;
    label_name?:            string;
    acceptor_id?:           number;
    assignee_id?:           number;
    availability?:          string;
    buyout?:                number;
    contract_id?:           number;
    date_accepted?:         Date;
    date_completed?:        Date;
    date_expired?:          Date;
    date_issued?:           Date;
    days_to_complete?:      number;
    end_location_id?:       number;
    for_corporation?:       boolean;
    issuer_corporation_id?: number;
    issuer_id?:             number;
    price?:                 number;
    reward?:                number;
    start_location_id?:     number;
    status?:                string;
    type?:                  string;
    volume?:                number;
    killmail_hash?:         string;
    killmail_id?:           number;
    message?:               string;
    notification_id?:       number;
    send_date?:             Date;
    sender_character_id?:   number;
    standing_level?:        number;
    finish_date?:           Date;
    finished_level?:        number;
    queue_position?:        number;
    skill_id?:              number;
    start_date?:            Date;
    contact_id?:            number;
    contact_type?:          string;
    is_watched?:            boolean;
    standing?:              number;
    character_id?:          number;
    titles?:                any[];
    corporation_id?:        number;
    name?:                  string;
    profile_id?:            number;
    reinforce_hour?:        number;
    state?:                 string;
    structure_id?:          number;
    system_id?:             number;
    type_id?:               number;
}

export interface MagentaSchema {
    description?: string;
    items?:       MagentaItems;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    format?:      Format;
    $ref?:        Ref;
    properties?:  Properties3;
}

export interface MagentaItems {
    description: PurpleDescription;
    properties?: Properties4;
    required?:   string[];
    title:       string;
    type:        Type;
    format?:     Format;
}

export interface Properties4 {
    item_id?:               ApprovedCost;
    position?:              PropertiesPosition;
    label_id?:              EventResponseClass;
    label_name?:            EventResponseClass;
    acceptor_id?:           ApprovedCost;
    assignee_id?:           ApprovedCost;
    availability?:          ApprovedCost;
    buyout?:                ApprovedCost;
    collateral?:            ApprovedCost;
    contract_id?:           ApprovedCost;
    date_accepted?:         ApprovedCost;
    date_completed?:        ApprovedCost;
    date_expired?:          ApprovedCost;
    date_issued?:           ApprovedCost;
    days_to_complete?:      ApprovedCost;
    end_location_id?:       ApprovedCost;
    for_corporation?:       ApprovedCost;
    issuer_corporation_id?: ApprovedCost;
    issuer_id?:             ApprovedCost;
    price?:                 ApprovedCost;
    reward?:                ApprovedCost;
    start_location_id?:     ApprovedCost;
    status?:                ApprovedCost;
    title?:                 ApprovedCost;
    type?:                  ApprovedCost;
    volume?:                ApprovedCost;
    killmail_hash?:         ApprovedCost;
    killmail_id?:           ApprovedCost;
    message?:               ApprovedCost;
    notification_id?:       ApprovedCost;
    send_date?:             ApprovedCost;
    sender_character_id?:   ApprovedCost;
    standing_level?:        ApprovedCost;
    finish_date?:           EventResponseClass;
    finished_level?:        EventResponseClass;
    level_end_sp?:          EventResponseClass;
    level_start_sp?:        EventResponseClass;
    queue_position?:        EventResponseClass;
    skill_id?:              EventResponseClass;
    start_date?:            EventResponseClass;
    training_start_sp?:     EventResponseClass;
    contact_id?:            EventResponseClass;
    contact_type?:          EventResponseClass;
    is_watched?:            EventResponseClass;
    label_ids?:             Alliance;
    standing?:              EventResponseClass;
    character_id?:          EventResponseClass;
    titles?:                AgentClass;
    corporation_id?:        ApprovedCost;
    fuel_expires?:          ApprovedCost;
    name?:                  ApprovedCost;
    next_reinforce_apply?:  ApprovedCost;
    next_reinforce_hour?:   ApprovedCost;
    profile_id?:            ApprovedCost;
    reinforce_hour?:        ApprovedCost;
    services?:              Services;
    state?:                 EventResponseClass;
    state_timer_end?:       EventResponseClass;
    state_timer_start?:     EventResponseClass;
    structure_id?:          EventResponseClass;
    system_id?:             EventResponseClass;
    type_id?:               EventResponseClass;
    unanchors_at?:          EventResponseClass;
}

export interface Services {
    description: string;
    items:       ServicesItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface ServicesItems {
    description: string;
    properties:  Properties5;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties5 {
    name:  EventResponseClass;
    state: EventResponseClass;
}

export interface CharactersCharacterIDAssetsNamesClass {
    post: CharactersCharacterIDAssetsNamesPost;
}

export interface CharactersCharacterIDAssetsNamesPost {
    description:            string;
    operationId:            string;
    parameters:             PurpleParameter[];
    responses:              { [key: string]: FriskyResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface FriskyResponse {
    description: string;
    examples?:   FriskyExamples;
    schema?:     FriskySchema;
    headers?:    PurpleHeaders;
}

export interface FriskyExamples {
    "application/json": BraggadociousApplicationJSON[] | ApplicationJSON1 | number;
}

export interface BraggadociousApplicationJSON {
    item_id?:            number;
    name?:               string;
    label_id?:           number;
    label_name?:         string;
    action?:             string;
    character_id?:       number;
    container_id?:       number;
    container_type_id?:  number;
    location_flag?:      string;
    location_id?:        number;
    logged_at?:          Date;
    password_type?:      string;
    quantity?:           number;
    type_id?:            number;
    new_config_bitmask?: number;
    old_config_bitmask?: number;
    logoff_date?:        Date;
    logon_date?:         Date;
    ship_type_id?:       number;
    start_date?:         Date;
    roles?:              string[];
    title_id?:           number;
}

export interface ApplicationJSON1 {
    solar_system_id?: number;
    structure_id?:    number;
    last_login?:      Date;
    last_logout?:     Date;
    logins?:          number;
    online?:          boolean;
    skills?:          Skill[];
    total_sp?:        number;
    error?:           ErrorEnum;
}

export interface Skill {
    active_skill_level:   number;
    skill_id:             number;
    skillpoints_in_skill: number;
    trained_skill_level:  number;
}

export interface FriskySchema {
    description?: string;
    items?:       FriskyItems;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    properties?:  Properties7;
    required?:    string[];
    $ref?:        Ref;
    format?:      Format;
}

export interface FriskyItems {
    description: PurpleDescription;
    properties:  Properties6;
    required?:   string[];
    title:       string;
    type:        Type;
}

export interface Properties6 {
    item_id?:                  ApprovedCost;
    name?:                     Px128X128;
    label_id?:                 EventResponseClass;
    label_name?:               EventResponseClass;
    action?:                   ApprovedCost;
    character_id?:             CharacterID;
    container_id?:             ApprovedCost;
    container_type_id?:        ApprovedCost;
    location_flag?:            ApprovedCost;
    location_id?:              CharacterID;
    logged_at?:                ApprovedCost;
    new_config_bitmask?:       ApprovedCost;
    old_config_bitmask?:       ApprovedCost;
    password_type?:            ApprovedCost;
    quantity?:                 ApprovedCost;
    type_id?:                  ApprovedCost;
    base_id?:                  EventResponseClass;
    logoff_date?:              EventResponseClass;
    logon_date?:               EventResponseClass;
    ship_type_id?:             EventResponseClass;
    start_date?:               EventResponseClass;
    grantable_roles?:          Roles;
    grantable_roles_at_base?:  Roles;
    grantable_roles_at_hq?:    Roles;
    grantable_roles_at_other?: Roles;
    roles?:                    Roles;
    roles_at_base?:            Roles;
    roles_at_hq?:              Roles;
    roles_at_other?:           Roles;
    title_id?:                 EventResponseClass;
}

export interface Properties7 {
    solar_system_id?: ApprovedCost;
    station_id?:      ApprovedCost;
    structure_id?:    ApprovedCost;
    last_login?:      ApprovedCost;
    last_logout?:     ApprovedCost;
    logins?:          ApprovedCost;
    online?:          ApprovedCost;
    skills?:          Skills;
    total_sp?:        EventResponseClass;
    unallocated_sp?:  EventResponseClass;
    error?:           Px128X128;
}

export interface Skills {
    description: string;
    items:       SkillsItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface SkillsItems {
    description: string;
    properties:  Properties8;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties8 {
    active_skill_level:   EventResponseClass;
    skill_id:             EventResponseClass;
    skillpoints_in_skill: EventResponseClass;
    trained_skill_level:  EventResponseClass;
}

export interface CharactersCharacterIDAttributesClass {
    get: CharactersCharacterIDAttributesGet;
}

export interface CharactersCharacterIDAttributesGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: MischievousResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface MischievousResponse {
    description: Title;
    examples?:   MischievousExamples;
    headers?:    PurpleHeaders;
    schema?:     MischievousSchema;
}

export interface MischievousExamples {
    "application/json": ApplicationJSON2[] | ApplicationJSON3;
}

export interface ApplicationJSON2 {
    corporation_id?:        number;
    date?:                  Date;
    description?:           string;
    graphics?:              Graphic[];
    issuer_id?:             number;
    medal_id?:              number;
    reason?:                string;
    status?:                string;
    title?:                 string;
    last_updated?:          Date;
    observer_id?:           number;
    observer_type?:         string;
    activity_id?:           number;
    blueprint_id?:          number;
    blueprint_location_id?: number;
    blueprint_type_id?:     number;
    cost?:                  number;
    duration?:              number;
    end_date?:              Date;
    facility_id?:           number;
    installer_id?:          number;
    job_id?:                number;
    licensed_runs?:         number;
    location_id?:           number;
    output_location_id?:    number;
    runs?:                  number;
    start_date?:            Date;
    from_id?:               number;
    from_type?:             string;
    standing?:              number;
}

export interface Graphic {
    color:   number;
    graphic: string;
    layer:   number;
    part:    number;
}

export interface ApplicationJSON3 {
    charisma?:     number;
    intelligence?: number;
    memory?:       number;
    perception?:   number;
    willpower?:    number;
    roles?:        string[];
    error?:        ErrorEnum;
    fitting_id?:   number;
}

export interface MischievousSchema {
    description?: string;
    properties?:  Properties11;
    required?:    string[];
    title?:       string;
    type?:        Type;
    items?:       MischievousItems;
    maxItems?:    number;
    $ref?:        Ref;
}

export interface MischievousItems {
    description: PurpleDescription;
    properties:  Properties9;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties9 {
    corporation_id?:         ApprovedCost;
    date?:                   ApprovedCost;
    description?:            ApprovedCost;
    graphics?:               Graphics;
    issuer_id?:              EventResponseClass;
    medal_id?:               EventResponseClass;
    reason?:                 EventResponseClass;
    status?:                 EventResponseClass;
    title?:                  EventResponseClass;
    last_updated?:           ApprovedCost;
    observer_id?:            ApprovedCost;
    observer_type?:          ApprovedCost;
    activity_id?:            EventResponseClass;
    blueprint_id?:           EventResponseClass;
    blueprint_location_id?:  EventResponseClass;
    blueprint_type_id?:      EventResponseClass;
    completed_character_id?: EventResponseClass;
    completed_date?:         EventResponseClass;
    cost?:                   EventResponseClass;
    duration?:               EventResponseClass;
    end_date?:               EventResponseClass;
    facility_id?:            EventResponseClass;
    installer_id?:           EventResponseClass;
    job_id?:                 EventResponseClass;
    licensed_runs?:          EventResponseClass;
    location_id?:            EventResponseClass;
    output_location_id?:     EventResponseClass;
    pause_date?:             EventResponseClass;
    probability?:            EventResponseClass;
    product_type_id?:        EventResponseClass;
    runs?:                   EventResponseClass;
    start_date?:             EventResponseClass;
    successful_runs?:        EventResponseClass;
    from_id?:                EventResponseClass;
    from_type?:              EventResponseClass;
    standing?:               EventResponseClass;
}

export interface Graphics {
    description: string;
    items:       GraphicsItems;
    maxItems:    number;
    minItems:    number;
    title:       string;
    type:        Type;
}

export interface GraphicsItems {
    description: string;
    properties:  Properties10;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties10 {
    color:   EventResponseClass;
    graphic: EventResponseClass;
    layer:   EventResponseClass;
    part:    EventResponseClass;
}

export interface Properties11 {
    accrued_remap_cooldown_date?: ApprovedCost;
    bonus_remaps?:                ApprovedCost;
    charisma?:                    ApprovedCost;
    intelligence?:                ApprovedCost;
    last_remap_date?:             ApprovedCost;
    memory?:                      ApprovedCost;
    perception?:                  ApprovedCost;
    willpower?:                   ApprovedCost;
    roles?:                       Roles;
    roles_at_base?:               Roles;
    roles_at_hq?:                 Roles;
    roles_at_other?:              Roles;
    fitting_id?:                  ApprovedCost;
}

export interface IDBlueprints {
    get: CharactersCharacterIDBlueprintsGet;
}

export interface CharactersCharacterIDBlueprintsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: BraggadociousResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles"?:    string[];
}

export interface BraggadociousResponse {
    description: Title;
    examples?:   BraggadociousExamples;
    headers?:    PurpleHeaders;
    schema?:     BraggadociousSchema;
}

export interface BraggadociousExamples {
    "application/json": ApplicationJSON4[] | PurpleApplicationJSON;
}

export interface ApplicationJSON4 {
    item_id:             number;
    location_flag:       string;
    location_id:         number;
    material_efficiency: number;
    quantity:            number;
    runs:                number;
    time_efficiency:     number;
    type_id:             number;
}

export interface BraggadociousSchema {
    description?: FluffyDescription;
    items?:       BraggadociousItems;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface BraggadociousItems {
    description: PurpleDescription;
    properties:  Properties12;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties12 {
    item_id:             CharacterID;
    location_flag:       RecipientType;
    location_id:         CharacterID;
    material_efficiency: EventResponseClass;
    quantity:            EventResponseClass;
    runs:                EventResponseClass;
    time_efficiency:     EventResponseClass;
    type_id:             EventResponseClass;
}

export interface IDBookmarks {
    get: CharactersCharacterIDBookmarksGet;
}

export interface CharactersCharacterIDBookmarksGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response1 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response1 {
    description: Title;
    examples?:   Examples1;
    headers?:    PurpleHeaders;
    schema?:     Schema1;
}

export interface Examples1 {
    "application/json": ApplicationJSON5[] | PurpleApplicationJSON;
}

export interface ApplicationJSON5 {
    bookmark_id:  number;
    created:      Date;
    creator_id:   number;
    folder_id:    number;
    item?:        PurpleItem;
    label:        string;
    location_id:  number;
    notes:        string;
    coordinates?: ApplicationJSONPosition;
}

export interface Schema1 {
    description?: FluffyDescription;
    items?:       Items1;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items1 {
    description: PurpleDescription;
    properties:  Properties13;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties13 {
    bookmark_id: EventResponseClass;
    coordinates: PropertiesPosition;
    created:     EventResponseClass;
    creator_id:  EventResponseClass;
    folder_id:   EventResponseClass;
    item:        PropertiesItem;
    label:       Px128X128;
    location_id: CharacterID;
    notes:       Px128X128;
}

export interface CharactersCharacterIDBookmarksFoldersClass {
    get: CharactersCharacterIDBookmarksFoldersGet;
}

export interface CharactersCharacterIDBookmarksFoldersGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response2 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response2 {
    description: string;
    examples?:   Examples2;
    headers?:    PurpleHeaders;
    schema?:     Schema2;
}

export interface Examples2 {
    "application/json": ApplicationJSON6[] | ApplicationJSON7 | number;
}

export interface ApplicationJSON6 {
    folder_id?:             number;
    name?:                  string;
    mailing_list_id?:       number;
    chunk_arrival_time?:    Date;
    extraction_start_time?: Date;
    moon_id?:               number;
    natural_decay_time?:    Date;
    structure_id?:          number;
    share_count?:           number;
    shareholder_id?:        number;
    shareholder_type?:      string;
}

export interface ApplicationJSON7 {
    links?:          Link[];
    pins?:           Pin[];
    routes?:         Route[];
    enlisted_on?:    Date;
    faction_id?:     number;
    kills?:          PurpleKills;
    pilots?:         number;
    victory_points?: PurpleKills;
    error?:          ErrorEnum;
}

export interface PurpleKills {
    last_week: number;
    total:     number;
    yesterday: number;
}

export interface Link {
    destination_pin_id: number;
    link_level:         number;
    source_pin_id:      number;
}

export interface Pin {
    latitude:  number;
    longitude: number;
    pin_id:    number;
    type_id:   number;
}

export interface Route {
    content_type_id:    number;
    destination_pin_id: number;
    quantity:           number;
    route_id:           number;
    source_pin_id:      number;
}

export interface Schema2 {
    description?: string;
    items?:       Items2;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    properties?:  Properties15;
    required?:    string[];
    $ref?:        Ref;
    format?:      Format;
}

export interface Items2 {
    description: PurpleDescription;
    properties:  Properties14;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties14 {
    folder_id?:             EventResponseClass;
    name?:                  Px128X128;
    mailing_list_id?:       ApprovedCost;
    chunk_arrival_time?:    EventResponseClass;
    extraction_start_time?: EventResponseClass;
    moon_id?:               EventResponseClass;
    natural_decay_time?:    EventResponseClass;
    structure_id?:          EventResponseClass;
    share_count?:           EventResponseClass;
    shareholder_id?:        EventResponseClass;
    shareholder_type?:      EventResponseClass;
}

export interface Properties15 {
    links?:          Links;
    pins?:           Pins;
    routes?:         Routes;
    enlisted_on?:    ApprovedCost;
    faction_id?:     ApprovedCost;
    kills?:          FluffyKills;
    pilots?:         ApprovedCost;
    victory_points?: FluffyKills;
    error?:          Px128X128;
}

export interface FluffyKills {
    description: string;
    properties:  Properties16;
    required:    KillsRequired[];
    title:       string;
    type:        Type;
}

export interface Properties16 {
    last_week: CharacterID;
    total:     CharacterID;
    yesterday: CharacterID;
}

export enum KillsRequired {
    LastWeek = "last_week",
    Total = "total",
    Yesterday = "yesterday",
}

export interface Links {
    description: string;
    items:       LinksItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface LinksItems {
    description: string;
    properties:  Properties17;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties17 {
    destination_pin_id: EventResponseClass;
    link_level:         EventResponseClass;
    source_pin_id:      EventResponseClass;
}

export interface Pins {
    description: string;
    items:       PinsItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface PinsItems {
    description: string;
    properties:  Properties18;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties18 {
    contents:          Contents;
    expiry_time:       ApprovedCost;
    extractor_details: ExtractorDetails;
    factory_details:   FactoryDetails;
    install_time:      EventResponseClass;
    last_cycle_start:  EventResponseClass;
    latitude:          EventResponseClass;
    longitude:         EventResponseClass;
    pin_id:            EventResponseClass;
    schematic_id:      EventResponseClass;
    type_id:           EventResponseClass;
}

export interface Contents {
    description: string;
    items:       ContentsItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface ContentsItems {
    description: string;
    properties:  Properties19;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties19 {
    amount:  ApprovedCost;
    type_id: ApprovedCost;
}

export interface ExtractorDetails {
    description: string;
    properties:  ExtractorDetailsProperties;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface ExtractorDetailsProperties {
    cycle_time:      EventResponseClass;
    head_radius:     EventResponseClass;
    heads:           Heads;
    product_type_id: ApprovedCost;
    qty_per_cycle:   ApprovedCost;
}

export interface Heads {
    description: string;
    items:       HeadsItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface HeadsItems {
    description: string;
    properties:  Properties20;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties20 {
    head_id:   ApprovedCost;
    latitude:  ApprovedCost;
    longitude: ApprovedCost;
}

export interface FactoryDetails {
    description: string;
    properties:  FactoryDetailsProperties;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface FactoryDetailsProperties {
    schematic_id: EventResponseClass;
}

export interface Routes {
    description: string;
    items:       RoutesItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface RoutesItems {
    description: string;
    properties:  Properties21;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties21 {
    content_type_id:    ApprovedCost;
    destination_pin_id: ApprovedCost;
    quantity:           ApprovedCost;
    route_id:           ApprovedCost;
    source_pin_id:      ApprovedCost;
    waypoints:          AgentClass;
}

export interface CharactersCharacterIDCalendar {
    get: CharactersCharacterIDCalendarGet;
}

export interface CharactersCharacterIDCalendarGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response3 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response3 {
    description: Title;
    examples?:   Examples3;
    headers?:    PurpleHeaders;
    schema?:     Schema3;
}

export interface Examples3 {
    "application/json": ApplicationJSON8[] | PurpleApplicationJSON;
}

export interface ApplicationJSON8 {
    event_date?:      Date;
    event_id?:        number;
    event_response?:  string;
    importance?:      number;
    title?:           string;
    last_update?:     Date;
    num_pins?:        number;
    owner_id?:        number;
    planet_id?:       number;
    planet_type?:     string;
    solar_system_id?: number;
    upgrade_level?:   number;
    client_id?:       number;
    date?:            Date;
    is_buy?:          boolean;
    is_personal?:     boolean;
    journal_ref_id?:  number;
    location_id?:     number;
    quantity?:        number;
    transaction_id?:  number;
    type_id?:         number;
    unit_price?:      number;
    facility_id?:     number;
    system_id?:       number;
    changed_at?:      Date;
    character_id?:    number;
    issuer_id?:       number;
    new_roles?:       string[];
    old_roles?:       string[];
    role_type?:       string;
    duration?:        number;
    is_buy_order?:    boolean;
    issued?:          Date;
    min_volume?:      number;
    order_id?:        number;
    price?:           number;
    range?:           string;
    volume_remain?:   number;
    volume_total?:    number;
}

export interface Schema3 {
    description?: string;
    items?:       Items3;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items3 {
    description: string;
    properties:  Properties22;
    title:       string;
    type:        Type;
    required?:   string[];
}

export interface Properties22 {
    event_date?:      ApprovedCost;
    event_id?:        ApprovedCost;
    event_response?:  ApprovedCost;
    importance?:      ApprovedCost;
    title?:           ApprovedCost;
    last_update?:     EventResponseClass;
    num_pins?:        EventResponseClass;
    owner_id?:        EventResponseClass;
    planet_id?:       EventResponseClass;
    planet_type?:     EventResponseClass;
    solar_system_id?: EventResponseClass;
    upgrade_level?:   EventResponseClass;
    client_id?:       EventResponseClass;
    date?:            EventResponseClass;
    is_buy?:          EventResponseClass;
    is_personal?:     EventResponseClass;
    journal_ref_id?:  EventResponseClass;
    location_id?:     CharacterID;
    quantity?:        EventResponseClass;
    transaction_id?:  EventResponseClass;
    type_id?:         CharacterID;
    unit_price?:      EventResponseClass;
    facility_id?:     ApprovedCost;
    system_id?:       ApprovedCost;
    changed_at?:      ApprovedCost;
    character_id?:    ApprovedCost;
    issuer_id?:       ApprovedCost;
    new_roles?:       Roles;
    old_roles?:       Roles;
    role_type?:       ApprovedCost;
    duration?:        ApprovedCost;
    is_buy_order?:    ApprovedCost;
    issued?:          ApprovedCost;
    min_volume?:      ApprovedCost;
    order_id?:        ApprovedCost;
    price?:           ApprovedCost;
    range?:           ApprovedCost;
    volume_remain?:   ApprovedCost;
    volume_total?:    ApprovedCost;
}

export interface CharactersCharacterIDCalendarEventID {
    get: CharactersCharacterIDCalendarEventIDGet;
    put: CharactersCharacterIDCalendarEventIDPut;
}

export interface CharactersCharacterIDCalendarEventIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response4 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response4 {
    description: string;
    examples?:   Examples4;
    headers?:    PurpleHeaders;
    schema?:     Schema4;
}

export interface Examples4 {
    "application/json": ApplicationJSON9[] | ApplicationJSON10;
}

export interface ApplicationJSON9 {
    id:     number;
    name:   string;
    squads: Character[];
}

export interface Character {
    id:   number;
    name: string;
}

export interface ApplicationJSON10 {
    date?:       Date;
    duration?:   number;
    event_id?:   number;
    importance?: number;
    owner_id?:   number;
    owner_name?: string;
    owner_type?: string;
    response?:   string;
    text?:       string;
    title?:      string;
    error?:      ErrorEnum;
}

export interface Schema4 {
    description?: string;
    properties?:  Properties24;
    required?:    string[];
    title?:       string;
    type?:        Type;
    items?:       Items4;
    maxItems?:    number;
    $ref?:        Ref;
}

export interface Items4 {
    description: PurpleDescription;
    properties:  Properties23;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties23 {
    id:     ApprovedCost;
    name:   ApprovedCost;
    squads: Agents;
}

export interface Properties24 {
    date?:       ApprovedCost;
    duration?:   ApprovedCost;
    event_id?:   ApprovedCost;
    importance?: ApprovedCost;
    owner_id?:   ApprovedCost;
    owner_name?: ApprovedCost;
    owner_type?: ApprovedCost;
    response?:   ApprovedCost;
    text?:       ApprovedCost;
    title?:      ApprovedCost;
    error?:      Px128X128;
}

export interface CharactersCharacterIDCalendarEventIDPut {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: TentacledResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface CharactersCharacterIDCalendarEventIDAttendees {
    get: CharactersCharacterIDCalendarEventIDAttendeesGet;
}

export interface CharactersCharacterIDCalendarEventIDAttendeesGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response5 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response5 {
    description: string;
    examples?:   Examples5;
    headers?:    PurpleHeaders;
    schema?:     Schema5;
}

export interface Examples5 {
    "application/json": ApplicationJSON11[] | PurpleApplicationJSON;
}

export interface ApplicationJSON11 {
    character_id:   number;
    event_response: string;
}

export interface Schema5 {
    description?: string;
    items?:       ApprovedCost;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
    properties?:  Properties3;
}

export interface CharactersCharacterIDContacts {
    delete: CharactersCharacterIDContactsDelete;
    get:    CharactersCharacterIDContactsGet;
    post:   CharactersCharacterIDContactsPost;
    put:    CharactersCharacterIDContactsPut;
}

export interface CharactersCharacterIDContactsDelete {
    description:            string;
    operationId:            string;
    parameters:             DeleteParameter[];
    responses:              { [key: string]: Response6 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface DeleteParameter {
    $ref?:        Ref;
    description?: string;
    in?:          In;
    items?:       PurpleItems;
    maxItems?:    number;
    minItems?:    number;
    name?:        string;
    required?:    boolean;
    type?:        Type;
}

export interface Response6 {
    description: string;
    examples?:   Examples6;
    headers?:    PurpleHeaders;
    schema?:     Schema6;
}

export interface Examples6 {
    "application/json": ApplicationJSON12[] | PurpleApplicationJSON;
}

export interface ApplicationJSON12 {
    label_id?:                    number;
    label_name?:                  string;
    contact_id?:                  number;
    contact_type?:                string;
    is_blocked?:                  boolean;
    is_watched?:                  boolean;
    standing?:                    number;
    description?:                 string;
    fitting_id?:                  number;
    items?:                       FluffyItem[];
    name?:                        string;
    ship_type_id?:                number;
    from?:                        number;
    is_read?:                     boolean;
    labels?:                      number[];
    mail_id?:                     number;
    recipients?:                  Recipient[];
    subject?:                     string;
    timestamp?:                   Date;
    duration?:                    number;
    escrow?:                      number;
    is_buy_order?:                boolean;
    is_corporation?:              boolean;
    issued?:                      Date;
    location_id?:                 number;
    min_volume?:                  number;
    order_id?:                    number;
    price?:                       number;
    range?:                       string;
    region_id?:                   number;
    type_id?:                     number;
    volume_remain?:               number;
    volume_total?:                number;
    title_id?:                    number;
    alliance_tax_rate?:           number;
    allow_access_with_standings?: boolean;
    allow_alliance_access?:       boolean;
    corporation_tax_rate?:        number;
    excellent_standing_tax_rate?: number;
    good_standing_tax_rate?:      number;
    neutral_standing_tax_rate?:   number;
    office_id?:                   number;
    reinforce_exit_end?:          number;
    reinforce_exit_start?:        number;
    standing_level?:              string;
    system_id?:                   number;
    issued_by?:                   number;
    state?:                       string;
    wallet_division?:             number;
    amount?:                      number;
    balance?:                     number;
    context_id?:                  number;
    context_id_type?:             string;
    date?:                        Date;
    first_party_id?:              number;
    id?:                          number;
    ref_type?:                    string;
    second_party_id?:             number;
    client_id?:                   number;
    is_buy?:                      boolean;
    journal_ref_id?:              number;
    quantity?:                    number;
    transaction_id?:              number;
    unit_price?:                  number;
}

export interface FluffyItem {
    flag:     string;
    quantity: number;
    type_id:  number;
}

export interface Recipient {
    recipient_id:   number;
    recipient_type: string;
}

export interface Schema6 {
    description?: FluffyDescription;
    items?:       Items5;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items5 {
    description: TentacledDescription;
    properties:  Properties25;
    required?:   string[];
    title:       string;
    type:        Type;
}

export enum TentacledDescription {
    The200OkObject = "200 ok object",
    WalletTransaction = "wallet transaction",
}

export interface Properties25 {
    label_id?:                    ApprovedCost;
    label_name?:                  ApprovedCost;
    contact_id?:                  ApprovedCost;
    contact_type?:                ApprovedCost;
    is_blocked?:                  ApprovedCost;
    is_watched?:                  ApprovedCost;
    label_ids?:                   Alliance;
    standing?:                    ApprovedCost;
    description?:                 Px128X128;
    fitting_id?:                  ApprovedCost;
    items?:                       Items6;
    name?:                        Px128X128;
    ship_type_id?:                EventResponseClass;
    from?:                        EventResponseClass;
    is_read?:                     EventResponseClass;
    labels?:                      AgentClass;
    mail_id?:                     EventResponseClass;
    recipients?:                  PurpleRecipients;
    subject?:                     ApprovedCost;
    timestamp?:                   ApprovedCost;
    duration?:                    CharacterID;
    escrow?:                      CharacterID;
    is_buy_order?:                Px128X128;
    is_corporation?:              ApprovedCost;
    issued?:                      CharacterID;
    location_id?:                 CharacterID;
    min_volume?:                  CharacterID;
    order_id?:                    CharacterID;
    price?:                       CharacterID;
    range?:                       RecipientType;
    region_id?:                   CharacterID;
    type_id?:                     CharacterID;
    volume_remain?:               CharacterID;
    volume_total?:                CharacterID;
    title_id?:                    ApprovedCost;
    alliance_tax_rate?:           ApprovedCost;
    allow_access_with_standings?: ApprovedCost;
    allow_alliance_access?:       ApprovedCost;
    bad_standing_tax_rate?:       ApprovedCost;
    corporation_tax_rate?:        ApprovedCost;
    excellent_standing_tax_rate?: ApprovedCost;
    good_standing_tax_rate?:      ApprovedCost;
    neutral_standing_tax_rate?:   ApprovedCost;
    office_id?:                   ApprovedCost;
    reinforce_exit_end?:          ApprovedCost;
    reinforce_exit_start?:        ApprovedCost;
    standing_level?:              ApprovedCost;
    system_id?:                   ApprovedCost;
    terrible_standing_tax_rate?:  ApprovedCost;
    issued_by?:                   EventResponseClass;
    state?:                       EventResponseClass;
    wallet_division?:             EventResponseClass;
    amount?:                      EventResponseClass;
    balance?:                     EventResponseClass;
    context_id?:                  EventResponseClass;
    context_id_type?:             EventResponseClass;
    date?:                        EventResponseClass;
    first_party_id?:              EventResponseClass;
    id?:                          EventResponseClass;
    reason?:                      EventResponseClass;
    ref_type?:                    EventResponseClass;
    second_party_id?:             EventResponseClass;
    tax?:                         EventResponseClass;
    tax_receiver_id?:             EventResponseClass;
    client_id?:                   EventResponseClass;
    is_buy?:                      EventResponseClass;
    journal_ref_id?:              EventResponseClass;
    quantity?:                    EventResponseClass;
    transaction_id?:              EventResponseClass;
    unit_price?:                  EventResponseClass;
}

export interface Items6 {
    description: string;
    items:       Items7;
    maxItems:    number;
    title:       string;
    type:        Type;
    minItems?:   number;
}

export interface Items7 {
    description: string;
    properties:  Properties26;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties26 {
    flag:     EventResponseClass;
    quantity: EventResponseClass;
    type_id:  EventResponseClass;
}

export interface CharactersCharacterIDContactsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response6 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface CharactersCharacterIDContactsPost {
    description:            string;
    operationId:            string;
    parameters:             PutParameter[];
    responses:              { [key: string]: AmbitiousResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface PutParameter {
    $ref?:        Ref;
    description?: string;
    in?:          In;
    name?:        string;
    required?:    boolean;
    schema?:      AgentClass;
    items?:       PurpleItems;
    maxItems?:    number;
    type?:        Type;
    format?:      Format;
    maximum?:     number;
    minimum?:     number;
    default?:     boolean;
}

export interface CharactersCharacterIDContactsPut {
    description:            string;
    operationId:            string;
    parameters:             PutParameter[];
    responses:              { [key: string]: MagentaResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface CharactersCharacterIDContractsClass {
    get: CharactersCharacterIDContractsGet;
}

export interface CharactersCharacterIDContractsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: MagentaResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface CharactersCharacterIDContractsContractIDBids {
    get: CharactersCharacterIDContractsContractIDBidsGet;
}

export interface CharactersCharacterIDContractsContractIDBidsGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response7 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response7 {
    description: string;
    examples?:   Examples7;
    headers?:    PurpleHeaders;
    schema?:     Schema7;
}

export interface Examples7 {
    "application/json": ApplicationJSON13[] | ApplicationJSON14;
}

export interface ApplicationJSON13 {
    amount:     number;
    bid_id:     number;
    bidder_id?: number;
    date_bid:   Date;
}

export interface ApplicationJSON14 {
    name?:            string;
    owner_id?:        number;
    solar_system_id?: number;
    error?:           ErrorEnum;
}

export interface Schema7 {
    description?: string;
    items?:       Items8;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    properties?:  Properties28;
    required?:    string[];
    $ref?:        Ref;
}

export interface Items8 {
    description: PurpleDescription;
    properties:  Properties27;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties27 {
    amount:     ApprovedCost;
    bid_id:     ApprovedCost;
    bidder_id?: ApprovedCost;
    date_bid:   ApprovedCost;
}

export interface Properties28 {
    name?:            OwnerIDClass;
    owner_id?:        OwnerIDClass;
    position?:        PropertiesPosition;
    solar_system_id?: OwnerIDClass;
    type_id?:         OwnerIDClass;
    error?:           Px128X128;
}

export interface CharactersCharacterIDContractsContractIDItems {
    get: CharactersCharacterIDContractsContractIDItemsGet;
}

export interface CharactersCharacterIDContractsContractIDItemsGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response8 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response8 {
    description: string;
    examples?:   Examples8;
    headers?:    PurpleHeaders;
    schema?:     Schema8;
}

export interface Examples8 {
    "application/json": ApplicationJSON15[] | PurpleApplicationJSON;
}

export interface ApplicationJSON15 {
    is_included:   boolean;
    is_singleton?: boolean;
    quantity:      number;
    record_id:     number;
    type_id:       number;
    item_id?:      number;
}

export interface Schema8 {
    description?: string;
    items?:       Items9;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
    properties?:  Properties3;
}

export interface Items9 {
    description: PurpleDescription;
    properties:  Properties29;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties29 {
    is_included:  Px128X128;
    is_singleton: Px128X128;
    quantity:     CharacterID;
    raw_quantity: CharacterID;
    record_id:    CharacterID;
    type_id:      CharacterID;
}

export interface History {
    get: CharactersCharacterIDCorporationhistoryGet;
}

export interface CharactersCharacterIDCorporationhistoryGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response9 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response9 {
    description: Title;
    examples?:   Examples9;
    headers?:    PurpleHeaders;
    schema?:     Schema9;
}

export interface Examples9 {
    "application/json": ApplicationJSON16[] | PurpleApplicationJSON;
}

export interface ApplicationJSON16 {
    corporation_id?: number;
    is_deleted?:     boolean;
    record_id:       number;
    start_date:      Date;
    alliance_id?:    number;
}

export interface Schema9 {
    description?: FluffyDescription;
    items?:       Items10;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items10 {
    description: PurpleDescription;
    properties:  Properties30;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties30 {
    corporation_id?: EventResponseClass;
    is_deleted:      EventResponseClass;
    record_id:       EventResponseClass;
    start_date:      EventResponseClass;
    alliance_id?:    EventResponseClass;
}

export interface CharactersCharacterIDFittings {
    get:  CharactersCharacterIDContactsGet;
    post: CharactersCharacterIDFittingsPost;
}

export interface CharactersCharacterIDFittingsPost {
    description:            string;
    operationId:            string;
    parameters:             FluffyParameter[];
    responses:              { [key: string]: MischievousResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface FluffyParameter {
    $ref?:        Ref;
    description?: string;
    in?:          In;
    name?:        string;
    required?:    boolean;
    schema?:      Schema10;
}

export interface Schema10 {
    description: string;
    properties:  Properties31;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties31 {
    description:  ToCorpOrAllianceID;
    items:        Items6;
    name:         ToCorpOrAllianceID;
    ship_type_id: ApprovedCost;
}

export interface CharactersCharacterIDFittingsFittingID {
    delete: PostClass;
}

export interface PostClass {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response10 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response10 {
    description: Title;
    examples?:   Examples10;
    schema?:     SchemaElement;
}

export interface Examples10 {
    "application/json": PurpleApplicationJSON;
}

export interface CharactersCharacterIDFleet {
    get: CharactersCharacterIDFleetGet;
}

export interface CharactersCharacterIDFleetGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response11 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response11 {
    description: string;
    examples?:   Examples11;
    headers?:    PurpleHeaders;
    schema?:     Schema11;
}

export interface Examples11 {
    "application/json": ApplicationJSON17;
}

export interface ApplicationJSON17 {
    fleet_id?: number;
    role?:     string;
    squad_id?: number;
    wing_id?:  number;
    error?:    ErrorEnum;
}

export interface Schema11 {
    description?: string;
    properties?:  Properties32;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties32 {
    fleet_id?: ApprovedCost;
    role?:     ApprovedCost;
    squad_id?: ApprovedCost;
    wing_id?:  ApprovedCost;
    error?:    Px128X128;
}

export interface CharactersCharacterIDFwStats {
    get: CharactersCharacterIDFwStatsGet;
}

export interface CharactersCharacterIDFwStatsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response12 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response12 {
    description: string;
    examples?:   Examples12;
    headers?:    PurpleHeaders;
    schema?:     Schema12;
}

export interface Examples12 {
    "application/json": ApplicationJSON18[] | ApplicationJSON19;
}

export interface ApplicationJSON18 {
    item_id?:                 number;
    location_flag?:           string;
    location_id?:             number;
    material_efficiency?:     number;
    quantity?:                number;
    runs?:                    number;
    time_efficiency?:         number;
    type_id?:                 number;
    date?:                    Date;
    solar_system_id?:         number;
    character_id?:            number;
    last_updated?:            Date;
    recorded_corporation_id?: number;
    killmail_hash?:           string;
    killmail_id?:             number;
    created_at?:              Date;
    creator_id?:              number;
    description?:             string;
    medal_id?:                number;
    title?:                   string;
    starbase_id?:             number;
    system_id?:               number;
}

export interface ApplicationJSON19 {
    enlisted_on?:    Date;
    faction_id?:     number;
    kills?:          PurpleKills;
    victory_points?: PurpleKills;
    solar_system?:   number[];
    station?:        number[];
    error?:          ErrorEnum;
}

export interface Schema12 {
    description?: string;
    items?:       Items11;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    properties?:  Properties34;
    required?:    string[];
    $ref?:        Ref;
}

export interface Items11 {
    description: PurpleDescription;
    properties:  Properties33;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties33 {
    item_id?:                 ApprovedCost;
    location_flag?:           ApprovedCost;
    location_id?:             ApprovedCost;
    material_efficiency?:     EventResponseClass;
    quantity?:                Quantity;
    runs?:                    EventResponseClass;
    time_efficiency?:         EventResponseClass;
    type_id?:                 CharacterID;
    date?:                    ApprovedCost;
    solar_system_id?:         ApprovedCost;
    character_id?:            EventResponseClass;
    last_updated?:            EventResponseClass;
    recorded_corporation_id?: EventResponseClass;
    killmail_hash?:           EventResponseClass;
    killmail_id?:             EventResponseClass;
    created_at?:              ApprovedCost;
    creator_id?:              ApprovedCost;
    description?:             ApprovedCost;
    medal_id?:                ApprovedCost;
    title?:                   ApprovedCost;
    moon_id?:                 ApprovedCost;
    onlined_since?:           ApprovedCost;
    reinforced_until?:        ApprovedCost;
    starbase_id?:             ApprovedCost;
    state?:                   ApprovedCost;
    system_id?:               ApprovedCost;
    unanchor_at?:             ApprovedCost;
}

export interface Quantity {
    description: string;
    format:      Format;
    minimum?:    number;
    title:       string;
    type:        Type;
}

export interface Properties34 {
    current_rank?:   EventResponseClass;
    enlisted_on?:    EventResponseClass;
    faction_id?:     EventResponseClass;
    highest_rank?:   EventResponseClass;
    kills?:          FluffyKills;
    victory_points?: FluffyKills;
    agent?:          AgentClass;
    alliance?:       Alliance;
    character?:      Alliance;
    constellation?:  Alliance;
    corporation?:    Alliance;
    faction?:        Alliance;
    inventory_type?: Alliance;
    region?:         Alliance;
    solar_system?:   Alliance;
    station?:        Alliance;
    structure?:      Alliance;
    error?:          Px128X128;
}

export interface CharactersCharacterIDImplants {
    get: CharactersCharacterIDImplantsGet;
}

export interface CharactersCharacterIDImplantsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response13 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response13 {
    description: ResponseDescription;
    examples?:   PurpleExamples;
    schema?:     Schema13;
    headers?:    PurpleHeaders;
}

export enum ResponseDescription {
    AListOfConstellationIDS = "A list of constellation ids",
    AListOfContactIDSThatSuccessfullyCreated = "A list of contact ids that successfully created",
    AListOfDogmaAttributeIDS = "A list of dogma attribute ids",
    AListOfDogmaEffectIDS = "A list of dogma effect ids",
    AListOfGraphicIDS = "A list of graphic ids",
    AListOfImplantTypeIDS = "A list of implant type ids",
    AListOfItemCategoryIDS = "A list of item category ids",
    AListOfItemGroupIDS = "A list of item group ids",
    AListOfNpcCorporationIDS = "A list of npc corporation ids",
    AListOfOpportunitiesGroupIDS = "A list of opportunities group ids",
    AListOfOpportunitiesTaskIDS = "A list of opportunities task ids",
    AListOfRegionIDS = "A list of region ids",
    AListOfSolarSystemIDS = "A list of solar system ids",
    AListOfTypeIDS = "A list of type ids",
    AListOfTypeIDs = "A list of type IDs",
    AListOfWarIDsInDescendingOrderByWarID = "A list of war IDs, in descending order by war_id",
    BadRequest = "Bad request",
    ContractExpiredOrRecentlyAcceptedByPlayer = "Contract expired or recently accepted by player",
    ErrorLimited = "Error limited",
    Forbidden = "Forbidden",
    GatewayTimeout = "Gateway timeout",
    InternalServerError = "Internal server error",
    ListOfMemberCharacterIDs = "List of member character IDs",
    NotModified = "Not modified",
    ServiceUnavailable = "Service unavailable",
    SolarSystemsInRouteFromOriginToDestination = "Solar systems in route from origin to destination",
    Unauthorized = "Unauthorized",
}

export interface Schema13 {
    description?: string;
    items?:       CharacterID;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface CharactersCharacterIDIndustryJobs {
    get: CharactersCharacterIDIndustryJobsGet;
}

export interface CharactersCharacterIDIndustryJobsGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: AmbitiousResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface IDKillmailsRecent {
    get: CharactersCharacterIDKillmailsRecentGet;
}

export interface CharactersCharacterIDKillmailsRecentGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response14 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles"?:    string[];
}

export interface Response14 {
    description: Title;
    examples?:   Examples13;
    headers?:    PurpleHeaders;
    schema?:     Schema14;
}

export interface Examples13 {
    "application/json": ApplicationJSON20[] | PurpleApplicationJSON;
}

export interface ApplicationJSON20 {
    killmail_hash: string;
    killmail_id:   number;
}

export interface Schema14 {
    description?: FluffyDescription;
    items?:       Items12;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items12 {
    description: PurpleDescription;
    properties:  Properties35;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties35 {
    killmail_hash: Px128X128;
    killmail_id:   CharacterID;
}

export interface CharactersCharacterIDLocationClass {
    get: CharactersCharacterIDLocationGet;
}

export interface CharactersCharacterIDLocationGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: FriskyResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface CharactersCharacterIDMail {
    get:  CharactersCharacterIDMailGet;
    post: CharactersCharacterIDMailPost;
}

export interface CharactersCharacterIDMailGet {
    description:            string;
    operationId:            string;
    parameters:             TentacledParameter[];
    responses:              { [key: string]: Response6 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface TentacledParameter {
    $ref?:        Ref;
    description?: string;
    in?:          In;
    items?:       Items13;
    maxItems?:    number;
    minItems?:    number;
    name?:        string;
    required?:    boolean;
    type?:        Type;
    uniqueItems?: boolean;
    format?:      Format;
}

export interface Items13 {
    format:  Format;
    minimum: number;
    type:    Type;
}

export interface CharactersCharacterIDMailPost {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response15 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response15 {
    description: string;
    examples?:   Examples14;
    headers?:    PurpleHeaders;
    schema?:     Schema15;
}

export interface Examples14 {
    "application/json": ApplicationJSON21[] | ApplicationJSON22 | number;
}

export interface ApplicationJSON21 {
    bookmark_id?:     number;
    created?:         Date;
    creator_id?:      number;
    folder_id?:       number;
    item?:            PurpleItem;
    label?:           string;
    location_id?:     number;
    notes?:           string;
    coordinates?:     ApplicationJSONPosition;
    duration?:        number;
    escrow?:          number;
    is_buy_order?:    boolean;
    is_corporation?:  boolean;
    issued?:          Date;
    min_volume?:      number;
    order_id?:        number;
    price?:           number;
    range?:           string;
    region_id?:       number;
    state?:           string;
    type_id?:         number;
    volume_remain?:   number;
    volume_total?:    number;
    amount?:          number;
    balance?:         number;
    context_id?:      number;
    context_id_type?: string;
    date?:            Date;
    description?:     string;
    first_party_id?:  number;
    id?:              number;
    ref_type?:        string;
    second_party_id?: number;
    character_id?:    number;
    roles?:           string[];
}

export interface ApplicationJSON22 {
    labels?:             Label[];
    total_unread_count?: number;
    hangar?:             HangarElement[];
    wallet?:             HangarElement[];
    error?:              ErrorEnum;
    squad_id?:           number;
}

export interface HangarElement {
    division: number;
    name:     string;
}

export interface Label {
    color:        string;
    label_id:     number;
    name:         string;
    unread_count: number;
}

export interface Schema15 {
    description?: string;
    items?:       Items14;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    properties?:  Properties37;
    format?:      Format;
    $ref?:        Ref;
    required?:    string[];
}

export interface Items14 {
    description: PurpleDescription;
    properties:  Properties36;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties36 {
    bookmark_id?:              EventResponseClass;
    coordinates?:              PropertiesPosition;
    created?:                  EventResponseClass;
    creator_id?:               EventResponseClass;
    folder_id?:                EventResponseClass;
    item?:                     PropertiesItem;
    label?:                    ApprovedCost;
    location_id?:              CharacterID;
    notes?:                    ApprovedCost;
    duration?:                 EventResponseClass;
    escrow?:                   EventResponseClass;
    is_buy_order?:             EventResponseClass;
    is_corporation?:           EventResponseClass;
    issued?:                   EventResponseClass;
    min_volume?:               EventResponseClass;
    order_id?:                 EventResponseClass;
    price?:                    EventResponseClass;
    range?:                    EventResponseClass;
    region_id?:                EventResponseClass;
    state?:                    EventResponseClass;
    type_id?:                  EventResponseClass;
    volume_remain?:            EventResponseClass;
    volume_total?:             EventResponseClass;
    amount?:                   EventResponseClass;
    balance?:                  EventResponseClass;
    context_id?:               EventResponseClass;
    context_id_type?:          EventResponseClass;
    date?:                     EventResponseClass;
    description?:              EventResponseClass;
    first_party_id?:           EventResponseClass;
    id?:                       EventResponseClass;
    reason?:                   EventResponseClass;
    ref_type?:                 EventResponseClass;
    second_party_id?:          EventResponseClass;
    tax?:                      EventResponseClass;
    tax_receiver_id?:          EventResponseClass;
    character_id?:             EventResponseClass;
    grantable_roles?:          Roles;
    grantable_roles_at_base?:  Roles;
    grantable_roles_at_hq?:    Roles;
    grantable_roles_at_other?: Roles;
    roles?:                    Roles;
    roles_at_base?:            Roles;
    roles_at_hq?:              Roles;
    roles_at_other?:           Roles;
}

export interface Properties37 {
    labels?:             TentacledLabels;
    total_unread_count?: ApprovedCost;
    hangar?:             PropertiesHangar;
    wallet?:             PropertiesHangar;
    squad_id?:           ToCorpOrAllianceID;
    error?:              Px128X128;
}

export interface TentacledLabels {
    description: string;
    items:       EventResponseClass;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface CharactersCharacterIDMailLabels {
    get:  CharactersCharacterIDMailLabelsGet;
    post: DeleteClass;
}

export interface CharactersCharacterIDMailLabelsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response15 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface DeleteClass {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response2 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface CharactersCharacterIDMailLabelsLabelID {
    delete: DeleteClass;
}

export interface CharactersCharacterIDMailMailID {
    delete: PostClass;
    get:    CharactersCharacterIDMailMailIDGet;
    put:    CharactersCharacterIDMailMailIDPut;
}

export interface CharactersCharacterIDMailMailIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response16 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response16 {
    description: string;
    examples?:   Examples15;
    headers?:    PurpleHeaders;
    schema?:     Schema16;
}

export interface Examples15 {
    "application/json": ApplicationJSON23;
}

export interface ApplicationJSON23 {
    body?:      string;
    from?:      number;
    labels?:    number[];
    read?:      boolean;
    subject?:   string;
    timestamp?: Date;
    error?:     ErrorEnum;
    wing_id?:   number;
}

export interface Schema16 {
    description?:  string;
    format?:       Format;
    title?:        string;
    type?:         Type;
    properties?:   Properties38;
    default?:      number | string;
    enum?:         string[];
    maxLength?:    number;
    minimum?:      number;
    minLength?:    number;
    uniqueItems?:  boolean;
    maximum?:      number;
    "x-nullable"?: boolean;
    $ref?:         Ref;
    required?:     string[];
}

export interface Properties38 {
    error?:              ApprovedCost;
    px128x128?:          Px128X128;
    px64x64?:            Px128X128;
    character_id?:       CharacterID;
    event_response?:     EventResponseClass;
    from?:               EventResponseClass;
    is_read?:            EventResponseClass;
    labels?:             FluffyLabels;
    mail_id?:            EventResponseClass;
    recipients?:         PurpleRecipients;
    subject?:            Px128X128;
    timestamp?:          CharacterID;
    total_unread_count?: ApprovedCost;
    body?:               EventResponseClass;
    read?:               EventResponseClass;
    px256x256?:          Px128X128;
    px512x512?:          EventResponseClass;
    agent?:              AgentClass;
    alliance?:           Alliance;
    character?:          Alliance;
    constellation?:      Alliance;
    corporation?:        Alliance;
    faction?:            Alliance;
    inventory_type?:     Alliance;
    region?:             Alliance;
    solar_system?:       Alliance;
    station?:            Alliance;
    structure?:          Alliance;
    hangar?:             PropertiesHangar;
    wallet?:             PropertiesHangar;
    division?:           ApprovedCost;
    name?:               ApprovedCost;
    amount?:             ApprovedCost;
    faction_id?:         ApprovedCost;
    corporation_id?:     ApprovedCost;
    wing_id?:            ToCorpOrAllianceID;
}

export interface CharactersCharacterIDMailMailIDPut {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response3 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface CharactersCharacterIDMining {
    get: CharactersCharacterIDMiningGet;
}

export interface CharactersCharacterIDMiningGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response12 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface CharactersCharacterIDOrdersClass {
    get: CharactersCharacterIDContactsGet;
}

export interface CharactersCharacterIDOrdersHistory {
    get: CharactersCharacterIDMailLabelsGet;
}

export interface CharactersCharacterIDPlanets {
    get: CharactersCharacterIDPlanetsGet;
}

export interface CharactersCharacterIDPlanetsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response3 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface CharactersCharacterIDPlanetsPlanetID {
    get: DeleteClass;
}

export interface CharactersCharacterIDPortrait {
    get: CharactersCharacterIDPortraitGet;
}

export interface CharactersCharacterIDPortraitGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response17 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response17 {
    description: string;
    examples?:   Examples16;
    headers?:    PurpleHeaders;
    schema?:     IndigoSchema;
}

export interface Examples16 {
    "application/json": ApplicationJSON24;
}

export interface ApplicationJSON24 {
    px128x128?: string;
    px256x256?: string;
    px512x512?: string;
    px64x64?:   string;
    error?:     ErrorEnum;
}

export interface CharactersCharacterIDSearch {
    get: CharactersCharacterIDSearchGet;
}

export interface CharactersCharacterIDSearchGet {
    description:            string;
    operationId:            string;
    parameters:             StickyParameter[];
    responses:              { [key: string]: Response12 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface StickyParameter {
    $ref?:        Ref;
    description?: string;
    in?:          In;
    items?:       Items15;
    maxItems?:    number;
    minItems?:    number;
    name?:        string;
    required?:    boolean;
    type?:        Type;
    uniqueItems?: boolean;
    minLength?:   number;
    default?:     boolean;
}

export interface Items15 {
    enum: string[];
    type: Type;
}

export interface CharactersCharacterIDWallet {
    get: CharactersCharacterIDWalletGet;
}

export interface CharactersCharacterIDWalletGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response18 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles"?:    string[];
}

export interface Response18 {
    description: string;
    examples?:   Examples17;
    schema?:     Schema17;
    headers?:    PurpleHeaders;
}

export interface Examples17 {
    "application/json": PurpleApplicationJSON | number;
}

export interface Schema17 {
    description?: string;
    format?:      Format;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface ContractsPublicBidsContractID {
    get: ContractsPublicBidsContractIDGet;
}

export interface ContractsPublicBidsContractIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response19 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response19 {
    description: string;
    examples?:   Examples18;
    headers?:    PurpleHeaders;
    schema?:     Schema18;
}

export interface Examples18 {
    "application/json": ApplicationJSON13[] | PurpleApplicationJSON;
}

export interface Schema18 {
    description?: string;
    items?:       Items8;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
    properties?:  Properties3;
}

export interface ContractsPublicItemsContractID {
    get: ContractsPublicItemsContractIDGet;
}

export interface ContractsPublicItemsContractIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response20 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response20 {
    description: string;
    examples?:   Examples8;
    headers?:    PurpleHeaders;
    schema?:     Schema19;
}

export interface Schema19 {
    description?: string;
    items?:       Items16;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
    properties?:  Properties3;
}

export interface Items16 {
    description: PurpleDescription;
    properties:  Properties39;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties39 {
    is_blueprint_copy:   EventResponseClass;
    is_included:         EventResponseClass;
    item_id:             EventResponseClass;
    material_efficiency: EventResponseClass;
    quantity:            EventResponseClass;
    record_id:           EventResponseClass;
    runs:                EventResponseClass;
    time_efficiency:     EventResponseClass;
    type_id:             EventResponseClass;
}

export interface ContractsPublicRegionID {
    get: ContractsPublicRegionIDGet;
}

export interface ContractsPublicRegionIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response21 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response21 {
    description: string;
    examples?:   Examples19;
    headers?:    PurpleHeaders;
    schema?:     Schema20;
}

export interface Examples19 {
    "application/json": ApplicationJSON25[] | PurpleApplicationJSON;
}

export interface ApplicationJSON25 {
    buyout:                number;
    contract_id:           number;
    date_expired:          Date;
    date_issued:           Date;
    days_to_complete:      number;
    end_location_id:       number;
    for_corporation:       boolean;
    issuer_corporation_id: number;
    issuer_id:             number;
    price:                 number;
    reward:                number;
    start_location_id:     number;
    type:                  string;
    volume:                number;
}

export interface Schema20 {
    description?: string;
    items?:       Items17;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
    properties?:  Properties3;
}

export interface Items17 {
    description: PurpleDescription;
    properties:  { [key: string]: ApprovedCost };
    required:    string[];
    title:       string;
    type:        Type;
}

export interface CorporationCorporationIDMiningExtractionsClass {
    get: CorporationCorporationIDMiningExtractionsGet;
}

export interface CorporationCorporationIDMiningExtractionsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response2 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationCorporationIDMiningObserversClass {
    get: CorporationCorporationIDMiningObserversGet;
}

export interface CorporationCorporationIDMiningObserversGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: MischievousResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationCorporationIDMiningObserversObserverID {
    get: CorporationCorporationIDMiningObserversObserverIDGet;
}

export interface CorporationCorporationIDMiningObserversObserverIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response12 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsNpccorps {
    get: CorporationsNpccorpsGet;
}

export interface CorporationsNpccorpsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response13 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface CorporationsCorporationID {
    get: CorporationsCorporationIDGet;
}

export interface CorporationsCorporationIDGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response22 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response22 {
    description: string;
    examples?:   Examples20;
    headers?:    PurpleHeaders;
    schema?:     Schema21;
}

export interface Examples20 {
    "application/json": ApplicationJSON26;
}

export interface ApplicationJSON26 {
    alliance_id?:  number;
    ceo_id?:       number;
    creator_id?:   number;
    date_founded?: Date;
    description?:  string;
    member_count?: number;
    name?:         string;
    tax_rate?:     number;
    ticker?:       string;
    url?:          string;
    error?:        ErrorEnum;
}

export interface Schema21 {
    description?: string;
    properties?:  Properties40;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties40 {
    alliance_id?:     EventResponseClass;
    ceo_id?:          EventResponseClass;
    creator_id?:      EventResponseClass;
    date_founded?:    EventResponseClass;
    description?:     EventResponseClass;
    faction_id?:      EventResponseClass;
    home_station_id?: EventResponseClass;
    member_count?:    EventResponseClass;
    name?:            EventResponseClass;
    shares?:          EventResponseClass;
    tax_rate?:        EventResponseClass;
    ticker?:          EventResponseClass;
    url?:             EventResponseClass;
    war_eligible?:    EventResponseClass;
    error?:           Px128X128;
}

export interface CorporationsCorporationIDAssets {
    get: CorporationsCorporationIDAssetsGet;
}

export interface CorporationsCorporationIDAssetsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: CunningResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDAssetsLocationsClass {
    post: CorporationsCorporationIDAssetsLocationsPost;
}

export interface CorporationsCorporationIDAssetsLocationsPost {
    description:            string;
    operationId:            string;
    parameters:             PurpleParameter[];
    responses:              { [key: string]: AmbitiousResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDContactsClass {
    get: CorporationsCorporationIDContactsGet;
}

export interface CorporationsCorporationIDContactsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: MagentaResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDContainersLogsClass {
    get: CorporationsCorporationIDContainersLogsGet;
}

export interface CorporationsCorporationIDContainersLogsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: FriskyResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDContractsClass {
    get: CorporationsCorporationIDContractsGet;
}

export interface CorporationsCorporationIDContractsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: TentacledResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDContractsContractIDBids {
    get: CorporationsCorporationIDContractsContractIDBidsGet;
}

export interface CorporationsCorporationIDContractsContractIDBidsGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response19 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     any[];
}

export interface CorporationsCorporationIDContractsContractIDItems {
    get: CorporationsCorporationIDContractsContractIDItemsGet;
}

export interface CorporationsCorporationIDContractsContractIDItemsGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response8 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     any[];
}

export interface CorporationsCorporationIDCustomsOfficesClass {
    get: CorporationsCorporationIDCustomsOfficesGet;
}

export interface CorporationsCorporationIDCustomsOfficesGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response6 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDDivisions {
    get: CorporationsCorporationIDDivisionsGet;
}

export interface CorporationsCorporationIDDivisionsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response15 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDFacilitiesClass {
    get: CorporationsCorporationIDFacilitiesGet;
}

export interface CorporationsCorporationIDFacilitiesGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response3 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDFwStats {
    get: CorporationsCorporationIDFwStatsGet;
}

export interface CorporationsCorporationIDFwStatsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response2 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface CorporationsCorporationIDIcons {
    get: CorporationsCorporationIDIconsGet;
}

export interface CorporationsCorporationIDIconsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response17 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface CorporationsCorporationIDIndustryJobs {
    get: CorporationsCorporationIDIndustryJobsGet;
}

export interface CorporationsCorporationIDIndustryJobsGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: MischievousResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDMedalsClass {
    get: CorporationsCorporationIDMedalsGet;
}

export interface CorporationsCorporationIDMedalsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response12 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDMedalsIssued {
    get: CorporationsCorporationIDMedalsIssuedGet;
}

export interface CorporationsCorporationIDMedalsIssuedGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: AmbitiousResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDStarbasesStarbaseID {
    get: CorporationsCorporationIDStarbasesStarbaseIDGet;
}

export interface CorporationsCorporationIDStarbasesStarbaseIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: AmbitiousResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface CorporationsCorporationIDWalletsDivision {
    get: CorporationsCorporationIDWalletsDivisionJournalGet;
}

export interface CorporationsCorporationIDWalletsDivisionJournalGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response6 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
    "x-required-roles":     string[];
}

export interface DogmaAttributesAttributeID {
    get: DogmaAttributesAttributeIDGet;
}

export interface DogmaAttributesAttributeIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response23 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response23 {
    description: string;
    examples?:   Examples21;
    headers?:    PurpleHeaders;
    schema?:     Schema22;
}

export interface Examples21 {
    "application/json": ApplicationJSON27;
}

export interface ApplicationJSON27 {
    attribute_id?:  number;
    default_value?: number;
    description?:   string;
    display_name?:  string;
    high_is_good?:  boolean;
    icon_id?:       number;
    name?:          string;
    published?:     boolean;
    unit_id?:       number;
    error?:         ErrorEnum;
}

export interface Schema22 {
    description?: string;
    properties?:  Properties41;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties41 {
    attribute_id?:  EventResponseClass;
    default_value?: EventResponseClass;
    description?:   EventResponseClass;
    display_name?:  EventResponseClass;
    high_is_good?:  EventResponseClass;
    icon_id?:       EventResponseClass;
    name?:          EventResponseClass;
    published?:     EventResponseClass;
    stackable?:     EventResponseClass;
    unit_id?:       EventResponseClass;
    error?:         Px128X128;
}

export interface DogmaDynamicItemsTypeIDItemID {
    get: DogmaDynamicItemsTypeIDItemIDGet;
}

export interface DogmaDynamicItemsTypeIDItemIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response24 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response24 {
    description: string;
    examples?:   Examples22;
    headers?:    PurpleHeaders;
    schema?:     Schema23;
}

export interface Examples22 {
    "application/json": ApplicationJSON28;
}

export interface ApplicationJSON28 {
    created_by?:       number;
    dogma_attributes?: DogmaAttribute[];
    dogma_effects?:    DogmaEffect[];
    mutator_type_id?:  number;
    source_type_id?:   number;
    error?:            ErrorEnum;
}

export interface DogmaAttribute {
    attribute_id: number;
    value:        number;
}

export interface DogmaEffect {
    effect_id:  number;
    is_default: boolean;
}

export interface Schema23 {
    description?: string;
    properties?:  Properties42;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties42 {
    created_by?:       EventResponseClass;
    dogma_attributes?: DogmaAttributes;
    dogma_effects?:    DogmaEffects;
    mutator_type_id?:  EventResponseClass;
    source_type_id?:   EventResponseClass;
    error?:            Px128X128;
}

export interface DogmaAttributes {
    description: string;
    items:       DogmaAttributesItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface DogmaAttributesItems {
    description: string;
    properties:  Properties43;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties43 {
    attribute_id: CharacterID;
    value:        CharacterID;
}

export interface DogmaEffects {
    description: string;
    items:       DogmaEffectsItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface DogmaEffectsItems {
    description: string;
    properties:  Properties44;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties44 {
    effect_id:  CharacterID;
    is_default: Px128X128;
}

export interface DogmaEffectsEffectID {
    get: DogmaEffectsEffectIDGet;
}

export interface DogmaEffectsEffectIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response25 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response25 {
    description: string;
    examples?:   Examples23;
    headers?:    PurpleHeaders;
    schema?:     Schema24;
}

export interface Examples23 {
    "application/json": ApplicationJSON29;
}

export interface ApplicationJSON29 {
    description?:     string;
    display_name?:    string;
    effect_category?: number;
    effect_id?:       number;
    icon_id?:         number;
    name?:            string;
    post_expression?: number;
    pre_expression?:  number;
    published?:       boolean;
    error?:           ErrorEnum;
}

export interface Schema24 {
    description?: string;
    properties?:  Properties45;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties45 {
    description?:                 EventResponseClass;
    disallow_auto_repeat?:        EventResponseClass;
    discharge_attribute_id?:      EventResponseClass;
    display_name?:                EventResponseClass;
    duration_attribute_id?:       EventResponseClass;
    effect_category?:             EventResponseClass;
    effect_id?:                   EventResponseClass;
    electronic_chance?:           EventResponseClass;
    falloff_attribute_id?:        EventResponseClass;
    icon_id?:                     EventResponseClass;
    is_assistance?:               EventResponseClass;
    is_offensive?:                EventResponseClass;
    is_warp_safe?:                EventResponseClass;
    modifiers?:                   Modifiers;
    name?:                        ApprovedCost;
    post_expression?:             ApprovedCost;
    pre_expression?:              ApprovedCost;
    published?:                   ApprovedCost;
    range_attribute_id?:          ApprovedCost;
    range_chance?:                ApprovedCost;
    tracking_speed_attribute_id?: ApprovedCost;
    error?:                       Px128X128;
}

export interface Modifiers {
    description: string;
    items:       ModifiersItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface ModifiersItems {
    description: string;
    properties:  Properties46;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties46 {
    domain:                 ApprovedCost;
    effect_id:              ApprovedCost;
    func:                   ApprovedCost;
    modified_attribute_id:  ApprovedCost;
    modifying_attribute_id: ApprovedCost;
    operator:               ApprovedCost;
}

export interface FleetsFleetID {
    get: FleetsFleetIDGet;
    put: FleetsFleetIDPut;
}

export interface FleetsFleetIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response26 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response26 {
    description: string;
    examples?:   Examples24;
    headers?:    PurpleHeaders;
    schema?:     Schema25;
}

export interface Examples24 {
    "application/json": ApplicationJSON30;
}

export interface ApplicationJSON30 {
    is_free_move?:     boolean;
    is_registered?:    boolean;
    is_voice_enabled?: boolean;
    motd?:             string;
    error?:            ErrorEnum;
}

export interface Schema25 {
    description?: string;
    properties?:  Properties47;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties47 {
    is_free_move?:     ApprovedCost;
    is_registered?:    ApprovedCost;
    is_voice_enabled?: ApprovedCost;
    motd?:             ApprovedCost;
    error?:            Px128X128;
}

export interface FleetsFleetIDPut {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: CunningResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface FleetsFleetIDMembers {
    get:  FleetsFleetIDMembersGet;
    post: FleetsFleetIDMembersPost;
}

export interface FleetsFleetIDMembersGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: CunningResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface FleetsFleetIDMembersPost {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response4 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface FleetsFleetIDMembersMemberID {
    delete: PutClass;
    put:    FleetsFleetIDMembersMemberIDPut;
}

export interface PutClass {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response27 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response27 {
    description: string;
    examples?:   Examples10;
    schema?:     Schema26;
}

export interface Schema26 {
    $ref?:        Ref;
    description?: string;
    properties?:  Properties3;
    title?:       string;
    type?:        Type;
}

export interface FleetsFleetIDMembersMemberIDPut {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response7 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface FleetsFleetIDID {
    delete: PutClass;
    put:    PutClass;
}

export interface FleetsFleetIDWings {
    get:  CharactersCharacterIDCalendarEventIDGet;
    post: FleetsFleetIDWingsPost;
}

export interface FleetsFleetIDWingsPost {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response16 };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface FleetsFleetIDWingsWingIDSquads {
    post: CharactersCharacterIDMailPost;
}

export interface FwLeaderboards {
    get: FwLeaderboardsGet;
}

export interface FwLeaderboardsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response28 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response28 {
    description: string;
    examples?:   Examples25;
    headers?:    PurpleHeaders;
    schema?:     Schema27;
}

export interface Examples25 {
    "application/json": ApplicationJSON31;
}

export interface ApplicationJSON31 {
    kills?:          TentacledKills;
    victory_points?: TentacledKills;
    error?:          ErrorEnum;
}

export interface TentacledKills {
    active_total: PurpleActiveTotal[];
    last_week:    PurpleActiveTotal[];
    yesterday:    PurpleActiveTotal[];
}

export interface PurpleActiveTotal {
    amount:     number;
    faction_id: number;
}

export interface Schema27 {
    description?: PurpleDescription;
    properties?:  Properties48;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties48 {
    kills:          StickyKills;
    victory_points: StickyKills;
}

export interface StickyKills {
    description: string;
    properties:  Properties49;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties49 {
    active_total: FluffyActiveTotal;
    last_week:    FluffyActiveTotal;
    yesterday:    FluffyActiveTotal;
}

export interface FluffyActiveTotal {
    description: string;
    items:       Items18;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface Items18 {
    description: string;
    properties:  Properties50;
    title:       string;
    type:        Type;
}

export interface Properties50 {
    amount:     CharacterID;
    faction_id: CharacterID;
}

export interface FwLeaderboardsCharacters {
    get: FwLeaderboardsCharactersGet;
}

export interface FwLeaderboardsCharactersGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response29 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response29 {
    description: string;
    examples?:   Examples26;
    headers?:    PurpleHeaders;
    schema?:     Schema28;
}

export interface Examples26 {
    "application/json": ApplicationJSON32;
}

export interface ApplicationJSON32 {
    kills?:          IndigoKills;
    victory_points?: IndigoKills;
    error?:          ErrorEnum;
}

export interface IndigoKills {
    active_total: TentacledActiveTotal[];
    last_week:    TentacledActiveTotal[];
    yesterday:    TentacledActiveTotal[];
}

export interface TentacledActiveTotal {
    amount:       number;
    character_id: number;
}

export interface Schema28 {
    description?: PurpleDescription;
    properties?:  Properties51;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties51 {
    kills:          IndecentKills;
    victory_points: IndecentKills;
}

export interface IndecentKills {
    description: string;
    properties:  Properties52;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties52 {
    active_total: StickyActiveTotal;
    last_week:    StickyActiveTotal;
    yesterday:    StickyActiveTotal;
}

export interface StickyActiveTotal {
    description: string;
    items:       Items19;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface Items19 {
    description: string;
    properties:  Properties53;
    title:       string;
    type:        Type;
}

export interface Properties53 {
    amount:       CharacterID;
    character_id: CharacterID;
}

export interface FwLeaderboardsCorporations {
    get: FwLeaderboardsCorporationsGet;
}

export interface FwLeaderboardsCorporationsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response30 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response30 {
    description: string;
    examples?:   Examples27;
    headers?:    PurpleHeaders;
    schema?:     Schema29;
}

export interface Examples27 {
    "application/json": ApplicationJSON33;
}

export interface ApplicationJSON33 {
    kills?:          HilariousKills;
    victory_points?: HilariousKills;
    error?:          ErrorEnum;
}

export interface HilariousKills {
    active_total: IndigoActiveTotal[];
    last_week:    IndigoActiveTotal[];
    yesterday:    IndigoActiveTotal[];
}

export interface IndigoActiveTotal {
    amount:         number;
    corporation_id: number;
}

export interface Schema29 {
    description?: PurpleDescription;
    properties?:  Properties54;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties54 {
    kills:          AmbitiousKills;
    victory_points: AmbitiousKills;
}

export interface AmbitiousKills {
    description: string;
    properties:  Properties55;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties55 {
    active_total: IndecentActiveTotal;
    last_week:    IndecentActiveTotal;
    yesterday:    IndecentActiveTotal;
}

export interface IndecentActiveTotal {
    description: string;
    items:       Items20;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface Items20 {
    description: string;
    properties:  Properties56;
    title:       string;
    type:        Type;
}

export interface Properties56 {
    amount:         CharacterID;
    corporation_id: CharacterID;
}

export interface FwStats {
    get: FwStatsGet;
}

export interface FwStatsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response31 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response31 {
    description: Title;
    examples?:   Examples28;
    headers?:    PurpleHeaders;
    schema?:     Schema30;
}

export interface Examples28 {
    "application/json": ApplicationJSON34[] | PurpleApplicationJSON;
}

export interface ApplicationJSON34 {
    enlisted_on?:        Date;
    faction_id:          number;
    kills:               PurpleKills;
    victory_points:      PurpleKills;
    pilots?:             number;
    systems_controlled?: number;
}

export interface Schema30 {
    description?: FluffyDescription;
    items?:       Items21;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items21 {
    description: PurpleDescription;
    properties:  Properties57;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties57 {
    enlisted_on?:        ApprovedCost;
    faction_id:          CharacterID;
    kills:               FluffyKills;
    pilots:              CharacterID;
    victory_points:      FluffyKills;
    systems_controlled?: EventResponseClass;
}

export interface FwSystems {
    get: FwSystemsGet;
}

export interface FwSystemsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response32 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response32 {
    description: Title;
    examples?:   Examples29;
    headers?:    PurpleHeaders;
    schema?:     Schema31;
}

export interface Examples29 {
    "application/json": ApplicationJSON35[] | PurpleApplicationJSON;
}

export interface ApplicationJSON35 {
    contested:                string;
    occupier_faction_id:      number;
    owner_faction_id:         number;
    solar_system_id:          number;
    victory_points:           number;
    victory_points_threshold: number;
}

export interface Schema31 {
    description?: FluffyDescription;
    items?:       Items22;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items22 {
    description: PurpleDescription;
    properties:  Properties58;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties58 {
    contested:                EventResponseClass;
    occupier_faction_id:      EventResponseClass;
    owner_faction_id:         EventResponseClass;
    solar_system_id:          EventResponseClass;
    victory_points:           EventResponseClass;
    victory_points_threshold: EventResponseClass;
}

export interface FwWars {
    get: FwWarsGet;
}

export interface FwWarsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response33 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response33 {
    description: Title;
    examples?:   Examples30;
    headers?:    PurpleHeaders;
    schema?:     Schema32;
}

export interface Examples30 {
    "application/json": ApplicationJSON36[] | PurpleApplicationJSON;
}

export interface ApplicationJSON36 {
    against_id: number;
    faction_id: number;
}

export interface Schema32 {
    description?: string;
    items?:       Items23;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items23 {
    description: PurpleDescription;
    properties:  Properties59;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties59 {
    against_id: EventResponseClass;
    faction_id: EventResponseClass;
}

export interface Incursions {
    get: IncursionsGet;
}

export interface IncursionsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response34 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response34 {
    description: Title;
    examples?:   Examples31;
    headers?:    PurpleHeaders;
    schema?:     Schema33;
}

export interface Examples31 {
    "application/json": ApplicationJSON37[] | PurpleApplicationJSON;
}

export interface ApplicationJSON37 {
    constellation_id:        number;
    faction_id:              number;
    has_boss:                boolean;
    infested_solar_systems:  number[];
    influence:               number;
    staging_solar_system_id: number;
    state:                   string;
    type:                    string;
}

export interface Schema33 {
    description?: FluffyDescription;
    items?:       Items24;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items24 {
    description: PurpleDescription;
    properties:  Properties60;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties60 {
    constellation_id:        EventResponseClass;
    faction_id:              EventResponseClass;
    has_boss:                EventResponseClass;
    infested_solar_systems:  Alliance;
    influence:               EventResponseClass;
    staging_solar_system_id: EventResponseClass;
    state:                   EventResponseClass;
    type:                    EventResponseClass;
}

export interface IndustryFacilities {
    get: IndustryFacilitiesGet;
}

export interface IndustryFacilitiesGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response35 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response35 {
    description: Title;
    examples?:   Examples32;
    headers?:    PurpleHeaders;
    schema?:     Schema34;
}

export interface Examples32 {
    "application/json": ApplicationJSON38[] | PurpleApplicationJSON;
}

export interface ApplicationJSON38 {
    facility_id:     number;
    owner_id:        number;
    region_id:       number;
    solar_system_id: number;
    tax:             number;
    type_id:         number;
}

export interface Schema34 {
    description?: FluffyDescription;
    items?:       Items25;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items25 {
    description: PurpleDescription;
    properties:  Properties61;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties61 {
    facility_id:     EventResponseClass;
    owner_id:        EventResponseClass;
    region_id:       EventResponseClass;
    solar_system_id: EventResponseClass;
    tax:             EventResponseClass;
    type_id:         EventResponseClass;
}

export interface IndustrySystems {
    get: IndustrySystemsGet;
}

export interface IndustrySystemsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response36 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response36 {
    description: Title;
    examples?:   Examples33;
    headers?:    PurpleHeaders;
    schema?:     Schema35;
}

export interface Examples33 {
    "application/json": ApplicationJSON39[] | PurpleApplicationJSON;
}

export interface ApplicationJSON39 {
    cost_indices:    CostIndex[];
    solar_system_id: number;
}

export interface CostIndex {
    activity:   string;
    cost_index: number;
}

export interface Schema35 {
    description?: FluffyDescription;
    items?:       Items26;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items26 {
    description: PurpleDescription;
    properties:  Properties62;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties62 {
    cost_indices:    CostIndices;
    solar_system_id: EventResponseClass;
}

export interface CostIndices {
    description: string;
    items:       CostIndicesItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface CostIndicesItems {
    description: string;
    properties:  Properties63;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties63 {
    activity:   EventResponseClass;
    cost_index: EventResponseClass;
}

export interface InsurancePrices {
    get: InsurancePricesGet;
}

export interface InsurancePricesGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response37 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response37 {
    description: Title;
    examples?:   Examples34;
    headers?:    PurpleHeaders;
    schema?:     Schema36;
}

export interface Examples34 {
    "application/json": ApplicationJSON40[] | PurpleApplicationJSON;
}

export interface ApplicationJSON40 {
    levels:  Level[];
    type_id: number;
}

export interface Level {
    cost:   number;
    name:   string;
    payout: number;
}

export interface Schema36 {
    description?: FluffyDescription;
    items?:       Items27;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items27 {
    description: PurpleDescription;
    properties:  Properties64;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties64 {
    levels:  Levels;
    type_id: ApprovedCost;
}

export interface Levels {
    description: string;
    items:       LevelsItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface LevelsItems {
    description: string;
    properties:  Properties65;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties65 {
    cost:   ApprovedCost;
    name:   ApprovedCost;
    payout: ApprovedCost;
}

export interface KillmailsKillmailIDKillmailHash {
    get: KillmailsKillmailIDKillmailHashGet;
}

export interface KillmailsKillmailIDKillmailHashGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response38 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response38 {
    description: string;
    examples?:   Examples35;
    headers?:    PurpleHeaders;
    schema?:     Schema37;
}

export interface Examples35 {
    "application/json": ApplicationJSON41;
}

export interface ApplicationJSON41 {
    attackers?:       Attacker[];
    killmail_id?:     number;
    killmail_time?:   Date;
    solar_system_id?: number;
    victim?:          ApplicationJSONVictim;
    error?:           ErrorEnum;
}

export interface Attacker {
    character_id:    number;
    corporation_id:  number;
    damage_done:     number;
    faction_id:      number;
    final_blow:      boolean;
    security_status: number;
    ship_type_id:    number;
    weapon_type_id:  number;
}

export interface ApplicationJSONVictim {
    alliance_id:    number;
    character_id:   number;
    corporation_id: number;
    damage_taken:   number;
    items:          VictimItem[];
    position:       ApplicationJSONPosition;
    ship_type_id:   number;
}

export interface VictimItem {
    flag:             number;
    item_type_id:     number;
    quantity_dropped: number;
    singleton:        number;
}

export interface Schema37 {
    description?: string;
    properties?:  Properties66;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties66 {
    attackers?:       Attackers;
    killmail_id?:     ToCorpOrAllianceID;
    killmail_time?:   ToCorpOrAllianceID;
    moon_id?:         ToCorpOrAllianceID;
    solar_system_id?: ToCorpOrAllianceID;
    victim?:          PropertiesVictim;
    war_id?:          ToCorpOrAllianceID;
    error?:           Px128X128;
}

export interface Attackers {
    description: string;
    items:       AttackersItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface AttackersItems {
    description: string;
    properties:  Properties67;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties67 {
    alliance_id:     ToCorpOrAllianceID;
    character_id:    ToCorpOrAllianceID;
    corporation_id:  ToCorpOrAllianceID;
    damage_done:     ToCorpOrAllianceID;
    faction_id:      ToCorpOrAllianceID;
    final_blow:      ToCorpOrAllianceID;
    security_status: ToCorpOrAllianceID;
    ship_type_id:    ToCorpOrAllianceID;
    weapon_type_id:  ToCorpOrAllianceID;
}

export interface PropertiesVictim {
    description: string;
    properties:  VictimProperties;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface VictimProperties {
    alliance_id:    EventResponseClass;
    character_id:   EventResponseClass;
    corporation_id: EventResponseClass;
    damage_taken:   EventResponseClass;
    faction_id:     EventResponseClass;
    items:          Items28;
    position:       PropertiesPosition;
    ship_type_id:   ToCorpOrAllianceID;
}

export interface Properties68 {
    flag:               CharacterID;
    item_type_id:       CharacterID;
    items?:             Items28;
    quantity_destroyed: ToCorpOrAllianceID;
    quantity_dropped:   ToCorpOrAllianceID;
    singleton:          ToCorpOrAllianceID;
}

export interface Items29 {
    description: string;
    properties:  Properties68;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Items28 {
    description: string;
    items:       Items29;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface LoyaltyStoresCorporationIDOffers {
    get: LoyaltyStoresCorporationIDOffersGet;
}

export interface LoyaltyStoresCorporationIDOffersGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response39 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response39 {
    description: string;
    examples?:   Examples36;
    headers?:    PurpleHeaders;
    schema?:     Schema38;
}

export interface Examples36 {
    "application/json": ApplicationJSON42[] | PurpleApplicationJSON;
}

export interface ApplicationJSON42 {
    ak_cost?:       number;
    isk_cost:       number;
    lp_cost:        number;
    offer_id:       number;
    quantity:       number;
    required_items: RequiredItem[];
    type_id:        number;
}

export interface RequiredItem {
    quantity: number;
    type_id:  number;
}

export interface Schema38 {
    description?: string;
    items?:       Items30;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
    properties?:  Properties3;
}

export interface Items30 {
    description: PurpleDescription;
    properties:  Properties69;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties69 {
    ak_cost:        ToCorpOrAllianceID;
    isk_cost:       ToCorpOrAllianceID;
    lp_cost:        ToCorpOrAllianceID;
    offer_id:       ToCorpOrAllianceID;
    quantity:       ToCorpOrAllianceID;
    required_items: Fuels;
    type_id:        ToCorpOrAllianceID;
}

export interface MarketsGroupsMarketGroupID {
    get: MarketsGroupsMarketGroupIDGet;
}

export interface MarketsGroupsMarketGroupIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response40 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response40 {
    description: string;
    examples?:   Examples37;
    headers?:    PurpleHeaders;
    schema?:     Schema39;
}

export interface Examples37 {
    "application/json": ApplicationJSON43;
}

export interface ApplicationJSON43 {
    description?:     string;
    market_group_id?: number;
    name?:            string;
    parent_group_id?: number;
    types?:           number[];
    error?:           ErrorEnum;
}

export interface Schema39 {
    description?: string;
    properties?:  Properties70;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties70 {
    description?:     ToCorpOrAllianceID;
    market_group_id?: ToCorpOrAllianceID;
    name?:            ToCorpOrAllianceID;
    parent_group_id?: ToCorpOrAllianceID;
    types?:           AgentClass;
    error?:           Px128X128;
}

export interface MarketsPrices {
    get: MarketsPricesGet;
}

export interface MarketsPricesGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response41 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response41 {
    description: Title;
    examples?:   Examples38;
    headers?:    PurpleHeaders;
    schema?:     Schema40;
}

export interface Examples38 {
    "application/json": ApplicationJSON44[] | PurpleApplicationJSON;
}

export interface ApplicationJSON44 {
    adjusted_price: number;
    average_price:  number;
    type_id:        number;
}

export interface Schema40 {
    description?: FluffyDescription;
    items?:       Items31;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items31 {
    description: PurpleDescription;
    properties:  Properties71;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties71 {
    adjusted_price: ToCorpOrAllianceID;
    average_price:  ToCorpOrAllianceID;
    type_id:        ToCorpOrAllianceID;
}

export interface MarketsRegionIDHistory {
    get: MarketsRegionIDHistoryGet;
}

export interface MarketsRegionIDHistoryGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response42 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response42 {
    description: string;
    examples?:   Examples39;
    headers?:    PurpleHeaders;
    schema?:     Schema41;
}

export interface Examples39 {
    "application/json": ApplicationJSON45[] | PurpleApplicationJSON;
}

export interface ApplicationJSON45 {
    average:     number;
    date:        Date;
    highest:     number;
    lowest:      number;
    order_count: number;
    volume:      number;
}

export interface Schema41 {
    description?: string;
    items?:       Items32;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
    properties?:  Properties3;
}

export interface Items32 {
    description: PurpleDescription;
    properties:  Properties72;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties72 {
    average:     ApprovedCost;
    date:        ApprovedCost;
    highest:     ApprovedCost;
    lowest:      ApprovedCost;
    order_count: ApprovedCost;
    volume:      ApprovedCost;
}

export interface MarketsRegionIDOrders {
    get: MarketsRegionIDOrdersGet;
}

export interface MarketsRegionIDOrdersGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response43 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response43 {
    description: string;
    examples?:   Examples40;
    headers?:    PurpleHeaders;
    schema?:     Schema42;
}

export interface Examples40 {
    "application/json": ApplicationJSON46[] | PurpleApplicationJSON;
}

export interface ApplicationJSON46 {
    duration:         number;
    escrow?:          number;
    is_buy_order:     boolean;
    is_corporation?:  boolean;
    issued:           Date;
    location_id:      number;
    min_volume:       number;
    order_id:         number;
    price:            number;
    range:            string;
    region_id?:       number;
    type_id:          number;
    volume_remain:    number;
    volume_total:     number;
    state?:           string;
    issued_by?:       number;
    wallet_division?: number;
    system_id?:       number;
}

export interface Schema42 {
    description?: string;
    items?:       Items33;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
    properties?:  Properties3;
}

export interface Items33 {
    description: PurpleDescription;
    properties:  Properties73;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties73 {
    duration:         CharacterID;
    escrow?:          CharacterID;
    is_buy_order:     Px128X128;
    is_corporation?:  Px128X128;
    issued:           CharacterID;
    location_id:      CharacterID;
    min_volume:       CharacterID;
    order_id:         CharacterID;
    price:            CharacterID;
    range:            RecipientType;
    region_id?:       CharacterID;
    type_id:          CharacterID;
    volume_remain:    CharacterID;
    volume_total:     CharacterID;
    state?:           EventResponseClass;
    issued_by?:       CharacterID;
    wallet_division?: WalletDivision;
    system_id?:       EventResponseClass;
}

export interface WalletDivision {
    description: string;
    format:      Format;
    maximum:     number;
    minimum:     number;
    title:       string;
    type:        Type;
}

export interface MarketsRegionIDTypes {
    get: MarketsRegionIDTypesGet;
}

export interface MarketsRegionIDTypesGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response13 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface OpportunitiesGroupsGroupID {
    get: OpportunitiesGroupsGroupIDGet;
}

export interface OpportunitiesGroupsGroupIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response44 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response44 {
    description: Title;
    examples?:   Examples41;
    headers?:    PurpleHeaders;
    schema?:     Schema43;
}

export interface Examples41 {
    "application/json": ApplicationJSON47;
}

export interface ApplicationJSON47 {
    connected_groups?: number[];
    description?:      string;
    group_id?:         number;
    name?:             string;
    notification?:     string;
    required_tasks?:   number[];
    error?:            ErrorEnum;
}

export interface Schema43 {
    description?: PurpleDescription;
    properties?:  Properties74;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties74 {
    connected_groups: Alliance;
    description:      EventResponseClass;
    group_id:         EventResponseClass;
    name:             EventResponseClass;
    notification:     EventResponseClass;
    required_tasks:   AgentClass;
}

export interface OpportunitiesTasksTaskID {
    get: OpportunitiesTasksTaskIDGet;
}

export interface OpportunitiesTasksTaskIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response45 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response45 {
    description: Title;
    examples?:   Examples42;
    headers?:    PurpleHeaders;
    schema?:     Schema44;
}

export interface Examples42 {
    "application/json": ApplicationJSON48;
}

export interface ApplicationJSON48 {
    description?:  string;
    name?:         string;
    notification?: string;
    task_id?:      number;
    error?:        ErrorEnum;
}

export interface Schema44 {
    description?: PurpleDescription;
    properties?:  Properties75;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties75 {
    description:  EventResponseClass;
    name:         EventResponseClass;
    notification: EventResponseClass;
    task_id:      EventResponseClass;
}

export interface RouteOriginDestination {
    get: RouteOriginDestinationGet;
}

export interface RouteOriginDestinationGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: MagentaResponse };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface SovereigntyCampaigns {
    get: SovereigntyCampaignsGet;
}

export interface SovereigntyCampaignsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response46 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response46 {
    description: Title;
    examples?:   Examples43;
    headers?:    PurpleHeaders;
    schema?:     Schema45;
}

export interface Examples43 {
    "application/json": ApplicationJSON49[] | PurpleApplicationJSON;
}

export interface ApplicationJSON49 {
    attackers_score:  number;
    campaign_id:      number;
    constellation_id: number;
    defender_id:      number;
    defender_score:   number;
    event_type:       string;
    solar_system_id:  number;
    start_time:       Date;
    structure_id:     number;
}

export interface Schema45 {
    description?: FluffyDescription;
    items?:       Items34;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items34 {
    description: PurpleDescription;
    properties:  Properties76;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties76 {
    attackers_score:  ApprovedCost;
    campaign_id:      ApprovedCost;
    constellation_id: ApprovedCost;
    defender_id:      ApprovedCost;
    defender_score:   ApprovedCost;
    event_type:       ApprovedCost;
    participants:     Participants;
    solar_system_id:  EventResponseClass;
    start_time:       EventResponseClass;
    structure_id:     EventResponseClass;
}

export interface Participants {
    description: string;
    items:       ParticipantsItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface ParticipantsItems {
    description: string;
    properties:  Properties77;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties77 {
    alliance_id: EventResponseClass;
    score:       EventResponseClass;
}

export interface SovereigntyMap {
    get: SovereigntyMapGet;
}

export interface SovereigntyMapGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response47 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response47 {
    description: Title;
    examples?:   Examples44;
    headers?:    PurpleHeaders;
    schema?:     IndecentSchema;
}

export interface Examples44 {
    "application/json": ApplicationJSON50[] | PurpleApplicationJSON;
}

export interface ApplicationJSON50 {
    faction_id: number;
    system_id:  number;
}

export interface SovereigntyStructures {
    get: SovereigntyStructuresGet;
}

export interface SovereigntyStructuresGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response48 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response48 {
    description: Title;
    examples?:   Examples45;
    headers?:    PurpleHeaders;
    schema?:     Schema46;
}

export interface Examples45 {
    "application/json": ApplicationJSON51[] | PurpleApplicationJSON;
}

export interface ApplicationJSON51 {
    alliance_id:                   number;
    solar_system_id:               number;
    structure_id:                  number;
    structure_type_id:             number;
    vulnerability_occupancy_level: number;
    vulnerable_end_time:           Date;
    vulnerable_start_time:         Date;
}

export interface Schema46 {
    description?: FluffyDescription;
    items?:       Items35;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items35 {
    description: PurpleDescription;
    properties:  Properties78;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties78 {
    alliance_id:                   EventResponseClass;
    solar_system_id:               EventResponseClass;
    structure_id:                  EventResponseClass;
    structure_type_id:             EventResponseClass;
    vulnerability_occupancy_level: EventResponseClass;
    vulnerable_end_time:           EventResponseClass;
    vulnerable_start_time:         EventResponseClass;
}

export interface Status {
    get: StatusGet;
}

export interface StatusGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response49 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response49 {
    description: Title;
    examples?:   Examples46;
    headers?:    PurpleHeaders;
    schema?:     Schema47;
}

export interface Examples46 {
    "application/json": ApplicationJSON52;
}

export interface ApplicationJSON52 {
    players?:        number;
    server_version?: string;
    start_time?:     Date;
    error?:          ErrorEnum;
}

export interface Schema47 {
    description?: PurpleDescription;
    properties?:  Properties79;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties79 {
    players:        ToCorpOrAllianceID;
    server_version: ToCorpOrAllianceID;
    start_time:     ToCorpOrAllianceID;
    vip:            ToCorpOrAllianceID;
}

export interface UIAutopilotWaypoint {
    post: DeleteClass;
}

export interface UIOpenwindow {
    post: PostClass;
}

export interface UIOpenwindowNewmail {
    post: UIOpenwindowNewmailPost;
}

export interface UIOpenwindowNewmailPost {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: FriskyResponse };
    security:               Security[];
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface UniverseAncestries {
    get: UniverseAncestriesGet;
}

export interface UniverseAncestriesGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response50 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response50 {
    description: Title;
    examples?:   Examples47;
    headers?:    PurpleHeaders;
    schema?:     Schema48;
}

export interface Examples47 {
    "application/json": ApplicationJSON53[] | PurpleApplicationJSON;
}

export interface ApplicationJSON53 {
    bloodline_id:      number;
    description:       string;
    id:                number;
    name:              string;
    short_description: string;
}

export interface Schema48 {
    description?: FluffyDescription;
    items?:       Items36;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items36 {
    description: PurpleDescription;
    properties:  Properties80;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties80 {
    bloodline_id:      EventResponseClass;
    description:       EventResponseClass;
    icon_id:           EventResponseClass;
    id:                EventResponseClass;
    name:              EventResponseClass;
    short_description: EventResponseClass;
}

export interface UniverseID {
    get: UniverseAsteroidBeltsAsteroidBeltIDGet;
}

export interface UniverseAsteroidBeltsAsteroidBeltIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response51 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response51 {
    description: string;
    examples?:   Examples48;
    headers?:    PurpleHeaders;
    schema?:     Schema49;
}

export interface Examples48 {
    "application/json": ApplicationJSON54;
}

export interface ApplicationJSON54 {
    name?:      string;
    position?:  ApplicationJSONPosition;
    system_id?: number;
    moon_id?:   number;
    error?:     ErrorEnum;
}

export interface Schema49 {
    description?: string;
    properties?:  Properties81;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties81 {
    name?:      Px128X128;
    position?:  PropertiesPosition;
    system_id?: CharacterID;
    moon_id?:   ToCorpOrAllianceID;
    error?:     Px128X128;
}

export interface UniverseBloodlines {
    get: UniverseBloodlinesGet;
}

export interface UniverseBloodlinesGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response52 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response52 {
    description: Title;
    examples?:   Examples49;
    headers?:    PurpleHeaders;
    schema?:     Schema50;
}

export interface Examples49 {
    "application/json": ApplicationJSON55[] | PurpleApplicationJSON;
}

export interface ApplicationJSON55 {
    bloodline_id:   number;
    charisma:       number;
    corporation_id: number;
    description:    string;
    intelligence:   number;
    memory:         number;
    name:           string;
    perception:     number;
    race_id:        number;
    ship_type_id:   number;
    willpower:      number;
}

export interface Schema50 {
    description?: FluffyDescription;
    items?:       Items37;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items37 {
    description: PurpleDescription;
    properties:  Properties82;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties82 {
    bloodline_id:   ApprovedCost;
    charisma:       ApprovedCost;
    corporation_id: ApprovedCost;
    description:    ApprovedCost;
    intelligence:   ApprovedCost;
    memory:         ApprovedCost;
    name:           ApprovedCost;
    perception:     ApprovedCost;
    race_id:        ApprovedCost;
    ship_type_id:   ApprovedCost;
    willpower:      ApprovedCost;
}

export interface UniverseCategoriesCategoryID {
    get: UniverseCategoriesCategoryIDGet;
}

export interface UniverseCategoriesCategoryIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response53 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response53 {
    description: string;
    examples?:   Examples50;
    headers?:    PurpleHeaders;
    schema?:     Schema51;
}

export interface Examples50 {
    "application/json": ApplicationJSON56;
}

export interface ApplicationJSON56 {
    category_id?: number;
    groups?:      number[];
    name?:        string;
    published?:   boolean;
    error?:       ErrorEnum;
}

export interface Schema51 {
    description?: string;
    properties?:  Properties83;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties83 {
    category_id?: ApprovedCost;
    groups?:      AgentClass;
    name?:        ApprovedCost;
    published?:   ApprovedCost;
    error?:       Px128X128;
}

export interface UniverseConstellationsConstellationID {
    get: UniverseConstellationsConstellationIDGet;
}

export interface UniverseConstellationsConstellationIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response54 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response54 {
    description: string;
    examples?:   Examples51;
    headers?:    PurpleHeaders;
    schema?:     Schema52;
}

export interface Examples51 {
    "application/json": ApplicationJSON57;
}

export interface ApplicationJSON57 {
    constellation_id?: number;
    name?:             string;
    position?:         ApplicationJSONPosition;
    region_id?:        number;
    systems?:          number[];
    error?:            ErrorEnum;
}

export interface Schema52 {
    description?: string;
    properties?:  Properties84;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties84 {
    constellation_id?: ToCorpOrAllianceID;
    name?:             ToCorpOrAllianceID;
    position?:         PropertiesPosition;
    region_id?:        ToCorpOrAllianceID;
    systems?:          AgentClass;
    error?:            Px128X128;
}

export interface UniverseFactions {
    get: UniverseFactionsGet;
}

export interface UniverseFactionsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response55 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response55 {
    description: Title;
    examples?:   Examples52;
    headers?:    PurpleHeaders;
    schema?:     Schema53;
}

export interface Examples52 {
    "application/json": ApplicationJSON58[] | PurpleApplicationJSON;
}

export interface ApplicationJSON58 {
    corporation_id:       number;
    description:          string;
    faction_id:           number;
    is_unique:            boolean;
    name:                 string;
    size_factor:          number;
    solar_system_id:      number;
    station_count:        number;
    station_system_count: number;
}

export interface Schema53 {
    description?: FluffyDescription;
    items?:       Items38;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items38 {
    description: PurpleDescription;
    properties:  Properties85;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties85 {
    corporation_id:         ToCorpOrAllianceID;
    description:            ToCorpOrAllianceID;
    faction_id:             ToCorpOrAllianceID;
    is_unique:              ToCorpOrAllianceID;
    militia_corporation_id: ToCorpOrAllianceID;
    name:                   ToCorpOrAllianceID;
    size_factor:            ToCorpOrAllianceID;
    solar_system_id:        ToCorpOrAllianceID;
    station_count:          ToCorpOrAllianceID;
    station_system_count:   ToCorpOrAllianceID;
}

export interface UniverseGraphicsGraphicID {
    get: UniverseGraphicsGraphicIDGet;
}

export interface UniverseGraphicsGraphicIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response56 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response56 {
    description: string;
    examples?:   Examples53;
    headers?:    PurpleHeaders;
    schema?:     Schema54;
}

export interface Examples53 {
    "application/json": ApplicationJSON59;
}

export interface ApplicationJSON59 {
    graphic_file?: string;
    graphic_id?:   number;
    error?:        ErrorEnum;
}

export interface Schema54 {
    description?: string;
    properties?:  Properties86;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties86 {
    collision_file?:  EventResponseClass;
    graphic_file?:    EventResponseClass;
    graphic_id?:      EventResponseClass;
    icon_folder?:     EventResponseClass;
    sof_dna?:         EventResponseClass;
    sof_fation_name?: EventResponseClass;
    sof_hull_name?:   EventResponseClass;
    sof_race_name?:   EventResponseClass;
    error?:           Px128X128;
}

export interface UniverseGroupsGroupID {
    get: UniverseGroupsGroupIDGet;
}

export interface UniverseGroupsGroupIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response57 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response57 {
    description: string;
    examples?:   Examples54;
    headers?:    PurpleHeaders;
    schema?:     Schema55;
}

export interface Examples54 {
    "application/json": ApplicationJSON60;
}

export interface ApplicationJSON60 {
    category_id?: number;
    group_id?:    number;
    name?:        string;
    published?:   boolean;
    types?:       number[];
    error?:       ErrorEnum;
}

export interface Schema55 {
    description?: string;
    properties?:  Properties87;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties87 {
    category_id?: ApprovedCost;
    group_id?:    ApprovedCost;
    name?:        ApprovedCost;
    published?:   ApprovedCost;
    types?:       Alliance;
    error?:       Px128X128;
}

export interface UniverseIDS {
    post: UniverseIDSPost;
}

export interface UniverseIDSPost {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response58 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response58 {
    description: string;
    examples:    Examples55;
    headers?:    FluffyHeaders;
    schema:      Schema56;
}

export interface Examples55 {
    "application/json": ApplicationJSON61;
}

export interface ApplicationJSON61 {
    characters?: Character[];
    systems?:    Character[];
    error?:      ErrorEnum;
}

export interface FluffyHeaders {
    "Content-Language": EventResponseClass;
}

export interface Schema56 {
    description?: string;
    format?:      Format;
    minimum?:     number;
    title?:       string;
    type?:        Type;
    uniqueItems?: boolean;
    maximum?:     number;
    properties?:  BodyProperties;
    enum?:        string[];
    default?:     number;
    maxLength?:   number;
    $ref?:        Ref;
}

export interface UniverseNames {
    post: UniverseNamesPost;
}

export interface UniverseNamesPost {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response59 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response59 {
    description: string;
    examples:    Examples56;
    schema:      Schema57;
}

export interface Examples56 {
    "application/json": ApplicationJSON62[] | PurpleApplicationJSON;
}

export interface ApplicationJSON62 {
    category: string;
    id:       number;
    name:     string;
}

export interface Schema57 {
    description?: string;
    items?:       Items39;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
    properties?:  Properties3;
}

export interface Items39 {
    description: PurpleDescription;
    properties:  Properties88;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties88 {
    category: ToCorpOrAllianceID;
    id:       ToCorpOrAllianceID;
    name:     ToCorpOrAllianceID;
}

export interface UniversePlanetsPlanetID {
    get: UniversePlanetsPlanetIDGet;
}

export interface UniversePlanetsPlanetIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response60 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response60 {
    description: string;
    examples?:   Examples57;
    headers?:    PurpleHeaders;
    schema?:     Schema58;
}

export interface Examples57 {
    "application/json": ApplicationJSON63;
}

export interface ApplicationJSON63 {
    name?:      string;
    planet_id?: number;
    position?:  ApplicationJSONPosition;
    system_id?: number;
    type_id?:   number;
    error?:     ErrorEnum;
}

export interface Schema58 {
    description?: string;
    properties?:  Properties89;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties89 {
    name?:      ApprovedCost;
    planet_id?: ApprovedCost;
    position?:  PropertiesPosition;
    system_id?: ApprovedCost;
    type_id?:   ApprovedCost;
    error?:     Px128X128;
}

export interface UniverseRaces {
    get: UniverseRacesGet;
}

export interface UniverseRacesGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response61 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response61 {
    description: Title;
    examples?:   Examples58;
    headers?:    PurpleHeaders;
    schema?:     Schema59;
}

export interface Examples58 {
    "application/json": ApplicationJSON64[] | PurpleApplicationJSON;
}

export interface ApplicationJSON64 {
    alliance_id: number;
    description: string;
    name:        string;
    race_id:     number;
}

export interface Schema59 {
    description?: FluffyDescription;
    items?:       Items40;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items40 {
    description: PurpleDescription;
    properties:  Properties90;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties90 {
    alliance_id: ApprovedCost;
    description: ApprovedCost;
    name:        ApprovedCost;
    race_id:     ApprovedCost;
}

export interface UniverseRegionsRegionID {
    get: UniverseRegionsRegionIDGet;
}

export interface UniverseRegionsRegionIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response62 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response62 {
    description: string;
    examples?:   Examples59;
    headers?:    PurpleHeaders;
    schema?:     Schema60;
}

export interface Examples59 {
    "application/json": ApplicationJSON65;
}

export interface ApplicationJSON65 {
    constellations?: number[];
    description?:    string;
    name?:           string;
    region_id?:      number;
    error?:          ErrorEnum;
}

export interface Schema60 {
    description?: string;
    properties?:  Properties91;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties91 {
    constellations?: Alliance;
    description?:    EventResponseClass;
    name?:           EventResponseClass;
    region_id?:      EventResponseClass;
    error?:          Px128X128;
}

export interface UniverseSchematicsSchematicID {
    get: UniverseSchematicsSchematicIDGet;
}

export interface UniverseSchematicsSchematicIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response63 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response63 {
    description: string;
    examples?:   Examples60;
    headers?:    PurpleHeaders;
    schema?:     Schema61;
}

export interface Examples60 {
    "application/json": ApplicationJSON66;
}

export interface ApplicationJSON66 {
    cycle_time?:     number;
    schematic_name?: string;
    error?:          ErrorEnum;
}

export interface Schema61 {
    description?: string;
    properties?:  Properties92;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties92 {
    cycle_time?:     ToCorpOrAllianceID;
    schematic_name?: ToCorpOrAllianceID;
    error?:          Px128X128;
}

export interface UniverseStargatesStargateID {
    get: UniverseStargatesStargateIDGet;
}

export interface UniverseStargatesStargateIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response64 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response64 {
    description: string;
    examples?:   Examples61;
    headers?:    PurpleHeaders;
    schema?:     Schema62;
}

export interface Examples61 {
    "application/json": ApplicationJSON67;
}

export interface ApplicationJSON67 {
    destination?: ApplicationJSONDestination;
    name?:        string;
    position?:    ApplicationJSONPosition;
    stargate_id?: number;
    system_id?:   number;
    type_id?:     number;
    error?:       ErrorEnum;
}

export interface ApplicationJSONDestination {
    stargate_id: number;
    system_id:   number;
}

export interface Schema62 {
    description?: string;
    properties?:  Properties93;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties93 {
    destination?: PropertiesDestination;
    name?:        ToCorpOrAllianceID;
    position?:    PropertiesPosition;
    stargate_id?: ToCorpOrAllianceID;
    system_id?:   ToCorpOrAllianceID;
    type_id?:     ToCorpOrAllianceID;
    error?:       Px128X128;
}

export interface PropertiesDestination {
    description: string;
    properties:  DestinationProperties;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface DestinationProperties {
    stargate_id: ToCorpOrAllianceID;
    system_id:   ToCorpOrAllianceID;
}

export interface UniverseStarsStarID {
    get: UniverseStarsStarIDGet;
}

export interface UniverseStarsStarIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response65 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response65 {
    description: Title;
    examples?:   Examples62;
    headers?:    PurpleHeaders;
    schema?:     Schema63;
}

export interface Examples62 {
    "application/json": ApplicationJSON68;
}

export interface ApplicationJSON68 {
    age?:             number;
    luminosity?:      number;
    name?:            string;
    radius?:          number;
    solar_system_id?: number;
    spectral_class?:  string;
    temperature?:     number;
    type_id?:         number;
    error?:           ErrorEnum;
}

export interface Schema63 {
    description?: PurpleDescription;
    properties?:  Properties94;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties94 {
    age:             ToCorpOrAllianceID;
    luminosity:      ToCorpOrAllianceID;
    name:            ToCorpOrAllianceID;
    radius:          ToCorpOrAllianceID;
    solar_system_id: ToCorpOrAllianceID;
    spectral_class:  ToCorpOrAllianceID;
    temperature:     ToCorpOrAllianceID;
    type_id:         ToCorpOrAllianceID;
}

export interface UniverseStationsStationID {
    get: UniverseStationsStationIDGet;
}

export interface UniverseStationsStationIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response66 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response66 {
    description: string;
    examples?:   Examples63;
    headers?:    PurpleHeaders;
    schema?:     Schema64;
}

export interface Examples63 {
    "application/json": ApplicationJSON69;
}

export interface ApplicationJSON69 {
    max_dockable_ship_volume?:   number;
    name?:                       string;
    office_rental_cost?:         number;
    owner?:                      number;
    position?:                   ApplicationJSONPosition;
    race_id?:                    number;
    reprocessing_efficiency?:    number;
    reprocessing_stations_take?: number;
    services?:                   string[];
    station_id?:                 number;
    system_id?:                  number;
    type_id?:                    number;
    error?:                      ErrorEnum;
}

export interface Schema64 {
    description?: string;
    properties?:  Properties95;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties95 {
    max_dockable_ship_volume?:   ApprovedCost;
    name?:                       ApprovedCost;
    office_rental_cost?:         ApprovedCost;
    owner?:                      ApprovedCost;
    position?:                   PropertiesPosition;
    race_id?:                    ApprovedCost;
    reprocessing_efficiency?:    ApprovedCost;
    reprocessing_stations_take?: ApprovedCost;
    services?:                   Agents;
    station_id?:                 OwnerIDClass;
    system_id?:                  OwnerIDClass;
    type_id?:                    OwnerIDClass;
    error?:                      Px128X128;
}

export interface UniverseStructures {
    get: UniverseStructuresGet;
}

export interface UniverseStructuresGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response67 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response67 {
    description: Title;
    examples?:   PurpleExamples;
    headers?:    PurpleHeaders;
    schema?:     Schema65;
}

export interface Schema65 {
    description?: FluffyDescription;
    items?:       ToCorpOrAllianceID;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    uniqueItems?: boolean;
    $ref?:        Ref;
}

export interface UniverseSystemJumps {
    get: UniverseSystemJumpsGet;
}

export interface UniverseSystemJumpsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response68 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response68 {
    description: Title;
    examples?:   Examples64;
    headers?:    PurpleHeaders;
    schema?:     Schema66;
}

export interface Examples64 {
    "application/json": ApplicationJSON70[] | PurpleApplicationJSON;
}

export interface ApplicationJSON70 {
    ship_jumps: number;
    system_id:  number;
}

export interface Schema66 {
    description?: FluffyDescription;
    items?:       Items41;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items41 {
    description: PurpleDescription;
    properties:  Properties96;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties96 {
    ship_jumps: ToCorpOrAllianceID;
    system_id:  ToCorpOrAllianceID;
}

export interface UniverseSystemKills {
    get: UniverseSystemKillsGet;
}

export interface UniverseSystemKillsGet {
    description:            string;
    operationId:            string;
    parameters:             SchemaElement[];
    responses:              { [key: string]: Response69 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response69 {
    description: Title;
    examples?:   Examples65;
    headers?:    PurpleHeaders;
    schema?:     Schema67;
}

export interface Examples65 {
    "application/json": ApplicationJSON71[] | PurpleApplicationJSON;
}

export interface ApplicationJSON71 {
    npc_kills:  number;
    pod_kills:  number;
    ship_kills: number;
    system_id:  number;
}

export interface Schema67 {
    description?: FluffyDescription;
    items?:       Items42;
    maxItems?:    number;
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Items42 {
    description: PurpleDescription;
    properties:  Properties97;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties97 {
    npc_kills:  EventResponseClass;
    pod_kills:  EventResponseClass;
    ship_kills: EventResponseClass;
    system_id:  EventResponseClass;
}

export interface UniverseSystemsSystemID {
    get: UniverseSystemsSystemIDGet;
}

export interface UniverseSystemsSystemIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response70 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response70 {
    description: string;
    examples?:   Examples66;
    headers?:    PurpleHeaders;
    schema?:     Schema68;
}

export interface Examples66 {
    "application/json": ApplicationJSON72;
}

export interface ApplicationJSON72 {
    constellation_id?: number;
    name?:             string;
    planets?:          Planet[];
    position?:         ApplicationJSONPosition;
    security_class?:   string;
    security_status?:  number;
    star_id?:          number;
    stargates?:        number[];
    system_id?:        number;
    error?:            ErrorEnum;
}

export interface Planet {
    moons?:    number[];
    planet_id: number;
}

export interface Schema68 {
    description?: string;
    properties?:  Properties98;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties98 {
    constellation_id?: EventResponseClass;
    name?:             EventResponseClass;
    planets?:          Planets;
    position?:         PropertiesPosition;
    security_class?:   ToCorpOrAllianceID;
    security_status?:  ToCorpOrAllianceID;
    star_id?:          ToCorpOrAllianceID;
    stargates?:        AgentClass;
    stations?:         AgentClass;
    system_id?:        ToCorpOrAllianceID;
    error?:            Px128X128;
}

export interface Planets {
    description: string;
    items:       PlanetsItems;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface PlanetsItems {
    description: string;
    properties:  Properties99;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface Properties99 {
    asteroid_belts: Alliance;
    moons:          AgentClass;
    planet_id:      ToCorpOrAllianceID;
}

export interface UniverseTypesTypeID {
    get: UniverseTypesTypeIDGet;
}

export interface UniverseTypesTypeIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response71 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
}

export interface Response71 {
    description: string;
    examples?:   Examples67;
    headers?:    PurpleHeaders;
    schema?:     Schema69;
}

export interface Examples67 {
    "application/json": ApplicationJSON73;
}

export interface ApplicationJSON73 {
    description?: string;
    group_id?:    number;
    name?:        string;
    published?:   boolean;
    type_id?:     number;
    error?:       ErrorEnum;
}

export interface Schema69 {
    description?: string;
    properties?:  Properties100;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties100 {
    capacity?:         ToCorpOrAllianceID;
    description?:      ToCorpOrAllianceID;
    dogma_attributes?: DogmaAttributes;
    dogma_effects?:    DogmaEffects;
    graphic_id?:       ToCorpOrAllianceID;
    group_id?:         ToCorpOrAllianceID;
    icon_id?:          ToCorpOrAllianceID;
    market_group_id?:  ToCorpOrAllianceID;
    mass?:             ToCorpOrAllianceID;
    name?:             ToCorpOrAllianceID;
    packaged_volume?:  ToCorpOrAllianceID;
    portion_size?:     ToCorpOrAllianceID;
    published?:        ToCorpOrAllianceID;
    radius?:           ToCorpOrAllianceID;
    type_id?:          ToCorpOrAllianceID;
    volume?:           ToCorpOrAllianceID;
    error?:            Px128X128;
}

export interface WarsWarID {
    get: WarsWarIDGet;
}

export interface WarsWarIDGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response72 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface Response72 {
    description: string;
    examples?:   Examples68;
    headers?:    PurpleHeaders;
    schema?:     Schema70;
}

export interface Examples68 {
    "application/json": ApplicationJSON74;
}

export interface ApplicationJSON74 {
    aggressor?:       ApplicationJSONAggressor;
    declared?:        Date;
    defender?:        ApplicationJSONAggressor;
    id?:              number;
    mutual?:          boolean;
    open_for_allies?: boolean;
    error?:           ErrorEnum;
}

export interface ApplicationJSONAggressor {
    corporation_id: number;
    isk_destroyed:  number;
    ships_killed:   number;
}

export interface Schema70 {
    description?: string;
    properties?:  Properties101;
    required?:    string[];
    title?:       string;
    type?:        Type;
    $ref?:        Ref;
}

export interface Properties101 {
    aggressor?:       PropertiesAggressor;
    allies?:          Allies;
    declared?:        ApprovedCost;
    defender?:        PropertiesAggressor;
    finished?:        EventResponseClass;
    id?:              EventResponseClass;
    mutual?:          EventResponseClass;
    open_for_allies?: EventResponseClass;
    retracted?:       EventResponseClass;
    started?:         EventResponseClass;
    error?:           Px128X128;
}

export interface PropertiesAggressor {
    description: string;
    properties:  AggressorProperties;
    required:    string[];
    title:       string;
    type:        Type;
}

export interface AggressorProperties {
    alliance_id:    CharacterID;
    corporation_id: CharacterID;
    isk_destroyed:  CharacterID;
    ships_killed:   CharacterID;
}

export interface Allies {
    description: string;
    items:       ToCorpOrAllianceID;
    maxItems:    number;
    title:       string;
    type:        Type;
}

export interface WarsWarIDKillmails {
    get: WarsWarIDKillmailsGet;
}

export interface WarsWarIDKillmailsGet {
    description:            string;
    operationId:            string;
    parameters:             AllianceID[];
    responses:              { [key: string]: Response12 };
    summary:                string;
    tags:                   string[];
    "x-alternate-versions": XAlternateVersion[];
    "x-cached-seconds":     number;
}

export interface SecurityDefinitions {
    evesso: Evesso;
}

export interface Evesso {
    authorizationUrl: string;
    flow:             string;
    scopes:           { [key: string]: string };
    type:             string;
}
