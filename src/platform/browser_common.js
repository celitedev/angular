'use strict';var lang_1 = require('angular2/src/facade/lang');
var di_1 = require('angular2/src/core/di');
var core_1 = require("angular2/core");
var common_1 = require("angular2/common");
var testability_1 = require('angular2/src/core/testability/testability');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var dom_events_1 = require('angular2/src/platform/dom/events/dom_events');
var key_events_1 = require('angular2/src/platform/dom/events/key_events');
var hammer_gestures_1 = require('angular2/src/platform/dom/events/hammer_gestures');
var dom_tokens_1 = require('angular2/src/platform/dom/dom_tokens');
var dom_renderer_1 = require('angular2/src/platform/dom/dom_renderer');
var shared_styles_host_1 = require('angular2/src/platform/dom/shared_styles_host');
var shared_styles_host_2 = require("angular2/src/platform/dom/shared_styles_host");
var browser_details_1 = require("angular2/src/animate/browser_details");
var animation_builder_1 = require("angular2/src/animate/animation_builder");
var browser_adapter_1 = require('./browser/browser_adapter');
var testability_2 = require('angular2/src/platform/browser/testability');
var wtf_init_1 = require('angular2/src/core/profile/wtf_init');
var event_manager_1 = require("angular2/src/platform/dom/events/event_manager");
var hammer_gestures_2 = require('angular2/src/platform/dom/events/hammer_gestures');
var common_dom_1 = require('angular2/platform/common_dom');
var dom_tokens_2 = require('angular2/src/platform/dom/dom_tokens');
exports.DOCUMENT = dom_tokens_2.DOCUMENT;
var title_1 = require('angular2/src/platform/browser/title');
exports.Title = title_1.Title;
var common_dom_2 = require('angular2/platform/common_dom');
exports.ELEMENT_PROBE_PROVIDERS = common_dom_2.ELEMENT_PROBE_PROVIDERS;
exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = common_dom_2.ELEMENT_PROBE_PROVIDERS_PROD_MODE;
exports.inspectNativeElement = common_dom_2.inspectNativeElement;
exports.By = common_dom_2.By;
var browser_adapter_2 = require('./browser/browser_adapter');
exports.BrowserDomAdapter = browser_adapter_2.BrowserDomAdapter;
var tools_1 = require('angular2/src/platform/browser/tools/tools');
exports.enableDebugTools = tools_1.enableDebugTools;
exports.disableDebugTools = tools_1.disableDebugTools;
var hammer_gestures_3 = require('./dom/events/hammer_gestures');
exports.HAMMER_GESTURE_CONFIG = hammer_gestures_3.HAMMER_GESTURE_CONFIG;
exports.HammerGestureConfig = hammer_gestures_3.HammerGestureConfig;
/**
 * A set of providers to initialize the Angular platform in a web browser.
 *
 * Used automatically by `bootstrap`, or can be passed to {@link platform}.
 */
exports.BROWSER_PROVIDERS = lang_1.CONST_EXPR([
    core_1.PLATFORM_COMMON_PROVIDERS,
    new di_1.Provider(core_1.PLATFORM_INITIALIZER, { useValue: initDomAdapter, multi: true }),
]);
function _exceptionHandler() {
    // !IS_DART is required because we must rethrow exceptions in JS,
    // but must not rethrow exceptions in Dart
    return new core_1.ExceptionHandler(dom_adapter_1.DOM, !lang_1.IS_DART);
}
function _document() {
    return dom_adapter_1.DOM.defaultDoc();
}
/**
 * A set of providers to initialize an Angular application in a web browser.
 *
 * Used automatically by `bootstrap`, or can be passed to {@link PlatformRef.application}.
 */
