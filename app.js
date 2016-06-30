(function () {

    var ssns = {};

    var uniques = data.filter(function(item) {
        if (ssns[item.ssn]) {
            return false;
        }
        else {
            ssns[item.ssn] = item;
            return true;
        }
    });
  

    console.log(uniques);

})();