async function fillMarkdown(e) {
    let policy = await getPolicy(getParameterByName("policy"));
    if (policy) {
        let elem = document.getElementById(e)
        elem.innerHTML = marked(policy);
    }
}

async function getPolicy(policy) {
    let policyPath = "policies/" + policy + ".md";
    let text = (await (await fetch(policyPath)).text())
    return text;
}

function getParameterByName(e, n) {
    n || (n = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
    var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(n);
    return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
}