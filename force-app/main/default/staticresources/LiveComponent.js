/*
 Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations. 
*/
(function(l){function d(){var a=!1,b;this.settings={appendHelpButton:!0,displayHelpButton:!0,isExternalPage:!0,devMode:!1,targetElement:document.body,elementForOnlineDisplay:void 0,elementForOfflineDisplay:void 0,defaultMinimizedText:"",disabledMinimizedText:"",defaultAssistiveText:"",loadingText:"Loading",showIcon:void 0,enabledFeatures:[],entryFeature:"FieldService",storageDomain:document.domain,language:void 0,linkAction:{feature:void 0,name:void 0,valid:!1},linkActionParameters:{},useCustomAuthentication:!1,
allowGuestUsers:!1,requireSLDS:!1,hasBottomTabBar:!1};this.auth={};this.validLinkActions={};this.alwaysWarnOnBeforeUnload=!1;Object.defineProperty(this.auth,"oauthToken",{get:function(){return b},set:function(c){this.validateHeaderValue(c)?(b=c)?(this.setSessionData("ESW_OAUTH_TOKEN",c),this.checkAuthentication()):this.deleteSessionData("ESW_OAUTH_TOKEN"):this.error('"'+c+'" is not a valid OAuth token.')}.bind(this)});this.featureScripts={};this.storedEventHandlers={};this.messageHandlers={};this.storageKeys=
["ESW_BODY_SCROLL_POSITION","ESW_IS_MINIMIZED","ESW_MINIMIZED_TEXT","ESW_OAUTH_TOKEN"];this.defaultSettings={};this.snippetSettingsFile={};this.eswFrame=void 0;this.availableFeatures=["script","session"];this.outboundMessagesAwaitingIframeLoad=[];this.pendingMessages={};this.iframeScriptsToLoad=[];this.isAuthenticationRequired=this.isIframeReady=this.hasSessionDataLoaded=this.componentInitInProgress=this.domInitInProgress=!1;this.loginPendingSerializedData=void 0;this.componentLoaded=!1;Object.defineProperty(this,
"isButtonDisabled",{get:function(){return a},set:function(c){a=c;this.onButtonStatusChange()}.bind(this),configurable:!0});this.setupMessageListener();this.getLinkActionData()}var m=[".salesforce.com",".force.com",".sfdc.net",".site.com",".salesforce-sites.com"],n="liveagent.chatCanceledOnDifferentTab liveagent.fileTransfer.resetFileSelector liveagent.fileTransfer.uploadFile session.deletedSessionData session.onLoad session.sessionData session.updatePrimary".split(" ");d.prototype.getLightningOutParamsObj=
function(){var a={};embedded_svc.config&&embedded_svc.config.additionalSettings&&embedded_svc.config.additionalSettings.labelsLanguage?a={guestUserLang:embedded_svc.config.additionalSettings.labelsLanguage}:embedded_svc.settings.language&&""!==embedded_svc.settings.language.trim()&&(a={guestUserLang:embedded_svc.settings.language});a.eswConfigDeveloperName=embedded_svc.settings.eswConfigDevName;return a};d.prototype.adjustCommunityStorageDomain=function(){this.isCommunityDomain(this.settings.storageDomain)&&
this.settings.storageDomain===document.domain&&(this.settings.storageDomain=this.settings.storageDomain+"/"+window.location.pathname.split("/")[1])};d.prototype.loadLightningOutScripts=function(a){if("function"!==typeof Promise)this.loadScriptFromDirectory("common","promisepolyfill",function(){return this.loadLightningOutScripts(a)}.bind(this),!0);else return new Promise(function(b,c){try{var e=a&&a.baseCoreURL?a.baseCoreURL:embedded_svc.settings.baseCoreURL;if(window.$Lightning)b("Lightning Out is already loaded on this page.");
else if(embedded_svc.utils.isCommunityOrSite())b("Communities context does not require Lightning Out to use Embedded Service.");else if(e){var f=document.createElement("script");f.type="text/javascript";f.src=e+"/lightning/lightning.out.js";f.onload=function(){b("Lightning Out scripts loaded.")};document.getElementsByTagName("head")[0].appendChild(f)}}catch(h){c(h)}})};d.prototype.instantiateLightningOutApplication=function(a){if("function"!==typeof Promise)this.loadScriptFromDirectory("common","promisepolyfill",
function(){return this.instantiateLightningOutApplication(a)}.bind(this),!0);else return new Promise(function(b,c){try{var e=a&&a.communityEndpointURL?a.communityEndpointURL:embedded_svc.settings.communityEndpointURL;var f=a&&a.oauthToken?a.oauthToken:embedded_svc.settings.oauthToken;var h=a&&a.paramsObj?a.paramsObj:embedded_svc.getLightningOutParamsObj()||void 0;embedded_svc.utils.isCommunityOrSite()?b("Communities context already has an Aura context."):window.$Lightning&&$Lightning.use("embeddedService:sidebarApp",
function(){b("Lightning Out application request complete.")},e,f,h)}catch(g){c(g)}})};d.prototype.createEmbeddedServiceComponent=function(a){if("function"!==typeof Promise)this.loadScriptFromDirectory("common","promisepolyfill",function(){return this.createEmbeddedServiceComponent(a)}.bind(this),!0);else return new Promise(function(b,c){var e=a&&a.chatAPISettings?embedded_svc.validateStartChatAttributes(a.chatAPISettings):{};try{var f=a&&a.attributes?a.attributes:{configurationData:embedded_svc.settings,
chatAPISettings:e};var h=a&&a.locator?a.locator:embedded_svc.settings.targetElement;embedded_svc.preparePageForSidebar();window.$Lightning&&!document.querySelector(".embeddedServiceSidebar")?$Lightning.ready($Lightning.createComponent.bind(this,"embeddedService:sidebar",f,h,function(g,k,p){"SUCCESS"===k?embedded_svc.utils.addEventHandler("afterInitialization",function(){b("Embedded Service component created.")}):c(p)})):embedded_svc.utils.isCommunityOrSite()?window.dispatchEvent(new CustomEvent("embeddedServiceCreateSidebar",
{detail:{componentAttributes:f,resolve:b,reject:c}})):"undefined"===typeof window.$Lightning?b("Lightning Out should be loaded on this page before creating the Embedded Service component."):b("Embedded Service component already exists.")}catch(g){c(g)}})};d.prototype.bootstrapEmbeddedService=function(a){if("function"!==typeof Promise)this.loadScriptFromDirectory("common","promisepolyfill",function(){return embedded_svc.bootstrapEmbeddedService(a)},!0);else return new Promise(function(b,c){try{embedded_svc.loadLightningOutScripts(a).then(function(){embedded_svc.instantiateLightningOutApplication(a).then(function(){embedded_svc.createEmbeddedServiceComponent(a).then(function(){window.requestAnimationFrame(function(){embedded_svc.hideHelpButton();
b("Embedded Service application and component bootstrapped.")})})})})}catch(e){c(e)}})};d.prototype.validateStartChatAttributes=function(a){var b=(a=a?a:{})&&a.prepopulatedPrechatFields?a.prepopulatedPrechatFields:{},c=a&&a.extraPrechatInfo?a.extraPrechatInfo:[],e=a&&a.extraPrechatFormDetails?a.extraPrechatFormDetails:[],f=a&&a.fallbackRouting?a.fallbackRouting:[],h=a&&a.directToButtonRouting?a.directToButtonRouting:void 0,g={buttonId:a&&a.buttonId?a.buttonId:void 0,userId:a&&a.userId?a.userId:void 0,
fallback:a&&"boolean"===typeof a.fallback?a.fallback:void 0};if("object"===typeof b)a.prepopulatedPrechatFields=b;else throw Error("Validation failed for prepopulatedPrechatFields, received: "+b);if(Array.isArray(e))a.extraPrechatFormDetails=e;else throw Error("Validation failed for extraPrechatFormDetails, received: "+e);if(Array.isArray(c))a.extraPrechatInfo=c;else throw Error("Validation failed for extraPrechatInfo, received: "+c);if(Array.isArray(f))a.fallbackRouting=f;else throw Error("Validation failed for fallbackRouting, received: "+
f);"function"===typeof h?a.directToButtonRouting=h:embedded_svc.log("Did not receive an actionable parameter for directToButtonRouting, received: "+h);if("object"===typeof g)if(a.directToAgentRouting=g,g.buttonId)if("string"===typeof g.buttonId&&g.buttonId.trim().length)a.directToAgentRouting.buttonId=g.buttonId.trim(),a.directToAgentRouting.fallback=g.fallback,g.userId&&("string"===typeof g.userId&&g.userId.trim().length?a.directToAgentRouting.userId=g.userId.trim():embedded_svc.log("Did not receive an actionable parameter for directToAgentRouting's userId, received: "+
g.userId));else throw Error("Validation failed for directToAgentRouting's buttonId, received: "+g.buttonId);else embedded_svc.log("Did not receive an actionable parameter for directToAgentRouting's buttonId, received: "+g.buttonId);else throw Error("Validation failed for directToAgentRouting, received: "+g);return a};d.prototype.isInternetExplorer=function(){return"ActiveXObject"in window};d.prototype.outputToConsole=function(a,b,c){if((c||this.settings.devMode)&&console&&console[a])console[a]("[Snap-ins] "+
(Array.isArray(b)?b.join(", "):b))};d.prototype.log=function(){this.outputToConsole("log",[].slice.apply(arguments))};d.prototype.error=function(a,b){a?this.outputToConsole("error",a,b):this.outputToConsole("error","esw responed with an unspecified error.",b);embedded_svc.utils.fireEvent("error")};d.prototype.warning=function(a,b){a?this.outputToConsole("warn","Warning: "+a,b):this.outputToConsole("warn","esw sent an anonymous warning.",b)};d.prototype.deprecated=function(a){this.warning(a+" is deprecated in version "+
Number("5.0").toFixed(1)+" and will be removed in version "+(Number("5.0")+1).toFixed(1))};d.prototype.getCookie=function(a){var b=document.cookie;if(b){var c=b.indexOf(a+"=");if(-1!==c)return c+=(a+"=").length,a=b.indexOf(";",c),-1===a&&(a=b.length),b.substring(c,a)}};d.prototype.setCookie=function(a,b,c){a=a+"="+b+";";c&&(c=new Date,c.setFullYear(c.getFullYear()+10),a+="expires="+c.toUTCString()+";");document.cookie=a+"path=/;"};d.prototype.mergeSettings=function(a){Object.keys(a).forEach(function(b){void 0===
this.settings[b]&&(this.settings[b]=a[b])}.bind(this))};d.prototype.loadFeatureScript=function(a,b){var c=decodeURI(a).toLowerCase();-1===a.indexOf("..")?this.loadScriptFromDirectory("client",c+".esw",function(){this.featureScripts[a](this);this.availableFeatures.push(c);embedded_svc.utils.fireEvent("featureLoaded",void 0,a);b&&b();this.processPendingMessages(c)}.bind(this)):this.error('"'+a+'" is not a valid feature name.')};d.prototype.fireEvent=function(a,b){var c=[].slice.apply(arguments).slice(2);
if(window.embedded_svc&&embedded_svc.utils)return embedded_svc.utils.fireEvent(a,b,c);this.error("fireEvent should not be called before calling init!");return!0};d.prototype.isValidEntityId=function(a){return"string"===typeof a&&(18===a.length||15===a.length)};d.prototype.getKeyPrefix=function(a){if(this.isValidEntityId(a))return a.substr(0,3)};d.prototype.isOrganizationId=function(a){return"00D"===this.getKeyPrefix(a)};d.prototype.getESWFrame=function(){if(!this.eswFrame){var a=document.getElementById("esw_storage_iframe");
a&&a.contentWindow&&(this.eswFrame=a.contentWindow)}return this.eswFrame};d.prototype.isFrameStorageEnabled=function(){this.deprecated("isFrameStorageEnabled");return!0};d.prototype.processPendingMessages=function(a){this.pendingMessages[a]&&(this.pendingMessages[a].forEach(function(b){this.handleMessage(b.payload)}.bind(this)),this.pendingMessages[a]=void 0)};d.prototype.loadCSS=function(){var a=document.createElement("link");a.href=(this.settings.gslbBaseURL?this.settings.gslbBaseURL:this.settings.baseCoreURL)+
"/embeddedservice/"+this.settings.releaseVersion+"/esw"+(this.settings.devMode?"":".min")+".css";a.type="text/css";a.rel="stylesheet";document.getElementsByTagName("head")[0].appendChild(a)};d.prototype.appendHelpButton=function(a){var b=document.createElement("div"),c="";b.className="embeddedServiceHelpButton";this.isLanguageRtl(this.settings.language)&&this.isDesktop()&&(c='dir="rtl"');b.innerHTML='<div class="helpButton"'+c+'><button class="helpButtonEnabled uiButton" href="javascript:void(0)"><span class="embeddedServiceIcon" aria-hidden="true" data-icon="&#59648;"></span><span class="helpButtonLabel" id="helpButtonSpan" aria-live="polite" aria-atomic="true"><span class="assistiveText">'+
(this.settings.defaultAssistiveText||"")+'</span><span class="message"></span></span></button></div>';a||(b.style.display="none");this.settings.hasBottomTabBar&&b.classList.add("embeddedServiceBottomTabBar");this.settings.targetElement.appendChild(b);this.setHelpButtonText(this.settings.defaultMinimizedText);"ontouchstart"in document.documentElement&&[].slice.apply(document.querySelectorAll(".embeddedServiceHelpButton .uiButton")).forEach(function(e){e.classList.add("no-hover")});this.onButtonStatusChange()};
d.prototype.appendIFrame=function(){var a=document.createElement("iframe"),b={};a.id="esw_storage_iframe";a.src=this.settings.iframeURL;a.style.display="none";a.title="Live Chat Metadata";a.onload=function(){var c=this.getESWFrame();this.outboundMessagesAwaitingIframeLoad.forEach(function(e){c.postMessage(e,this.settings.iframeURL)}.bind(this));this.outboundMessagesAwaitingIframeLoad=[];this.iframeScriptsToLoad.forEach(function(e){this.loadStorageScript(e)}.bind(this));b.deploymentId=this.settings.deploymentId;
b.isSamePageNavigation=this.isSamePageNavigation();b.isRefresh=1===window.performance.navigation.type;this.postMessage("session.updateStorage",b);this.iframeScriptsToLoad=[]}.bind(this);this.settings.targetElement.appendChild(a);window.addEventListener("beforeunload",function(c){this.isInternetExplorer()&&(a.src="about:blank");if(this.warnOnBeforeUnload&&this.componentLoaded)if(embedded_svc.utils.fireEvent("snapinsCloseSessionWarning"),this.settings.closeSessionWarning&&"function"===typeof this.settings.closeSessionWarning)this.settings.closeSessionWarning();
else return(c||window.event).returnValue="You might lose the active chat session if you close this tab. Are you sure?"}.bind(this),!1)};d.prototype.preparePageForSidebar=function(){document.getElementById("snapins_invite")&&embedded_svc.inviteAPI&&embedded_svc.inviteAPI.inviteButton.setOnlineState(!1);embedded_svc.utils.fireEvent("beforeCreate");Object.keys(this.settings).forEach(function(a){}.bind(this));this.mergeSettings(this.defaultSettings)};d.prototype.createLightningComponent=function(a){this.preparePageForSidebar();
this.createEmbeddedServiceComponent({attributes:{configurationData:this.settings,serializedSessionData:a},locator:this.settings.targetElement}).then(function(){this.hideHelpButton();this.componentInitInProgress=!1;this.componentLoaded=!0;embedded_svc&&embedded_svc.liveAgentAPI&&embedded_svc.liveAgentAPI.ping();embedded_svc.utils.fireEvent("ready")}.bind(this))};d.prototype.loadLightningApp=function(a){var b;if(this.settings.isExternalPage&&"string"!==typeof this.settings.communityEndpointURL)throw Error("communityEndpointURL String property not set");
if(b=document.getElementsByClassName("helpButton")[0]){var c=b.getBoundingClientRect().width;0<c&&(b.style.width=c+"px")}this.setHelpButtonText(this.settings.loadingText,!1);this.instantiateLightningOutApplication({communityEndpointURL:this.settings.communityEndpointURL,oauthToken:this.auth.oauthToken}).then(this.createLightningComponent.bind(this,a))};d.prototype.initLightningOut=function(a){this.hasSessionDataLoaded&&("function"!==typeof Promise?this.loadScriptFromDirectory("common","promisepolyfill",
function(){this.initLightningOut(a)}.bind(this),!0):this.loadLightningOutScripts().then(this.loadLightningApp.bind(this,a)))};d.prototype.setHelpButtonText=function(a,b){var c=void 0===this.settings.showIcon?!0:this.settings.showIcon;b=void 0===b?c:b;c=document.getElementById("helpButtonSpan");if(c){var e=c.querySelector(".message");e.innerHTML=a;if(a=c.parentElement.querySelector(".embeddedServiceIcon"))a.style.display=b?"inline-block":"none"}};d.prototype.prepareDOM=function(){this.domInitInProgress||
(this.domInitInProgress=!0,this.appendIFrame())};d.prototype.addSessionHandlers=function(){this.addMessageHandler("session.onLoad",function(){this.postMessage("session.get",this.storageKeys)}.bind(this));this.addMessageHandler("session.sessionData",function(a){this.alwaysWarnOnBeforeUnload=!a;this.resumeInitWithSessionData(a||{})}.bind(this));this.addMessageHandler("session.deletedSessionData",function(a){-1<a.indexOf("CHASITOR_SERIALIZED_KEY")&&(this.loginPendingSerializedData=void 0)}.bind(this));
this.addMessageHandler("session.updatePrimary",function(a){a&&(a.isPrimary?sessionStorage.setItem(this.settings.storageDomain+"MASTER_DEPLOYMENT_ID",this.settings.deploymentId):sessionStorage.removeItem(this.settings.storageDomain+"MASTER_DEPLOYMENT_ID"),this.warnOnBeforeUnload=this.alwaysWarnOnBeforeUnload||1<a.activeChatSessions&&a.isPrimary,embedded_svc&&embedded_svc.liveAgentAPI&&(embedded_svc.liveAgentAPI.browserSessionInfo=a))}.bind(this));this.addMessageHandler("session.frameReady",function(){this.isIframeReady=
!0}.bind(this))};d.prototype.addMetaTag=function(a,b){var c=document.createElement("meta");c.name=a;c.content=b;document.head.appendChild(c)};d.prototype.init=function(a,b,c,e,f,h){this.settings.baseCoreURL=a;this.settings.communityEndpointURL=b;this.settings.gslbBaseURL=c?c:a;this.settings.orgId=e;this.settings.releaseVersion="5.0";this.settings.eswConfigDevName=f;this.mergeSettings(h||{});this.adjustCommunityStorageDomain();if("string"!==typeof this.settings.baseCoreURL)throw Error("Base core URL value must be a string.");
if(!this.isOrganizationId(this.settings.orgId))throw Error("Invalid OrganizationId Parameter Value: "+this.settings.orgId);embedded_svc.utils?this.finishInit():this.loadScriptFromDirectory("utils","common",this.finishInit.bind(this))};d.prototype.finishInit=function(){this.storedEventHandlers&&(Object.getOwnPropertyNames(this.storedEventHandlers).forEach(function(a){this.storedEventHandlers[a].forEach(function(b){embedded_svc.utils.addEventHandler(a,b)})}.bind(this)),this.storedEventHandlers={});
if(!embedded_svc.utils.fireEvent("validateInit",function(a){return-1!==a.indexOf(!1)},this.settings)){this.checkForNativeFunctionOverrides();this.settings.appendHelpButton&&this.loadCSS();if(!this.settings.targetElement)throw Error("No targetElement specified");this.settings.iframeURL=this.settings.gslbBaseURL+"/embeddedservice/"+this.settings.releaseVersion+(this.settings.devMode?"/eswDev.html":"/esw.html")+"?parent="+document.location.href;this.addSessionHandlers();this.loadFeatures(this.onFeatureScriptsLoaded.bind(this));
this.settings.hasBottomTabBar=embedded_svc.utils.isUseriOS15plusSafari();embedded_svc.utils.fireEvent("afterInit",void 0,this.settings)}};d.prototype.onFeatureScriptsLoaded=function(){"complete"===document.readyState?setTimeout(this.prepareDOM.bind(this),1):document.addEventListener?(document.addEventListener("DOMContentLoaded",this.prepareDOM.bind(this),!1),window.addEventListener("load",this.prepareDOM.bind(this),!1)):window.attachEvent?window.attachEvent("onload",this.prepareDOM.bind(this)):this.log("No available event model. Exiting.")};
d.prototype.checkForNativeFunctionOverrides=function(){[{name:"document",object:document,functions:"addEventListener createAttribute createComment createDocumentFragment createElementNS createTextNode createRange getElementById getElementsByTagName getElementsByClassName querySelector querySelectorAll removeEventListener".split(" ")},{name:"window",object:window,functions:"addEventListener clearTimeout dispatchEvent open removeEventListener requestAnimationFrame setInterval setTimeout".split(" ")}].forEach(function(a){a.functions.forEach(function(b){b in
a.object&&!this.isNativeFunction(a.object,b)&&this.warning("Embedded Service Chat may not function correctly with this native JS function modified: "+a.name+"."+b,!0)}.bind(this))}.bind(this))};d.prototype.isNativeFunction=function(a,b){return Function.prototype.toString.call(a[b]).match(/\[native code\]/)};d.prototype.onHelpButtonClick=function(){if(!this.componentInitInProgress&&!document.getElementsByClassName("embeddedServiceSidebar").length){this.componentInitInProgress=!0;try{embedded_svc.utils.isCommunityOrSite()&&
0<Object.keys(embedded_svc.liveAgentAPI.inviteButton).length?window.dispatchEvent(new CustomEvent("onStartChatFromInvitation"),{detail:{bubbles:!0,composed:!1}}):(this.checkAuthentication(),embedded_svc.utils.fireEvent("onHelpButtonClick"))}catch(a){throw this.componentInitInProgress=!1,a;}}};d.prototype.resumeInitWithSessionData=function(a){var b=embedded_svc.utils.fireEvent("sessionDataRetrieved",function(f){return-1!==f.indexOf(!0)},a),c=!1,e=!1;this.settings.linkAction.valid?c=!0:b?(this.log("Existing session found. Continuing with data: "+
a),e=c=!0,embedded_svc.menu&&embedded_svc.menu.hideTopContainer()):this.componentInitInProgress&&(c=!0);this.hasSessionDataLoaded=!0;a.ESW_OAUTH_TOKEN&&(this.auth.oauthToken=a.ESW_OAUTH_TOKEN);this.loginPendingSerializedData=e?a:void 0;c&&(this.componentInitInProgress=!0,this.checkAuthentication());this.settings.appendHelpButton&&this.appendHelpButton(this.settings.displayHelpButton&&!b)};d.prototype.checkAuthentication=function(){this.isAuthenticationRequired&&!this.settings.allowGuestUsers?this.auth.oauthToken?
(this.loginButtonPressed||this.componentInitInProgress)&&this.initLightningOut(this.loginPendingSerializedData):embedded_svc.utils.fireEvent("requireauth"):(this.loginButtonPressed||this.componentInitInProgress)&&this.initLightningOut(this.loginPendingSerializedData)};d.prototype.postMessage=function(a,b){a={domain:this.settings.storageDomain,data:b,method:a};(b=this.getESWFrame())?b.postMessage(a,this.settings.iframeURL):this.outboundMessagesAwaitingIframeLoad.push(a)};d.prototype.setSessionData=
function(a,b){if("object"===typeof a)var c=a;else c={},c[a]=b;this.postMessage("session.set",c)};d.prototype.deleteSessionData=function(a){a=Array.isArray(a)?a:[a];this.postMessage("session.delete",a)};d.prototype.defineFeature=function(a,b){this.featureScripts[a]=b};d.prototype.registerStorageKeys=function(a){"string"===typeof a?this.storageKeys.push(a):a.forEach(function(b){this.storageKeys.push(b)}.bind(this))};d.prototype.addMessageHandler=function(a,b){this.messageHandlers[a]||(this.messageHandlers[a]=
[]);this.messageHandlers[a].push(b)};d.prototype.clearMessageHandlers=function(){Object.keys(this.messageHandlers).filter(function(a){return-1===n.indexOf(a)}).forEach(function(a){this.messageHandlers[a]=[]}.bind(this))};d.prototype.loadStorageScript=function(a){this.isIframeReady?this.postMessage("script.load",a):this.iframeScriptsToLoad.push(a)};d.prototype.loadScriptFromDirectory=function(a,b,c,e){b=b.toLowerCase();var f=document.createElement("script"),h=this.settings.gslbBaseURL,g=b.replace(".",
"-")+"-script";f.id=g;f.type="text/javascript";f.src=[h,"embeddedservice",e?void 0:this.settings.releaseVersion,a,b+(this.settings.devMode?"":".min")+".js"].filter(function(k){return!!k}).join("/");c&&(f.onload=c);document.body.appendChild(f)};d.prototype.loadFeatures=function(a){this.settings.enabledFeatures.forEach(function(b){"base"!==b&&-1===this.availableFeatures.indexOf(b.toLowerCase())&&this.loadFeatureScript(b,a)}.bind(this))};d.prototype.addEventHandler=function(a,b){window.embedded_svc&&
embedded_svc.utils?embedded_svc.utils.addEventHandler(a,b):(this.storedEventHandlers[a]||(this.storedEventHandlers[a]=[]),this.storedEventHandlers[a].push(b))};d.prototype.setupMessageListener=function(){window.addEventListener("message",function(a){var b=a.data,c=a.origin.split(":")[1].replace("//",""),e=embedded_svc.utils?embedded_svc.utils.isProtocolHttpOrHttps(a.origin):!1,f=embedded_svc.utils?embedded_svc.utils.getHostnameFromUrl(this.settings.iframeURL):void 0;if(b&&b.method&&embedded_svc.isMessageFromSalesforceDomain(c)&&
e&&a.source===this.getESWFrame()){if(c!==f)if("session.frameReady"===b.method)this.settings.iframeURL=this.settings.iframeURL.replace(f,c);else return;a=b.method.split(".")[0].toLowerCase();-1===this.availableFeatures.indexOf(a)?(this.pendingMessages[a]||(this.pendingMessages[a]=[]),this.pendingMessages[a].push({direction:"incoming",payload:b})):this.handleMessage(b)}}.bind(this),!1)};d.prototype.handleMessage=function(a){var b=this.messageHandlers[a.method];b?b.forEach(function(c){c(a.data)}):this.log("Unregistered method "+
a.method+" received.")};d.prototype.isMessageFromSalesforceDomain=function(a){if(embedded_svc.utils.isCommunityOrSite()&&a===document.domain)return!0;var b=function(c,e){return-1!==c.indexOf(e,c.length-e.length)};return m.some(function(c){return b(a,c)})};d.prototype.isCommunityDomain=function(a){return".force.com"===a.substr(-10)};d.prototype.isSamePageNavigation=function(){var a=document.domain;if(this.isCommunityDomain(document.domain)){var b=a+"/"+window.location.pathname.split("/")[1];b===this.settings.storageDomain&&
(a=b)}return a.substr(-this.settings.storageDomain.length)===this.settings.storageDomain};d.prototype.addDefaultSetting=function(a,b){this.defaultSettings[a]=b};d.prototype.onButtonStatusChange=function(){var a=document.querySelector(".embeddedServiceHelpButton button"),b;if(embedded_svc.menu)embedded_svc.menu.onAgentAvailabilityChange();a&&(b=a.querySelector(".message"))&&(this.isButtonDisabled?(a.onclick=function(){},a.classList.remove("helpButtonEnabled"),a.classList.add("helpButtonDisabled"),
a.setAttribute("aria-disabled","true"),b.innerHTML=this.settings.disabledMinimizedText):(a.onclick=this.onHelpButtonClick.bind(this),a.classList.remove("helpButtonDisabled"),a.classList.add("helpButtonEnabled"),a.removeAttribute("aria-disabled"),b.innerHTML=this.settings.defaultMinimizedText))};d.prototype.hideHelpButton=function(){var a=document.querySelector(".embeddedServiceHelpButton");a&&(a.style.display="none")};d.prototype.showHelpButton=function(){var a=document.querySelector(".embeddedServiceHelpButton");
a&&(a.style.display="")};d.prototype.setDefaultButtonText=function(a,b,c,e){this.settings.entryFeature===a&&(this.settings.defaultMinimizedText=this.settings.defaultMinimizedText||b,this.settings.disabledMinimizedText=this.settings.disabledMinimizedText||c,this.settings.defaultAssistiveText=this.settings.defaultAssistiveText||e||"")};d.prototype.setDefaultShowIcon=function(a,b){this.settings.entryFeature===a&&void 0===this.settings.showIcon&&(this.settings.showIcon=b)};d.prototype.registerLinkAction=
function(a,b){var c=this.settings.linkAction;this.validLinkActions[a]||(this.validLinkActions[a]=[]);-1===this.validLinkActions[a].indexOf(b)&&this.validLinkActions[a].push(b);c.feature&&c.name&&c.feature.toLowerCase()===a.toLowerCase()&&c.name.toLowerCase()===b.toLowerCase()&&(c.valid=!0,c.feature=a,this.settings.entryFeature=a)};d.prototype.setLinkAction=function(a,b,c){var e=Object.keys(this.validLinkActions).filter(function(f){return f.toLowerCase()===a.toLowerCase()})[0];e?(this.settings.linkAction.feature=
e,this.settings.linkAction.name=this.validLinkActions[e].filter(function(f){return f.toLowerCase()===b.toLowerCase()})[0],this.settings.linkAction.valid=void 0!==this.settings.linkAction.name,this.settings.linkActionParameters=c):this.settings.linkAction.valid=!1};d.prototype.getLinkActionData=function(){window.location.search.replace(/([a-zA-Z0-9._]+)=([^&\s]+)/g,function(a,b,c){a=b.toLowerCase();0===a.indexOf("snapins.")&&(a=a.replace("snapins.",""),"action"===a?(c=c.split("."),2===c.length&&(this.settings.linkAction.feature=
c[0],this.settings.linkAction.name=c[1])):this.settings.linkActionParameters[a.toLowerCase()]=c)}.bind(this))};d.prototype.requireAuthentication=function(){var a=document.createElement("script"),b=document.createElement("style"),c=document.querySelector(this.settings.loginTargetQuerySelector);this.isAuthenticationRequired=!0;if("https:"!==window.location.protocol&&!this.settings.devMode)throw this.settings.displayHelpButton=!1,Error("Snap-in authentication requires HTTPS.");if(!this.settings.useCustomAuthentication){if(!this.settings.loginClientId||
!this.settings.loginRedirectURL||!this.settings.loginTargetQuerySelector)throw Error("Authentication in Snap-ins requires these valid settings params: loginClientId, loginRedirectURL, loginTargetQuerySelector.");if(c)this.loginButtonPressed=!1,c.addEventListener("click",function(){this.loginButtonPressed=!0}.bind(this));else throw Error("loginTargetQuerySelector is not a valid DOM element.");this.addMetaTag("salesforce-community",this.settings.communityEndpointURL);this.addMetaTag("salesforce-client-id",
this.settings.loginClientId);this.addMetaTag("salesforce-redirect-uri",this.settings.loginRedirectURL);this.addMetaTag("salesforce-mode","popup");this.addMetaTag("salesforce-target",this.settings.loginTargetQuerySelector);this.addMetaTag("salesforce-login-handler","__snapinsLoginCallback");this.addMetaTag("salesforce-logout-handler","__snapinsLogoutCallback");embedded_svc.utils.addEventHandler("requireauth",function(){var e=setInterval(function(){window.SFIDWidget&&(clearInterval(e),window.SFIDWidget.openid_response?
window.__snapinsLoginCallback():window.SFIDWidget.login())},100)});embedded_svc.utils.addEventHandler("autherror",function(e){if(window.SFIDWidget){this.loginButtonPressed=!0;window.SFIDWidget.logout();var f=setInterval(function(){window.SFIDWidget.config&&(clearInterval(f),embedded_svc.utils.fireEvent("requireauth"))}.bind(this,f),100)}}.bind(this));window.__snapinsLoginCallback=function(){var e=document.querySelector(this.settings.loginTargetQuerySelector),f=document.createElement("button");if(this.loginButtonPressed||
this.componentInitInProgress)e.innerHTML="";f.className="authenticationStart";f.innerHTML=this.settings.authenticationStartLabel;f.addEventListener("click",this.onHelpButtonClick.bind(this));e.appendChild(f);this.auth.oauthToken=window.SFIDWidget.openid_response.access_token}.bind(this);window.__snapinsLogoutCallback=function(){this.auth.oauthToken=void 0;window.SFIDWidget.init()}.bind(this);document.head.appendChild(b);b.sheet.insertRule(".sfid-logout { display: none; }",0);a.type="text/javascript";
a.src=this.settings.communityEndpointURL+"/servlet/servlet.loginwidgetcontroller?type=javascript_widget"+(embedded_svc.settings.devMode?"&min=false":"");document.head.appendChild(a)}};d.prototype.requireSLDS=function(){this.settings.requireSLDS=!0;if(this.settings.targetElement===document.body){var a=document.createElement("div");a.id="esw-snapin-target";document.body.appendChild(a);this.settings.targetElement=a}this.settings.targetElement.classList.add("slds-scope");a=document.createElement("link");
a.href=(this.settings.gslbBaseURL?this.settings.gslbBaseURL:this.settings.baseCoreURL)+"/embeddedservice/"+this.settings.releaseVersion+"/esw-slds"+(this.settings.devMode?"":".min")+".css";a.type="text/css";a.rel="stylesheet";document.getElementsByTagName("head")[0].appendChild(a)};d.prototype.validateHeaderValue=function(a){return/^[0-9a-zA-Z!#$%&'*+-.^_`|~" ]*$/g.test(a)};d.prototype.isLanguageRtl=function(a){if(a&&""!==a.trim())switch(a.substring(0,2)){case "ar":case "fa":case "he":case "iw":case "ji":case "ur":case "yi":return!0;
default:return!1}};d.prototype.isDesktop=function(){return-1===navigator.userAgent.indexOf("Mobi")};window.embedded_svc=new d;Object.getOwnPropertyNames(l).forEach(function(a){var b=l[a];"object"===b?(window.embedded_svc[a]={},Object.keys(b).forEach(function(c){window.embedded_svc[a][c]=b[c]})):window.embedded_svc[a]=b})})(window.embedded_svc||{});