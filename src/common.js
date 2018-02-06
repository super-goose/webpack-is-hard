export var DefaultZip = (function () {
    let _thisZip = '00000';

    function _setZip(zip) {
        _thisZip = zip;
    }

    function _getZip() {
        return _thisZip;
    }

    return {
        Set: _setZip,
        Get: _getZip,
    };
})();

export var Radius = 1000;