//ES5
var create_gizmo = function(spec){
    var that = {};
    that.id = spec.id,
    that.somethingElse = spec.whatever,
    that.myFunction = function(somethingElse){
        return 1;
    }
    return that;
}

var create_hoozit = function(spec){
    var that = create_gizmo(spec);
    that.newId = spec.id += 10;
    that.newFunction = function(){
        return newId;
    }
    return that;
}

//ES6+

var create_hoozit = function(spec){
    let member = spec.member;
    let {otherMember} = spec;
    const other = create_gizmo(spec);
    const method = function(){
        return 1;
    }
    return Object.freeze({
        method,
        other
    });
}
