import * as tslib_1 from "tslib";
import { fromEventPattern } from 'rxjs';
export function createMVCEventObservable(array) {
    var eventNames = ['insert_at', 'remove_at', 'set_at'];
    return fromEventPattern(function (handler) { return eventNames.map(function (evName) { return array.addListener(evName, function (index, previous) { return handler.apply(array, [{ 'newArr': array.getArray(), evName: evName, index: index, previous: previous }]); }); }); }, function (_handler, evListeners) { return evListeners.forEach(function (evListener) { return evListener.remove(); }); });
}
var MvcArrayMock = /** @class */ (function () {
    function MvcArrayMock() {
        this.vals = [];
        this.listeners = {
            'remove_at': [],
            'insert_at': [],
            'set_at': [],
        };
    }
    MvcArrayMock.prototype.clear = function () {
        for (var i = this.vals.length - 1; i >= 0; i--) {
            this.removeAt(i);
        }
    };
    MvcArrayMock.prototype.getArray = function () {
        return tslib_1.__spread(this.vals);
    };
    MvcArrayMock.prototype.getAt = function (i) {
        return this.vals[i];
    };
    MvcArrayMock.prototype.getLength = function () {
        return this.vals.length;
    };
    MvcArrayMock.prototype.insertAt = function (i, elem) {
        this.vals.splice(i, 0, elem);
        this.listeners.insert_at.map(function (listener) { return listener(i); });
    };
    MvcArrayMock.prototype.pop = function () {
        var _this = this;
        var deleted = this.vals.pop();
        this.listeners.remove_at.map(function (listener) { return listener(_this.vals.length, deleted); });
        return deleted;
    };
    MvcArrayMock.prototype.push = function (elem) {
        var _this = this;
        this.vals.push(elem);
        this.listeners.insert_at.map(function (listener) { return listener(_this.vals.length - 1); });
        return this.vals.length;
    };
    MvcArrayMock.prototype.removeAt = function (i) {
        var deleted = this.vals.splice(i, 1)[0];
        this.listeners.remove_at.map(function (listener) { return listener(i, deleted); });
        return deleted;
    };
    MvcArrayMock.prototype.setAt = function (i, elem) {
        var deleted = this.vals[i];
        this.vals[i] = elem;
        this.listeners.set_at.map(function (listener) { return listener(i, deleted); });
    };
    MvcArrayMock.prototype.forEach = function (callback) {
        this.vals.forEach(callback);
    };
    MvcArrayMock.prototype.addListener = function (eventName, handler) {
        var listenerArr = this.listeners[eventName];
        listenerArr.push(handler);
        return {
            remove: function () {
                listenerArr.splice(listenerArr.indexOf(handler), 1);
            },
        };
    };
    return MvcArrayMock;
}());
export { MvcArrayMock };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXZjYXJyYXktdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdtL2NvcmUvIiwic291cmNlcyI6WyJ1dGlscy9tdmNhcnJheS11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFjLE1BQU0sTUFBTSxDQUFDO0FBR3BELE1BQU0sVUFBVSx3QkFBd0IsQ0FBSSxLQUFrQjtJQUM1RCxJQUFNLFVBQVUsR0FBRyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEQsT0FBTyxnQkFBZ0IsQ0FDckIsVUFBQyxPQUFpQixJQUFLLE9BQUEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUN0RSxVQUFDLEtBQWEsRUFBRSxRQUFZLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFFLEVBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxRQUFRLFVBQUEsRUFBZ0IsQ0FBQyxDQUFDLEVBQTdGLENBQTZGLENBQUMsRUFEakYsQ0FDaUYsQ0FBQyxFQUQzRyxDQUMyRyxFQUNsSSxVQUFDLFFBQWtCLEVBQUUsV0FBZ0MsSUFBSyxPQUFBLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQW5CLENBQW1CLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDO0FBQ3RILENBQUM7QUFXRDtJQUFBO1FBQ1UsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FLYjtZQUNGLFdBQVcsRUFBRSxFQUFnQjtZQUM3QixXQUFXLEVBQUUsRUFBZ0I7WUFDN0IsUUFBUSxFQUFFLEVBQWdCO1NBQzNCLENBQUM7SUFtREosQ0FBQztJQWxEQyw0QkFBSyxHQUFMO1FBQ0Us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QUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTztZQUNILE1BQU0sRUFBRTtnQkFDSixXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztTQUNKLENBQUM7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBOURELElBOERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUV2ZW50UGF0dGVybiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWFwc0V2ZW50TGlzdGVuZXIsIE1WQ0FycmF5IH0gZnJvbSAnLi4vc2VydmljZXMvZ29vZ2xlLW1hcHMtdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTVZDRXZlbnRPYnNlcnZhYmxlPFQ+KGFycmF5OiBNVkNBcnJheTxUPik6IE9ic2VydmFibGU8TVZDRXZlbnQ8VD4+e1xuICBjb25zdCBldmVudE5hbWVzID0gWydpbnNlcnRfYXQnLCAncmVtb3ZlX2F0JywgJ3NldF9hdCddO1xuICByZXR1cm4gZnJvbUV2ZW50UGF0dGVybihcbiAgICAoaGFuZGxlcjogRnVuY3Rpb24pID0+IGV2ZW50TmFtZXMubWFwKGV2TmFtZSA9PiBhcnJheS5hZGRMaXN0ZW5lcihldk5hbWUsXG4gICAgICAoaW5kZXg6IG51bWJlciwgcHJldmlvdXM/OiBUKSA9PiBoYW5kbGVyLmFwcGx5KGFycmF5LCBbIHsnbmV3QXJyJzogYXJyYXkuZ2V0QXJyYXkoKSwgZXZOYW1lLCBpbmRleCwgcHJldmlvdXN9IGFzIE1WQ0V2ZW50PFQ+XSkpKSxcbiAgICAoX2hhbmRsZXI6IEZ1bmN0aW9uLCBldkxpc3RlbmVyczogTWFwc0V2ZW50TGlzdGVuZXJbXSkgPT4gZXZMaXN0ZW5lcnMuZm9yRWFjaChldkxpc3RlbmVyID0+IGV2TGlzdGVuZXIucmVtb3ZlKCkpKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNVkNFdmVudDxUPiB7XG4gIG5ld0FycjogVFtdO1xuICBldk5hbWU6IE12Y0V2ZW50VHlwZTtcbiAgaW5kZXg6IG51bWJlcjtcbiAgcHJldmlvdXM/OiBUO1xufVxuXG5leHBvcnQgdHlwZSBNdmNFdmVudFR5cGUgPSAnaW5zZXJ0X2F0JyB8ICdyZW1vdmVfYXQnIHwgJ3NldF9hdCc7XG5cbmV4cG9ydCBjbGFzcyBNdmNBcnJheU1vY2s8VD4gaW1wbGVtZW50cyBNVkNBcnJheTxUPiB7XG4gIHByaXZhdGUgdmFsczogVFtdID0gW107XG4gIHByaXZhdGUgbGlzdGVuZXJzOiB7XG4gICAgJ3JlbW92ZV9hdCc6IEZ1bmN0aW9uW107XG4gICAgJ2luc2VydF9hdCc6IEZ1bmN0aW9uW107XG4gICAgJ3NldF9hdCc6IEZ1bmN0aW9uW107XG4gICAgW2tleTogc3RyaW5nXTogRnVuY3Rpb25bXTtcbiAgfSA9IHtcbiAgICAncmVtb3ZlX2F0JzogW10gYXMgRnVuY3Rpb25bXSxcbiAgICAnaW5zZXJ0X2F0JzogW10gYXMgRnVuY3Rpb25bXSxcbiAgICAnc2V0X2F0JzogW10gYXMgRnVuY3Rpb25bXSxcbiAgfTtcbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMudmFscy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB0aGlzLnJlbW92ZUF0KGkpO1xuICAgIH1cbiAgfVxuICBnZXRBcnJheSgpOiBUW10ge1xuICAgIHJldHVybiBbLi4udGhpcy52YWxzXTtcbiAgfVxuICBnZXRBdChpOiBudW1iZXIpOiBUIHtcbiAgICByZXR1cm4gdGhpcy52YWxzW2ldO1xuICB9XG4gIGdldExlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZhbHMubGVuZ3RoO1xuICB9XG4gIGluc2VydEF0KGk6IG51bWJlciwgZWxlbTogVCk6IHZvaWQge1xuICAgIHRoaXMudmFscy5zcGxpY2UoaSwgMCwgZWxlbSk7XG4gICAgdGhpcy5saXN0ZW5lcnMuaW5zZXJ0X2F0Lm1hcChsaXN0ZW5lciA9PiBsaXN0ZW5lcihpKSk7XG4gIH1cbiAgcG9wKCk6IFQge1xuICAgIGNvbnN0IGRlbGV0ZWQgPSB0aGlzLnZhbHMucG9wKCk7XG4gICAgdGhpcy5saXN0ZW5lcnMucmVtb3ZlX2F0Lm1hcChsaXN0ZW5lciA9PiBsaXN0ZW5lcih0aGlzLnZhbHMubGVuZ3RoLCBkZWxldGVkKSk7XG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cbiAgcHVzaChlbGVtOiBUKTogbnVtYmVyIHtcbiAgICB0aGlzLnZhbHMucHVzaChlbGVtKTtcbiAgICB0aGlzLmxpc3RlbmVycy5pbnNlcnRfYXQubWFwKGxpc3RlbmVyID0+IGxpc3RlbmVyKHRoaXMudmFscy5sZW5ndGggLSAxKSk7XG4gICAgcmV0dXJuIHRoaXMudmFscy5sZW5ndGg7XG4gIH1cbiAgcmVtb3ZlQXQoaTogbnVtYmVyKTogVCB7XG4gICAgY29uc3QgZGVsZXRlZCA9IHRoaXMudmFscy5zcGxpY2UoaSwgMSlbMF07XG4gICAgdGhpcy5saXN0ZW5lcnMucmVtb3ZlX2F0Lm1hcChsaXN0ZW5lciA9PiBsaXN0ZW5lcihpLCBkZWxldGVkKSk7XG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cbiAgc2V0QXQoaTogbnVtYmVyLCBlbGVtOiBUKTogdm9pZCB7XG4gICAgY29uc3QgZGVsZXRlZCA9IHRoaXMudmFsc1tpXTtcbiAgICB0aGlzLnZhbHNbaV0gPSBlbGVtO1xuICAgIHRoaXMubGlzdGVuZXJzLnNldF9hdC5tYXAobGlzdGVuZXIgPT4gbGlzdGVuZXIoaSwgZGVsZXRlZCkpO1xuICB9XG4gIGZvckVhY2goY2FsbGJhY2s6IChlbGVtOiBULCBpOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cbiAgYWRkTGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogTWFwc0V2ZW50TGlzdGVuZXIge1xuICAgIGNvbnN0IGxpc3RlbmVyQXJyID0gdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXTtcbiAgICBsaXN0ZW5lckFyci5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZTogKCkgPT4ge1xuICAgICAgICAgICAgbGlzdGVuZXJBcnIuc3BsaWNlKGxpc3RlbmVyQXJyLmluZGV4T2YoaGFuZGxlciksIDEpO1xuICAgICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==