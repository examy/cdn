try {
    if (document.all && !document.addEventListener) {
        document.createElement('hot-table');
        document.createElement('hot-column');
        document.createElement('hot-autocomplete');
    }
    angular.module('OraSchool');
    if (typeof Handsontable !== 'undefined')
        Handsontable.hooks.add('afterContextMenuShow', function () {
           try{
               Handsontable.EventManager.isHotTableEnv = false;
           }catch (e) {
               
           }
        });
    (function () {
        function autoCompleteFactory($parse) {
            return {
                parseAutoComplete: function (column, dataSet, propertyOnly) {
                    column.source = function (query, process) {
                        var row = this.instance.getSelected()[0];
                        var source = [];
                        var data = dataSet[row];
                        if (!data) {
                            return;
                        }
                        var options = column.optionList;
                        if (!options || !options.object) {
                            return;
                        }
                        if (angular.isArray(options.object)) {
                            source = options.object;
                        } else {
                            var paramObject = $parse(options.object)(data);
                            if (angular.isArray(paramObject)) {
                                if (propertyOnly) {
                                    for (var i = 0, length = paramObject.length; i < length; i++) {
                                        var item = paramObject[i][options.property];
                                        if (item !== null && item !== undefined) {
                                            source.push(item);
                                        }
                                    }
                                } else {
                                    source = paramObject;
                                }
                            } else {
                                source = paramObject;
                            }
                        }
                        process(source);
                    };
                }
            };
        }
        autoCompleteFactory.$inject = ['$parse'];
        angular.module('OraSchool').factory('autoCompleteFactory', autoCompleteFactory);
    }
    ());
    (function () {
        function hotRegisterer() {
            var instances = {};
            return {
                getInstance: function (id) {
                    return instances[id];
                },
                registerInstance: function (id, instance) {
                    instances[id] = instance;
                },
                removeInstance: function (id) {
                    instances[id] = void 0;
                }
            };
        }
        hotRegisterer.$inject = [];
        angular.module('OraSchool').factory('hotRegisterer', hotRegisterer);
    }
    ());
    (function () {
        function hyphenate(string) {
            return string.replace(/[A-Z]/g, function (match) {
                return ('-' + match.charAt(0).toLowerCase());
            });
        }
        function camelCase(string) {
            return string.replace(/-\D/g, function (match) {
                return match.charAt(1).toUpperCase();
            });
        }
        function ucFirst(string) {
            return string.substr(0, 1).toUpperCase() + string.substr(1, string.length - 1);
        }
        function settingFactory(hotRegisterer) {
            return {
                containerClassName: 'handsontable-container',
                initializeHandsontable: function (element, htSettings) {
                    var container = document.createElement('div'),
                        hot;
                    container.className = this.containerClassName;
                    if (htSettings.hotId) {
                        container.id = htSettings.hotId;
                    }
                    htSettings.licenseKey='non-commercial-and-evaluation';
                    htSettings.locale= 'ar-Ar';
                    // htSettings.layoutDirection= 'rtl';

                        element[0].appendChild(container);
                    hot = new Handsontable(container, htSettings);
                    if (htSettings.hotId) {
                        hotRegisterer.registerInstance(htSettings.hotId, hot);
                    }
                    return hot;
                },
                updateHandsontableSettings: function (instance, settings) {
                    if (instance) {
                        instance.updateSettings(settings);
                    }
                },
                renderHandsontable: function (instance) {
                    if (instance) {
                        instance.render();
                    }
                },
                mergeSettingsFromScope: function (settings, scope) {
                    var
                        scopeOptions = angular.extend({}, scope),
                        htOptions,
                        i,
                        length;
                    settings = settings || {};
                    angular.extend(scopeOptions, scope.settings || {});
                    htOptions = this.getAvailableSettings();
                    for (i = 0, length = htOptions.length; i < length; i++) {
                        if (typeof scopeOptions[htOptions[i]] !== 'undefined') {
                            settings[htOptions[i]] = scopeOptions[htOptions[i]];
                        }
                    }
                    return settings;
                },
                mergeHooksFromScope: function (settings, scope) {
                    var
                        scopeOptions = angular.extend({}, scope),
                        htHooks,
                        i,
                        length,
                        attribute;
                    settings = settings || {};
                    angular.extend(scopeOptions, scope.settings || {});
                    htHooks = this.getAvailableHooks();
                    for (i = 0, length = htHooks.length; i < length; i++) {
                        attribute = 'on' + ucFirst(htHooks[i]);
                        if (typeof scopeOptions[htHooks[i]] === 'function' || typeof scopeOptions[attribute] === 'function') {
                            settings[htHooks[i]] = scopeOptions[htHooks[i]] || scopeOptions[attribute];
                        }
                    }
                    return settings;
                },
                trimScopeDefinitionAccordingToAttrs: function (scopeDefinition, attrs) {
                    for (var i in scopeDefinition) {
                        if (scopeDefinition.hasOwnProperty(i) && attrs[i] === void 0 && attrs[scopeDefinition[i].substr(1, scopeDefinition[i].length)] === void 0) {
                            delete scopeDefinition[i];
                        }
                    }
                    return scopeDefinition;
                },
                getTableScopeDefinition: function () {
                    var scopeDefinition = {};
                    this.applyAvailableSettingsScopeDef(scopeDefinition);
                    this.applyAvailableHooksScopeDef(scopeDefinition);
                    scopeDefinition.datarows = '=';
                    scopeDefinition.dataschema = '=';
                    scopeDefinition.observeDomVisibility = '=';
                    return scopeDefinition;
                },
                getColumnScopeDefinition: function () {
                    var scopeDefinition = {};
                    this.applyAvailableSettingsScopeDef(scopeDefinition);
                    scopeDefinition.data = '@';
                    return scopeDefinition;
                },
                applyAvailableSettingsScopeDef: function (scopeDefinition) {
                    var options,
                        i,
                        length;
                    options = this.getAvailableSettings();
                    for (i = 0, length = options.length; i < length; i++) {
                        scopeDefinition[options[i]] = '=';
                    }
                    return scopeDefinition;
                },
                applyAvailableHooksScopeDef: function (scopeDefinition) {
                    var options,
                        i,
                        length;
                    options = this.getAvailableHooks();
                    for (i = 0, length = options.length; i < length; i++) {
                        scopeDefinition[options[i]] = '=on' + ucFirst(options[i]);
                    }
                    return scopeDefinition;
                },
                getAvailableSettings: function (hyphenateStyle) {
                    if (typeof Handsontable !== 'undefined') {
                        var settings = Object.keys(Handsontable.DefaultSettings);
                        if (settings.indexOf('contextMenuCopyPaste') === -1) {
                            settings.push('contextMenuCopyPaste');
                        }
                        if (settings.indexOf('handsontable') === -1) {
                            settings.push('handsontable');
                        }
                        if (settings.indexOf('settings') >= 0) {
                            settings.splice(settings.indexOf('settings'), 1);
                        }
                        if (hyphenateStyle) {
                            settings = settings.map(hyphenate);
                        }
                        return settings;
                    }
                    return {};
                },
                getAvailableHooks: function (hyphenateStyle) {
                    if (typeof Handsontable !== 'undefined') {
                        var settings = Handsontable.hooks.getRegistered();
                        if (hyphenateStyle) {
                            settings = settings.map(function (hook) {
                                return 'on-' + hyphenate(hook);
                            });
                        }
                        return settings;
                    }
                    return {};
                }
            };
        }
        settingFactory.$inject = ['hotRegisterer'];
        angular.module('OraSchool').factory('settingFactory', settingFactory);
    }
    ());
    (function () {
        function hotAutocomplete() {
            return {
                restrict: 'EA',
                scope: true,
                require: '^hotColumn',
                link: function (scope, element, attrs, controllerInstance) {
                    var options = attrs.datarows;
                    controllerInstance.setColumnOptionList(options);
                }
            };
        }
        hotAutocomplete.$inject = [];
        angular.module('OraSchool').directive('hotAutocomplete', hotAutocomplete);
    }
    ());
    (function () {
        function hotColumn(settingFactory) {
            return {
                restrict: 'EA',
                require: '^hotTable',
                scope: {},
                controller: ['$scope', function ($scope) {
                    this.setColumnOptionList = function (options) {
                        if (!$scope.column) {
                            $scope.column = {};
                        }
                        var optionList = {};
                        var match = options.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/);
                        if (match) {
                            optionList.property = match[1];
                            optionList.object = match[2];
                        } else {
                            optionList.object = options.split(',');
                        }
                        $scope.column.optionList = optionList;
                    };
                }
                ],
                compile: function (tElement, tAttrs) {
                    var _this = this;
                    this.scope = settingFactory.trimScopeDefinitionAccordingToAttrs(settingFactory.getColumnScopeDefinition(), tAttrs);
                    angular.forEach(Object.keys(this.scope), function (key) {
                        _this.$$isolateBindings[key] = {
                            attrName: key,
                            collection: false,
                            mode: key === 'data' ? '@' : '=',
                            optional: false
                        };
                    });
                    return function (scope, element, attrs, controllerInstance) {
                        var column = {};
                        angular.forEach(Object.keys(attrs), function (key) {
                            if (key.charAt(0) !== '$' && attrs[key] === '') {
                                column[key] = true;
                            }
                        });
                        settingFactory.mergeSettingsFromScope(column, scope);
                        if (!scope.column) {
                            scope.column = {};
                        }
                        angular.extend(scope.column, column);
                        controllerInstance.setColumnSetting(scope.column);
                        scope.$on('$destroy', function () {
                            controllerInstance.removeColumnSetting(scope.column);
                        });
                    };
                }
            };
        }
        hotColumn.$inject = ['settingFactory'];
        angular.module('OraSchool').directive('hotColumn', hotColumn);
    }
    ());
    (function () {
        function hotTable(settingFactory, autoCompleteFactory, $rootScope, $parse) {
            return {
                restrict: 'EA',
                scope: {},
                priority: -400,
                controller: ['$scope', function ($scope) {
                    this.setColumnSetting = function (column) {
                        if (!$scope.htSettings) {
                            $scope.htSettings = {};
                        }
                        if (!$scope.htSettings.columns) {
                            $scope.htSettings.columns = [];
                        }
                        $scope.htSettings.columns.push(column);
                        settingFactory.updateHandsontableSettings($scope.hotInstance, $scope.htSettings);
                    };
                    this.removeColumnSetting = function (column) {
                        if ($scope.htSettings.columns.indexOf(column) > -1) {
                            $scope.htSettings.columns.splice($scope.htSettings.columns.indexOf(column), 1);
                            settingFactory.updateHandsontableSettings($scope.hotInstance, $scope.htSettings);
                        }
                    };
                }
                ],
                compile: function (tElement, tAttrs) {
                    var _this = this,
                        bindingsKeys;
                    this.scope = settingFactory.trimScopeDefinitionAccordingToAttrs(settingFactory.getTableScopeDefinition(), tAttrs);
                    bindingsKeys = Object.keys(this.scope);
                    angular.forEach(bindingsKeys, function (key) {
                        var mode = _this.scope[key].charAt(0);
                        _this.$$isolateBindings[key] = {
                            attrName: _this.scope[key].length > 1 ? _this.scope[key].substr(1, _this.scope[key].length) : key,
                            collection: key === 'datarows',
                            mode: mode,
                            optional: false
                        };
                    });
                    return function (scope, element, attrs) {
                        scope.settings = $parse(attrs.settings)(scope.$parent);
                        if (!scope.htSettings) {
                            scope.htSettings = {};
                        }
                        angular.forEach(Object.keys(attrs), function (key) {
                            if (key.charAt(0) !== '$' && attrs[key] === '') {
                                scope.htSettings[key] = true;
                            }
                        });
                        settingFactory.mergeSettingsFromScope(scope.htSettings, scope);
                        settingFactory.mergeHooksFromScope(scope.htSettings, scope);
                        if (!scope.htSettings.data) {
                            scope.htSettings.data = scope.datarows;
                        }
                        scope.htSettings.dataSchema = scope.dataschema;
                        scope.htSettings.hotId = attrs.hotId;
                        scope.htSettings.observeDOMVisibility = scope.observeDomVisibility;
                        if (scope.htSettings.columns) {
                            for (var i = 0, length = scope.htSettings.columns.length; i < length; i++) {
                                var column = scope.htSettings.columns[i];
                                if (column.type !== 'autocomplete') {
                                    continue;
                                }
                                if (!column.optionList) {
                                    continue;
                                }
                                if (typeof column.optionList === 'string') {
                                    var optionList = {};
                                    var match = column.optionList.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/);
                                    if (match) {
                                        optionList.property = match[1];
                                        optionList.object = match[2];
                                    } else {
                                        optionList.object = optionList;
                                    }
                                    column.optionList = optionList;
                                }
                                autoCompleteFactory.parseAutoComplete(column, scope.datarows, true);
                            }
                        }
                        var origAfterChange = scope.htSettings.afterChange;
                        scope.htSettings.afterChange = function () {
                            if (origAfterChange) {
                                origAfterChange.apply(this, arguments);
                            }
                            if (!$rootScope.$$phase) {
                                scope.$apply();
                            }
                        };
                        if (typeof Handsontable !== 'undefined') {
                            scope.hotInstance = settingFactory.initializeHandsontable(element, scope.htSettings);
                            angular.forEach(bindingsKeys, function (key) {
                                scope.$watch(key, function (newValue, oldValue) {
                                    if (newValue === void 0) {
                                        return;
                                    }
                                    if (key === 'datarows') {
                                        if (scope.hotInstance.getSettings().data === newValue) {
                                            settingFactory.renderHandsontable(scope.hotInstance);
                                        } else {
                                            scope.hotInstance.loadData(newValue);
                                            scope.htSettings.data = newValue;
                                        }
                                    } else if (newValue !== oldValue) {
                                        scope.htSettings[key] = newValue;
                                        settingFactory.updateHandsontableSettings(scope.hotInstance, scope.htSettings);
                                    }
                                }, ['datarows', 'columns', 'rowHeights', 'colWidths', 'rowHeaders', 'colHeaders'].indexOf(key) >= 0);
                            });
                            scope.$watch('datarows', function (newValue) {
                                if (newValue === void 0) {
                                    return;
                                }
                                if (scope.hotInstance.getSettings().data !== newValue) {
                                    scope.hotInstance.loadData(newValue);
                                }
                            });
                            scope.$watchCollection('datarows', function (newValue, oldValue) {
                                if (oldValue && oldValue.length === scope.htSettings.minSpareRows && newValue.length !== scope.htSettings.minSpareRows) {
                                    scope.htSettings.data = scope.datarows;
                                    settingFactory.updateHandsontableSettings(scope.hotInstance, scope.htSettings);
                                }
                            });
                        }
                    };
                }
            };
        }
        hotTable.$inject = ['settingFactory', 'autoCompleteFactory', '$rootScope', '$parse'];
        angular.module('OraSchool').directive('hotTable', hotTable);
    }
    ());
} catch (x) {}