exports.BROWSER_APP_COMMON_PROVIDERS = lang_1.CONST_EXPR([
    core_1.APPLICATION_COMMON_PROVIDERS,
    common_1.FORM_PROVIDERS,
    new di_1.Provider(core_1.PLATFORM_PIPES, { useValue: common_1.COMMON_PIPES, multi: true }),
    new di_1.Provider(core_1.PLATFORM_DIRECTIVES, { useValue: common_1.COMMON_DIRECTIVES, multi: true }),
    new di_1.Provider(core_1.ExceptionHandler, { useFactory: _exceptionHandler, deps: [] }),
    new di_1.Provider(dom_tokens_1.DOCUMENT, { useFactory: _document, deps: [] }),
    new di_1.Provider(event_manager_1.EVENT_MANAGER_PLUGINS, { useClass: dom_events_1.DomEventsPlugin, multi: true }),
    new di_1.Provider(event_manager_1.EVENT_MANAGER_PLUGINS, { useClass: key_events_1.KeyEventsPlugin, multi: true }),
    new di_1.Provider(event_manager_1.EVENT_MANAGER_PLUGINS, { useClass: hammer_gestures_1.HammerGesturesPlugin, multi: true }),
    new di_1.Provider(hammer_gestures_2.HAMMER_GESTURE_CONFIG, { useClass: hammer_gestures_2.HammerGestureConfig }),
    new di_1.Provider(dom_renderer_1.DomRootRenderer, { useClass: dom_renderer_1.DomRootRenderer_ }),
    new di_1.Provider(core_1.RootRenderer, { useExisting: dom_renderer_1.DomRootRenderer }),
    new di_1.Provider(shared_styles_host_2.SharedStylesHost, { useExisting: shared_styles_host_1.DomSharedStylesHost }),
    shared_styles_host_1.DomSharedStylesHost,
    testability_1.Testability,
    browser_details_1.BrowserDetails,
    animation_builder_1.AnimationBuilder,
    event_manager_1.EventManager,
    common_dom_1.ELEMENT_PROBE_PROVIDERS
]);
function initDomAdapter() {
    browser_adapter_1.BrowserDomAdapter.makeCurrent();
    wtf_init_1.wtfInit();
    testability_2.BrowserGetTestability.init();
}
exports.initDomAdapter = initDomAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlcl9jb21tb24udHMiXSwibmFtZXMiOlsiX2V4Y2VwdGlvbkhhbmRsZXIiLCJfZG9jdW1lbnQiLCJpbml0RG9tQWRhcHRlciJdLCJtYXBwaW5ncyI6IkFBQUEscUJBQWtDLDBCQUEwQixDQUFDLENBQUE7QUFDN0QsbUJBQXVELHNCQUFzQixDQUFDLENBQUE7QUFFOUUscUJBWU8sZUFBZSxDQUFDLENBQUE7QUFDdkIsdUJBQThELGlCQUFpQixDQUFDLENBQUE7QUFDaEYsNEJBQTBCLDJDQUEyQyxDQUFDLENBQUE7QUFDdEUsNEJBQWtCLHVDQUF1QyxDQUFDLENBQUE7QUFDMUQsMkJBQThCLDZDQUE2QyxDQUFDLENBQUE7QUFDNUUsMkJBQThCLDZDQUE2QyxDQUFDLENBQUE7QUFDNUUsZ0NBQW1DLGtEQUFrRCxDQUFDLENBQUE7QUFDdEYsMkJBQXVCLHNDQUFzQyxDQUFDLENBQUE7QUFDOUQsNkJBQWdELHdDQUF3QyxDQUFDLENBQUE7QUFDekYsbUNBQWtDLDhDQUE4QyxDQUFDLENBQUE7QUFDakYsbUNBQStCLDhDQUE4QyxDQUFDLENBQUE7QUFDOUUsZ0NBQTZCLHNDQUFzQyxDQUFDLENBQUE7QUFDcEUsa0NBQStCLHdDQUF3QyxDQUFDLENBQUE7QUFDeEUsZ0NBQWdDLDJCQUEyQixDQUFDLENBQUE7QUFDNUQsNEJBQW9DLDJDQUEyQyxDQUFDLENBQUE7QUFDaEYseUJBQXNCLG9DQUFvQyxDQUFDLENBQUE7QUFDM0QsOEJBQWtELGdEQUFnRCxDQUFDLENBQUE7QUFDbkcsZ0NBR08sa0RBQWtELENBQUMsQ0FBQTtBQUMxRCwyQkFBc0MsOEJBQThCLENBQUMsQ0FBQTtBQUNyRSwyQkFBdUIsc0NBQXNDLENBQUM7QUFBdEQseUNBQXNEO0FBQzlELHNCQUFvQixxQ0FBcUMsQ0FBQztBQUFsRCw4QkFBa0Q7QUFDMUQsMkJBS08sOEJBQThCLENBQUM7QUFKcEMsdUVBQXVCO0FBQ3ZCLDJGQUFpQztBQUNqQyxpRUFBb0I7QUFDcEIsNkJBQ29DO0FBQ3RDLGdDQUFnQywyQkFBMkIsQ0FBQztBQUFwRCxnRUFBb0Q7QUFDNUQsc0JBQWtELDJDQUEyQyxDQUFDO0FBQXRGLG9EQUFnQjtBQUFFLHNEQUFvRTtBQUM5RixnQ0FBeUQsOEJBQThCLENBQUM7QUFBaEYsd0VBQXFCO0FBQUUsb0VBQXlEO0FBRXhGOzs7O0dBSUc7QUFDVSx5QkFBaUIsR0FBMkMsaUJBQVUsQ0FBQztJQUNsRixnQ0FBeUI7SUFDekIsSUFBSSxhQUFRLENBQUMsMkJBQW9CLEVBQUUsRUFBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztDQUM1RSxDQUFDLENBQUM7QUFFSDtJQUNFQSxpRUFBaUVBO0lBQ2pFQSwwQ0FBMENBO0lBQzFDQSxNQUFNQSxDQUFDQSxJQUFJQSx1QkFBZ0JBLENBQUNBLGlCQUFHQSxFQUFFQSxDQUFDQSxjQUFPQSxDQUFDQSxDQUFDQTtBQUM3Q0EsQ0FBQ0E7QUFFRDtJQUNFQyxNQUFNQSxDQUFDQSxpQkFBR0EsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7QUFDMUJBLENBQUNBO0FBRUQ7Ozs7R0FJRztBQUNVLG9DQUE0QixHQUEyQyxpQkFBVSxDQUFDO0lBQzdGLG1DQUE0QjtJQUM1Qix1QkFBYztJQUNkLElBQUksYUFBUSxDQUFDLHFCQUFjLEVBQUUsRUFBQyxRQUFRLEVBQUUscUJBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDbkUsSUFBSSxhQUFRLENBQUMsMEJBQW1CLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQWlCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQzdFLElBQUksYUFBUSxDQUFDLHVCQUFnQixFQUFFLEVBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUN6RSxJQUFJLGFBQVEsQ0FBQyxxQkFBUSxFQUFFLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDekQsSUFBSSxhQUFRLENBQUMscUNBQXFCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDN0UsSUFBSSxhQUFRLENBQUMscUNBQXFCLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQWUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDN0UsSUFBSSxhQUFRLENBQUMscUNBQXFCLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0NBQW9CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO0lBQ2xGLElBQUksYUFBUSxDQUFDLHVDQUFxQixFQUFFLEVBQUMsUUFBUSxFQUFFLHFDQUFtQixFQUFDLENBQUM7SUFDcEUsSUFBSSxhQUFRLENBQUMsOEJBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSwrQkFBZ0IsRUFBQyxDQUFDO0lBQzNELElBQUksYUFBUSxDQUFDLG1CQUFZLEVBQUUsRUFBQyxXQUFXLEVBQUUsOEJBQWUsRUFBQyxDQUFDO0lBQzFELElBQUksYUFBUSxDQUFDLHFDQUFnQixFQUFFLEVBQUMsV0FBVyxFQUFFLHdDQUFtQixFQUFDLENBQUM7SUFDbEUsd0NBQW1CO0lBQ25CLHlCQUFXO0lBQ1gsZ0NBQWM7SUFDZCxvQ0FBZ0I7SUFDaEIsNEJBQVk7SUFDWixvQ0FBdUI7Q0FDeEIsQ0FBQyxDQUFDO0FBRUg7SUFDRUMsbUNBQWlCQSxDQUFDQSxXQUFXQSxFQUFFQSxDQUFDQTtJQUNoQ0Esa0JBQU9BLEVBQUVBLENBQUNBO0lBQ1ZBLG1DQUFxQkEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7QUFDL0JBLENBQUNBO0FBSmUsc0JBQWMsaUJBSTdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NPTlNUX0VYUFIsIElTX0RBUlR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge3Byb3ZpZGUsIFByb3ZpZGVyLCBJbmplY3RvciwgT3BhcXVlVG9rZW59IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcblxuaW1wb3J0IHtcbiAgUExBVEZPUk1fSU5JVElBTElaRVIsXG4gIFBMQVRGT1JNX0RJUkVDVElWRVMsXG4gIFBMQVRGT1JNX1BJUEVTLFxuICBDb21wb25lbnRSZWYsXG4gIHBsYXRmb3JtLFxuICBFeGNlcHRpb25IYW5kbGVyLFxuICBSZWZsZWN0b3IsXG4gIFJvb3RSZW5kZXJlcixcbiAgcmVmbGVjdG9yLFxuICBBUFBMSUNBVElPTl9DT01NT05fUFJPVklERVJTLFxuICBQTEFURk9STV9DT01NT05fUFJPVklERVJTXG59IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge0NPTU1PTl9ESVJFQ1RJVkVTLCBDT01NT05fUElQRVMsIEZPUk1fUFJPVklERVJTfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge1Rlc3RhYmlsaXR5fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS90ZXN0YWJpbGl0eS90ZXN0YWJpbGl0eSc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5pbXBvcnQge0RvbUV2ZW50c1BsdWdpbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMvZG9tX2V2ZW50cyc7XG5pbXBvcnQge0tleUV2ZW50c1BsdWdpbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMva2V5X2V2ZW50cyc7XG5pbXBvcnQge0hhbW1lckdlc3R1cmVzUGx1Z2lufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2V2ZW50cy9oYW1tZXJfZ2VzdHVyZXMnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fdG9rZW5zJztcbmltcG9ydCB7RG9tUm9vdFJlbmRlcmVyLCBEb21Sb290UmVuZGVyZXJffSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9yZW5kZXJlcic7XG5pbXBvcnQge0RvbVNoYXJlZFN0eWxlc0hvc3R9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vc2hhcmVkX3N0eWxlc19ob3N0JztcbmltcG9ydCB7U2hhcmVkU3R5bGVzSG9zdH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vc2hhcmVkX3N0eWxlc19ob3N0XCI7XG5pbXBvcnQge0Jyb3dzZXJEZXRhaWxzfSBmcm9tIFwiYW5ndWxhcjIvc3JjL2FuaW1hdGUvYnJvd3Nlcl9kZXRhaWxzXCI7XG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gXCJhbmd1bGFyMi9zcmMvYW5pbWF0ZS9hbmltYXRpb25fYnVpbGRlclwiO1xuaW1wb3J0IHtCcm93c2VyRG9tQWRhcHRlcn0gZnJvbSAnLi9icm93c2VyL2Jyb3dzZXJfYWRhcHRlcic7XG5pbXBvcnQge0Jyb3dzZXJHZXRUZXN0YWJpbGl0eX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXIvdGVzdGFiaWxpdHknO1xuaW1wb3J0IHt3dGZJbml0fSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9wcm9maWxlL3d0Zl9pbml0JztcbmltcG9ydCB7RXZlbnRNYW5hZ2VyLCBFVkVOVF9NQU5BR0VSX1BMVUdJTlN9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2V2ZW50cy9ldmVudF9tYW5hZ2VyXCI7XG5pbXBvcnQge1xuICBIQU1NRVJfR0VTVFVSRV9DT05GSUcsXG4gIEhhbW1lckdlc3R1cmVDb25maWdcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9ldmVudHMvaGFtbWVyX2dlc3R1cmVzJztcbmltcG9ydCB7RUxFTUVOVF9QUk9CRV9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2NvbW1vbl9kb20nO1xuZXhwb3J0IHtET0NVTUVOVH0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fdG9rZW5zJztcbmV4cG9ydCB7VGl0bGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL3RpdGxlJztcbmV4cG9ydCB7XG4gIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTLFxuICBFTEVNRU5UX1BST0JFX1BST1ZJREVSU19QUk9EX01PREUsXG4gIGluc3BlY3ROYXRpdmVFbGVtZW50LFxuICBCeVxufSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb25fZG9tJztcbmV4cG9ydCB7QnJvd3NlckRvbUFkYXB0ZXJ9IGZyb20gJy4vYnJvd3Nlci9icm93c2VyX2FkYXB0ZXInO1xuZXhwb3J0IHtlbmFibGVEZWJ1Z1Rvb2xzLCBkaXNhYmxlRGVidWdUb29sc30gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXIvdG9vbHMvdG9vbHMnO1xuZXhwb3J0IHtIQU1NRVJfR0VTVFVSRV9DT05GSUcsIEhhbW1lckdlc3R1cmVDb25maWd9IGZyb20gJy4vZG9tL2V2ZW50cy9oYW1tZXJfZ2VzdHVyZXMnO1xuXG4vKipcbiAqIEEgc2V0IG9mIHByb3ZpZGVycyB0byBpbml0aWFsaXplIHRoZSBBbmd1bGFyIHBsYXRmb3JtIGluIGEgd2ViIGJyb3dzZXIuXG4gKlxuICogVXNlZCBhdXRvbWF0aWNhbGx5IGJ5IGBib290c3RyYXBgLCBvciBjYW4gYmUgcGFzc2VkIHRvIHtAbGluayBwbGF0Zm9ybX0uXG4gKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSX1BST1ZJREVSUzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPSBDT05TVF9FWFBSKFtcbiAgUExBVEZPUk1fQ09NTU9OX1BST1ZJREVSUyxcbiAgbmV3IFByb3ZpZGVyKFBMQVRGT1JNX0lOSVRJQUxJWkVSLCB7dXNlVmFsdWU6IGluaXREb21BZGFwdGVyLCBtdWx0aTogdHJ1ZX0pLFxuXSk7XG5cbmZ1bmN0aW9uIF9leGNlcHRpb25IYW5kbGVyKCk6IEV4Y2VwdGlvbkhhbmRsZXIge1xuICAvLyAhSVNfREFSVCBpcyByZXF1aXJlZCBiZWNhdXNlIHdlIG11c3QgcmV0aHJvdyBleGNlcHRpb25zIGluIEpTLFxuICAvLyBidXQgbXVzdCBub3QgcmV0aHJvdyBleGNlcHRpb25zIGluIERhcnRcbiAgcmV0dXJuIG5ldyBFeGNlcHRpb25IYW5kbGVyKERPTSwgIUlTX0RBUlQpO1xufVxuXG5mdW5jdGlvbiBfZG9jdW1lbnQoKTogYW55IHtcbiAgcmV0dXJuIERPTS5kZWZhdWx0RG9jKCk7XG59XG5cbi8qKlxuICogQSBzZXQgb2YgcHJvdmlkZXJzIHRvIGluaXRpYWxpemUgYW4gQW5ndWxhciBhcHBsaWNhdGlvbiBpbiBhIHdlYiBicm93c2VyLlxuICpcbiAqIFVzZWQgYXV0b21hdGljYWxseSBieSBgYm9vdHN0cmFwYCwgb3IgY2FuIGJlIHBhc3NlZCB0byB7QGxpbmsgUGxhdGZvcm1SZWYuYXBwbGljYXRpb259LlxuICovXG5leHBvcnQgY29uc3QgQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSUzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPSBDT05TVF9FWFBSKFtcbiAgQVBQTElDQVRJT05fQ09NTU9OX1BST1ZJREVSUyxcbiAgRk9STV9QUk9WSURFUlMsXG4gIG5ldyBQcm92aWRlcihQTEFURk9STV9QSVBFUywge3VzZVZhbHVlOiBDT01NT05fUElQRVMsIG11bHRpOiB0cnVlfSksXG4gIG5ldyBQcm92aWRlcihQTEFURk9STV9ESVJFQ1RJVkVTLCB7dXNlVmFsdWU6IENPTU1PTl9ESVJFQ1RJVkVTLCBtdWx0aTogdHJ1ZX0pLFxuICBuZXcgUHJvdmlkZXIoRXhjZXB0aW9uSGFuZGxlciwge3VzZUZhY3Rvcnk6IF9leGNlcHRpb25IYW5kbGVyLCBkZXBzOiBbXX0pLFxuICBuZXcgUHJvdmlkZXIoRE9DVU1FTlQsIHt1c2VGYWN0b3J5OiBfZG9jdW1lbnQsIGRlcHM6IFtdfSksXG4gIG5ldyBQcm92aWRlcihFVkVOVF9NQU5BR0VSX1BMVUdJTlMsIHt1c2VDbGFzczogRG9tRXZlbnRzUGx1Z2luLCBtdWx0aTogdHJ1ZX0pLFxuICBuZXcgUHJvdmlkZXIoRVZFTlRfTUFOQUdFUl9QTFVHSU5TLCB7dXNlQ2xhc3M6IEtleUV2ZW50c1BsdWdpbiwgbXVsdGk6IHRydWV9KSxcbiAgbmV3IFByb3ZpZGVyKEVWRU5UX01BTkFHRVJfUExVR0lOUywge3VzZUNsYXNzOiBIYW1tZXJHZXN0dXJlc1BsdWdpbiwgbXVsdGk6IHRydWV9KSxcbiAgbmV3IFByb3ZpZGVyKEhBTU1FUl9HRVNUVVJFX0NPTkZJRywge3VzZUNsYXNzOiBIYW1tZXJHZXN0dXJlQ29uZmlnfSksXG4gIG5ldyBQcm92aWRlcihEb21Sb290UmVuZGVyZXIsIHt1c2VDbGFzczogRG9tUm9vdFJlbmRlcmVyX30pLFxuICBuZXcgUHJvdmlkZXIoUm9vdFJlbmRlcmVyLCB7dXNlRXhpc3Rpbmc6IERvbVJvb3RSZW5kZXJlcn0pLFxuICBuZXcgUHJvdmlkZXIoU2hhcmVkU3R5bGVzSG9zdCwge3VzZUV4aXN0aW5nOiBEb21TaGFyZWRTdHlsZXNIb3N0fSksXG4gIERvbVNoYXJlZFN0eWxlc0hvc3QsXG4gIFRlc3RhYmlsaXR5LFxuICBCcm93c2VyRGV0YWlscyxcbiAgQW5pbWF0aW9uQnVpbGRlcixcbiAgRXZlbnRNYW5hZ2VyLFxuICBFTEVNRU5UX1BST0JFX1BST1ZJREVSU1xuXSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RG9tQWRhcHRlcigpIHtcbiAgQnJvd3NlckRvbUFkYXB0ZXIubWFrZUN1cnJlbnQoKTtcbiAgd3RmSW5pdCgpO1xuICBCcm93c2VyR2V0VGVzdGFiaWxpdHkuaW5pdCgpO1xufVxuIl19