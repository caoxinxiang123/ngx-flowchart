(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/coercion'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-flowchart', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/cdk/coercion', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-flowchart'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.cdk.coercion, global.ng.common));
}(this, (function (exports, core, rxjs, operators, coercion, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var FC_NODE_COMPONENT_CONFIG = new core.InjectionToken('fc-node.component.config');
    var htmlPrefix = 'fc';
    var leftConnectorType = 'leftConnector';
    var rightConnectorType = 'rightConnector';
    var FlowchartConstants = {
        htmlPrefix: htmlPrefix,
        leftConnectorType: leftConnectorType,
        rightConnectorType: rightConnectorType,
        curvedStyle: 'curved',
        lineStyle: 'line',
        dragAnimationRepaint: 'repaint',
        dragAnimationShadow: 'shadow',
        canvasClass: htmlPrefix + '-canvas',
        selectedClass: htmlPrefix + '-selected',
        editClass: htmlPrefix + '-edit',
        activeClass: htmlPrefix + '-active',
        hoverClass: htmlPrefix + '-hover',
        draggingClass: htmlPrefix + '-dragging',
        edgeClass: htmlPrefix + '-edge',
        edgeLabelClass: htmlPrefix + '-edge-label',
        connectorClass: htmlPrefix + '-connector',
        magnetClass: htmlPrefix + '-magnet',
        nodeClass: htmlPrefix + '-node',
        nodeOverlayClass: htmlPrefix + '-node-overlay',
        leftConnectorClass: htmlPrefix + '-' + leftConnectorType + 's',
        rightConnectorClass: htmlPrefix + '-' + rightConnectorType + 's',
        canvasResizeThreshold: 200,
        canvasResizeStep: 200
    };
    var BaseError = /** @class */ (function () {
        function BaseError() {
            Error.apply(this, arguments);
        }
        return BaseError;
    }());
    Object.defineProperty(BaseError, 'prototype', new Error());
    var ModelvalidationError = /** @class */ (function (_super) {
        __extends(ModelvalidationError, _super);
        function ModelvalidationError(message) {
            var _this = _super.call(this) || this;
            _this.message = message;
            return _this;
        }
        return ModelvalidationError;
    }(BaseError));
    function fcTopSort(graph) {
        var e_1, _a, e_2, _b;
        var adjacentList = {};
        graph.nodes.forEach(function (node) {
            adjacentList[node.id] = { incoming: 0, outgoing: [] };
        });
        graph.edges.forEach(function (edge) {
            var sourceNode = graph.nodes.filter(function (node) {
                return node.connectors.some(function (connector) {
                    return connector.id === edge.source;
                });
            })[0];
            var destinationNode = graph.nodes.filter(function (node) {
                return node.connectors.some(function (connector) {
                    return connector.id === edge.destination;
                });
            })[0];
            adjacentList[sourceNode.id].outgoing.push(destinationNode.id);
            adjacentList[destinationNode.id].incoming++;
        });
        var orderedNodes = [];
        var sourceNodes = [];
        try {
            for (var _c = __values(Object.keys(adjacentList)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var node = _d.value;
                var edges = adjacentList[node];
                if (edges.incoming === 0) {
                    sourceNodes.push(node);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        while (sourceNodes.length !== 0) {
            var sourceNode = sourceNodes.pop();
            for (var i = 0; i < adjacentList[sourceNode].outgoing.length; i++) {
                var destinationNode = adjacentList[sourceNode].outgoing[i];
                adjacentList[destinationNode].incoming--;
                if (adjacentList[destinationNode].incoming === 0) {
                    sourceNodes.push(destinationNode);
                }
                adjacentList[sourceNode].outgoing.splice(i, 1);
                i--;
            }
            orderedNodes.push(sourceNode);
        }
        var hasEdges = false;
        try {
            for (var _e = __values(Object.keys(adjacentList)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var node = _f.value;
                var edges = adjacentList[node];
                if (edges.incoming !== 0) {
                    hasEdges = true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (hasEdges) {
            return null;
        }
        else {
            return orderedNodes;
        }
    }

    var FcModelService = /** @class */ (function () {
        function FcModelService(modelValidation, model, modelChanged, detectChangesSubject, selectedObjects, dropNode, createEdge, edgeAddedCallback, nodeRemovedCallback, edgeRemovedCallback, canvasHtmlElement, svgHtmlElement) {
            var _this = this;
            this.connectorsRectInfos = {};
            this.nodesHtmlElements = {};
            this.canvasHtmlElement = null;
            this.dragImage = null;
            this.svgHtmlElement = null;
            this.debouncer = new rxjs.Subject();
            this.modelValidation = modelValidation;
            this.model = model;
            this.modelChanged = modelChanged;
            this.detectChangesSubject = detectChangesSubject;
            this.canvasHtmlElement = canvasHtmlElement;
            this.svgHtmlElement = svgHtmlElement;
            this.modelValidation.validateModel(this.model);
            this.selectedObjects = selectedObjects;
            this.dropNode = dropNode || (function () { });
            this.createEdge = createEdge || (function (event, edge) { return rxjs.of(__assign(__assign({}, edge), { label: 'label' })); });
            this.edgeAddedCallback = edgeAddedCallback || (function () { });
            this.nodeRemovedCallback = nodeRemovedCallback || (function () { });
            this.edgeRemovedCallback = edgeRemovedCallback || (function () { });
            this.connectors = new ConnectorsModel(this);
            this.nodes = new NodesModel(this);
            this.edges = new EdgesModel(this);
            this.debouncer
                .pipe(operators.debounceTime(100))
                .subscribe(function () { return _this.modelChanged.emit(); });
        }
        FcModelService.prototype.notifyModelChanged = function () {
            this.debouncer.next();
        };
        FcModelService.prototype.detectChanges = function () {
            var _this = this;
            setTimeout(function () {
                _this.detectChangesSubject.next();
            }, 0);
        };
        FcModelService.prototype.selectObject = function (object) {
            if (this.isEditable()) {
                if (this.selectedObjects.indexOf(object) === -1) {
                    this.selectedObjects.push(object);
                }
            }
        };
        FcModelService.prototype.deselectObject = function (object) {
            if (this.isEditable()) {
                var index = this.selectedObjects.indexOf(object);
                if (index === -1) {
                    throw new Error('Tried to deselect an unselected object');
                }
                this.selectedObjects.splice(index, 1);
            }
        };
        FcModelService.prototype.toggleSelectedObject = function (object) {
            if (this.isSelectedObject(object)) {
                this.deselectObject(object);
            }
            else {
                this.selectObject(object);
            }
        };
        FcModelService.prototype.isSelectedObject = function (object) {
            return this.selectedObjects.indexOf(object) !== -1;
        };
        FcModelService.prototype.selectAll = function () {
            var _this = this;
            this.model.nodes.forEach(function (node) {
                if (!node.readonly) {
                    _this.nodes.select(node);
                }
            });
            this.model.edges.forEach(function (edge) {
                _this.edges.select(edge);
            });
            this.detectChanges();
        };
        FcModelService.prototype.deselectAll = function () {
            this.selectedObjects.splice(0, this.selectedObjects.length);
            this.detectChanges();
        };
        FcModelService.prototype.isEditObject = function (object) {
            return this.selectedObjects.length === 1 &&
                this.selectedObjects.indexOf(object) !== -1;
        };
        FcModelService.prototype.inRectBox = function (x, y, rectBox) {
            return x >= rectBox.left && x <= rectBox.right &&
                y >= rectBox.top && y <= rectBox.bottom;
        };
        FcModelService.prototype.getItemInfoAtPoint = function (x, y) {
            return {
                node: this.getNodeAtPoint(x, y),
                edge: this.getEdgeAtPoint(x, y)
            };
        };
        FcModelService.prototype.getNodeAtPoint = function (x, y) {
            var e_1, _a;
            try {
                for (var _b = __values(this.model.nodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var node = _c.value;
                    var element = this.nodes.getHtmlElement(node.id);
                    var nodeElementBox = element.getBoundingClientRect();
                    if (x >= nodeElementBox.left && x <= nodeElementBox.right
                        && y >= nodeElementBox.top && y <= nodeElementBox.bottom) {
                        return node;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        };
        FcModelService.prototype.getEdgeAtPoint = function (x, y) {
            var element = document.elementFromPoint(x, y);
            var id = element.id;
            var edgeIndex = -1;
            if (id) {
                if (id.startsWith('fc-edge-path-')) {
                    edgeIndex = Number(id.substring('fc-edge-path-'.length));
                }
                else if (id.startsWith('fc-edge-label-')) {
                    edgeIndex = Number(id.substring('fc-edge-label-'.length));
                }
            }
            if (edgeIndex > -1) {
                return this.model.edges[edgeIndex];
            }
            return null;
        };
        FcModelService.prototype.selectAllInRect = function (rectBox) {
            var _this = this;
            this.model.nodes.forEach(function (value) {
                var element = _this.nodes.getHtmlElement(value.id);
                var nodeElementBox = element.getBoundingClientRect();
                if (!value.readonly) {
                    var x = nodeElementBox.left + nodeElementBox.width / 2;
                    var y = nodeElementBox.top + nodeElementBox.height / 2;
                    if (_this.inRectBox(x, y, rectBox)) {
                        _this.nodes.select(value);
                    }
                    else {
                        if (_this.nodes.isSelected(value)) {
                            _this.nodes.deselect(value);
                        }
                    }
                }
            });
            var canvasElementBox = this.canvasHtmlElement.getBoundingClientRect();
            this.model.edges.forEach(function (value) {
                var start = _this.edges.sourceCoord(value);
                var end = _this.edges.destCoord(value);
                var x = (start.x + end.x) / 2 + canvasElementBox.left;
                var y = (start.y + end.y) / 2 + canvasElementBox.top;
                if (_this.inRectBox(x, y, rectBox)) {
                    _this.edges.select(value);
                }
                else {
                    if (_this.edges.isSelected(value)) {
                        _this.edges.deselect(value);
                    }
                }
            });
        };
        FcModelService.prototype.deleteSelected = function () {
            var _this = this;
            var edgesToDelete = this.edges.getSelectedEdges();
            edgesToDelete.forEach(function (edge) {
                _this.edges.delete(edge);
            });
            var nodesToDelete = this.nodes.getSelectedNodes();
            nodesToDelete.forEach(function (node) {
                _this.nodes.delete(node);
            });
        };
        FcModelService.prototype.isEditable = function () {
            return this.dropTargetId === undefined;
        };
        FcModelService.prototype.isDropSource = function () {
            return this.dropTargetId !== undefined;
        };
        FcModelService.prototype.getDragImage = function () {
            if (!this.dragImage) {
                this.dragImage = new Image();
                this.dragImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                this.dragImage.style.visibility = 'hidden';
            }
            return this.dragImage;
        };
        return FcModelService;
    }());
    var AbstractFcModel = /** @class */ (function () {
        function AbstractFcModel(modelService) {
            this.modelService = modelService;
        }
        AbstractFcModel.prototype.select = function (object) {
            this.modelService.selectObject(object);
        };
        AbstractFcModel.prototype.deselect = function (object) {
            this.modelService.deselectObject(object);
        };
        AbstractFcModel.prototype.toggleSelected = function (object) {
            this.modelService.toggleSelectedObject(object);
        };
        AbstractFcModel.prototype.isSelected = function (object) {
            return this.modelService.isSelectedObject(object);
        };
        AbstractFcModel.prototype.isEdit = function (object) {
            return this.modelService.isEditObject(object);
        };
        return AbstractFcModel;
    }());
    var ConnectorsModel = /** @class */ (function (_super) {
        __extends(ConnectorsModel, _super);
        function ConnectorsModel(modelService) {
            return _super.call(this, modelService) || this;
        }
        ConnectorsModel.prototype.getConnector = function (connectorId) {
            var e_2, _a, e_3, _b;
            var model = this.modelService.model;
            try {
                for (var _c = __values(model.nodes), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var node = _d.value;
                    try {
                        for (var _e = (e_3 = void 0, __values(node.connectors)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var connector = _f.value;
                            if (connector.id === connectorId) {
                                return connector;
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        ConnectorsModel.prototype.getConnectorRectInfo = function (connectorId) {
            return this.modelService.connectorsRectInfos[connectorId];
        };
        ConnectorsModel.prototype.setConnectorRectInfo = function (connectorId, connectorRectInfo) {
            this.modelService.connectorsRectInfos[connectorId] = connectorRectInfo;
            this.modelService.detectChanges();
        };
        ConnectorsModel.prototype._getCoords = function (connectorId, centered) {
            var connectorRectInfo = this.getConnectorRectInfo(connectorId);
            var canvas = this.modelService.canvasHtmlElement;
            if (connectorRectInfo === null || connectorRectInfo === undefined || canvas === null) {
                return { x: 0, y: 0 };
            }
            var x = connectorRectInfo.type === FlowchartConstants.leftConnectorType ?
                connectorRectInfo.nodeRectInfo.left() : connectorRectInfo.nodeRectInfo.right();
            var y = connectorRectInfo.nodeRectInfo.top() + connectorRectInfo.nodeRectInfo.height() / 2;
            if (!centered) {
                x -= connectorRectInfo.width / 2;
                y -= connectorRectInfo.height / 2;
            }
            var coords = {
                x: Math.round(x),
                y: Math.round(y)
            };
            return coords;
        };
        ConnectorsModel.prototype.getCoords = function (connectorId) {
            return this._getCoords(connectorId, false);
        };
        ConnectorsModel.prototype.getCenteredCoord = function (connectorId) {
            return this._getCoords(connectorId, true);
        };
        return ConnectorsModel;
    }(AbstractFcModel));
    var NodesModel = /** @class */ (function (_super) {
        __extends(NodesModel, _super);
        function NodesModel(modelService) {
            return _super.call(this, modelService) || this;
        }
        NodesModel.prototype.getConnectorsByType = function (node, type) {
            return node.connectors.filter(function (connector) {
                return connector.type === type;
            });
        };
        NodesModel.prototype._addConnector = function (node, connector) {
            node.connectors.push(connector);
            try {
                this.modelService.modelValidation.validateNode(node);
            }
            catch (error) {
                node.connectors.splice(node.connectors.indexOf(connector), 1);
                throw error;
            }
        };
        NodesModel.prototype.delete = function (node) {
            if (this.isSelected(node)) {
                this.deselect(node);
            }
            var model = this.modelService.model;
            var index = model.nodes.indexOf(node);
            if (index === -1) {
                if (node === undefined) {
                    throw new Error('Passed undefined');
                }
                throw new Error('Tried to delete not existing node');
            }
            var connectorIds = this.getConnectorIds(node);
            for (var i = 0; i < model.edges.length; i++) {
                var edge = model.edges[i];
                if (connectorIds.indexOf(edge.source) !== -1 || connectorIds.indexOf(edge.destination) !== -1) {
                    this.modelService.edges.delete(edge);
                    i--;
                }
            }
            model.nodes.splice(index, 1);
            this.modelService.notifyModelChanged();
            this.modelService.nodeRemovedCallback(node);
        };
        NodesModel.prototype.getSelectedNodes = function () {
            var _this = this;
            var model = this.modelService.model;
            return model.nodes.filter(function (node) {
                return _this.modelService.nodes.isSelected(node);
            });
        };
        NodesModel.prototype.handleClicked = function (node, ctrlKey) {
            if (ctrlKey) {
                this.modelService.nodes.toggleSelected(node);
            }
            else {
                this.modelService.deselectAll();
                this.modelService.nodes.select(node);
            }
        };
        NodesModel.prototype._addNode = function (node) {
            var model = this.modelService.model;
            try {
                model.nodes.push(node);
                this.modelService.modelValidation.validateNodes(model.nodes);
            }
            catch (error) {
                model.nodes.splice(model.nodes.indexOf(node), 1);
                throw error;
            }
        };
        NodesModel.prototype.getConnectorIds = function (node) {
            return node.connectors.map(function (connector) {
                return connector.id;
            });
        };
        NodesModel.prototype.getNodeByConnectorId = function (connectorId) {
            var e_4, _a;
            var model = this.modelService.model;
            try {
                for (var _b = __values(model.nodes), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var node = _c.value;
                    var connectorIds = this.getConnectorIds(node);
                    if (connectorIds.indexOf(connectorId) > -1) {
                        return node;
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return null;
        };
        NodesModel.prototype.getHtmlElement = function (nodeId) {
            return this.modelService.nodesHtmlElements[nodeId];
        };
        NodesModel.prototype.setHtmlElement = function (nodeId, element) {
            this.modelService.nodesHtmlElements[nodeId] = element;
            this.modelService.detectChanges();
        };
        return NodesModel;
    }(AbstractFcModel));
    var EdgesModel = /** @class */ (function (_super) {
        __extends(EdgesModel, _super);
        function EdgesModel(modelService) {
            return _super.call(this, modelService) || this;
        }
        EdgesModel.prototype.sourceCoord = function (edge) {
            return this.modelService.connectors.getCenteredCoord(edge.source);
        };
        EdgesModel.prototype.destCoord = function (edge) {
            return this.modelService.connectors.getCenteredCoord(edge.destination);
        };
        EdgesModel.prototype.delete = function (edge) {
            var model = this.modelService.model;
            var index = model.edges.indexOf(edge);
            if (index === -1) {
                throw new Error('Tried to delete not existing edge');
            }
            if (this.isSelected(edge)) {
                this.deselect(edge);
            }
            model.edges.splice(index, 1);
            this.modelService.notifyModelChanged();
            this.modelService.edgeRemovedCallback(edge);
        };
        EdgesModel.prototype.getSelectedEdges = function () {
            var _this = this;
            var model = this.modelService.model;
            return model.edges.filter(function (edge) {
                return _this.modelService.edges.isSelected(edge);
            });
        };
        EdgesModel.prototype.handleEdgeMouseClick = function (edge, ctrlKey) {
            if (ctrlKey) {
                this.modelService.edges.toggleSelected(edge);
            }
            else {
                this.modelService.deselectAll();
                this.modelService.edges.select(edge);
            }
        };
        EdgesModel.prototype.putEdge = function (edge) {
            var model = this.modelService.model;
            model.edges.push(edge);
            this.modelService.notifyModelChanged();
        };
        EdgesModel.prototype._addEdge = function (event, sourceConnector, destConnector, label) {
            var _this = this;
            this.modelService.modelValidation.validateConnector(sourceConnector);
            this.modelService.modelValidation.validateConnector(destConnector);
            var edge = {};
            edge.source = sourceConnector.id;
            edge.destination = destConnector.id;
            edge.label = label;
            var model = this.modelService.model;
            this.modelService.modelValidation.validateEdges(model.edges.concat([edge]), model.nodes);
            this.modelService.createEdge(event, edge).subscribe(function (created) {
                model.edges.push(created);
                _this.modelService.notifyModelChanged();
                _this.modelService.edgeAddedCallback(created);
            });
        };
        return EdgesModel;
    }(AbstractFcModel));

    var FcModelValidationService = /** @class */ (function () {
        function FcModelValidationService() {
        }
        FcModelValidationService.prototype.validateModel = function (model) {
            this.validateNodes(model.nodes);
            this._validateEdges(model.edges, model.nodes);
            return model;
        };
        FcModelValidationService.prototype.validateNodes = function (nodes) {
            var _this = this;
            var ids = [];
            nodes.forEach(function (node) {
                _this.validateNode(node);
                if (ids.indexOf(node.id) !== -1) {
                    throw new ModelvalidationError('Id not unique.');
                }
                ids.push(node.id);
            });
            var connectorIds = [];
            nodes.forEach(function (node) {
                node.connectors.forEach(function (connector) {
                    if (connectorIds.indexOf(connector.id) !== -1) {
                        throw new ModelvalidationError('Id not unique.');
                    }
                    connectorIds.push(connector.id);
                });
            });
            return nodes;
        };
        FcModelValidationService.prototype.validateNode = function (node) {
            var _this = this;
            if (node.id === undefined) {
                throw new ModelvalidationError('Id not valid.');
            }
            if (typeof node.name !== 'string') {
                throw new ModelvalidationError('Name not valid.');
            }
            if (typeof node.x !== 'number' || node.x < 0 || Math.round(node.x) !== node.x) {
                throw new ModelvalidationError('Coordinates not valid.');
            }
            if (typeof node.y !== 'number' || node.y < 0 || Math.round(node.y) !== node.y) {
                throw new ModelvalidationError('Coordinates not valid.');
            }
            if (!Array.isArray(node.connectors)) {
                throw new ModelvalidationError('Connectors not valid.');
            }
            node.connectors.forEach(function (connector) {
                _this.validateConnector(connector);
            });
            return node;
        };
        FcModelValidationService.prototype._validateEdges = function (edges, nodes) {
            var _this = this;
            edges.forEach(function (edge) {
                _this._validateEdge(edge, nodes);
            });
            edges.forEach(function (edge1, index1) {
                edges.forEach(function (edge2, index2) {
                    if (index1 !== index2) {
                        if ((edge1.source === edge2.source && edge1.destination === edge2.destination) ||
                            (edge1.source === edge2.destination && edge1.destination === edge2.source)) {
                            throw new ModelvalidationError('Duplicated edge.');
                        }
                    }
                });
            });
            if (fcTopSort({ nodes: nodes, edges: edges }) === null) {
                throw new ModelvalidationError('Graph has a circle.');
            }
            return edges;
        };
        FcModelValidationService.prototype.validateEdges = function (edges, nodes) {
            this.validateNodes(nodes);
            return this._validateEdges(edges, nodes);
        };
        FcModelValidationService.prototype._validateEdge = function (edge, nodes) {
            if (edge.source === undefined) {
                throw new ModelvalidationError('Source not valid.');
            }
            if (edge.destination === undefined) {
                throw new ModelvalidationError('Destination not valid.');
            }
            if (edge.source === edge.destination) {
                throw new ModelvalidationError('Edge with same source and destination connectors.');
            }
            var sourceNode = nodes.filter(function (node) { return node.connectors.some(function (connector) { return connector.id === edge.source; }); })[0];
            if (sourceNode === undefined) {
                throw new ModelvalidationError('Source not valid.');
            }
            var destinationNode = nodes.filter(function (node) { return node.connectors.some(function (connector) { return connector.id === edge.destination; }); })[0];
            if (destinationNode === undefined) {
                throw new ModelvalidationError('Destination not valid.');
            }
            if (sourceNode === destinationNode) {
                throw new ModelvalidationError('Edge with same source and destination nodes.');
            }
            return edge;
        };
        FcModelValidationService.prototype.validateEdge = function (edge, nodes) {
            this.validateNodes(nodes);
            return this._validateEdge(edge, nodes);
        };
        FcModelValidationService.prototype.validateConnector = function (connector) {
            if (connector.id === undefined) {
                throw new ModelvalidationError('Id not valid.');
            }
            if (connector.type === undefined || connector.type === null || typeof connector.type !== 'string') {
                throw new ModelvalidationError('Type not valid.');
            }
            return connector;
        };
        FcModelValidationService.ɵfac = function FcModelValidationService_Factory(t) { return new (t || FcModelValidationService)(); };
        FcModelValidationService.ɵprov = core["ɵɵdefineInjectable"]({ token: FcModelValidationService, factory: FcModelValidationService.ɵfac });
        return FcModelValidationService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FcModelValidationService, [{
            type: core.Injectable
        }], function () { return []; }, null); })();

    var nodeDropScope = {
        dropElement: null
    };
    var FcNodeDraggingService = /** @class */ (function () {
        function FcNodeDraggingService(modelService, applyFunction, automaticResize, dragAnimation) {
            this.nodeDraggingScope = {
                shadowDragStarted: false,
                dropElement: null,
                draggedNodes: [],
                shadowElements: []
            };
            this.dragOffsets = [];
            this.draggedElements = [];
            this.destinationHtmlElements = [];
            this.oldDisplayStyles = [];
            this.modelService = modelService;
            this.automaticResize = automaticResize;
            this.dragAnimation = dragAnimation;
            this.applyFunction = applyFunction;
        }
        FcNodeDraggingService.prototype.getCoordinate = function (coordinate, max) {
            coordinate = Math.max(coordinate, 0);
            coordinate = Math.min(coordinate, max);
            return coordinate;
        };
        FcNodeDraggingService.prototype.getXCoordinate = function (x) {
            return this.getCoordinate(x, this.modelService.canvasHtmlElement.offsetWidth);
        };
        FcNodeDraggingService.prototype.getYCoordinate = function (y) {
            return this.getCoordinate(y, this.modelService.canvasHtmlElement.offsetHeight);
        };
        FcNodeDraggingService.prototype.resizeCanvas = function (draggedNode, nodeElement) {
            if (this.automaticResize && !this.modelService.isDropSource()) {
                var canvasElement = this.modelService.canvasHtmlElement;
                if (canvasElement.offsetWidth < draggedNode.x + nodeElement.offsetWidth + FlowchartConstants.canvasResizeThreshold) {
                    canvasElement.style.width = canvasElement.offsetWidth + FlowchartConstants.canvasResizeStep + 'px';
                }
                if (canvasElement.offsetHeight < draggedNode.y + nodeElement.offsetHeight + FlowchartConstants.canvasResizeThreshold) {
                    canvasElement.style.height = canvasElement.offsetHeight + FlowchartConstants.canvasResizeStep + 'px';
                }
            }
        };
        FcNodeDraggingService.prototype.isDraggingNode = function (node) {
            return this.nodeDraggingScope.draggedNodes.includes(node);
        };
        FcNodeDraggingService.prototype.dragstart = function (event, node) {
            var e_1, _a, e_2, _b;
            if (node.readonly) {
                return;
            }
            this.dragOffsets.length = 0;
            this.draggedElements.length = 0;
            this.nodeDraggingScope.draggedNodes.length = 0;
            this.nodeDraggingScope.shadowElements.length = 0;
            this.destinationHtmlElements.length = 0;
            this.oldDisplayStyles.length = 0;
            var elements = [];
            var nodes = [];
            if (this.modelService.nodes.isSelected(node)) {
                var selectedNodes = this.modelService.nodes.getSelectedNodes();
                try {
                    for (var selectedNodes_1 = __values(selectedNodes), selectedNodes_1_1 = selectedNodes_1.next(); !selectedNodes_1_1.done; selectedNodes_1_1 = selectedNodes_1.next()) {
                        var selectedNode = selectedNodes_1_1.value;
                        var element = $(this.modelService.nodes.getHtmlElement(selectedNode.id));
                        elements.push(element);
                        nodes.push(selectedNode);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (selectedNodes_1_1 && !selectedNodes_1_1.done && (_a = selectedNodes_1.return)) _a.call(selectedNodes_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                elements.push($(event.target));
                nodes.push(node);
            }
            var offsetsX = [];
            var offsetsY = [];
            try {
                for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                    var element = elements_1_1.value;
                    offsetsX.push(parseInt(element.css('left'), 10) - event.clientX);
                    offsetsY.push(parseInt(element.css('top'), 10) - event.clientY);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (elements_1_1 && !elements_1_1.done && (_b = elements_1.return)) _b.call(elements_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var originalEvent = event.originalEvent || event;
            if (this.modelService.isDropSource()) {
                if (nodeDropScope.dropElement) {
                    nodeDropScope.dropElement.parentNode.removeChild(nodeDropScope.dropElement);
                    nodeDropScope.dropElement = null;
                }
                nodeDropScope.dropElement = elements[0][0].cloneNode(true);
                var offset = $(this.modelService.canvasHtmlElement).offset();
                nodeDropScope.dropElement.offsetInfo = {
                    offsetX: Math.round(offsetsX[0] + offset.left),
                    offsetY: Math.round(offsetsY[0] + offset.top)
                };
                nodeDropScope.dropElement.style.position = 'absolute';
                nodeDropScope.dropElement.style.pointerEvents = 'none';
                nodeDropScope.dropElement.style.zIndex = '9999';
                document.body.appendChild(nodeDropScope.dropElement);
                var dropNodeInfo = {
                    node: node,
                    dropTargetId: this.modelService.dropTargetId,
                    offsetX: Math.round(offsetsX[0] + offset.left),
                    offsetY: Math.round(offsetsY[0] + offset.top)
                };
                originalEvent.dataTransfer.setData('text', JSON.stringify(dropNodeInfo));
                if (originalEvent.dataTransfer.setDragImage) {
                    originalEvent.dataTransfer.setDragImage(this.modelService.getDragImage(), 0, 0);
                }
                else {
                    var target_1 = event.target;
                    var cloneNode_1 = target_1.cloneNode(true);
                    target_1.parentNode.insertBefore(cloneNode_1, target_1);
                    target_1.style.visibility = 'collapse';
                    setTimeout(function () {
                        target_1.parentNode.removeChild(cloneNode_1);
                        target_1.style.visibility = 'visible';
                    }, 0);
                }
                return;
            }
            this.nodeDraggingScope.draggedNodes = nodes;
            for (var i = 0; i < elements.length; i++) {
                this.draggedElements.push(elements[i][0]);
                this.dragOffsets.push({
                    x: offsetsX[i],
                    y: offsetsY[i]
                });
            }
            if (this.dragAnimation === FlowchartConstants.dragAnimationShadow) {
                for (var i = 0; i < this.draggedElements.length; i++) {
                    var dragOffset = this.dragOffsets[i];
                    var draggedNode = this.nodeDraggingScope.draggedNodes[i];
                    var shadowElement = $("<div style=\"position: absolute; opacity: 0.7; " +
                        ("top: " + this.getYCoordinate(dragOffset.y + event.clientY) + "px; ") +
                        ("left: " + this.getXCoordinate(dragOffset.x + event.clientX) + "px; \">") +
                        ("<div class=\"innerNode\"><p style=\"padding: 0 15px;\">" + draggedNode.name + "</p> </div></div>"));
                    var targetInnerNode = $(this.draggedElements[i]).children()[0];
                    shadowElement.children()[0].style.backgroundColor = targetInnerNode.style.backgroundColor;
                    this.nodeDraggingScope.shadowElements.push(shadowElement);
                    this.modelService.canvasHtmlElement.appendChild(this.nodeDraggingScope.shadowElements[i][0]);
                }
            }
            originalEvent.dataTransfer.setData('text', 'Just to support firefox');
            if (originalEvent.dataTransfer.setDragImage) {
                originalEvent.dataTransfer.setDragImage(this.modelService.getDragImage(), 0, 0);
            }
            else {
                this.draggedElements.forEach(function (draggedElement) {
                    var cloneNode = draggedElement.cloneNode(true);
                    draggedElement.parentNode.insertBefore(cloneNode, draggedElement);
                    draggedElement.style.visibility = 'collapse';
                    setTimeout(function () {
                        draggedElement.parentNode.removeChild(cloneNode);
                        draggedElement.style.visibility = 'visible';
                    }, 0);
                });
                if (this.dragAnimation === FlowchartConstants.dragAnimationShadow) {
                    for (var i = 0; i < this.draggedElements.length; i++) {
                        this.destinationHtmlElements.push(this.draggedElements[i]);
                        this.oldDisplayStyles.push(this.destinationHtmlElements[i].style.display);
                        this.destinationHtmlElements[i].style.display = 'none';
                    }
                    this.nodeDraggingScope.shadowDragStarted = true;
                }
            }
        };
        FcNodeDraggingService.prototype.drop = function (event) {
            var _this = this;
            if (this.modelService.isDropSource()) {
                event.preventDefault();
                return false;
            }
            var dropNode = null;
            var originalEvent = event.originalEvent || event;
            var infoText = originalEvent.dataTransfer.getData('text');
            if (infoText) {
                var dropNodeInfo = null;
                try {
                    dropNodeInfo = JSON.parse(infoText);
                }
                catch (e) { }
                if (dropNodeInfo && dropNodeInfo.dropTargetId) {
                    if (this.modelService.canvasHtmlElement.id &&
                        this.modelService.canvasHtmlElement.id === dropNodeInfo.dropTargetId) {
                        dropNode = dropNodeInfo.node;
                        var offset = $(this.modelService.canvasHtmlElement).offset();
                        var x = event.clientX - offset.left;
                        var y = event.clientY - offset.top;
                        dropNode.x = Math.round(this.getXCoordinate(dropNodeInfo.offsetX + x));
                        dropNode.y = Math.round(this.getYCoordinate(dropNodeInfo.offsetY + y));
                    }
                }
            }
            if (dropNode) {
                this.modelService.dropNode(event, dropNode);
                event.preventDefault();
                return false;
            }
            else if (this.nodeDraggingScope.draggedNodes.length) {
                return this.applyFunction(function () {
                    for (var i = 0; i < _this.nodeDraggingScope.draggedNodes.length; i++) {
                        var draggedNode = _this.nodeDraggingScope.draggedNodes[i];
                        var dragOffset = _this.dragOffsets[i];
                        draggedNode.x = Math.round(_this.getXCoordinate(dragOffset.x + event.clientX));
                        draggedNode.y = Math.round(_this.getYCoordinate(dragOffset.y + event.clientY));
                    }
                    event.preventDefault();
                    _this.modelService.notifyModelChanged();
                    return false;
                });
            }
        };
        FcNodeDraggingService.prototype.dragover = function (event) {
            var _this = this;
            if (nodeDropScope.dropElement) {
                var offsetInfo = nodeDropScope.dropElement.offsetInfo;
                nodeDropScope.dropElement.style.left = (offsetInfo.offsetX + event.clientX) + 'px';
                nodeDropScope.dropElement.style.top = (offsetInfo.offsetY + event.clientY) + 'px';
                if (this.nodeDraggingScope.shadowDragStarted) {
                    this.applyFunction(function () {
                        _this.destinationHtmlElements[0].style.display = _this.oldDisplayStyles[0];
                        _this.nodeDraggingScope.shadowDragStarted = false;
                    });
                }
                event.preventDefault();
                return;
            }
            if (this.modelService.isDropSource()) {
                event.preventDefault();
                return;
            }
            if (!this.nodeDraggingScope.draggedNodes.length) {
                event.preventDefault();
                return;
            }
            if (this.dragAnimation === FlowchartConstants.dragAnimationRepaint) {
                if (this.nodeDraggingScope.draggedNodes.length) {
                    return this.applyFunction(function () {
                        for (var i = 0; i < _this.nodeDraggingScope.draggedNodes.length; i++) {
                            var draggedNode = _this.nodeDraggingScope.draggedNodes[i];
                            var dragOffset = _this.dragOffsets[i];
                            draggedNode.x = _this.getXCoordinate(dragOffset.x + event.clientX);
                            draggedNode.y = _this.getYCoordinate(dragOffset.y + event.clientY);
                            _this.resizeCanvas(draggedNode, _this.draggedElements[i]);
                        }
                        event.preventDefault();
                        _this.modelService.notifyModelChanged();
                        return false;
                    });
                }
            }
            else if (this.dragAnimation === FlowchartConstants.dragAnimationShadow) {
                if (this.nodeDraggingScope.draggedNodes.length) {
                    if (this.nodeDraggingScope.shadowDragStarted) {
                        this.applyFunction(function () {
                            for (var i = 0; i < _this.nodeDraggingScope.draggedNodes.length; i++) {
                                _this.destinationHtmlElements[i].style.display = _this.oldDisplayStyles[i];
                            }
                            _this.nodeDraggingScope.shadowDragStarted = false;
                        });
                    }
                    for (var i = 0; i < this.nodeDraggingScope.draggedNodes.length; i++) {
                        var draggedNode = this.nodeDraggingScope.draggedNodes[i];
                        var dragOffset = this.dragOffsets[i];
                        this.nodeDraggingScope.shadowElements[i].css('left', this.getXCoordinate(dragOffset.x + event.clientX) + 'px');
                        this.nodeDraggingScope.shadowElements[i].css('top', this.getYCoordinate(dragOffset.y + event.clientY) + 'px');
                        this.resizeCanvas(draggedNode, this.draggedElements[i]);
                    }
                    event.preventDefault();
                }
            }
        };
        FcNodeDraggingService.prototype.dragend = function (event) {
            var _this = this;
            this.applyFunction(function () {
                if (nodeDropScope.dropElement) {
                    nodeDropScope.dropElement.parentNode.removeChild(nodeDropScope.dropElement);
                    nodeDropScope.dropElement = null;
                }
                if (_this.modelService.isDropSource()) {
                    return;
                }
                if (_this.nodeDraggingScope.shadowElements.length) {
                    for (var i = 0; i < _this.nodeDraggingScope.draggedNodes.length; i++) {
                        var draggedNode = _this.nodeDraggingScope.draggedNodes[i];
                        var shadowElement = _this.nodeDraggingScope.shadowElements[i];
                        draggedNode.x = parseInt(shadowElement.css('left').replace('px', ''), 10);
                        draggedNode.y = parseInt(shadowElement.css('top').replace('px', ''), 10);
                        _this.modelService.canvasHtmlElement.removeChild(shadowElement[0]);
                    }
                    _this.nodeDraggingScope.shadowElements.length = 0;
                    _this.modelService.notifyModelChanged();
                }
                if (_this.nodeDraggingScope.draggedNodes.length) {
                    _this.nodeDraggingScope.draggedNodes.length = 0;
                    _this.draggedElements.length = 0;
                    _this.dragOffsets.length = 0;
                }
            });
        };
        return FcNodeDraggingService;
    }());

    var FcEdgeDrawingService = /** @class */ (function () {
        function FcEdgeDrawingService() {
        }
        FcEdgeDrawingService.prototype.getEdgeDAttribute = function (pt1, pt2, style) {
            var dAddribute = "M " + pt1.x + ", " + pt1.y + " ";
            if (style === FlowchartConstants.curvedStyle) {
                var sourceTangent = this.computeEdgeSourceTangent(pt1, pt2);
                var destinationTangent = this.computeEdgeDestinationTangent(pt1, pt2);
                dAddribute += "C " + sourceTangent.x + ", " + sourceTangent.y + " " + (destinationTangent.x - 50) + ", " + destinationTangent.y + " " + pt2.x + ", " + pt2.y;
            }
            else {
                dAddribute += "L " + pt2.x + ", " + pt2.y;
            }
            return dAddribute;
        };
        FcEdgeDrawingService.prototype.getEdgeCenter = function (pt1, pt2) {
            return {
                x: (pt1.x + pt2.x) / 2,
                y: (pt1.y + pt2.y) / 2
            };
        };
        FcEdgeDrawingService.prototype.computeEdgeTangentOffset = function (pt1, pt2) {
            return (pt2.y - pt1.y) / 2;
        };
        FcEdgeDrawingService.prototype.computeEdgeSourceTangent = function (pt1, pt2) {
            return {
                x: pt1.x,
                y: pt1.y + this.computeEdgeTangentOffset(pt1, pt2)
            };
        };
        FcEdgeDrawingService.prototype.computeEdgeDestinationTangent = function (pt1, pt2) {
            return {
                x: pt2.x,
                y: pt2.y - this.computeEdgeTangentOffset(pt1, pt2)
            };
        };
        FcEdgeDrawingService.ɵfac = function FcEdgeDrawingService_Factory(t) { return new (t || FcEdgeDrawingService)(); };
        FcEdgeDrawingService.ɵprov = core["ɵɵdefineInjectable"]({ token: FcEdgeDrawingService, factory: FcEdgeDrawingService.ɵfac });
        return FcEdgeDrawingService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FcEdgeDrawingService, [{
            type: core.Injectable
        }], function () { return []; }, null); })();

    var FcEdgeDraggingService = /** @class */ (function () {
        function FcEdgeDraggingService(modelValidation, edgeDrawingService, modelService, model, isValidEdgeCallback, applyFunction, dragAnimation, edgeStyle) {
            this.edgeDragging = {
                isDragging: false,
                dragPoint1: null,
                dragPoint2: null,
                shadowDragStarted: false
            };
            this.draggedEdgeSource = null;
            this.dragOffset = {};
            this.destinationHtmlElement = null;
            this.oldDisplayStyle = '';
            this.modelValidation = modelValidation;
            this.edgeDrawingService = edgeDrawingService;
            this.modelService = modelService;
            this.model = model;
            this.isValidEdgeCallback = isValidEdgeCallback || (function () { return true; });
            this.applyFunction = applyFunction;
            this.dragAnimation = dragAnimation;
            this.edgeStyle = edgeStyle;
        }
        FcEdgeDraggingService.prototype.dragstart = function (event, connector) {
            var e_1, _a;
            var _this = this;
            var swapConnector;
            var dragLabel;
            var prevEdge;
            if (connector.type === FlowchartConstants.leftConnectorType) {
                var _loop_1 = function (edge) {
                    if (edge.destination === connector.id) {
                        swapConnector = this_1.modelService.connectors.getConnector(edge.source);
                        dragLabel = edge.label;
                        prevEdge = edge;
                        this_1.applyFunction(function () {
                            _this.modelService.edges.delete(edge);
                        });
                        return "break";
                    }
                };
                var this_1 = this;
                try {
                    for (var _b = __values(this.model.edges), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var edge = _c.value;
                        var state_1 = _loop_1(edge);
                        if (state_1 === "break")
                            break;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            this.edgeDragging.isDragging = true;
            if (swapConnector !== undefined) {
                this.draggedEdgeSource = swapConnector;
                this.edgeDragging.dragPoint1 = this.modelService.connectors.getCenteredCoord(swapConnector.id);
                this.edgeDragging.dragLabel = dragLabel;
                this.edgeDragging.prevEdge = prevEdge;
            }
            else {
                this.draggedEdgeSource = connector;
                this.edgeDragging.dragPoint1 = this.modelService.connectors.getCenteredCoord(connector.id);
            }
            var canvas = this.modelService.canvasHtmlElement;
            if (!canvas) {
                throw new Error('No canvas while edgedraggingService found.');
            }
            this.dragOffset.x = -canvas.getBoundingClientRect().left;
            this.dragOffset.y = -canvas.getBoundingClientRect().top;
            this.edgeDragging.dragPoint2 = {
                x: event.clientX + this.dragOffset.x,
                y: event.clientY + this.dragOffset.y
            };
            var originalEvent = event.originalEvent || event;
            originalEvent.dataTransfer.setData('Text', 'Just to support firefox');
            if (originalEvent.dataTransfer.setDragImage) {
                originalEvent.dataTransfer.setDragImage(this.modelService.getDragImage(), 0, 0);
            }
            else {
                this.destinationHtmlElement = event.target;
                this.oldDisplayStyle = this.destinationHtmlElement.style.display;
                this.destinationHtmlElement.style.display = 'none';
                if (this.dragAnimation === FlowchartConstants.dragAnimationShadow) {
                    this.edgeDragging.shadowDragStarted = true;
                }
            }
            if (this.dragAnimation === FlowchartConstants.dragAnimationShadow) {
                if (this.edgeDragging.gElement === undefined) {
                    this.edgeDragging.gElement = $(document.querySelectorAll('.shadow-svg-class'));
                    this.edgeDragging.pathElement = $(document.querySelectorAll('.shadow-svg-class')).find('path');
                    this.edgeDragging.circleElement = $(document.querySelectorAll('.shadow-svg-class')).find('circle');
                }
                this.edgeDragging.gElement.css('display', 'block');
                this.edgeDragging.pathElement.attr('d', this.edgeDrawingService.getEdgeDAttribute(this.edgeDragging.dragPoint1, this.edgeDragging.dragPoint2, this.edgeStyle));
                this.edgeDragging.circleElement.attr('cx', this.edgeDragging.dragPoint2.x);
                this.edgeDragging.circleElement.attr('cy', this.edgeDragging.dragPoint2.y);
            }
            event.stopPropagation();
        };
        FcEdgeDraggingService.prototype.dragover = function (event) {
            var _this = this;
            if (this.edgeDragging.isDragging) {
                if (!this.edgeDragging.magnetActive && this.dragAnimation === FlowchartConstants.dragAnimationShadow) {
                    if (this.destinationHtmlElement !== null) {
                        this.destinationHtmlElement.style.display = this.oldDisplayStyle;
                    }
                    if (this.edgeDragging.shadowDragStarted) {
                        this.applyFunction(function () {
                            _this.edgeDragging.shadowDragStarted = false;
                        });
                    }
                    this.edgeDragging.dragPoint2 = {
                        x: event.clientX + this.dragOffset.x,
                        y: event.clientY + this.dragOffset.y
                    };
                    this.edgeDragging.pathElement.attr('d', this.edgeDrawingService.getEdgeDAttribute(this.edgeDragging.dragPoint1, this.edgeDragging.dragPoint2, this.edgeStyle));
                    this.edgeDragging.circleElement.attr('cx', this.edgeDragging.dragPoint2.x);
                    this.edgeDragging.circleElement.attr('cy', this.edgeDragging.dragPoint2.y);
                }
                else if (this.dragAnimation === FlowchartConstants.dragAnimationRepaint) {
                    return this.applyFunction(function () {
                        if (_this.destinationHtmlElement !== null) {
                            _this.destinationHtmlElement.style.display = _this.oldDisplayStyle;
                        }
                        _this.edgeDragging.dragPoint2 = {
                            x: event.clientX + _this.dragOffset.x,
                            y: event.clientY + _this.dragOffset.y
                        };
                    });
                }
            }
        };
        FcEdgeDraggingService.prototype.dragoverConnector = function (event, connector) {
            if (this.edgeDragging.isDragging) {
                this.dragover(event);
                try {
                    this.modelValidation.validateEdges(this.model.edges.concat([{
                            source: this.draggedEdgeSource.id,
                            destination: connector.id
                        }]), this.model.nodes);
                }
                catch (error) {
                    if (error instanceof ModelvalidationError) {
                        return true;
                    }
                    else {
                        throw error;
                    }
                }
                if (this.isValidEdgeCallback(this.draggedEdgeSource, connector)) {
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                }
            }
        };
        FcEdgeDraggingService.prototype.dragleaveMagnet = function (event) {
            this.edgeDragging.magnetActive = false;
        };
        FcEdgeDraggingService.prototype.dragoverMagnet = function (event, connector) {
            var _this = this;
            if (this.edgeDragging.isDragging) {
                this.dragover(event);
                try {
                    this.modelValidation.validateEdges(this.model.edges.concat([{
                            source: this.draggedEdgeSource.id,
                            destination: connector.id
                        }]), this.model.nodes);
                }
                catch (error) {
                    if (error instanceof ModelvalidationError) {
                        return true;
                    }
                    else {
                        throw error;
                    }
                }
                if (this.isValidEdgeCallback(this.draggedEdgeSource, connector)) {
                    if (this.dragAnimation === FlowchartConstants.dragAnimationShadow) {
                        this.edgeDragging.magnetActive = true;
                        this.edgeDragging.dragPoint2 = this.modelService.connectors.getCenteredCoord(connector.id);
                        this.edgeDragging.pathElement.attr('d', this.edgeDrawingService.getEdgeDAttribute(this.edgeDragging.dragPoint1, this.edgeDragging.dragPoint2, this.edgeStyle));
                        this.edgeDragging.circleElement.attr('cx', this.edgeDragging.dragPoint2.x);
                        this.edgeDragging.circleElement.attr('cy', this.edgeDragging.dragPoint2.y);
                        event.preventDefault();
                        event.stopPropagation();
                        return false;
                    }
                    else if (this.dragAnimation === FlowchartConstants.dragAnimationRepaint) {
                        return this.applyFunction(function () {
                            _this.edgeDragging.dragPoint2 = _this.modelService.connectors.getCenteredCoord(connector.id);
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        });
                    }
                }
            }
        };
        FcEdgeDraggingService.prototype.dragend = function (event) {
            var _this = this;
            if (this.edgeDragging.isDragging) {
                this.edgeDragging.isDragging = false;
                this.edgeDragging.dragPoint1 = null;
                this.edgeDragging.dragPoint2 = null;
                this.edgeDragging.dragLabel = null;
                event.stopPropagation();
                if (this.dragAnimation === FlowchartConstants.dragAnimationShadow) {
                    this.edgeDragging.gElement.css('display', 'none');
                }
                if (this.edgeDragging.prevEdge) {
                    var edge_1 = this.edgeDragging.prevEdge;
                    this.edgeDragging.prevEdge = null;
                    this.applyFunction(function () {
                        _this.modelService.edges.putEdge(edge_1);
                    });
                }
            }
        };
        FcEdgeDraggingService.prototype.drop = function (event, targetConnector) {
            if (this.edgeDragging.isDragging) {
                try {
                    this.modelValidation.validateEdges(this.model.edges.concat([{
                            source: this.draggedEdgeSource.id,
                            destination: targetConnector.id
                        }]), this.model.nodes);
                }
                catch (error) {
                    if (error instanceof ModelvalidationError) {
                        return true;
                    }
                    else {
                        throw error;
                    }
                }
                if (this.isValidEdgeCallback(this.draggedEdgeSource, targetConnector)) {
                    this.edgeDragging.prevEdge = null;
                    this.modelService.edges._addEdge(event, this.draggedEdgeSource, targetConnector, this.edgeDragging.dragLabel);
                    event.stopPropagation();
                    event.preventDefault();
                    return false;
                }
            }
        };
        return FcEdgeDraggingService;
    }());

    var FcMouseOverService = /** @class */ (function () {
        function FcMouseOverService(applyFunction) {
            this.mouseoverscope = {
                connector: null,
                edge: null,
                node: null
            };
            this.applyFunction = applyFunction;
        }
        FcMouseOverService.prototype.nodeMouseOver = function (event, node) {
            var _this = this;
            return this.applyFunction(function () {
                _this.mouseoverscope.node = node;
            });
        };
        FcMouseOverService.prototype.nodeMouseOut = function (event, node) {
            var _this = this;
            return this.applyFunction(function () {
                _this.mouseoverscope.node = null;
            });
        };
        FcMouseOverService.prototype.connectorMouseEnter = function (event, connector) {
            var _this = this;
            return this.applyFunction(function () {
                _this.mouseoverscope.connector = connector;
            });
        };
        FcMouseOverService.prototype.connectorMouseLeave = function (event, connector) {
            var _this = this;
            return this.applyFunction(function () {
                _this.mouseoverscope.connector = null;
            });
        };
        FcMouseOverService.prototype.edgeMouseEnter = function (event, edge) {
            this.mouseoverscope.edge = edge;
        };
        FcMouseOverService.prototype.edgeMouseLeave = function (event, edge) {
            this.mouseoverscope.edge = null;
        };
        return FcMouseOverService;
    }());

    var regex = /(auto|scroll)/;
    var style = function (node, prop) {
        return getComputedStyle(node, null).getPropertyValue(prop);
    };
    var scroll = function (node) {
        return regex.test(style(node, 'overflow') +
            style(node, 'overflow-y') +
            style(node, 'overflow-x'));
    };
    var scrollparent = function (node) {
        return !node || node === document.body
            ? document.body
            : scroll(node)
                ? node
                : scrollparent(node.parentNode);
    };

    var FcRectangleSelectService = /** @class */ (function () {
        function FcRectangleSelectService(modelService, selectElement, applyFunction) {
            this.selectRect = {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 0
            };
            this.modelService = modelService;
            this.selectElement = selectElement;
            this.$canvasElement = $(this.modelService.canvasHtmlElement);
            this.$scrollParent = $(scrollparent(this.modelService.canvasHtmlElement));
            this.applyFunction = applyFunction;
        }
        FcRectangleSelectService.prototype.mousedown = function (e) {
            if (this.modelService.isEditable() && !e.ctrlKey && !e.metaKey && e.button === 0
                && this.selectElement.hidden) {
                this.selectElement.hidden = false;
                var offset = this.$canvasElement.offset();
                this.selectRect.x1 = Math.round(e.pageX - offset.left);
                this.selectRect.y1 = Math.round(e.pageY - offset.top);
                this.selectRect.x2 = this.selectRect.x1;
                this.selectRect.y2 = this.selectRect.y1;
                this.updateSelectRect();
            }
        };
        FcRectangleSelectService.prototype.mousemove = function (e) {
            if (this.modelService.isEditable() && !e.ctrlKey && !e.metaKey && e.button === 0
                && !this.selectElement.hidden) {
                var offset = this.$canvasElement.offset();
                this.selectRect.x2 = Math.round(e.pageX - offset.left);
                this.selectRect.y2 = Math.round(e.pageY - offset.top);
                this.updateScroll(offset);
                this.updateSelectRect();
            }
        };
        FcRectangleSelectService.prototype.updateScroll = function (offset) {
            var rect = this.$scrollParent[0].getBoundingClientRect();
            var bottom = rect.bottom - offset.top;
            var right = rect.right - offset.left;
            var top = rect.top - offset.top;
            var left = rect.left - offset.left;
            if (this.selectRect.y2 - top < 25) {
                var topScroll = 25 - (this.selectRect.y2 - top);
                var scroll_1 = this.$scrollParent.scrollTop();
                this.$scrollParent.scrollTop(scroll_1 - topScroll);
            }
            else if (bottom - this.selectRect.y2 < 40) {
                var bottomScroll = 40 - (bottom - this.selectRect.y2);
                var scroll_2 = this.$scrollParent.scrollTop();
                this.$scrollParent.scrollTop(scroll_2 + bottomScroll);
            }
            if (this.selectRect.x2 - left < 25) {
                var leftScroll = 25 - (this.selectRect.x2 - left);
                var scroll_3 = this.$scrollParent.scrollLeft();
                this.$scrollParent.scrollLeft(scroll_3 - leftScroll);
            }
            else if (right - this.selectRect.x2 < 40) {
                var rightScroll = 40 - (right - this.selectRect.x2);
                var scroll_4 = this.$scrollParent.scrollLeft();
                this.$scrollParent.scrollLeft(scroll_4 + rightScroll);
            }
        };
        FcRectangleSelectService.prototype.mouseup = function (e) {
            if (this.modelService.isEditable() && !e.ctrlKey && !e.metaKey && e.button === 0
                && !this.selectElement.hidden) {
                var rectBox = this.selectElement.getBoundingClientRect();
                this.selectElement.hidden = true;
                this.selectObjects(rectBox);
            }
        };
        FcRectangleSelectService.prototype.updateSelectRect = function () {
            var x3 = Math.min(this.selectRect.x1, this.selectRect.x2);
            var x4 = Math.max(this.selectRect.x1, this.selectRect.x2);
            var y3 = Math.min(this.selectRect.y1, this.selectRect.y2);
            var y4 = Math.max(this.selectRect.y1, this.selectRect.y2);
            this.selectElement.style.left = x3 + 'px';
            this.selectElement.style.top = y3 + 'px';
            this.selectElement.style.width = x4 - x3 + 'px';
            this.selectElement.style.height = y4 - y3 + 'px';
        };
        FcRectangleSelectService.prototype.selectObjects = function (rectBox) {
            var _this = this;
            this.applyFunction(function () {
                _this.modelService.selectAllInRect(rectBox);
            });
        };
        return FcRectangleSelectService;
    }());

    var _c0 = ["nodeContent"];
    function FcNodeContainerComponent_ng_template_0_Template(rf, ctx) { }
    var FcNodeContainerComponent = /** @class */ (function () {
        function FcNodeContainerComponent(nodeComponentConfig, elementRef, componentFactoryResolver) {
            this.nodeComponentConfig = nodeComponentConfig;
            this.elementRef = elementRef;
            this.componentFactoryResolver = componentFactoryResolver;
        }
        Object.defineProperty(FcNodeContainerComponent.prototype, "nodeId", {
            get: function () {
                return this.node.id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FcNodeContainerComponent.prototype, "top", {
            get: function () {
                return this.node.y + 'px';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FcNodeContainerComponent.prototype, "left", {
            get: function () {
                return this.node.x + 'px';
            },
            enumerable: true,
            configurable: true
        });
        FcNodeContainerComponent.prototype.ngOnInit = function () {
            if (!this.userNodeCallbacks) {
                this.userNodeCallbacks = {};
            }
            this.userNodeCallbacks.nodeEdit = this.userNodeCallbacks.nodeEdit || (function () { });
            this.userNodeCallbacks.doubleClick = this.userNodeCallbacks.doubleClick || (function () { });
            this.userNodeCallbacks.mouseDown = this.userNodeCallbacks.mouseDown || (function () { });
            this.userNodeCallbacks.mouseEnter = this.userNodeCallbacks.mouseEnter || (function () { });
            this.userNodeCallbacks.mouseLeave = this.userNodeCallbacks.mouseLeave || (function () { });
            var element = $(this.elementRef.nativeElement);
            element.addClass(FlowchartConstants.nodeClass);
            if (!this.node.readonly) {
                element.attr('draggable', 'true');
            }
            this.updateNodeClass();
            this.modelservice.nodes.setHtmlElement(this.node.id, element[0]);
            this.nodeContentContainer.clear();
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.nodeComponentConfig.nodeComponentType);
            var componentRef = this.nodeContentContainer.createComponent(componentFactory);
            this.nodeComponent = componentRef.instance;
            this.nodeComponent.callbacks = this.callbacks;
            this.nodeComponent.userNodeCallbacks = this.userNodeCallbacks;
            this.nodeComponent.node = this.node;
            this.nodeComponent.modelservice = this.modelservice;
            this.updateNodeComponent();
            this.nodeComponent.width = this.elementRef.nativeElement.offsetWidth;
            this.nodeComponent.height = this.elementRef.nativeElement.offsetHeight;
        };
        FcNodeContainerComponent.prototype.ngAfterViewInit = function () {
            this.nodeComponent.width = this.elementRef.nativeElement.offsetWidth;
            this.nodeComponent.height = this.elementRef.nativeElement.offsetHeight;
        };
        FcNodeContainerComponent.prototype.ngOnChanges = function (changes) {
            var e_1, _a;
            var updateNode = false;
            try {
                for (var _b = __values(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var propName = _c.value;
                    var change = changes[propName];
                    if (!change.firstChange && change.currentValue !== change.previousValue) {
                        if (['selected', 'edit', 'underMouse', 'mouseOverConnector', 'dragging'].includes(propName)) {
                            updateNode = true;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (updateNode) {
                this.updateNodeClass();
                this.updateNodeComponent();
            }
        };
        FcNodeContainerComponent.prototype.updateNodeClass = function () {
            var element = $(this.elementRef.nativeElement);
            this.toggleClass(element, FlowchartConstants.selectedClass, this.selected);
            this.toggleClass(element, FlowchartConstants.editClass, this.edit);
            this.toggleClass(element, FlowchartConstants.hoverClass, this.underMouse);
            this.toggleClass(element, FlowchartConstants.draggingClass, this.dragging);
        };
        FcNodeContainerComponent.prototype.updateNodeComponent = function () {
            this.nodeComponent.selected = this.selected;
            this.nodeComponent.edit = this.edit;
            this.nodeComponent.underMouse = this.underMouse;
            this.nodeComponent.mouseOverConnector = this.mouseOverConnector;
            this.nodeComponent.dragging = this.dragging;
        };
        FcNodeContainerComponent.prototype.toggleClass = function (element, clazz, set) {
            if (set) {
                element.addClass(clazz);
            }
            else {
                element.removeClass(clazz);
            }
        };
        FcNodeContainerComponent.prototype.mousedown = function (event) {
            event.stopPropagation();
        };
        FcNodeContainerComponent.prototype.dragstart = function (event) {
            if (!this.node.readonly) {
                this.callbacks.nodeDragstart(event, this.node);
            }
        };
        FcNodeContainerComponent.prototype.dragend = function (event) {
            if (!this.node.readonly) {
                this.callbacks.nodeDragend(event);
            }
        };
        FcNodeContainerComponent.prototype.click = function (event) {
            if (!this.node.readonly) {
                this.callbacks.nodeClicked(event, this.node);
            }
        };
        FcNodeContainerComponent.prototype.mouseover = function (event) {
            if (!this.node.readonly) {
                this.callbacks.nodeMouseOver(event, this.node);
            }
        };
        FcNodeContainerComponent.prototype.mouseout = function (event) {
            if (!this.node.readonly) {
                this.callbacks.nodeMouseOut(event, this.node);
            }
        };
        FcNodeContainerComponent.ɵfac = function FcNodeContainerComponent_Factory(t) { return new (t || FcNodeContainerComponent)(core["ɵɵdirectiveInject"](FC_NODE_COMPONENT_CONFIG), core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.ComponentFactoryResolver)); };
        FcNodeContainerComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: FcNodeContainerComponent, selectors: [["fc-node"]], viewQuery: function FcNodeContainerComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.nodeContentContainer = _t.first);
            } }, hostVars: 5, hostBindings: function FcNodeContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("mousedown", function FcNodeContainerComponent_mousedown_HostBindingHandler($event) { return ctx.mousedown($event); })("dragstart", function FcNodeContainerComponent_dragstart_HostBindingHandler($event) { return ctx.dragstart($event); })("dragend", function FcNodeContainerComponent_dragend_HostBindingHandler($event) { return ctx.dragend($event); })("click", function FcNodeContainerComponent_click_HostBindingHandler($event) { return ctx.click($event); })("mouseover", function FcNodeContainerComponent_mouseover_HostBindingHandler($event) { return ctx.mouseover($event); })("mouseout", function FcNodeContainerComponent_mouseout_HostBindingHandler($event) { return ctx.mouseout($event); });
            } if (rf & 2) {
                core["ɵɵattribute"]("id", ctx.nodeId);
                core["ɵɵstyleProp"]("top", ctx.top)("left", ctx.left);
            } }, inputs: { callbacks: "callbacks", userNodeCallbacks: "userNodeCallbacks", node: "node", selected: "selected", edit: "edit", underMouse: "underMouse", mouseOverConnector: "mouseOverConnector", modelservice: "modelservice", dragging: "dragging" }, features: [core["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 0, consts: [["nodeContent", ""]], template: function FcNodeContainerComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, FcNodeContainerComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, core["ɵɵtemplateRefExtractor"]);
            } }, styles: ["[_nghost-%COMP%]{position:absolute;z-index:1}.fc-dragging[_nghost-%COMP%]{z-index:10}[_nghost-%COMP%]     .fc-leftConnectors, [_nghost-%COMP%]     .fc-rightConnectors{position:absolute;top:0;height:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;z-index:-10}[_nghost-%COMP%]     .fc-leftConnectors .fc-magnet, [_nghost-%COMP%]     .fc-rightConnectors .fc-magnet{-webkit-box-align:center;align-items:center}[_nghost-%COMP%]     .fc-leftConnectors{left:-20px}[_nghost-%COMP%]     .fc-rightConnectors{right:-20px}[_nghost-%COMP%]     .fc-magnet{display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1;height:60px;-webkit-box-pack:center;justify-content:center}[_nghost-%COMP%]     .fc-connector{width:18px;height:18px;border:10px solid transparent;-moz-background-clip:padding;-webkit-background-clip:padding;background-clip:padding-box;border-radius:50%;background-color:#f7a789;color:#fff;pointer-events:all}[_nghost-%COMP%]     .fc-connector.fc-hover{background-color:#000}"] });
        return FcNodeContainerComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FcNodeContainerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'fc-node',
                    template: '<ng-template #nodeContent></ng-template>',
                    styleUrls: ['./node.component.scss']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: [FC_NODE_COMPONENT_CONFIG]
                }] }, { type: core.ElementRef }, { type: core.ComponentFactoryResolver }]; }, { callbacks: [{
                type: core.Input
            }], userNodeCallbacks: [{
                type: core.Input
            }], node: [{
                type: core.Input
            }], selected: [{
                type: core.Input
            }], edit: [{
                type: core.Input
            }], underMouse: [{
                type: core.Input
            }], mouseOverConnector: [{
                type: core.Input
            }], modelservice: [{
                type: core.Input
            }], dragging: [{
                type: core.Input
            }], nodeId: [{
                type: core.HostBinding,
                args: ['attr.id']
            }], top: [{
                type: core.HostBinding,
                args: ['style.top']
            }], left: [{
                type: core.HostBinding,
                args: ['style.left']
            }], nodeContentContainer: [{
                type: core.ViewChild,
                args: ['nodeContent', { read: core.ViewContainerRef, static: true }]
            }], mousedown: [{
                type: core.HostListener,
                args: ['mousedown', ['$event']]
            }], dragstart: [{
                type: core.HostListener,
                args: ['dragstart', ['$event']]
            }], dragend: [{
                type: core.HostListener,
                args: ['dragend', ['$event']]
            }], click: [{
                type: core.HostListener,
                args: ['click', ['$event']]
            }], mouseover: [{
                type: core.HostListener,
                args: ['mouseover', ['$event']]
            }], mouseout: [{
                type: core.HostListener,
                args: ['mouseout', ['$event']]
            }] }); })();
    var FcNodeComponent = /** @class */ (function () {
        function FcNodeComponent() {
            var _this = this;
            this.flowchartConstants = FlowchartConstants;
            this.nodeRectInfo = {
                top: function () {
                    return _this.node.y;
                },
                left: function () {
                    return _this.node.x;
                },
                bottom: function () {
                    return _this.node.y + _this.height;
                },
                right: function () {
                    return _this.node.x + _this.width;
                },
                width: function () {
                    return _this.width;
                },
                height: function () {
                    return _this.height;
                }
            };
        }
        FcNodeComponent.prototype.ngOnInit = function () {
        };
        FcNodeComponent.ɵfac = function FcNodeComponent_Factory(t) { return new (t || FcNodeComponent)(); };
        FcNodeComponent.ɵdir = core["ɵɵdefineDirective"]({ type: FcNodeComponent, inputs: { callbacks: "callbacks", userNodeCallbacks: "userNodeCallbacks", node: "node", selected: "selected", edit: "edit", underMouse: "underMouse", mouseOverConnector: "mouseOverConnector", modelservice: "modelservice", dragging: "dragging" } });
        return FcNodeComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FcNodeComponent, [{
            type: core.Directive
        }], null, { callbacks: [{
                type: core.Input
            }], userNodeCallbacks: [{
                type: core.Input
            }], node: [{
                type: core.Input
            }], selected: [{
                type: core.Input
            }], edit: [{
                type: core.Input
            }], underMouse: [{
                type: core.Input
            }], mouseOverConnector: [{
                type: core.Input
            }], modelservice: [{
                type: core.Input
            }], dragging: [{
                type: core.Input
            }] }); })();

    function NgxFlowchartComponent__svg_g_7_Template(rf, ctx) { if (rf & 1) {
        var _r59 = core["ɵɵgetCurrentView"]();
        core["ɵɵnamespaceSVG"]();
        core["ɵɵelementStart"](0, "g");
        core["ɵɵelementStart"](1, "path", 12);
        core["ɵɵlistener"]("mousedown", function NgxFlowchartComponent__svg_g_7_Template__svg_path_mousedown_1_listener($event) { core["ɵɵrestoreView"](_r59); var edge_r56 = ctx.$implicit; var ctx_r58 = core["ɵɵnextContext"](); return ctx_r58.edgeMouseDown($event, edge_r56); })("click", function NgxFlowchartComponent__svg_g_7_Template__svg_path_click_1_listener($event) { core["ɵɵrestoreView"](_r59); var edge_r56 = ctx.$implicit; var ctx_r60 = core["ɵɵnextContext"](); return ctx_r60.edgeClick($event, edge_r56); })("dblclick", function NgxFlowchartComponent__svg_g_7_Template__svg_path_dblclick_1_listener($event) { core["ɵɵrestoreView"](_r59); var edge_r56 = ctx.$implicit; var ctx_r61 = core["ɵɵnextContext"](); return ctx_r61.edgeDoubleClick($event, edge_r56); })("mouseover", function NgxFlowchartComponent__svg_g_7_Template__svg_path_mouseover_1_listener($event) { core["ɵɵrestoreView"](_r59); var edge_r56 = ctx.$implicit; var ctx_r62 = core["ɵɵnextContext"](); return ctx_r62.edgeMouseOver($event, edge_r56); })("mouseenter", function NgxFlowchartComponent__svg_g_7_Template__svg_path_mouseenter_1_listener($event) { core["ɵɵrestoreView"](_r59); var edge_r56 = ctx.$implicit; var ctx_r63 = core["ɵɵnextContext"](); return ctx_r63.edgeMouseEnter($event, edge_r56); })("mouseleave", function NgxFlowchartComponent__svg_g_7_Template__svg_path_mouseleave_1_listener($event) { core["ɵɵrestoreView"](_r59); var edge_r56 = ctx.$implicit; var ctx_r64 = core["ɵɵnextContext"](); return ctx_r64.edgeMouseLeave($event, edge_r56); });
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var edge_r56 = ctx.$implicit;
        var $index_r57 = ctx.index;
        var ctx_r50 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵattribute"]("id", "fc-edge-path-" + $index_r57)("class", ctx_r50.modelService.edges.isSelected(edge_r56) && ctx_r50.flowchartConstants.selectedClass + " " + ctx_r50.flowchartConstants.edgeClass || edge_r56 === ctx_r50.mouseoverService.mouseoverscope.edge && ctx_r50.flowchartConstants.hoverClass + " " + ctx_r50.flowchartConstants.edgeClass || edge_r56.active && ctx_r50.flowchartConstants.activeClass + " " + ctx_r50.flowchartConstants.edgeClass || ctx_r50.flowchartConstants.edgeClass)("d", ctx_r50.getEdgeDAttribute(edge_r56))("marker-end", "url(#" + (ctx_r50.modelService.edges.isSelected(edge_r56) ? ctx_r50.arrowDefIdSelected : ctx_r50.arrowDefId) + ")");
    } }
    function NgxFlowchartComponent__svg_g_8_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵnamespaceSVG"]();
        core["ɵɵelementStart"](0, "g");
        core["ɵɵelement"](1, "path");
        core["ɵɵelement"](2, "circle", 13);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r51 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵattribute"]("class", ctx_r51.flowchartConstants.edgeClass + " " + ctx_r51.flowchartConstants.draggingClass)("d", ctx_r51.edgeDrawingService.getEdgeDAttribute(ctx_r51.edgeDraggingService.edgeDragging.dragPoint1, ctx_r51.edgeDraggingService.edgeDragging.dragPoint2, ctx_r51.edgeStyle));
        core["ɵɵadvance"](1);
        core["ɵɵattribute"]("cx", ctx_r51.edgeDraggingService.edgeDragging.dragPoint2.x)("cy", ctx_r51.edgeDraggingService.edgeDragging.dragPoint2.y);
    } }
    function NgxFlowchartComponent__svg_g_9_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵnamespaceSVG"]();
        core["ɵɵelementStart"](0, "g", 14);
        core["ɵɵelement"](1, "path", 15);
        core["ɵɵelement"](2, "circle", 13);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r52 = core["ɵɵnextContext"]();
        core["ɵɵclassMapInterpolate2"]("shadow-svg-class ", ctx_r52.flowchartConstants.edgeClass, " ", ctx_r52.flowchartConstants.draggingClass, "");
    } }
    function NgxFlowchartComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵnamespaceSVG"]();
        core["ɵɵnamespaceHTML"]();
        core["ɵɵelementContainerStart"](0);
        core["ɵɵelement"](1, "fc-node", 16);
        core["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        var node_r65 = ctx.$implicit;
        var ctx_r53 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("selected", ctx_r53.modelService.nodes.isSelected(node_r65))("edit", ctx_r53.modelService.nodes.isEdit(node_r65))("underMouse", node_r65 === ctx_r53.mouseoverService.mouseoverscope.node)("node", node_r65)("mouseOverConnector", ctx_r53.mouseoverService.mouseoverscope.connector)("modelservice", ctx_r53.modelService)("dragging", ctx_r53.nodeDraggingService.isDraggingNode(node_r65))("callbacks", ctx_r53.callbacks)("userNodeCallbacks", ctx_r53.userNodeCallbacks);
    } }
    function NgxFlowchartComponent_div_11_span_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "span");
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r66 = core["ɵɵnextContext"](2);
        core["ɵɵattribute"]("id", "fc-edge-label-dragging");
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](ctx_r66.edgeDraggingService.edgeDragging.dragLabel);
    } }
    var _c0$1 = function (a0, a1) { return { top: a0, left: a1 }; };
    function NgxFlowchartComponent_div_11_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵnamespaceSVG"]();
        core["ɵɵnamespaceHTML"]();
        core["ɵɵelementStart"](0, "div", 17);
        core["ɵɵelementStart"](1, "div", 18);
        core["ɵɵtemplate"](2, NgxFlowchartComponent_div_11_span_2_Template, 2, 2, "span", 7);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r54 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngStyle", core["ɵɵpureFunction2"](3, _c0$1, ctx_r54.edgeDrawingService.getEdgeCenter(ctx_r54.edgeDraggingService.edgeDragging.dragPoint1, ctx_r54.edgeDraggingService.edgeDragging.dragPoint2).y + "px", ctx_r54.edgeDrawingService.getEdgeCenter(ctx_r54.edgeDraggingService.edgeDragging.dragPoint1, ctx_r54.edgeDraggingService.edgeDragging.dragPoint2).x + "px"));
        core["ɵɵattribute"]("class", "fc-noselect " + ctx_r54.flowchartConstants.edgeLabelClass);
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngIf", ctx_r54.edgeDraggingService.edgeDragging.dragLabel);
    } }
    function NgxFlowchartComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
        var _r73 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "div", 22);
        core["ɵɵlistener"]("click", function NgxFlowchartComponent_div_12_div_2_Template_div_click_0_listener($event) { core["ɵɵrestoreView"](_r73); var edge_r67 = core["ɵɵnextContext"]().$implicit; var ctx_r72 = core["ɵɵnextContext"](); return ctx_r72.edgeEdit($event, edge_r67); });
        core["ɵɵelement"](1, "i", 23);
        core["ɵɵelementEnd"]();
    } }
    function NgxFlowchartComponent_div_12_div_3_Template(rf, ctx) { if (rf & 1) {
        var _r76 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "div", 24);
        core["ɵɵlistener"]("click", function NgxFlowchartComponent_div_12_div_3_Template_div_click_0_listener($event) { core["ɵɵrestoreView"](_r76); var edge_r67 = core["ɵɵnextContext"]().$implicit; var ctx_r75 = core["ɵɵnextContext"](); return ctx_r75.edgeRemove($event, edge_r67); });
        core["ɵɵtext"](1, " \u00D7 ");
        core["ɵɵelementEnd"]();
    } }
    function NgxFlowchartComponent_div_12_span_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "span");
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r78 = core["ɵɵnextContext"]();
        var $index_r68 = ctx_r78.index;
        var edge_r67 = ctx_r78.$implicit;
        core["ɵɵattribute"]("id", "fc-edge-label-" + $index_r68);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](edge_r67.label);
    } }
    function NgxFlowchartComponent_div_12_Template(rf, ctx) { if (rf & 1) {
        var _r80 = core["ɵɵgetCurrentView"]();
        core["ɵɵnamespaceSVG"]();
        core["ɵɵnamespaceHTML"]();
        core["ɵɵelementStart"](0, "div", 19);
        core["ɵɵlistener"]("mousedown", function NgxFlowchartComponent_div_12_Template_div_mousedown_0_listener($event) { core["ɵɵrestoreView"](_r80); var edge_r67 = ctx.$implicit; var ctx_r79 = core["ɵɵnextContext"](); return ctx_r79.edgeMouseDown($event, edge_r67); })("click", function NgxFlowchartComponent_div_12_Template_div_click_0_listener($event) { core["ɵɵrestoreView"](_r80); var edge_r67 = ctx.$implicit; var ctx_r81 = core["ɵɵnextContext"](); return ctx_r81.edgeClick($event, edge_r67); })("dblclick", function NgxFlowchartComponent_div_12_Template_div_dblclick_0_listener($event) { core["ɵɵrestoreView"](_r80); var edge_r67 = ctx.$implicit; var ctx_r82 = core["ɵɵnextContext"](); return ctx_r82.edgeDoubleClick($event, edge_r67); })("mouseover", function NgxFlowchartComponent_div_12_Template_div_mouseover_0_listener($event) { core["ɵɵrestoreView"](_r80); var edge_r67 = ctx.$implicit; var ctx_r83 = core["ɵɵnextContext"](); return ctx_r83.edgeMouseOver($event, edge_r67); })("mouseenter", function NgxFlowchartComponent_div_12_Template_div_mouseenter_0_listener($event) { core["ɵɵrestoreView"](_r80); var edge_r67 = ctx.$implicit; var ctx_r84 = core["ɵɵnextContext"](); return ctx_r84.edgeMouseEnter($event, edge_r67); })("mouseleave", function NgxFlowchartComponent_div_12_Template_div_mouseleave_0_listener($event) { core["ɵɵrestoreView"](_r80); var edge_r67 = ctx.$implicit; var ctx_r85 = core["ɵɵnextContext"](); return ctx_r85.edgeMouseLeave($event, edge_r67); });
        core["ɵɵelementStart"](1, "div", 18);
        core["ɵɵtemplate"](2, NgxFlowchartComponent_div_12_div_2_Template, 2, 0, "div", 20);
        core["ɵɵtemplate"](3, NgxFlowchartComponent_div_12_div_3_Template, 2, 0, "div", 21);
        core["ɵɵtemplate"](4, NgxFlowchartComponent_div_12_span_4_Template, 2, 2, "span", 7);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var edge_r67 = ctx.$implicit;
        var ctx_r55 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngStyle", core["ɵɵpureFunction2"](5, _c0$1, ctx_r55.edgeDrawingService.getEdgeCenter(ctx_r55.modelService.edges.sourceCoord(edge_r67), ctx_r55.modelService.edges.destCoord(edge_r67)).y + "px", ctx_r55.edgeDrawingService.getEdgeCenter(ctx_r55.modelService.edges.sourceCoord(edge_r67), ctx_r55.modelService.edges.destCoord(edge_r67)).x + "px"));
        core["ɵɵattribute"]("class", "fc-noselect " + (ctx_r55.modelService.edges.isEdit(edge_r67) && ctx_r55.flowchartConstants.editClass + " " + ctx_r55.flowchartConstants.edgeLabelClass || ctx_r55.modelService.edges.isSelected(edge_r67) && ctx_r55.flowchartConstants.selectedClass + " " + ctx_r55.flowchartConstants.edgeLabelClass || edge_r67 === ctx_r55.mouseoverService.mouseoverscope.edge && ctx_r55.flowchartConstants.hoverClass + " " + ctx_r55.flowchartConstants.edgeLabelClass || edge_r67.active && ctx_r55.flowchartConstants.activeClass + " " + ctx_r55.flowchartConstants.edgeLabelClass || ctx_r55.flowchartConstants.edgeLabelClass));
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngIf", ctx_r55.modelService.isEditable());
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r55.modelService.isEditable());
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", edge_r67.label);
    } }
    var NgxFlowchartComponent = /** @class */ (function () {
        function NgxFlowchartComponent(elementRef, differs, modelValidation, edgeDrawingService, cd, zone) {
            var _this = this;
            this.elementRef = elementRef;
            this.differs = differs;
            this.modelValidation = modelValidation;
            this.edgeDrawingService = edgeDrawingService;
            this.cd = cd;
            this.zone = zone;
            this.modelChanged = new core.EventEmitter();
            this.fitModelSizeByDefaultValue = true;
            this.flowchartConstants = FlowchartConstants;
            this.nodesDiffer = this.differs.find([]).create(function (index, item) {
                return item;
            });
            this.edgesDiffer = this.differs.find([]).create(function (index, item) {
                return item;
            });
            this.detectChangesSubject = new rxjs.Subject();
            this.arrowDefId = 'arrow-' + Math.random();
            this.arrowDefIdSelected = this.arrowDefId + '-selected';
            this.detectChangesSubject
                .pipe(operators.debounceTime(50))
                .subscribe(function () { return _this.cd.detectChanges(); });
        }
        Object.defineProperty(NgxFlowchartComponent.prototype, "canvasClass", {
            get: function () {
                return FlowchartConstants.canvasClass;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgxFlowchartComponent.prototype, "fitModelSizeByDefault", {
            get: function () {
                return this.fitModelSizeByDefaultValue;
            },
            set: function (value) {
                this.fitModelSizeByDefaultValue = coercion.coerceBooleanProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        NgxFlowchartComponent.prototype.ngOnInit = function () {
            var e_1, _a;
            var _this = this;
            if (!this.dropTargetId && this.edgeStyle !== FlowchartConstants.curvedStyle && this.edgeStyle !== FlowchartConstants.lineStyle) {
                throw new Error('edgeStyle not supported.');
            }
            this.nodeHeight = this.nodeHeight || 200;
            this.nodeWidth = this.nodeWidth || 200;
            this.dragAnimation = this.dragAnimation || FlowchartConstants.dragAnimationRepaint;
            this.userCallbacks = this.userCallbacks || {};
            this.automaticResize = this.automaticResize || false;
            try {
                for (var _b = __values(Object.keys(this.userCallbacks)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    var callback = this.userCallbacks[key];
                    if (typeof callback !== 'function' && key !== 'nodeCallbacks') {
                        throw new Error('All callbacks should be functions.');
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.userNodeCallbacks = this.userCallbacks.nodeCallbacks;
            var element = $(this.elementRef.nativeElement);
            this.modelService = new FcModelService(this.modelValidation, this.model, this.modelChanged, this.detectChangesSubject, this.selectedObjects, this.userCallbacks.dropNode, this.userCallbacks.createEdge, this.userCallbacks.edgeAdded, this.userCallbacks.nodeRemoved, this.userCallbacks.edgeRemoved, element[0], element[0].querySelector('svg'));
            if (this.dropTargetId) {
                this.modelService.dropTargetId = this.dropTargetId;
            }
            var applyFunction = this.zone.run.bind(this.zone);
            this.nodeDraggingService = new FcNodeDraggingService(this.modelService, applyFunction, this.automaticResize, this.dragAnimation);
            this.edgeDraggingService = new FcEdgeDraggingService(this.modelValidation, this.edgeDrawingService, this.modelService, this.model, this.userCallbacks.isValidEdge || null, applyFunction, this.dragAnimation, this.edgeStyle);
            this.mouseoverService = new FcMouseOverService(applyFunction);
            this.rectangleSelectService = new FcRectangleSelectService(this.modelService, element[0].querySelector('#select-rectangle'), applyFunction);
            this.callbacks = {
                nodeDragstart: this.nodeDraggingService.dragstart.bind(this.nodeDraggingService),
                nodeDragend: this.nodeDraggingService.dragend.bind(this.nodeDraggingService),
                edgeDragstart: this.edgeDraggingService.dragstart.bind(this.edgeDraggingService),
                edgeDragend: this.edgeDraggingService.dragend.bind(this.edgeDraggingService),
                edgeDrop: this.edgeDraggingService.drop.bind(this.edgeDraggingService),
                edgeDragoverConnector: this.edgeDraggingService.dragoverConnector.bind(this.edgeDraggingService),
                edgeDragoverMagnet: this.edgeDraggingService.dragoverMagnet.bind(this.edgeDraggingService),
                edgeDragleaveMagnet: this.edgeDraggingService.dragleaveMagnet.bind(this.edgeDraggingService),
                nodeMouseOver: this.mouseoverService.nodeMouseOver.bind(this.mouseoverService),
                nodeMouseOut: this.mouseoverService.nodeMouseOut.bind(this.mouseoverService),
                connectorMouseEnter: this.mouseoverService.connectorMouseEnter.bind(this.mouseoverService),
                connectorMouseLeave: this.mouseoverService.connectorMouseLeave.bind(this.mouseoverService),
                nodeClicked: function (event, node) {
                    _this.modelService.nodes.handleClicked(node, event.ctrlKey);
                    event.stopPropagation();
                    event.preventDefault();
                }
            };
            this.adjustCanvasSize(this.fitModelSizeByDefault);
        };
        NgxFlowchartComponent.prototype.ngDoCheck = function () {
            if (this.model) {
                var nodesChange = this.nodesDiffer.diff(this.model.nodes);
                var edgesChange = this.edgesDiffer.diff(this.model.edges);
                var nodesChanged_1 = false;
                var edgesChanged_1 = false;
                if (nodesChange !== null) {
                    nodesChange.forEachAddedItem(function () {
                        nodesChanged_1 = true;
                    });
                    nodesChange.forEachRemovedItem(function () {
                        nodesChanged_1 = true;
                    });
                }
                if (edgesChange !== null) {
                    edgesChange.forEachAddedItem(function () {
                        edgesChanged_1 = true;
                    });
                    edgesChange.forEachRemovedItem(function () {
                        edgesChanged_1 = true;
                    });
                }
                if (nodesChanged_1) {
                    this.adjustCanvasSize(this.fitModelSizeByDefault);
                }
                if (nodesChanged_1 || edgesChanged_1) {
                    this.detectChangesSubject.next();
                }
            }
        };
        NgxFlowchartComponent.prototype.getEdgeDAttribute = function (edge) {
            return this.edgeDrawingService.getEdgeDAttribute(this.modelService.edges.sourceCoord(edge), this.modelService.edges.destCoord(edge), this.edgeStyle);
        };
        NgxFlowchartComponent.prototype.adjustCanvasSize = function (fit) {
            var _this = this;
            var maxX = 0;
            var maxY = 0;
            var element = $(this.elementRef.nativeElement);
            this.model.nodes.forEach(function (node) {
                maxX = Math.max(node.x + _this.nodeWidth, maxX);
                maxY = Math.max(node.y + _this.nodeHeight, maxY);
            });
            var width;
            var height;
            if (fit) {
                width = maxX;
                height = maxY;
            }
            else {
                width = Math.max(maxX, element.prop('offsetWidth'));
                height = Math.max(maxY, element.prop('offsetHeight'));
            }
            element.css('width', width + 'px');
            element.css('height', height + 'px');
        };
        NgxFlowchartComponent.prototype.canvasClick = function (event) { };
        NgxFlowchartComponent.prototype.edgeMouseDown = function (event, edge) {
            event.stopPropagation();
        };
        NgxFlowchartComponent.prototype.edgeClick = function (event, edge) {
            this.modelService.edges.handleEdgeMouseClick(edge, event.ctrlKey);
            event.stopPropagation();
            event.preventDefault();
        };
        NgxFlowchartComponent.prototype.edgeRemove = function (event, edge) {
            this.modelService.edges.delete(edge);
            event.stopPropagation();
            event.preventDefault();
        };
        NgxFlowchartComponent.prototype.edgeEdit = function (event, edge) {
            if (this.userCallbacks.edgeEdit) {
                this.userCallbacks.edgeEdit(event, edge);
            }
        };
        NgxFlowchartComponent.prototype.edgeDoubleClick = function (event, edge) {
            if (this.userCallbacks.edgeDoubleClick) {
                this.userCallbacks.edgeDoubleClick(event, edge);
            }
        };
        NgxFlowchartComponent.prototype.edgeMouseOver = function (event, edge) {
            if (this.userCallbacks.edgeMouseOver) {
                this.userCallbacks.edgeMouseOver(event, edge);
            }
        };
        NgxFlowchartComponent.prototype.edgeMouseEnter = function (event, edge) {
            this.mouseoverService.edgeMouseEnter(event, edge);
        };
        NgxFlowchartComponent.prototype.edgeMouseLeave = function (event, edge) {
            this.mouseoverService.edgeMouseLeave(event, edge);
        };
        NgxFlowchartComponent.prototype.dragover = function (event) {
            this.nodeDraggingService.dragover(event);
            this.edgeDraggingService.dragover(event);
        };
        NgxFlowchartComponent.prototype.drop = function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            }
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            this.nodeDraggingService.drop(event);
        };
        NgxFlowchartComponent.prototype.mousedown = function (event) {
            this.rectangleSelectService.mousedown(event);
        };
        NgxFlowchartComponent.prototype.mousemove = function (event) {
            this.rectangleSelectService.mousemove(event);
        };
        NgxFlowchartComponent.prototype.mouseup = function (event) {
            this.rectangleSelectService.mouseup(event);
        };
        NgxFlowchartComponent.ɵfac = function NgxFlowchartComponent_Factory(t) { return new (t || NgxFlowchartComponent)(core["ɵɵdirectiveInject"](core.ElementRef), core["ɵɵdirectiveInject"](core.IterableDiffers), core["ɵɵdirectiveInject"](FcModelValidationService), core["ɵɵdirectiveInject"](FcEdgeDrawingService), core["ɵɵdirectiveInject"](core.ChangeDetectorRef), core["ɵɵdirectiveInject"](core.NgZone)); };
        NgxFlowchartComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: NgxFlowchartComponent, selectors: [["fc-canvas"]], hostVars: 1, hostBindings: function NgxFlowchartComponent_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("dragover", function NgxFlowchartComponent_dragover_HostBindingHandler($event) { return ctx.dragover($event); })("drop", function NgxFlowchartComponent_drop_HostBindingHandler($event) { return ctx.drop($event); })("mousedown", function NgxFlowchartComponent_mousedown_HostBindingHandler($event) { return ctx.mousedown($event); })("mousemove", function NgxFlowchartComponent_mousemove_HostBindingHandler($event) { return ctx.mousemove($event); })("mouseup", function NgxFlowchartComponent_mouseup_HostBindingHandler($event) { return ctx.mouseup($event); });
            } if (rf & 2) {
                core["ɵɵattribute"]("class", ctx.canvasClass);
            } }, inputs: { model: "model", selectedObjects: "selectedObjects", edgeStyle: "edgeStyle", userCallbacks: "userCallbacks", automaticResize: "automaticResize", dragAnimation: "dragAnimation", nodeWidth: "nodeWidth", nodeHeight: "nodeHeight", dropTargetId: "dropTargetId", fitModelSizeByDefault: "fitModelSizeByDefault" }, outputs: { modelChanged: "modelChanged" }, decls: 14, vars: 8, consts: [[1, "fc-canvas-container", 3, "click"], [1, "fc-canvas-svg"], ["markerWidth", "5", "markerHeight", "5", "viewBox", "-6 -6 12 12", "refX", "10", "refY", "0", "markerUnits", "strokeWidth", "orient", "auto", 1, "fc-arrow-marker"], ["points", "-2,0 -5,5 5,0 -5,-5", "stroke", "gray", "fill", "gray", "stroke-width", "1px"], ["markerWidth", "5", "markerHeight", "5", "viewBox", "-6 -6 12 12", "refX", "10", "refY", "0", "markerUnits", "strokeWidth", "orient", "auto", 1, "fc-arrow-marker-selected"], ["points", "-2,0 -5,5 5,0 -5,-5", "stroke", "red", "fill", "red", "stroke-width", "1px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["style", "display:none", 3, "class", 4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle", "mousedown", "click", "dblclick", "mouseover", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["id", "select-rectangle", "hidden", "", 1, "fc-select-rectangle"], [3, "mousedown", "click", "dblclick", "mouseover", "mouseenter", "mouseleave"], ["r", "4", 1, "edge-endpoint"], [2, "display", "none"], ["d", ""], [3, "selected", "edit", "underMouse", "node", "mouseOverConnector", "modelservice", "dragging", "callbacks", "userNodeCallbacks"], [3, "ngStyle"], [1, "fc-edge-label-text"], [3, "ngStyle", "mousedown", "click", "dblclick", "mouseover", "mouseenter", "mouseleave"], ["class", "fc-noselect fc-nodeedit", 3, "click", 4, "ngIf"], ["class", "fc-noselect fc-nodedelete", 3, "click", 4, "ngIf"], [1, "fc-noselect", "fc-nodeedit", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], [1, "fc-noselect", "fc-nodedelete", 3, "click"]], template: function NgxFlowchartComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵlistener"]("click", function NgxFlowchartComponent_Template_div_click_0_listener($event) { return ctx.canvasClick($event); });
                core["ɵɵnamespaceSVG"]();
                core["ɵɵelementStart"](1, "svg", 1);
                core["ɵɵelementStart"](2, "defs");
                core["ɵɵelementStart"](3, "marker", 2);
                core["ɵɵelement"](4, "polygon", 3);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](5, "marker", 4);
                core["ɵɵelement"](6, "polygon", 5);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](7, NgxFlowchartComponent__svg_g_7_Template, 2, 4, "g", 6);
                core["ɵɵtemplate"](8, NgxFlowchartComponent__svg_g_8_Template, 3, 4, "g", 7);
                core["ɵɵtemplate"](9, NgxFlowchartComponent__svg_g_9_Template, 3, 4, "g", 8);
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](10, NgxFlowchartComponent_ng_container_10_Template, 2, 9, "ng-container", 6);
                core["ɵɵtemplate"](11, NgxFlowchartComponent_div_11_Template, 3, 6, "div", 9);
                core["ɵɵtemplate"](12, NgxFlowchartComponent_div_12_Template, 5, 8, "div", 10);
                core["ɵɵnamespaceHTML"]();
                core["ɵɵelement"](13, "div", 11);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](3);
                core["ɵɵattribute"]("id", ctx.arrowDefId);
                core["ɵɵadvance"](2);
                core["ɵɵattribute"]("id", ctx.arrowDefIdSelected);
                core["ɵɵadvance"](2);
                core["ɵɵproperty"]("ngForOf", ctx.model.edges);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.dragAnimation === ctx.flowchartConstants.dragAnimationRepaint && ctx.edgeDraggingService.edgeDragging.isDragging);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.dragAnimation === ctx.flowchartConstants.dragAnimationShadow);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.model.nodes);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.dragAnimation === ctx.flowchartConstants.dragAnimationRepaint && ctx.edgeDraggingService.edgeDragging.isDragging);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.model.edges);
            } }, directives: [common.NgForOf, common.NgIf, FcNodeContainerComponent, common.NgStyle], styles: ["[_nghost-%COMP%]{display:block;position:relative;width:100%;height:100%;background-size:25px 25px;background-image:linear-gradient(to right,rgba(0,0,0,.1) 1px,transparent 1px),linear-gradient(to bottom,rgba(0,0,0,.1) 1px,transparent 1px);background-color:transparent;min-width:100%;min-height:100%;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]   .fc-canvas-container[_ngcontent-%COMP%]{display:block;position:relative;width:100%;height:100%}[_nghost-%COMP%]   .fc-canvas-container[_ngcontent-%COMP%]   svg.fc-canvas-svg[_ngcontent-%COMP%]{display:block;position:relative;width:100%;height:100%}[_nghost-%COMP%]   .fc-edge[_ngcontent-%COMP%]{stroke:gray;stroke-width:4;-webkit-transition:stroke-width .2s;transition:stroke-width .2s;fill:transparent}[_nghost-%COMP%]   .fc-edge.fc-hover[_ngcontent-%COMP%]{stroke:gray;stroke-width:6;fill:transparent}[_nghost-%COMP%]   .fc-edge.fc-selected[_ngcontent-%COMP%]{stroke:red;stroke-width:4;fill:transparent}[_nghost-%COMP%]   .fc-edge.fc-active[_ngcontent-%COMP%]{-webkit-animation:3s linear infinite dash;animation:3s linear infinite dash;stroke-dasharray:20}[_nghost-%COMP%]   .fc-edge.fc-dragging[_ngcontent-%COMP%]{pointer-events:none}[_nghost-%COMP%]   .fc-arrow-marker[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{stroke:gray;fill:gray}[_nghost-%COMP%]   .fc-arrow-marker-selected[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{stroke:red;fill:red}[_nghost-%COMP%]   .edge-endpoint[_ngcontent-%COMP%]{fill:gray}[_nghost-%COMP%]   .fc-noselect[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]   .fc-edge-label[_ngcontent-%COMP%]{position:absolute;opacity:.8;-webkit-transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;-webkit-transform-origin:bottom left;transform-origin:bottom left;margin:0 auto}[_nghost-%COMP%]   .fc-edge-label[_ngcontent-%COMP%]   .fc-edge-label-text[_ngcontent-%COMP%]{position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);white-space:nowrap;text-align:center;font-size:16px}[_nghost-%COMP%]   .fc-edge-label[_ngcontent-%COMP%]   .fc-edge-label-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:default;border:solid #ff3d00;border-radius:10px;color:#ff3d00;background-color:#fff;padding:3px 5px}[_nghost-%COMP%]   .fc-edge-label[_ngcontent-%COMP%]   .fc-nodeedit[_ngcontent-%COMP%]{top:-30px;right:14px}[_nghost-%COMP%]   .fc-edge-label[_ngcontent-%COMP%]   .fc-nodedelete[_ngcontent-%COMP%]{top:-30px;right:-13px}[_nghost-%COMP%]   .fc-edge-label.fc-hover[_ngcontent-%COMP%]{-webkit-transform:scale(1.25);transform:scale(1.25)}[_nghost-%COMP%]   .fc-edge-label.fc-edit[_ngcontent-%COMP%]   .fc-edge-label-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], [_nghost-%COMP%]   .fc-edge-label.fc-selected[_ngcontent-%COMP%]   .fc-edge-label-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:solid red;color:#fff;font-weight:600;background-color:red}[_nghost-%COMP%]   .fc-select-rectangle[_ngcontent-%COMP%]{border:2px dashed #5262ff;position:absolute;background:rgba(20,125,255,.1);z-index:2}@-webkit-keyframes dash{from{stroke-dashoffset:500}}@keyframes dash{from{stroke-dashoffset:500}}[_nghost-%COMP%]     .fc-nodeedit{display:none;font-size:15px}[_nghost-%COMP%]     .fc-nodedelete{display:none;font-size:18px}[_nghost-%COMP%]     .fc-edit .fc-nodedelete, [_nghost-%COMP%]     .fc-edit .fc-nodeedit{display:block;position:absolute;border:2px solid #eee;border-radius:50%;font-weight:600;line-height:20px;height:20px;padding-top:2px;width:22px;background:#494949;color:#fff;text-align:center;vertical-align:bottom;cursor:pointer}[_nghost-%COMP%]     .fc-edit .fc-nodeedit{top:-24px;right:16px}[_nghost-%COMP%]     .fc-edit .fc-nodedelete{top:-24px;right:-13px}"], changeDetection: 0 });
        return NgxFlowchartComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](NgxFlowchartComponent, [{
            type: core.Component,
            args: [{
                    selector: 'fc-canvas',
                    templateUrl: './ngx-flowchart.component.html',
                    styleUrls: ['./ngx-flowchart.component.scss'],
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }]
        }], function () { return [{ type: core.ElementRef }, { type: core.IterableDiffers }, { type: FcModelValidationService }, { type: FcEdgeDrawingService }, { type: core.ChangeDetectorRef }, { type: core.NgZone }]; }, { canvasClass: [{
                type: core.HostBinding,
                args: ['attr.class']
            }], model: [{
                type: core.Input
            }], selectedObjects: [{
                type: core.Input
            }], edgeStyle: [{
                type: core.Input
            }], userCallbacks: [{
                type: core.Input
            }], automaticResize: [{
                type: core.Input
            }], dragAnimation: [{
                type: core.Input
            }], nodeWidth: [{
                type: core.Input
            }], nodeHeight: [{
                type: core.Input
            }], dropTargetId: [{
                type: core.Input
            }], modelChanged: [{
                type: core.Output
            }], fitModelSizeByDefault: [{
                type: core.Input
            }], dragover: [{
                type: core.HostListener,
                args: ['dragover', ['$event']]
            }], drop: [{
                type: core.HostListener,
                args: ['drop', ['$event']]
            }], mousedown: [{
                type: core.HostListener,
                args: ['mousedown', ['$event']]
            }], mousemove: [{
                type: core.HostListener,
                args: ['mousemove', ['$event']]
            }], mouseup: [{
                type: core.HostListener,
                args: ['mouseup', ['$event']]
            }] }); })();

    var FcMagnetDirective = /** @class */ (function () {
        function FcMagnetDirective(elementRef) {
            this.elementRef = elementRef;
        }
        FcMagnetDirective.prototype.ngOnInit = function () {
            var element = $(this.elementRef.nativeElement);
            element.addClass(FlowchartConstants.magnetClass);
        };
        FcMagnetDirective.prototype.dragover = function (event) {
            return this.callbacks.edgeDragoverMagnet(event, this.connector);
        };
        FcMagnetDirective.prototype.dragleave = function (event) {
            this.callbacks.edgeDragleaveMagnet(event);
        };
        FcMagnetDirective.prototype.drop = function (event) {
            return this.callbacks.edgeDrop(event, this.connector);
        };
        FcMagnetDirective.prototype.dragend = function (event) {
            this.callbacks.edgeDragend(event);
        };
        FcMagnetDirective.ɵfac = function FcMagnetDirective_Factory(t) { return new (t || FcMagnetDirective)(core["ɵɵdirectiveInject"](core.ElementRef)); };
        FcMagnetDirective.ɵdir = core["ɵɵdefineDirective"]({ type: FcMagnetDirective, selectors: [["", "fc-magnet", ""]], hostBindings: function FcMagnetDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("dragover", function FcMagnetDirective_dragover_HostBindingHandler($event) { return ctx.dragover($event); })("dragleave", function FcMagnetDirective_dragleave_HostBindingHandler($event) { return ctx.dragleave($event); })("drop", function FcMagnetDirective_drop_HostBindingHandler($event) { return ctx.drop($event); })("dragend", function FcMagnetDirective_dragend_HostBindingHandler($event) { return ctx.dragend($event); });
            } }, inputs: { callbacks: "callbacks", connector: "connector" } });
        return FcMagnetDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FcMagnetDirective, [{
            type: core.Directive,
            args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[fc-magnet]'
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { callbacks: [{
                type: core.Input
            }], connector: [{
                type: core.Input
            }], dragover: [{
                type: core.HostListener,
                args: ['dragover', ['$event']]
            }], dragleave: [{
                type: core.HostListener,
                args: ['dragleave', ['$event']]
            }], drop: [{
                type: core.HostListener,
                args: ['drop', ['$event']]
            }], dragend: [{
                type: core.HostListener,
                args: ['dragend', ['$event']]
            }] }); })();

    var FcConnectorDirective = /** @class */ (function () {
        function FcConnectorDirective(elementRef) {
            this.elementRef = elementRef;
        }
        FcConnectorDirective.prototype.ngOnInit = function () {
            var element = $(this.elementRef.nativeElement);
            element.addClass(FlowchartConstants.connectorClass);
            if (this.modelservice.isEditable()) {
                element.attr('draggable', 'true');
                this.updateConnectorClass();
            }
            var connectorRectInfo = {
                type: this.connector.type,
                width: this.elementRef.nativeElement.offsetWidth,
                height: this.elementRef.nativeElement.offsetHeight,
                nodeRectInfo: this.nodeRectInfo
            };
            this.modelservice.connectors.setConnectorRectInfo(this.connector.id, connectorRectInfo);
        };
        FcConnectorDirective.prototype.ngOnChanges = function (changes) {
            var e_1, _a;
            var updateConnector = false;
            try {
                for (var _b = __values(Object.keys(changes)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var propName = _c.value;
                    var change = changes[propName];
                    if (!change.firstChange && change.currentValue !== change.previousValue) {
                        if (propName === 'mouseOverConnector') {
                            updateConnector = true;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (updateConnector && this.modelservice.isEditable()) {
                this.updateConnectorClass();
            }
        };
        FcConnectorDirective.prototype.updateConnectorClass = function () {
            var element = $(this.elementRef.nativeElement);
            if (this.connector === this.mouseOverConnector) {
                element.addClass(FlowchartConstants.hoverClass);
            }
            else {
                element.removeClass(FlowchartConstants.hoverClass);
            }
        };
        FcConnectorDirective.prototype.dragover = function (event) {
            // Skip - conflict with magnet
            /* if (this.modelservice.isEditable()) {
              return this.callbacks.edgeDragoverConnector(event, this.connector);
            }*/
        };
        FcConnectorDirective.prototype.drop = function (event) {
            if (this.modelservice.isEditable()) {
                return this.callbacks.edgeDrop(event, this.connector);
            }
        };
        FcConnectorDirective.prototype.dragend = function (event) {
            if (this.modelservice.isEditable()) {
                this.callbacks.edgeDragend(event);
            }
        };
        FcConnectorDirective.prototype.dragstart = function (event) {
            if (this.modelservice.isEditable()) {
                this.callbacks.edgeDragstart(event, this.connector);
            }
        };
        FcConnectorDirective.prototype.mouseenter = function (event) {
            if (this.modelservice.isEditable()) {
                this.callbacks.connectorMouseEnter(event, this.connector);
            }
        };
        FcConnectorDirective.prototype.mouseleave = function (event) {
            if (this.modelservice.isEditable()) {
                this.callbacks.connectorMouseLeave(event, this.connector);
            }
        };
        FcConnectorDirective.ɵfac = function FcConnectorDirective_Factory(t) { return new (t || FcConnectorDirective)(core["ɵɵdirectiveInject"](core.ElementRef)); };
        FcConnectorDirective.ɵdir = core["ɵɵdefineDirective"]({ type: FcConnectorDirective, selectors: [["", "fc-connector", ""]], hostBindings: function FcConnectorDirective_HostBindings(rf, ctx) { if (rf & 1) {
                core["ɵɵlistener"]("dragover", function FcConnectorDirective_dragover_HostBindingHandler($event) { return ctx.dragover($event); })("drop", function FcConnectorDirective_drop_HostBindingHandler($event) { return ctx.drop($event); })("dragend", function FcConnectorDirective_dragend_HostBindingHandler($event) { return ctx.dragend($event); })("dragstart", function FcConnectorDirective_dragstart_HostBindingHandler($event) { return ctx.dragstart($event); })("mouseenter", function FcConnectorDirective_mouseenter_HostBindingHandler($event) { return ctx.mouseenter($event); })("mouseleave", function FcConnectorDirective_mouseleave_HostBindingHandler($event) { return ctx.mouseleave($event); });
            } }, inputs: { callbacks: "callbacks", modelservice: "modelservice", connector: "connector", nodeRectInfo: "nodeRectInfo", mouseOverConnector: "mouseOverConnector" }, features: [core["ɵɵNgOnChangesFeature"]()] });
        return FcConnectorDirective;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FcConnectorDirective, [{
            type: core.Directive,
            args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[fc-connector]'
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { callbacks: [{
                type: core.Input
            }], modelservice: [{
                type: core.Input
            }], connector: [{
                type: core.Input
            }], nodeRectInfo: [{
                type: core.Input
            }], mouseOverConnector: [{
                type: core.Input
            }], dragover: [{
                type: core.HostListener,
                args: ['dragover', ['$event']]
            }], drop: [{
                type: core.HostListener,
                args: ['drop', ['$event']]
            }], dragend: [{
                type: core.HostListener,
                args: ['dragend', ['$event']]
            }], dragstart: [{
                type: core.HostListener,
                args: ['dragstart', ['$event']]
            }], mouseenter: [{
                type: core.HostListener,
                args: ['mouseenter', ['$event']]
            }], mouseleave: [{
                type: core.HostListener,
                args: ['mouseleave', ['$event']]
            }] }); })();

    function DefaultFcNodeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 5);
        core["ɵɵelement"](1, "div", 6);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var connector_r90 = ctx.$implicit;
        var ctx_r86 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("connector", connector_r90)("callbacks", ctx_r86.callbacks);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("connector", connector_r90)("nodeRectInfo", ctx_r86.nodeRectInfo)("mouseOverConnector", ctx_r86.mouseOverConnector)("callbacks", ctx_r86.callbacks)("modelservice", ctx_r86.modelservice);
    } }
    function DefaultFcNodeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 5);
        core["ɵɵelement"](1, "div", 6);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var connector_r91 = ctx.$implicit;
        var ctx_r87 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("connector", connector_r91)("callbacks", ctx_r87.callbacks);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("connector", connector_r91)("nodeRectInfo", ctx_r87.nodeRectInfo)("mouseOverConnector", ctx_r87.mouseOverConnector)("callbacks", ctx_r87.callbacks)("modelservice", ctx_r87.modelservice);
    } }
    function DefaultFcNodeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
        var _r93 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "div", 7);
        core["ɵɵlistener"]("click", function DefaultFcNodeComponent_div_9_Template_div_click_0_listener($event) { core["ɵɵrestoreView"](_r93); var ctx_r92 = core["ɵɵnextContext"](); return ctx_r92.userNodeCallbacks.nodeEdit($event, ctx_r92.node); });
        core["ɵɵelement"](1, "i", 8);
        core["ɵɵelementEnd"]();
    } }
    function DefaultFcNodeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
        var _r95 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "div", 9);
        core["ɵɵlistener"]("click", function DefaultFcNodeComponent_div_10_Template_div_click_0_listener($event) { core["ɵɵrestoreView"](_r95); var ctx_r94 = core["ɵɵnextContext"](); return ctx_r94.modelservice.nodes.delete(ctx_r94.node); });
        core["ɵɵtext"](1, " \u00D7 ");
        core["ɵɵelementEnd"]();
    } }
    var DefaultFcNodeComponent = /** @class */ (function (_super) {
        __extends(DefaultFcNodeComponent, _super);
        function DefaultFcNodeComponent() {
            return _super.call(this) || this;
        }
        DefaultFcNodeComponent.ɵfac = function DefaultFcNodeComponent_Factory(t) { return new (t || DefaultFcNodeComponent)(); };
        DefaultFcNodeComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: DefaultFcNodeComponent, selectors: [["fc-default-node"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 14, consts: [[3, "dblclick"], [1, "innerNode"], ["fc-magnet", "", 3, "connector", "callbacks", 4, "ngFor", "ngForOf"], ["class", "fc-nodeedit", 3, "click", 4, "ngIf"], ["class", "fc-nodedelete", 3, "click", 4, "ngIf"], ["fc-magnet", "", 3, "connector", "callbacks"], ["fc-connector", "", 3, "connector", "nodeRectInfo", "mouseOverConnector", "callbacks", "modelservice"], [1, "fc-nodeedit", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], [1, "fc-nodedelete", 3, "click"]], template: function DefaultFcNodeComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵlistener"]("dblclick", function DefaultFcNodeComponent_Template_div_dblclick_0_listener($event) { return ctx.userNodeCallbacks.doubleClick($event, ctx.node); });
                core["ɵɵelement"](1, "div");
                core["ɵɵelementStart"](2, "div", 1);
                core["ɵɵelementStart"](3, "p");
                core["ɵɵtext"](4);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](5, "div");
                core["ɵɵtemplate"](6, DefaultFcNodeComponent_div_6_Template, 2, 7, "div", 2);
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](7, "div");
                core["ɵɵtemplate"](8, DefaultFcNodeComponent_div_8_Template, 2, 7, "div", 2);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](9, DefaultFcNodeComponent_div_9_Template, 2, 0, "div", 3);
                core["ɵɵtemplate"](10, DefaultFcNodeComponent_div_10_Template, 2, 0, "div", 4);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵclassMap"](ctx.flowchartConstants.nodeOverlayClass);
                core["ɵɵadvance"](3);
                core["ɵɵtextInterpolate"](ctx.node.name);
                core["ɵɵadvance"](1);
                core["ɵɵclassMap"](ctx.flowchartConstants.leftConnectorClass);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.modelservice.nodes.getConnectorsByType(ctx.node, ctx.flowchartConstants.leftConnectorType));
                core["ɵɵadvance"](1);
                core["ɵɵclassMap"](ctx.flowchartConstants.rightConnectorClass);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.modelservice.nodes.getConnectorsByType(ctx.node, ctx.flowchartConstants.rightConnectorType));
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.modelservice.isEditable() && !ctx.node.readonly);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.modelservice.isEditable() && !ctx.node.readonly);
            } }, directives: [common.NgForOf, common.NgIf, FcMagnetDirective, FcConnectorDirective], styles: ["[_nghost-%COMP%]   .fc-node-overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;left:0;top:0;right:0;bottom:0;background-color:#000;opacity:0}[_nghost-%COMP%]   .fc-hover[_nghost-%COMP%]   .fc-node-overlay[_ngcontent-%COMP%], .fc-hover   [_nghost-%COMP%]   .fc-node-overlay[_ngcontent-%COMP%]{opacity:.25;-webkit-transition:opacity .2s;transition:opacity .2s}[_nghost-%COMP%]   .fc-selected[_nghost-%COMP%]   .fc-node-overlay[_ngcontent-%COMP%], .fc-selected   [_nghost-%COMP%]   .fc-node-overlay[_ngcontent-%COMP%]{opacity:.25}[_nghost-%COMP%]   .innerNode[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;min-width:100px;border-radius:5px;background-color:#f15b26;color:#fff;font-size:16px;pointer-events:none}[_nghost-%COMP%]   .innerNode[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 15px;text-align:center}"] });
        return DefaultFcNodeComponent;
    }(FcNodeComponent));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DefaultFcNodeComponent, [{
            type: core.Component,
            args: [{
                    selector: 'fc-default-node',
                    templateUrl: './default-node.component.html',
                    styleUrls: ['./default-node.component.scss']
                }]
        }], function () { return []; }, null); })();

    var NgxFlowchartModule = /** @class */ (function () {
        function NgxFlowchartModule() {
        }
        NgxFlowchartModule.ɵmod = core["ɵɵdefineNgModule"]({ type: NgxFlowchartModule });
        NgxFlowchartModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function NgxFlowchartModule_Factory(t) { return new (t || NgxFlowchartModule)(); }, providers: [
                FcModelValidationService,
                FcEdgeDrawingService,
                {
                    provide: FC_NODE_COMPONENT_CONFIG,
                    useValue: {
                        nodeComponentType: DefaultFcNodeComponent
                    }
                }
            ], imports: [[
                    common.CommonModule
                ]] });
        return NgxFlowchartModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](NgxFlowchartModule, { declarations: [NgxFlowchartComponent,
            FcMagnetDirective,
            FcConnectorDirective,
            FcNodeContainerComponent,
            DefaultFcNodeComponent], imports: [common.CommonModule], exports: [NgxFlowchartComponent,
            FcMagnetDirective,
            FcConnectorDirective,
            DefaultFcNodeComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](NgxFlowchartModule, [{
            type: core.NgModule,
            args: [{
                    entryComponents: [
                        DefaultFcNodeComponent
                    ],
                    declarations: [NgxFlowchartComponent,
                        FcMagnetDirective,
                        FcConnectorDirective,
                        FcNodeContainerComponent,
                        DefaultFcNodeComponent],
                    providers: [
                        FcModelValidationService,
                        FcEdgeDrawingService,
                        {
                            provide: FC_NODE_COMPONENT_CONFIG,
                            useValue: {
                                nodeComponentType: DefaultFcNodeComponent
                            }
                        }
                    ],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [NgxFlowchartComponent,
                        FcMagnetDirective,
                        FcConnectorDirective,
                        DefaultFcNodeComponent]
                }]
        }], null, null); })();

    exports.DefaultFcNodeComponent = DefaultFcNodeComponent;
    exports.FC_NODE_COMPONENT_CONFIG = FC_NODE_COMPONENT_CONFIG;
    exports.FcConnectorDirective = FcConnectorDirective;
    exports.FcMagnetDirective = FcMagnetDirective;
    exports.FcNodeComponent = FcNodeComponent;
    exports.FlowchartConstants = FlowchartConstants;
    exports.ModelvalidationError = ModelvalidationError;
    exports.NgxFlowchartComponent = NgxFlowchartComponent;
    exports.NgxFlowchartModule = NgxFlowchartModule;
    exports.fcTopSort = fcTopSort;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-flowchart.umd.js.map
