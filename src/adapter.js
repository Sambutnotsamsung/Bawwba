(function () {
  var C = window.BAWWABA_CONFIG || {};
  var configured = !!(C.appId && C.apiKey);
  var base = C.baseUrl || "https://app.base44.com/api/apps/" + (C.appId || "");

  function call(method, path, body) {
    if (!configured) {
      return Promise.resolve([]);
    }

    var headers = { "Content-Type": "application/json" };
    if (C.apiKey) headers["api_key"] = C.apiKey;

    return fetch(base + path, {
      method: method,
      headers: headers,
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      if (r.status === 204) return null;
      return r.json();
    });
  }

  function vOut(v) {
    return {
      plate_raw: v.raw,
      plate_code: v.code,
      guardian_name: v.g,
      guardian_relation: v.rel,
      students: v.st
    };
  }

  function vIn(r) {
    return {
      id: r.id,
      raw: r.plate_raw,
      code: r.plate_code,
      g: r.guardian_name,
      rel: r.guardian_relation || "Other",
      st: r.students || []
    };
  }

  function eOut(e) {
    return {
      raw_plate_text: e.raw,
      plate_code: e.code,
      confidence: e.conf,
      gate_id: e.gate,
      status: e.status,
      reason: e.reason,
      vehicle_id: e.vid,
      guardian_name: e.g,
      guardian_relation: e.rel,
      student_names: e.st || []
    };
  }

  function eIn(r) {
    return {
      id: r.id,
      rid: r.id,
      ts: Date.parse(r.created_date) || Date.now(),
      gate: r.gate_id || "",
      code: r.plate_code,
      raw: r.raw_plate_text || r.plate_code,
      conf: Number(r.confidence || 0),
      status: r.status || "released",
      reason: r.reason || "rOk",
      vid: r.vehicle_id,
      g: r.guardian_name || "",
      rel: r.guardian_relation || "Other",
      st: Array.isArray(r.student_names) ? r.student_names : []
    };
  }

  window.BW = {
    enabled: configured,
    listVehicles: function () {
      return call("GET", "/entities/Vehicle?limit=500").then(function (l) {
        return (Array.isArray(l) ? l : []).map(vIn);
      });
    },
    createVehicle: function (v) {
      return call("POST", "/entities/Vehicle", vOut(v));
    },
    deleteVehicle: function (id) {
      return call("DELETE", "/entities/Vehicle/" + id);
    },
    listEvents: function () {
      return call("GET", "/entities/LprEvent?limit=100&sort_by=-created_date").then(function (l) {
        return (Array.isArray(l) ? l : []).map(eIn);
      });
    },
    createEvent: function (e) {
      return call("POST", "/entities/LprEvent", eOut(e));
    },
    updateEvent: function (id, e) {
      return call("PUT", "/entities/LprEvent/" + id, {
        status: e.status,
        reason: e.reason,
        gate_id: e.gate,
        confidence: e.conf,
        guardian_name: e.g,
        guardian_relation: e.rel,
        student_names: e.st || []
      });
    }
  };
})();
