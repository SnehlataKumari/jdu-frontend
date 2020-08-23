"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
exports.__esModule = true;
exports.UsersPageComponent = void 0;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var lodash_1 = require("lodash");
var create_user_form_component_1 = require("../create-user-form/create-user-form.component");
var upload_users_csv_form_component_1 = require("../upload-users-csv-form/upload-users-csv-form.component");
var forms_1 = require("@angular/forms");
var lodash_2 = require("lodash");
var constants_1 = require("src/app/constants");
var UsersPageComponent = /** @class */ (function () {
    function UsersPageComponent(resourceService, authService, dialog) {
        this.resourceService = resourceService;
        this.authService = authService;
        this.dialog = dialog;
        this.resourceUrl = '/users';
        this.branchList = constants_1.BRANCH_LIST;
        this.designationList = constants_1.DESIGNATION_LIST;
        this.districtMap = constants_1.DISTRICT_VIDHAN_MAP;
        this.districtList = Reflect.ownKeys(constants_1.DISTRICT_VIDHAN_MAP);
        this.vidhanSabhaList = [];
        this.nameFilter = new forms_1.FormControl('');
        this.roleFilter = new forms_1.FormControl('');
        this.branchFilter = new forms_1.FormControl('');
        this.designationFilter = new forms_1.FormControl('');
        this.districtFilter = new forms_1.FormControl('');
        this.vidhanSabhaFilter = new forms_1.FormControl('');
        this.filterValues = {
            name: '',
            role: '',
            branch: '',
            designation: '',
            district: '',
            vidhanSabha: ''
        };
    }
    UsersPageComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loggedInUserRole, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loggedInUserRole = this.authService.getLogginedUserRole();
                        this.displayRoles = loggedInUserRole === 'SUPER_ADMIN' ? lodash_2.pick(constants_1.USER_ROLES, ['ADMIN']) : lodash_2.pick(constants_1.USER_ROLES, lodash_1.filter(Reflect.ownKeys(constants_1.USER_ROLES), function (role) { return !(role === 'ADMIN' || role === 'SUPER_ADMIN'); }));
                        this.keys = Reflect.ownKeys(this.displayRoles);
                        return [4 /*yield*/, this.resourceService.fetchAll(this.resourceUrl).toPromise()];
                    case 1:
                        list = _a.sent();
                        this.bindFilterListeners();
                        this.displayedColumns = [
                            'name',
                            'branch',
                            'designation',
                            'district',
                            'vidhansabha',
                            'userName',
                            'email',
                            'mobileNumber',
                            'role',
                            'createdAt',
                            'updatedAt',
                            'action'
                        ];
                        this.resetList(list['data']);
                        this.dataSource.filterPredicate = this.createFilter();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersPageComponent.prototype.bindFilterListeners = function () {
        var _this = this;
        this.nameFilter.valueChanges
            .subscribe(function (name) {
            _this.filterValues.name = name || '';
            _this.dataSource.filter = JSON.stringify(_this.filterValues);
        });
        this.roleFilter.valueChanges
            .subscribe(function (id) {
            _this.filterValues.role = id || '';
            _this.dataSource.filter = JSON.stringify(_this.filterValues);
        });
        this.branchFilter.valueChanges
            .subscribe(function (branch) {
            _this.filterValues.branch = branch || '';
            _this.dataSource.filter = JSON.stringify(_this.filterValues);
        });
        this.designationFilter.valueChanges
            .subscribe(function (designation) {
            _this.filterValues.designation = designation || '';
            _this.dataSource.filter = JSON.stringify(_this.filterValues);
        });
        this.districtFilter.valueChanges
            .subscribe(function (district) {
            _this.filterValues.district = district || '';
            _this.vidhanSabhaList = _this.districtMap[district].map(function (i) { return i.Vidhansabha; });
            _this.dataSource.filter = JSON.stringify(_this.filterValues);
        });
        this.vidhanSabhaFilter.valueChanges
            .subscribe(function (vidhanSabha) {
            _this.filterValues.vidhanSabha = vidhanSabha || '';
            _this.dataSource.filter = JSON.stringify(_this.filterValues);
        });
    };
    UsersPageComponent.prototype.createFilter = function () {
        var filterFunction = function (data, filter) {
            var searchTerms = JSON.parse(filter);
            return data.name.toLowerCase().indexOf(searchTerms.name.toLowerCase()) !== -1
                && data.role.toString().toLowerCase().indexOf(searchTerms.role.toLowerCase()) !== -1
                && data.branch.toLowerCase().indexOf(searchTerms.branch.toLowerCase()) !== -1
                && data.designation.toLowerCase().indexOf(searchTerms.designation.toLowerCase()) !== -1
                && data.district.toLowerCase().indexOf(searchTerms.district.toLowerCase()) !== -1
                && data.vidhansabha.toLowerCase().indexOf(searchTerms.vidhanSabha.toLowerCase()) !== -1;
        };
        return filterFunction;
    };
    UsersPageComponent.prototype.reFetchResourceList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resourceService.fetchAll(this.resourceUrl).toPromise()];
                    case 1:
                        list = _a.sent();
                        this.resetList(list['data']);
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersPageComponent.prototype.resetList = function (users) {
        var filteredUsers = this.filterBasedOnRole(users);
        this.dataSource = new table_1.MatTableDataSource(filteredUsers);
        this.dataSource.paginator = this.paginator;
    };
    UsersPageComponent.prototype.filterBasedOnRole = function (users) {
        var logginedUserRole = this.authService.getLogginedUserRole();
        var filterOption = logginedUserRole === 'SUPER_ADMIN'
            ? { 'role': 'ADMIN' }
            : function (user) { return !(user.role == 'ADMIN' || user.role == 'SUPER_ADMIN'); };
        // return filter(users, );
        return lodash_1.filter(users, filterOption);
    };
    UsersPageComponent.prototype.getClassName = function (classId) {
        console.log(this.classMap[classId]);
        return this.classMap.get(classId) || 'Class has been deleted';
    };
    UsersPageComponent.prototype.onUploadCSV = function () {
        var _this = this;
        var dialogRef = this.dialog.open(upload_users_csv_form_component_1.UploadUsersCsvFormComponent, {
            width: '600px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.reFetchResourceList();
        });
    };
    UsersPageComponent.prototype.openDialogue = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(create_user_form_component_1.CreateUserFormComponent, {
            width: '600px',
            data: {
                resourceUrl: this.resourceUrl,
                classList: this.classList,
                user: user
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.reFetchResourceList();
        });
    };
    UsersPageComponent.prototype.onAddResource = function () {
        var user = {
            _id: '',
            name: '',
            mobileNumber: '',
            "class": '',
            'branch': '',
            'designation': '',
            'district': '',
            'vidhansabha': '',
            isSubscribed: ''
        };
        this.openDialogue(user);
    };
    UsersPageComponent.prototype.onUpdate = function () {
        this.reFetchResourceList();
    };
    UsersPageComponent.prototype.onDelete = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resourceService["delete"](this.resourceUrl, resource).toPromise()];
                    case 1:
                        _a.sent();
                        this.reFetchResourceList();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersPageComponent.prototype.onEdit = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.openDialogue(element);
                return [2 /*return*/];
            });
        });
    };
    UsersPageComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        core_1.Input()
    ], UsersPageComponent.prototype, "resourceUrl");
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator, { static: true })
    ], UsersPageComponent.prototype, "paginator");
    UsersPageComponent = __decorate([
        core_1.Component({
            selector: 'app-users-page',
            templateUrl: './users-page.component.html',
            styleUrls: ['./users-page.component.scss']
        })
    ], UsersPageComponent);
    return UsersPageComponent;
}());
exports.UsersPageComponent = UsersPageComponent;
