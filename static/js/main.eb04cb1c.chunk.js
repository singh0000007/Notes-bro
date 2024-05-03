(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        11: function(e, t, n) {
            e.exports = n(20)
        },
        17: function(e, t, n) {},
        18: function(e, t, n) {},
        19: function(e, t, n) {},
        20: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                o = n.n(a),
                l = n(9),
                i = n.n(l),
                r = (n(17), n(10)),
                c = n(6),
                s = n(7),
                u = n(1),
                d = n(2),
                h = n(4),
                m = n(3),
                g = n(5),
                p = {
                    width: "100px",
                    height: "40px",
                    fontSize: "16px",
                    borderRadius: "4px",
                    backgroundColor: "#2C666E",
                    color: "white",
                    border: "0",
                    cursor: "pointer"
                },
                N = function(e) {
                    var t = e.text,
                        n = e.handleClick;
                    return o.a.createElement(a.Fragment, null, o.a.createElement("button", {
                        style: p,
                        onClick: n
                    }, t))
                },
                f = {
                    width: "100%",
                    border: "0",
                    height: "calc(100vh - 200px)",
                    padding: "20px",
                    background: "inherit",
                    color: "white",
                    fontSize: "16px",
                    outline: "none"
                },
                v = function(e) {
                    function t() {
                        var e, n;
                        Object(u.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l];
                        return (n = Object(h.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            note: {
                                title: "",
                                text: "",
                                date: (new Date).toDateString()
                            }
                        }, n.handleChange = function(e) {
                            n.setState({
                                note: Object(s.a)({}, n.state.note, Object(c.a)({}, e.target.name, e.target.value))
                            })
                        }, n.handleSave = function() {
                            "" !== n.state.note && n.props.handleSave(n.state.note), n.setState({
                                note: {
                                    title: "",
                                    text: ""
                                }
                            })
                        }, n
                    }
                    return Object(g.a)(t, e), Object(d.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.note;
                            return o.a.createElement("div", {
                                className: "edit-field"
                            }, o.a.createElement("h3", {
                                className: "notes-header"
                            }, "Write Note "), o.a.createElement("input", {
                                className: "title-input",
                                name: "title",
                                onChange: this.props.handleChange,
                                value: e.title,
                                placeholder: "Title"
                            }), o.a.createElement("textarea", {
                                style: f,
                                name: "text",
                                onChange: this.props.handleChange,
                                placeholder: "Write a note",
                                value: e.text
                            }), o.a.createElement(N, {
                                text: "Save",
                                handleClick: this.props.handleSave
                            }))
                        }
                    }]), t
                }(a.Component),
                b = function(e) {
                    function t() {
                        var e, n;
                        Object(u.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l];
                        return (n = Object(h.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(o)))).handleClick = function(e, t, a) {
                            n.props.handleNotesClick(e, t, a)
                        }, n
                    }
                    return Object(g.a)(t, e), Object(d.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.note,
                                a = t.id,
                                l = t.handleNoteDelete;
                            return o.a.createElement("div", {
                                onClick: function() {
                                    return e.handleClick(a, n.text, n.title)
                                },
                                className: "note"
                            }, o.a.createElement("h4", null, n.title), o.a.createElement("p", null, n.text), o.a.createElement("small", null, n.date), o.a.createElement("button", {
                                className: "button-delete",
                                onClick: function(e) {
                                    return l(n.id, e)
                                }
                            }, "\ud83d\uddd1"))
                        }
                    }]), t
                }(a.Component),
                C = function(e) {
                    function t() {
                        return Object(u.a)(this, t), Object(h.a)(this, Object(m.a)(t).apply(this, arguments))
                    }
                    return Object(g.a)(t, e), Object(d.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.noteItems,
                                n = e.handleNotesClick,
                                a = e.handleNoteDelete;
                            return o.a.createElement("div", null, o.a.createElement("h3", {
                                className: "notes-header"
                            }, "All Notes "), t && t.map(function(e) {
                                return o.a.createElement(b, {
                                    key: e.id,
                                    id: e.id,
                                    handleNotesClick: n,
                                    note: e,
                                    handleNoteDelete: a
                                })
                            }))
                        }
                    }]), t
                }(a.Component);
            n(18);
            var E = function(e) {
                    return o.a.createElement("label", {
                        className: "switch"
                    }, o.a.createElement("input", {
                        type: "checkbox",
                        onClick: function() {
                            e.handleToggle()
                        }
                    }), o.a.createElement("span", {
                        className: "slider round"
                    }))
                },
                w = function(e) {
                    function t() {
                        var e, n;
                        Object(u.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l];
                        return (n = Object(h.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(o)))).handleClearNoteClick = function() {
                            n.props.deleteAllNotes()
                        }, n.handleNewNote = function() {
                            n.props.createNewNote()
                        }, n
                    }
                    return Object(g.a)(t, e), Object(d.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.handleToggle;
                            return o.a.createElement(a.Fragment, null, o.a.createElement(E, {
                                handleToggle: e
                            }), o.a.createElement("ul", {
                                className: "list"
                            }, o.a.createElement("li", {
                                key: "new",
                                onClick: this.handleNewNote,
                                style: {
                                    cursor: "pointer"
                                },
                                className: "list-item"
                            }, "New Note"), o.a.createElement("li", {
                                key: "clear",
                                onClick: this.handleClearNoteClick,
                                style: {
                                    cursor: "pointer"
                                }
                            }, "Clear Notes")))
                        }
                    }]), t
                }(a.Component),
                S = (n(19), function(e) {
                    function t() {
                        var e, n;
                        Object(u.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l];
                        return (n = Object(h.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(o)))).state = {
                            count: 1,
                            notes: [],
                            untitledCount: 0,
                            isEditing: !1,
                            isNightMode: !0,
                            note: {
                                id: 0,
                                title: "",
                                text: "",
                                date: ""
                            }
                        }, n.handleFieldChange = function(e) {
                            n.setState({
                                note: Object(s.a)({}, n.state.note, Object(c.a)({}, e.target.name, e.target.value))
                            })
                        }, n.handleStorageChange = function() {
                            var e, t = n.state.note,
                                a = n.state,
                                o = a.untitledCount,
                                l = a.count,
                                i = a.isEditing,
                                c = a.notes;
                            if (t.date = (new Date).toDateString(), i || ("" === t.title && (t.title = "Untitled", n.setState({
                                    untitledCount: o++,
                                    note: {
                                        title: "",
                                        text: ""
                                    }
                                })), t.id = l, l++, e = [].concat(Object(r.a)(c), [t]), localStorage.setItem("count", l)), i) {
                                var s = c.findIndex(function(e) {
                                    return e.id === t.id
                                });
                                c.splice(s, 1, t), e = c, n.setState({
                                    isEditing: !1
                                })
                            }
                            n.setState({
                                count: l,
                                notes: e,
                                note: {
                                    title: "",
                                    text: ""
                                }
                            }), localStorage.setItem("note", JSON.stringify(e))
                        }, n.getNotes = function() {
                            var e = localStorage.getItem("note");
                            return 0 !== (e = e || []).length ? JSON.parse([e]) : []
                        }, n.getCount = function() {
                            return localStorage.getItem("count") ? localStorage.getItem("count") : 1
                        }, n.deleteAllNotes = function() {
                            window.confirm("Are you sure you want to delete all notes?") && (localStorage.setItem("note", []), localStorage.setItem("count", 1), n.setState({
                                notes: [],
                                count: 1
                            }))
                        }, n.createNewNote = function() {
                            n.setState({
                                note: {
                                    id: 0,
                                    title: "",
                                    text: "",
                                    date: (new Date).toDateString()
                                }
                            })
                        }, n.changeNightMode = function() {
                            var e = !0 !== n.state.isNightMode;
                            n.setState({
                                isNightMode: e
                            })
                        }, n.handleNotesClick = function(e, t, a) {
                            n.setState({
                                isEditing: !0,
                                note: {
                                    id: e,
                                    title: a || "",
                                    text: t || ""
                                }
                            })
                        }, n.handleNoteDelete = function(e, t) {
                            t.stopPropagation();
                            var a = n.state.notes,
                                o = a.findIndex(function(t) {
                                    return t.id === e
                                });
                            a.splice(o, 1), n.setState({
                                notes: a
                            }), localStorage.setItem("note", JSON.stringify(a))
                        }, n
                    }
                    return Object(g.a)(t, e), Object(d.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.getNotes(),
                                t = this.getCount();
                            this.setState({
                                count: t,
                                notes: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.notes,
                                n = e.isNightMode;
                            return o.a.createElement("div", {
                                className: "App ".concat(n ? "" : "light-mode")
                            }, o.a.createElement("div", {
                                className: "side-bar"
                            }, o.a.createElement(w, {
                                handleToggle: this.changeNightMode,
                                createNewNote: this.createNewNote,
                                deleteAllNotes: this.deleteAllNotes
                            })), o.a.createElement("div", {
                                className: "notes"
                            }, o.a.createElement(C, {
                                noteItems: t,
                                handleNotesClick: this.handleNotesClick,
                                handleNoteDelete: this.handleNoteDelete
                            })), o.a.createElement("div", {
                                className: "edit-field"
                            }, o.a.createElement(v, {
                                handleSave: this.handleStorageChange,
                                note: this.state.note,
                                handleChange: this.handleFieldChange
                            })))
                        }
                    }]), t
                }(a.Component));
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            i.a.render(o.a.createElement(S, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(e) {
                e.unregister()
            })
        }
    },
    [
        [11, 1, 2]
    ]
]);
//# sourceMappingURL=main.eb04cb1c.chunk.js.map