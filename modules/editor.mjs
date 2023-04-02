import {basicSetup, EditorView} from "codemirror";
import {python} from "@codemirror/lang-python"

export let editors = {};

document.querySelectorAll(".editor").forEach((elem) => {
    let source = elem.innerHTML;
    elem.innerHTML = "";
    editors[elem.id] = new EditorView({
        extensions: [basicSetup, python()],
        parent: elem,
        doc: source
    });

})