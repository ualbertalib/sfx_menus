//---------------------------------------------------------
function openWin(obj) {
//---------------------------------------------------------
// Responds to a user clicking on a target-service
//---------------------------------------------------------
    var options = "toolbar=yes,location=yes,directories=yes,buttons=yes,status=yes";
        options += ",menubar=yes,scrollbars=yes,resizable=yes,width=460,height=480";
    var newwin = window.open('',"newwin",options);
    if (navigator.appName.indexOf("xplorer")<0) newwin.focus();
}

//---------------------------------------------------------
function set_user_profile(){
//---------------------------------------------------------
// Responds to a user selecting a language
//---------------------------------------------------------
    var lng = window.document.lng_form.language.value;

    var nextyear=new Date();
    nextyear.setFullYear(nextyear.getFullYear()+1);
    var cookie_name = 'user-Profile';

    // default if there is no cookie already set
    var new_cookie = cookie_name + "=+++" + lng + ";path=/;expires=" + nextyear.toGMTString();

    // check if we need to modify an existing cookie
    var start = document.cookie.indexOf(cookie_name + '=');
    if (start != -1) {
        //ignore 'name=' portion
        start += cookie_name.length + 1;
        // find end of value
        var end = document.cookie.indexOf(';', start);
        if (end == -1) end = document.cookie.length;
        var cookie_val = unescape(document.cookie.substring(start, end));
        // change language portion
        var values = cookie_val.split('+');
        values[3] = lng;
        // set new cookie value
        new_cookie = cookie_name + "=" + values.join('+') + ";path=/;expires=" + nextyear.toGMTString();
    }

    document.cookie = new_cookie;
    // might cause problems with POST (warning popup)
    window.location.reload();
}

function toggleBasic() {
    var basicBodyStyle = getStyleObject("basicBody");
    var basicDownArrowStyle = getStyleObject("basicDownArrow");
    var basicUpArrowStyle = getStyleObject("basicUpArrow");
    if ((basicBodyStyle.visibility == "hidden") || (basicBodyStyle.display == "none")) {
        basicBodyStyle.visibility == "";
        basicBodyStyle.display = "";
        basicDownArrowStyle.visibility = "hidden";
        basicDownArrowStyle.display = "none";
        basicUpArrowStyle.visibility = "";
        basicUpArrowStyle.display = "";
    }
    else {
        basicBodyStyle.visibility == "hidden";
        basicBodyStyle.display = "none";
        basicDownArrowStyle.visibility = "";
        basicDownArrowStyle.display = "";
        basicUpArrowStyle.visibility = "hidden";
        basicUpArrowStyle.display = "none";
    }
}

function toggleAdvanced() {
    var advancedBodyStyle = getStyleObject("advancedBody");
    var advancedDownArrowStyle = getStyleObject("advancedDownArrow");
    var advancedUpArrowStyle = getStyleObject("advancedUpArrow");
    if ((advancedBodyStyle.visibility == "hidden") || (advancedBodyStyle.display == "none")) {
        advancedBodyStyle.visibility == "";
        advancedBodyStyle.display = "";
        advancedDownArrowStyle.visibility = "hidden";
        advancedDownArrowStyle.display = "none";
        advancedUpArrowStyle.visibility = "";
        advancedUpArrowStyle.display = "";
    }
    else {
        advancedBodyStyle.visibility == "hidden";
        advancedBodyStyle.display = "none";
        advancedDownArrowStyle.visibility = "";
        advancedDownArrowStyle.display = "";
        advancedUpArrowStyle.visibility = "hidden";
        advancedUpArrowStyle.display = "none";
    }
}


//---------------------------------------------------------
function getStyleObject(objectId) {
//---------------------------------------------------------
// Gets an object's style object by its id.
//---------------------------------------------------------
    if(document.getElementById && document.getElementById(objectId)) {
        return document.getElementById(objectId).style;
    }
    else if (document.all && document.all(objectId)) {
        return document.all(objectId).style;
    }
    else if (document.layers && document.layers[objectId]) {
        return document.layers[objectId];
    }
    else {
        return false;
    }
}

//---------------------------------------------------------
function changeObjectVisibility(objectId, newVisibility) {
//---------------------------------------------------------
// Changes an object's visibility by its id.
//---------------------------------------------------------
    var styleObject = getStyleObject(objectId);
    if(styleObject) {
      styleObject.visibility = newVisibility;
      return true;
    }
    else {
      return false;
    }
}

//---------------------------------------------------------
function moveObject(objectId, newXCoordinate, newYCoordinate) {
//---------------------------------------------------------
// Changes an object's position given its id and the new
// coordinates.
//---------------------------------------------------------
    // get a reference to the cross-browser style object and make sure the object exists
    var styleObject = getStyleObject(objectId);
    if(styleObject) {
    styleObject.left = newXCoordinate;
    styleObject.top = newYCoordinate;
    return true;
    } else {
    // we couldn't find the object, so we can't very well move it
    return false;
    }
} // moveObject

