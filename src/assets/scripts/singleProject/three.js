// threejs.org/license
(function (k, Ba) { typeof exports === 'object' && typeof module !== 'undefined' ? Ba(exports) : typeof define === 'function' && define.amd ? define(['exports'], Ba) : (k = k || self, Ba(k.THREE = {})); }(this, (k) => {
  function Ba() {} function w(a, b) { this.x = a || 0; this.y = b || 0; } function ua(a, b, c, d) { this._x = a || 0; this._y = b || 0; this._z = c || 0; this._w = void 0 !== d ? d : 1; } function n(a, b, c) { this.x = a || 0; this.y = b || 0; this.z = c || 0; } function Y() { this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]; arguments.length > 0 && console.error('THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.'); }
  function W(a, b, c, d, e, f, g, h, l, m) {
    Object.defineProperty(this, 'id', { value: Ri++ }); this.uuid = L.generateUUID(); this.name = ''; this.image = void 0 !== a ? a : W.DEFAULT_IMAGE; this.mipmaps = []; this.mapping = void 0 !== b ? b : W.DEFAULT_MAPPING; this.wrapS = void 0 !== c ? c : 1001; this.wrapT = void 0 !== d ? d : 1001; this.magFilter = void 0 !== e ? e : 1006; this.minFilter = void 0 !== f ? f : 1008; this.anisotropy = void 0 !== l ? l : 1; this.format = void 0 !== g ? g : 1023; this.type = void 0 !== h ? h : 1009; this.offset = new w(0, 0); this.repeat = new w(1, 1); this.center = new w(0, 0); this.rotation = 0; this.matrixAutoUpdate = !0; this.matrix = new Y(); this.generateMipmaps = !0; this.premultiplyAlpha = !1; this.flipY = !0; this.unpackAlignment = 4; this.encoding = void 0 !== m ? m : 3E3; this.version = 0; this.onUpdate = null;
  } function aa(a, b, c, d) { this.x = a || 0; this.y = b || 0; this.z = c || 0; this.w = void 0 !== d ? d : 1; } function la(a, b, c) {
    this.width = a; this.height = b; this.scissor = new aa(0, 0, a, b); this.scissorTest = !1; this.viewport = new aa(0, 0, a, b); c = c || {}; this.texture = new W(void 0, void 0, c.wrapS, c.wrapT, c.magFilter, c.minFilter, c.format, c.type, c.anisotropy,
      c.encoding); this.texture.image = {}; this.texture.image.width = a; this.texture.image.height = b; this.texture.generateMipmaps = void 0 !== c.generateMipmaps ? c.generateMipmaps : !1; this.texture.minFilter = void 0 !== c.minFilter ? c.minFilter : 1006; this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0; this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0; this.depthTexture = void 0 !== c.depthTexture ? c.depthTexture : null;
  } function Of(a, b, c) { la.call(this, a, b, c); this.samples = 4; } function U() {
    this.elements = [1, 0, 0, 0, 0,
      1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; arguments.length > 0 && console.error('THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.');
  } function Qb(a, b, c, d) { this._x = a || 0; this._y = b || 0; this._z = c || 0; this._order = d || Qb.DefaultOrder; } function Pf() { this.mask = 1; } function B() {
    Object.defineProperty(this, 'id', { value: Si++ }); this.uuid = L.generateUUID(); this.name = ''; this.type = 'Object3D'; this.parent = null; this.children = []; this.up = B.DefaultUp.clone(); const a = new n(); const b = new Qb(); const c = new ua(); const
      d = new n(1, 1, 1); b._onChange(() => {
      c.setFromEuler(b,
        !1);
    }); c._onChange(() => { b.setFromQuaternion(c, void 0, !1); }); Object.defineProperties(this, {
      position: { configurable: !0, enumerable: !0, value: a }, rotation: { configurable: !0, enumerable: !0, value: b }, quaternion: { configurable: !0, enumerable: !0, value: c }, scale: { configurable: !0, enumerable: !0, value: d }, modelViewMatrix: { value: new U() }, normalMatrix: { value: new Y() },
    }); this.matrix = new U(); this.matrixWorld = new U(); this.matrixAutoUpdate = B.DefaultMatrixAutoUpdate; this.matrixWorldNeedsUpdate = !1; this.layers = new Pf(); this.visible = !0;
    this.receiveShadow = this.castShadow = !1; this.frustumCulled = !0; this.renderOrder = 0; this.userData = {};
  } function wd() { B.call(this); this.type = 'Scene'; this.overrideMaterial = this.fog = this.background = null; this.autoUpdate = !0; typeof __THREE_DEVTOOLS__ !== 'undefined' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this })); } function ab(a, b) { this.min = void 0 !== a ? a : new n(Infinity, Infinity, Infinity); this.max = void 0 !== b ? b : new n(-Infinity, -Infinity, -Infinity); } function Qf(a, b, c, d, e) {
    let f; let g = 0; for (f = a.length - 3; g <= f; g += 3) { Rb.fromArray(a, g); const h = e.x * Math.abs(Rb.x) + e.y * Math.abs(Rb.y) + e.z * Math.abs(Rb.z); const l = b.dot(Rb); const m = c.dot(Rb); const q = d.dot(Rb); if (Math.max(-Math.max(l, m, q), Math.min(l, m, q)) > h) return !1; } return !0;
  } function nb(a, b) { this.center = void 0 !== a ? a : new n(); this.radius = void 0 !== b ? b : 0; } function Sb(a, b) { this.origin = void 0 !== a ? a : new n(); this.direction = void 0 !== b ? b : new n(); } function R(a, b, c) { this.a = void 0 !== a ? a : new n(); this.b = void 0 !== b ? b : new n(); this.c = void 0 !== c ? c : new n(); } function H(a, b, c) {
    return void 0 === b && void 0
=== c ? this.set(a) : this.setRGB(a, b, c);
  } function Rf(a, b, c) { c < 0 && (c += 1); c > 1 && --c; return c < 1 / 6 ? a + 6 * (b - a) * c : c < 0.5 ? b : c < 2 / 3 ? a + 6 * (b - a) * (2 / 3 - c) : a; } function Sf(a) { return a < 0.04045 ? 0.0773993808 * a : Math.pow(0.9478672986 * a + 0.0521327014, 2.4); } function Tf(a) { return a < 0.0031308 ? 12.92 * a : 1.055 * Math.pow(a, 0.41666) - 0.055; } function zc(a, b, c, d, e, f) {
    this.a = a; this.b = b; this.c = c; this.normal = d && d.isVector3 ? d : new n(); this.vertexNormals = Array.isArray(d) ? d : []; this.color = e && e.isColor ? e : new H(); this.vertexColors = Array.isArray(e) ? e : []; this.materialIndex = void 0 !== f ? f : 0;
  } function M() {
    Object.defineProperty(this, 'id', { value: Ti++ }); this.uuid = L.generateUUID(); this.name = ''; this.type = 'Material'; this.fog = !0; this.blending = 1; this.side = 0; this.vertexTangents = this.flatShading = !1; this.vertexColors = 0; this.opacity = 1; this.transparent = !1; this.blendSrc = 204; this.blendDst = 205; this.blendEquation = 100; this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null; this.depthFunc = 3; this.depthWrite = this.depthTest = !0; this.stencilWriteMask = 255; this.stencilFunc = 519; this.stencilRef = 0; this.stencilFuncMask = 255; this.stencilZPass = this.stencilZFail = this.stencilFail = 7680; this.stencilWrite = !1; this.clippingPlanes = null; this.clipShadows = this.clipIntersection = !1; this.shadowSide = null; this.colorWrite = !0; this.precision = null; this.polygonOffset = !1; this.polygonOffsetUnits = this.polygonOffsetFactor = 0; this.dithering = !1; this.alphaTest = 0; this.premultipliedAlpha = !1; this.toneMapped = this.visible = !0; this.userData = {}; this.needsUpdate = !0;
  } function Ga(a) {
    M.call(this); this.type = 'MeshBasicMaterial'; this.color = new H(16777215); this.lightMap = this.map = null; this.lightMapIntensity = 1; this.aoMap = null; this.aoMapIntensity = 1; this.envMap = this.alphaMap = this.specularMap = null; this.combine = 0; this.reflectivity = 1; this.refractionRatio = 0.98; this.wireframe = !1; this.wireframeLinewidth = 1; this.wireframeLinejoin = this.wireframeLinecap = 'round'; this.morphTargets = this.skinning = !1; this.setValues(a);
  } function O(a, b, c) {
    if (Array.isArray(a)) throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.'); this.name = ''; this.array = a; this.itemSize = b; this.count = void 0 !== a ? a.length / b : 0; this.normalized = !0 === c; this.dynamic = !1; this.updateRange = { offset: 0, count: -1 }; this.version = 0;
  } function xd(a, b, c) { O.call(this, new Int8Array(a), b, c); } function yd(a, b, c) { O.call(this, new Uint8Array(a), b, c); } function zd(a, b, c) { O.call(this, new Uint8ClampedArray(a), b, c); } function Ad(a, b, c) { O.call(this, new Int16Array(a), b, c); } function Tb(a, b, c) { O.call(this, new Uint16Array(a), b, c); } function Bd(a, b, c) { O.call(this, new Int32Array(a), b, c); } function Ub(a, b, c) {
    O.call(this,
      new Uint32Array(a), b, c);
  } function A(a, b, c) { O.call(this, new Float32Array(a), b, c); } function Cd(a, b, c) { O.call(this, new Float64Array(a), b, c); } function jh() { this.vertices = []; this.normals = []; this.colors = []; this.uvs = []; this.uvs2 = []; this.groups = []; this.morphTargets = {}; this.skinWeights = []; this.skinIndices = []; this.boundingSphere = this.boundingBox = null; this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1; } function kh(a) {
    if (a.length === 0) return -Infinity; for (var b = a[0], c = 1, d = a.length; c < d; ++c)a[c] > b && (b = a[c]); return b;
  } function E() { Object.defineProperty(this, 'id', { value: Ui += 2 }); this.uuid = L.generateUUID(); this.name = ''; this.type = 'BufferGeometry'; this.index = null; this.attributes = {}; this.morphAttributes = {}; this.groups = []; this.boundingSphere = this.boundingBox = null; this.drawRange = { start: 0, count: Infinity }; this.userData = {}; } function ja(a, b) {
    B.call(this); this.type = 'Mesh'; this.geometry = void 0 !== a ? a : new E(); this.material = void 0 !== b ? b : new Ga({ color: 16777215 * Math.random() }); this.drawMode = 0; this.updateMorphTargets();
  } function lh(a, b, c, d, e, f, g, h) { if ((b.side === 1 ? d.intersectTriangle(g, f, e, !0, h) : d.intersectTriangle(e, f, g, b.side !== 2, h)) === null) return null; Ee.copy(h); Ee.applyMatrix4(a.matrixWorld); b = c.ray.origin.distanceTo(Ee); return b < c.near || b > c.far ? null : { distance: b, point: Ee.clone(), object: a }; } function Fe(a, b, c, d, e, f, g, h, l, m, q) {
    Vb.fromBufferAttribute(e, l); Wb.fromBufferAttribute(e, m); Xb.fromBufferAttribute(e, q); e = a.morphTargetInfluences; if (b.morphTargets && f && e) {
      Uf.set(0, 0, 0); Vf.set(0, 0, 0);
      Wf.set(0, 0, 0); for (let u = 0, t = f.length; u < t; u++) { const k = e[u]; const p = f[u]; k !== 0 && (mh.fromBufferAttribute(p, l), nh.fromBufferAttribute(p, m), oh.fromBufferAttribute(p, q), Uf.addScaledVector(mh.sub(Vb), k), Vf.addScaledVector(nh.sub(Wb), k), Wf.addScaledVector(oh.sub(Xb), k)); }Vb.add(Uf); Wb.add(Vf); Xb.add(Wf);
    } if (a = lh(a, b, c, d, Vb, Wb, Xb, Dd)) {
      g && (Ac.fromBufferAttribute(g, l), Bc.fromBufferAttribute(g, m), Cc.fromBufferAttribute(g, q), a.uv = R.getUV(Dd, Vb, Wb, Xb, Ac, Bc, Cc, new w())), h && (Ac.fromBufferAttribute(h, l), Bc.fromBufferAttribute(h,
        m), Cc.fromBufferAttribute(h, q), a.uv2 = R.getUV(Dd, Vb, Wb, Xb, Ac, Bc, Cc, new w())), g = new zc(l, m, q), R.getNormal(Vb, Wb, Xb, g.normal), a.face = g;
    } return a;
  } function F() {
    Object.defineProperty(this, 'id', { value: Vi += 2 }); this.uuid = L.generateUUID(); this.name = ''; this.type = 'Geometry'; this.vertices = []; this.colors = []; this.faces = []; this.faceVertexUvs = [[]]; this.morphTargets = []; this.morphNormals = []; this.skinWeights = []; this.skinIndices = []; this.lineDistances = []; this.boundingSphere = this.boundingBox = null; this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1;
  } function Yb(a) { const b = {}; let c; for (c in a) { b[c] = {}; for (const d in a[c]) { const e = a[c][d]; e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture) ? b[c][d] = e.clone() : Array.isArray(e) ? b[c][d] = e.slice() : b[c][d] = e; } } return b; } function Da(a) { for (var b = {}, c = 0; c < a.length; c++) { const d = Yb(a[c]); var e; for (e in d)b[e] = d[e]; } return b; } function ma(a) {
    M.call(this); this.type = 'ShaderMaterial';
    this.defines = {}; this.uniforms = {}; this.vertexShader = 'void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}'; this.fragmentShader = 'void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}'; this.linewidth = 1; this.wireframe = !1; this.wireframeLinewidth = 1; this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1; this.extensions = {
      derivatives: !1, fragDepth: !1, drawBuffers: !1, shaderTextureLOD: !1,
    }; this.defaultAttributeValues = {
      color: [1, 1,
        1],
      uv: [0, 0],
      uv2: [0, 0],
    }; this.index0AttributeName = void 0; this.uniformsNeedUpdate = !1; void 0 !== a && (void 0 !== a.attributes && console.error('THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.'), this.setValues(a));
  } function bb() { B.call(this); this.type = 'Camera'; this.matrixWorldInverse = new U(); this.projectionMatrix = new U(); this.projectionMatrixInverse = new U(); } function na(a, b, c, d) {
    bb.call(this); this.type = 'PerspectiveCamera'; this.fov = void 0 !== a ? a : 50; this.zoom = 1; this.near = void 0
!== c ? c : 0.1; this.far = void 0 !== d ? d : 2E3; this.focus = 10; this.aspect = void 0 !== b ? b : 1; this.view = null; this.filmGauge = 35; this.filmOffset = 0; this.updateProjectionMatrix();
  } function Dc(a, b, c, d) {
    B.call(this); this.type = 'CubeCamera'; const e = new na(90, 1, a, b); e.up.set(0, -1, 0); e.lookAt(new n(1, 0, 0)); this.add(e); const f = new na(90, 1, a, b); f.up.set(0, -1, 0); f.lookAt(new n(-1, 0, 0)); this.add(f); const g = new na(90, 1, a, b); g.up.set(0, 0, 1); g.lookAt(new n(0, 1, 0)); this.add(g); const h = new na(90, 1, a, b); h.up.set(0, 0, -1); h.lookAt(new n(0, -1, 0));
    this.add(h); const l = new na(90, 1, a, b); l.up.set(0, -1, 0); l.lookAt(new n(0, 0, 1)); this.add(l); const m = new na(90, 1, a, b); m.up.set(0, -1, 0); m.lookAt(new n(0, 0, -1)); this.add(m); d = d || { format: 1022, magFilter: 1006, minFilter: 1006 }; this.renderTarget = new Ab(c, c, d); this.renderTarget.texture.name = 'CubeCamera'; this.update = function (a, b) {
      this.parent === null && this.updateMatrixWorld(); const c = a.getRenderTarget(); const d = this.renderTarget; const q = d.texture.generateMipmaps; d.texture.generateMipmaps = !1; a.setRenderTarget(d, 0); a.render(b, e); a.setRenderTarget(d,
        1); a.render(b, f); a.setRenderTarget(d, 2); a.render(b, g); a.setRenderTarget(d, 3); a.render(b, h); a.setRenderTarget(d, 4); a.render(b, l); d.texture.generateMipmaps = q; a.setRenderTarget(d, 5); a.render(b, m); a.setRenderTarget(c);
    }; this.clear = function (a, b, c, d) { for (var e = a.getRenderTarget(), f = this.renderTarget, g = 0; g < 6; g++)a.setRenderTarget(f, g), a.clear(b, c, d); a.setRenderTarget(e); };
  } function Ab(a, b, c) { la.call(this, a, b, c); } function Zb(a, b, c, d, e, f, g, h, l, m, q, u) {
    W.call(this, null, f, g, h, l, m, d, e, q, u); this.image = {
      data: a || null,
      width: b || 1,
      height: c || 1,
    }; this.magFilter = void 0 !== l ? l : 1003; this.minFilter = void 0 !== m ? m : 1003; this.flipY = this.generateMipmaps = !1; this.unpackAlignment = 1; this.needsUpdate = !0;
  } function cb(a, b) { this.normal = void 0 !== a ? a : new n(1, 0, 0); this.constant = void 0 !== b ? b : 0; } function Ed(a, b, c, d, e, f) { this.planes = [void 0 !== a ? a : new cb(), void 0 !== b ? b : new cb(), void 0 !== c ? c : new cb(), void 0 !== d ? d : new cb(), void 0 !== e ? e : new cb(), void 0 !== f ? f : new cb()]; } function Xf() {
    function a(e, f) { !1 !== c && (d(e, f), b.requestAnimationFrame(a)); } var b = null; var c = !1;
    var d = null; return {
      start() { !0 !== c && d !== null && (b.requestAnimationFrame(a), c = !0); }, stop() { c = !1; }, setAnimationLoop(a) { d = a; }, setContext(a) { b = a; },
    };
  } function Wi(a) {
    function b(b, c) {
      const d = b.array; const e = b.dynamic ? 35048 : 35044; const h = a.createBuffer(); a.bindBuffer(c, h); a.bufferData(c, d, e); b.onUploadCallback(); c = 5126; d instanceof Float32Array ? c = 5126 : d instanceof Float64Array ? console.warn('THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.') : d instanceof Uint16Array ? c = 5123 : d
instanceof Int16Array ? c = 5122 : d instanceof Uint32Array ? c = 5125 : d instanceof Int32Array ? c = 5124 : d instanceof Int8Array ? c = 5120 : d instanceof Uint8Array && (c = 5121); return {
        buffer: h, type: c, bytesPerElement: d.BYTES_PER_ELEMENT, version: b.version,
      };
    } const c = new WeakMap(); return {
      get(a) { a.isInterleavedBufferAttribute && (a = a.data); return c.get(a); },
      remove(b) { b.isInterleavedBufferAttribute && (b = b.data); const d = c.get(b); d && (a.deleteBuffer(d.buffer), c.delete(b)); },
      update(d, e) {
        d.isInterleavedBufferAttribute && (d = d.data);
        const f = c.get(d); if (void 0 === f)c.set(d, b(d, e)); else if (f.version < d.version) {
          const g = d; const h = g.array; const l = g.updateRange; a.bindBuffer(e, f.buffer); !1 === g.dynamic ? a.bufferData(e, h, 35044) : l.count === -1 ? a.bufferSubData(e, 0, h) : l.count === 0 ? console.error('THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.') : (a.bufferSubData(e, l.offset * h.BYTES_PER_ELEMENT, h.subarray(l.offset, l.offset + l.count)), l.count = -1);
          f.version = d.version;
        }
      },
    };
  } function Fd(a, b, c, d) {
    F.call(this); this.type = 'PlaneGeometry'; this.parameters = {
      width: a, height: b, widthSegments: c, heightSegments: d,
    }; this.fromBufferGeometry(new $b(a, b, c, d)); this.mergeVertices();
  } function $b(a, b, c, d) {
    E.call(this); this.type = 'PlaneBufferGeometry'; this.parameters = {
      width: a, height: b, widthSegments: c, heightSegments: d,
    }; a = a || 1; b = b || 1; let e = a / 2; let f = b / 2; c = Math.floor(c) || 1; d = Math.floor(d) || 1; const g = c + 1; let h = d + 1; const l = a / c; const m = b / d; const q = []; const u = []; const t = []; const k = []; for (a = 0; a < h; a++) {
      const p = a * m - f; for (b = 0; b
< g; b++)u.push(b * l - e, -p, 0), t.push(0, 0, 1), k.push(b / c), k.push(1 - a / d);
    } for (a = 0; a < d; a++) for (b = 0; b < c; b++)e = b + g * (a + 1), f = b + 1 + g * (a + 1), h = b + 1 + g * a, q.push(b + g * a, e, h), q.push(e, f, h); this.setIndex(q); this.addAttribute('position', new A(u, 3)); this.addAttribute('normal', new A(t, 3)); this.addAttribute('uv', new A(k, 2));
  } function Xi(a, b, c, d) {
    function e(a, c) { b.buffers.color.setClear(a.r, a.g, a.b, c, d); } const f = new H(0); let g = 0; let h; let l; let m = null; let q = 0; return {
      getClearColor() { return f; },
      setClearColor(a, b) {
        f.set(a); g = void 0 !== b
          ? b : 1; e(f, g);
      },
      getClearAlpha() { return g; },
      setClearAlpha(a) { g = a; e(f, g); },
      render(b, d, k, p) {
        d = d.background; k = a.vr; (k = k.getSession && k.getSession()) && k.environmentBlendMode === 'additive' && (d = null); d === null ? (e(f, g), m = null, q = 0) : d && d.isColor && (e(d, 1), p = !0, m = null, q = 0); (a.autoClear || p) && a.clear(a.autoClearColor, a.autoClearDepth, a.autoClearStencil); if (d && (d.isCubeTexture || d.isWebGLRenderTargetCube)) {
          void 0 === l && (l = new ja(new Gd(1, 1, 1), new ma({
            type: 'BackgroundCubeMaterial',
            uniforms: Yb(db.cube.uniforms),
            vertexShader: db.cube.vertexShader,
            fragmentShader: db.cube.fragmentShader,
            side: 1,
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
          })), l.geometry.removeAttribute('normal'), l.geometry.removeAttribute('uv'), l.onBeforeRender = function (a, b, c) { this.matrixWorld.copyPosition(c.matrixWorld); }, Object.defineProperty(l.material, 'map', { get() { return this.uniforms.tCube.value; } }), c.update(l)); p = d.isWebGLRenderTargetCube ? d.texture : d; l.material.uniforms.tCube.value = p; l.material.uniforms.tFlip.value = d.isWebGLRenderTargetCube
            ? 1 : -1; if (m !== d || q !== p.version)l.material.needsUpdate = !0, m = d, q = p.version; b.unshift(l, l.geometry, l.material, 0, 0, null);
        } else if (d && d.isTexture) {
          void 0 === h && (h = new ja(new $b(2, 2), new ma({
            type: 'BackgroundMaterial', uniforms: Yb(db.background.uniforms), vertexShader: db.background.vertexShader, fragmentShader: db.background.fragmentShader, side: 0, depthTest: !1, depthWrite: !1, fog: !1,
          })), h.geometry.removeAttribute('normal'), Object.defineProperty(h.material, 'map', { get() { return this.uniforms.t2D.value; } }), c.update(h));
          h.material.uniforms.t2D.value = d; !0 === d.matrixAutoUpdate && d.updateMatrix(); h.material.uniforms.uvTransform.value.copy(d.matrix); if (m !== d || q !== d.version)h.material.needsUpdate = !0, m = d, q = d.version; b.unshift(h, h.geometry, h.material, 0, 0, null);
        }
      },
    };
  } function Yi(a, b, c, d) {
    let e; this.setMode = function (a) { e = a; }; this.render = function (b, d) { a.drawArrays(e, b, d); c.update(d, e); }; this.renderInstances = function (f, g, h, l) {
      if (l !== 0) {
        if (d.isWebGL2) { f = a; var m = 'drawArraysInstanced'; } else if (f = b.get('ANGLE_instanced_arrays'), m = 'drawArraysInstancedANGLE',
        f === null) { console.error('THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'); return; }f[m](e, g, h, l); c.update(h, e, l);
      }
    };
  } function Zi(a, b, c) {
    function d(b) {
      if (b === 'highp') { if (a.getShaderPrecisionFormat(35633, 36338).precision > 0 && a.getShaderPrecisionFormat(35632, 36338).precision > 0) return 'highp'; b = 'mediump'; } return b === 'mediump' && a.getShaderPrecisionFormat(35633, 36337).precision > 0 && a.getShaderPrecisionFormat(35632, 36337).precision > 0
        ? 'mediump' : 'lowp';
    } let e; const f = typeof WebGL2RenderingContext !== 'undefined' && a instanceof WebGL2RenderingContext; let g = void 0 !== c.precision ? c.precision : 'highp'; let h = d(g); h !== g && (console.warn('THREE.WebGLRenderer:', g, 'not supported, using', h, 'instead.'), g = h); c = !0 === c.logarithmicDepthBuffer; h = a.getParameter(34930); const l = a.getParameter(35660); const m = a.getParameter(3379); const q = a.getParameter(34076); const u = a.getParameter(34921); const t = a.getParameter(36347); const k = a.getParameter(36348); const p = a.getParameter(36349); const v = l > 0; const x = f || !!b.get('OES_texture_float');
    const n = v && x; const y = f ? a.getParameter(36183) : 0; return {
      isWebGL2: f, getMaxAnisotropy() { if (void 0 !== e) return e; const c = b.get('EXT_texture_filter_anisotropic'); return e = c !== null ? a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0; }, getMaxPrecision: d, precision: g, logarithmicDepthBuffer: c, maxTextures: h, maxVertexTextures: l, maxTextureSize: m, maxCubemapSize: q, maxAttributes: u, maxVertexUniforms: t, maxVaryings: k, maxFragmentUniforms: p, vertexTextures: v, floatFragmentTextures: x, floatVertexTextures: n, maxSamples: y,
    };
  } function $i() {
    function a() {
      m.value
!== d && (m.value = d, m.needsUpdate = e > 0); c.numPlanes = e; c.numIntersection = 0;
    } function b(a, b, d, e) { const f = a !== null ? a.length : 0; let g = null; if (f !== 0) { g = m.value; if (!0 !== e || g === null) { e = d + 4 * f; b = b.matrixWorldInverse; l.getNormalMatrix(b); if (g === null || g.length < e)g = new Float32Array(e); for (e = 0; e !== f; ++e, d += 4)h.copy(a[e]).applyMatrix4(b, l), h.normal.toArray(g, d), g[d + 3] = h.constant; }m.value = g; m.needsUpdate = !0; }c.numPlanes = f; return g; } var c = this; var d = null; var e = 0; let f = !1; let g = !1; var h = new cb(); var l = new Y(); var m = { value: null, needsUpdate: !1 }; this.uniform = m; this.numIntersection = this.numPlanes = 0; this.init = function (a, c, g) { const h = a.length !== 0 || c || e !== 0 || f; f = c; d = b(a, g, 0); e = a.length; return h; }; this.beginShadows = function () { g = !0; b(null); }; this.endShadows = function () { g = !1; a(); }; this.setState = function (c, h, l, k, p, v) { if (!f || c === null || c.length === 0 || g && !l)g ? b(null) : a(); else { l = g ? 0 : e; const q = 4 * l; let u = p.clippingState || null; m.value = u; u = b(c, k, q, v); for (c = 0; c !== q; ++c)u[c] = d[c]; p.clippingState = u; this.numIntersection = h ? this.numPlanes : 0; this.numPlanes += l; } };
  } function aj(a) {
    const b = {}; return {
      get(c) {
        if (void 0
!== b[c]) return b[c]; switch (c) {
          case 'WEBGL_depth_texture': var d = a.getExtension('WEBGL_depth_texture') || a.getExtension('MOZ_WEBGL_depth_texture') || a.getExtension('WEBKIT_WEBGL_depth_texture'); break; case 'EXT_texture_filter_anisotropic': d = a.getExtension('EXT_texture_filter_anisotropic') || a.getExtension('MOZ_EXT_texture_filter_anisotropic') || a.getExtension('WEBKIT_EXT_texture_filter_anisotropic'); break; case 'WEBGL_compressed_texture_s3tc': d = a.getExtension('WEBGL_compressed_texture_s3tc') || a.getExtension('MOZ_WEBGL_compressed_texture_s3tc')
|| a.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc'); break; case 'WEBGL_compressed_texture_pvrtc': d = a.getExtension('WEBGL_compressed_texture_pvrtc') || a.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'); break; default: d = a.getExtension(c);
        }d === null && console.warn(`THREE.WebGLRenderer: ${c} extension not supported.`); return b[c] = d;
      },
    };
  } function bj(a, b, c) {
    function d(a) {
      const e = a.target; a = f.get(e); a.index !== null && b.remove(a.index); for (var h in a.attributes)b.remove(a.attributes[h]); e.removeEventListener('dispose',
        d); f.delete(e); if (h = g.get(a))b.remove(h), g.delete(a); c.memory.geometries--;
    } function e(a) { let c = []; let d = a.index; let e = a.attributes.position; if (d !== null) { var f = d.array; d = d.version; e = 0; for (var h = f.length; e < h; e += 3) { var k = f[e + 0]; var p = f[e + 1]; var v = f[e + 2]; c.push(k, p, p, v, v, k); } } else for (f = e.array, d = e.version, e = 0, h = f.length / 3 - 1; e < h; e += 3)k = e + 0, p = e + 1, v = e + 2, c.push(k, p, p, v, v, k); c = new (kh(c) > 65535 ? Ub : Tb)(c, 1); c.version = d; b.update(c, 34963); (f = g.get(a)) && b.remove(f); g.set(a, c); } var f = new WeakMap(); var
      g = new WeakMap(); return {
      get(a,
        b) { let e = f.get(b); if (e) return e; b.addEventListener('dispose', d); b.isBufferGeometry ? e = b : b.isGeometry && (void 0 === b._bufferGeometry && (b._bufferGeometry = (new E()).setFromObject(a)), e = b._bufferGeometry); f.set(b, e); c.memory.geometries++; return e; },
      update(a) { let c = a.index; let d = a.attributes; c !== null && b.update(c, 34963); for (var e in d)b.update(d[e], 34962); a = a.morphAttributes; for (e in a) { c = a[e]; d = 0; for (let f = c.length; d < f; d++)b.update(c[d], 34962); } },
      getWireframeAttribute(a) {
        const b = g.get(a); if (b) {
          const c = a.index; c !== null && b.version < c.version && e(a);
        } else e(a); return g.get(a);
      },
    };
  } function cj(a, b, c, d) {
    let e; let f; let g; this.setMode = function (a) { e = a; }; this.setIndex = function (a) { f = a.type; g = a.bytesPerElement; }; this.render = function (b, d) { a.drawElements(e, d, f, b * g); c.update(d, e); }; this.renderInstances = function (h, l, m, q) {
      if (q !== 0) {
        if (d.isWebGL2) { h = a; var u = 'drawElementsInstanced'; } else if (h = b.get('ANGLE_instanced_arrays'), u = 'drawElementsInstancedANGLE', h === null) {
          console.error('THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.');
          return;
        }h[u](e, m, f, l * g, q); c.update(m, e, q);
      }
    };
  } function dj(a) {
    const b = {
      frame: 0, calls: 0, triangles: 0, points: 0, lines: 0,
    }; return {
      memory: { geometries: 0, textures: 0 },
      render: b,
      programs: null,
      autoReset: !0,
      reset() { b.frame++; b.calls = 0; b.triangles = 0; b.points = 0; b.lines = 0; },
      update(a, d, e) {
        e = e || 1; b.calls++; switch (d) {
          case 4: b.triangles += a / 3 * e; break; case 5: case 6: b.triangles += e * (a - 2); break; case 1: b.lines += a / 2 * e; break; case 3: b.lines += e * (a - 1); break; case 2: b.lines += e * a; break; case 0: b.points += e * a; break; default: console.error('THREE.WebGLInfo: Unknown draw mode:',
            d);
        }
      },
    };
  } function ej(a, b) { return Math.abs(b[1]) - Math.abs(a[1]); } function fj(a) {
    const b = {}; const c = new Float32Array(8); return {
      update(d, e, f, g) {
        let h = d.morphTargetInfluences; let l = h.length; d = b[e.id]; if (void 0 === d) { d = []; for (var m = 0; m < l; m++)d[m] = [m, 0]; b[e.id] = d; } const q = f.morphTargets && e.morphAttributes.position; f = f.morphNormals && e.morphAttributes.normal; for (m = 0; m < l; m++) { var u = d[m]; u[1] !== 0 && (q && e.removeAttribute(`morphTarget${m}`), f && e.removeAttribute(`morphNormal${m}`)); } for (m = 0; m < l; m++)u = d[m], u[0] = m, u[1] = h[m]; d.sort(ej);
        for (m = 0; m < 8; m++) { if (u = d[m]) if (h = u[0], l = u[1]) { q && e.addAttribute(`morphTarget${m}`, q[h]); f && e.addAttribute(`morphNormal${m}`, f[h]); c[m] = l; continue; }c[m] = 0; }g.getUniforms().setValue(a, 'morphTargetInfluences', c);
      },
    };
  } function gj(a, b, c, d) { let e = {}; return { update(a) { const f = d.render.frame; const h = a.geometry; const l = b.get(a, h); e[l.id] !== f && (h.isGeometry && l.updateFromObject(a), b.update(l), e[l.id] = f); a.isInstancedMesh && c.update(a.instanceMatrix, 34962); return l; }, dispose() { e = {}; } }; } function ob(a, b, c, d, e, f, g, h, l, m) {
    a = void 0 !== a ? a : []; W.call(this, a, void 0 !== b ? b : 301, c, d, e, f, void 0 !== g ? g : 1022, h, l, m); this.flipY = !1;
  } function Ec(a, b, c, d) {
    W.call(this, null); this.image = {
      data: a || null, width: b || 1, height: c || 1, depth: d || 1,
    }; this.minFilter = this.magFilter = 1003; this.wrapR = 1001; this.flipY = this.generateMipmaps = !1; this.needsUpdate = !0;
  } function Fc(a, b, c, d) {
    W.call(this, null); this.image = {
      data: a || null, width: b || 1, height: c || 1, depth: d || 1,
    }; this.minFilter = this.magFilter = 1003; this.wrapR = 1001; this.flipY = this.generateMipmaps = !1; this.needsUpdate = !0;
  } function Gc(a, b, c) { let d = a[0]; if (d <= 0 || d > 0) return a; let e = b * c; let f = ph[e]; void 0 === f && (f = new Float32Array(e), ph[e] = f); if (b !== 0) for (d.toArray(f, 0), d = 1, e = 0; d !== b; ++d)e += c, a[d].toArray(f, e); return f; } function La(a, b) { if (a.length !== b.length) return !1; for (let c = 0, d = a.length; c < d; c++) if (a[c] !== b[c]) return !1; return !0; } function Ha(a, b) { for (let c = 0, d = b.length; c < d; c++)a[c] = b[c]; } function qh(a, b) { let c = rh[b]; void 0 === c && (c = new Int32Array(b), rh[b] = c); for (let d = 0; d !== b; ++d)c[d] = a.allocateTextureUnit(); return c; } function hj(a,
    b) { const c = this.cache; c[0] !== b && (a.uniform1f(this.addr, b), c[0] = b); } function ij(a, b) { const c = this.cache; if (void 0 !== b.x) { if (c[0] !== b.x || c[1] !== b.y)a.uniform2f(this.addr, b.x, b.y), c[0] = b.x, c[1] = b.y; } else La(c, b) || (a.uniform2fv(this.addr, b), Ha(c, b)); } function jj(a, b) {
    const c = this.cache; if (void 0 !== b.x) { if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z)a.uniform3f(this.addr, b.x, b.y, b.z), c[0] = b.x, c[1] = b.y, c[2] = b.z; } else if (void 0 !== b.r) {
      if (c[0] !== b.r || c[1] !== b.g || c[2] !== b.b) {
        a.uniform3f(this.addr, b.r, b.g, b.b), c[0] = b.r, c[1] = b.g,
        c[2] = b.b;
      }
    } else La(c, b) || (a.uniform3fv(this.addr, b), Ha(c, b));
  } function kj(a, b) { const c = this.cache; if (void 0 !== b.x) { if (c[0] !== b.x || c[1] !== b.y || c[2] !== b.z || c[3] !== b.w)a.uniform4f(this.addr, b.x, b.y, b.z, b.w), c[0] = b.x, c[1] = b.y, c[2] = b.z, c[3] = b.w; } else La(c, b) || (a.uniform4fv(this.addr, b), Ha(c, b)); } function lj(a, b) { const c = this.cache; const d = b.elements; void 0 === d ? La(c, b) || (a.uniformMatrix2fv(this.addr, !1, b), Ha(c, b)) : La(c, d) || (sh.set(d), a.uniformMatrix2fv(this.addr, !1, sh), Ha(c, d)); } function mj(a, b) {
    const c = this.cache; const d = b.elements;
    void 0 === d ? La(c, b) || (a.uniformMatrix3fv(this.addr, !1, b), Ha(c, b)) : La(c, d) || (th.set(d), a.uniformMatrix3fv(this.addr, !1, th), Ha(c, d));
  } function nj(a, b) { const c = this.cache; const d = b.elements; void 0 === d ? La(c, b) || (a.uniformMatrix4fv(this.addr, !1, b), Ha(c, b)) : La(c, d) || (uh.set(d), a.uniformMatrix4fv(this.addr, !1, uh), Ha(c, d)); } function oj(a, b, c) { const d = this.cache; const e = c.allocateTextureUnit(); d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e); c.safeSetTexture2D(b || vh, e); } function pj(a, b, c) {
    const d = this.cache; const e = c.allocateTextureUnit();
    d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e); c.setTexture2DArray(b || qj, e);
  } function rj(a, b, c) { const d = this.cache; const e = c.allocateTextureUnit(); d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e); c.setTexture3D(b || sj, e); } function tj(a, b, c) { const d = this.cache; const e = c.allocateTextureUnit(); d[0] !== e && (a.uniform1i(this.addr, e), d[0] = e); c.safeSetTextureCube(b || wh, e); } function uj(a, b) { const c = this.cache; c[0] !== b && (a.uniform1i(this.addr, b), c[0] = b); } function vj(a, b) { const c = this.cache; La(c, b) || (a.uniform2iv(this.addr, b), Ha(c, b)); } function wj(a,
    b) { const c = this.cache; La(c, b) || (a.uniform3iv(this.addr, b), Ha(c, b)); } function xj(a, b) { const c = this.cache; La(c, b) || (a.uniform4iv(this.addr, b), Ha(c, b)); } function yj(a) {
    switch (a) {
      case 5126: return hj; case 35664: return ij; case 35665: return jj; case 35666: return kj; case 35674: return lj; case 35675: return mj; case 35676: return nj; case 35678: case 36198: return oj; case 35679: return rj; case 35680: return tj; case 36289: return pj; case 5124: case 35670: return uj; case 35667: case 35671: return vj; case 35668: case 35672: return wj;
      case 35669: case 35673: return xj;
    }
  } function zj(a, b) { a.uniform1fv(this.addr, b); } function Aj(a, b) { a.uniform1iv(this.addr, b); } function Bj(a, b) { a.uniform2iv(this.addr, b); } function Cj(a, b) { a.uniform3iv(this.addr, b); } function Dj(a, b) { a.uniform4iv(this.addr, b); } function Ej(a, b) { b = Gc(b, this.size, 2); a.uniform2fv(this.addr, b); } function Fj(a, b) { b = Gc(b, this.size, 3); a.uniform3fv(this.addr, b); } function Gj(a, b) { b = Gc(b, this.size, 4); a.uniform4fv(this.addr, b); } function Hj(a, b) {
    b = Gc(b, this.size, 4); a.uniformMatrix2fv(this.addr,
      !1, b);
  } function Ij(a, b) { b = Gc(b, this.size, 9); a.uniformMatrix3fv(this.addr, !1, b); } function Jj(a, b) { b = Gc(b, this.size, 16); a.uniformMatrix4fv(this.addr, !1, b); } function Kj(a, b, c) { const d = b.length; const e = qh(c, d); a.uniform1iv(this.addr, e); for (a = 0; a !== d; ++a)c.safeSetTexture2D(b[a] || vh, e[a]); } function Lj(a, b, c) { const d = b.length; const e = qh(c, d); a.uniform1iv(this.addr, e); for (a = 0; a !== d; ++a)c.safeSetTextureCube(b[a] || wh, e[a]); } function Mj(a) {
    switch (a) {
      case 5126: return zj; case 35664: return Ej; case 35665: return Fj; case 35666: return Gj;
      case 35674: return Hj; case 35675: return Ij; case 35676: return Jj; case 35678: return Kj; case 35680: return Lj; case 5124: case 35670: return Aj; case 35667: case 35671: return Bj; case 35668: case 35672: return Cj; case 35669: case 35673: return Dj;
    }
  } function Nj(a, b, c) { this.id = a; this.addr = c; this.cache = []; this.setValue = yj(b.type); } function xh(a, b, c) { this.id = a; this.addr = c; this.cache = []; this.size = b.size; this.setValue = Mj(b.type); } function yh(a) { this.id = a; this.seq = []; this.map = {}; } function Bb(a, b) {
    this.seq = []; this.map = {}; for (let c = a.getProgramParameter(b, 35718), d = 0; d < c; ++d) { let e = a.getActiveUniform(b, d); const f = a.getUniformLocation(b, e.name); let g = this; let h = e.name; const l = h.length; for (Yf.lastIndex = 0; ;) { const m = Yf.exec(h); const q = Yf.lastIndex; let u = m[1]; let k = m[3]; m[2] === ']' && (u |= 0); if (void 0 === k || k === '[' && q + 2 === l) { h = g; e = void 0 === k ? new Nj(u, e, f) : new xh(u, e, f); h.seq.push(e); h.map[e.id] = e; break; } else k = g.map[u], void 0 === k && (k = new yh(u), u = g, g = k, u.seq.push(g), u.map[g.id] = g), g = k; } }
  } function zh(a, b, c) { b = a.createShader(b); a.shaderSource(b, c); a.compileShader(b); return b; }
  function Ah(a) { switch (a) { case 3E3: return ['Linear', '( value )']; case 3001: return ['sRGB', '( value )']; case 3002: return ['RGBE', '( value )']; case 3004: return ['RGBM', '( value, 7.0 )']; case 3005: return ['RGBM', '( value, 16.0 )']; case 3006: return ['RGBD', '( value, 256.0 )']; case 3007: return ['Gamma', '( value, float( GAMMA_FACTOR ) )']; case 3003: return ['LogLuv', '( value )']; default: throw Error(`unsupported encoding: ${a}`); } } function Bh(a, b, c) {
    const d = a.getShaderParameter(b, 35713); const e = a.getShaderInfoLog(b).trim();
    if (d && e === '') return ''; a = a.getShaderSource(b).split('\n'); for (b = 0; b < a.length; b++)a[b] = `${b + 1}: ${a[b]}`; a = a.join('\n'); return `THREE.WebGLShader: gl.getShaderInfoLog() ${c}\n${e}${a}`;
  } function Ge(a, b) { b = Ah(b); return `vec4 ${a}( vec4 value ) { return ${b[0]}ToLinear${b[1]}; }`; } function Oj(a, b) { b = Ah(b); return `vec4 ${a}( vec4 value ) { return LinearTo${b[0]}${b[1]}; }`; } function Pj(a, b) {
    switch (b) {
      case 1: b = 'Linear'; break; case 2: b = 'Reinhard'; break; case 3: b = 'Uncharted2'; break; case 4: b = 'OptimizedCineon'; break; case 5: b = 'ACESFilmic'; break; default: throw Error(`unsupported toneMapping: ${b}`);
    } return `vec3 ${a}( vec3 color ) { return ${b}ToneMapping( color ); }`;
  } function Qj(a, b, c) {
    a = a || {}; return [a.derivatives || b.envMapCubeUV || b.bumpMap || b.tangentSpaceNormalMap || b.clearcoatNormalMap || b.flatShading ? '#extension GL_OES_standard_derivatives : enable' : '', (a.fragDepth || b.logarithmicDepthBuffer) && c.get('EXT_frag_depth') ? '#extension GL_EXT_frag_depth : enable' : '', a.drawBuffers && c.get('WEBGL_draw_buffers') ? '#extension GL_EXT_draw_buffers : require'
      : '', (a.shaderTextureLOD || b.envMap) && c.get('EXT_shader_texture_lod') ? '#extension GL_EXT_shader_texture_lod : enable' : ''].filter(Hd).join('\n');
  } function Rj(a) { const b = []; let c; for (c in a) { const d = a[c]; !1 !== d && b.push(`#define ${c} ${d}`); } return b.join('\n'); } function Hd(a) { return a !== ''; } function Ch(a, b) {
    return a.replace(/NUM_DIR_LIGHTS/g, b.numDirLights).replace(/NUM_SPOT_LIGHTS/g, b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, b.numPointLights)
      .replace(/NUM_HEMI_LIGHTS/g,
        b.numHemiLights)
      .replace(/NUM_DIR_LIGHT_SHADOWS/g, b.numDirLightShadows)
      .replace(/NUM_SPOT_LIGHT_SHADOWS/g, b.numSpotLightShadows)
      .replace(/NUM_POINT_LIGHT_SHADOWS/g, b.numPointLightShadows);
  } function Dh(a, b) { return a.replace(/NUM_CLIPPING_PLANES/g, b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, b.numClippingPlanes - b.numClipIntersection); } function Zf(a, b) { a = N[b]; if (void 0 === a) throw Error(`Can not resolve #include <${b}>`); return a.replace($f, Zf); } function Eh(a, b, c, d) {
    a = ''; for (b = parseInt(b); b < parseInt(c); b++) {
      a
+= d.replace(/\[ i \]/g, `[ ${b} ]`).replace(/UNROLLED_LOOP_INDEX/g, b);
    } return a;
  } function Fh(a) { let b = `precision ${a.precision} float;\nprecision ${a.precision} int;`; a.precision === 'highp' ? b += '\n#define HIGH_PRECISION' : a.precision === 'mediump' ? b += '\n#define MEDIUM_PRECISION' : a.precision === 'lowp' && (b += '\n#define LOW_PRECISION'); return b; } function Sj(a) {
    let b = 'SHADOWMAP_TYPE_BASIC'; a.shadowMapType === 1 ? b = 'SHADOWMAP_TYPE_PCF' : a.shadowMapType === 2 ? b = 'SHADOWMAP_TYPE_PCF_SOFT' : a.shadowMapType === 3 && (b = 'SHADOWMAP_TYPE_VSM');
    return b;
  } function Tj(a, b) { let c = 'ENVMAP_TYPE_CUBE'; if (a.envMap) switch (b.envMap.mapping) { case 301: case 302: c = 'ENVMAP_TYPE_CUBE'; break; case 306: case 307: c = 'ENVMAP_TYPE_CUBE_UV'; break; case 303: case 304: c = 'ENVMAP_TYPE_EQUIREC'; break; case 305: c = 'ENVMAP_TYPE_SPHERE'; } return c; } function Uj(a, b) { let c = 'ENVMAP_MODE_REFLECTION'; if (a.envMap) switch (b.envMap.mapping) { case 302: case 304: c = 'ENVMAP_MODE_REFRACTION'; } return c; } function Vj(a, b) {
    let c = 'ENVMAP_BLENDING_MULTIPLY'; if (a.envMap) {
      switch (b.combine) {
        case 0: c = 'ENVMAP_BLENDING_MULTIPLY';
          break; case 1: c = 'ENVMAP_BLENDING_MIX'; break; case 2: c = 'ENVMAP_BLENDING_ADD';
      }
    } return c;
  } function Wj(a, b, c, d, e, f) {
    const g = a.getContext(); let h = d.defines; let l = e.vertexShader; let m = e.fragmentShader; let q = Sj(f); let u = Tj(f, d); let k = Uj(f, d); let r = Vj(f, d); let p = a.gammaFactor > 0 ? a.gammaFactor : 1; const v = f.isWebGL2 ? '' : Qj(d.extensions, f, b); const x = Rj(h); const n = g.createProgram(); const y = (h = a.getRenderTarget()) && h.isWebGLMultiviewRenderTarget ? h.numViews : 0; d.isRawShaderMaterial ? (h = [x].filter(Hd).join('\n'), h.length > 0 && (h += '\n'), b = [v, x].filter(Hd).join('\n'), b.length > 0 && (b
+= '\n')) : (h = [Fh(f), `#define SHADER_NAME ${e.name}`, x, f.instancing ? '#define USE_INSTANCING' : '', f.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '', `#define GAMMA_FACTOR ${p}`, `#define MAX_BONES ${f.maxBones}`, f.useFog && f.fog ? '#define USE_FOG' : '', f.useFog && f.fogExp2 ? '#define FOG_EXP2' : '', f.map ? '#define USE_MAP' : '', f.envMap ? '#define USE_ENVMAP' : '', f.envMap ? `#define ${k}` : '', f.lightMap ? '#define USE_LIGHTMAP' : '', f.aoMap ? '#define USE_AOMAP' : '', f.emissiveMap ? '#define USE_EMISSIVEMAP' : '', f.bumpMap ? '#define USE_BUMPMAP'
      : '', f.normalMap ? '#define USE_NORMALMAP' : '', f.normalMap && f.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '', f.normalMap && f.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '', f.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '', f.displacementMap && f.supportsVertexTextures ? '#define USE_DISPLACEMENTMAP' : '', f.specularMap ? '#define USE_SPECULARMAP' : '', f.roughnessMap ? '#define USE_ROUGHNESSMAP' : '', f.metalnessMap ? '#define USE_METALNESSMAP' : '', f.alphaMap ? '#define USE_ALPHAMAP' : '', f.vertexTangents
      ? '#define USE_TANGENT' : '', f.vertexColors ? '#define USE_COLOR' : '', f.vertexUvs ? '#define USE_UV' : '', f.flatShading ? '#define FLAT_SHADED' : '', f.skinning ? '#define USE_SKINNING' : '', f.useVertexTexture ? '#define BONE_TEXTURE' : '', f.morphTargets ? '#define USE_MORPHTARGETS' : '', f.morphNormals && !1 === f.flatShading ? '#define USE_MORPHNORMALS' : '', f.doubleSided ? '#define DOUBLE_SIDED' : '', f.flipSided ? '#define FLIP_SIDED' : '', f.shadowMapEnabled ? '#define USE_SHADOWMAP' : '', f.shadowMapEnabled ? `#define ${q}` : '', f.sizeAttenuation
      ? '#define USE_SIZEATTENUATION' : '', f.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '', f.logarithmicDepthBuffer && (f.isWebGL2 || b.get('EXT_frag_depth')) ? '#define USE_LOGDEPTHBUF_EXT' : '', 'uniform mat4 modelMatrix;', 'uniform mat4 modelViewMatrix;', 'uniform mat4 projectionMatrix;', 'uniform mat4 viewMatrix;', 'uniform mat3 normalMatrix;', 'uniform vec3 cameraPosition;', '#ifdef USE_INSTANCING', ' attribute mat4 instanceMatrix;', '#endif', 'attribute vec3 position;', 'attribute vec3 normal;', 'attribute vec2 uv;',
    '#ifdef USE_TANGENT', '\tattribute vec4 tangent;', '#endif', '#ifdef USE_COLOR', '\tattribute vec3 color;', '#endif', '#ifdef USE_MORPHTARGETS', '\tattribute vec3 morphTarget0;', '\tattribute vec3 morphTarget1;', '\tattribute vec3 morphTarget2;', '\tattribute vec3 morphTarget3;', '\t#ifdef USE_MORPHNORMALS', '\t\tattribute vec3 morphNormal0;', '\t\tattribute vec3 morphNormal1;', '\t\tattribute vec3 morphNormal2;', '\t\tattribute vec3 morphNormal3;', '\t#else', '\t\tattribute vec3 morphTarget4;', '\t\tattribute vec3 morphTarget5;',
    '\t\tattribute vec3 morphTarget6;', '\t\tattribute vec3 morphTarget7;', '\t#endif', '#endif', '#ifdef USE_SKINNING', '\tattribute vec4 skinIndex;', '\tattribute vec4 skinWeight;', '#endif', '\n'].filter(Hd).join('\n'), b = [v, Fh(f), `#define SHADER_NAME ${e.name}`, x, f.alphaTest ? `#define ALPHATEST ${f.alphaTest}${f.alphaTest % 1 ? '' : '.0'}` : '', `#define GAMMA_FACTOR ${p}`, f.useFog && f.fog ? '#define USE_FOG' : '', f.useFog && f.fogExp2 ? '#define FOG_EXP2' : '', f.map ? '#define USE_MAP' : '', f.matcap ? '#define USE_MATCAP' : '', f.envMap ? '#define USE_ENVMAP'
      : '', f.envMap ? `#define ${u}` : '', f.envMap ? `#define ${k}` : '', f.envMap ? `#define ${r}` : '', f.lightMap ? '#define USE_LIGHTMAP' : '', f.aoMap ? '#define USE_AOMAP' : '', f.emissiveMap ? '#define USE_EMISSIVEMAP' : '', f.bumpMap ? '#define USE_BUMPMAP' : '', f.normalMap ? '#define USE_NORMALMAP' : '', f.normalMap && f.objectSpaceNormalMap ? '#define OBJECTSPACE_NORMALMAP' : '', f.normalMap && f.tangentSpaceNormalMap ? '#define TANGENTSPACE_NORMALMAP' : '', f.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '', f.specularMap ? '#define USE_SPECULARMAP'
      : '', f.roughnessMap ? '#define USE_ROUGHNESSMAP' : '', f.metalnessMap ? '#define USE_METALNESSMAP' : '', f.alphaMap ? '#define USE_ALPHAMAP' : '', f.sheen ? '#define USE_SHEEN' : '', f.vertexTangents ? '#define USE_TANGENT' : '', f.vertexColors ? '#define USE_COLOR' : '', f.vertexUvs ? '#define USE_UV' : '', f.gradientMap ? '#define USE_GRADIENTMAP' : '', f.flatShading ? '#define FLAT_SHADED' : '', f.doubleSided ? '#define DOUBLE_SIDED' : '', f.flipSided ? '#define FLIP_SIDED' : '', f.shadowMapEnabled ? '#define USE_SHADOWMAP' : '', f.shadowMapEnabled ? `#define ${
      q}` : '', f.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '', f.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '', f.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '', f.logarithmicDepthBuffer && (f.isWebGL2 || b.get('EXT_frag_depth')) ? '#define USE_LOGDEPTHBUF_EXT' : '', (d.extensions && d.extensions.shaderTextureLOD || f.envMap) && (f.isWebGL2 || b.get('EXT_shader_texture_lod')) ? '#define TEXTURE_LOD_EXT' : '', 'uniform mat4 viewMatrix;', 'uniform vec3 cameraPosition;', f.toneMapping !== 0 ? '#define TONE_MAPPING'
      : '', f.toneMapping !== 0 ? N.tonemapping_pars_fragment : '', f.toneMapping !== 0 ? Pj('toneMapping', f.toneMapping) : '', f.dithering ? '#define DITHERING' : '', f.outputEncoding || f.mapEncoding || f.matcapEncoding || f.envMapEncoding || f.emissiveMapEncoding ? N.encodings_pars_fragment : '', f.mapEncoding ? Ge('mapTexelToLinear', f.mapEncoding) : '', f.matcapEncoding ? Ge('matcapTexelToLinear', f.matcapEncoding) : '', f.envMapEncoding ? Ge('envMapTexelToLinear', f.envMapEncoding) : '', f.emissiveMapEncoding ? Ge('emissiveMapTexelToLinear', f.emissiveMapEncoding)
      : '', f.outputEncoding ? Oj('linearToOutputTexel', f.outputEncoding) : '', f.depthPacking ? `#define DEPTH_PACKING ${d.depthPacking}` : '', '\n'].filter(Hd).join('\n')); l = l.replace($f, Zf); l = Ch(l, f); l = Dh(l, f); m = m.replace($f, Zf); m = Ch(m, f); m = Dh(m, f); l = l.replace(Gh, Eh); m = m.replace(Gh, Eh); f.isWebGL2 && !d.isRawShaderMaterial && (q = !1, u = /^\s*#version\s+300\s+es\s*\n/, d.isShaderMaterial && l.match(u) !== null && m.match(u) !== null && (q = !0, l = l.replace(u, ''), m = m.replace(u, '')), h = `#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n${
      h}`, b = `${['#version 300 es\n\n#define varying in', q ? '' : 'out highp vec4 pc_fragColor;', q ? '' : '#define gl_FragColor pc_fragColor', '#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad'].join('\n')
    }\n${b}`, y > 0 && (h = h.replace('#version 300 es\n', ['#version 300 es\n\n#extension GL_OVR_multiview2 : require', `layout(num_views = ${y}) in;`, '#define VIEW_ID gl_ViewID_OVR'].join('\n')), h = h.replace('uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;', [`uniform mat4 modelViewMatrices[${y}];`, `uniform mat4 projectionMatrices[${y}];`, `uniform mat4 viewMatrices[${y}];`, `uniform mat3 normalMatrices[${y}];`, '#define modelViewMatrix modelViewMatrices[VIEW_ID]\n#define projectionMatrix projectionMatrices[VIEW_ID]\n#define viewMatrix viewMatrices[VIEW_ID]\n#define normalMatrix normalMatrices[VIEW_ID]'].join('\n')),
    b = b.replace('#version 300 es\n', '#version 300 es\n\n#extension GL_OVR_multiview2 : require\n#define VIEW_ID gl_ViewID_OVR'), b = b.replace('uniform mat4 viewMatrix;', [`uniform mat4 viewMatrices[${y}];`, '#define viewMatrix viewMatrices[VIEW_ID]'].join('\n')))); m = b + m; l = zh(g, 35633, h + l); m = zh(g, 35632, m); g.attachShader(n, l); g.attachShader(n, m); void 0 !== d.index0AttributeName ? g.bindAttribLocation(n, 0, d.index0AttributeName) : !0 === f.morphTargets && g.bindAttribLocation(n, 0, 'position'); g.linkProgram(n); if (a.debug.checkShaderErrors) {
      a = g.getProgramInfoLog(n).trim(); f = g.getShaderInfoLog(l).trim(); q = g.getShaderInfoLog(m).trim(); k = u = !0; if (!1 === g.getProgramParameter(n, 35714))u = !1, r = Bh(g, l, 'vertex'), p = Bh(g, m, 'fragment'), console.error('THREE.WebGLProgram: shader error: ', g.getError(), '35715', g.getProgramParameter(n, 35715), 'gl.getProgramInfoLog', a, r, p); else if (a !== '')console.warn('THREE.WebGLProgram: gl.getProgramInfoLog()', a); else if (f === '' || q === '')k = !1; k && (this.diagnostics = {
        runnable: u,
        material: d,
        programLog: a,
        vertexShader: { log: f, prefix: h },
        fragmentShader: { log: q, prefix: b },
      });
    }g.deleteShader(l); g.deleteShader(m); let V; this.getUniforms = function () { void 0 === V && (V = new Bb(g, n)); return V; }; let P; this.getAttributes = function () { if (void 0 === P) { for (var a = {}, b = g.getProgramParameter(n, 35721), c = 0; c < b; c++) { const d = g.getActiveAttrib(n, c).name; a[d] = g.getAttribLocation(n, d); }P = a; } return P; }; this.destroy = function () { g.deleteProgram(n); this.program = void 0; }; this.name = e.name; this.id = Xj++; this.code = c; this.usedTimes = 1; this.program = n; this.vertexShader = l; this.fragmentShader = m; this.numMultiviewViews = y; return this;
  } function Yj(a, b, c) {
    function d(a, b) { if (a)a.isTexture ? c = a.encoding : a.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), c = a.texture.encoding); else var c = 3E3; c === 3E3 && b && (c = 3007); return c; } const e = []; const f = {
      MeshDepthMaterial: 'depth',
      MeshDistanceMaterial: 'distanceRGBA',
      MeshNormalMaterial: 'normal',
      MeshBasicMaterial: 'basic',
      MeshLambertMaterial: 'lambert',
      MeshPhongMaterial: 'phong',
      MeshToonMaterial: 'phong',
      MeshStandardMaterial: 'physical',
      MeshPhysicalMaterial: 'physical',
      MeshMatcapMaterial: 'matcap',
      LineBasicMaterial: 'basic',
      LineDashedMaterial: 'dashed',
      PointsMaterial: 'points',
      ShadowMaterial: 'shadow',
      SpriteMaterial: 'sprite',
    }; const g = 'precision supportsVertexTextures instancing map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen'.split(' ');
    this.getParameters = function (b, e, g, q, u, k, r) {
      const h = f[b.type]; if (r.isSkinnedMesh) { var l = r.skeleton.bones; if (c.floatVertexTextures)l = 1024; else { var m = Math.min(Math.floor((c.maxVertexUniforms - 20) / 4), l.length); m < l.length ? (console.warn(`THREE.WebGLRenderer: Skeleton has ${l.length} bones. This GPU supports ${m}.`), l = 0) : l = m; } } else l = 0; m = c.precision; b.precision !== null && (m = c.getMaxPrecision(b.precision), m !== b.precision && console.warn('THREE.WebGLProgram.getParameters:', b.precision, 'not supported, using', m, 'instead.'));
      const t = a.getRenderTarget(); return {
        isWebGL2: c.isWebGL2,
        shaderID: h,
        precision: m,
        instancing: !0 === r.isInstancedMesh,
        supportsVertexTextures: c.vertexTextures,
        outputEncoding: d(t ? t.texture : null, a.gammaOutput),
        map: !!b.map,
        mapEncoding: d(b.map, a.gammaInput),
        matcap: !!b.matcap,
        matcapEncoding: d(b.matcap, a.gammaInput),
        envMap: !!b.envMap,
        envMapMode: b.envMap && b.envMap.mapping,
        envMapEncoding: d(b.envMap, a.gammaInput),
        envMapCubeUV: !!b.envMap && (b.envMap.mapping === 306 || b.envMap.mapping === 307),
        lightMap: !!b.lightMap,
        aoMap: !!b.aoMap,
        emissiveMap: !!b.emissiveMap,
        emissiveMapEncoding: d(b.emissiveMap, a.gammaInput),
        bumpMap: !!b.bumpMap,
        normalMap: !!b.normalMap,
        objectSpaceNormalMap: b.normalMapType === 1,
        tangentSpaceNormalMap: b.normalMapType === 0,
        clearcoatNormalMap: !!b.clearcoatNormalMap,
        displacementMap: !!b.displacementMap,
        roughnessMap: !!b.roughnessMap,
        metalnessMap: !!b.metalnessMap,
        specularMap: !!b.specularMap,
        alphaMap: !!b.alphaMap,
        gradientMap: !!b.gradientMap,
        sheen: !!b.sheen,
        combine: b.combine,
        vertexTangents: b.normalMap && b.vertexTangents,
        vertexColors: b.vertexColors,
        vertexUvs: !!b.map || !!b.bumpMap || !!b.normalMap || !!b.specularMap || !!b.alphaMap || !!b.emissiveMap || !!b.roughnessMap || !!b.metalnessMap || !!b.clearcoatNormalMap,
        fog: !!q,
        useFog: b.fog,
        fogExp2: q && q.isFogExp2,
        flatShading: b.flatShading,
        sizeAttenuation: b.sizeAttenuation,
        logarithmicDepthBuffer: c.logarithmicDepthBuffer,
        skinning: b.skinning && l > 0,
        maxBones: l,
        useVertexTexture: c.floatVertexTextures,
        morphTargets: b.morphTargets,
        morphNormals: b.morphNormals,
        maxMorphTargets: a.maxMorphTargets,
        maxMorphNormals: a.maxMorphNormals,
        numDirLights: e.directional.length,
        numPointLights: e.point.length,
        numSpotLights: e.spot.length,
        numRectAreaLights: e.rectArea.length,
        numHemiLights: e.hemi.length,
        numDirLightShadows: e.directionalShadowMap.length,
        numPointLightShadows: e.pointShadowMap.length,
        numSpotLightShadows: e.spotShadowMap.length,
        numClippingPlanes: u,
        numClipIntersection: k,
        dithering: b.dithering,
        shadowMapEnabled: a.shadowMap.enabled && g.length > 0,
        shadowMapType: a.shadowMap.type,
        toneMapping: b.toneMapped ? a.toneMapping : 0,
        physicallyCorrectLights: a.physicallyCorrectLights,
        premultipliedAlpha: b.premultipliedAlpha,
        alphaTest: b.alphaTest,
        doubleSided: b.side === 2,
        flipSided: b.side === 1,
        depthPacking: void 0 !== b.depthPacking ? b.depthPacking : !1,
      };
    }; this.getProgramCode = function (b, c) { const d = []; c.shaderID ? d.push(c.shaderID) : (d.push(b.fragmentShader), d.push(b.vertexShader)); if (void 0 !== b.defines) for (var e in b.defines)d.push(e), d.push(b.defines[e]); for (e = 0; e < g.length; e++)d.push(c[g[e]]); d.push(b.onBeforeCompile.toString()); d.push(a.gammaOutput); d.push(a.gammaFactor); return d.join(); }; this.acquireProgram = function (c, d, f, g) { for (var h, l = 0, m = e.length; l < m; l++) { const q = e[l]; if (q.code === g) { h = q; ++h.usedTimes; break; } } void 0 === h && (h = new Wj(a, b, g, c, d, f), e.push(h)); return h; }; this.releaseProgram = function (a) { if (--a.usedTimes === 0) { const b = e.indexOf(a); e[b] = e[e.length - 1]; e.pop(); a.destroy(); } }; this.programs = e;
  } function Zj() {
    let a = new WeakMap(); return {
      get(b) { let c = a.get(b); void 0 === c && (c = {}, a.set(b, c)); return c; }, remove(b) { a.delete(b); }, update(b, c, d) { a.get(b)[c] = d; }, dispose() { a = new WeakMap(); },
    };
  }
  function ak(a, b) { return a.groupOrder !== b.groupOrder ? a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.program !== b.program ? a.program.id - b.program.id : a.material.id !== b.material.id ? a.material.id - b.material.id : a.z !== b.z ? a.z - b.z : a.id - b.id; } function bk(a, b) { return a.groupOrder !== b.groupOrder ? a.groupOrder - b.groupOrder : a.renderOrder !== b.renderOrder ? a.renderOrder - b.renderOrder : a.z !== b.z ? b.z - a.z : a.id - b.id; } function Hh() {
    function a(a, d, e, m, q, u) {
      let g = b[c]; void 0 === g ? (g = {
        id: a.id,
        object: a,
        geometry: d,
        material: e,
        program: e.program || f,
        groupOrder: m,
        renderOrder: a.renderOrder,
        z: q,
        group: u,
      }, b[c] = g) : (g.id = a.id, g.object = a, g.geometry = d, g.material = e, g.program = e.program || f, g.groupOrder = m, g.renderOrder = a.renderOrder, g.z = q, g.group = u); c++; return g;
    } var b = []; var c = 0; const d = []; const e = []; var f = { id: -1 }; return {
      opaque: d,
      transparent: e,
      init() { c = 0; d.length = 0; e.length = 0; },
      push(b, c, f, m, q, u) { b = a(b, c, f, m, q, u); (!0 === f.transparent ? e : d).push(b); },
      unshift(b, c, f, m, q, u) {
        b = a(b, c, f, m, q, u); (!0 === f.transparent
          ? e : d).unshift(b);
      },
      sort() { d.length > 1 && d.sort(ak); e.length > 1 && e.sort(bk); },
    };
  } function ck() { function a(c) { c = c.target; c.removeEventListener('dispose', a); b.delete(c); } var b = new WeakMap(); return { get(c, d) { const e = b.get(c); if (void 0 === e) { var f = new Hh(); b.set(c, new WeakMap()); b.get(c).set(d, f); c.addEventListener('dispose', a); } else f = e.get(d), void 0 === f && (f = new Hh(), e.set(d, f)); return f; }, dispose() { b = new WeakMap(); } }; } function dk() {
    const a = {}; return {
      get(b) {
        if (void 0 !== a[b.id]) return a[b.id]; switch (b.type) {
          case 'DirectionalLight': var c = {
            direction: new n(), color: new H(), shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new w(),
          }; break; case 'SpotLight': c = {
            position: new n(), direction: new n(), color: new H(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new w(),
          }; break; case 'PointLight': c = {
            position: new n(), color: new H(), distance: 0, decay: 0, shadow: !1, shadowBias: 0, shadowRadius: 1, shadowMapSize: new w(), shadowCameraNear: 1, shadowCameraFar: 1E3,
          }; break; case 'HemisphereLight': c = { direction: new n(), skyColor: new H(), groundColor: new H() };
            break; case 'RectAreaLight': c = {
            color: new H(), position: new n(), halfWidth: new n(), halfHeight: new n(),
          };
        } return a[b.id] = c;
      },
    };
  } function ek(a, b) { return (b.castShadow ? 1 : 0) - (a.castShadow ? 1 : 0); } function fk() {
    for (var a = new dk(), b = {
        version: 0,
        hash: {
          directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1,
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotShadowMap: [],
        spotShadowMatrix: [],
        rectArea: [],
        point: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      }, c = 0; c < 9; c++)b.probe.push(new n()); const d = new n(); const e = new U(); const
      f = new U(); return {
      setup(c, h, l) {
        for (var g = 0, q = 0, u = 0, k = 0; k < 9; k++)b.probe[k].set(0, 0, 0); let r = h = 0; let p = 0; let v = 0; let n = 0; let z = 0; let y = 0; let V = 0; l = l.matrixWorldInverse; c.sort(ek); k = 0; for (let P = c.length; k < P; k++) {
          const C = c[k]; const Cb = C.color; let w = C.intensity; const A = C.distance; let wa = C.shadow && C.shadow.map ? C.shadow.map.texture : null; if (C.isAmbientLight) {
            g += Cb.r
* w, q += Cb.g * w, u += Cb.b * w;
          } else if (C.isLightProbe) for (wa = 0; wa < 9; wa++)b.probe[wa].addScaledVector(C.sh.coefficients[wa], w); else if (C.isDirectionalLight) {
            var G = a.get(C); G.color.copy(C.color).multiplyScalar(C.intensity); G.direction.setFromMatrixPosition(C.matrixWorld); d.setFromMatrixPosition(C.target.matrixWorld); G.direction.sub(d); G.direction.transformDirection(l); if (G.shadow = C.castShadow) {
              w = C.shadow, G.shadowBias = w.bias, G.shadowRadius = w.radius, G.shadowMapSize = w.mapSize, b.directionalShadowMap[h] = wa, b.directionalShadowMatrix[h] = C.shadow.matrix, z++;
            }b.directional[h] = G; h++;
          } else if (C.isSpotLight) {
            G = a.get(C); G.position.setFromMatrixPosition(C.matrixWorld); G.position.applyMatrix4(l); G.color.copy(Cb).multiplyScalar(w); G.distance = A; G.direction.setFromMatrixPosition(C.matrixWorld); d.setFromMatrixPosition(C.target.matrixWorld); G.direction.sub(d); G.direction.transformDirection(l); G.coneCos = Math.cos(C.angle); G.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)); G.decay = C.decay; if (G.shadow = C.castShadow) {
              w = C.shadow, G.shadowBias = w.bias, G.shadowRadius = w.radius, G.shadowMapSize = w.mapSize, b.spotShadowMap[p] = wa, b.spotShadowMatrix[p] = C.shadow.matrix, V++;
            }b.spot[p] = G; p++;
          } else if (C.isRectAreaLight)G = a.get(C), G.color.copy(Cb).multiplyScalar(w), G.position.setFromMatrixPosition(C.matrixWorld), G.position.applyMatrix4(l), f.identity(), e.copy(C.matrixWorld), e.premultiply(l), f.extractRotation(e), G.halfWidth.set(0.5 * C.width, 0, 0), G.halfHeight.set(0, 0.5 * C.height, 0), G.halfWidth.applyMatrix4(f), G.halfHeight.applyMatrix4(f), b.rectArea[v] = G, v++; else if (C.isPointLight) {
            G = a.get(C); G.position.setFromMatrixPosition(C.matrixWorld); G.position.applyMatrix4(l); G.color.copy(C.color).multiplyScalar(C.intensity); G.distance = C.distance; G.decay = C.decay; if (G.shadow = C.castShadow)w = C.shadow, G.shadowBias = w.bias, G.shadowRadius = w.radius, G.shadowMapSize = w.mapSize, G.shadowCameraNear = w.camera.near, G.shadowCameraFar = w.camera.far, b.pointShadowMap[r] = wa, b.pointShadowMatrix[r] = C.shadow.matrix, y++; b.point[r] = G; r++;
          } else {
            C.isHemisphereLight && (G = a.get(C), G.direction.setFromMatrixPosition(C.matrixWorld),
            G.direction.transformDirection(l), G.direction.normalize(), G.skyColor.copy(C.color).multiplyScalar(w), G.groundColor.copy(C.groundColor).multiplyScalar(w), b.hemi[n] = G, n++);
          }
        }b.ambient[0] = g; b.ambient[1] = q; b.ambient[2] = u; c = b.hash; if (c.directionalLength !== h || c.pointLength !== r || c.spotLength !== p || c.rectAreaLength !== v || c.hemiLength !== n || c.numDirectionalShadows !== z || c.numPointShadows !== y || c.numSpotShadows !== V) {
          b.directional.length = h, b.spot.length = p, b.rectArea.length = v, b.point.length = r, b.hemi.length = n, b.directionalShadowMap.length = z, b.pointShadowMap.length = y, b.spotShadowMap.length = V, b.directionalShadowMatrix.length = z, b.pointShadowMatrix.length = y, b.spotShadowMatrix.length = V, c.directionalLength = h, c.pointLength = r, c.spotLength = p, c.rectAreaLength = v, c.hemiLength = n, c.numDirectionalShadows = z, c.numPointShadows = y, c.numSpotShadows = V, b.version = gk++;
        }
      },
      state: b,
    };
  } function Ih() {
    const a = new fk(); const b = []; const
      c = []; return {
      init() { b.length = 0; c.length = 0; },
      state: { lightsArray: b, shadowsArray: c, lights: a },
      setupLights(d) { a.setup(b, c, d); },
      pushLight(a) { b.push(a); },
      pushShadow(a) { c.push(a); },
    };
  } function hk() { function a(c) { c = c.target; c.removeEventListener('dispose', a); b.delete(c); } var b = new WeakMap(); return { get(c, d) { if (!1 === b.has(c)) { var e = new Ih(); b.set(c, new WeakMap()); b.get(c).set(d, e); c.addEventListener('dispose', a); } else !1 === b.get(c).has(d) ? (e = new Ih(), b.get(c).set(d, e)) : e = b.get(c).get(d); return e; }, dispose() { b = new WeakMap(); } }; } function Db(a) {
    M.call(this); this.type = 'MeshDepthMaterial'; this.depthPacking = 3200; this.morphTargets = this.skinning = !1; this.displacementMap = this.alphaMap = this.map = null; this.displacementScale = 1; this.displacementBias = 0; this.wireframe = !1; this.wireframeLinewidth = 1; this.fog = !1; this.setValues(a);
  } function Eb(a) { M.call(this); this.type = 'MeshDistanceMaterial'; this.referencePosition = new n(); this.nearDistance = 1; this.farDistance = 1E3; this.morphTargets = this.skinning = !1; this.displacementMap = this.alphaMap = this.map = null; this.displacementScale = 1; this.displacementBias = 0; this.fog = !1; this.setValues(a); } function Jh(a, b, c) {
    function d(b, c, d, e, f, g) {
      let h = b.geometry;
      let l = m; let p = b.customDepthMaterial; d.isPointLight && (l = q, p = b.customDistanceMaterial); p ? l = p : (p = !1, c.morphTargets && (h && h.isBufferGeometry ? p = h.morphAttributes && h.morphAttributes.position && h.morphAttributes.position.length > 0 : h && h.isGeometry && (p = h.morphTargets && h.morphTargets.length > 0)), b.isSkinnedMesh && !1 === c.skinning && console.warn('THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:', b), b = b.isSkinnedMesh && c.skinning, h = 0, p && (h |= 1), b && (h |= 2), l = l[h]); a.localClippingEnabled && !0
=== c.clipShadows && c.clippingPlanes.length !== 0 && (h = l.uuid, p = c.uuid, b = u[h], void 0 === b && (b = {}, u[h] = b), h = b[p], void 0 === h && (h = l.clone(), b[p] = h), l = h); l.visible = c.visible; l.wireframe = c.wireframe; l.side = g === 3 ? c.shadowSide != null ? c.shadowSide : c.side : c.shadowSide != null ? c.shadowSide : k[c.side]; l.clipShadows = c.clipShadows; l.clippingPlanes = c.clippingPlanes; l.clipIntersection = c.clipIntersection; l.wireframeLinewidth = c.wireframeLinewidth; l.linewidth = c.linewidth; d.isPointLight && l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(d.matrixWorld),
      l.nearDistance = e, l.farDistance = f); return l;
    } function e(c, g, h, l, m) {
      if (!1 !== c.visible) {
        if (c.layers.test(g.layers) && (c.isMesh || c.isLine || c.isPoints) && (c.castShadow || c.receiveShadow && m === 3) && (!c.frustumCulled || f.intersectsObject(c))) {
          c.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse, c.matrixWorld); var q = b.update(c); var u = c.material; if (Array.isArray(u)) {
            for (let k = q.groups, p = 0, t = k.length; p < t; p++) {
              const r = k[p]; var v = u[r.materialIndex]; v && v.visible && (v = d(c, v, l, h.near, h.far, m), a.renderBufferDirect(h, null, q, v, c,
                r));
            }
          } else u.visible && (v = d(c, u, l, h.near, h.far, m), a.renderBufferDirect(h, null, q, v, c, null));
        }c = c.children; q = 0; for (u = c.length; q < u; q++)e(c[q], g, h, l, m);
      }
    } var f = new Ed(); const g = new w(); const h = new w(); const l = new aa(); var m = Array(4); var q = Array(4); var u = {}; var k = { 0: 1, 1: 0, 2: 2 }; const r = new ma({
      defines: { SAMPLE_RATE: 0.25, HALF_SAMPLE_RATE: 0.125 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new w() }, radius: { value: 4 } }, vertexShader: 'void main() {\n\tgl_Position = vec4( position, 1.0 );\n}', fragmentShader: 'uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n  \n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = decodeHalfRGBA ( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = pow( squared_mean - mean * mean, 0.5 );\n  gl_FragColor = encodeHalfRGBA( vec2( mean, std_dev ) );\n}',
    });
    const p = r.clone(); p.defines.HORIZONAL_PASS = 1; let v = new E(); v.addAttribute('position', new O(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)); const n = new ja(v, r); for (v = 0; v !== 4; ++v) { let z = (v & 1) !== 0; const y = (v & 2) !== 0; const V = new Db({ depthPacking: 3201, morphTargets: z, skinning: y }); m[v] = V; z = new Eb({ morphTargets: z, skinning: y }); q[v] = z; } const P = this; this.enabled = !1; this.autoUpdate = !0; this.needsUpdate = !1; this.type = 1; this.render = function (d, m, q) {
      if (!1 !== P.enabled && (!1 !== P.autoUpdate || !1 !== P.needsUpdate) && d.length !== 0) {
        const u = a.getRenderTarget();
        const k = a.getActiveCubeFace(); const t = a.getActiveMipmapLevel(); const v = a.state; v.setBlending(0); v.buffers.color.setClear(1, 1, 1, 1); v.buffers.depth.setTest(!0); v.setScissorTest(!1); for (let x = 0, y = d.length; x < y; x++) {
          let z = d[x]; let T = z.shadow; if (void 0 === T)console.warn('THREE.WebGLShadowMap:', z, 'has no shadow.'); else {
            g.copy(T.mapSize); let X = T.getFrameExtents(); g.multiply(X); h.copy(T.mapSize); if (g.x > c || g.y > c) {
              console.warn('THREE.WebGLShadowMap:', z, 'has shadow exceeding max texture size, reducing'), g.x > c && (h.x = Math.floor(c / X.x),
              g.x = h.x * X.x, T.mapSize.x = h.x), g.y > c && (h.y = Math.floor(c / X.y), g.y = h.y * X.y, T.mapSize.y = h.y);
            }T.map !== null || T.isPointLightShadow || this.type !== 3 || (X = { minFilter: 1006, magFilter: 1006, format: 1023 }, T.map = new la(g.x, g.y, X), T.map.texture.name = `${z.name}.shadowMap`, T.mapPass = new la(g.x, g.y, X), T.camera.updateProjectionMatrix()); T.map === null && (X = { minFilter: 1003, magFilter: 1003, format: 1023 }, T.map = new la(g.x, g.y, X), T.map.texture.name = `${z.name}.shadowMap`, T.camera.updateProjectionMatrix()); a.setRenderTarget(T.map); a.clear();
            X = T.getViewportCount(); for (let V = 0; V < X; V++) { const C = T.getViewport(V); l.set(h.x * C.x, h.y * C.y, h.x * C.z, h.y * C.w); v.viewport(l); T.updateMatrices(z, q, V); f = T.getFrustum(); e(m, q, T.camera, z, this.type); }T.isPointLightShadow || this.type !== 3 || (z = T, T = q, X = b.update(n), r.uniforms.shadow_pass.value = z.map.texture, r.uniforms.resolution.value = z.mapSize, r.uniforms.radius.value = z.radius, a.setRenderTarget(z.mapPass), a.clear(), a.renderBufferDirect(T, null, X, r, n, null), p.uniforms.shadow_pass.value = z.mapPass.texture, p.uniforms.resolution.value = z.mapSize, p.uniforms.radius.value = z.radius, a.setRenderTarget(z.map), a.clear(), a.renderBufferDirect(T, null, X, p, n, null));
          }
        }P.needsUpdate = !1; a.setRenderTarget(u, k, t);
      }
    };
  } function ik(a, b, c, d) {
    function e(b, c, d) { const e = new Uint8Array(4); const f = a.createTexture(); a.bindTexture(b, f); a.texParameteri(b, 10241, 9728); a.texParameteri(b, 10240, 9728); for (b = 0; b < d; b++)a.texImage2D(c + b, 0, 6408, 1, 1, 0, 6408, 5121, e); return f; } function f(c, e) {
      z[c] = 1; y[c] === 0 && (a.enableVertexAttribArray(c), y[c] = 1); V[c] !== e && ((d.isWebGL2 ? a : b.get('ANGLE_instanced_arrays'))[d.isWebGL2
        ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'](c, e), V[c] = e);
    } function g(b) { !0 !== P[b] && (a.enable(b), P[b] = !0); } function h(b) { !1 !== P[b] && (a.disable(b), P[b] = !1); } function l(b, d, e, f, l, m, q, u) {
      if (b === 0)A && (h(3042), A = !1); else if (A || (g(3042), A = !0), b !== 5) {
        if (b !== B || u !== T) {
          if (wa !== 100 || E !== 100)a.blendEquation(32774), E = wa = 100; if (u) {
            switch (b) {
              case 1: a.blendFuncSeparate(1, 771, 1, 771); break; case 2: a.blendFunc(1, 1); break; case 3: a.blendFuncSeparate(0, 0, 769, 771); break; case 4: a.blendFuncSeparate(0, 768, 0, 770); break; default: console.error('THREE.WebGLState: Invalid blending: ',
                b);
            }
          } else switch (b) { case 1: a.blendFuncSeparate(770, 771, 1, 771); break; case 2: a.blendFunc(770, 1); break; case 3: a.blendFunc(0, 769); break; case 4: a.blendFunc(0, 768); break; default: console.error('THREE.WebGLState: Invalid blending: ', b); }H = I = ag = G = null; B = b; T = u;
        }
      } else { l = l || d; m = m || e; q = q || f; if (d !== wa || l !== E)a.blendEquationSeparate(c.convert(d), c.convert(l)), wa = d, E = l; if (e !== G || f !== ag || m !== I || q !== H)a.blendFuncSeparate(c.convert(e), c.convert(f), c.convert(m), c.convert(q)), G = e, ag = f, I = m, H = q; B = b; T = null; }
    } function m(b) {
      X
!== b && (b ? a.frontFace(2304) : a.frontFace(2305), X = b);
    } function q(b) { b !== 0 ? (g(2884), b !== bg && (b === 1 ? a.cullFace(1029) : b === 2 ? a.cullFace(1028) : a.cullFace(1032))) : h(2884); bg = b; } function u(b, c, d) { if (b) { if (g(32823), ha !== c || bc !== d)a.polygonOffset(c, d), ha = c, bc = d; } else h(32823); } function k(b) { void 0 === b && (b = 33984 + D - 1); Pa !== b && (a.activeTexture(b), Pa = b); } const r = new function () {
      let b = !1; const c = new aa(); let d = null; const e = new aa(0, 0, 0, 0); return {
        setMask(c) { d === c || b || (a.colorMask(c, c, c, c), d = c); },
        setLocked(a) { b = a; },
        setClear(b,
          d, f, g, h) { !0 === h && (b *= g, d *= g, f *= g); c.set(b, d, f, g); !1 === e.equals(c) && (a.clearColor(b, d, f, g), e.copy(c)); },
        reset() { b = !1; d = null; e.set(-1, 0, 0, 0); },
      };
    }(); const p = new function () {
      let b = !1; let c = null; let d = null; let e = null; return {
        setTest(a) { a ? g(2929) : h(2929); },
        setMask(d) { c === d || b || (a.depthMask(d), c = d); },
        setFunc(b) {
          if (d !== b) {
            if (b) {
              switch (b) {
                case 0: a.depthFunc(512); break; case 1: a.depthFunc(519); break; case 2: a.depthFunc(513); break; case 3: a.depthFunc(515); break; case 4: a.depthFunc(514); break; case 5: a.depthFunc(518);
                  break; case 6: a.depthFunc(516); break; case 7: a.depthFunc(517); break; default: a.depthFunc(515);
              }
            } else a.depthFunc(515); d = b;
          }
        },
        setLocked(a) { b = a; },
        setClear(b) { e !== b && (a.clearDepth(b), e = b); },
        reset() { b = !1; e = d = c = null; },
      };
    }(); const v = new function () {
      let b = !1; let c = null; let d = null; let e = null; let f = null; let l = null; let m = null; let q = null; let u = null; return {
        setTest(a) { b || (a ? g(2960) : h(2960)); },
        setMask(d) { c === d || b || (a.stencilMask(d), c = d); },
        setFunc(b, c, g) { if (d !== b || e !== c || f !== g)a.stencilFunc(b, c, g), d = b, e = c, f = g; },
        setOp(b, c, d) { if (l !== b || m !== c || q !== d)a.stencilOp(b, c, d), l = b, m = c, q = d; },
        setLocked(a) { b = a; },
        setClear(b) { u !== b && (a.clearStencil(b), u = b); },
        reset() { b = !1; u = q = m = l = f = e = d = c = null; },
      };
    }(); let n = a.getParameter(34921); var z = new Uint8Array(n); var y = new Uint8Array(n); var V = new Uint8Array(n); var P = {}; let C = null; let w = null; var A = null; var B = null; var wa = null; var G = null; var ag = null; var E = null; var I = null; var H = null; var T = !1; var X = null; var bg = null; let ac = null; var ha = null; var bc = null; var D = a.getParameter(35661); let
      dg = !1; n = 0; n = a.getParameter(7938); n.indexOf('WebGL') !== -1 ? (n = parseFloat(/^WebGL ([0-9])/.exec(n)[1]),
    dg = n >= 1) : n.indexOf('OpenGL ES') !== -1 && (n = parseFloat(/^OpenGL ES ([0-9])/.exec(n)[1]), dg = n >= 2); var Pa = null; let eg = {}; const F = new aa(); const O = new aa(); const K = {}; K[3553] = e(3553, 3553, 1); K[34067] = e(34067, 34069, 6); r.setClear(0, 0, 0, 1); p.setClear(1); v.setClear(0); g(2929); p.setFunc(3); m(!1); q(1); g(2884); l(0); return {
      buffers: { color: r, depth: p, stencil: v },
      initAttributes() { for (let a = 0, b = z.length; a < b; a++)z[a] = 0; },
      enableAttribute(a) { f(a, 0); },
      enableAttributeAndDivisor: f,
      disableUnusedAttributes() {
        for (let b = 0, c = y.length; b
!== c; ++b)y[b] !== z[b] && (a.disableVertexAttribArray(b), y[b] = 0);
      },
      enable: g,
      disable: h,
      getCompressedTextureFormats() { if (C === null && (C = [], b.get('WEBGL_compressed_texture_pvrtc') || b.get('WEBGL_compressed_texture_s3tc') || b.get('WEBGL_compressed_texture_etc1') || b.get('WEBGL_compressed_texture_astc'))) for (let c = a.getParameter(34467), d = 0; d < c.length; d++)C.push(c[d]); return C; },
      useProgram(b) { return w !== b ? (a.useProgram(b), w = b, !0) : !1; },
      setBlending: l,
      setMaterial(a, b) {
        a.side === 2 ? h(2884) : g(2884);
        let c = a.side === 1; b && (c = !c); m(c); a.blending === 1 && !1 === a.transparent ? l(0) : l(a.blending, a.blendEquation, a.blendSrc, a.blendDst, a.blendEquationAlpha, a.blendSrcAlpha, a.blendDstAlpha, a.premultipliedAlpha); p.setFunc(a.depthFunc); p.setTest(a.depthTest); p.setMask(a.depthWrite); r.setMask(a.colorWrite); b = a.stencilWrite; v.setTest(b); b && (v.setMask(a.stencilWriteMask), v.setFunc(a.stencilFunc, a.stencilRef, a.stencilFuncMask), v.setOp(a.stencilFail, a.stencilZFail, a.stencilZPass)); u(a.polygonOffset, a.polygonOffsetFactor,
          a.polygonOffsetUnits);
      },
      setFlipSided: m,
      setCullFace: q,
      setLineWidth(b) { b !== ac && (dg && a.lineWidth(b), ac = b); },
      setPolygonOffset: u,
      setScissorTest(a) { a ? g(3089) : h(3089); },
      activeTexture: k,
      bindTexture(b, c) { Pa === null && k(); let d = eg[Pa]; void 0 === d && (d = { type: void 0, texture: void 0 }, eg[Pa] = d); if (d.type !== b || d.texture !== c)a.bindTexture(b, c || K[b]), d.type = b, d.texture = c; },
      compressedTexImage2D() { try { a.compressedTexImage2D.apply(a, arguments); } catch (Z) { console.error('THREE.WebGLState:', Z); } },
      texImage2D() { try { a.texImage2D.apply(a, arguments); } catch (Z) { console.error('THREE.WebGLState:', Z); } },
      texImage3D() { try { a.texImage3D.apply(a, arguments); } catch (Z) { console.error('THREE.WebGLState:', Z); } },
      scissor(b) { !1 === F.equals(b) && (a.scissor(b.x, b.y, b.z, b.w), F.copy(b)); },
      viewport(b) { !1 === O.equals(b) && (a.viewport(b.x, b.y, b.z, b.w), O.copy(b)); },
      reset() {
        for (let b = 0; b < y.length; b++)y[b] === 1 && (a.disableVertexAttribArray(b), y[b] = 0); P = {}; Pa = C = null; eg = {}; bg = X = B = w = null; r.reset();
        p.reset(); v.reset();
      },
    };
  } function jk(a, b, c, d, e, f, g) {
    function h(a, b) { return E ? new OffscreenCanvas(a, b) : document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas'); } function l(a, b, c, d) {
      let e = 1; if (a.width > d || a.height > d)e = d / Math.max(a.width, a.height); if (e < 1 || !0 === b) {
        if (typeof HTMLImageElement !== 'undefined' && a instanceof HTMLImageElement || typeof HTMLCanvasElement !== 'undefined' && a instanceof HTMLCanvasElement || typeof ImageBitmap !== 'undefined' && a instanceof ImageBitmap) {
          return d = b ? L.floorPowerOfTwo : Math.floor,
          b = d(e * a.width), e = d(e * a.height), void 0 === G && (G = h(b, e)), c = c ? h(b, e) : G, c.width = b, c.height = e, c.getContext('2d').drawImage(a, 0, 0, b, e), console.warn(`THREE.WebGLRenderer: Texture has been resized from (${a.width}x${a.height}) to (${b}x${e}).`), c;
        } 'data' in a && console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (${a.width}x${a.height}).`);
      } return a;
    } function m(a) { return L.isPowerOfTwo(a.width) && L.isPowerOfTwo(a.height); } function q(a, b) {
      return a.generateMipmaps && b && a.minFilter !== 1003 && a.minFilter
!== 1006;
    } function u(b, c, e, f) { a.generateMipmap(b); d.get(c).__maxMipLevel = Math.log(Math.max(e, f)) * Math.LOG2E; } function k(a, c) {
      if (!e.isWebGL2) return a; let d = a; a === 6403 && (c === 5126 && (d = 33326), c === 5131 && (d = 33325), c === 5121 && (d = 33321)); a === 6407 && (c === 5126 && (d = 34837), c === 5131 && (d = 34843), c === 5121 && (d = 32849)); a === 6408 && (c === 5126 && (d = 34836), c === 5131 && (d = 34842), c === 5121 && (d = 32856)); d === 33325 || d === 33326 || d === 34842 || d === 34836 ? b.get('EXT_color_buffer_float') : (d === 34843 || d === 34837) && console.warn('THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.');
      return d;
    } function r(a) { return a === 1003 || a === 1004 || a === 1005 ? 9728 : 9729; } function p(b) { b = b.target; b.removeEventListener('dispose', p); const c = d.get(b); void 0 !== c.__webglInit && (a.deleteTexture(c.__webglTexture), d.remove(b)); b.isVideoTexture && wa.delete(b); g.memory.textures--; } function v(b) {
      b = b.target; b.removeEventListener('dispose', v); const c = d.get(b); let e = d.get(b.texture); if (b) {
        void 0 !== e.__webglTexture && a.deleteTexture(e.__webglTexture); b.depthTexture && b.depthTexture.dispose(); if (b.isWebGLRenderTargetCube) { for (e = 0; e < 6; e++)a.deleteFramebuffer(c.__webglFramebuffer[e]), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer[e]); } else a.deleteFramebuffer(c.__webglFramebuffer), c.__webglDepthbuffer && a.deleteRenderbuffer(c.__webglDepthbuffer); if (b.isWebGLMultiviewRenderTarget) { a.deleteTexture(c.__webglColorTexture); a.deleteTexture(c.__webglDepthStencilTexture); g.memory.textures -= 2; e = 0; for (let f = c.__webglViewFramebuffers.length; e < f; e++)a.deleteFramebuffer(c.__webglViewFramebuffers[e]); }d.remove(b.texture);
        d.remove(b);
      }g.memory.textures--;
    } function n(a, b) { const e = d.get(a); if (a.isVideoTexture) { var f = g.render.frame; wa.get(a) !== f && (wa.set(a, f), a.update()); } if (a.version > 0 && e.__version !== a.version) if (f = a.image, void 0 === f)console.warn('THREE.WebGLRenderer: Texture marked for update but image is undefined'); else if (!1 === f.complete)console.warn('THREE.WebGLRenderer: Texture marked for update but image is incomplete'); else { C(e, a, b); return; }c.activeTexture(33984 + b); c.bindTexture(3553, e.__webglTexture); } function z(b,
      g) {
      if (b.image.length === 6) {
        const h = d.get(b); if (b.version > 0 && h.__version !== b.version) {
          P(h, b); c.activeTexture(33984 + g); c.bindTexture(34067, h.__webglTexture); a.pixelStorei(37440, b.flipY); let p = b && b.isCompressedTexture; g = b.image[0] && b.image[0].isDataTexture; for (var t = [], r = 0; r < 6; r++)t[r] = p || g ? g ? b.image[r].image : b.image[r] : l(b.image[r], !1, !0, e.maxCubemapSize); const v = t[0]; const n = m(v) || e.isWebGL2; const x = f.convert(b.format); const y = f.convert(b.type); const z = k(x, y); V(34067, b, n); if (p) {
            for (r = 0; r < 6; r++) {
              var T = t[r].mipmaps; for (p = 0; p < T.length; p++) {
                var X = T[p]; b.format !== 1023 && b.format !== 1022 ? c.getCompressedTextureFormats().indexOf(x) > -1 ? c.compressedTexImage2D(34069 + r, p, z, X.width, X.height, 0, X.data) : console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()') : c.texImage2D(34069 + r, p, z, X.width, X.height, 0, x, y, X.data);
              }
            }h.__maxMipLevel = T.length - 1;
          } else {
            T = b.mipmaps; for (r = 0; r < 6; r++) {
              if (g) {
                for (c.texImage2D(34069 + r, 0, z, t[r].width, t[r].height, 0, x, y, t[r].data), p = 0; p < T.length; p++) {
                  X = T[p], X = X.image[r].image, c.texImage2D(34069
+ r, p + 1, z, X.width, X.height, 0, x, y, X.data);
                }
              } else for (c.texImage2D(34069 + r, 0, z, x, y, t[r]), p = 0; p < T.length; p++)X = T[p], c.texImage2D(34069 + r, p + 1, z, x, y, X.image[r]);
            } h.__maxMipLevel = T.length;
          }q(b, n) && u(34067, b, v.width, v.height); h.__version = b.version; if (b.onUpdate)b.onUpdate(b);
        } else c.activeTexture(33984 + g), c.bindTexture(34067, h.__webglTexture);
      }
    } function y(a, b) { c.activeTexture(33984 + b); c.bindTexture(34067, d.get(a).__webglTexture); } function V(c, g, h) {
      h ? (a.texParameteri(c, 10242, f.convert(g.wrapS)), a.texParameteri(c,
        10243, f.convert(g.wrapT)), c !== 32879 && c !== 35866 || a.texParameteri(c, 32882, f.convert(g.wrapR)), a.texParameteri(c, 10240, f.convert(g.magFilter)), a.texParameteri(c, 10241, f.convert(g.minFilter))) : (a.texParameteri(c, 10242, 33071), a.texParameteri(c, 10243, 33071), c !== 32879 && c !== 35866 || a.texParameteri(c, 32882, 33071), g.wrapS === 1001 && g.wrapT === 1001 || console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'), a.texParameteri(c, 10240,
        r(g.magFilter)), a.texParameteri(c, 10241, r(g.minFilter)), g.minFilter !== 1003 && g.minFilter !== 1006 && console.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.')); !(h = b.get('EXT_texture_filter_anisotropic')) || g.type === 1015 && b.get('OES_texture_float_linear') === null || g.type === 1016 && (e.isWebGL2 || b.get('OES_texture_half_float_linear')) === null || !(g.anisotropy > 1 || d.get(g).__currentAnisotropy) || (a.texParameterf(c, h.TEXTURE_MAX_ANISOTROPY_EXT,
        Math.min(g.anisotropy, e.getMaxAnisotropy())), d.get(g).__currentAnisotropy = g.anisotropy);
    } function P(b, c) { void 0 === b.__webglInit && (b.__webglInit = !0, c.addEventListener('dispose', p), b.__webglTexture = a.createTexture(), g.memory.textures++); } function C(b, d, g) {
      let h = 3553; d.isDataTexture2DArray && (h = 35866); d.isDataTexture3D && (h = 32879); P(b, d); c.activeTexture(33984 + g); c.bindTexture(h, b.__webglTexture); a.pixelStorei(37440, d.flipY); a.pixelStorei(37441, d.premultiplyAlpha); a.pixelStorei(3317, d.unpackAlignment); g = e.isWebGL2 ? !1 : d.wrapS !== 1001 || d.wrapT !== 1001 || d.minFilter !== 1003 && d.minFilter !== 1006; g = g && !1 === m(d.image); g = l(d.image, g, !1, e.maxTextureSize); const p = m(g) || e.isWebGL2; const t = f.convert(d.format); let r = f.convert(d.type); let v = k(t, r); V(h, d, p); const n = d.mipmaps; if (d.isDepthTexture) {
        v = 6402; if (d.type === 1015) { if (!e.isWebGL2) throw Error('Float Depth Texture only supported in WebGL2.0'); v = 36012; } else e.isWebGL2 && (v = 33189); d.format === 1026 && v === 6402 && d.type !== 1012 && d.type !== 1014 && (console.warn('THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'),
        d.type = 1012, r = f.convert(d.type)); d.format === 1027 && (v = 34041, d.type !== 1020 && (console.warn('THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'), d.type = 1020, r = f.convert(d.type))); c.texImage2D(3553, 0, v, g.width, g.height, 0, t, r, null);
      } else if (d.isDataTexture) {
        if (n.length > 0 && p) { for (var x = 0, y = n.length; x < y; x++)h = n[x], c.texImage2D(3553, x, v, h.width, h.height, 0, t, r, h.data); d.generateMipmaps = !1; b.__maxMipLevel = n.length - 1; } else {
          c.texImage2D(3553, 0, v, g.width, g.height, 0, t, r, g.data), b.__maxMipLevel = 0;
        }
      } else if (d.isCompressedTexture) { x = 0; for (y = n.length; x < y; x++)h = n[x], d.format !== 1023 && d.format !== 1022 ? c.getCompressedTextureFormats().indexOf(t) > -1 ? c.compressedTexImage2D(3553, x, v, h.width, h.height, 0, h.data) : console.warn('THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()') : c.texImage2D(3553, x, v, h.width, h.height, 0, t, r, h.data); b.__maxMipLevel = n.length - 1; } else if (d.isDataTexture2DArray) {
        c.texImage3D(35866, 0, v, g.width, g.height, g.depth, 0, t, r, g.data), b.__maxMipLevel = 0;
      } else if (d.isDataTexture3D)c.texImage3D(32879, 0, v, g.width, g.height, g.depth, 0, t, r, g.data), b.__maxMipLevel = 0; else if (n.length > 0 && p) { x = 0; for (y = n.length; x < y; x++)h = n[x], c.texImage2D(3553, x, v, t, r, h); d.generateMipmaps = !1; b.__maxMipLevel = n.length - 1; } else c.texImage2D(3553, 0, v, t, r, g), b.__maxMipLevel = 0; q(d, p) && u(3553, d, g.width, g.height); b.__version = d.version; if (d.onUpdate)d.onUpdate(d);
    } function w(b, e, g, h) {
      const l = f.convert(e.texture.format); const m = f.convert(e.texture.type); const q = k(l, m); c.texImage2D(h, 0, q, e.width, e.height,
        0, l, m, null); a.bindFramebuffer(36160, b); a.framebufferTexture2D(36160, g, h, d.get(e.texture).__webglTexture, 0); a.bindFramebuffer(36160, null);
    } function A(b, c, d) {
      a.bindRenderbuffer(36161, b); if (c.depthBuffer && !c.stencilBuffer)d ? (d = B(c), a.renderbufferStorageMultisample(36161, d, 33189, c.width, c.height)) : a.renderbufferStorage(36161, 33189, c.width, c.height), a.framebufferRenderbuffer(36160, 36096, 36161, b); else if (c.depthBuffer && c.stencilBuffer) {
        d ? (d = B(c), a.renderbufferStorageMultisample(36161, d, 35056, c.width, c.height))
          : a.renderbufferStorage(36161, 34041, c.width, c.height), a.framebufferRenderbuffer(36160, 33306, 36161, b);
      } else { b = f.convert(c.texture.format); const e = f.convert(c.texture.type); b = k(b, e); d ? (d = B(c), a.renderbufferStorageMultisample(36161, d, b, c.width, c.height)) : a.renderbufferStorage(36161, b, c.width, c.height); }a.bindRenderbuffer(36161, null);
    } function B(a) { return e.isWebGL2 && a.isWebGLMultisampleRenderTarget ? Math.min(e.maxSamples, a.samples) : 0; } var wa = new WeakMap(); let G; var E = typeof OffscreenCanvas !== 'undefined' && (new OffscreenCanvas(1,
      1)).getContext('2d') !== null; let I = 0; let H = !1; let
      D = !1; this.allocateTextureUnit = function () { const a = I; a >= e.maxTextures && console.warn(`THREE.WebGLTextures: Trying to use ${a} texture units while this GPU supports only ${e.maxTextures}`); I += 1; return a; }; this.resetTextureUnits = function () { I = 0; }; this.setTexture2D = n; this.setTexture2DArray = function (a, b) { const e = d.get(a); a.version > 0 && e.__version !== a.version ? C(e, a, b) : (c.activeTexture(33984 + b), c.bindTexture(35866, e.__webglTexture)); }; this.setTexture3D = function (a, b) {
      const e = d.get(a); a.version > 0
&& e.__version !== a.version ? C(e, a, b) : (c.activeTexture(33984 + b), c.bindTexture(32879, e.__webglTexture));
    }; this.setTextureCube = z; this.setTextureCubeDynamic = y; this.setupRenderTarget = function (h) {
      let l = d.get(h); let p = d.get(h.texture); h.addEventListener('dispose', v); p.__webglTexture = a.createTexture(); g.memory.textures++; const t = !0 === h.isWebGLRenderTargetCube; let r = !0 === h.isWebGLMultisampleRenderTarget; const x = !0 === h.isWebGLMultiviewRenderTarget; const y = m(h) || e.isWebGL2; if (t) {
        l.__webglFramebuffer = []; for (var z = 0; z < 6; z++) {
          l.__webglFramebuffer[z] = a.createFramebuffer();
        }
      } else if (l.__webglFramebuffer = a.createFramebuffer(), r) {
        if (e.isWebGL2) {
          l.__webglMultisampledFramebuffer = a.createFramebuffer(); l.__webglColorRenderbuffer = a.createRenderbuffer(); a.bindRenderbuffer(36161, l.__webglColorRenderbuffer); r = f.convert(h.texture.format); var C = f.convert(h.texture.type); r = k(r, C); C = B(h); a.renderbufferStorageMultisample(36161, C, r, h.width, h.height); a.bindFramebuffer(36160, l.__webglMultisampledFramebuffer); a.framebufferRenderbuffer(36160, 36064, 36161, l.__webglColorRenderbuffer);
          a.bindRenderbuffer(36161, null); h.depthBuffer && (l.__webglDepthRenderbuffer = a.createRenderbuffer(), A(l.__webglDepthRenderbuffer, h, !0)); a.bindFramebuffer(36160, null);
        } else console.warn('THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.');
      } else if (x) {
        z = h.width; let P = h.height; r = h.numViews; a.bindFramebuffer(36160, l.__webglFramebuffer); const G = b.get('OVR_multiview2'); g.memory.textures += 2; C = a.createTexture(); a.bindTexture(35866, C); a.texParameteri(35866, 10240, 9728); a.texParameteri(35866,
          10241, 9728); a.texImage3D(35866, 0, 32856, z, P, r, 0, 6408, 5121, null); G.framebufferTextureMultiviewOVR(36160, 36064, C, 0, 0, r); const wa = a.createTexture(); a.bindTexture(35866, wa); a.texParameteri(35866, 10240, 9728); a.texParameteri(35866, 10241, 9728); a.texImage3D(35866, 0, 35056, z, P, r, 0, 34041, 34042, null); G.framebufferTextureMultiviewOVR(36160, 33306, wa, 0, 0, r); P = Array(r); for (z = 0; z < r; ++z)P[z] = a.createFramebuffer(), a.bindFramebuffer(36160, P[z]), a.framebufferTextureLayer(36160, 36064, C, 0, z); l.__webglColorTexture = C; l.__webglDepthStencilTexture = wa; l.__webglViewFramebuffers = P; a.bindFramebuffer(36160, null); a.bindTexture(35866, null);
      } if (t) { c.bindTexture(34067, p.__webglTexture); V(34067, h.texture, y); for (z = 0; z < 6; z++)w(l.__webglFramebuffer[z], h, 36064, 34069 + z); q(h.texture, y) && u(34067, h.texture, h.width, h.height); c.bindTexture(34067, null); } else x || (c.bindTexture(3553, p.__webglTexture), V(3553, h.texture, y), w(l.__webglFramebuffer, h, 36064, 3553), q(h.texture, y) && u(3553, h.texture, h.width, h.height), c.bindTexture(3553, null)); if (h.depthBuffer) {
        l = d.get(h); p = !0
=== h.isWebGLRenderTargetCube; if (h.depthTexture) {
          if (p) throw Error('target.depthTexture not supported in Cube render targets'); if (h && h.isWebGLRenderTargetCube) throw Error('Depth Texture with cube render targets is not supported'); a.bindFramebuffer(36160, l.__webglFramebuffer); if (!h.depthTexture || !h.depthTexture.isDepthTexture) throw Error('renderTarget.depthTexture must be an instance of THREE.DepthTexture'); d.get(h.depthTexture).__webglTexture && h.depthTexture.image.width === h.width && h.depthTexture.image.height
=== h.height || (h.depthTexture.image.width = h.width, h.depthTexture.image.height = h.height, h.depthTexture.needsUpdate = !0); n(h.depthTexture, 0); l = d.get(h.depthTexture).__webglTexture; if (h.depthTexture.format === 1026)a.framebufferTexture2D(36160, 36096, 3553, l, 0); else if (h.depthTexture.format === 1027)a.framebufferTexture2D(36160, 33306, 3553, l, 0); else throw Error('Unknown depthTexture format');
        } else if (p) {
          for (l.__webglDepthbuffer = [], p = 0; p < 6; p++) {
            a.bindFramebuffer(36160, l.__webglFramebuffer[p]), l.__webglDepthbuffer[p] = a.createRenderbuffer(), A(l.__webglDepthbuffer[p], h);
          }
        } else a.bindFramebuffer(36160, l.__webglFramebuffer), l.__webglDepthbuffer = a.createRenderbuffer(), A(l.__webglDepthbuffer, h); a.bindFramebuffer(36160, null);
      }
    }; this.updateRenderTargetMipmap = function (a) { const b = a.texture; let f = m(a) || e.isWebGL2; if (q(b, f)) { f = a.isWebGLRenderTargetCube ? 34067 : 3553; const g = d.get(b).__webglTexture; c.bindTexture(f, g); u(f, b, a.width, a.height); c.bindTexture(f, null); } }; this.updateMultisampleRenderTarget = function (b) {
      if (b.isWebGLMultisampleRenderTarget) {
        if (e.isWebGL2) {
          let c = d.get(b); a.bindFramebuffer(36008, c.__webglMultisampledFramebuffer); a.bindFramebuffer(36009, c.__webglFramebuffer); c = b.width; const f = b.height; let g = 16384; b.depthBuffer && (g |= 256); b.stencilBuffer && (g |= 1024); a.blitFramebuffer(0, 0, c, f, 0, 0, c, f, g, 9728);
        } else console.warn('THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.');
      }
    }; this.safeSetTexture2D = function (a, b) {
      a && a.isWebGLRenderTarget && (!1 === H && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),
      H = !0), a = a.texture); n(a, b);
    }; this.safeSetTextureCube = function (a, b) { a && a.isWebGLRenderTargetCube && (!1 === D && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), D = !0), a = a.texture); a && a.isCubeTexture || Array.isArray(a.image) && a.image.length === 6 ? z(a, b) : y(a, b); };
  } function Kh(a, b, c) {
    return {
      convert(a) {
        if (a === 1E3) return 10497; if (a === 1001) return 33071; if (a === 1002) return 33648; if (a === 1003) return 9728; if (a === 1004) return 9984;
        if (a === 1005) return 9986; if (a === 1006) return 9729; if (a === 1007) return 9985; if (a === 1008) return 9987; if (a === 1009) return 5121; if (a === 1017) return 32819; if (a === 1018) return 32820; if (a === 1019) return 33635; if (a === 1010) return 5120; if (a === 1011) return 5122; if (a === 1012) return 5123; if (a === 1013) return 5124; if (a === 1014) return 5125; if (a === 1015) return 5126; if (a === 1016) { if (c.isWebGL2) return 5131; var d = b.get('OES_texture_half_float'); if (d !== null) return d.HALF_FLOAT_OES; } if (a === 1021) return 6406; if (a === 1022) return 6407; if (a
=== 1023) return 6408; if (a === 1024) return 6409; if (a === 1025) return 6410; if (a === 1026) return 6402; if (a === 1027) return 34041; if (a === 1028) return 6403; if (a === 100) return 32774; if (a === 101) return 32778; if (a === 102) return 32779; if (a === 200) return 0; if (a === 201) return 1; if (a === 202) return 768; if (a === 203) return 769; if (a === 204) return 770; if (a === 205) return 771; if (a === 206) return 772; if (a === 207) return 773; if (a === 208) return 774; if (a === 209) return 775; if (a === 210) return 776; if (a === 33776 || a === 33777 || a === 33778 || a === 33779) {
          if (d = b.get('WEBGL_compressed_texture_s3tc'),
          d !== null) { if (a === 33776) return d.COMPRESSED_RGB_S3TC_DXT1_EXT; if (a === 33777) return d.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (a === 33778) return d.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (a === 33779) return d.COMPRESSED_RGBA_S3TC_DXT5_EXT; }
        } if (a === 35840 || a === 35841 || a === 35842 || a === 35843) if (d = b.get('WEBGL_compressed_texture_pvrtc'), d !== null) { if (a === 35840) return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (a === 35841) return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (a === 35842) return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (a === 35843) return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG; } if (a
=== 36196 && (d = b.get('WEBGL_compressed_texture_etc1'), d !== null)) return d.COMPRESSED_RGB_ETC1_WEBGL; if (a === 37808 || a === 37809 || a === 37810 || a === 37811 || a === 37812 || a === 37813 || a === 37814 || a === 37815 || a === 37816 || a === 37817 || a === 37818 || a === 37819 || a === 37820 || a === 37821) if (d = b.get('WEBGL_compressed_texture_astc'), d !== null) return a; if (a === 103 || a === 104) { if (c.isWebGL2) { if (a === 103) return 32775; if (a === 104) return 32776; }d = b.get('EXT_blend_minmax'); if (d !== null) { if (a === 103) return d.MIN_EXT; if (a === 104) return d.MAX_EXT; } } if (a === 1020) {
          if (c.isWebGL2) return 34042;
          d = b.get('WEBGL_depth_texture'); if (d !== null) return d.UNSIGNED_INT_24_8_WEBGL;
        } return 0;
      },
    };
  } function fg(a, b, c, d) { la.call(this, a, b, d); this.stencilBuffer = this.depthBuffer = !1; this.numViews = c; } function kk(a, b) {
    function c(a) { if (a.isArrayCamera) return a.cameras; q[0] = a; return q; } function d(a) { if (void 0 === a.isArrayCamera) return !0; a = a.cameras; if (a.length > r) return !1; for (let b = 1, c = a.length; b < c; b++) if (a[0].viewport.z !== a[b].viewport.z || a[0].viewport.w !== a[b].viewport.w) return !1; return !0; } const e = a.extensions; const f = a.properties;
    let g; let h; let l; let m; let q; let u; let k; var r = 0; this.isAvailable = function () { if (void 0 === k) { let a = e.get('OVR_multiview2'); if (k = a !== null && !1 === b.getContextAttributes().antialias) for (r = b.getParameter(a.MAX_VIEWS_OVR), g = new fg(0, 0, 2), u = new w(), m = [], l = [], q = [], a = 0; a < r; a++)m[a] = new U(), l[a] = new Y(); } return k; }; this.attachCamera = function (b) {
      if (!1 !== d(b)) {
        (h = a.getRenderTarget()) ? u.set(h.width, h.height) : a.getDrawingBufferSize(u); if (b.isArrayCamera) { const c = b.cameras[0].viewport; g.setSize(c.z, c.w); g.setNumViews(b.cameras.length); } else {
          g.setSize(u.x,
            u.y), g.setNumViews(2);
        }a.setRenderTarget(g);
      }
    }; this.detachCamera = function (c) { if (g === a.getRenderTarget()) { a.setRenderTarget(h); let d = g; const e = d.numViews; const l = f.get(d).__webglViewFramebuffers; const m = d.width; d = d.height; if (c.isArrayCamera) for (let q = 0; q < e; q++) { let k = c.cameras[q].viewport; const p = k.x; const r = k.y; const t = p + k.z; k = r + k.w; b.bindFramebuffer(36008, l[q]); b.blitFramebuffer(0, 0, m, d, p, r, t, k, 16384, 9728); } else b.bindFramebuffer(36008, l[0]), b.blitFramebuffer(0, 0, m, d, 0, 0, u.x, u.y, 16384, 9728); } }; this.updateCameraProjectionMatricesUniform = function (a, d) { a = c(a); for (let e = 0; e < a.length; e++)m[e].copy(a[e].projectionMatrix); d.setValue(b, 'projectionMatrices', m); }; this.updateCameraViewMatricesUniform = function (a, d) { a = c(a); for (let e = 0; e < a.length; e++)m[e].copy(a[e].matrixWorldInverse); d.setValue(b, 'viewMatrices', m); }; this.updateObjectMatricesUniforms = function (a, d, e) {
      d = c(d); for (let f = 0; f < d.length; f++)m[f].multiplyMatrices(d[f].matrixWorldInverse, a.matrixWorld), l[f].getNormalMatrix(m[f]); e.setValue(b, 'modelViewMatrices', m); e.setValue(b, 'normalMatrices',
        l);
    };
  } function Hc() { B.call(this); this.type = 'Group'; } function Jd(a) { na.call(this); this.cameras = a || []; } function Lh(a, b, c) {
    Mh.setFromMatrixPosition(b.matrixWorld); Nh.setFromMatrixPosition(c.matrixWorld); const d = Mh.distanceTo(Nh); let e = b.projectionMatrix.elements; let f = c.projectionMatrix.elements; let g = e[14] / (e[10] - 1); c = e[14] / (e[10] + 1); const h = (e[9] + 1) / e[5]; const l = (e[9] - 1) / e[5]; let m = (e[8] - 1) / e[0]; let q = (f[8] + 1) / f[0]; e = g * m; f = g * q; q = d / (-m + q); m = q * -m; b.matrixWorld.decompose(a.position, a.quaternion, a.scale); a.translateX(m); a.translateZ(q);
    a.matrixWorld.compose(a.position, a.quaternion, a.scale); a.matrixWorldInverse.getInverse(a.matrixWorld); b = g + q; g = c + q; a.projectionMatrix.makePerspective(e - m, f + (d - m), h * c / g * b, l * c / g * b, b, g);
  } function gg(a) {
    function b() { return h !== null && !0 === h.isPresenting; } function c() {
      if (b()) { const c = h.getEyeParameters('left'); e = 2 * c.renderWidth * r; f = c.renderHeight * r; Cb = a.getPixelRatio(); a.getSize(C); a.setDrawingBufferSize(e, f, 1); y.viewport.set(0, 0, e / 2, f); V.viewport.set(e / 2, 0, e / 2, f); B.start(); g.dispatchEvent({ type: 'sessionstart' }); } else {
        g.enabled
&& a.setDrawingBufferSize(C.width, C.height, Cb), B.stop(), g.dispatchEvent({ type: 'sessionend' });
      }
    } function d(a, b) { b !== null && b.length === 4 && a.set(b[0] * e, b[1] * f, b[2] * e, b[3] * f); } let e; let f; var g = this; var h = null; let l = null; let m = null; const q = []; const u = new U(); const k = new U(); var r = 1; let p = 'local-floor'; typeof window !== 'undefined' && 'VRFrameData' in window && (l = new window.VRFrameData(), window.addEventListener('vrdisplaypresentchange', c, !1)); const v = new U(); const x = new ua(); const z = new n(); var
      y = new na(); y.viewport = new aa(); y.layers.enable(1); var V = new na(); V.viewport = new aa(); V.layers.enable(2);
    const P = new Jd([y, V]); P.layers.enable(1); P.layers.enable(2); var C = new w(); let Cb; const
      A = []; this.enabled = !1; this.getController = function (a) { let b = q[a]; void 0 === b && (b = new Hc(), b.matrixAutoUpdate = !1, b.visible = !1, q[a] = b); return b; }; this.getDevice = function () { return h; }; this.setDevice = function (a) { void 0 !== a && (h = a); B.setContext(a); }; this.setFramebufferScaleFactor = function (a) { r = a; }; this.setReferenceSpaceType = function (a) { p = a; }; this.setPoseTarget = function (a) { void 0 !== a && (m = a); }; this.getCamera = function (a) {
      let c = p === 'local-floor'
        ? 1.6 : 0; if (!1 === b()) return a.position.set(0, c, 0), a.rotation.set(0, 0, 0), a; h.depthNear = a.near; h.depthFar = a.far; h.getFrameData(l); if (p === 'local-floor') { var e = h.stageParameters; e ? u.fromArray(e.sittingToStandingTransform) : u.makeTranslation(0, c, 0); }c = l.pose; e = m !== null ? m : a; e.matrix.copy(u); e.matrix.decompose(e.position, e.quaternion, e.scale); c.orientation !== null && (x.fromArray(c.orientation), e.quaternion.multiply(x)); c.position !== null && (x.setFromRotationMatrix(u), z.fromArray(c.position), z.applyQuaternion(x),
      e.position.add(z)); e.updateMatrixWorld(); y.near = a.near; V.near = a.near; y.far = a.far; V.far = a.far; y.matrixWorldInverse.fromArray(l.leftViewMatrix); V.matrixWorldInverse.fromArray(l.rightViewMatrix); k.getInverse(u); p === 'local-floor' && (y.matrixWorldInverse.multiply(k), V.matrixWorldInverse.multiply(k)); a = e.parent; a !== null && (v.getInverse(a.matrixWorld), y.matrixWorldInverse.multiply(v), V.matrixWorldInverse.multiply(v)); y.matrixWorld.getInverse(y.matrixWorldInverse); V.matrixWorld.getInverse(V.matrixWorldInverse);
      y.projectionMatrix.fromArray(l.leftProjectionMatrix); V.projectionMatrix.fromArray(l.rightProjectionMatrix); Lh(P, y, V); a = h.getLayers(); a.length && (a = a[0], d(y.viewport, a.leftBounds), d(V.viewport, a.rightBounds)); for (a = 0; a < q.length; a++) {
        c = q[a]; b: {
          e = a; for (var f = navigator.getGamepads && navigator.getGamepads(), g = 0, r = 0, t = f.length; g < t; g++) {
            const n = f[g]; if (n && (n.id === 'Daydream Controller' || n.id === 'Gear VR Controller' || n.id === 'Oculus Go Controller' || n.id === 'OpenVR Gamepad' || n.id.startsWith('Oculus Touch') || n.id.startsWith('HTC Vive Focus')
|| n.id.startsWith('Spatial Controller'))) { if (r === e) { e = n; break b; }r++; }
          }e = void 0;
        } if (void 0 !== e && void 0 !== e.pose) {
          if (e.pose === null) break; f = e.pose; !1 === f.hasPosition && c.position.set(0.2, -0.6, -0.05); f.position !== null && c.position.fromArray(f.position); f.orientation !== null && c.quaternion.fromArray(f.orientation); c.matrix.compose(c.position, c.quaternion, c.scale); c.matrix.premultiply(u); c.matrix.decompose(c.position, c.quaternion, c.scale); c.matrixWorldNeedsUpdate = !0; c.visible = !0; f = e.id === 'Daydream Controller' ? 0
            : 1; void 0 === A[a] && (A[a] = !1); A[a] !== e.buttons[f].pressed && (A[a] = e.buttons[f].pressed, !0 === A[a] ? c.dispatchEvent({ type: 'selectstart' }) : (c.dispatchEvent({ type: 'selectend' }), c.dispatchEvent({ type: 'select' })));
        } else c.visible = !1;
      } return P;
    }; this.getStandingMatrix = function () { return u; }; this.isPresenting = b; var B = new Xf(); this.setAnimationLoop = function (a) { B.setAnimationLoop(a); b() && B.start(); }; this.submitFrame = function () { b() && h.submitFrame(); }; this.dispose = function () {
      typeof window !== 'undefined' && window.removeEventListener('vrdisplaypresentchange',
        c);
    }; this.setFrameOfReferenceType = function () { console.warn('THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.'); };
  } function Oh(a, b) {
    function c() { return l !== null && m !== null; } function d(a) { for (let b = 0; b < k.length; b++)r[b] === a.inputSource && k[b].dispatchEvent({ type: a.type }); } function e() { a.setFramebuffer(null); a.setRenderTarget(a.getRenderTarget()); y.stop(); h.dispatchEvent({ type: 'sessionend' }); } function f(a) { m = a; y.setContext(l); y.start(); h.dispatchEvent({ type: 'sessionstart' }); } function g(a, b) {
      b
=== null ? a.matrixWorld.copy(a.matrix) : a.matrixWorld.multiplyMatrices(b.matrixWorld, a.matrix); a.matrixWorldInverse.getInverse(a.matrixWorld);
    } var h = this; var l = null; var m = null; let q = 'local-floor'; let u = null; var k = []; var r = []; const p = new na(); p.layers.enable(1); p.viewport = new aa(); const n = new na(); n.layers.enable(2); n.viewport = new aa(); const x = new Jd([p, n]); x.layers.enable(1); x.layers.enable(2); this.enabled = !1; this.getController = function (a) { let b = k[a]; void 0 === b && (b = new Hc(), b.matrixAutoUpdate = !1, b.visible = !1, k[a] = b); return b; }; this.setFramebufferScaleFactor = function () {}; this.setReferenceSpaceType = function (a) { q = a; }; this.getSession = function () { return l; }; this.setSession = function (a) {
      l = a; l !== null && (l.addEventListener('select', d), l.addEventListener('selectstart', d), l.addEventListener('selectend', d), l.addEventListener('end', e), l.updateRenderState({ baseLayer: new XRWebGLLayer(l, b) }), l.requestReferenceSpace(q).then(f), r = l.inputSources, l.addEventListener('inputsourceschange', () => {
        r = l.inputSources; console.log(r); for (let a = 0; a < k.length; a++) {
          k[a].userData.inputSource = r[a];
        }
      }));
    }; this.getCamera = function (a) { if (c()) { let b = a.parent; const d = x.cameras; g(x, b); for (var e = 0; e < d.length; e++)g(d[e], b); a.matrixWorld.copy(x.matrixWorld); a = a.children; e = 0; for (b = a.length; e < b; e++)a[e].updateMatrixWorld(!0); Lh(x, p, n); return x; } return a; }; this.isPresenting = c; let z = null; var y = new Xf(); y.setAnimationLoop((b, c) => {
      u = c.getViewerPose(m); if (u !== null) {
        var d = u.views; var e = l.renderState.baseLayer; a.setFramebuffer(e.framebuffer); for (var f = 0; f < d.length; f++) {
          const g = d[f]; const h = e.getViewport(g); const q = x.cameras[f]; q.matrix.fromArray(g.transform.inverse.matrix).getInverse(q.matrix);
          q.projectionMatrix.fromArray(g.projectionMatrix); q.viewport.set(h.x, h.y, h.width, h.height); f === 0 && x.matrix.copy(q.matrix);
        }
      } for (f = 0; f < k.length; f++) { d = k[f]; if (e = r[f]) if (e = c.getPose(e.targetRaySpace, m), e !== null) { d.matrix.fromArray(e.transform.matrix); d.matrix.decompose(d.position, d.rotation, d.scale); d.visible = !0; continue; }d.visible = !1; }z && z(b);
    }); this.setAnimationLoop = function (a) { z = a; }; this.dispose = function () {}; this.getStandingMatrix = function () {
      console.warn('THREE.WebXRManager: getStandingMatrix() is no longer needed.');
      return new U();
    }; this.getDevice = function () { console.warn('THREE.WebXRManager: getDevice() has been deprecated.'); }; this.setDevice = function () { console.warn('THREE.WebXRManager: setDevice() has been deprecated.'); }; this.setFrameOfReferenceType = function () { console.warn('THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.'); }; this.submitFrame = function () {};
  } function hg(a) {
    let b; function c() {
      ra = new aj(J); Ea = new Zi(J, ra, a); !1 === Ea.isWebGL2 && (ra.get('WEBGL_depth_texture'), ra.get('OES_texture_float'),
      ra.get('OES_texture_half_float'), ra.get('OES_texture_half_float_linear'), ra.get('OES_standard_derivatives'), ra.get('OES_element_index_uint'), ra.get('ANGLE_instanced_arrays')); ra.get('OES_texture_float_linear'); la = new Kh(J, ra, Ea); ba = new ik(J, ra, la, Ea); ba.scissor(ca.copy(ja).multiplyScalar(fa).floor()); ba.viewport(W.copy(ia).multiplyScalar(fa).floor()); ea = new dj(J); Y = new Zj(); R = new jk(J, ra, ba, Y, Ea, la, ea); pa = new Wi(J); xa = new bj(J, pa, ea); sa = new gj(J, xa, pa, ea); ya = new fj(J); oa = new Yj(F, ra, Ea); va = new ck(); ua = new hk(); ma = new Xi(F, ba, sa, A); Aa = new Yi(J, ra, ea, Ea); Ba = new cj(J, ra, ea, Ea); ea.programs = oa.programs; F.capabilities = Ea; F.extensions = ra; F.properties = Y; F.renderLists = va; F.state = ba; F.info = ea;
    } function d(a) { a.preventDefault(); console.log('THREE.WebGLRenderer: Context Lost.'); O = !0; } function e() { console.log('THREE.WebGLRenderer: Context Restored.'); O = !1; c(); } function f(a) { a = a.target; a.removeEventListener('dispose', f); g(a); Y.remove(a); } function g(a) { const b = Y.get(a).program; a.program = void 0; void 0 !== b && oa.releaseProgram(b); }
    function h(a, b) { a.render((a) => { F.renderBufferImmediate(a, b); }); } function l(a, b, c, d) {
      if (!1 !== a.visible) {
        if (a.layers.test(b.layers)) {
          if (a.isGroup)c = a.renderOrder; else if (a.isLOD)!0 === a.autoUpdate && a.update(b); else if (a.isLight)D.pushLight(a), a.castShadow && D.pushShadow(a); else if (a.isSprite) { if (!a.frustumCulled || cg.intersectsSprite(a)) { d && Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id); var e = sa.update(a); var f = a.material; f.visible && G.push(a, e, f, c, Fb.z, null); } } else if (a.isImmediateRenderObject) {
            d
&& Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id), G.push(a, null, a.material, c, Fb.z, null);
          } else if (a.isMesh || a.isLine || a.isPoints) {
            if (a.isSkinnedMesh && a.skeleton.frame !== ea.render.frame && (a.skeleton.update(), a.skeleton.frame = ea.render.frame), !a.frustumCulled || cg.intersectsObject(a)) {
              if (d && Fb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(Id), e = sa.update(a), f = a.material, Array.isArray(f)) {
                for (var g = e.groups, h = 0, m = g.length; h < m; h++) {
                  const q = g[h]; const k = f[q.materialIndex]; k && k.visible && G.push(a, e, k, c, Fb.z,
                    q);
                }
              } else f.visible && G.push(a, e, f, c, Fb.z, null);
            }
          }
        } a = a.children; h = 0; for (m = a.length; h < m; h++)l(a[h], b, c, d);
      }
    } function m(a, b, c, d) { for (let e = 0, f = a.length; e < f; e++) { let g = a[e]; const h = g.object; const l = g.geometry; const m = void 0 === d ? g.material : d; g = g.group; if (c.isArrayCamera) if (Pa = c, ka.enabled && ta.isAvailable())q(h, b, c, l, m, g); else for (let k = c.cameras, u = 0, p = k.length; u < p; u++) { const r = k[u]; h.layers.test(r.layers) && (ba.viewport(W.copy(r.viewport)), D.setupLights(r), q(h, b, r, l, m, g)); } else Pa = null, q(h, b, c, l, m, g); } } function q(a, c, d, e, f, g) {
      a.onBeforeRender(F,
        c, d, e, f, g); D = ua.get(c, Pa || d); a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse, a.matrixWorld); a.normalMatrix.getNormalMatrix(a.modelViewMatrix); if (a.isImmediateRenderObject) { ba.setMaterial(f); const l = k(d, c.fog, f, a); bc = b = null; S = !1; h(a, l); } else F.renderBufferDirect(d, c.fog, e, f, a, g); a.onAfterRender(F, c, d, e, f, g); D = ua.get(c, Pa || d);
    } function u(a, b, c) {
      const d = Y.get(a); const e = D.state.lights; const h = e.state.version; c = oa.getParameters(a, e.state, D.state.shadowsArray, b, Oa.numPlanes, Oa.numIntersection, c); let l = oa.getProgramCode(a,
        c); let m = d.program; let q = !0; if (void 0 === m)a.addEventListener('dispose', f); else if (m.code !== l)g(a); else { if (d.lightsStateVersion !== h)d.lightsStateVersion = h; else if (void 0 !== c.shaderID) return; q = !1; }q && (c.shaderID ? (l = db[c.shaderID], d.shader = {
        name: a.type, uniforms: Yb(l.uniforms), vertexShader: l.vertexShader, fragmentShader: l.fragmentShader,
      }) : d.shader = {
        name: a.type, uniforms: a.uniforms, vertexShader: a.vertexShader, fragmentShader: a.fragmentShader,
      }, a.onBeforeCompile(d.shader, F), l = oa.getProgramCode(a, c), m = oa.acquireProgram(a,
        d.shader, c, l), d.program = m, a.program = m); c = m.getAttributes(); if (a.morphTargets) for (l = a.numSupportedMorphTargets = 0; l < F.maxMorphTargets; l++)c[`morphTarget${l}`] >= 0 && a.numSupportedMorphTargets++; if (a.morphNormals) for (l = a.numSupportedMorphNormals = 0; l < F.maxMorphNormals; l++)c[`morphNormal${l}`] >= 0 && a.numSupportedMorphNormals++; c = d.shader.uniforms; if (!a.isShaderMaterial && !a.isRawShaderMaterial || !0 === a.clipping)d.numClippingPlanes = Oa.numPlanes, d.numIntersection = Oa.numIntersection, c.clippingPlanes = Oa.uniform; d.fog = b; d.needsLights = a.isMeshLambertMaterial || a.isMeshPhongMaterial || a.isMeshStandardMaterial || a.isShadowMaterial || a.isShaderMaterial && !0 === a.lights; d.lightsStateVersion = h; d.needsLights && (c.ambientLightColor.value = e.state.ambient, c.lightProbe.value = e.state.probe, c.directionalLights.value = e.state.directional, c.spotLights.value = e.state.spot, c.rectAreaLights.value = e.state.rectArea, c.pointLights.value = e.state.point, c.hemisphereLights.value = e.state.hemi, c.directionalShadowMap.value = e.state.directionalShadowMap,
      c.directionalShadowMatrix.value = e.state.directionalShadowMatrix, c.spotShadowMap.value = e.state.spotShadowMap, c.spotShadowMatrix.value = e.state.spotShadowMatrix, c.pointShadowMap.value = e.state.pointShadowMap, c.pointShadowMatrix.value = e.state.pointShadowMatrix); a = d.program.getUniforms(); a = Bb.seqWithValue(a.seq, c); d.uniformsList = a;
    } function k(a, b, c, d) {
      R.resetTextureUnits(); const e = Y.get(c); let f = D.state.lights; He && (qa || a !== Q) && Oa.setState(c.clippingPlanes, c.clipIntersection, c.clipShadows, a, e, a === Q && c.id === ha);
      !1 === c.needsUpdate && (void 0 === e.program ? c.needsUpdate = !0 : c.fog && e.fog !== b ? c.needsUpdate = !0 : e.needsLights && e.lightsStateVersion !== f.state.version ? c.needsUpdate = !0 : void 0 === e.numClippingPlanes || e.numClippingPlanes === Oa.numPlanes && e.numIntersection === Oa.numIntersection || (c.needsUpdate = !0)); c.needsUpdate && (u(c, b, d), c.needsUpdate = !1); let g = !1; let h = !1; let l = !1; f = e.program; const m = f.getUniforms(); const q = e.shader.uniforms; ba.useProgram(f.program) && (l = h = g = !0); c.id !== ha && (ha = c.id, h = !0); if (g || Q !== a) {
        f.numMultiviewViews > 0
          ? ta.updateCameraProjectionMatricesUniform(a, m) : m.setValue(J, 'projectionMatrix', a.projectionMatrix); Ea.logarithmicDepthBuffer && m.setValue(J, 'logDepthBufFC', 2 / (Math.log(a.far + 1) / Math.LN2)); Q !== a && (Q = a, l = h = !0); if (c.isShaderMaterial || c.isMeshPhongMaterial || c.isMeshStandardMaterial || c.envMap)g = m.map.cameraPosition, void 0 !== g && g.setValue(J, Fb.setFromMatrixPosition(a.matrixWorld)); if (c.isMeshPhongMaterial || c.isMeshLambertMaterial || c.isMeshBasicMaterial || c.isMeshStandardMaterial || c.isShaderMaterial || c.skinning) {
          f.numMultiviewViews
> 0 ? ta.updateCameraViewMatricesUniform(a, m) : m.setValue(J, 'viewMatrix', a.matrixWorldInverse);
        }
      } if (c.skinning && (m.setOptional(J, d, 'bindMatrix'), m.setOptional(J, d, 'bindMatrixInverse'), g = d.skeleton)) {
        let k = g.bones; if (Ea.floatVertexTextures) {
          if (void 0 === g.boneTexture) { k = Math.sqrt(4 * k.length); k = L.ceilPowerOfTwo(k); k = Math.max(k, 4); const t = new Float32Array(k * k * 4); t.set(g.boneMatrices); const n = new Zb(t, k, k, 1023, 1015); g.boneMatrices = t; g.boneTexture = n; g.boneTextureSize = k; }m.setValue(J, 'boneTexture',
            g.boneTexture, R); m.setValue(J, 'boneTextureSize', g.boneTextureSize);
        } else m.setOptional(J, g, 'boneMatrices');
      } if (h || e.receiveShadow !== d.receiveShadow)e.receiveShadow = d.receiveShadow, m.setValue(J, 'receiveShadow', d.receiveShadow); h && (m.setValue(J, 'toneMappingExposure', F.toneMappingExposure), m.setValue(J, 'toneMappingWhitePoint', F.toneMappingWhitePoint), e.needsLights && (h = l, q.ambientLightColor.needsUpdate = h, q.lightProbe.needsUpdate = h, q.directionalLights.needsUpdate = h, q.pointLights.needsUpdate = h, q.spotLights.needsUpdate = h, q.rectAreaLights.needsUpdate = h, q.hemisphereLights.needsUpdate = h), b && c.fog && (q.fogColor.value.copy(b.color), b.isFog ? (q.fogNear.value = b.near, q.fogFar.value = b.far) : b.isFogExp2 && (q.fogDensity.value = b.density)), c.isMeshBasicMaterial ? r(q, c) : c.isMeshLambertMaterial ? (r(q, c), c.emissiveMap && (q.emissiveMap.value = c.emissiveMap)) : c.isMeshPhongMaterial ? (r(q, c), c.isMeshToonMaterial ? (p(q, c), c.gradientMap && (q.gradientMap.value = c.gradientMap)) : p(q, c)) : c.isMeshStandardMaterial ? (r(q, c), c.isMeshPhysicalMaterial ? (v(q,
        c), q.reflectivity.value = c.reflectivity, q.clearcoat.value = c.clearcoat, q.clearcoatRoughness.value = c.clearcoatRoughness, c.sheen && q.sheen.value.copy(c.sheen), c.clearcoatNormalMap && (q.clearcoatNormalScale.value.copy(c.clearcoatNormalScale), q.clearcoatNormalMap.value = c.clearcoatNormalMap, c.side === 1 && q.clearcoatNormalScale.value.negate()), q.transparency.value = c.transparency) : v(q, c)) : c.isMeshMatcapMaterial ? (r(q, c), c.matcap && (q.matcap.value = c.matcap), c.bumpMap && (q.bumpMap.value = c.bumpMap, q.bumpScale.value = c.bumpScale, c.side === 1 && (q.bumpScale.value *= -1)), c.normalMap && (q.normalMap.value = c.normalMap, q.normalScale.value.copy(c.normalScale), c.side === 1 && q.normalScale.value.negate()), c.displacementMap && (q.displacementMap.value = c.displacementMap, q.displacementScale.value = c.displacementScale, q.displacementBias.value = c.displacementBias)) : c.isMeshDepthMaterial ? (r(q, c), c.displacementMap && (q.displacementMap.value = c.displacementMap, q.displacementScale.value = c.displacementScale, q.displacementBias.value = c.displacementBias))
        : c.isMeshDistanceMaterial ? (r(q, c), c.displacementMap && (q.displacementMap.value = c.displacementMap, q.displacementScale.value = c.displacementScale, q.displacementBias.value = c.displacementBias), q.referencePosition.value.copy(c.referencePosition), q.nearDistance.value = c.nearDistance, q.farDistance.value = c.farDistance) : c.isMeshNormalMaterial ? (r(q, c), c.bumpMap && (q.bumpMap.value = c.bumpMap, q.bumpScale.value = c.bumpScale, c.side === 1 && (q.bumpScale.value *= -1)), c.normalMap && (q.normalMap.value = c.normalMap, q.normalScale.value.copy(c.normalScale),
        c.side === 1 && q.normalScale.value.negate()), c.displacementMap && (q.displacementMap.value = c.displacementMap, q.displacementScale.value = c.displacementScale, q.displacementBias.value = c.displacementBias)) : c.isLineBasicMaterial ? (q.diffuse.value.copy(c.color), q.opacity.value = c.opacity, c.isLineDashedMaterial && (q.dashSize.value = c.dashSize, q.totalSize.value = c.dashSize + c.gapSize, q.scale.value = c.scale)) : c.isPointsMaterial ? (q.diffuse.value.copy(c.color), q.opacity.value = c.opacity, q.size.value = c.size * fa, q.scale.value = 0.5 * Z, q.map.value = c.map, c.map !== null && (!0 === c.map.matrixAutoUpdate && c.map.updateMatrix(), q.uvTransform.value.copy(c.map.matrix))) : c.isSpriteMaterial ? (q.diffuse.value.copy(c.color), q.opacity.value = c.opacity, q.rotation.value = c.rotation, q.map.value = c.map, c.map !== null && (!0 === c.map.matrixAutoUpdate && c.map.updateMatrix(), q.uvTransform.value.copy(c.map.matrix))) : c.isShadowMaterial && (q.color.value.copy(c.color), q.opacity.value = c.opacity), void 0 !== q.ltc_1 && (q.ltc_1.value = I.LTC_1), void 0 !== q.ltc_2 && (q.ltc_2.value = I.LTC_2), Bb.upload(J, e.uniformsList, q, R)); c.isShaderMaterial && !0 === c.uniformsNeedUpdate && (Bb.upload(J, e.uniformsList, q, R), c.uniformsNeedUpdate = !1); c.isSpriteMaterial && m.setValue(J, 'center', d.center); f.numMultiviewViews > 0 ? ta.updateObjectMatricesUniforms(d, a, m) : (m.setValue(J, 'modelViewMatrix', d.modelViewMatrix), m.setValue(J, 'normalMatrix', d.normalMatrix)); m.setValue(J, 'modelMatrix', d.matrixWorld); return f;
    } function r(a, b) {
      a.opacity.value = b.opacity; b.color && a.diffuse.value.copy(b.color); b.emissive && a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);
      b.map && (a.map.value = b.map); b.alphaMap && (a.alphaMap.value = b.alphaMap); b.specularMap && (a.specularMap.value = b.specularMap); b.envMap && (a.envMap.value = b.envMap, a.flipEnvMap.value = b.envMap.isCubeTexture ? -1 : 1, a.reflectivity.value = b.reflectivity, a.refractionRatio.value = b.refractionRatio, a.maxMipLevel.value = Y.get(b.envMap).__maxMipLevel); b.lightMap && (a.lightMap.value = b.lightMap, a.lightMapIntensity.value = b.lightMapIntensity); b.aoMap && (a.aoMap.value = b.aoMap, a.aoMapIntensity.value = b.aoMapIntensity); if (b.map) { var c = b.map; } else b.specularMap ? c = b.specularMap : b.displacementMap ? c = b.displacementMap : b.normalMap ? c = b.normalMap : b.bumpMap ? c = b.bumpMap : b.roughnessMap ? c = b.roughnessMap : b.metalnessMap ? c = b.metalnessMap : b.alphaMap ? c = b.alphaMap : b.emissiveMap && (c = b.emissiveMap); void 0 !== c && (c.isWebGLRenderTarget && (c = c.texture), !0 === c.matrixAutoUpdate && c.updateMatrix(), a.uvTransform.value.copy(c.matrix));
    } function p(a, b) {
      a.specular.value.copy(b.specular); a.shininess.value = Math.max(b.shininess, 1E-4); b.emissiveMap && (a.emissiveMap.value = b.emissiveMap); b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale, b.side === 1 && (a.bumpScale.value *= -1)); b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale), b.side === 1 && a.normalScale.value.negate()); b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
    } function v(a, b) {
      a.roughness.value = b.roughness; a.metalness.value = b.metalness; b.roughnessMap && (a.roughnessMap.value = b.roughnessMap); b.metalnessMap && (a.metalnessMap.value = b.metalnessMap); b.emissiveMap && (a.emissiveMap.value = b.emissiveMap); b.bumpMap && (a.bumpMap.value = b.bumpMap, a.bumpScale.value = b.bumpScale, b.side === 1 && (a.bumpScale.value *= -1)); b.normalMap && (a.normalMap.value = b.normalMap, a.normalScale.value.copy(b.normalScale), b.side === 1 && a.normalScale.value.negate()); b.displacementMap && (a.displacementMap.value = b.displacementMap, a.displacementScale.value = b.displacementScale, a.displacementBias.value = b.displacementBias);
      b.envMap && (a.envMapIntensity.value = b.envMapIntensity);
    }a = a || {}; const x = void 0 !== a.canvas ? a.canvas : document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas'); const z = void 0 !== a.context ? a.context : null; let y = void 0 !== a.alpha ? a.alpha : !1; const V = void 0 !== a.depth ? a.depth : !0; const P = void 0 !== a.stencil ? a.stencil : !0; const C = void 0 !== a.antialias ? a.antialias : !1; var A = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0; const B = void 0 !== a.preserveDrawingBuffer ? a.preserveDrawingBuffer : !1; const E = void 0 !== a.powerPreference ? a.powerPreference : 'default';
    const H = void 0 !== a.failIfMajorPerformanceCaveat ? a.failIfMajorPerformanceCaveat : !1; var G = null; var D = null; this.domElement = x; this.debug = { checkShaderErrors: !0 }; this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0; this.clippingPlanes = []; this.localClippingEnabled = !1; this.gammaFactor = 2; this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1; this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1; this.maxMorphTargets = 8; this.maxMorphNormals = 4; var F = this;
    var O = !1; let M = null; let T = 0; let X = 0; let N = null; let ac = null; var ha = -1; var bc = b = null; var S = !1; var Q = null; var Pa = null; var W = new aa(); var ca = new aa(); let da = null; let K = x.width; var Z = x.height; var fa = 1; var ia = new aa(0, 0, K, Z); var ja = new aa(0, 0, K, Z); let na = !1; var cg = new Ed(); var Oa = new $i(); var He = !1; var qa = !1; var Id = new U(); var Fb = new n(); try {
      y = {
        alpha: y, depth: V, stencil: P, antialias: C, premultipliedAlpha: A, preserveDrawingBuffer: B, powerPreference: E, failIfMajorPerformanceCaveat: H, xrCompatible: !0,
      }; x.addEventListener('webglcontextlost', d, !1); x.addEventListener('webglcontextrestored', e, !1); var J = z || x.getContext('webgl',
        y) || x.getContext('experimental-webgl', y); if (J === null) { if (x.getContext('webgl') !== null) throw Error('Error creating WebGL context with your selected attributes.'); throw Error('Error creating WebGL context.'); } void 0 === J.getShaderPrecisionFormat && (J.getShaderPrecisionFormat = function () { return { rangeMin: 1, rangeMax: 1, precision: 1 }; });
    } catch (Ph) { throw console.error(`THREE.WebGLRenderer: ${Ph.message}`), Ph; } let ra; let Ea; let ba; let ea; let Y; let R; let pa; let xa; let sa; let oa; let va; let ua; let ma; let ya; let Aa; let Ba; let la; c(); var ka = typeof navigator !== 'undefined' && 'xr' in navigator
&& 'supportsSession' in navigator.xr ? new Oh(F, J) : new gg(F); this.vr = ka; var ta = new kk(F, J); const Da = new Jh(F, sa, Ea.maxTextureSize); this.shadowMap = Da; this.getContext = function () { return J; }; this.getContextAttributes = function () { return J.getContextAttributes(); }; this.forceContextLoss = function () { const a = ra.get('WEBGL_lose_context'); a && a.loseContext(); }; this.forceContextRestore = function () { const a = ra.get('WEBGL_lose_context'); a && a.restoreContext(); }; this.getPixelRatio = function () { return fa; }; this.setPixelRatio = function (a) {
      void 0
!== a && (fa = a, this.setSize(K, Z, !1));
    }; this.getSize = function (a) { void 0 === a && (console.warn('WebGLRenderer: .getsize() now requires a Vector2 as an argument'), a = new w()); return a.set(K, Z); }; this.setSize = function (a, b, c) { ka.isPresenting() ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (K = a, Z = b, x.width = Math.floor(a * fa), x.height = Math.floor(b * fa), !1 !== c && (x.style.width = `${a}px`, x.style.height = `${b}px`), this.setViewport(0, 0, a, b)); }; this.getDrawingBufferSize = function (a) {
      void 0 === a
&& (console.warn('WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument'), a = new w()); return a.set(K * fa, Z * fa).floor();
    }; this.setDrawingBufferSize = function (a, b, c) { K = a; Z = b; fa = c; x.width = Math.floor(a * c); x.height = Math.floor(b * c); this.setViewport(0, 0, a, b); }; this.getCurrentViewport = function (a) { void 0 === a && (console.warn('WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument'), a = new aa()); return a.copy(W); }; this.getViewport = function (a) { return a.copy(ia); }; this.setViewport = function (a,
      b, c, d) { a.isVector4 ? ia.set(a.x, a.y, a.z, a.w) : ia.set(a, b, c, d); ba.viewport(W.copy(ia).multiplyScalar(fa).floor()); }; this.getScissor = function (a) { return a.copy(ja); }; this.setScissor = function (a, b, c, d) { a.isVector4 ? ja.set(a.x, a.y, a.z, a.w) : ja.set(a, b, c, d); ba.scissor(ca.copy(ja).multiplyScalar(fa).floor()); }; this.getScissorTest = function () { return na; }; this.setScissorTest = function (a) { ba.setScissorTest(na = a); }; this.getClearColor = function () { return ma.getClearColor(); }; this.setClearColor = function () {
      ma.setClearColor.apply(ma,
        arguments);
    }; this.getClearAlpha = function () { return ma.getClearAlpha(); }; this.setClearAlpha = function () { ma.setClearAlpha.apply(ma, arguments); }; this.clear = function (a, b, c) { let d = 0; if (void 0 === a || a)d |= 16384; if (void 0 === b || b)d |= 256; if (void 0 === c || c)d |= 1024; J.clear(d); }; this.clearColor = function () { this.clear(!0, !1, !1); }; this.clearDepth = function () { this.clear(!1, !0, !1); }; this.clearStencil = function () { this.clear(!1, !1, !0); }; this.dispose = function () {
      x.removeEventListener('webglcontextlost', d, !1); x.removeEventListener('webglcontextrestored',
        e, !1); va.dispose(); ua.dispose(); Y.dispose(); sa.dispose(); ka.dispose(); za.stop();
    }; this.renderBufferImmediate = function (a, b) {
      ba.initAttributes(); const c = Y.get(a); a.hasPositions && !c.position && (c.position = J.createBuffer()); a.hasNormals && !c.normal && (c.normal = J.createBuffer()); a.hasUvs && !c.uv && (c.uv = J.createBuffer()); a.hasColors && !c.color && (c.color = J.createBuffer()); b = b.getAttributes(); a.hasPositions && (J.bindBuffer(34962, c.position), J.bufferData(34962, a.positionArray, 35048), ba.enableAttribute(b.position),
      J.vertexAttribPointer(b.position, 3, 5126, !1, 0, 0)); a.hasNormals && (J.bindBuffer(34962, c.normal), J.bufferData(34962, a.normalArray, 35048), ba.enableAttribute(b.normal), J.vertexAttribPointer(b.normal, 3, 5126, !1, 0, 0)); a.hasUvs && (J.bindBuffer(34962, c.uv), J.bufferData(34962, a.uvArray, 35048), ba.enableAttribute(b.uv), J.vertexAttribPointer(b.uv, 2, 5126, !1, 0, 0)); a.hasColors && (J.bindBuffer(34962, c.color), J.bufferData(34962, a.colorArray, 35048), ba.enableAttribute(b.color), J.vertexAttribPointer(b.color, 3, 5126, !1, 0, 0));
      ba.disableUnusedAttributes(); J.drawArrays(4, 0, a.count); a.count = 0;
    }; this.renderBufferDirect = function (a, c, d, e, f, g) {
      let h = f.isMesh && f.matrixWorld.determinant() < 0; ba.setMaterial(e, h); let l = k(a, c, e, f); let m = !1; if (b !== d.id || bc !== l.id || S !== (!0 === e.wireframe))b = d.id, bc = l.id, S = !0 === e.wireframe, m = !0; f.morphTargetInfluences && (ya.update(f, d, e, l), m = !0); h = d.index; let q = d.attributes.position; c = 1; !0 === e.wireframe && (h = xa.getWireframeAttribute(d), c = 2); a = Aa; if (h !== null) { var u = pa.get(h); a = Ba; a.setIndex(u); } if (m) {
        if (!1 !== Ea.isWebGL2
|| !f.isInstancedMesh && !d.isInstancedBufferGeometry || ra.get('ANGLE_instanced_arrays') !== null) {
          ba.initAttributes(); m = d.attributes; l = l.getAttributes(); const r = e.defaultAttributeValues; for (w in l) {
            const p = l[w]; if (p >= 0) {
              let t = m[w]; if (void 0 !== t) {
                var n = t.normalized; const v = t.itemSize; var x = pa.get(t); if (void 0 !== x) {
                  var y = x.buffer; var z = x.type; x = x.bytesPerElement; if (t.isInterleavedBufferAttribute) {
                    const C = t.data; const V = C.stride; t = t.offset; C && C.isInstancedInterleavedBuffer ? (ba.enableAttributeAndDivisor(p, C.meshPerAttribute), void 0
=== d.maxInstancedCount && (d.maxInstancedCount = C.meshPerAttribute * C.count)) : ba.enableAttribute(p); J.bindBuffer(34962, y); J.vertexAttribPointer(p, v, z, n, V * x, t * x);
                  } else t.isInstancedBufferAttribute ? (ba.enableAttributeAndDivisor(p, t.meshPerAttribute), void 0 === d.maxInstancedCount && (d.maxInstancedCount = t.meshPerAttribute * t.count)) : ba.enableAttribute(p), J.bindBuffer(34962, y), J.vertexAttribPointer(p, v, z, n, 0, 0);
                }
              } else if (w === 'instanceMatrix') {
                x = pa.get(f.instanceMatrix), void 0 !== x && (y = x.buffer, z = x.type, ba.enableAttributeAndDivisor(p
+ 0, 1), ba.enableAttributeAndDivisor(p + 1, 1), ba.enableAttributeAndDivisor(p + 2, 1), ba.enableAttributeAndDivisor(p + 3, 1), J.bindBuffer(34962, y), J.vertexAttribPointer(p + 0, 4, z, !1, 64, 0), J.vertexAttribPointer(p + 1, 4, z, !1, 64, 16), J.vertexAttribPointer(p + 2, 4, z, !1, 64, 32), J.vertexAttribPointer(p + 3, 4, z, !1, 64, 48));
              } else if (void 0 !== r && (n = r[w], void 0 !== n)) switch (n.length) { case 2: J.vertexAttrib2fv(p, n); break; case 3: J.vertexAttrib3fv(p, n); break; case 4: J.vertexAttrib4fv(p, n); break; default: J.vertexAttrib1fv(p, n); }
            }
          }ba.disableUnusedAttributes();
        }h
!== null && J.bindBuffer(34963, u.buffer);
      }u = Infinity; h !== null ? u = h.count : void 0 !== q && (u = q.count); h = d.drawRange.start * c; q = g !== null ? g.start * c : 0; var w = Math.max(h, q); g = Math.max(0, Math.min(u, h + d.drawRange.count * c, q + (g !== null ? g.count * c : Infinity)) - 1 - w + 1); if (g !== 0) {
        if (f.isMesh) if (!0 === e.wireframe)ba.setLineWidth(e.wireframeLinewidth * (N === null ? fa : 1)), a.setMode(1); else switch (f.drawMode) { case 0: a.setMode(4); break; case 1: a.setMode(5); break; case 2: a.setMode(6); } else {
          f.isLine ? (e = e.linewidth, void 0 === e && (e = 1), ba.setLineWidth(e
* (N === null ? fa : 1)), f.isLineSegments ? a.setMode(1) : f.isLineLoop ? a.setMode(2) : a.setMode(3)) : f.isPoints ? a.setMode(0) : f.isSprite && a.setMode(4);
        }f.isInstancedMesh ? a.renderInstances(d, w, g, f.count) : d.isInstancedBufferGeometry ? a.renderInstances(d, w, g, d.maxInstancedCount) : a.render(w, g);
      }
    }; this.compile = function (a, b) {
      D = ua.get(a, b); D.init(); a.traverse((a) => { a.isLight && (D.pushLight(a), a.castShadow && D.pushShadow(a)); }); D.setupLights(b); a.traverse((b) => {
        if (b.material) {
          if (Array.isArray(b.material)) { for (let c = 0; c < b.material.length; c++)u(b.material[c], a.fog, b); } else u(b.material, a.fog, b);
        }
      });
    }; let Ca = null; var za = new Xf(); za.setAnimationLoop((a) => { ka.isPresenting() || Ca && Ca(a); }); typeof window !== 'undefined' && za.setContext(window); this.setAnimationLoop = function (a) { Ca = a; ka.setAnimationLoop(a); za.start(); }; this.render = function (a, c, d, e) {
      if (void 0 !== d) { console.warn('THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.'); var f = d; } if (void 0 !== e) {
        console.warn('THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.');
        var g = e;
      }c && c.isCamera ? O || (bc = b = null, S = !1, ha = -1, Q = null, !0 === a.autoUpdate && a.updateMatrixWorld(), c.parent === null && c.updateMatrixWorld(), ka.enabled && (c = ka.getCamera(c)), D = ua.get(a, c), D.init(), a.onBeforeRender(F, a, c, f || N), Id.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse), cg.setFromMatrix(Id), qa = this.localClippingEnabled, He = Oa.init(this.clippingPlanes, qa, c), G = va.get(a, c), G.init(), l(a, c, 0, F.sortObjects), !0 === F.sortObjects && G.sort(), He && Oa.beginShadows(), Da.render(D.state.shadowsArray, a, c), D.setupLights(c),
      He && Oa.endShadows(), this.info.autoReset && this.info.reset(), void 0 !== f && this.setRenderTarget(f), ka.enabled && ta.isAvailable() && ta.attachCamera(c), ma.render(G, a, c, g), d = G.opaque, e = G.transparent, a.overrideMaterial ? (f = a.overrideMaterial, d.length && m(d, a, c, f), e.length && m(e, a, c, f)) : (d.length && m(d, a, c), e.length && m(e, a, c)), a.onAfterRender(F, a, c), N !== null && (R.updateRenderTargetMipmap(N), R.updateMultisampleRenderTarget(N)), ba.buffers.depth.setTest(!0), ba.buffers.depth.setMask(!0), ba.buffers.color.setMask(!0),
      ba.setPolygonOffset(!1), ka.enabled && (ta.isAvailable() && ta.detachCamera(c), ka.submitFrame()), D = G = null) : console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');
    }; this.setFramebuffer = function (a) { M !== a && J.bindFramebuffer(36160, a); M = a; }; this.getActiveCubeFace = function () { return T; }; this.getActiveMipmapLevel = function () { return X; }; this.getRenderTarget = function () { return N; }; this.setRenderTarget = function (a, b, c) {
      N = a; T = b; X = c; a && void 0 === Y.get(a).__webglFramebuffer && R.setupRenderTarget(a);
      let d = M; let e = !1; a ? (d = Y.get(a).__webglFramebuffer, a.isWebGLRenderTargetCube ? (d = d[b || 0], e = !0) : d = a.isWebGLMultisampleRenderTarget ? Y.get(a).__webglMultisampledFramebuffer : d, W.copy(a.viewport), ca.copy(a.scissor), da = a.scissorTest) : (W.copy(ia).multiplyScalar(fa).floor(), ca.copy(ja).multiplyScalar(fa).floor(), da = na); ac !== d && (J.bindFramebuffer(36160, d), ac = d); ba.viewport(W); ba.scissor(ca); ba.setScissorTest(da); e && (a = Y.get(a.texture), J.framebufferTexture2D(36160, 36064, 34069 + (b || 0), a.__webglTexture, c || 0));
    }; this.readRenderTargetPixels = function (a, b, c, d, e, f, g) {
      if (a && a.isWebGLRenderTarget) {
        let h = Y.get(a).__webglFramebuffer; a.isWebGLRenderTargetCube && void 0 !== g && (h = h[g]); if (h) {
          g = !1; h !== ac && (J.bindFramebuffer(36160, h), g = !0); try {
            const l = a.texture; const m = l.format; const q = l.type; m !== 1023 && la.convert(m) !== J.getParameter(35739) ? console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.') : q === 1009 || la.convert(q) === J.getParameter(35738) || q === 1015 && (Ea.isWebGL2 || ra.get('OES_texture_float')
|| ra.get('WEBGL_color_buffer_float')) || q === 1016 && (Ea.isWebGL2 ? ra.get('EXT_color_buffer_float') : ra.get('EXT_color_buffer_half_float')) ? J.checkFramebufferStatus(36160) === 36053 ? b >= 0 && b <= a.width - d && c >= 0 && c <= a.height - e && J.readPixels(b, c, d, e, la.convert(m), la.convert(q), f) : console.error('THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.') : console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.');
          } finally {
            g
&& J.bindFramebuffer(36160, ac);
          }
        }
      } else console.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.');
    }; this.copyFramebufferToTexture = function (a, b, c) { const d = b.image.width; const e = b.image.height; const f = la.convert(b.format); R.setTexture2D(b, 0); J.copyTexImage2D(3553, c || 0, f, a.x, a.y, d, e, 0); }; this.copyTextureToTexture = function (a, b, c, d) {
      const e = b.image.width; const f = b.image.height; const g = la.convert(c.format); const h = la.convert(c.type); R.setTexture2D(c, 0); b.isDataTexture ? J.texSubImage2D(3553, d || 0, a.x,
        a.y, e, f, g, h, b.image.data) : J.texSubImage2D(3553, d || 0, a.x, a.y, g, h, b.image);
    }; typeof __THREE_DEVTOOLS__ !== 'undefined' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
  } function Ie(a, b) { this.name = ''; this.color = new H(a); this.density = void 0 !== b ? b : 2.5E-4; } function Je(a, b, c) { this.name = ''; this.color = new H(a); this.near = void 0 !== b ? b : 1; this.far = void 0 !== c ? c : 1E3; } function Gb(a, b) {
    this.array = a; this.stride = b; this.count = void 0 !== a ? a.length / b : 0; this.dynamic = !1; this.updateRange = { offset: 0, count: -1 };
    this.version = 0;
  } function Kd(a, b, c, d) { this.data = a; this.itemSize = b; this.offset = c; this.normalized = !0 === d; } function Hb(a) { M.call(this); this.type = 'SpriteMaterial'; this.color = new H(16777215); this.map = null; this.rotation = 0; this.transparent = this.sizeAttenuation = !0; this.setValues(a); } function Ld(a) {
    B.call(this); this.type = 'Sprite'; if (void 0 === Ic) {
      Ic = new E(); let b = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]); b = new Gb(b, 5); Ic.setIndex([0, 1, 2, 0, 2, 3]); Ic.addAttribute('position', new Kd(b, 3,
        0, !1)); Ic.addAttribute('uv', new Kd(b, 2, 3, !1));
    } this.geometry = Ic; this.material = void 0 !== a ? a : new Hb(); this.center = new w(0.5, 0.5);
  } function Ke(a, b, c, d, e, f) { Jc.subVectors(a, c).addScalar(0.5).multiply(d); void 0 !== e ? (Md.x = f * Jc.x - e * Jc.y, Md.y = e * Jc.x + f * Jc.y) : Md.copy(Jc); a.copy(b); a.x += Md.x; a.y += Md.y; a.applyMatrix4(Qh); } function Nd() { B.call(this); this.type = 'LOD'; Object.defineProperties(this, { levels: { enumerable: !0, value: [] } }); this.autoUpdate = !0; } function Od(a, b) {
    a && a.isGeometry && console.error('THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.');
    ja.call(this, a, b); this.type = 'SkinnedMesh'; this.bindMode = 'attached'; this.bindMatrix = new U(); this.bindMatrixInverse = new U();
  } function Le(a, b) { a = a || []; this.bones = a.slice(0); this.boneMatrices = new Float32Array(16 * this.bones.length); this.frame = -1; if (void 0 === b) this.calculateInverses(); else if (this.bones.length === b.length) this.boneInverses = b.slice(0); else for (console.warn('THREE.Skeleton boneInverses is the wrong length.'), this.boneInverses = [], a = 0, b = this.bones.length; a < b; a++) this.boneInverses.push(new U()); } function ig() {
    B.call(this);
    this.type = 'Bone';
  } function jg(a, b, c) { ja.call(this, a, b); this.instanceMatrix = new O(new Float32Array(16 * c), 16); this.count = c; } function Q(a) { M.call(this); this.type = 'LineBasicMaterial'; this.color = new H(16777215); this.linewidth = 1; this.linejoin = this.linecap = 'round'; this.setValues(a); } function xa(a, b, c) {
    c === 1 && console.error('THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.'); B.call(this); this.type = 'Line'; this.geometry = void 0 !== a ? a : new E(); this.material = void 0 !== b ? b : new Q({
      color: 16777215
* Math.random(),
    });
  } function ca(a, b) { xa.call(this, a, b); this.type = 'LineSegments'; } function Me(a, b) { xa.call(this, a, b); this.type = 'LineLoop'; } function Qa(a) { M.call(this); this.type = 'PointsMaterial'; this.color = new H(16777215); this.map = null; this.size = 1; this.sizeAttenuation = !0; this.morphTargets = !1; this.setValues(a); } function Kc(a, b) { B.call(this); this.type = 'Points'; this.geometry = void 0 !== a ? a : new E(); this.material = void 0 !== b ? b : new Qa({ color: 16777215 * Math.random() }); this.updateMorphTargets(); } function kg(a, b, c, d, e, f,
    g) {
    const h = lg.distanceSqToPoint(a); h < c && (c = new n(), lg.closestPointToPoint(a, c), c.applyMatrix4(d), a = e.ray.origin.distanceTo(c), a < e.near || a > e.far || f.push({
      distance: a, distanceToRay: Math.sqrt(h), point: c, index: b, face: null, object: g,
    }));
  } function mg(a, b, c, d, e, f, g, h, l) { W.call(this, a, b, c, d, e, f, g, h, l); this.format = void 0 !== g ? g : 1022; this.minFilter = void 0 !== f ? f : 1006; this.magFilter = void 0 !== e ? e : 1006; this.generateMipmaps = !1; } function Lc(a, b, c, d, e, f, g, h, l, m, q, k) {
    W.call(this, null, f, g, h, l, m, d, e, q, k); this.image = { width: b, height: c };
    this.mipmaps = a; this.generateMipmaps = this.flipY = !1;
  } function Pd(a, b, c, d, e, f, g, h, l) { W.call(this, a, b, c, d, e, f, g, h, l); this.needsUpdate = !0; } function Qd(a, b, c, d, e, f, g, h, l, m) {
    m = void 0 !== m ? m : 1026; if (m !== 1026 && m !== 1027) throw Error('DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat'); void 0 === c && m === 1026 && (c = 1012); void 0 === c && m === 1027 && (c = 1020); W.call(this, null, d, e, f, g, h, m, c, l); this.image = { width: a, height: b }; this.magFilter = void 0 !== g ? g : 1003; this.minFilter = void 0 !== h ? h : 1003; this.generateMipmaps = this.flipY = !1;
  } function Mc(a) {
    E.call(this); this.type = 'WireframeGeometry'; const b = []; let c; let d; let e; const f = [0, 0]; let g = {}; let h = ['a', 'b', 'c']; if (a && a.isGeometry) { var l = a.faces; var m = 0; for (d = l.length; m < d; m++) { var q = l[m]; for (c = 0; c < 3; c++) { var k = q[h[c]]; var t = q[h[(c + 1) % 3]]; f[0] = Math.min(k, t); f[1] = Math.max(k, t); k = `${f[0]},${f[1]}`; void 0 === g[k] && (g[k] = { index1: f[0], index2: f[1] }); } } for (k in g)m = g[k], h = a.vertices[m.index1], b.push(h.x, h.y, h.z), h = a.vertices[m.index2], b.push(h.x, h.y, h.z); } else if (a && a.isBufferGeometry) {
      if (h = new n(), a.index !== null) {
        l = a.attributes.position; q = a.index; let r = a.groups; r.length === 0 && (r = [{ start: 0, count: q.count, materialIndex: 0 }]); a = 0; for (e = r.length; a < e; ++a) for (m = r[a], c = m.start, d = m.count, m = c, d = c + d; m < d; m += 3) for (c = 0; c < 3; c++)k = q.getX(m + c), t = q.getX(m + (c + 1) % 3), f[0] = Math.min(k, t), f[1] = Math.max(k, t), k = `${f[0]},${f[1]}`, void 0 === g[k] && (g[k] = { index1: f[0], index2: f[1] }); for (k in g)m = g[k], h.fromBufferAttribute(l, m.index1), b.push(h.x, h.y, h.z), h.fromBufferAttribute(l, m.index2), b.push(h.x, h.y, h.z);
      } else {
        for (l = a.attributes.position, m = 0, d = l.count / 3; m < d; m++) for (c = 0; c < 3; c++)g = 3 * m + c, h.fromBufferAttribute(l, g), b.push(h.x, h.y, h.z), g = 3 * m + (c + 1) % 3, h.fromBufferAttribute(l, g), b.push(h.x, h.y, h.z);
      }
    } this.addAttribute('position', new A(b, 3));
  } function Rd(a, b, c) { F.call(this); this.type = 'ParametricGeometry'; this.parameters = { func: a, slices: b, stacks: c }; this.fromBufferGeometry(new Nc(a, b, c)); this.mergeVertices(); } function Nc(a, b, c) {
    E.call(this); this.type = 'ParametricBufferGeometry'; this.parameters = { func: a, slices: b, stacks: c }; const d = []; const e = []; const f = []; const g = []; let h = new n();
    let l = new n(); const m = new n(); const q = new n(); const k = new n(); let t; let r; a.length < 3 && console.error('THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.'); const p = b + 1; for (t = 0; t <= c; t++) { const v = t / c; for (r = 0; r <= b; r++) { const x = r / b; a(x, v, l); e.push(l.x, l.y, l.z); x - 1E-5 >= 0 ? (a(x - 1E-5, v, m), q.subVectors(l, m)) : (a(x + 1E-5, v, m), q.subVectors(m, l)); v - 1E-5 >= 0 ? (a(x, v - 1E-5, m), k.subVectors(l, m)) : (a(x, v + 1E-5, m), k.subVectors(m, l)); h.crossVectors(q, k).normalize(); f.push(h.x, h.y, h.z); g.push(x, v); } } for (t = 0; t < c; t++) {
      for (r = 0; r < b; r++) {
        a = t * p + r
+ 1, h = (t + 1) * p + r + 1, l = (t + 1) * p + r, d.push(t * p + r, a, l), d.push(a, h, l);
      }
    } this.setIndex(d); this.addAttribute('position', new A(e, 3)); this.addAttribute('normal', new A(f, 3)); this.addAttribute('uv', new A(g, 2));
  } function Sd(a, b, c, d) {
    F.call(this); this.type = 'PolyhedronGeometry'; this.parameters = {
      vertices: a, indices: b, radius: c, detail: d,
    }; this.fromBufferGeometry(new Ca(a, b, c, d)); this.mergeVertices();
  } function Ca(a, b, c, d) {
    function e(a) { h.push(a.x, a.y, a.z); } function f(b, c) { b *= 3; c.x = a[b + 0]; c.y = a[b + 1]; c.z = a[b + 2]; } function g(a, b, c,
      d) { d < 0 && a.x === 1 && (l[b] = a.x - 1); c.x === 0 && c.z === 0 && (l[b] = d / 2 / Math.PI + 0.5); }E.call(this); this.type = 'PolyhedronBufferGeometry'; this.parameters = {
      vertices: a, indices: b, radius: c, detail: d,
    }; c = c || 1; d = d || 0; var h = []; var l = []; (function (a) {
      for (let c = new n(), d = new n(), g = new n(), h = 0; h < b.length; h += 3) {
        f(b[h + 0], c); f(b[h + 1], d); f(b[h + 2], g); var l; var m; let k = c; const z = d; const y = g; const w = Math.pow(2, a); const P = []; for (m = 0; m <= w; m++) { P[m] = []; const C = k.clone().lerp(y, m / w); const A = z.clone().lerp(y, m / w); const B = w - m; for (l = 0; l <= B; l++)P[m][l] = l === 0 && m === w ? C : C.clone().lerp(A, l / B); } for (m = 0; m
< w; m++) for (l = 0; l < 2 * (w - m) - 1; l++)k = Math.floor(l / 2), l % 2 === 0 ? (e(P[m][k + 1]), e(P[m + 1][k]), e(P[m][k])) : (e(P[m][k + 1]), e(P[m + 1][k + 1]), e(P[m + 1][k]));
      }
    }(d)); (function (a) { for (let b = new n(), c = 0; c < h.length; c += 3)b.x = h[c + 0], b.y = h[c + 1], b.z = h[c + 2], b.normalize().multiplyScalar(a), h[c + 0] = b.x, h[c + 1] = b.y, h[c + 2] = b.z; }(c)); (function () {
      for (var a = new n(), b = 0; b < h.length; b += 3)a.x = h[b + 0], a.y = h[b + 1], a.z = h[b + 2], l.push(Math.atan2(a.z, -a.x) / 2 / Math.PI + 0.5, 1 - (Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + 0.5)); a = new n(); b = new n(); for (var c = new n(), d = new n(), e = new w(), f = new w(), k = new w(), x = 0, z = 0; x < h.length; x += 9, z += 6) { a.set(h[x + 0], h[x + 1], h[x + 2]); b.set(h[x + 3], h[x + 4], h[x + 5]); c.set(h[x + 6], h[x + 7], h[x + 8]); e.set(l[z + 0], l[z + 1]); f.set(l[z + 2], l[z + 3]); k.set(l[z + 4], l[z + 5]); d.copy(a).add(b).add(c).divideScalar(3); const y = Math.atan2(d.z, -d.x); g(e, z + 0, a, y); g(f, z + 2, b, y); g(k, z + 4, c, y); } for (a = 0; a < l.length; a += 6)b = l[a + 0], c = l[a + 2], d = l[a + 4], e = Math.min(b, c, d), Math.max(b, c, d) > 0.9 && e < 0.1 && (b < 0.2 && (l[a + 0] += 1), c < 0.2 && (l[a + 2] += 1), d < 0.2 && (l[a + 4] += 1));
    }()); this.addAttribute('position',
      new A(h, 3)); this.addAttribute('normal', new A(h.slice(), 3)); this.addAttribute('uv', new A(l, 2)); d === 0 ? this.computeVertexNormals() : this.normalizeNormals();
  } function Td(a, b) { F.call(this); this.type = 'TetrahedronGeometry'; this.parameters = { radius: a, detail: b }; this.fromBufferGeometry(new Oc(a, b)); this.mergeVertices(); } function Oc(a, b) { Ca.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], a, b); this.type = 'TetrahedronBufferGeometry'; this.parameters = { radius: a, detail: b }; } function Ud(a, b) {
    F.call(this);
    this.type = 'OctahedronGeometry'; this.parameters = { radius: a, detail: b }; this.fromBufferGeometry(new cc(a, b)); this.mergeVertices();
  } function cc(a, b) { Ca.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], a, b); this.type = 'OctahedronBufferGeometry'; this.parameters = { radius: a, detail: b }; } function Vd(a, b) { F.call(this); this.type = 'IcosahedronGeometry'; this.parameters = { radius: a, detail: b }; this.fromBufferGeometry(new Pc(a, b)); this.mergeVertices(); } function Pc(a, b) {
    const c = (1 + Math.sqrt(5)) / 2; Ca.call(this, [-1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, 0, 0, -1, c, 0, 1, c, 0, -1, -c, 0, 1, -c, c, 0, -1, c, 0, 1, -c, 0, -1, -c, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], a, b); this.type = 'IcosahedronBufferGeometry'; this.parameters = { radius: a, detail: b };
  } function Wd(a, b) { F.call(this); this.type = 'DodecahedronGeometry'; this.parameters = { radius: a, detail: b }; this.fromBufferGeometry(new Qc(a, b)); this.mergeVertices(); } function Qc(a, b) {
    const c = (1 + Math.sqrt(5)) / 2; const d = 1 / c; Ca.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, -d, -c, 0, -d, c, 0, d, -c, 0, d, c, 0, -c, 0, -d, c, 0, -d, -c, 0, d, c, 0, d], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], a, b); this.type = 'DodecahedronBufferGeometry'; this.parameters = { radius: a, detail: b };
  } function Xd(a, b, c, d, e, f) {
    F.call(this); this.type = 'TubeGeometry'; this.parameters = {
      path: a, tubularSegments: b, radius: c, radialSegments: d, closed: e,
    }; void 0 !== f && console.warn('THREE.TubeGeometry: taper has been removed.'); a = new dc(a, b, c, d, e); this.tangents = a.tangents; this.normals = a.normals; this.binormals = a.binormals; this.fromBufferGeometry(a); this.mergeVertices();
  } function dc(a, b, c, d, e) {
    function f(e) {
      q = a.getPointAt(e / b, q); const f = g.normals[e]; e = g.binormals[e]; for (t = 0; t <= d; t++) {
        let m = t / d * Math.PI
* 2; const k = Math.sin(m); m = -Math.cos(m); l.x = m * f.x + k * e.x; l.y = m * f.y + k * e.y; l.z = m * f.z + k * e.z; l.normalize(); p.push(l.x, l.y, l.z); h.x = q.x + c * l.x; h.y = q.y + c * l.y; h.z = q.z + c * l.z; r.push(h.x, h.y, h.z);
      }
    }E.call(this); this.type = 'TubeBufferGeometry'; this.parameters = {
      path: a, tubularSegments: b, radius: c, radialSegments: d, closed: e,
    }; b = b || 64; c = c || 1; d = d || 8; e = e || !1; var g = a.computeFrenetFrames(b, e); this.tangents = g.tangents; this.normals = g.normals; this.binormals = g.binormals; var h = new n(); var l = new n(); const m = new w(); var q = new n(); let k; let t; var r = []; var p = []; const v = []; const
      x = []; for (k = 0; k < b; k++)f(k); f(!1 === e ? b : 0); for (k = 0; k <= b; k++) for (t = 0; t <= d; t++)m.x = k / b, m.y = t / d, v.push(m.x, m.y); (function () { for (t = 1; t <= b; t++) for (k = 1; k <= d; k++) { const a = (d + 1) * t + (k - 1); const c = (d + 1) * t + k; const e = (d + 1) * (t - 1) + k; x.push((d + 1) * (t - 1) + (k - 1), a, e); x.push(a, c, e); } }()); this.setIndex(x); this.addAttribute('position', new A(r, 3)); this.addAttribute('normal', new A(p, 3)); this.addAttribute('uv', new A(v, 2));
  } function Yd(a, b, c, d, e, f, g) {
    F.call(this); this.type = 'TorusKnotGeometry'; this.parameters = {
      radius: a,
      tube: b,
      tubularSegments: c,
      radialSegments: d,
      p: e,
      q: f,
    }; void 0 !== g && console.warn('THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.'); this.fromBufferGeometry(new Rc(a, b, c, d, e, f)); this.mergeVertices();
  } function Rc(a, b, c, d, e, f) {
    function g(a, b, c, d, e) { const f = Math.sin(a); b = c / b * a; c = Math.cos(b); e.x = d * (2 + c) * 0.5 * Math.cos(a); e.y = d * (2 + c) * f * 0.5; e.z = d * Math.sin(b) * 0.5; }E.call(this); this.type = 'TorusKnotBufferGeometry'; this.parameters = {
      radius: a, tube: b, tubularSegments: c, radialSegments: d, p: e, q: f,
    }; a = a || 1; b = b || 0.4; c = Math.floor(c)
|| 64; d = Math.floor(d) || 8; e = e || 2; f = f || 3; const h = []; const l = []; const m = []; const q = []; let k; const t = new n(); const r = new n(); const p = new n(); const v = new n(); const x = new n(); const z = new n(); const y = new n(); for (k = 0; k <= c; ++k) {
      var w = k / c * e * Math.PI * 2; g(w, e, f, a, p); g(w + 0.01, e, f, a, v); z.subVectors(v, p); y.addVectors(v, p); x.crossVectors(z, y); y.crossVectors(x, z); x.normalize(); y.normalize(); for (w = 0; w <= d; ++w) {
        let P = w / d * Math.PI * 2; const C = -b * Math.cos(P); P = b * Math.sin(P); t.x = p.x + (C * y.x + P * x.x); t.y = p.y + (C * y.y + P * x.y); t.z = p.z + (C * y.z + P * x.z); l.push(t.x, t.y, t.z); r.subVectors(t, p).normalize(); m.push(r.x, r.y, r.z); q.push(k
/ c); q.push(w / d);
      }
    } for (w = 1; w <= c; w++) for (k = 1; k <= d; k++)a = (d + 1) * w + (k - 1), b = (d + 1) * w + k, e = (d + 1) * (w - 1) + k, h.push((d + 1) * (w - 1) + (k - 1), a, e), h.push(a, b, e); this.setIndex(h); this.addAttribute('position', new A(l, 3)); this.addAttribute('normal', new A(m, 3)); this.addAttribute('uv', new A(q, 2));
  } function Zd(a, b, c, d, e) {
    F.call(this); this.type = 'TorusGeometry'; this.parameters = {
      radius: a, tube: b, radialSegments: c, tubularSegments: d, arc: e,
    }; this.fromBufferGeometry(new Sc(a, b, c, d, e)); this.mergeVertices();
  } function Sc(a, b, c, d, e) {
    E.call(this);
    this.type = 'TorusBufferGeometry'; this.parameters = {
      radius: a, tube: b, radialSegments: c, tubularSegments: d, arc: e,
    }; a = a || 1; b = b || 0.4; c = Math.floor(c) || 8; d = Math.floor(d) || 6; e = e || 2 * Math.PI; const f = []; const g = []; const h = []; const l = []; const m = new n(); const q = new n(); const k = new n(); let t; let r; for (t = 0; t <= c; t++) {
      for (r = 0; r <= d; r++) {
        const p = r / d * e; const v = t / c * Math.PI * 2; q.x = (a + b * Math.cos(v)) * Math.cos(p); q.y = (a + b * Math.cos(v)) * Math.sin(p); q.z = b * Math.sin(v); g.push(q.x, q.y, q.z); m.x = a * Math.cos(p); m.y = a * Math.sin(p); k.subVectors(q, m).normalize(); h.push(k.x, k.y, k.z); l.push(r / d); l.push(t
/ c);
      }
    } for (t = 1; t <= c; t++) for (r = 1; r <= d; r++)a = (d + 1) * (t - 1) + r - 1, b = (d + 1) * (t - 1) + r, e = (d + 1) * t + r, f.push((d + 1) * t + r - 1, a, e), f.push(a, b, e); this.setIndex(f); this.addAttribute('position', new A(g, 3)); this.addAttribute('normal', new A(h, 3)); this.addAttribute('uv', new A(l, 2));
  } function Rh(a, b, c, d, e) { for (var f, g = 0, h = b, l = c - d; h < c; h += d)g += (a[l] - a[h]) * (a[h + 1] + a[l + 1]), l = h; if (e === g > 0) for (e = b; e < c; e += d)f = Sh(e, a[e], a[e + 1], f); else for (e = c - d; e >= b; e -= d)f = Sh(e, a[e], a[e + 1], f); f && ec(f, f.next) && ($d(f), f = f.next); return f; } function ae(a, b) {
    if (!a) return a;
    b || (b = a); do { var c = !1; if (a.steiner || !ec(a, a.next) && sa(a.prev, a, a.next) !== 0)a = a.next; else { $d(a); a = b = a.prev; if (a === a.next) break; c = !0; } } while (c || a !== b); return b;
  } function be(a, b, c, d, e, f, g) {
    if (a) {
      if (!g && f) {
        var h = a; var l = h; do l.z === null && (l.z = ng(l.x, l.y, d, e, f)), l.prevZ = l.prev, l = l.nextZ = l.next; while (l !== h); l.prevZ.nextZ = null; l.prevZ = null; h = l; var m; var q; var k; let t; var r = 1; do {
          l = h; var p = h = null; for (q = 0; l;) {
            q++; var n = l; for (m = k = 0; m < r && (k++, n = n.nextZ, n); m++);for (t = r; k > 0 || t > 0 && n;) { k !== 0 && (t === 0 || !n || l.z <= n.z) ? (m = l, l = l.nextZ, k--) : (m = n, n = n.nextZ, t--), p ? p.nextZ = m : h = m, m.prevZ = p, p = m; } l = n;
          }p.nextZ = null; r *= 2;
        } while (q > 1);
      } for (h = a; a.prev !== a.next;) {
        l = a.prev; n = a.next; if (f)p = lk(a, d, e, f); else a:if (p = a, q = p.prev, k = p, r = p.next, sa(q, k, r) >= 0)p = !1; else { for (m = p.next.next; m !== p.prev;) { if (Tc(q.x, q.y, k.x, k.y, r.x, r.y, m.x, m.y) && sa(m.prev, m, m.next) >= 0) { p = !1; break a; }m = m.next; }p = !0; } if (p)b.push(l.i / c), b.push(a.i / c), b.push(n.i / c), $d(a), h = a = n.next; else if (a = n, a === h) {
          if (!g)be(ae(a), b, c, d, e, f, 1); else if (g === 1) {
            g = b; h = c; l = a; do {
              n = l.prev, p = l.next.next, !ec(n, p) && Th(n,
                l, l.next, p) && ce(n, p) && ce(p, n) && (g.push(n.i / h), g.push(l.i / h), g.push(p.i / h), $d(l), $d(l.next), l = a = p), l = l.next;
            } while (l !== a); a = l; be(a, b, c, d, e, f, 2);
          } else if (g === 2) {
            a: {
              g = a; do {
                for (h = g.next.next; h !== g.prev;) {
                  if (l = g.i !== h.i) {
                    l = g; n = h; if (p = l.next.i !== n.i && l.prev.i !== n.i) { b: { p = l; do { if (p.i !== l.i && p.next.i !== l.i && p.i !== n.i && p.next.i !== n.i && Th(p, p.next, l, n)) { p = !0; break b; }p = p.next; } while (p !== l); p = !1; }p = !p; } if (p = p && ce(l, n) && ce(n, l)) {
                      p = l; q = !1; k = (l.x + n.x) / 2; n = (l.y + n.y) / 2; do {
                        p.y > n !== p.next.y > n && p.next.y !== p.y && k < (p.next.x
- p.x) * (n - p.y) / (p.next.y - p.y) + p.x && (q = !q), p = p.next;
                      } while (p !== l); p = q;
                    }l = p;
                  } if (l) { a = Uh(g, h); g = ae(g, g.next); a = ae(a, a.next); be(g, b, c, d, e, f); be(a, b, c, d, e, f); break a; }h = h.next;
                }g = g.next;
              } while (g !== a);
            }
          } break;
        }
      }
    }
  } function lk(a, b, c, d) {
    const e = a.prev; const f = a.next; if (sa(e, a, f) >= 0) return !1; const g = e.x > a.x ? e.x > f.x ? e.x : f.x : a.x > f.x ? a.x : f.x; const h = e.y > a.y ? e.y > f.y ? e.y : f.y : a.y > f.y ? a.y : f.y; const l = ng(e.x < a.x ? e.x < f.x ? e.x : f.x : a.x < f.x ? a.x : f.x, e.y < a.y ? e.y < f.y ? e.y : f.y : a.y < f.y ? a.y : f.y, b, c, d); b = ng(g, h, b, c, d); c = a.prevZ; for (d = a.nextZ; c && c.z >= l && d && d.z
<= b;) { if (c !== a.prev && c !== a.next && Tc(e.x, e.y, a.x, a.y, f.x, f.y, c.x, c.y) && sa(c.prev, c, c.next) >= 0) return !1; c = c.prevZ; if (d !== a.prev && d !== a.next && Tc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && sa(d.prev, d, d.next) >= 0) return !1; d = d.nextZ; } for (;c && c.z >= l;) { if (c !== a.prev && c !== a.next && Tc(e.x, e.y, a.x, a.y, f.x, f.y, c.x, c.y) && sa(c.prev, c, c.next) >= 0) return !1; c = c.prevZ; } for (;d && d.z <= b;) { if (d !== a.prev && d !== a.next && Tc(e.x, e.y, a.x, a.y, f.x, f.y, d.x, d.y) && sa(d.prev, d, d.next) >= 0) return !1; d = d.nextZ; } return !0;
  } function mk(a, b) { return a.x - b.x; }
  function nk(a, b) {
    let c = b; const d = a.x; const e = a.y; let f = -Infinity; do { if (e <= c.y && e >= c.next.y && c.next.y !== c.y) { var g = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y); if (g <= d && g > f) { f = g; if (g === d) { if (e === c.y) return c; if (e === c.next.y) return c.next; } var h = c.x < c.next.x ? c : c.next; } }c = c.next; } while (c !== b); if (!h) return null; if (d === f) return h.prev; b = h; g = h.x; const l = h.y; let m = Infinity; for (c = h.next; c !== b;) {
      if (d >= c.x && c.x >= g && d !== c.x && Tc(e < l ? d : f, e, g, l, e < l ? f : d, e, c.x, c.y)) { const q = Math.abs(e - c.y) / (d - c.x); (q < m || q === m && c.x > h.x) && ce(c, a) && (h = c, m = q); }c = c.next;
    } return h;
  } function ng(a, b, c, d, e) { a = 32767 * (a - c) * e; b = 32767 * (b - d) * e; a = (a | a << 8) & 16711935; a = (a | a << 4) & 252645135; a = (a | a << 2) & 858993459; b = (b | b << 8) & 16711935; b = (b | b << 4) & 252645135; b = (b | b << 2) & 858993459; return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1; } function ok(a) { let b = a; let c = a; do { if (b.x < c.x || b.x === c.x && b.y < c.y)c = b; b = b.next; } while (b !== a); return c; } function Tc(a, b, c, d, e, f, g, h) { return (e - g) * (b - h) - (a - g) * (f - h) >= 0 && (a - g) * (d - h) - (c - g) * (b - h) >= 0 && (c - g) * (f - h) - (e - g) * (d - h) >= 0; } function sa(a, b, c) {
    return (b.y - a.y) * (c.x
- b.x) - (b.x - a.x) * (c.y - b.y);
  } function ec(a, b) { return a.x === b.x && a.y === b.y; } function Th(a, b, c, d) { return ec(a, c) && ec(b, d) || ec(a, d) && ec(c, b) ? !0 : sa(a, b, c) > 0 !== sa(a, b, d) > 0 && sa(c, d, a) > 0 !== sa(c, d, b) > 0; } function ce(a, b) { return sa(a.prev, a, a.next) < 0 ? sa(a, b, a.next) >= 0 && sa(a, a.prev, b) >= 0 : sa(a, b, a.prev) < 0 || sa(a, a.next, b) < 0; } function Uh(a, b) { const c = new og(a.i, a.x, a.y); const d = new og(b.i, b.x, b.y); const e = a.next; const f = b.prev; a.next = b; b.prev = a; c.next = e; e.prev = c; d.next = c; c.prev = d; f.next = d; d.prev = f; return d; } function Sh(a, b, c, d) {
    a = new og(a,
      b, c); d ? (a.next = d.next, a.prev = d, d.next.prev = a, d.next = a) : (a.prev = a, a.next = a); return a;
  } function $d(a) { a.next.prev = a.prev; a.prev.next = a.next; a.prevZ && (a.prevZ.nextZ = a.nextZ); a.nextZ && (a.nextZ.prevZ = a.prevZ); } function og(a, b, c) { this.i = a; this.x = b; this.y = c; this.nextZ = this.prevZ = this.z = this.next = this.prev = null; this.steiner = !1; } function Vh(a) { const b = a.length; b > 2 && a[b - 1].equals(a[0]) && a.pop(); } function Wh(a, b) { for (let c = 0; c < b.length; c++)a.push(b[c].x), a.push(b[c].y); } function fc(a, b) {
    F.call(this); this.type = 'ExtrudeGeometry';
    this.parameters = { shapes: a, options: b }; this.fromBufferGeometry(new eb(a, b)); this.mergeVertices();
  } function eb(a, b) {
    function c(a) {
      function c(a, b, c) { b || console.error('THREE.ExtrudeGeometry: vec does not exist'); return b.clone().multiplyScalar(c).add(a); } function g(a, b, c) {
        let d = a.x - b.x; let e = a.y - b.y; let f = c.x - a.x; let g = c.y - a.y; let h = d * d + e * e; if (Math.abs(d * g - e * f) > Number.EPSILON) {
          const l = Math.sqrt(h); const m = Math.sqrt(f * f + g * g); h = b.x - e / l; b = b.y + d / l; g = ((c.x - g / m - h) * g - (c.y + f / m - b) * f) / (d * g - e * f); f = h + d * g - a.x; d = b + e * g - a.y; e = f * f
+ d * d; if (e <= 2) return new w(f, d); e = Math.sqrt(e / 2);
        } else a = !1, d > Number.EPSILON ? f > Number.EPSILON && (a = !0) : d < -Number.EPSILON ? f < -Number.EPSILON && (a = !0) : Math.sign(e) === Math.sign(g) && (a = !0), a ? (f = -e, e = Math.sqrt(h)) : (f = d, d = e, e = Math.sqrt(h / 2)); return new w(f / e, d / e);
      } function h(a, b) {
        for (K = a.length; --K >= 0;) {
          const c = K; let f = K - 1; f < 0 && (f = a.length - 1); var g; const h = y + 2 * E; for (g = 0; g < h; g++) {
            let l = Y * g; let m = Y * (g + 1); const q = b + f + l; const k = b + f + m; m = b + c + m; p(b + c + l); p(q); p(m); p(q); p(k); p(m); l = e.length / 3; l = G.generateSideWallUV(d, e, l - 6, l - 3, l - 2, l - 1); v(l[0]);
            v(l[1]); v(l[3]); v(l[1]); v(l[2]); v(l[3]);
          }
        }
      } function l(a, b, c) { x.push(a); x.push(b); x.push(c); } function k(a, b, c) { p(a); p(b); p(c); a = e.length / 3; a = G.generateTopUV(d, e, a - 3, a - 2, a - 1); v(a[0]); v(a[1]); v(a[2]); } function p(a) { e.push(x[3 * a]); e.push(x[3 * a + 1]); e.push(x[3 * a + 2]); } function v(a) { f.push(a.x); f.push(a.y); } var x = []; let z = void 0 !== b.curveSegments ? b.curveSegments : 12; var y = void 0 !== b.steps ? b.steps : 1; let V = void 0 !== b.depth ? b.depth : 100; let P = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0; let C = void 0 !== b.bevelThickness ? b.bevelThickness : 6;
      let A = void 0 !== b.bevelSize ? b.bevelSize : C - 2; let B = void 0 !== b.bevelOffset ? b.bevelOffset : 0; var E = void 0 !== b.bevelSegments ? b.bevelSegments : 3; let D = b.extrudePath; var G = void 0 !== b.UVGenerator ? b.UVGenerator : pk; void 0 !== b.amount && (console.warn('THREE.ExtrudeBufferGeometry: amount has been renamed to depth.'), V = b.amount); let F = !1; if (D) { var H = D.getSpacedPoints(y); F = !0; P = !1; var I = D.computeFrenetFrames(y, !1); var O = new n(); var T = new n(); var X = new n(); }P || (B = A = C = E = 0); let M; z = a.extractPoints(z); a = z.shape; const N = z.holes; if (!pb.isClockWise(a)) {
        a = a.reverse(); var ha = 0; for (M = N.length; ha < M; ha++) { var L = N[ha]; pb.isClockWise(L) && (N[ha] = L.reverse()); }
      } const U = pb.triangulateShape(a, N); const W = a; ha = 0; for (M = N.length; ha < M; ha++)L = N[ha], a = a.concat(L); let Q; var Y = a.length; let S; const ca = U.length; z = []; var K = 0; let Z = W.length; let fa = Z - 1; for (Q = K + 1; K < Z; K++, fa++, Q++)fa === Z && (fa = 0), Q === Z && (Q = 0), z[K] = g(W[K], W[fa], W[Q]); D = []; let ea = z.concat(); ha = 0; for (M = N.length; ha < M; ha++) {
        L = N[ha]; var aa = []; K = 0; Z = L.length; fa = Z - 1; for (Q = K + 1; K < Z; K++, fa++, Q++) {
          fa === Z && (fa = 0), Q === Z && (Q = 0), aa[K] = g(L[K], L[fa],
            L[Q]);
        }D.push(aa); ea = ea.concat(aa);
      } for (fa = 0; fa < E; fa++) { Z = fa / E; var da = C * Math.cos(Z * Math.PI / 2); Q = A * Math.sin(Z * Math.PI / 2) + B; K = 0; for (Z = W.length; K < Z; K++) { var R = c(W[K], z[K], Q); l(R.x, R.y, -da); }ha = 0; for (M = N.length; ha < M; ha++) for (L = N[ha], aa = D[ha], K = 0, Z = L.length; K < Z; K++)R = c(L[K], aa[K], Q), l(R.x, R.y, -da); }Q = A + B; for (K = 0; K < Y; K++)R = P ? c(a[K], ea[K], Q) : a[K], F ? (T.copy(I.normals[0]).multiplyScalar(R.x), O.copy(I.binormals[0]).multiplyScalar(R.y), X.copy(H[0]).add(T).add(O), l(X.x, X.y, X.z)) : l(R.x, R.y, 0); for (Z = 1; Z <= y; Z++) { for (K = 0; K < Y; K++)R = P ? c(a[K], ea[K], Q) : a[K], F ? (T.copy(I.normals[Z]).multiplyScalar(R.x), O.copy(I.binormals[Z]).multiplyScalar(R.y), X.copy(H[Z]).add(T).add(O), l(X.x, X.y, X.z)) : l(R.x, R.y, V / y * Z); } for (fa = E - 1; fa >= 0; fa--) { Z = fa / E; da = C * Math.cos(Z * Math.PI / 2); Q = A * Math.sin(Z * Math.PI / 2) + B; K = 0; for (Z = W.length; K < Z; K++)R = c(W[K], z[K], Q), l(R.x, R.y, V + da); ha = 0; for (M = N.length; ha < M; ha++) for (L = N[ha], aa = D[ha], K = 0, Z = L.length; K < Z; K++)R = c(L[K], aa[K], Q), F ? l(R.x, R.y + H[y - 1].y, H[y - 1].x + da) : l(R.x, R.y, V + da); }(function () {
        const a = e.length / 3; if (P) {
          let b = 0 * Y; for (K = 0; K < ca; K++)S = U[K], k(S[2] + b, S[1] + b, S[0] + b); b = Y * (y + 2 * E); for (K = 0; K < ca; K++)S = U[K], k(S[0] + b, S[1] + b, S[2] + b);
        } else { for (K = 0; K < ca; K++)S = U[K], k(S[2], S[1], S[0]); for (K = 0; K < ca; K++)S = U[K], k(S[0] + Y * y, S[1] + Y * y, S[2] + Y * y); }d.addGroup(a, e.length / 3 - a, 0);
      }()); (function () { const a = e.length / 3; let b = 0; h(W, b); b += W.length; ha = 0; for (M = N.length; ha < M; ha++)L = N[ha], h(L, b), b += L.length; d.addGroup(a, e.length / 3 - a, 1); }());
    }E.call(this); this.type = 'ExtrudeBufferGeometry'; this.parameters = { shapes: a, options: b }; a = Array.isArray(a) ? a : [a]; for (var d = this, e = [], f = [], g = 0, h = a.length; g < h; g++)c(a[g]); this.addAttribute('position', new A(e, 3)); this.addAttribute('uv', new A(f, 2)); this.computeVertexNormals();
  } function Xh(a, b, c) { c.shapes = []; if (Array.isArray(a)) for (let d = 0, e = a.length; d < e; d++)c.shapes.push(a[d].uuid); else c.shapes.push(a.uuid); void 0 !== b.extrudePath && (c.options.extrudePath = b.extrudePath.toJSON()); return c; } function de(a, b) { F.call(this); this.type = 'TextGeometry'; this.parameters = { text: a, parameters: b }; this.fromBufferGeometry(new Uc(a, b)); this.mergeVertices(); }
  function Uc(a, b) { b = b || {}; const c = b.font; if (!c || !c.isFont) return console.error('THREE.TextGeometry: font parameter is not an instance of THREE.Font.'), new F(); a = c.generateShapes(a, b.size); b.depth = void 0 !== b.height ? b.height : 50; void 0 === b.bevelThickness && (b.bevelThickness = 10); void 0 === b.bevelSize && (b.bevelSize = 8); void 0 === b.bevelEnabled && (b.bevelEnabled = !1); eb.call(this, a, b); this.type = 'TextBufferGeometry'; } function ee(a, b, c, d, e, f, g) {
    F.call(this); this.type = 'SphereGeometry'; this.parameters = {
      radius: a,
      widthSegments: b,
      heightSegments: c,
      phiStart: d,
      phiLength: e,
      thetaStart: f,
      thetaLength: g,
    }; this.fromBufferGeometry(new Ib(a, b, c, d, e, f, g)); this.mergeVertices();
  } function Ib(a, b, c, d, e, f, g) {
    E.call(this); this.type = 'SphereBufferGeometry'; this.parameters = {
      radius: a, widthSegments: b, heightSegments: c, phiStart: d, phiLength: e, thetaStart: f, thetaLength: g,
    }; a = a || 1; b = Math.max(3, Math.floor(b) || 8); c = Math.max(2, Math.floor(c) || 6); d = void 0 !== d ? d : 0; e = void 0 !== e ? e : 2 * Math.PI; f = void 0 !== f ? f : 0; g = void 0 !== g ? g : Math.PI; const h = Math.min(f + g, Math.PI); let l; let m;
    let q = 0; const k = []; const t = new n(); const r = new n(); const p = []; const v = []; const x = []; const z = []; for (m = 0; m <= c; m++) { const y = []; const w = m / c; let P = 0; m == 0 && f == 0 ? P = 0.5 / b : m == c && h == Math.PI && (P = -0.5 / b); for (l = 0; l <= b; l++) { const C = l / b; t.x = -a * Math.cos(d + C * e) * Math.sin(f + w * g); t.y = a * Math.cos(f + w * g); t.z = a * Math.sin(d + C * e) * Math.sin(f + w * g); v.push(t.x, t.y, t.z); r.copy(t).normalize(); x.push(r.x, r.y, r.z); z.push(C + P, 1 - w); y.push(q++); }k.push(y); } for (m = 0; m < c; m++) for (l = 0; l < b; l++)a = k[m][l + 1], d = k[m][l], e = k[m + 1][l], g = k[m + 1][l + 1], (m !== 0 || f > 0) && p.push(a, d, g), (m !== c - 1 || h < Math.PI) && p.push(d, e, g); this.setIndex(p);
    this.addAttribute('position', new A(v, 3)); this.addAttribute('normal', new A(x, 3)); this.addAttribute('uv', new A(z, 2));
  } function fe(a, b, c, d, e, f) {
    F.call(this); this.type = 'RingGeometry'; this.parameters = {
      innerRadius: a, outerRadius: b, thetaSegments: c, phiSegments: d, thetaStart: e, thetaLength: f,
    }; this.fromBufferGeometry(new Vc(a, b, c, d, e, f)); this.mergeVertices();
  } function Vc(a, b, c, d, e, f) {
    E.call(this); this.type = 'RingBufferGeometry'; this.parameters = {
      innerRadius: a,
      outerRadius: b,
      thetaSegments: c,
      phiSegments: d,
      thetaStart: e,
      thetaLength: f,
    }; a = a || 0.5; b = b || 1; e = void 0 !== e ? e : 0; f = void 0 !== f ? f : 2 * Math.PI; c = void 0 !== c ? Math.max(3, c) : 8; d = void 0 !== d ? Math.max(1, d) : 1; const g = []; const h = []; const l = []; const m = []; let q = a; const k = (b - a) / d; const t = new n(); const r = new w(); let p; let v; for (p = 0; p <= d; p++) { for (v = 0; v <= c; v++)a = e + v / c * f, t.x = q * Math.cos(a), t.y = q * Math.sin(a), h.push(t.x, t.y, t.z), l.push(0, 0, 1), r.x = (t.x / b + 1) / 2, r.y = (t.y / b + 1) / 2, m.push(r.x, r.y); q += k; } for (p = 0; p < d; p++) for (b = p * (c + 1), v = 0; v < c; v++)a = v + b, e = a + c + 1, f = a + c + 2, q = a + 1, g.push(a, e, q), g.push(e, f, q); this.setIndex(g); this.addAttribute('position', new A(h,
      3)); this.addAttribute('normal', new A(l, 3)); this.addAttribute('uv', new A(m, 2));
  } function ge(a, b, c, d) {
    F.call(this); this.type = 'LatheGeometry'; this.parameters = {
      points: a, segments: b, phiStart: c, phiLength: d,
    }; this.fromBufferGeometry(new Wc(a, b, c, d)); this.mergeVertices();
  } function Wc(a, b, c, d) {
    E.call(this); this.type = 'LatheBufferGeometry'; this.parameters = {
      points: a, segments: b, phiStart: c, phiLength: d,
    }; b = Math.floor(b) || 12; c = c || 0; d = d || 2 * Math.PI; d = L.clamp(d, 0, 2 * Math.PI); let e = []; let f = []; let g = []; let h = 1 / b; let l = new n(); let m = new w(); let q; for (q = 0; q <= b; q++) { var k = c + q * h * d; const t = Math.sin(k); const r = Math.cos(k); for (k = 0; k <= a.length - 1; k++)l.x = a[k].x * t, l.y = a[k].y, l.z = a[k].x * r, f.push(l.x, l.y, l.z), m.x = q / b, m.y = k / (a.length - 1), g.push(m.x, m.y); } for (q = 0; q < b; q++) for (k = 0; k < a.length - 1; k++)c = k + q * a.length, h = c + a.length, l = c + a.length + 1, m = c + 1, e.push(c, h, m), e.push(h, l, m); this.setIndex(e); this.addAttribute('position', new A(f, 3)); this.addAttribute('uv', new A(g, 2)); this.computeVertexNormals(); if (d === 2 * Math.PI) { for (d = this.attributes.normal.array, e = new n(), f = new n(), g = new n(), c = b * a.length * 3, k = q = 0; q < a.length; q++, k += 3)e.x = d[k + 0], e.y = d[k + 1], e.z = d[k + 2], f.x = d[c + k + 0], f.y = d[c + k + 1], f.z = d[c + k + 2], g.addVectors(e, f).normalize(), d[k + 0] = d[c + k + 0] = g.x, d[k + 1] = d[c + k + 1] = g.y, d[k + 2] = d[c + k + 2] = g.z; }
  } function gc(a, b) { F.call(this); this.type = 'ShapeGeometry'; typeof b === 'object' && (console.warn('THREE.ShapeGeometry: Options parameter has been removed.'), b = b.curveSegments); this.parameters = { shapes: a, curveSegments: b }; this.fromBufferGeometry(new hc(a, b)); this.mergeVertices(); } function hc(a, b) {
    function c(a) {
      let c;
      const h = e.length / 3; a = a.extractPoints(b); let m = a.shape; const k = a.holes; !1 === pb.isClockWise(m) && (m = m.reverse()); a = 0; for (c = k.length; a < c; a++) { var q = k[a]; !0 === pb.isClockWise(q) && (k[a] = q.reverse()); } const n = pb.triangulateShape(m, k); a = 0; for (c = k.length; a < c; a++)q = k[a], m = m.concat(q); a = 0; for (c = m.length; a < c; a++)q = m[a], e.push(q.x, q.y, 0), f.push(0, 0, 1), g.push(q.x, q.y); a = 0; for (c = n.length; a < c; a++)m = n[a], d.push(m[0] + h, m[1] + h, m[2] + h), l += 3;
    }E.call(this); this.type = 'ShapeBufferGeometry'; this.parameters = { shapes: a, curveSegments: b }; b = b
|| 12; var d = []; var e = []; var f = []; var g = []; let h = 0; var l = 0; if (!1 === Array.isArray(a))c(a); else for (let m = 0; m < a.length; m++)c(a[m]), this.addGroup(h, l, m), h += l, l = 0; this.setIndex(d); this.addAttribute('position', new A(e, 3)); this.addAttribute('normal', new A(f, 3)); this.addAttribute('uv', new A(g, 2));
  } function Yh(a, b) { b.shapes = []; if (Array.isArray(a)) for (let c = 0, d = a.length; c < d; c++)b.shapes.push(a[c].uuid); else b.shapes.push(a.uuid); return b; } function Xc(a, b) {
    E.call(this); this.type = 'EdgesGeometry'; this.parameters = { thresholdAngle: b }; const c = []; b = Math.cos(L.DEG2RAD * (void 0 !== b ? b : 1)); let d = [0, 0]; const e = {}; let f = ['a', 'b', 'c']; if (a.isBufferGeometry) { var g = new F(); g.fromBufferGeometry(a); } else g = a.clone(); g.mergeVertices(); g.computeFaceNormals(); a = g.vertices; g = g.faces; for (let h = 0, l = g.length; h < l; h++) {
      for (let m = g[h], k = 0; k < 3; k++) {
        var u = m[f[k]]; const n = m[f[(k + 1) % 3]]; d[0] = Math.min(u, n); d[1] = Math.max(u, n); u = `${d[0]},${d[1]}`; void 0 === e[u] ? e[u] = {
          index1: d[0], index2: d[1], face1: h, face2: void 0,
        } : e[u].face2 = h;
      }
    } for (u in e) {
      if (d = e[u], void 0 === d.face2 || g[d.face1].normal.dot(g[d.face2].normal)
<= b)f = a[d.index1], c.push(f.x, f.y, f.z), f = a[d.index2], c.push(f.x, f.y, f.z);
    } this.addAttribute('position', new A(c, 3));
  } function ic(a, b, c, d, e, f, g, h) {
    F.call(this); this.type = 'CylinderGeometry'; this.parameters = {
      radiusTop: a, radiusBottom: b, height: c, radialSegments: d, heightSegments: e, openEnded: f, thetaStart: g, thetaLength: h,
    }; this.fromBufferGeometry(new qb(a, b, c, d, e, f, g, h)); this.mergeVertices();
  } function qb(a, b, c, d, e, f, g, h) {
    function l(c) {
      let e; let f = new w(); let l = new n(); let q = 0; const v = !0 === c ? a : b; const y = !0 === c ? 1 : -1; const A = p; for (e = 1; e <= d; e++) {
        u.push(0,
          x * y, 0), t.push(0, y, 0), r.push(0.5, 0.5), p++;
      } const B = p; for (e = 0; e <= d; e++) { let E = e / d * h + g; const D = Math.cos(E); E = Math.sin(E); l.x = v * E; l.y = x * y; l.z = v * D; u.push(l.x, l.y, l.z); t.push(0, y, 0); f.x = 0.5 * D + 0.5; f.y = 0.5 * E * y + 0.5; r.push(f.x, f.y); p++; } for (e = 0; e < d; e++)f = A + e, l = B + e, !0 === c ? k.push(l, l + 1, f) : k.push(l + 1, l, f), q += 3; m.addGroup(z, q, !0 === c ? 1 : 2); z += q;
    }E.call(this); this.type = 'CylinderBufferGeometry'; this.parameters = {
      radiusTop: a, radiusBottom: b, height: c, radialSegments: d, heightSegments: e, openEnded: f, thetaStart: g, thetaLength: h,
    }; var m = this;
    a = void 0 !== a ? a : 1; b = void 0 !== b ? b : 1; c = c || 1; d = Math.floor(d) || 8; e = Math.floor(e) || 1; f = void 0 !== f ? f : !1; g = void 0 !== g ? g : 0; h = void 0 !== h ? h : 2 * Math.PI; var k = []; var u = []; var t = []; var r = []; var p = 0; const v = []; var x = c / 2; var z = 0; (function () {
      let f; let l; let q = new n(); let w = new n(); let A = 0; let B = (b - a) / c; for (l = 0; l <= e; l++) { const E = []; const D = l / e; const G = D * (b - a) + a; for (f = 0; f <= d; f++) { const F = f / d; let H = F * h + g; const I = Math.sin(H); H = Math.cos(H); w.x = G * I; w.y = -D * c + x; w.z = G * H; u.push(w.x, w.y, w.z); q.set(I, B, H).normalize(); t.push(q.x, q.y, q.z); r.push(F, 1 - D); E.push(p++); }v.push(E); } for (f = 0; f < d; f++) {
        for (l = 0; l < e; l++) {
          q = v[l + 1][f], w = v[l + 1][f + 1], B = v[l][f + 1], k.push(v[l][f], q, B), k.push(q, w, B), A += 6;
        }
      }m.addGroup(z, A, 0); z += A;
    }()); !1 === f && (a > 0 && l(!0), b > 0 && l(!1)); this.setIndex(k); this.addAttribute('position', new A(u, 3)); this.addAttribute('normal', new A(t, 3)); this.addAttribute('uv', new A(r, 2));
  } function he(a, b, c, d, e, f, g) {
    ic.call(this, 0, a, b, c, d, e, f, g); this.type = 'ConeGeometry'; this.parameters = {
      radius: a, height: b, radialSegments: c, heightSegments: d, openEnded: e, thetaStart: f, thetaLength: g,
    };
  } function ie(a, b, c, d, e, f, g) {
    qb.call(this, 0, a,
      b, c, d, e, f, g); this.type = 'ConeBufferGeometry'; this.parameters = {
      radius: a, height: b, radialSegments: c, heightSegments: d, openEnded: e, thetaStart: f, thetaLength: g,
    };
  } function je(a, b, c, d) {
    F.call(this); this.type = 'CircleGeometry'; this.parameters = {
      radius: a, segments: b, thetaStart: c, thetaLength: d,
    }; this.fromBufferGeometry(new Yc(a, b, c, d)); this.mergeVertices();
  } function Yc(a, b, c, d) {
    E.call(this); this.type = 'CircleBufferGeometry'; this.parameters = {
      radius: a, segments: b, thetaStart: c, thetaLength: d,
    }; a = a || 1; b = void 0 !== b ? Math.max(3,
      b) : 8; c = void 0 !== c ? c : 0; d = void 0 !== d ? d : 2 * Math.PI; const e = []; const f = []; const g = []; const h = []; let l; const m = new n(); const k = new w(); f.push(0, 0, 0); g.push(0, 0, 1); h.push(0.5, 0.5); let u = 0; for (l = 3; u <= b; u++, l += 3) { const t = c + u / b * d; m.x = a * Math.cos(t); m.y = a * Math.sin(t); f.push(m.x, m.y, m.z); g.push(0, 0, 1); k.x = (f[l] / a + 1) / 2; k.y = (f[l + 1] / a + 1) / 2; h.push(k.x, k.y); } for (l = 1; l <= b; l++)e.push(l, l + 1, 0); this.setIndex(e); this.addAttribute('position', new A(f, 3)); this.addAttribute('normal', new A(g, 3)); this.addAttribute('uv', new A(h, 2));
  } function jc(a) {
    M.call(this); this.type = 'ShadowMaterial'; this.color = new H(0); this.transparent = !0; this.setValues(a);
  } function Zc(a) { ma.call(this, a); this.type = 'RawShaderMaterial'; } function fb(a) {
    M.call(this); this.defines = { STANDARD: '' }; this.type = 'MeshStandardMaterial'; this.color = new H(16777215); this.metalness = this.roughness = 0.5; this.lightMap = this.map = null; this.lightMapIntensity = 1; this.aoMap = null; this.aoMapIntensity = 1; this.emissive = new H(0); this.emissiveIntensity = 1; this.bumpMap = this.emissiveMap = null; this.bumpScale = 1; this.normalMap = null; this.normalMapType = 0; this.normalScale = new w(1, 1); this.displacementMap = null; this.displacementScale = 1; this.displacementBias = 0; this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null; this.envMapIntensity = 1; this.refractionRatio = 0.98; this.wireframe = !1; this.wireframeLinewidth = 1; this.wireframeLinejoin = this.wireframeLinecap = 'round'; this.morphNormals = this.morphTargets = this.skinning = !1; this.setValues(a);
  } function kc(a) {
    fb.call(this); this.defines = { STANDARD: '', PHYSICAL: '' }; this.type = 'MeshPhysicalMaterial'; this.reflectivity = 0.5; this.clearcoatRoughness = this.clearcoat = 0; this.sheen = null; this.clearcoatNormalScale = new w(1, 1); this.clearcoatNormalMap = null; this.transparency = 0; this.setValues(a);
  } function Ra(a) {
    M.call(this); this.type = 'MeshPhongMaterial'; this.color = new H(16777215); this.specular = new H(1118481); this.shininess = 30; this.lightMap = this.map = null; this.lightMapIntensity = 1; this.aoMap = null; this.aoMapIntensity = 1; this.emissive = new H(0); this.emissiveIntensity = 1; this.bumpMap = this.emissiveMap = null; this.bumpScale = 1; this.normalMap = null; this.normalMapType = 0; this.normalScale = new w(1, 1); this.displacementMap = null; this.displacementScale = 1; this.displacementBias = 0; this.envMap = this.alphaMap = this.specularMap = null; this.combine = 0; this.reflectivity = 1; this.refractionRatio = 0.98; this.wireframe = !1; this.wireframeLinewidth = 1; this.wireframeLinejoin = this.wireframeLinecap = 'round'; this.morphNormals = this.morphTargets = this.skinning = !1; this.setValues(a);
  } function lc(a) {
    Ra.call(this); this.defines = { TOON: '' }; this.type = 'MeshToonMaterial'; this.gradientMap = null; this.setValues(a);
  } function mc(a) { M.call(this); this.type = 'MeshNormalMaterial'; this.bumpMap = null; this.bumpScale = 1; this.normalMap = null; this.normalMapType = 0; this.normalScale = new w(1, 1); this.displacementMap = null; this.displacementScale = 1; this.displacementBias = 0; this.wireframe = !1; this.wireframeLinewidth = 1; this.morphNormals = this.morphTargets = this.skinning = this.fog = !1; this.setValues(a); } function nc(a) {
    M.call(this); this.type = 'MeshLambertMaterial'; this.color = new H(16777215); this.lightMap = this.map = null; this.lightMapIntensity = 1; this.aoMap = null; this.aoMapIntensity = 1; this.emissive = new H(0); this.emissiveIntensity = 1; this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null; this.combine = 0; this.reflectivity = 1; this.refractionRatio = 0.98; this.wireframe = !1; this.wireframeLinewidth = 1; this.wireframeLinejoin = this.wireframeLinecap = 'round'; this.morphNormals = this.morphTargets = this.skinning = !1; this.setValues(a);
  } function oc(a) {
    M.call(this); this.defines = { MATCAP: '' }; this.type = 'MeshMatcapMaterial'; this.color = new H(16777215); this.bumpMap = this.map = this.matcap = null; this.bumpScale = 1; this.normalMap = null; this.normalMapType = 0; this.normalScale = new w(1, 1); this.displacementMap = null; this.displacementScale = 1; this.displacementBias = 0; this.alphaMap = null; this.morphNormals = this.morphTargets = this.skinning = !1; this.setValues(a);
  } function pc(a) { Q.call(this); this.type = 'LineDashedMaterial'; this.scale = 1; this.dashSize = 3; this.gapSize = 1; this.setValues(a); } function Ia(a, b, c, d) {
    this.parameterPositions = a; this._cachedIndex = 0; this.resultBuffer = void 0 !== d ? d : new b.constructor(c);
    this.sampleValues = b; this.valueSize = c;
  } function Ne(a, b, c, d) { Ia.call(this, a, b, c, d); this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0; } function ke(a, b, c, d) { Ia.call(this, a, b, c, d); } function Oe(a, b, c, d) { Ia.call(this, a, b, c, d); } function oa(a, b, c, d) {
    if (void 0 === a) throw Error('THREE.KeyframeTrack: track name is undefined'); if (void 0 === b || b.length === 0) throw Error(`THREE.KeyframeTrack: no keyframes in track named ${a}`); this.name = a; this.times = pa.convertArray(b, this.TimeBufferType); this.values = pa.convertArray(c, this.ValueBufferType); this.setInterpolation(d || this.DefaultInterpolation);
  } function Pe(a, b, c) { oa.call(this, a, b, c); } function Qe(a, b, c, d) { oa.call(this, a, b, c, d); } function $c(a, b, c, d) { oa.call(this, a, b, c, d); } function Re(a, b, c, d) { Ia.call(this, a, b, c, d); } function le(a, b, c, d) { oa.call(this, a, b, c, d); } function Se(a, b, c, d) { oa.call(this, a, b, c, d); } function ad(a, b, c, d) { oa.call(this, a, b, c, d); } function Ma(a, b, c) {
    this.name = a; this.tracks = c; this.duration = void 0 !== b ? b : -1; this.uuid = L.generateUUID(); this.duration < 0
&& this.resetDuration();
  } function qk(a) { switch (a.toLowerCase()) { case 'scalar': case 'double': case 'float': case 'number': case 'integer': return $c; case 'vector': case 'vector2': case 'vector3': case 'vector4': return ad; case 'color': return Qe; case 'quaternion': return le; case 'bool': case 'boolean': return Pe; case 'string': return Se; } throw Error(`THREE.KeyframeTrack: Unsupported typeName: ${a}`); } function rk(a) {
    if (void 0 === a.type) throw Error('THREE.KeyframeTrack: track type undefined, can not parse'); const b = qk(a.type);
    if (void 0 === a.times) { const c = []; const d = []; pa.flattenJSON(a.keys, c, d, 'value'); a.times = c; a.values = d; } return void 0 !== b.parse ? b.parse(a) : new b(a.name, a.times, a.values, a.interpolation);
  } function pg(a, b, c) {
    const d = this; let e = !1; let f = 0; let g = 0; let h = void 0; const l = []; this.onStart = void 0; this.onLoad = a; this.onProgress = b; this.onError = c; this.itemStart = function (a) { g++; if (!1 === e && void 0 !== d.onStart)d.onStart(a, f, g); e = !0; }; this.itemEnd = function (a) { f++; if (void 0 !== d.onProgress)d.onProgress(a, f, g); if (f === g && (e = !1, void 0 !== d.onLoad))d.onLoad(); };
    this.itemError = function (a) { if (void 0 !== d.onError)d.onError(a); }; this.resolveURL = function (a) { return h ? h(a) : a; }; this.setURLModifier = function (a) { h = a; return this; }; this.addHandler = function (a, b) { l.push(a, b); return this; }; this.removeHandler = function (a) { a = l.indexOf(a); a !== -1 && l.splice(a, 2); return this; }; this.getHandler = function (a) { for (let b = 0, c = l.length; b < c; b += 2) { const d = l[b + 1]; if (l[b].test(a)) return d; } return null; };
  } function S(a) {
    this.manager = void 0 !== a ? a : Zh; this.crossOrigin = 'anonymous'; this.resourcePath = this.path = '';
  } function Na(a) { S.call(this, a); } function qg(a) { S.call(this, a); } function rg(a) { S.call(this, a); } function Te(a) { S.call(this, a); } function bd(a) { S.call(this, a); } function Ue(a) { S.call(this, a); } function Ve(a) { S.call(this, a); } function D() { this.type = 'Curve'; this.arcLengthDivisions = 200; } function Ja(a, b, c, d, e, f, g, h) { D.call(this); this.type = 'EllipseCurve'; this.aX = a || 0; this.aY = b || 0; this.xRadius = c || 1; this.yRadius = d || 1; this.aStartAngle = e || 0; this.aEndAngle = f || 2 * Math.PI; this.aClockwise = g || !1; this.aRotation = h || 0; } function cd(a,
    b, c, d, e, f) { Ja.call(this, a, b, c, c, d, e, f); this.type = 'ArcCurve'; } function sg() { let a = 0; let b = 0; let c = 0; let d = 0; return { initCatmullRom(e, f, g, h, l) { e = l * (g - e); h = l * (h - f); a = f; b = e; c = -3 * f + 3 * g - 2 * e - h; d = 2 * f - 2 * g + e + h; }, initNonuniformCatmullRom(e, f, g, h, l, m, k) { e = ((f - e) / l - (g - e) / (l + m) + (g - f) / m) * m; h = ((g - f) / m - (h - f) / (m + k) + (h - g) / k) * m; a = f; b = e; c = -3 * f + 3 * g - 2 * e - h; d = 2 * f - 2 * g + e + h; }, calc(e) { const f = e * e; return a + b * e + c * f + d * f * e; } }; } function ya(a, b, c, d) {
    D.call(this); this.type = 'CatmullRomCurve3'; this.points = a || []; this.closed = b
|| !1; this.curveType = c || 'centripetal'; this.tension = d || 0.5;
  } function $h(a, b, c, d, e) { b = 0.5 * (d - b); e = 0.5 * (e - c); const f = a * a; return (2 * c - 2 * d + b + e) * a * f + (-3 * c + 3 * d - 2 * b - e) * f + b * a + c; } function me(a, b, c, d) { const e = 1 - a; return e * e * b + 2 * (1 - a) * a * c + a * a * d; } function ne(a, b, c, d, e) { const f = 1 - a; const g = 1 - a; return f * f * f * b + 3 * g * g * a * c + 3 * (1 - a) * a * a * d + a * a * a * e; } function Sa(a, b, c, d) { D.call(this); this.type = 'CubicBezierCurve'; this.v0 = a || new w(); this.v1 = b || new w(); this.v2 = c || new w(); this.v3 = d || new w(); } function gb(a, b, c, d) {
    D.call(this); this.type = 'CubicBezierCurve3';
    this.v0 = a || new n(); this.v1 = b || new n(); this.v2 = c || new n(); this.v3 = d || new n();
  } function za(a, b) { D.call(this); this.type = 'LineCurve'; this.v1 = a || new w(); this.v2 = b || new w(); } function Ta(a, b) { D.call(this); this.type = 'LineCurve3'; this.v1 = a || new n(); this.v2 = b || new n(); } function Ua(a, b, c) { D.call(this); this.type = 'QuadraticBezierCurve'; this.v0 = a || new w(); this.v1 = b || new w(); this.v2 = c || new w(); } function hb(a, b, c) { D.call(this); this.type = 'QuadraticBezierCurve3'; this.v0 = a || new n(); this.v1 = b || new n(); this.v2 = c || new n(); } function Va(a) {
    D.call(this);
    this.type = 'SplineCurve'; this.points = a || [];
  } function rb() { D.call(this); this.type = 'CurvePath'; this.curves = []; this.autoClose = !1; } function Wa(a) { rb.call(this); this.type = 'Path'; this.currentPoint = new w(); a && this.setFromPoints(a); } function Jb(a) { Wa.call(this, a); this.uuid = L.generateUUID(); this.type = 'Shape'; this.holes = []; } function da(a, b) { B.call(this); this.type = 'Light'; this.color = new H(a); this.intensity = void 0 !== b ? b : 1; this.receiveShadow = void 0; } function We(a, b, c) {
    da.call(this, a, c); this.type = 'HemisphereLight'; this.castShadow = void 0; this.position.copy(B.DefaultUp); this.updateMatrix(); this.groundColor = new H(b);
  } function ib(a) { this.camera = a; this.bias = 0; this.radius = 1; this.mapSize = new w(512, 512); this.mapPass = this.map = null; this.matrix = new U(); this._frustum = new Ed(); this._frameExtents = new w(1, 1); this._viewportCount = 1; this._viewports = [new aa(0, 0, 1, 1)]; } function Xe() { ib.call(this, new na(50, 1, 0.5, 500)); } function Ye(a, b, c, d, e, f) {
    da.call(this, a, b); this.type = 'SpotLight'; this.position.copy(B.DefaultUp); this.updateMatrix(); this.target = new B();
    Object.defineProperty(this, 'power', { get() { return this.intensity * Math.PI; }, set(a) { this.intensity = a / Math.PI; } }); this.distance = void 0 !== c ? c : 0; this.angle = void 0 !== d ? d : Math.PI / 3; this.penumbra = void 0 !== e ? e : 0; this.decay = void 0 !== f ? f : 1; this.shadow = new Xe();
  } function tg() {
    ib.call(this, new na(90, 1, 0.5, 500)); this._frameExtents = new w(4, 2); this._viewportCount = 6; this._viewports = [new aa(2, 1, 1, 1), new aa(0, 1, 1, 1), new aa(3, 1, 1, 1), new aa(1, 1, 1, 1), new aa(3, 0, 1, 1), new aa(1, 0, 1, 1)]; this._cubeDirections = [new n(1,
      0, 0), new n(-1, 0, 0), new n(0, 0, 1), new n(0, 0, -1), new n(0, 1, 0), new n(0, -1, 0)]; this._cubeUps = [new n(0, 1, 0), new n(0, 1, 0), new n(0, 1, 0), new n(0, 1, 0), new n(0, 0, 1), new n(0, 0, -1)];
  } function Ze(a, b, c, d) { da.call(this, a, b); this.type = 'PointLight'; Object.defineProperty(this, 'power', { get() { return 4 * this.intensity * Math.PI; }, set(a) { this.intensity = a / (4 * Math.PI); } }); this.distance = void 0 !== c ? c : 0; this.decay = void 0 !== d ? d : 1; this.shadow = new tg(); } function oe(a, b, c, d, e, f) {
    bb.call(this); this.type = 'OrthographicCamera';
    this.zoom = 1; this.view = null; this.left = void 0 !== a ? a : -1; this.right = void 0 !== b ? b : 1; this.top = void 0 !== c ? c : 1; this.bottom = void 0 !== d ? d : -1; this.near = void 0 !== e ? e : 0.1; this.far = void 0 !== f ? f : 2E3; this.updateProjectionMatrix();
  } function $e() { ib.call(this, new oe(-5, 5, 5, -5, 0.5, 500)); } function af(a, b) { da.call(this, a, b); this.type = 'DirectionalLight'; this.position.copy(B.DefaultUp); this.updateMatrix(); this.target = new B(); this.shadow = new $e(); } function bf(a, b) { da.call(this, a, b); this.type = 'AmbientLight'; this.castShadow = void 0; }
  function cf(a, b, c, d) { da.call(this, a, b); this.type = 'RectAreaLight'; this.width = void 0 !== c ? c : 10; this.height = void 0 !== d ? d : 10; } function df(a) { S.call(this, a); this.textures = {}; } function ef() { E.call(this); this.type = 'InstancedBufferGeometry'; this.maxInstancedCount = void 0; } function ff(a, b, c, d) { typeof c === 'number' && (d = c, c = !1, console.error('THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.')); O.call(this, a, b, c); this.meshPerAttribute = d || 1; } function gf(a) { S.call(this, a); } function hf(a) {
    S.call(this,
      a);
  } function ug(a) { typeof createImageBitmap === 'undefined' && console.warn('THREE.ImageBitmapLoader: createImageBitmap() not supported.'); typeof fetch === 'undefined' && console.warn('THREE.ImageBitmapLoader: fetch() not supported.'); S.call(this, a); this.options = void 0; } function vg() { this.type = 'ShapePath'; this.color = new H(); this.subPaths = []; this.currentPath = null; } function wg(a) { this.type = 'Font'; this.data = a; } function xg(a) { S.call(this, a); } function jf(a) { S.call(this, a); } function kf() {
    this.coefficients = []; for (let a = 0; a < 9; a++) this.coefficients.push(new n());
  } function Xa(a, b) { da.call(this, void 0, b); this.sh = void 0 !== a ? a : new kf(); } function yg(a, b, c) { Xa.call(this, void 0, c); a = (new H()).set(a); c = (new H()).set(b); b = new n(a.r, a.g, a.b); a = new n(c.r, c.g, c.b); c = Math.sqrt(Math.PI); const d = c * Math.sqrt(0.75); this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c); this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d); } function zg(a, b) { Xa.call(this, void 0, b); a = (new H()).set(a); this.sh.coefficients[0].set(a.r, a.g, a.b).multiplyScalar(2 * Math.sqrt(Math.PI)); }
  function ai() {
    this.type = 'StereoCamera'; this.aspect = 1; this.eyeSep = 0.064; this.cameraL = new na(); this.cameraL.layers.enable(1); this.cameraL.matrixAutoUpdate = !1; this.cameraR = new na(); this.cameraR.layers.enable(2); this.cameraR.matrixAutoUpdate = !1; this._cache = {
      focus: null, fov: null, aspect: null, near: null, far: null, zoom: null, eyeSep: null,
    };
  } function Ag(a) { this.autoStart = void 0 !== a ? a : !0; this.elapsedTime = this.oldTime = this.startTime = 0; this.running = !1; } function Bg() {
    B.call(this); this.type = 'AudioListener'; this.context = Cg.getContext();
    this.gain = this.context.createGain(); this.gain.connect(this.context.destination); this.filter = null; this.timeDelta = 0; this._clock = new Ag();
  } function dd(a) { B.call(this); this.type = 'Audio'; this.listener = a; this.context = a.context; this.gain = this.context.createGain(); this.gain.connect(a.getInput()); this.autoplay = !1; this.buffer = null; this.detune = 0; this.loop = !1; this.offset = this.startTime = 0; this.duration = void 0; this.playbackRate = 1; this.isPlaying = !1; this.hasPlaybackControl = !0; this.sourceType = 'empty'; this.filters = []; }
  function Dg(a) { dd.call(this, a); this.panner = this.context.createPanner(); this.panner.panningModel = 'HRTF'; this.panner.connect(this.gain); } function Eg(a, b) { this.analyser = a.context.createAnalyser(); this.analyser.fftSize = void 0 !== b ? b : 2048; this.data = new Uint8Array(this.analyser.frequencyBinCount); a.getOutput().connect(this.analyser); } function Fg(a, b, c) {
    this.binding = a; this.valueSize = c; a = Float64Array; switch (b) {
      case 'quaternion': b = this._slerp; break; case 'string': case 'bool': a = Array; b = this._select; break; default: b = this._lerp;
    } this.buffer = new a(4 * c); this._mixBufferRegion = b; this.referenceCount = this.useCount = this.cumulativeWeight = 0;
  } function bi(a, b, c) { c = c || Aa.parseTrackName(b); this._targetGroup = a; this._bindings = a.subscribe_(b, c); } function Aa(a, b, c) { this.path = b; this.parsedPath = c || Aa.parseTrackName(b); this.node = Aa.findNode(a, this.parsedPath.nodeName) || a; this.rootNode = a; } function ci() {
    this.uuid = L.generateUUID(); this._objects = Array.prototype.slice.call(arguments); this.nCachedObjects_ = 0; const a = {}; this._indicesByUUID = a;
    for (let b = 0, c = arguments.length; b !== c; ++b)a[arguments[b].uuid] = b; this._paths = []; this._parsedPaths = []; this._bindings = []; this._bindingsIndicesByPath = {}; const d = this; this.stats = { objects: { get total() { return d._objects.length; }, get inUse() { return this.total - d.nCachedObjects_; } }, get bindingsPerObject() { return d._bindings.length; } };
  } function di(a, b, c) {
    this._mixer = a; this._clip = b; this._localRoot = c || null; a = b.tracks; b = a.length; c = Array(b); for (var d = { endingStart: 2400, endingEnd: 2400 }, e = 0; e !== b; ++e) {
      const f = a[e].createInterpolant(null);
      c[e] = f; f.settings = d;
    } this._interpolantSettings = d; this._interpolants = c; this._propertyBindings = Array(b); this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null; this.loop = 2201; this._loopCount = -1; this._startTime = null; this.time = 0; this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1; this.repetitions = Infinity; this.paused = !1; this.enabled = !0; this.clampWhenFinished = !1; this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0;
  } function Gg(a) {
    this._root = a; this._initMemoryManager();
    this.time = this._accuIndex = 0; this.timeScale = 1;
  } function lf(a, b) { typeof a === 'string' && (console.warn('THREE.Uniform: Type parameter is no longer needed.'), a = b); this.value = a; } function Hg(a, b, c) { Gb.call(this, a, b); this.meshPerAttribute = c || 1; } function ei(a, b, c, d) {
    this.ray = new Sb(a, b); this.near = c || 0; this.far = d || Infinity; this.camera = null; this.params = {
      Mesh: {}, Line: {}, LOD: {}, Points: { threshold: 1 }, Sprite: {},
    }; Object.defineProperties(this.params, {
      PointCloud: {
        get() {
          console.warn('THREE.Raycaster: params.PointCloud has been renamed to params.Points.');
          return this.Points;
        },
      },
    });
  } function fi(a, b) { return a.distance - b.distance; } function Ig(a, b, c, d) { if (!1 !== a.visible && (a.raycast(b, c), !0 === d)) { a = a.children; d = 0; for (let e = a.length; d < e; d++)Ig(a[d], b, c, !0); } } function gi(a, b, c) { this.radius = void 0 !== a ? a : 1; this.phi = void 0 !== b ? b : 0; this.theta = void 0 !== c ? c : 0; return this; } function hi(a, b, c) { this.radius = void 0 !== a ? a : 1; this.theta = void 0 !== b ? b : 0; this.y = void 0 !== c ? c : 0; return this; } function Jg(a, b) {
    this.min = void 0 !== a ? a : new w(Infinity, Infinity); this.max = void 0 !== b ? b : new w(-Infinity,
      -Infinity);
  } function Kg(a, b) { this.start = void 0 !== a ? a : new n(); this.end = void 0 !== b ? b : new n(); } function pe(a) { B.call(this); this.material = a; this.render = function () {}; } function qe(a, b, c, d) { this.object = a; this.size = void 0 !== b ? b : 1; a = void 0 !== c ? c : 16711680; d = void 0 !== d ? d : 1; b = 0; (c = this.object.geometry) && c.isGeometry ? b = 3 * c.faces.length : c && c.isBufferGeometry && (b = c.attributes.normal.count); c = new E(); b = new A(6 * b, 3); c.addAttribute('position', b); ca.call(this, c, new Q({ color: a, linewidth: d })); this.matrixAutoUpdate = !1; this.update(); }
  function ed(a, b) { B.call(this); this.light = a; this.light.updateMatrixWorld(); this.matrix = a.matrixWorld; this.matrixAutoUpdate = !1; this.color = b; a = new E(); b = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1]; for (let c = 0, d = 1; c < 32; c++, d++) { const e = c / 32 * Math.PI * 2; const f = d / 32 * Math.PI * 2; b.push(Math.cos(e), Math.sin(e), 1, Math.cos(f), Math.sin(f), 1); }a.addAttribute('position', new A(b, 3)); b = new Q({ fog: !1 }); this.cone = new ca(a, b); this.add(this.cone); this.update(); } function ii(a) {
    const b = []; a && a.isBone && b.push(a); for (let c = 0; c < a.children.length; c++)b.push.apply(b, ii(a.children[c])); return b;
  } function fd(a) {
    for (var b = ii(a), c = new E(), d = [], e = [], f = new H(0, 0, 1), g = new H(0, 1, 0), h = 0; h < b.length; h++) { const l = b[h]; l.parent && l.parent.isBone && (d.push(0, 0, 0), d.push(0, 0, 0), e.push(f.r, f.g, f.b), e.push(g.r, g.g, g.b)); }c.addAttribute('position', new A(d, 3)); c.addAttribute('color', new A(e, 3)); d = new Q({
      vertexColors: 2, depthTest: !1, depthWrite: !1, transparent: !0,
    }); ca.call(this, c, d); this.root = a; this.bones = b; this.matrix = a.matrixWorld; this.matrixAutoUpdate = !1;
  } function gd(a, b, c) { this.light = a; this.light.updateMatrixWorld(); this.color = c; a = new Ib(b, 4, 2); b = new Ga({ wireframe: !0, fog: !1 }); ja.call(this, a, b); this.matrix = this.light.matrixWorld; this.matrixAutoUpdate = !1; this.update(); } function hd(a, b) {
    this.type = 'RectAreaLightHelper'; this.light = a; this.color = b; a = new E(); a.addAttribute('position', new A([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], 3)); a.computeBoundingSphere(); b = new Q({ fog: !1 }); xa.call(this, a, b); a = new E(); a.addAttribute('position', new A([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1,
      0, -1, -1, 0, 1, -1, 0], 3)); a.computeBoundingSphere(); this.add(new ja(a, new Ga({ side: 1, fog: !1 }))); this.update();
  } function id(a, b, c) {
    B.call(this); this.light = a; this.light.updateMatrixWorld(); this.matrix = a.matrixWorld; this.matrixAutoUpdate = !1; this.color = c; a = new cc(b); a.rotateY(0.5 * Math.PI); this.material = new Ga({ wireframe: !0, fog: !1 }); void 0 === this.color && (this.material.vertexColors = 2); b = a.getAttribute('position'); b = new Float32Array(3 * b.count); a.addAttribute('color', new O(b, 3)); this.add(new ja(a, this.material));
    this.update();
  } function jd(a, b) {
    this.lightProbe = a; this.size = b; a = new ma({
      defines: { GAMMA_OUTPUT: '' }, uniforms: { sh: { value: this.lightProbe.sh.coefficients }, intensity: { value: this.lightProbe.intensity } }, vertexShader: 'varying vec3 vNormal;\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}', fragmentShader: '#define RECIPROCAL_PI 0.318309886\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\t// matrix is assumed to be orthogonal\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 linearToOutput( in vec3 a ) {\n\t#ifdef GAMMA_OUTPUT\n\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\t#else\n\t\treturn a;\n\t#endif\n}\n// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\t// normal is assumed to have unit length\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\t// band 0\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\t// band 1\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\t// band 2\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nuniform vec3 sh[ 9 ]; // sh coefficients\nuniform float intensity; // light probe intensity\nvarying vec3 vNormal;\nvoid main() {\n\tvec3 normal = normalize( vNormal );\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, sh );\n\tvec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;\n\toutgoingLight = linearToOutput( outgoingLight );\n\tgl_FragColor = vec4( outgoingLight, 1.0 );\n}',
    });
    b = new Ib(1, 32, 16); ja.call(this, b, a); this.onBeforeRender();
  } function mf(a, b, c, d) { a = a || 10; b = b || 10; c = new H(void 0 !== c ? c : 4473924); d = new H(void 0 !== d ? d : 8947848); const e = b / 2; const f = a / b; const g = a / 2; a = []; for (var h = [], l = 0, m = 0, k = -g; l <= b; l++, k += f) { a.push(-g, 0, k, g, 0, k); a.push(k, 0, -g, k, 0, g); const n = l === e ? c : d; n.toArray(h, m); m += 3; n.toArray(h, m); m += 3; n.toArray(h, m); m += 3; n.toArray(h, m); m += 3; }b = new E(); b.addAttribute('position', new A(a, 3)); b.addAttribute('color', new A(h, 3)); c = new Q({ vertexColors: 2 }); ca.call(this, b, c); } function nf(a, b,
    c, d, e, f) {
    a = a || 10; b = b || 16; c = c || 8; d = d || 64; e = new H(void 0 !== e ? e : 4473924); f = new H(void 0 !== f ? f : 8947848); let g = []; const h = []; let l; for (l = 0; l <= b; l++) { var m = l / b * 2 * Math.PI; var k = Math.sin(m) * a; m = Math.cos(m) * a; g.push(0, 0, 0); g.push(k, 0, m); var n = l & 1 ? e : f; h.push(n.r, n.g, n.b); h.push(n.r, n.g, n.b); } for (l = 0; l <= c; l++) { n = l & 1 ? e : f; const t = a - a / c * l; for (b = 0; b < d; b++)m = b / d * 2 * Math.PI, k = Math.sin(m) * t, m = Math.cos(m) * t, g.push(k, 0, m), h.push(n.r, n.g, n.b), m = (b + 1) / d * 2 * Math.PI, k = Math.sin(m) * t, m = Math.cos(m) * t, g.push(k, 0, m), h.push(n.r, n.g, n.b); }a = new E();
    a.addAttribute('position', new A(g, 3)); a.addAttribute('color', new A(h, 3)); g = new Q({ vertexColors: 2 }); ca.call(this, a, g);
  } function kd(a, b, c, d) { this.audio = a; this.range = b || 1; this.divisionsInnerAngle = c || 16; this.divisionsOuterAngle = d || 2; a = new E(); b = new Float32Array(3 * (3 * (this.divisionsInnerAngle + 2 * this.divisionsOuterAngle) + 3)); a.addAttribute('position', new O(b, 3)); b = new Q({ color: 65280 }); c = new Q({ color: 16776960 }); xa.call(this, a, [c, b]); this.update(); } function re(a, b, c, d) {
    this.object = a; this.size = void 0 !== b ? b : 1;
    a = void 0 !== c ? c : 16776960; d = void 0 !== d ? d : 1; b = 0; (c = this.object.geometry) && c.isGeometry ? b = c.faces.length : console.warn('THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.'); c = new E(); b = new A(6 * b, 3); c.addAttribute('position', b); ca.call(this, c, new Q({ color: a, linewidth: d })); this.matrixAutoUpdate = !1; this.update();
  } function ld(a, b, c) {
    B.call(this); this.light = a; this.light.updateMatrixWorld(); this.matrix = a.matrixWorld; this.matrixAutoUpdate = !1; this.color = c; void 0
=== b && (b = 1); a = new E(); a.addAttribute('position', new A([-b, b, 0, b, b, 0, b, -b, 0, -b, -b, 0, -b, b, 0], 3)); b = new Q({ fog: !1 }); this.lightPlane = new xa(a, b); this.add(this.lightPlane); a = new E(); a.addAttribute('position', new A([0, 0, 0, 0, 0, 1], 3)); this.targetLine = new xa(a, b); this.add(this.targetLine); this.update();
  } function se(a) {
    function b(a, b, d) { c(a, d); c(b, d); } function c(a, b) { f.push(0, 0, 0); g.push(b.r, b.g, b.b); void 0 === h[a] && (h[a] = []); h[a].push(f.length / 3 - 1); } const d = new E(); const e = new Q({ color: 16777215, vertexColors: 1 }); var f = []; var g = []; var h = {};
    const l = new H(16755200); const m = new H(16711680); const k = new H(43775); const n = new H(16777215); const
      t = new H(3355443); b('n1', 'n2', l); b('n2', 'n4', l); b('n4', 'n3', l); b('n3', 'n1', l); b('f1', 'f2', l); b('f2', 'f4', l); b('f4', 'f3', l); b('f3', 'f1', l); b('n1', 'f1', l); b('n2', 'f2', l); b('n3', 'f3', l); b('n4', 'f4', l); b('p', 'n1', m); b('p', 'n2', m); b('p', 'n3', m); b('p', 'n4', m); b('u1', 'u2', k); b('u2', 'u3', k); b('u3', 'u1', k); b('c', 't', n); b('p', 'c', t); b('cn1', 'cn2', t); b('cn3', 'cn4', t); b('cf1', 'cf2', t); b('cf3', 'cf4', t); d.addAttribute('position', new A(f, 3)); d.addAttribute('color',
      new A(g, 3)); ca.call(this, d, e); this.camera = a; this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(); this.matrix = a.matrixWorld; this.matrixAutoUpdate = !1; this.pointMap = h; this.update();
  } function qa(a, b, c, d, e, f, g) { of.set(e, f, g).unproject(d); a = b[a]; if (void 0 !== a) for (c = c.getAttribute('position'), b = 0, d = a.length; b < d; b++)c.setXYZ(a[b], of.x, of.y, of.z); } function sb(a, b) {
    this.object = a; void 0 === b && (b = 16776960); a = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]); const c = new Float32Array(24);
    const d = new E(); d.setIndex(new O(a, 1)); d.addAttribute('position', new O(c, 3)); ca.call(this, d, new Q({ color: b })); this.matrixAutoUpdate = !1; this.update();
  } function te(a, b) { this.type = 'Box3Helper'; this.box = a; b = b || 16776960; a = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]); const c = new E(); c.setIndex(new O(a, 1)); c.addAttribute('position', new A([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)); ca.call(this, c, new Q({ color: b })); this.geometry.computeBoundingSphere(); } function ue(a, b, c) {
    this.type = 'PlaneHelper'; this.plane = a; this.size = void 0 === b ? 1 : b; a = void 0 !== c ? c : 16776960; b = new E(); b.addAttribute('position', new A([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)); b.computeBoundingSphere(); xa.call(this, b, new Q({ color: a })); b = new E(); b.addAttribute('position', new A([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)); b.computeBoundingSphere(); this.add(new ja(b, new Ga({
      color: a, opacity: 0.2, transparent: !0, depthWrite: !1,
    })));
  } function tb(a, b, c, d, e, f) {
    B.call(this); void 0 === a && (a = new n(0,
      0, 1)); void 0 === b && (b = new n(0, 0, 0)); void 0 === c && (c = 1); void 0 === d && (d = 16776960); void 0 === e && (e = 0.2 * c); void 0 === f && (f = 0.2 * e); void 0 === pf && (pf = new E(), pf.addAttribute('position', new A([0, 0, 0, 0, 1, 0], 3)), Lg = new qb(0, 0.5, 1, 5, 1), Lg.translate(0, -0.5, 0)); this.position.copy(b); this.line = new xa(pf, new Q({ color: d })); this.line.matrixAutoUpdate = !1; this.add(this.line); this.cone = new ja(Lg, new Ga({ color: d })); this.cone.matrixAutoUpdate = !1; this.add(this.cone); this.setDirection(a); this.setLength(c, e, f);
  } function ve(a) {
    a = a
|| 1; let b = [0, 0, 0, a, 0, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 0, a]; a = new E(); a.addAttribute('position', new A(b, 3)); a.addAttribute('color', new A([1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], 3)); b = new Q({ vertexColors: 2 }); ca.call(this, a, b);
  } function ji(a) { console.warn('THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.'); ya.call(this, a); this.type = 'catmullrom'; this.closed = !0; } function ki(a) {
    console.warn('THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.'); ya.call(this, a); this.type = 'catmullrom';
  } function Mg(a) { console.warn('THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.'); ya.call(this, a); this.type = 'catmullrom'; } void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)); void 0 === Number.isInteger && (Number.isInteger = function (a) { return typeof a === 'number' && isFinite(a) && Math.floor(a) === a; }); void 0 === Math.sign && (Math.sign = function (a) { return a < 0 ? -1 : a > 0 ? 1 : +a; }); !1 === 'name' in Function.prototype && Object.defineProperty(Function.prototype, 'name', { get() { return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]; } });
  void 0 === Object.assign && (Object.assign = function (a) { if (void 0 === a || a === null) throw new TypeError('Cannot convert undefined or null to object'); for (var b = Object(a), c = 1; c < arguments.length; c++) { const d = arguments[c]; if (void 0 !== d && d !== null) for (const e in d)Object.prototype.hasOwnProperty.call(d, e) && (b[e] = d[e]); } return b; }); Object.assign(Ba.prototype, {
    addEventListener(a, b) { void 0 === this._listeners && (this._listeners = {}); const c = this._listeners; void 0 === c[a] && (c[a] = []); c[a].indexOf(b) === -1 && c[a].push(b); },
    hasEventListener(a, b) { if (void 0 === this._listeners) return !1; const c = this._listeners; return void 0 !== c[a] && c[a].indexOf(b) !== -1; },
    removeEventListener(a, b) { void 0 !== this._listeners && (a = this._listeners[a], void 0 !== a && (b = a.indexOf(b), b !== -1 && a.splice(b, 1))); },
    dispatchEvent(a) { if (void 0 !== this._listeners) { let b = this._listeners[a.type]; if (void 0 !== b) { a.target = this; b = b.slice(0); for (let c = 0, d = b.length; c < d; c++)b[c].call(this, a); } } },
  }); for (var va = [], we = 0; we < 256; we++) {
    va[we] = (we < 16 ? '0' : '')
+ we.toString(16);
  } var L = {
    DEG2RAD: Math.PI / 180,
    RAD2DEG: 180 / Math.PI,
    generateUUID() { const a = 4294967295 * Math.random() | 0; const b = 4294967295 * Math.random() | 0; const c = 4294967295 * Math.random() | 0; const d = 4294967295 * Math.random() | 0; return (`${va[a & 255] + va[a >> 8 & 255] + va[a >> 16 & 255] + va[a >> 24 & 255]}-${va[b & 255]}${va[b >> 8 & 255]}-${va[b >> 16 & 15 | 64]}${va[b >> 24 & 255]}-${va[c & 63 | 128]}${va[c >> 8 & 255]}-${va[c >> 16 & 255]}${va[c >> 24 & 255]}${va[d & 255]}${va[d >> 8 & 255]}${va[d >> 16 & 255]}${va[d >> 24 & 255]}`).toUpperCase(); },
    clamp(a, b, c) {
      return Math.max(b, Math.min(c,
        a));
    },
    euclideanModulo(a, b) { return (a % b + b) % b; },
    mapLinear(a, b, c, d, e) { return d + (a - b) * (e - d) / (c - b); },
    lerp(a, b, c) { return (1 - c) * a + c * b; },
    smoothstep(a, b, c) { if (a <= b) return 0; if (a >= c) return 1; a = (a - b) / (c - b); return a * a * (3 - 2 * a); },
    smootherstep(a, b, c) { if (a <= b) return 0; if (a >= c) return 1; a = (a - b) / (c - b); return a * a * a * (a * (6 * a - 15) + 10); },
    randInt(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
    randFloat(a, b) { return a + Math.random() * (b - a); },
    randFloatSpread(a) {
      return a
* (0.5 - Math.random());
    },
    degToRad(a) { return a * L.DEG2RAD; },
    radToDeg(a) { return a * L.RAD2DEG; },
    isPowerOfTwo(a) { return (a & a - 1) === 0 && a !== 0; },
    ceilPowerOfTwo(a) { return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2)); },
    floorPowerOfTwo(a) { return Math.pow(2, Math.floor(Math.log(a) / Math.LN2)); },
  }; Object.defineProperties(w.prototype, { width: { get() { return this.x; }, set(a) { this.x = a; } }, height: { get() { return this.y; }, set(a) { this.y = a; } } }); Object.assign(w.prototype,
    {
      isVector2: !0,
      set(a, b) { this.x = a; this.y = b; return this; },
      setScalar(a) { this.y = this.x = a; return this; },
      setX(a) { this.x = a; return this; },
      setY(a) { this.y = a; return this; },
      setComponent(a, b) { switch (a) { case 0: this.x = b; break; case 1: this.y = b; break; default: throw Error(`index is out of range: ${a}`); } return this; },
      getComponent(a) { switch (a) { case 0: return this.x; case 1: return this.y; default: throw Error(`index is out of range: ${a}`); } },
      clone() {
        return new this.constructor(this.x,
          this.y);
      },
      copy(a) { this.x = a.x; this.y = a.y; return this; },
      add(a, b) { if (void 0 !== b) return console.warn('THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'), this.addVectors(a, b); this.x += a.x; this.y += a.y; return this; },
      addScalar(a) { this.x += a; this.y += a; return this; },
      addVectors(a, b) { this.x = a.x + b.x; this.y = a.y + b.y; return this; },
      addScaledVector(a, b) { this.x += a.x * b; this.y += a.y * b; return this; },
      sub(a, b) {
        if (void 0 !== b) {
          return console.warn('THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'),
          this.subVectors(a, b);
        } this.x -= a.x; this.y -= a.y; return this;
      },
      subScalar(a) { this.x -= a; this.y -= a; return this; },
      subVectors(a, b) { this.x = a.x - b.x; this.y = a.y - b.y; return this; },
      multiply(a) { this.x *= a.x; this.y *= a.y; return this; },
      multiplyScalar(a) { this.x *= a; this.y *= a; return this; },
      divide(a) { this.x /= a.x; this.y /= a.y; return this; },
      divideScalar(a) { return this.multiplyScalar(1 / a); },
      applyMatrix3(a) {
        const b = this.x; const c = this.y; a = a.elements; this.x = a[0] * b + a[3] * c + a[6]; this.y = a[1] * b + a[4] * c + a[7]; return this;
      },
      min(a) { this.x = Math.min(this.x, a.x); this.y = Math.min(this.y, a.y); return this; },
      max(a) { this.x = Math.max(this.x, a.x); this.y = Math.max(this.y, a.y); return this; },
      clamp(a, b) { this.x = Math.max(a.x, Math.min(b.x, this.x)); this.y = Math.max(a.y, Math.min(b.y, this.y)); return this; },
      clampScalar(a, b) { this.x = Math.max(a, Math.min(b, this.x)); this.y = Math.max(a, Math.min(b, this.y)); return this; },
      clampLength(a, b) {
        const c = this.length(); return this.divideScalar(c
|| 1).multiplyScalar(Math.max(a, Math.min(b, c)));
      },
      floor() { this.x = Math.floor(this.x); this.y = Math.floor(this.y); return this; },
      ceil() { this.x = Math.ceil(this.x); this.y = Math.ceil(this.y); return this; },
      round() { this.x = Math.round(this.x); this.y = Math.round(this.y); return this; },
      roundToZero() { this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x); this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y); return this; },
      negate() { this.x = -this.x; this.y = -this.y; return this; },
      dot(a) {
        return this.x
* a.x + this.y * a.y;
      },
      cross(a) { return this.x * a.y - this.y * a.x; },
      lengthSq() { return this.x * this.x + this.y * this.y; },
      length() { return Math.sqrt(this.x * this.x + this.y * this.y); },
      manhattanLength() { return Math.abs(this.x) + Math.abs(this.y); },
      normalize() { return this.divideScalar(this.length() || 1); },
      angle() { let a = Math.atan2(this.y, this.x); a < 0 && (a += 2 * Math.PI); return a; },
      distanceTo(a) { return Math.sqrt(this.distanceToSquared(a)); },
      distanceToSquared(a) {
        const b = this.x - a.x; a = this.y - a.y; return b * b + a * a;
      },
      manhattanDistanceTo(a) { return Math.abs(this.x - a.x) + Math.abs(this.y - a.y); },
      setLength(a) { return this.normalize().multiplyScalar(a); },
      lerp(a, b) { this.x += (a.x - this.x) * b; this.y += (a.y - this.y) * b; return this; },
      lerpVectors(a, b, c) { return this.subVectors(b, a).multiplyScalar(c).add(a); },
      equals(a) { return a.x === this.x && a.y === this.y; },
      fromArray(a, b) { void 0 === b && (b = 0); this.x = a[b]; this.y = a[b + 1]; return this; },
      toArray(a,
        b) { void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this.x; a[b + 1] = this.y; return a; },
      fromBufferAttribute(a, b, c) { void 0 !== c && console.warn('THREE.Vector2: offset has been removed from .fromBufferAttribute().'); this.x = a.getX(b); this.y = a.getY(b); return this; },
      rotateAround(a, b) { const c = Math.cos(b); b = Math.sin(b); const d = this.x - a.x; const e = this.y - a.y; this.x = d * c - e * b + a.x; this.y = d * b + e * c + a.y; return this; },
    }); Object.assign(ua, {
    slerp(a, b, c, d) { return c.copy(a).slerp(b, d); },
    slerpFlat(a, b, c, d, e, f, g) {
      let h = c[d + 0]; let l = c[d + 1]; let m = c[d + 2]; c = c[d + 3]; d = e[f + 0]; const k = e[f + 1]; const n = e[f + 2]; e = e[f + 3]; if (c !== e || h !== d || l !== k || m !== n) { f = 1 - g; let t = h * d + l * k + m * n + c * e; let r = t >= 0 ? 1 : -1; let p = 1 - t * t; p > Number.EPSILON && (p = Math.sqrt(p), t = Math.atan2(p, t * r), f = Math.sin(f * t) / p, g = Math.sin(g * t) / p); r *= g; h = h * f + d * r; l = l * f + k * r; m = m * f + n * r; c = c * f + e * r; f === 1 - g && (g = 1 / Math.sqrt(h * h + l * l + m * m + c * c), h *= g, l *= g, m *= g, c *= g); }a[b] = h; a[b + 1] = l; a[b + 2] = m; a[b + 3] = c;
    },
  }); Object.defineProperties(ua.prototype, {
    x: { get() { return this._x; }, set(a) { this._x = a; this._onChangeCallback(); } },
    y: { get() { return this._y; }, set(a) { this._y = a; this._onChangeCallback(); } },
    z: { get() { return this._z; }, set(a) { this._z = a; this._onChangeCallback(); } },
    w: { get() { return this._w; }, set(a) { this._w = a; this._onChangeCallback(); } },
  }); Object.assign(ua.prototype, {
    isQuaternion: !0,
    set(a, b, c, d) { this._x = a; this._y = b; this._z = c; this._w = d; this._onChangeCallback(); return this; },
    clone() { return new this.constructor(this._x, this._y, this._z, this._w); },
    copy(a) {
      this._x = a.x; this._y = a.y; this._z = a.z; this._w = a.w; this._onChangeCallback(); return this;
    },
    setFromEuler(a, b) {
      if (!a || !a.isEuler) throw Error('THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.'); let c = a._x; let d = a._y; let e = a._z; a = a.order; let f = Math.cos; const g = Math.sin; const h = f(c / 2); const l = f(d / 2); f = f(e / 2); c = g(c / 2); d = g(d / 2); e = g(e / 2); a === 'XYZ' ? (this._x = c * l * f + h * d * e, this._y = h * d * f - c * l * e, this._z = h * l * e + c * d * f, this._w = h * l * f - c * d * e) : a === 'YXZ' ? (this._x = c * l * f + h * d * e, this._y = h * d * f - c * l * e, this._z = h * l * e - c * d * f, this._w = h * l * f + c * d * e) : a === 'ZXY' ? (this._x = c * l * f - h * d * e, this._y = h * d * f + c * l * e, this._z = h * l * e + c * d * f, this._w = h * l * f - c * d * e) : a === 'ZYX' ? (this._x = c * l * f - h * d * e, this._y = h * d * f + c * l * e, this._z = h * l * e - c * d * f, this._w = h * l * f + c * d * e) : a === 'YZX' ? (this._x = c * l * f + h * d * e, this._y = h * d * f + c * l * e, this._z = h * l * e - c * d * f, this._w = h * l * f - c * d * e) : a === 'XZY' && (this._x = c * l * f - h * d * e, this._y = h * d * f - c * l * e, this._z = h * l * e + c * d * f, this._w = h * l * f + c * d * e); !1 !== b && this._onChangeCallback(); return this;
    },
    setFromAxisAngle(a, b) {
      b /= 2; const c = Math.sin(b);
      this._x = a.x * c; this._y = a.y * c; this._z = a.z * c; this._w = Math.cos(b); this._onChangeCallback(); return this;
    },
    setFromRotationMatrix(a) {
      let b = a.elements; let c = b[0]; a = b[4]; const d = b[8]; const e = b[1]; const f = b[5]; const g = b[9]; const h = b[2]; const l = b[6]; b = b[10]; const m = c + f + b; m > 0 ? (c = 0.5 / Math.sqrt(m + 1), this._w = 0.25 / c, this._x = (l - g) * c, this._y = (d - h) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (l - g) / c, this._x = 0.25 * c, this._y = (a + e) / c, this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - h) / c, this._x = (a + e) / c, this._y = 0.25 * c, this._z = (g + l)
/ c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + h) / c, this._y = (g + l) / c, this._z = 0.25 * c); this._onChangeCallback(); return this;
    },
    setFromUnitVectors(a, b) { let c = a.dot(b) + 1; c < 1E-6 ? (c = 0, Math.abs(a.x) > Math.abs(a.z) ? (this._x = -a.y, this._y = a.x, this._z = 0) : (this._x = 0, this._y = -a.z, this._z = a.y)) : (this._x = a.y * b.z - a.z * b.y, this._y = a.z * b.x - a.x * b.z, this._z = a.x * b.y - a.y * b.x); this._w = c; return this.normalize(); },
    angleTo(a) { return 2 * Math.acos(Math.abs(L.clamp(this.dot(a), -1, 1))); },
    rotateTowards(a,
      b) { const c = this.angleTo(a); if (c === 0) return this; this.slerp(a, Math.min(1, b / c)); return this; },
    inverse() { return this.conjugate(); },
    conjugate() { this._x *= -1; this._y *= -1; this._z *= -1; this._onChangeCallback(); return this; },
    dot(a) { return this._x * a._x + this._y * a._y + this._z * a._z + this._w * a._w; },
    lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w; },
    length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w); },
    normalize() {
      let a = this.length(); a === 0 ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a); this._onChangeCallback(); return this;
    },
    multiply(a, b) { return void 0 !== b ? (console.warn('THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.'), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a); },
    premultiply(a) { return this.multiplyQuaternions(a, this); },
    multiplyQuaternions(a, b) {
      const c = a._x; const d = a._y; const e = a._z; a = a._w;
      const f = b._x; const g = b._y; const h = b._z; b = b._w; this._x = c * b + a * f + d * h - e * g; this._y = d * b + a * g + e * f - c * h; this._z = e * b + a * h + c * g - d * f; this._w = a * b - c * f - d * g - e * h; this._onChangeCallback(); return this;
    },
    slerp(a, b) {
      if (b === 0) return this; if (b === 1) return this.copy(a); const c = this._x; const d = this._y; const e = this._z; const f = this._w; let g = f * a._w + c * a._x + d * a._y + e * a._z; g < 0 ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z = -a._z, g = -g) : this.copy(a); if (g >= 1) return this._w = f, this._x = c, this._y = d, this._z = e, this; a = 1 - g * g; if (a <= Number.EPSILON) {
        return g = 1 - b, this._w = g
* f + b * this._w, this._x = g * c + b * this._x, this._y = g * d + b * this._y, this._z = g * e + b * this._z, this.normalize(), this._onChangeCallback(), this;
      } a = Math.sqrt(a); const h = Math.atan2(a, g); g = Math.sin((1 - b) * h) / a; b = Math.sin(b * h) / a; this._w = f * g + this._w * b; this._x = c * g + this._x * b; this._y = d * g + this._y * b; this._z = e * g + this._z * b; this._onChangeCallback(); return this;
    },
    equals(a) { return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w; },
    fromArray(a, b) {
      void 0 === b && (b = 0); this._x = a[b]; this._y = a[b + 1]; this._z = a[b + 2];
      this._w = a[b + 3]; this._onChangeCallback(); return this;
    },
    toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this._x; a[b + 1] = this._y; a[b + 2] = this._z; a[b + 3] = this._w; return a; },
    _onChange(a) { this._onChangeCallback = a; return this; },
    _onChangeCallback() {},
  }); const Ng = new n(); const
    li = new ua(); Object.assign(n.prototype, {
    isVector3: !0,
    set(a, b, c) { this.x = a; this.y = b; this.z = c; return this; },
    setScalar(a) { this.z = this.y = this.x = a; return this; },
    setX(a) { this.x = a; return this; },
    setY(a) {
      this.y = a; return this;
    },
    setZ(a) { this.z = a; return this; },
    setComponent(a, b) { switch (a) { case 0: this.x = b; break; case 1: this.y = b; break; case 2: this.z = b; break; default: throw Error(`index is out of range: ${a}`); } return this; },
    getComponent(a) { switch (a) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw Error(`index is out of range: ${a}`); } },
    clone() { return new this.constructor(this.x, this.y, this.z); },
    copy(a) { this.x = a.x; this.y = a.y; this.z = a.z; return this; },
    add(a, b) { if (void 0 !== b) return console.warn('THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'), this.addVectors(a, b); this.x += a.x; this.y += a.y; this.z += a.z; return this; },
    addScalar(a) { this.x += a; this.y += a; this.z += a; return this; },
    addVectors(a, b) { this.x = a.x + b.x; this.y = a.y + b.y; this.z = a.z + b.z; return this; },
    addScaledVector(a, b) { this.x += a.x * b; this.y += a.y * b; this.z += a.z * b; return this; },
    sub(a, b) {
      if (void 0 !== b) {
        return console.warn('THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'),
        this.subVectors(a, b);
      } this.x -= a.x; this.y -= a.y; this.z -= a.z; return this;
    },
    subScalar(a) { this.x -= a; this.y -= a; this.z -= a; return this; },
    subVectors(a, b) { this.x = a.x - b.x; this.y = a.y - b.y; this.z = a.z - b.z; return this; },
    multiply(a, b) { if (void 0 !== b) return console.warn('THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.'), this.multiplyVectors(a, b); this.x *= a.x; this.y *= a.y; this.z *= a.z; return this; },
    multiplyScalar(a) {
      this.x *= a; this.y *= a; this.z
*= a; return this;
    },
    multiplyVectors(a, b) { this.x = a.x * b.x; this.y = a.y * b.y; this.z = a.z * b.z; return this; },
    applyEuler(a) { a && a.isEuler || console.error('THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.'); return this.applyQuaternion(li.setFromEuler(a)); },
    applyAxisAngle(a, b) { return this.applyQuaternion(li.setFromAxisAngle(a, b)); },
    applyMatrix3(a) {
      const b = this.x; const c = this.y; const d = this.z; a = a.elements; this.x = a[0] * b + a[3] * c + a[6] * d; this.y = a[1] * b + a[4] * c + a[7]
* d; this.z = a[2] * b + a[5] * c + a[8] * d; return this;
    },
    applyMatrix4(a) { const b = this.x; const c = this.y; const d = this.z; a = a.elements; const e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]); this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e; this.y = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e; this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e; return this; },
    applyQuaternion(a) { let b = this.x; const c = this.y; const d = this.z; const e = a.x; const f = a.y; const g = a.z; a = a.w; const h = a * b + f * d - g * c; const l = a * c + g * b - e * d; const m = a * d + e * c - f * b; b = -e * b - f * c - g * d; this.x = h * a + b * -e + l * -g - m * -f; this.y = l * a + b * -f + m * -e - h * -g; this.z = m * a + b * -g + h * -f - l * -e; return this; },
    project(a) { return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix); },
    unproject(a) { return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld); },
    transformDirection(a) { const b = this.x; const c = this.y; const d = this.z; a = a.elements; this.x = a[0] * b + a[4] * c + a[8] * d; this.y = a[1] * b + a[5] * c + a[9] * d; this.z = a[2] * b + a[6] * c + a[10] * d; return this.normalize(); },
    divide(a) { this.x /= a.x; this.y /= a.y; this.z /= a.z; return this; },
    divideScalar(a) {
      return this.multiplyScalar(1
/ a);
    },
    min(a) { this.x = Math.min(this.x, a.x); this.y = Math.min(this.y, a.y); this.z = Math.min(this.z, a.z); return this; },
    max(a) { this.x = Math.max(this.x, a.x); this.y = Math.max(this.y, a.y); this.z = Math.max(this.z, a.z); return this; },
    clamp(a, b) { this.x = Math.max(a.x, Math.min(b.x, this.x)); this.y = Math.max(a.y, Math.min(b.y, this.y)); this.z = Math.max(a.z, Math.min(b.z, this.z)); return this; },
    clampScalar(a, b) {
      this.x = Math.max(a, Math.min(b, this.x)); this.y = Math.max(a, Math.min(b, this.y)); this.z = Math.max(a,
        Math.min(b, this.z)); return this;
    },
    clampLength(a, b) { const c = this.length(); return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c))); },
    floor() { this.x = Math.floor(this.x); this.y = Math.floor(this.y); this.z = Math.floor(this.z); return this; },
    ceil() { this.x = Math.ceil(this.x); this.y = Math.ceil(this.y); this.z = Math.ceil(this.z); return this; },
    round() { this.x = Math.round(this.x); this.y = Math.round(this.y); this.z = Math.round(this.z); return this; },
    roundToZero() {
      this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x); this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y); this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z); return this;
    },
    negate() { this.x = -this.x; this.y = -this.y; this.z = -this.z; return this; },
    dot(a) { return this.x * a.x + this.y * a.y + this.z * a.z; },
    lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z; },
    length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); },
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y)
+ Math.abs(this.z);
    },
    normalize() { return this.divideScalar(this.length() || 1); },
    setLength(a) { return this.normalize().multiplyScalar(a); },
    lerp(a, b) { this.x += (a.x - this.x) * b; this.y += (a.y - this.y) * b; this.z += (a.z - this.z) * b; return this; },
    lerpVectors(a, b, c) { return this.subVectors(b, a).multiplyScalar(c).add(a); },
    cross(a, b) {
      return void 0 !== b ? (console.warn('THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.'), this.crossVectors(a, b)) : this.crossVectors(this,
        a);
    },
    crossVectors(a, b) { const c = a.x; const d = a.y; a = a.z; const e = b.x; const f = b.y; b = b.z; this.x = d * b - a * f; this.y = a * e - c * b; this.z = c * f - d * e; return this; },
    projectOnVector(a) { const b = a.dot(this) / a.lengthSq(); return this.copy(a).multiplyScalar(b); },
    projectOnPlane(a) { Ng.copy(this).projectOnVector(a); return this.sub(Ng); },
    reflect(a) { return this.sub(Ng.copy(a).multiplyScalar(2 * this.dot(a))); },
    angleTo(a) {
      const b = Math.sqrt(this.lengthSq() * a.lengthSq()); b === 0 && console.error("THREE.Vector3: angleTo() can't handle zero length vectors.");
      a = this.dot(a) / b; return Math.acos(L.clamp(a, -1, 1));
    },
    distanceTo(a) { return Math.sqrt(this.distanceToSquared(a)); },
    distanceToSquared(a) { const b = this.x - a.x; const c = this.y - a.y; a = this.z - a.z; return b * b + c * c + a * a; },
    manhattanDistanceTo(a) { return Math.abs(this.x - a.x) + Math.abs(this.y - a.y) + Math.abs(this.z - a.z); },
    setFromSpherical(a) { return this.setFromSphericalCoords(a.radius, a.phi, a.theta); },
    setFromSphericalCoords(a, b, c) {
      const d = Math.sin(b) * a; this.x = d * Math.sin(c); this.y = Math.cos(b)
* a; this.z = d * Math.cos(c); return this;
    },
    setFromCylindrical(a) { return this.setFromCylindricalCoords(a.radius, a.theta, a.y); },
    setFromCylindricalCoords(a, b, c) { this.x = a * Math.sin(b); this.y = c; this.z = a * Math.cos(b); return this; },
    setFromMatrixPosition(a) { a = a.elements; this.x = a[12]; this.y = a[13]; this.z = a[14]; return this; },
    setFromMatrixScale(a) {
      const b = this.setFromMatrixColumn(a, 0).length(); const c = this.setFromMatrixColumn(a, 1).length(); a = this.setFromMatrixColumn(a, 2).length(); this.x = b; this.y = c; this.z = a; return this;
    },
    setFromMatrixColumn(a, b) { return this.fromArray(a.elements, 4 * b); },
    equals(a) { return a.x === this.x && a.y === this.y && a.z === this.z; },
    fromArray(a, b) { void 0 === b && (b = 0); this.x = a[b]; this.y = a[b + 1]; this.z = a[b + 2]; return this; },
    toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this.x; a[b + 1] = this.y; a[b + 2] = this.z; return a; },
    fromBufferAttribute(a, b, c) {
      void 0 !== c && console.warn('THREE.Vector3: offset has been removed from .fromBufferAttribute().');
      this.x = a.getX(b); this.y = a.getY(b); this.z = a.getZ(b); return this;
    },
  }); const qc = new n(); Object.assign(Y.prototype, {
    isMatrix3: !0,
    set(a, b, c, d, e, f, g, h, l) { const m = this.elements; m[0] = a; m[1] = d; m[2] = g; m[3] = b; m[4] = e; m[5] = h; m[6] = c; m[7] = f; m[8] = l; return this; },
    identity() { this.set(1, 0, 0, 0, 1, 0, 0, 0, 1); return this; },
    clone() { return (new this.constructor()).fromArray(this.elements); },
    copy(a) {
      const b = this.elements; a = a.elements; b[0] = a[0]; b[1] = a[1]; b[2] = a[2]; b[3] = a[3]; b[4] = a[4]; b[5] = a[5]; b[6] = a[6]; b[7] = a[7]; b[8] = a[8]; return this;
    },
    setFromMatrix4(a) { a = a.elements; this.set(a[0], a[4], a[8], a[1], a[5], a[9], a[2], a[6], a[10]); return this; },
    applyToBufferAttribute(a) { for (let b = 0, c = a.count; b < c; b++)qc.x = a.getX(b), qc.y = a.getY(b), qc.z = a.getZ(b), qc.applyMatrix3(this), a.setXYZ(b, qc.x, qc.y, qc.z); return a; },
    multiply(a) { return this.multiplyMatrices(this, a); },
    premultiply(a) { return this.multiplyMatrices(a, this); },
    multiplyMatrices(a, b) {
      let c = a.elements; let d = b.elements; b = this.elements;
      a = c[0]; const e = c[3]; const f = c[6]; const g = c[1]; const h = c[4]; const l = c[7]; const m = c[2]; const k = c[5]; c = c[8]; const n = d[0]; const t = d[3]; const r = d[6]; const p = d[1]; const v = d[4]; const x = d[7]; const z = d[2]; const y = d[5]; d = d[8]; b[0] = a * n + e * p + f * z; b[3] = a * t + e * v + f * y; b[6] = a * r + e * x + f * d; b[1] = g * n + h * p + l * z; b[4] = g * t + h * v + l * y; b[7] = g * r + h * x + l * d; b[2] = m * n + k * p + c * z; b[5] = m * t + k * v + c * y; b[8] = m * r + k * x + c * d; return this;
    },
    multiplyScalar(a) { const b = this.elements; b[0] *= a; b[3] *= a; b[6] *= a; b[1] *= a; b[4] *= a; b[7] *= a; b[2] *= a; b[5] *= a; b[8] *= a; return this; },
    determinant() {
      let a = this.elements; const b = a[0]; const c = a[1]; const d = a[2]; const e = a[3];
      const f = a[4]; const g = a[5]; const h = a[6]; const l = a[7]; a = a[8]; return b * f * a - b * g * l - c * e * a + c * g * h + d * e * l - d * f * h;
    },
    getInverse(a, b) {
      a && a.isMatrix4 && console.error('THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.'); let c = a.elements; a = this.elements; const d = c[0]; const e = c[1]; const f = c[2]; const g = c[3]; const h = c[4]; const l = c[5]; const m = c[6]; const k = c[7]; c = c[8]; const n = c * h - l * k; const t = l * m - c * g; const r = k * g - h * m; const p = d * n + e * t + f * r; if (p === 0) {
        if (!0 === b) throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"); console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
        return this.identity();
      }b = 1 / p; a[0] = n * b; a[1] = (f * k - c * e) * b; a[2] = (l * e - f * h) * b; a[3] = t * b; a[4] = (c * d - f * m) * b; a[5] = (f * g - l * d) * b; a[6] = r * b; a[7] = (e * m - k * d) * b; a[8] = (h * d - e * g) * b; return this;
    },
    transpose() { const a = this.elements; let b = a[1]; a[1] = a[3]; a[3] = b; b = a[2]; a[2] = a[6]; a[6] = b; b = a[5]; a[5] = a[7]; a[7] = b; return this; },
    getNormalMatrix(a) { return this.setFromMatrix4(a).getInverse(this).transpose(); },
    transposeIntoArray(a) {
      const b = this.elements; a[0] = b[0]; a[1] = b[3]; a[2] = b[6]; a[3] = b[1]; a[4] = b[4]; a[5] = b[7]; a[6] = b[2]; a[7] = b[5]; a[8] = b[8]; return this;
    },
    setUvTransform(a, b, c, d, e, f, g) { const h = Math.cos(e); e = Math.sin(e); this.set(c * h, c * e, -c * (h * f + e * g) + f + a, -d * e, d * h, -d * (-e * f + h * g) + g + b, 0, 0, 1); },
    scale(a, b) { const c = this.elements; c[0] *= a; c[3] *= a; c[6] *= a; c[1] *= b; c[4] *= b; c[7] *= b; return this; },
    rotate(a) { const b = Math.cos(a); a = Math.sin(a); const c = this.elements; const d = c[0]; const e = c[3]; const f = c[6]; const g = c[1]; const h = c[4]; const l = c[7]; c[0] = b * d + a * g; c[3] = b * e + a * h; c[6] = b * f + a * l; c[1] = -a * d + b * g; c[4] = -a * e + b * h; c[7] = -a * f + b * l; return this; },
    translate(a,
      b) { const c = this.elements; c[0] += a * c[2]; c[3] += a * c[5]; c[6] += a * c[8]; c[1] += b * c[2]; c[4] += b * c[5]; c[7] += b * c[8]; return this; },
    equals(a) { const b = this.elements; a = a.elements; for (let c = 0; c < 9; c++) if (b[c] !== a[c]) return !1; return !0; },
    fromArray(a, b) { void 0 === b && (b = 0); for (let c = 0; c < 9; c++) this.elements[c] = a[c + b]; return this; },
    toArray(a, b) {
      void 0 === a && (a = []); void 0 === b && (b = 0); const c = this.elements; a[b] = c[0]; a[b + 1] = c[1]; a[b + 2] = c[2]; a[b + 3] = c[3]; a[b + 4] = c[4]; a[b + 5] = c[5]; a[b + 6] = c[6]; a[b + 7] = c[7]; a[b + 8] = c[8];
      return a;
    },
  }); let md; const Kb = { getDataURL(a) { if (typeof HTMLCanvasElement === 'undefined') return a.src; if (!(a instanceof HTMLCanvasElement)) { void 0 === md && (md = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas')); md.width = a.width; md.height = a.height; const b = md.getContext('2d'); a instanceof ImageData ? b.putImageData(a, 0, 0) : b.drawImage(a, 0, 0, a.width, a.height); a = md; } return a.width > 2048 || a.height > 2048 ? a.toDataURL('image/jpeg', 0.6) : a.toDataURL('image/png'); } }; var Ri = 0; W.DEFAULT_IMAGE = void 0; W.DEFAULT_MAPPING = 300; W.prototype = Object.assign(Object.create(Ba.prototype), {
    constructor: W,
    isTexture: !0,
    updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y); },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) {
      this.name = a.name; this.image = a.image; this.mipmaps = a.mipmaps.slice(0); this.mapping = a.mapping; this.wrapS = a.wrapS; this.wrapT = a.wrapT; this.magFilter = a.magFilter; this.minFilter = a.minFilter; this.anisotropy = a.anisotropy; this.format = a.format; this.type = a.type; this.offset.copy(a.offset); this.repeat.copy(a.repeat); this.center.copy(a.center); this.rotation = a.rotation; this.matrixAutoUpdate = a.matrixAutoUpdate; this.matrix.copy(a.matrix); this.generateMipmaps = a.generateMipmaps; this.premultiplyAlpha = a.premultiplyAlpha; this.flipY = a.flipY; this.unpackAlignment = a.unpackAlignment; this.encoding = a.encoding; return this;
    },
    toJSON(a) {
      const b = void 0 === a || typeof a === 'string'; if (!b && void 0 !== a.textures[this.uuid]) return a.textures[this.uuid];
      const c = {
        metadata: { version: 4.5, type: 'Texture', generator: 'Texture.toJSON' }, uuid: this.uuid, name: this.name, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment,
      };
      if (void 0 !== this.image) { const d = this.image; void 0 === d.uuid && (d.uuid = L.generateUUID()); if (!b && void 0 === a.images[d.uuid]) { if (Array.isArray(d)) { var e = []; for (let f = 0, g = d.length; f < g; f++)e.push(Kb.getDataURL(d[f])); } else e = Kb.getDataURL(d); a.images[d.uuid] = { uuid: d.uuid, url: e }; }c.image = d.uuid; }b || (a.textures[this.uuid] = c); return c;
    },
    dispose() { this.dispatchEvent({ type: 'dispose' }); },
    transformUv(a) {
      if (this.mapping !== 300) return a; a.applyMatrix3(this.matrix); if (a.x < 0 || a.x > 1) {
        switch (this.wrapS) {
          case 1E3: a.x
-= Math.floor(a.x); break; case 1001: a.x = a.x < 0 ? 0 : 1; break; case 1002: a.x = Math.abs(Math.floor(a.x) % 2) === 1 ? Math.ceil(a.x) - a.x : a.x - Math.floor(a.x);
        }
      } if (a.y < 0 || a.y > 1) switch (this.wrapT) { case 1E3: a.y -= Math.floor(a.y); break; case 1001: a.y = a.y < 0 ? 0 : 1; break; case 1002: a.y = Math.abs(Math.floor(a.y) % 2) === 1 ? Math.ceil(a.y) - a.y : a.y - Math.floor(a.y); } this.flipY && (a.y = 1 - a.y); return a;
    },
  }); Object.defineProperty(W.prototype, 'needsUpdate', { set(a) { !0 === a && this.version++; } }); Object.defineProperties(aa.prototype, {
    width: {
      get() { return this.z; },
      set(a) { this.z = a; },
    },
    height: { get() { return this.w; }, set(a) { this.w = a; } },
  }); Object.assign(aa.prototype, {
    isVector4: !0,
    set(a, b, c, d) { this.x = a; this.y = b; this.z = c; this.w = d; return this; },
    setScalar(a) { this.w = this.z = this.y = this.x = a; return this; },
    setX(a) { this.x = a; return this; },
    setY(a) { this.y = a; return this; },
    setZ(a) { this.z = a; return this; },
    setW(a) { this.w = a; return this; },
    setComponent(a, b) {
      switch (a) {
        case 0: this.x = b; break; case 1: this.y = b;
          break; case 2: this.z = b; break; case 3: this.w = b; break; default: throw Error(`index is out of range: ${a}`);
      } return this;
    },
    getComponent(a) { switch (a) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw Error(`index is out of range: ${a}`); } },
    clone() { return new this.constructor(this.x, this.y, this.z, this.w); },
    copy(a) { this.x = a.x; this.y = a.y; this.z = a.z; this.w = void 0 !== a.w ? a.w : 1; return this; },
    add(a, b) {
      if (void 0 !== b) {
        return console.warn('THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'),
        this.addVectors(a, b);
      } this.x += a.x; this.y += a.y; this.z += a.z; this.w += a.w; return this;
    },
    addScalar(a) { this.x += a; this.y += a; this.z += a; this.w += a; return this; },
    addVectors(a, b) { this.x = a.x + b.x; this.y = a.y + b.y; this.z = a.z + b.z; this.w = a.w + b.w; return this; },
    addScaledVector(a, b) { this.x += a.x * b; this.y += a.y * b; this.z += a.z * b; this.w += a.w * b; return this; },
    sub(a, b) {
      if (void 0 !== b) {
        return console.warn('THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'), this.subVectors(a,
          b);
      } this.x -= a.x; this.y -= a.y; this.z -= a.z; this.w -= a.w; return this;
    },
    subScalar(a) { this.x -= a; this.y -= a; this.z -= a; this.w -= a; return this; },
    subVectors(a, b) { this.x = a.x - b.x; this.y = a.y - b.y; this.z = a.z - b.z; this.w = a.w - b.w; return this; },
    multiplyScalar(a) { this.x *= a; this.y *= a; this.z *= a; this.w *= a; return this; },
    applyMatrix4(a) {
      const b = this.x; const c = this.y; const d = this.z; const e = this.w; a = a.elements; this.x = a[0] * b + a[4] * c + a[8] * d + a[12] * e; this.y = a[1] * b + a[5] * c + a[9] * d + a[13] * e; this.z = a[2] * b + a[6] * c + a[10] * d + a[14]
* e; this.w = a[3] * b + a[7] * c + a[11] * d + a[15] * e; return this;
    },
    divideScalar(a) { return this.multiplyScalar(1 / a); },
    setAxisAngleFromQuaternion(a) { this.w = 2 * Math.acos(a.w); const b = Math.sqrt(1 - a.w * a.w); b < 1E-4 ? (this.x = 1, this.z = this.y = 0) : (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b); return this; },
    setAxisAngleFromRotationMatrix(a) {
      a = a.elements; let b = a[0]; let c = a[4]; let d = a[8]; const e = a[1]; let f = a[5]; let g = a[9]; let h = a[2]; let l = a[6]; let m = a[10]; if (Math.abs(c - e) < 0.01 && Math.abs(d - h) < 0.01 && Math.abs(g - l) < 0.01) {
        if (Math.abs(c
+ e) < 0.1 && Math.abs(d + h) < 0.1 && Math.abs(g + l) < 0.1 && Math.abs(b + f + m - 3) < 0.1) return this.set(1, 0, 0, 0), this; a = Math.PI; b = (b + 1) / 2; f = (f + 1) / 2; m = (m + 1) / 2; c = (c + e) / 4; d = (d + h) / 4; g = (g + l) / 4; b > f && b > m ? b < 0.01 ? (l = 0, c = h = 0.707106781) : (l = Math.sqrt(b), h = c / l, c = d / l) : f > m ? f < 0.01 ? (l = 0.707106781, h = 0, c = 0.707106781) : (h = Math.sqrt(f), l = c / h, c = g / h) : m < 0.01 ? (h = l = 0.707106781, c = 0) : (c = Math.sqrt(m), l = d / c, h = g / c); this.set(l, h, c, a); return this;
      }a = Math.sqrt((l - g) * (l - g) + (d - h) * (d - h) + (e - c) * (e - c)); Math.abs(a) < 0.001 && (a = 1); this.x = (l - g) / a; this.y = (d - h) / a; this.z = (e - c) / a;
      this.w = Math.acos((b + f + m - 1) / 2); return this;
    },
    min(a) { this.x = Math.min(this.x, a.x); this.y = Math.min(this.y, a.y); this.z = Math.min(this.z, a.z); this.w = Math.min(this.w, a.w); return this; },
    max(a) { this.x = Math.max(this.x, a.x); this.y = Math.max(this.y, a.y); this.z = Math.max(this.z, a.z); this.w = Math.max(this.w, a.w); return this; },
    clamp(a, b) {
      this.x = Math.max(a.x, Math.min(b.x, this.x)); this.y = Math.max(a.y, Math.min(b.y, this.y)); this.z = Math.max(a.z, Math.min(b.z, this.z)); this.w = Math.max(a.w, Math.min(b.w,
        this.w)); return this;
    },
    clampScalar(a, b) { this.x = Math.max(a, Math.min(b, this.x)); this.y = Math.max(a, Math.min(b, this.y)); this.z = Math.max(a, Math.min(b, this.z)); this.w = Math.max(a, Math.min(b, this.w)); return this; },
    clampLength(a, b) { const c = this.length(); return this.divideScalar(c || 1).multiplyScalar(Math.max(a, Math.min(b, c))); },
    floor() { this.x = Math.floor(this.x); this.y = Math.floor(this.y); this.z = Math.floor(this.z); this.w = Math.floor(this.w); return this; },
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y); this.z = Math.ceil(this.z); this.w = Math.ceil(this.w); return this;
    },
    round() { this.x = Math.round(this.x); this.y = Math.round(this.y); this.z = Math.round(this.z); this.w = Math.round(this.w); return this; },
    roundToZero() { this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x); this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y); this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z); this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w); return this; },
    negate() {
      this.x = -this.x;
      this.y = -this.y; this.z = -this.z; this.w = -this.w; return this;
    },
    dot(a) { return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w; },
    lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w; },
    length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w); },
    manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w); },
    normalize() { return this.divideScalar(this.length() || 1); },
    setLength(a) { return this.normalize().multiplyScalar(a); },
    lerp(a, b) { this.x += (a.x - this.x) * b; this.y += (a.y - this.y) * b; this.z += (a.z - this.z) * b; this.w += (a.w - this.w) * b; return this; },
    lerpVectors(a, b, c) { return this.subVectors(b, a).multiplyScalar(c).add(a); },
    equals(a) { return a.x === this.x && a.y === this.y && a.z === this.z && a.w === this.w; },
    fromArray(a, b) { void 0 === b && (b = 0); this.x = a[b]; this.y = a[b + 1]; this.z = a[b + 2]; this.w = a[b + 3]; return this; },
    toArray(a, b) {
      void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this.x; a[b + 1] = this.y; a[b + 2] = this.z; a[b + 3] = this.w; return a;
    },
    fromBufferAttribute(a, b, c) { void 0 !== c && console.warn('THREE.Vector4: offset has been removed from .fromBufferAttribute().'); this.x = a.getX(b); this.y = a.getY(b); this.z = a.getZ(b); this.w = a.getW(b); return this; },
  }); la.prototype = Object.assign(Object.create(Ba.prototype), {
    constructor: la,
    isWebGLRenderTarget: !0,
    setSize(a, b) {
      if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.texture.image.width = a, this.texture.image.height = b, this.dispose(); this.viewport.set(0, 0,
        a, b); this.scissor.set(0, 0, a, b);
    },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) { this.width = a.width; this.height = a.height; this.viewport.copy(a.viewport); this.texture = a.texture.clone(); this.depthBuffer = a.depthBuffer; this.stencilBuffer = a.stencilBuffer; this.depthTexture = a.depthTexture; return this; },
    dispose() { this.dispatchEvent({ type: 'dispose' }); },
  }); Of.prototype = Object.assign(Object.create(la.prototype), {
    constructor: Of,
    isWebGLMultisampleRenderTarget: !0,
    copy(a) {
      la.prototype.copy.call(this,
        a); this.samples = a.samples; return this;
    },
  }); const Ka = new n(); const ea = new U(); const sk = new n(0, 0, 0); const tk = new n(1, 1, 1); const Lb = new n(); const qf = new n(); const
    ka = new n(); Object.assign(U.prototype, {
    isMatrix4: !0,
    set(a, b, c, d, e, f, g, h, l, m, k, n, t, r, p, v) { const q = this.elements; q[0] = a; q[4] = b; q[8] = c; q[12] = d; q[1] = e; q[5] = f; q[9] = g; q[13] = h; q[2] = l; q[6] = m; q[10] = k; q[14] = n; q[3] = t; q[7] = r; q[11] = p; q[15] = v; return this; },
    identity() { this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); return this; },
    clone() { return (new U()).fromArray(this.elements); },
    copy(a) {
      const b = this.elements; a = a.elements; b[0] = a[0]; b[1] = a[1]; b[2] = a[2]; b[3] = a[3]; b[4] = a[4]; b[5] = a[5]; b[6] = a[6]; b[7] = a[7]; b[8] = a[8]; b[9] = a[9]; b[10] = a[10]; b[11] = a[11]; b[12] = a[12]; b[13] = a[13]; b[14] = a[14]; b[15] = a[15]; return this;
    },
    copyPosition(a) { const b = this.elements; a = a.elements; b[12] = a[12]; b[13] = a[13]; b[14] = a[14]; return this; },
    extractBasis(a, b, c) { a.setFromMatrixColumn(this, 0); b.setFromMatrixColumn(this, 1); c.setFromMatrixColumn(this, 2); return this; },
    makeBasis(a, b, c) {
      this.set(a.x, b.x, c.x, 0, a.y,
        b.y, c.y, 0, a.z, b.z, c.z, 0, 0, 0, 0, 1); return this;
    },
    extractRotation(a) { const b = this.elements; const c = a.elements; const d = 1 / Ka.setFromMatrixColumn(a, 0).length(); const e = 1 / Ka.setFromMatrixColumn(a, 1).length(); a = 1 / Ka.setFromMatrixColumn(a, 2).length(); b[0] = c[0] * d; b[1] = c[1] * d; b[2] = c[2] * d; b[3] = 0; b[4] = c[4] * e; b[5] = c[5] * e; b[6] = c[6] * e; b[7] = 0; b[8] = c[8] * a; b[9] = c[9] * a; b[10] = c[10] * a; b[11] = 0; b[12] = 0; b[13] = 0; b[14] = 0; b[15] = 1; return this; },
    makeRotationFromEuler(a) {
      a && a.isEuler || console.error('THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.');
      const b = this.elements; let c = a.x; let d = a.y; let e = a.z; const f = Math.cos(c); c = Math.sin(c); const g = Math.cos(d); d = Math.sin(d); const h = Math.cos(e); e = Math.sin(e); if (a.order === 'XYZ') { a = f * h; var l = f * e; var m = c * h; var k = c * e; b[0] = g * h; b[4] = -g * e; b[8] = d; b[1] = l + m * d; b[5] = a - k * d; b[9] = -c * g; b[2] = k - a * d; b[6] = m + l * d; b[10] = f * g; } else a.order === 'YXZ' ? (a = g * h, l = g * e, m = d * h, k = d * e, b[0] = a + k * c, b[4] = m * c - l, b[8] = f * d, b[1] = f * e, b[5] = f * h, b[9] = -c, b[2] = l * c - m, b[6] = k + a * c, b[10] = f * g) : a.order === 'ZXY' ? (a = g * h, l = g * e, m = d * h, k = d * e, b[0] = a - k * c, b[4] = -f * e, b[8] = m + l * c, b[1] = l + m * c, b[5] = f * h, b[9] = k - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : a.order === 'ZYX' ? (a = f * h, l = f * e, m = c * h, k = c * e, b[0] = g * h, b[4] = m * d - l, b[8] = a * d + k, b[1] = g * e, b[5] = k * d + a, b[9] = l * d - m, b[2] = -d, b[6] = c * g, b[10] = f * g) : a.order === 'YZX' ? (a = f * g, l = f * d, m = c * g, k = c * d, b[0] = g * h, b[4] = k - a * e, b[8] = m * e + l, b[1] = e, b[5] = f * h, b[9] = -c * h, b[2] = -d * h, b[6] = l * e + m, b[10] = a - k * e) : a.order === 'XZY' && (a = f * g, l = f * d, m = c * g, k = c * d, b[0] = g * h, b[4] = -e, b[8] = d * h, b[1] = a * e + k, b[5] = f * h, b[9] = l * e - m, b[2] = m * e - l, b[6] = c * h, b[10] = k * e + a); b[3] = 0; b[7] = 0; b[11] = 0; b[12] = 0; b[13] = 0; b[14] = 0; b[15] = 1; return this;
    },
    makeRotationFromQuaternion(a) {
      return this.compose(sk,
        a, tk);
    },
    lookAt(a, b, c) { const d = this.elements; ka.subVectors(a, b); ka.lengthSq() === 0 && (ka.z = 1); ka.normalize(); Lb.crossVectors(c, ka); Lb.lengthSq() === 0 && (Math.abs(c.z) === 1 ? ka.x += 1E-4 : ka.z += 1E-4, ka.normalize(), Lb.crossVectors(c, ka)); Lb.normalize(); qf.crossVectors(ka, Lb); d[0] = Lb.x; d[4] = qf.x; d[8] = ka.x; d[1] = Lb.y; d[5] = qf.y; d[9] = ka.y; d[2] = Lb.z; d[6] = qf.z; d[10] = ka.z; return this; },
    multiply(a, b) {
      return void 0 !== b ? (console.warn('THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.'),
      this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a);
    },
    premultiply(a) { return this.multiplyMatrices(a, this); },
    multiplyMatrices(a, b) {
      let c = a.elements; let d = b.elements; b = this.elements; a = c[0]; const e = c[4]; const f = c[8]; const g = c[12]; const h = c[1]; const l = c[5]; const m = c[9]; const k = c[13]; const n = c[2]; const t = c[6]; const r = c[10]; const p = c[14]; const v = c[3]; const x = c[7]; const z = c[11]; c = c[15]; const y = d[0]; const w = d[4]; const A = d[8]; const C = d[12]; const B = d[1]; const E = d[5]; const D = d[9]; const F = d[13]; const G = d[2]; const H = d[6]; const I = d[10]; const L = d[14]; const M = d[3]; const N = d[7]; const O = d[11]; d = d[15]; b[0] = a * y + e * B + f * G + g * M; b[4] = a * w + e * E + f * H + g * N; b[8] = a * A + e * D + f * I
+ g * O; b[12] = a * C + e * F + f * L + g * d; b[1] = h * y + l * B + m * G + k * M; b[5] = h * w + l * E + m * H + k * N; b[9] = h * A + l * D + m * I + k * O; b[13] = h * C + l * F + m * L + k * d; b[2] = n * y + t * B + r * G + p * M; b[6] = n * w + t * E + r * H + p * N; b[10] = n * A + t * D + r * I + p * O; b[14] = n * C + t * F + r * L + p * d; b[3] = v * y + x * B + z * G + c * M; b[7] = v * w + x * E + z * H + c * N; b[11] = v * A + x * D + z * I + c * O; b[15] = v * C + x * F + z * L + c * d; return this;
    },
    multiplyScalar(a) { const b = this.elements; b[0] *= a; b[4] *= a; b[8] *= a; b[12] *= a; b[1] *= a; b[5] *= a; b[9] *= a; b[13] *= a; b[2] *= a; b[6] *= a; b[10] *= a; b[14] *= a; b[3] *= a; b[7] *= a; b[11] *= a; b[15] *= a; return this; },
    applyToBufferAttribute(a) {
      for (let b = 0, c = a.count; b < c; b++)Ka.x = a.getX(b), Ka.y = a.getY(b), Ka.z = a.getZ(b), Ka.applyMatrix4(this), a.setXYZ(b, Ka.x, Ka.y, Ka.z); return a;
    },
    determinant() { const a = this.elements; const b = a[0]; const c = a[4]; const d = a[8]; const e = a[12]; const f = a[1]; const g = a[5]; const h = a[9]; const l = a[13]; const m = a[2]; const k = a[6]; const n = a[10]; const t = a[14]; return a[3] * (+e * h * k - d * l * k - e * g * n + c * l * n + d * g * t - c * h * t) + a[7] * (+b * h * t - b * l * n + e * f * n - d * f * t + d * l * m - e * h * m) + a[11] * (+b * l * k - b * g * t - e * f * k + c * f * t + e * g * m - c * l * m) + a[15] * (-d * g * m - b * h * k + b * g * n + d * f * k - c * f * n + c * h * m); },
    transpose() {
      const a = this.elements; let b = a[1]; a[1] = a[4];
      a[4] = b; b = a[2]; a[2] = a[8]; a[8] = b; b = a[6]; a[6] = a[9]; a[9] = b; b = a[3]; a[3] = a[12]; a[12] = b; b = a[7]; a[7] = a[13]; a[13] = b; b = a[11]; a[11] = a[14]; a[14] = b; return this;
    },
    setPosition(a, b, c) { const d = this.elements; a.isVector3 ? (d[12] = a.x, d[13] = a.y, d[14] = a.z) : (d[12] = a, d[13] = b, d[14] = c); return this; },
    getInverse(a, b) {
      const c = this.elements; let d = a.elements; a = d[0]; const e = d[1]; const f = d[2]; const g = d[3]; const h = d[4]; const l = d[5]; const m = d[6]; const k = d[7]; const n = d[8]; const t = d[9]; const r = d[10]; const p = d[11]; const v = d[12]; const x = d[13]; const z = d[14]; d = d[15]; const y = t * z * k - x * r * k + x * m * p - l * z * p - t * m * d + l * r * d;
      const w = v * r * k - n * z * k - v * m * p + h * z * p + n * m * d - h * r * d; const A = n * x * k - v * t * k + v * l * p - h * x * p - n * l * d + h * t * d; const C = v * t * m - n * x * m - v * l * r + h * x * r + n * l * z - h * t * z; const B = a * y + e * w + f * A + g * C; if (B === 0) { if (!0 === b) throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"); console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"); return this.identity(); }b = 1 / B; c[0] = y * b; c[1] = (x * r * g - t * z * g - x * f * p + e * z * p + t * f * d - e * r * d) * b; c[2] = (l * z * g - x * m * g + x * f * k - e * z * k - l * f * d + e * m * d) * b; c[3] = (t * m * g - l * r * g - t * f * k + e * r * k + l * f * p - e * m * p) * b; c[4] = w * b; c[5] = (n * z * g - v * r * g + v * f * p - a * z * p - n * f * d + a * r * d) * b; c[6] = (v * m * g - h * z * g - v * f * k + a * z * k + h * f * d - a * m * d) * b; c[7] = (h * r * g - n * m * g + n * f * k - a * r * k - h * f * p + a * m * p) * b; c[8] = A * b; c[9] = (v * t * g - n * x * g - v * e * p + a * x * p + n * e * d - a * t * d) * b; c[10] = (h * x * g - v * l * g + v * e * k - a * x * k - h * e * d + a * l * d) * b; c[11] = (n * l * g - h * t * g - n * e * k + a * t * k + h * e * p - a * l * p) * b; c[12] = C * b; c[13] = (n * x * f - v * t * f + v * e * r - a * x * r - n * e * z + a * t * z) * b; c[14] = (v * l * f - h * x * f - v * e * m + a * x * m + h * e * z - a * l * z) * b; c[15] = (h * t * f - n * l * f + n * e * m - a * t * m - h * e * r + a * l * r) * b; return this;
    },
    scale(a) {
      const b = this.elements; const c = a.x; const d = a.y; a = a.z; b[0] *= c;
      b[4] *= d; b[8] *= a; b[1] *= c; b[5] *= d; b[9] *= a; b[2] *= c; b[6] *= d; b[10] *= a; b[3] *= c; b[7] *= d; b[11] *= a; return this;
    },
    getMaxScaleOnAxis() { const a = this.elements; return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10])); },
    makeTranslation(a, b, c) { this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1); return this; },
    makeRotationX(a) { const b = Math.cos(a); a = Math.sin(a); this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1); return this; },
    makeRotationY(a) {
      const b = Math.cos(a); a = Math.sin(a); this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1); return this;
    },
    makeRotationZ(a) { const b = Math.cos(a); a = Math.sin(a); this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); return this; },
    makeRotationAxis(a, b) { const c = Math.cos(b); b = Math.sin(b); const d = 1 - c; const e = a.x; const f = a.y; a = a.z; const g = d * e; const h = d * f; this.set(g * e + c, g * f - b * a, g * a + b * f, 0, g * f + b * a, h * f + c, h * a - b * e, 0, g * a - b * f, h * a + b * e, d * a * a + c, 0, 0, 0, 0, 1); return this; },
    makeScale(a, b, c) { this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1); return this; },
    makeShear(a,
      b, c) { this.set(1, b, c, 0, a, 1, c, 0, a, b, 1, 0, 0, 0, 0, 1); return this; },
    compose(a, b, c) { const d = this.elements; let e = b._x; let f = b._y; let g = b._z; let h = b._w; let l = e + e; let m = f + f; let k = g + g; b = e * l; const n = e * m; e *= k; const t = f * m; f *= k; g *= k; l *= h; m *= h; h *= k; k = c.x; const r = c.y; c = c.z; d[0] = (1 - (t + g)) * k; d[1] = (n + h) * k; d[2] = (e - m) * k; d[3] = 0; d[4] = (n - h) * r; d[5] = (1 - (b + g)) * r; d[6] = (f + l) * r; d[7] = 0; d[8] = (e + m) * c; d[9] = (f - l) * c; d[10] = (1 - (b + t)) * c; d[11] = 0; d[12] = a.x; d[13] = a.y; d[14] = a.z; d[15] = 1; return this; },
    decompose(a, b, c) {
      let d = this.elements; let e = Ka.set(d[0], d[1], d[2]).length();
      const f = Ka.set(d[4], d[5], d[6]).length(); const g = Ka.set(d[8], d[9], d[10]).length(); this.determinant() < 0 && (e = -e); a.x = d[12]; a.y = d[13]; a.z = d[14]; ea.copy(this); a = 1 / e; d = 1 / f; const h = 1 / g; ea.elements[0] *= a; ea.elements[1] *= a; ea.elements[2] *= a; ea.elements[4] *= d; ea.elements[5] *= d; ea.elements[6] *= d; ea.elements[8] *= h; ea.elements[9] *= h; ea.elements[10] *= h; b.setFromRotationMatrix(ea); c.x = e; c.y = f; c.z = g; return this;
    },
    makePerspective(a, b, c, d, e, f) {
      void 0 === f && console.warn('THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.');
      const g = this.elements; g[0] = 2 * e / (b - a); g[4] = 0; g[8] = (b + a) / (b - a); g[12] = 0; g[1] = 0; g[5] = 2 * e / (c - d); g[9] = (c + d) / (c - d); g[13] = 0; g[2] = 0; g[6] = 0; g[10] = -(f + e) / (f - e); g[14] = -2 * f * e / (f - e); g[3] = 0; g[7] = 0; g[11] = -1; g[15] = 0; return this;
    },
    makeOrthographic(a, b, c, d, e, f) { const g = this.elements; const h = 1 / (b - a); const l = 1 / (c - d); const m = 1 / (f - e); g[0] = 2 * h; g[4] = 0; g[8] = 0; g[12] = -((b + a) * h); g[1] = 0; g[5] = 2 * l; g[9] = 0; g[13] = -((c + d) * l); g[2] = 0; g[6] = 0; g[10] = -2 * m; g[14] = -((f + e) * m); g[3] = 0; g[7] = 0; g[11] = 0; g[15] = 1; return this; },
    equals(a) {
      const b = this.elements;
      a = a.elements; for (let c = 0; c < 16; c++) if (b[c] !== a[c]) return !1; return !0;
    },
    fromArray(a, b) { void 0 === b && (b = 0); for (let c = 0; c < 16; c++) this.elements[c] = a[c + b]; return this; },
    toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); const c = this.elements; a[b] = c[0]; a[b + 1] = c[1]; a[b + 2] = c[2]; a[b + 3] = c[3]; a[b + 4] = c[4]; a[b + 5] = c[5]; a[b + 6] = c[6]; a[b + 7] = c[7]; a[b + 8] = c[8]; a[b + 9] = c[9]; a[b + 10] = c[10]; a[b + 11] = c[11]; a[b + 12] = c[12]; a[b + 13] = c[13]; a[b + 14] = c[14]; a[b + 15] = c[15]; return a; },
  }); const mi = new U(); const
    ni = new ua(); Qb.RotationOrders = 'XYZ YZX ZXY XZY YXZ ZYX'.split(' '); Qb.DefaultOrder = 'XYZ'; Object.defineProperties(Qb.prototype, {
    x: { get() { return this._x; }, set(a) { this._x = a; this._onChangeCallback(); } }, y: { get() { return this._y; }, set(a) { this._y = a; this._onChangeCallback(); } }, z: { get() { return this._z; }, set(a) { this._z = a; this._onChangeCallback(); } }, order: { get() { return this._order; }, set(a) { this._order = a; this._onChangeCallback(); } },
  }); Object.assign(Qb.prototype, {
    isEuler: !0,
    set(a,
      b, c, d) { this._x = a; this._y = b; this._z = c; this._order = d || this._order; this._onChangeCallback(); return this; },
    clone() { return new this.constructor(this._x, this._y, this._z, this._order); },
    copy(a) { this._x = a._x; this._y = a._y; this._z = a._z; this._order = a._order; this._onChangeCallback(); return this; },
    setFromRotationMatrix(a, b, c) {
      const d = L.clamp; let e = a.elements; a = e[0]; const f = e[4]; const g = e[8]; const h = e[1]; const l = e[5]; const m = e[9]; const k = e[2]; const n = e[6]; e = e[10]; b = b || this._order; b === 'XYZ' ? (this._y = Math.asin(d(g, -1, 1)), Math.abs(g) < 0.9999999
        ? (this._x = Math.atan2(-m, e), this._z = Math.atan2(-f, a)) : (this._x = Math.atan2(n, l), this._z = 0)) : b === 'YXZ' ? (this._x = Math.asin(-d(m, -1, 1)), Math.abs(m) < 0.9999999 ? (this._y = Math.atan2(g, e), this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-k, a), this._z = 0)) : b === 'ZXY' ? (this._x = Math.asin(d(n, -1, 1)), Math.abs(n) < 0.9999999 ? (this._y = Math.atan2(-k, e), this._z = Math.atan2(-f, l)) : (this._y = 0, this._z = Math.atan2(h, a))) : b === 'ZYX' ? (this._y = Math.asin(-d(k, -1, 1)), Math.abs(k) < 0.9999999 ? (this._x = Math.atan2(n, e), this._z = Math.atan2(h, a))
        : (this._x = 0, this._z = Math.atan2(-f, l))) : b === 'YZX' ? (this._z = Math.asin(d(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(-m, l), this._y = Math.atan2(-k, a)) : (this._x = 0, this._y = Math.atan2(g, e))) : b === 'XZY' ? (this._z = Math.asin(-d(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(n, l), this._y = Math.atan2(g, a)) : (this._x = Math.atan2(-m, e), this._y = 0)) : console.warn(`THREE.Euler: .setFromRotationMatrix() given unsupported order: ${b}`); this._order = b; !1 !== c && this._onChangeCallback(); return this;
    },
    setFromQuaternion(a,
      b, c) { mi.makeRotationFromQuaternion(a); return this.setFromRotationMatrix(mi, b, c); },
    setFromVector3(a, b) { return this.set(a.x, a.y, a.z, b || this._order); },
    reorder(a) { ni.setFromEuler(this); return this.setFromQuaternion(ni, a); },
    equals(a) { return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order; },
    fromArray(a) { this._x = a[0]; this._y = a[1]; this._z = a[2]; void 0 !== a[3] && (this._order = a[3]); this._onChangeCallback(); return this; },
    toArray(a, b) {
      void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this._x; a[b + 1] = this._y; a[b + 2] = this._z; a[b + 3] = this._order; return a;
    },
    toVector3(a) { return a ? a.set(this._x, this._y, this._z) : new n(this._x, this._y, this._z); },
    _onChange(a) { this._onChangeCallback = a; return this; },
    _onChangeCallback() {},
  }); Object.assign(Pf.prototype, {
    set(a) { this.mask = 1 << a | 0; },
    enable(a) { this.mask = this.mask | 1 << a | 0; },
    enableAll() { this.mask = -1; },
    toggle(a) { this.mask ^= 1 << a | 0; },
    disable(a) {
      this.mask &= ~(1 << a
| 0);
    },
    disableAll() { this.mask = 0; },
    test(a) { return (this.mask & a.mask) !== 0; },
  }); var Si = 0; const oi = new n(); const nd = new ua(); const ub = new U(); const rf = new n(); const xe = new n(); const uk = new n(); const vk = new ua(); const pi = new n(1, 0, 0); const qi = new n(0, 1, 0); const ri = new n(0, 0, 1); const wk = { type: 'added' }; const xk = { type: 'removed' }; B.DefaultUp = new n(0, 1, 0); B.DefaultMatrixAutoUpdate = !0; B.prototype = Object.assign(Object.create(Ba.prototype), {
    constructor: B,
    isObject3D: !0,
    onBeforeRender() {},
    onAfterRender() {},
    applyMatrix(a) {
      this.matrixAutoUpdate && this.updateMatrix();
      this.matrix.premultiply(a); this.matrix.decompose(this.position, this.quaternion, this.scale);
    },
    applyQuaternion(a) { this.quaternion.premultiply(a); return this; },
    setRotationFromAxisAngle(a, b) { this.quaternion.setFromAxisAngle(a, b); },
    setRotationFromEuler(a) { this.quaternion.setFromEuler(a, !0); },
    setRotationFromMatrix(a) { this.quaternion.setFromRotationMatrix(a); },
    setRotationFromQuaternion(a) { this.quaternion.copy(a); },
    rotateOnAxis(a, b) {
      nd.setFromAxisAngle(a, b);
      this.quaternion.multiply(nd); return this;
    },
    rotateOnWorldAxis(a, b) { nd.setFromAxisAngle(a, b); this.quaternion.premultiply(nd); return this; },
    rotateX(a) { return this.rotateOnAxis(pi, a); },
    rotateY(a) { return this.rotateOnAxis(qi, a); },
    rotateZ(a) { return this.rotateOnAxis(ri, a); },
    translateOnAxis(a, b) { oi.copy(a).applyQuaternion(this.quaternion); this.position.add(oi.multiplyScalar(b)); return this; },
    translateX(a) { return this.translateOnAxis(pi, a); },
    translateY(a) {
      return this.translateOnAxis(qi,
        a);
    },
    translateZ(a) { return this.translateOnAxis(ri, a); },
    localToWorld(a) { return a.applyMatrix4(this.matrixWorld); },
    worldToLocal(a) { return a.applyMatrix4(ub.getInverse(this.matrixWorld)); },
    lookAt(a, b, c) {
      a.isVector3 ? rf.copy(a) : rf.set(a, b, c); a = this.parent; this.updateWorldMatrix(!0, !1); xe.setFromMatrixPosition(this.matrixWorld); this.isCamera || this.isLight ? ub.lookAt(xe, rf, this.up) : ub.lookAt(rf, xe, this.up); this.quaternion.setFromRotationMatrix(ub); a && (ub.extractRotation(a.matrixWorld),
      nd.setFromRotationMatrix(ub), this.quaternion.premultiply(nd.inverse()));
    },
    add(a) { if (arguments.length > 1) { for (let b = 0; b < arguments.length; b++) this.add(arguments[b]); return this; } if (a === this) return console.error("THREE.Object3D.add: object can't be added as a child of itself.", a), this; a && a.isObject3D ? (a.parent !== null && a.parent.remove(a), a.parent = this, this.children.push(a), a.dispatchEvent(wk)) : console.error('THREE.Object3D.add: object not an instance of THREE.Object3D.', a); return this; },
    remove(a) {
      if (arguments.length
> 1) { for (var b = 0; b < arguments.length; b++) this.remove(arguments[b]); return this; }b = this.children.indexOf(a); b !== -1 && (a.parent = null, this.children.splice(b, 1), a.dispatchEvent(xk)); return this;
    },
    attach(a) { this.updateWorldMatrix(!0, !1); ub.getInverse(this.matrixWorld); a.parent !== null && (a.parent.updateWorldMatrix(!0, !1), ub.multiply(a.parent.matrixWorld)); a.applyMatrix(ub); a.updateWorldMatrix(!1, !1); this.add(a); return this; },
    getObjectById(a) {
      return this.getObjectByProperty('id',
        a);
    },
    getObjectByName(a) { return this.getObjectByProperty('name', a); },
    getObjectByProperty(a, b) { if (this[a] === b) return this; for (let c = 0, d = this.children.length; c < d; c++) { const e = this.children[c].getObjectByProperty(a, b); if (void 0 !== e) return e; } },
    getWorldPosition(a) { void 0 === a && (console.warn('THREE.Object3D: .getWorldPosition() target is now required'), a = new n()); this.updateMatrixWorld(!0); return a.setFromMatrixPosition(this.matrixWorld); },
    getWorldQuaternion(a) {
      void 0 === a && (console.warn('THREE.Object3D: .getWorldQuaternion() target is now required'),
      a = new ua()); this.updateMatrixWorld(!0); this.matrixWorld.decompose(xe, a, uk); return a;
    },
    getWorldScale(a) { void 0 === a && (console.warn('THREE.Object3D: .getWorldScale() target is now required'), a = new n()); this.updateMatrixWorld(!0); this.matrixWorld.decompose(xe, vk, a); return a; },
    getWorldDirection(a) { void 0 === a && (console.warn('THREE.Object3D: .getWorldDirection() target is now required'), a = new n()); this.updateMatrixWorld(!0); const b = this.matrixWorld.elements; return a.set(b[8], b[9], b[10]).normalize(); },
    raycast() {},
    traverse(a) { a(this); for (let b = this.children, c = 0, d = b.length; c < d; c++)b[c].traverse(a); },
    traverseVisible(a) { if (!1 !== this.visible) { a(this); for (let b = this.children, c = 0, d = b.length; c < d; c++)b[c].traverseVisible(a); } },
    traverseAncestors(a) { const b = this.parent; b !== null && (a(b), b.traverseAncestors(a)); },
    updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale); this.matrixWorldNeedsUpdate = !0; },
    updateMatrixWorld(a) {
      this.matrixAutoUpdate
&& this.updateMatrix(); if (this.matrixWorldNeedsUpdate || a) this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0; for (let b = this.children, c = 0, d = b.length; c < d; c++)b[c].updateMatrixWorld(a);
    },
    updateWorldMatrix(a, b) {
      let c = this.parent; !0 === a && c !== null && c.updateWorldMatrix(!0, !1); this.matrixAutoUpdate && this.updateMatrix(); this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,
        this.matrix); if (!0 === b) for (a = this.children, b = 0, c = a.length; b < c; b++)a[b].updateWorldMatrix(!1, !0);
    },
    toJSON(a) {
      function b(b, c) { void 0 === b[c.uuid] && (b[c.uuid] = c.toJSON(a)); return c.uuid; } function c(a) { const b = []; let c; for (c in a) { const d = a[c]; delete d.metadata; b.push(d); } return b; } let d = void 0 === a || typeof a === 'string'; const e = {}; d && (a = {
        geometries: {}, materials: {}, textures: {}, images: {}, shapes: {},
      }, e.metadata = { version: 4.5, type: 'Object', generator: 'Object3D.toJSON' }); const f = {}; f.uuid = this.uuid; f.type = this.type; this.name
!== '' && (f.name = this.name); !0 === this.castShadow && (f.castShadow = !0); !0 === this.receiveShadow && (f.receiveShadow = !0); !1 === this.visible && (f.visible = !1); !1 === this.frustumCulled && (f.frustumCulled = !1); this.renderOrder !== 0 && (f.renderOrder = this.renderOrder); JSON.stringify(this.userData) !== '{}' && (f.userData = this.userData); f.layers = this.layers.mask; f.matrix = this.matrix.toArray(); !1 === this.matrixAutoUpdate && (f.matrixAutoUpdate = !1); this.isMesh && this.drawMode !== 0 && (f.drawMode = this.drawMode); if (this.isMesh || this.isLine
|| this.isPoints) { f.geometry = b(a.geometries, this.geometry); var g = this.geometry.parameters; if (void 0 !== g && void 0 !== g.shapes) if (g = g.shapes, Array.isArray(g)) for (var h = 0, l = g.length; h < l; h++)b(a.shapes, g[h]); else b(a.shapes, g); } if (void 0 !== this.material) if (Array.isArray(this.material)) { g = []; h = 0; for (l = this.material.length; h < l; h++)g.push(b(a.materials, this.material[h])); f.material = g; } else f.material = b(a.materials, this.material); if (this.children.length > 0) for (f.children = [], h = 0; h < this.children.length; h++)f.children.push(this.children[h].toJSON(a).object);
      if (d) { d = c(a.geometries); h = c(a.materials); l = c(a.textures); const m = c(a.images); g = c(a.shapes); d.length > 0 && (e.geometries = d); h.length > 0 && (e.materials = h); l.length > 0 && (e.textures = l); m.length > 0 && (e.images = m); g.length > 0 && (e.shapes = g); }e.object = f; return e;
    },
    clone(a) { return (new this.constructor()).copy(this, a); },
    copy(a, b) {
      void 0 === b && (b = !0); this.name = a.name; this.up.copy(a.up); this.position.copy(a.position); this.quaternion.copy(a.quaternion); this.scale.copy(a.scale); this.matrix.copy(a.matrix); this.matrixWorld.copy(a.matrixWorld);
      this.matrixAutoUpdate = a.matrixAutoUpdate; this.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate; this.layers.mask = a.layers.mask; this.visible = a.visible; this.castShadow = a.castShadow; this.receiveShadow = a.receiveShadow; this.frustumCulled = a.frustumCulled; this.renderOrder = a.renderOrder; this.userData = JSON.parse(JSON.stringify(a.userData)); if (!0 === b) for (b = 0; b < a.children.length; b++) this.add(a.children[b].clone()); return this;
    },
  }); wd.prototype = Object.assign(Object.create(B.prototype), {
    constructor: wd,
    isScene: !0,
    copy(a, b) { B.prototype.copy.call(this, a, b); a.background !== null && (this.background = a.background.clone()); a.fog !== null && (this.fog = a.fog.clone()); a.overrideMaterial !== null && (this.overrideMaterial = a.overrideMaterial.clone()); this.autoUpdate = a.autoUpdate; this.matrixAutoUpdate = a.matrixAutoUpdate; return this; },
    toJSON(a) { const b = B.prototype.toJSON.call(this, a); this.background !== null && (b.object.background = this.background.toJSON(a)); this.fog !== null && (b.object.fog = this.fog.toJSON()); return b; },
    dispose() { this.dispatchEvent({ type: 'dispose' }); },
  });
  const vb = [new n(), new n(), new n(), new n(), new n(), new n(), new n(), new n()]; const jb = new n(); const od = new n(); const pd = new n(); const qd = new n(); const Mb = new n(); const Nb = new n(); const rc = new n(); const ye = new n(); const sf = new n(); const tf = new n(); var Rb = new n(); Object.assign(ab.prototype, {
    isBox3: !0,
    set(a, b) { this.min.copy(a); this.max.copy(b); return this; },
    setFromArray(a) {
      for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, l = a.length; h < l; h += 3) { const m = a[h]; const k = a[h + 1]; const n = a[h + 2]; m < b && (b = m); k < c && (c = k); n < d && (d = n); m > e && (e = m); k > f && (f = k); n > g && (g = n); } this.min.set(b, c, d);
      this.max.set(e, f, g); return this;
    },
    setFromBufferAttribute(a) { for (var b = Infinity, c = Infinity, d = Infinity, e = -Infinity, f = -Infinity, g = -Infinity, h = 0, l = a.count; h < l; h++) { const m = a.getX(h); const k = a.getY(h); const n = a.getZ(h); m < b && (b = m); k < c && (c = k); n < d && (d = n); m > e && (e = m); k > f && (f = k); n > g && (g = n); } this.min.set(b, c, d); this.max.set(e, f, g); return this; },
    setFromPoints(a) { this.makeEmpty(); for (let b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]); return this; },
    setFromCenterAndSize(a, b) {
      b = jb.copy(b).multiplyScalar(0.5);
      this.min.copy(a).sub(b); this.max.copy(a).add(b); return this;
    },
    setFromObject(a) { this.makeEmpty(); return this.expandByObject(a); },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) { this.min.copy(a.min); this.max.copy(a.max); return this; },
    makeEmpty() { this.min.x = this.min.y = this.min.z = Infinity; this.max.x = this.max.y = this.max.z = -Infinity; return this; },
    isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z; },
    getCenter(a) {
      void 0
=== a && (console.warn('THREE.Box3: .getCenter() target is now required'), a = new n()); return this.isEmpty() ? a.set(0, 0, 0) : a.addVectors(this.min, this.max).multiplyScalar(0.5);
    },
    getSize(a) { void 0 === a && (console.warn('THREE.Box3: .getSize() target is now required'), a = new n()); return this.isEmpty() ? a.set(0, 0, 0) : a.subVectors(this.max, this.min); },
    expandByPoint(a) { this.min.min(a); this.max.max(a); return this; },
    expandByVector(a) { this.min.sub(a); this.max.add(a); return this; },
    expandByScalar(a) {
      this.min.addScalar(-a);
      this.max.addScalar(a); return this;
    },
    expandByObject(a) { let b; a.updateWorldMatrix(!1, !1); let c = a.geometry; if (void 0 !== c) if (c.isGeometry) { var d = c.vertices; c = 0; for (b = d.length; c < b; c++)jb.copy(d[c]), jb.applyMatrix4(a.matrixWorld), this.expandByPoint(jb); } else if (c.isBufferGeometry && (d = c.attributes.position, void 0 !== d)) for (c = 0, b = d.count; c < b; c++)jb.fromBufferAttribute(d, c).applyMatrix4(a.matrixWorld), this.expandByPoint(jb); a = a.children; c = 0; for (b = a.length; c < b; c++) this.expandByObject(a[c]); return this; },
    containsPoint(a) { return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0; },
    containsBox(a) { return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z; },
    getParameter(a, b) {
      void 0 === b && (console.warn('THREE.Box3: .getParameter() target is now required'), b = new n()); return b.set((a.x - this.min.x) / (this.max.x - this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y),
        (a.z - this.min.z) / (this.max.z - this.min.z));
    },
    intersectsBox(a) { return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0; },
    intersectsSphere(a) { this.clampPoint(a.center, jb); return jb.distanceToSquared(a.center) <= a.radius * a.radius; },
    intersectsPlane(a) {
      if (a.normal.x > 0) { var b = a.normal.x * this.min.x; var c = a.normal.x * this.max.x; } else b = a.normal.x * this.max.x, c = a.normal.x * this.min.x; a.normal.y > 0 ? (b += a.normal.y * this.min.y,
      c += a.normal.y * this.max.y) : (b += a.normal.y * this.max.y, c += a.normal.y * this.min.y); a.normal.z > 0 ? (b += a.normal.z * this.min.z, c += a.normal.z * this.max.z) : (b += a.normal.z * this.max.z, c += a.normal.z * this.min.z); return b <= -a.constant && c >= -a.constant;
    },
    intersectsTriangle(a) {
      if (this.isEmpty()) return !1; this.getCenter(ye); sf.subVectors(this.max, ye); od.subVectors(a.a, ye); pd.subVectors(a.b, ye); qd.subVectors(a.c, ye); Mb.subVectors(pd, od); Nb.subVectors(qd, pd); rc.subVectors(od, qd); a = [0, -Mb.z, Mb.y, 0, -Nb.z, Nb.y, 0, -rc.z,
        rc.y, Mb.z, 0, -Mb.x, Nb.z, 0, -Nb.x, rc.z, 0, -rc.x, -Mb.y, Mb.x, 0, -Nb.y, Nb.x, 0, -rc.y, rc.x, 0]; if (!Qf(a, od, pd, qd, sf)) return !1; a = [1, 0, 0, 0, 1, 0, 0, 0, 1]; if (!Qf(a, od, pd, qd, sf)) return !1; tf.crossVectors(Mb, Nb); a = [tf.x, tf.y, tf.z]; return Qf(a, od, pd, qd, sf);
    },
    clampPoint(a, b) { void 0 === b && (console.warn('THREE.Box3: .clampPoint() target is now required'), b = new n()); return b.copy(a).clamp(this.min, this.max); },
    distanceToPoint(a) { return jb.copy(a).clamp(this.min, this.max).sub(a).length(); },
    getBoundingSphere(a) {
      void 0
=== a && console.error('THREE.Box3: .getBoundingSphere() target is now required'); this.getCenter(a.center); a.radius = 0.5 * this.getSize(jb).length(); return a;
    },
    intersect(a) { this.min.max(a.min); this.max.min(a.max); this.isEmpty() && this.makeEmpty(); return this; },
    union(a) { this.min.min(a.min); this.max.max(a.max); return this; },
    applyMatrix4(a) {
      if (this.isEmpty()) return this; vb[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(a); vb[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(a);
      vb[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(a); vb[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(a); vb[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(a); vb[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(a); vb[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(a); vb[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(a); this.setFromPoints(vb); return this;
    },
    translate(a) { this.min.add(a); this.max.add(a); return this; },
    equals(a) {
      return a.min.equals(this.min)
&& a.max.equals(this.max);
    },
  }); const yk = new ab(); Object.assign(nb.prototype, {
    set(a, b) { this.center.copy(a); this.radius = b; return this; },
    setFromPoints(a, b) { const c = this.center; void 0 !== b ? c.copy(b) : yk.setFromPoints(a).getCenter(c); for (let d = b = 0, e = a.length; d < e; d++)b = Math.max(b, c.distanceToSquared(a[d])); this.radius = Math.sqrt(b); return this; },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) { this.center.copy(a.center); this.radius = a.radius; return this; },
    empty() {
      return this.radius
<= 0;
    },
    containsPoint(a) { return a.distanceToSquared(this.center) <= this.radius * this.radius; },
    distanceToPoint(a) { return a.distanceTo(this.center) - this.radius; },
    intersectsSphere(a) { const b = this.radius + a.radius; return a.center.distanceToSquared(this.center) <= b * b; },
    intersectsBox(a) { return a.intersectsSphere(this); },
    intersectsPlane(a) { return Math.abs(a.distanceToPoint(this.center)) <= this.radius; },
    clampPoint(a, b) {
      const c = this.center.distanceToSquared(a);
      void 0 === b && (console.warn('THREE.Sphere: .clampPoint() target is now required'), b = new n()); b.copy(a); c > this.radius * this.radius && (b.sub(this.center).normalize(), b.multiplyScalar(this.radius).add(this.center)); return b;
    },
    getBoundingBox(a) { void 0 === a && (console.warn('THREE.Sphere: .getBoundingBox() target is now required'), a = new ab()); a.set(this.center, this.center); a.expandByScalar(this.radius); return a; },
    applyMatrix4(a) { this.center.applyMatrix4(a); this.radius *= a.getMaxScaleOnAxis(); return this; },
    translate(a) { this.center.add(a); return this; },
    equals(a) { return a.center.equals(this.center) && a.radius === this.radius; },
  }); const wb = new n(); const Og = new n(); const uf = new n(); const Ob = new n(); const Pg = new n(); const vf = new n(); const
    Qg = new n(); Object.assign(Sb.prototype, {
    set(a, b) { this.origin.copy(a); this.direction.copy(b); return this; },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) { this.origin.copy(a.origin); this.direction.copy(a.direction); return this; },
    at(a, b) {
      void 0 === b && (console.warn('THREE.Ray: .at() target is now required'),
      b = new n()); return b.copy(this.direction).multiplyScalar(a).add(this.origin);
    },
    lookAt(a) { this.direction.copy(a).sub(this.origin).normalize(); return this; },
    recast(a) { this.origin.copy(this.at(a, wb)); return this; },
    closestPointToPoint(a, b) { void 0 === b && (console.warn('THREE.Ray: .closestPointToPoint() target is now required'), b = new n()); b.subVectors(a, this.origin); a = b.dot(this.direction); return a < 0 ? b.copy(this.origin) : b.copy(this.direction).multiplyScalar(a).add(this.origin); },
    distanceToPoint(a) { return Math.sqrt(this.distanceSqToPoint(a)); },
    distanceSqToPoint(a) { const b = wb.subVectors(a, this.origin).dot(this.direction); if (b < 0) return this.origin.distanceToSquared(a); wb.copy(this.direction).multiplyScalar(b).add(this.origin); return wb.distanceToSquared(a); },
    distanceSqToSegment(a, b, c, d) {
      Og.copy(a).add(b).multiplyScalar(0.5); uf.copy(b).sub(a).normalize(); Ob.copy(this.origin).sub(Og); let e = 0.5 * a.distanceTo(b); let f = -this.direction.dot(uf); const g = Ob.dot(this.direction); const h = -Ob.dot(uf); const l = Ob.lengthSq(); const m = Math.abs(1 - f * f); if (m > 0) {
        a = f * h - g; b = f
* g - h; const k = e * m; a >= 0 ? b >= -k ? b <= k ? (e = 1 / m, a *= e, b *= e, f = a * (a + f * b + 2 * g) + b * (f * a + b + 2 * h) + l) : (b = e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l) : (b = -e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l) : b <= -k ? (a = Math.max(0, -(-f * e + g)), b = a > 0 ? -e : Math.min(Math.max(-e, -h), e), f = -a * a + b * (b + 2 * h) + l) : b <= k ? (a = 0, b = Math.min(Math.max(-e, -h), e), f = b * (b + 2 * h) + l) : (a = Math.max(0, -(f * e + g)), b = a > 0 ? e : Math.min(Math.max(-e, -h), e), f = -a * a + b * (b + 2 * h) + l);
      } else b = f > 0 ? -e : e, a = Math.max(0, -(f * b + g)), f = -a * a + b * (b + 2 * h) + l; c && c.copy(this.direction).multiplyScalar(a).add(this.origin);
      d && d.copy(uf).multiplyScalar(b).add(Og); return f;
    },
    intersectSphere(a, b) { wb.subVectors(a.center, this.origin); let c = wb.dot(this.direction); let d = wb.dot(wb) - c * c; a = a.radius * a.radius; if (d > a) return null; a = Math.sqrt(a - d); d = c - a; c += a; return d < 0 && c < 0 ? null : d < 0 ? this.at(c, b) : this.at(d, b); },
    intersectsSphere(a) { return this.distanceSqToPoint(a.center) <= a.radius * a.radius; },
    distanceToPlane(a) {
      const b = a.normal.dot(this.direction); if (b === 0) return a.distanceToPoint(this.origin) === 0 ? 0 : null; a = -(this.origin.dot(a.normal)
+ a.constant) / b; return a >= 0 ? a : null;
    },
    intersectPlane(a, b) { a = this.distanceToPlane(a); return a === null ? null : this.at(a, b); },
    intersectsPlane(a) { const b = a.distanceToPoint(this.origin); return b === 0 || a.normal.dot(this.direction) * b < 0 ? !0 : !1; },
    intersectBox(a, b) {
      let c = 1 / this.direction.x; let d = 1 / this.direction.y; const e = 1 / this.direction.z; const f = this.origin; if (c >= 0) { var g = (a.min.x - f.x) * c; c *= a.max.x - f.x; } else g = (a.max.x - f.x) * c, c *= a.min.x - f.x; if (d >= 0) { var h = (a.min.y - f.y) * d; d *= a.max.y - f.y; } else {
        h = (a.max.y
- f.y) * d, d *= a.min.y - f.y;
      } if (g > d || h > c) return null; if (h > g || g !== g)g = h; if (d < c || c !== c)c = d; e >= 0 ? (h = (a.min.z - f.z) * e, a = (a.max.z - f.z) * e) : (h = (a.max.z - f.z) * e, a = (a.min.z - f.z) * e); if (g > a || h > c) return null; if (h > g || g !== g)g = h; if (a < c || c !== c)c = a; return c < 0 ? null : this.at(g >= 0 ? g : c, b);
    },
    intersectsBox(a) { return this.intersectBox(a, wb) !== null; },
    intersectTriangle(a, b, c, d, e) {
      Pg.subVectors(b, a); vf.subVectors(c, a); Qg.crossVectors(Pg, vf); b = this.direction.dot(Qg); if (b > 0) { if (d) return null; d = 1; } else if (b < 0)d = -1, b = -b; else return null;
      Ob.subVectors(this.origin, a); a = d * this.direction.dot(vf.crossVectors(Ob, vf)); if (a < 0) return null; c = d * this.direction.dot(Pg.cross(Ob)); if (c < 0 || a + c > b) return null; a = -d * Ob.dot(Qg); return a < 0 ? null : this.at(a / b, e);
    },
    applyMatrix4(a) { this.origin.applyMatrix4(a); this.direction.transformDirection(a); return this; },
    equals(a) { return a.origin.equals(this.origin) && a.direction.equals(this.direction); },
  }); const Ya = new n(); const xb = new n(); const Rg = new n(); const yb = new n(); const rd = new n(); const sd = new n(); const si = new n(); const Sg = new n(); const Tg = new n(); const
    Ug = new n(); Object.assign(R,
    {
      getNormal(a, b, c, d) { void 0 === d && (console.warn('THREE.Triangle: .getNormal() target is now required'), d = new n()); d.subVectors(c, b); Ya.subVectors(a, b); d.cross(Ya); a = d.lengthSq(); return a > 0 ? d.multiplyScalar(1 / Math.sqrt(a)) : d.set(0, 0, 0); },
      getBarycoord(a, b, c, d, e) {
        Ya.subVectors(d, b); xb.subVectors(c, b); Rg.subVectors(a, b); a = Ya.dot(Ya); b = Ya.dot(xb); c = Ya.dot(Rg); let f = xb.dot(xb); d = xb.dot(Rg); let g = a * f - b * b; void 0 === e && (console.warn('THREE.Triangle: .getBarycoord() target is now required'), e = new n());
        if (g === 0) return e.set(-2, -1, -1); g = 1 / g; f = (f * c - b * d) * g; a = (a * d - b * c) * g; return e.set(1 - f - a, a, f);
      },
      containsPoint(a, b, c, d) { R.getBarycoord(a, b, c, d, yb); return yb.x >= 0 && yb.y >= 0 && yb.x + yb.y <= 1; },
      getUV(a, b, c, d, e, f, g, h) { this.getBarycoord(a, b, c, d, yb); h.set(0, 0); h.addScaledVector(e, yb.x); h.addScaledVector(f, yb.y); h.addScaledVector(g, yb.z); return h; },
      isFrontFacing(a, b, c, d) { Ya.subVectors(c, b); xb.subVectors(a, b); return Ya.cross(xb).dot(d) < 0 ? !0 : !1; },
    }); Object.assign(R.prototype, {
    set(a, b,
      c) { this.a.copy(a); this.b.copy(b); this.c.copy(c); return this; },
    setFromPointsAndIndices(a, b, c, d) { this.a.copy(a[b]); this.b.copy(a[c]); this.c.copy(a[d]); return this; },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) { this.a.copy(a.a); this.b.copy(a.b); this.c.copy(a.c); return this; },
    getArea() { Ya.subVectors(this.c, this.b); xb.subVectors(this.a, this.b); return 0.5 * Ya.cross(xb).length(); },
    getMidpoint(a) {
      void 0 === a && (console.warn('THREE.Triangle: .getMidpoint() target is now required'),
      a = new n()); return a.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    },
    getNormal(a) { return R.getNormal(this.a, this.b, this.c, a); },
    getPlane(a) { void 0 === a && (console.warn('THREE.Triangle: .getPlane() target is now required'), a = new n()); return a.setFromCoplanarPoints(this.a, this.b, this.c); },
    getBarycoord(a, b) { return R.getBarycoord(a, this.a, this.b, this.c, b); },
    getUV(a, b, c, d, e) { return R.getUV(a, this.a, this.b, this.c, b, c, d, e); },
    containsPoint(a) {
      return R.containsPoint(a,
        this.a, this.b, this.c);
    },
    isFrontFacing(a) { return R.isFrontFacing(this.a, this.b, this.c, a); },
    intersectsBox(a) { return a.intersectsTriangle(this); },
    closestPointToPoint(a, b) {
      void 0 === b && (console.warn('THREE.Triangle: .closestPointToPoint() target is now required'), b = new n()); const c = this.a; let d = this.b; let e = this.c; rd.subVectors(d, c); sd.subVectors(e, c); Sg.subVectors(a, c); let f = rd.dot(Sg); let g = sd.dot(Sg); if (f <= 0 && g <= 0) return b.copy(c); Tg.subVectors(a, d); const h = rd.dot(Tg); const l = sd.dot(Tg); if (h >= 0 && l
<= h) return b.copy(d); let m = f * l - h * g; if (m <= 0 && f >= 0 && h <= 0) return d = f / (f - h), b.copy(c).addScaledVector(rd, d); Ug.subVectors(a, e); a = rd.dot(Ug); const k = sd.dot(Ug); if (k >= 0 && a <= k) return b.copy(e); f = a * g - f * k; if (f <= 0 && g >= 0 && k <= 0) return m = g / (g - k), b.copy(c).addScaledVector(sd, m); g = h * k - a * l; if (g <= 0 && l - h >= 0 && a - k >= 0) return si.subVectors(e, d), m = (l - h) / (l - h + (a - k)), b.copy(d).addScaledVector(si, m); e = 1 / (g + f + m); d = f * e; m *= e; return b.copy(c).addScaledVector(rd, d).addScaledVector(sd, m);
    },
    equals(a) {
      return a.a.equals(this.a)
&& a.b.equals(this.b) && a.c.equals(this.c);
    },
  }); const zk = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  }; const Fa = { h: 0, s: 0, l: 0 }; const wf = { h: 0, s: 0, l: 0 }; Object.assign(H.prototype, {
    isColor: !0,
    r: 1,
    g: 1,
    b: 1,
    set(a) { a && a.isColor ? this.copy(a) : typeof a === 'number' ? this.setHex(a) : typeof a === 'string' && this.setStyle(a); return this; },
    setScalar(a) { this.b = this.g = this.r = a; return this; },
    setHex(a) {
      a = Math.floor(a);
      this.r = (a >> 16 & 255) / 255; this.g = (a >> 8 & 255) / 255; this.b = (a & 255) / 255; return this;
    },
    setRGB(a, b, c) { this.r = a; this.g = b; this.b = c; return this; },
    setHSL(a, b, c) { a = L.euclideanModulo(a, 1); b = L.clamp(b, 0, 1); c = L.clamp(c, 0, 1); b === 0 ? this.r = this.g = this.b = c : (b = c <= 0.5 ? c * (1 + b) : c + b - c * b, c = 2 * c - b, this.r = Rf(c, b, a + 1 / 3), this.g = Rf(c, b, a), this.b = Rf(c, b, a - 1 / 3)); return this; },
    setStyle(a) {
      function b(b) { void 0 !== b && parseFloat(b) < 1 && console.warn(`THREE.Color: Alpha component of ${a} will be ignored.`); } let c; if (c = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)) {
        var d = c[2]; switch (c[1]) {
          case 'rgb': case 'rgba': if (c = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) return this.r = Math.min(255, parseInt(c[1], 10)) / 255, this.g = Math.min(255, parseInt(c[2], 10)) / 255, this.b = Math.min(255, parseInt(c[3], 10)) / 255, b(c[5]), this; if (c = /^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) {
            return this.r = Math.min(100, parseInt(c[1], 10)) / 100, this.g = Math.min(100, parseInt(c[2], 10)) / 100, this.b = Math.min(100,
              parseInt(c[3], 10)) / 100, b(c[5]), this;
          } break; case 'hsl': case 'hsla': if (c = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)) { d = parseFloat(c[1]) / 360; const e = parseInt(c[2], 10) / 100; const f = parseInt(c[3], 10) / 100; b(c[5]); return this.setHSL(d, e, f); }
        }
      } else if (c = /^#([A-Fa-f0-9]+)$/.exec(a)) {
        c = c[1]; d = c.length; if (d === 3) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this; if (d === 6) { return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this; }
      }a && a.length > 0 && (c = zk[a], void 0 !== c ? this.setHex(c) : console.warn(`THREE.Color: Unknown color ${a}`)); return this;
    },
    clone() { return new this.constructor(this.r, this.g, this.b); },
    copy(a) { this.r = a.r; this.g = a.g; this.b = a.b; return this; },
    copyGammaToLinear(a, b) {
      void 0 === b && (b = 2); this.r = Math.pow(a.r, b); this.g = Math.pow(a.g, b); this.b = Math.pow(a.b, b);
      return this;
    },
    copyLinearToGamma(a, b) { void 0 === b && (b = 2); b = b > 0 ? 1 / b : 1; this.r = Math.pow(a.r, b); this.g = Math.pow(a.g, b); this.b = Math.pow(a.b, b); return this; },
    convertGammaToLinear(a) { this.copyGammaToLinear(this, a); return this; },
    convertLinearToGamma(a) { this.copyLinearToGamma(this, a); return this; },
    copySRGBToLinear(a) { this.r = Sf(a.r); this.g = Sf(a.g); this.b = Sf(a.b); return this; },
    copyLinearToSRGB(a) { this.r = Tf(a.r); this.g = Tf(a.g); this.b = Tf(a.b); return this; },
    convertSRGBToLinear() {
      this.copySRGBToLinear(this);
      return this;
    },
    convertLinearToSRGB() { this.copyLinearToSRGB(this); return this; },
    getHex() { return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0; },
    getHexString() { return (`000000${this.getHex().toString(16)}`).slice(-6); },
    getHSL(a) {
      void 0 === a && (console.warn('THREE.Color: .getHSL() target is now required'), a = { h: 0, s: 0, l: 0 }); const b = this.r; const c = this.g; const d = this.b; const e = Math.max(b, c, d); let f = Math.min(b, c, d); let g; const h = (f + e) / 2; if (f === e)f = g = 0; else {
        const l = e - f; f = h <= 0.5 ? l / (e + f) : l / (2 - e - f); switch (e) {
          case b: g = (c
- d) / l + (c < d ? 6 : 0); break; case c: g = (d - b) / l + 2; break; case d: g = (b - c) / l + 4;
        }g /= 6;
      }a.h = g; a.s = f; a.l = h; return a;
    },
    getStyle() { return `rgb(${255 * this.r | 0},${255 * this.g | 0},${255 * this.b | 0})`; },
    offsetHSL(a, b, c) { this.getHSL(Fa); Fa.h += a; Fa.s += b; Fa.l += c; this.setHSL(Fa.h, Fa.s, Fa.l); return this; },
    add(a) { this.r += a.r; this.g += a.g; this.b += a.b; return this; },
    addColors(a, b) { this.r = a.r + b.r; this.g = a.g + b.g; this.b = a.b + b.b; return this; },
    addScalar(a) { this.r += a; this.g += a; this.b += a; return this; },
    sub(a) { this.r = Math.max(0, this.r - a.r); this.g = Math.max(0, this.g - a.g); this.b = Math.max(0, this.b - a.b); return this; },
    multiply(a) { this.r *= a.r; this.g *= a.g; this.b *= a.b; return this; },
    multiplyScalar(a) { this.r *= a; this.g *= a; this.b *= a; return this; },
    lerp(a, b) { this.r += (a.r - this.r) * b; this.g += (a.g - this.g) * b; this.b += (a.b - this.b) * b; return this; },
    lerpHSL(a, b) { this.getHSL(Fa); a.getHSL(wf); a = L.lerp(Fa.h, wf.h, b); const c = L.lerp(Fa.s, wf.s, b); b = L.lerp(Fa.l, wf.l, b); this.setHSL(a, c, b); return this; },
    equals(a) { return a.r === this.r && a.g === this.g && a.b === this.b; },
    fromArray(a, b) { void 0 === b && (b = 0); this.r = a[b]; this.g = a[b + 1]; this.b = a[b + 2]; return this; },
    toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); a[b] = this.r; a[b + 1] = this.g; a[b + 2] = this.b; return a; },
    toJSON() { return this.getHex(); },
  }); Object.assign(zc.prototype, {
    clone() { return (new this.constructor()).copy(this); },
    copy(a) {
      this.a = a.a; this.b = a.b; this.c = a.c; this.normal.copy(a.normal); this.color.copy(a.color);
      this.materialIndex = a.materialIndex; for (var b = 0, c = a.vertexNormals.length; b < c; b++) this.vertexNormals[b] = a.vertexNormals[b].clone(); b = 0; for (c = a.vertexColors.length; b < c; b++) this.vertexColors[b] = a.vertexColors[b].clone(); return this;
    },
  }); var Ti = 0; M.prototype = Object.assign(Object.create(Ba.prototype), {
    constructor: M,
    isMaterial: !0,
    onBeforeCompile() {},
    setValues(a) {
      if (void 0 !== a) {
        for (const b in a) {
          const c = a[b]; if (void 0 === c)console.warn(`THREE.Material: '${b}' parameter is undefined.`); else if (b
=== 'shading')console.warn(`THREE.${this.type}: .shading has been removed. Use the boolean .flatShading instead.`), this.flatShading = c === 1 ? !0 : !1; else { const d = this[b]; void 0 === d ? console.warn(`THREE.${this.type}: '${b}' is not a property of this material.`) : d && d.isColor ? d.set(c) : d && d.isVector3 && c && c.isVector3 ? d.copy(c) : this[b] = c; }
        }
      }
    },
    toJSON(a) {
      function b(a) { const b = []; let c; for (c in a) { const d = a[c]; delete d.metadata; b.push(d); } return b; } let c = void 0 === a || typeof a === 'string'; c && (a = { textures: {}, images: {} }); const d = {
        metadata: {
          version: 4.5,
          type: 'Material',
          generator: 'Material.toJSON',
        },
      }; d.uuid = this.uuid; d.type = this.type; this.name !== '' && (d.name = this.name); this.color && this.color.isColor && (d.color = this.color.getHex()); void 0 !== this.roughness && (d.roughness = this.roughness); void 0 !== this.metalness && (d.metalness = this.metalness); this.sheen && this.sheen.isColor && (d.sheen = this.sheen.getHex()); this.emissive && this.emissive.isColor && (d.emissive = this.emissive.getHex()); this.emissiveIntensity && this.emissiveIntensity !== 1 && (d.emissiveIntensity = this.emissiveIntensity);
      this.specular && this.specular.isColor && (d.specular = this.specular.getHex()); void 0 !== this.shininess && (d.shininess = this.shininess); void 0 !== this.clearcoat && (d.clearcoat = this.clearcoat); void 0 !== this.clearcoatRoughness && (d.clearcoatRoughness = this.clearcoatRoughness); this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (d.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(a).uuid, d.clearcoatNormalScale = this.clearcoatNormalScale.toArray()); this.map && this.map.isTexture && (d.map = this.map.toJSON(a).uuid);
      this.matcap && this.matcap.isTexture && (d.matcap = this.matcap.toJSON(a).uuid); this.alphaMap && this.alphaMap.isTexture && (d.alphaMap = this.alphaMap.toJSON(a).uuid); this.lightMap && this.lightMap.isTexture && (d.lightMap = this.lightMap.toJSON(a).uuid); this.aoMap && this.aoMap.isTexture && (d.aoMap = this.aoMap.toJSON(a).uuid, d.aoMapIntensity = this.aoMapIntensity); this.bumpMap && this.bumpMap.isTexture && (d.bumpMap = this.bumpMap.toJSON(a).uuid, d.bumpScale = this.bumpScale); this.normalMap && this.normalMap.isTexture && (d.normalMap = this.normalMap.toJSON(a).uuid, d.normalMapType = this.normalMapType, d.normalScale = this.normalScale.toArray()); this.displacementMap && this.displacementMap.isTexture && (d.displacementMap = this.displacementMap.toJSON(a).uuid, d.displacementScale = this.displacementScale, d.displacementBias = this.displacementBias); this.roughnessMap && this.roughnessMap.isTexture && (d.roughnessMap = this.roughnessMap.toJSON(a).uuid); this.metalnessMap && this.metalnessMap.isTexture && (d.metalnessMap = this.metalnessMap.toJSON(a).uuid); this.emissiveMap
&& this.emissiveMap.isTexture && (d.emissiveMap = this.emissiveMap.toJSON(a).uuid); this.specularMap && this.specularMap.isTexture && (d.specularMap = this.specularMap.toJSON(a).uuid); this.envMap && this.envMap.isTexture && (d.envMap = this.envMap.toJSON(a).uuid, d.reflectivity = this.reflectivity, d.refractionRatio = this.refractionRatio, void 0 !== this.combine && (d.combine = this.combine), void 0 !== this.envMapIntensity && (d.envMapIntensity = this.envMapIntensity)); this.gradientMap && this.gradientMap.isTexture && (d.gradientMap = this.gradientMap.toJSON(a).uuid);
      void 0 !== this.size && (d.size = this.size); void 0 !== this.sizeAttenuation && (d.sizeAttenuation = this.sizeAttenuation); this.blending !== 1 && (d.blending = this.blending); !0 === this.flatShading && (d.flatShading = this.flatShading); this.side !== 0 && (d.side = this.side); this.vertexColors !== 0 && (d.vertexColors = this.vertexColors); this.opacity < 1 && (d.opacity = this.opacity); !0 === this.transparent && (d.transparent = this.transparent); d.depthFunc = this.depthFunc; d.depthTest = this.depthTest; d.depthWrite = this.depthWrite; d.stencilWrite = this.stencilWrite;
      d.stencilWriteMask = this.stencilWriteMask; d.stencilFunc = this.stencilFunc; d.stencilRef = this.stencilRef; d.stencilFuncMask = this.stencilFuncMask; d.stencilFail = this.stencilFail; d.stencilZFail = this.stencilZFail; d.stencilZPass = this.stencilZPass; this.rotation && this.rotation !== 0 && (d.rotation = this.rotation); !0 === this.polygonOffset && (d.polygonOffset = !0); this.polygonOffsetFactor !== 0 && (d.polygonOffsetFactor = this.polygonOffsetFactor); this.polygonOffsetUnits !== 0 && (d.polygonOffsetUnits = this.polygonOffsetUnits); this.linewidth
&& this.linewidth !== 1 && (d.linewidth = this.linewidth); void 0 !== this.dashSize && (d.dashSize = this.dashSize); void 0 !== this.gapSize && (d.gapSize = this.gapSize); void 0 !== this.scale && (d.scale = this.scale); !0 === this.dithering && (d.dithering = !0); this.alphaTest > 0 && (d.alphaTest = this.alphaTest); !0 === this.premultipliedAlpha && (d.premultipliedAlpha = this.premultipliedAlpha); !0 === this.wireframe && (d.wireframe = this.wireframe); this.wireframeLinewidth > 1 && (d.wireframeLinewidth = this.wireframeLinewidth); this.wireframeLinecap !== 'round'
&& (d.wireframeLinecap = this.wireframeLinecap); this.wireframeLinejoin !== 'round' && (d.wireframeLinejoin = this.wireframeLinejoin); !0 === this.morphTargets && (d.morphTargets = !0); !0 === this.morphNormals && (d.morphNormals = !0); !0 === this.skinning && (d.skinning = !0); !1 === this.visible && (d.visible = !1); !1 === this.toneMapped && (d.toneMapped = !1); JSON.stringify(this.userData) !== '{}' && (d.userData = this.userData); c && (c = b(a.textures), a = b(a.images), c.length > 0 && (d.textures = c), a.length > 0 && (d.images = a)); return d;
    },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) {
      this.name = a.name; this.fog = a.fog; this.blending = a.blending; this.side = a.side; this.flatShading = a.flatShading; this.vertexColors = a.vertexColors; this.opacity = a.opacity; this.transparent = a.transparent; this.blendSrc = a.blendSrc; this.blendDst = a.blendDst; this.blendEquation = a.blendEquation; this.blendSrcAlpha = a.blendSrcAlpha; this.blendDstAlpha = a.blendDstAlpha; this.blendEquationAlpha = a.blendEquationAlpha; this.depthFunc = a.depthFunc; this.depthTest = a.depthTest; this.depthWrite = a.depthWrite; this.stencilWrite = a.stencilWrite; this.stencilWriteMask = a.stencilWriteMask; this.stencilFunc = a.stencilFunc; this.stencilRef = a.stencilRef; this.stencilFuncMask = a.stencilFuncMask; this.stencilFail = a.stencilFail; this.stencilZFail = a.stencilZFail; this.stencilZPass = a.stencilZPass; this.colorWrite = a.colorWrite; this.precision = a.precision; this.polygonOffset = a.polygonOffset; this.polygonOffsetFactor = a.polygonOffsetFactor; this.polygonOffsetUnits = a.polygonOffsetUnits; this.dithering = a.dithering; this.alphaTest = a.alphaTest; this.premultipliedAlpha = a.premultipliedAlpha; this.visible = a.visible; this.toneMapped = a.toneMapped; this.userData = JSON.parse(JSON.stringify(a.userData)); this.clipShadows = a.clipShadows; this.clipIntersection = a.clipIntersection; const b = a.clippingPlanes; let c = null; if (b !== null) { const d = b.length; c = Array(d); for (let e = 0; e !== d; ++e)c[e] = b[e].clone(); } this.clippingPlanes = c; this.shadowSide = a.shadowSide; return this;
    },
    dispose() { this.dispatchEvent({ type: 'dispose' }); },
  }); Ga.prototype = Object.create(M.prototype); Ga.prototype.constructor = Ga; Ga.prototype.isMeshBasicMaterial = !0; Ga.prototype.copy = function (a) {
    M.prototype.copy.call(this, a); this.color.copy(a.color); this.map = a.map; this.lightMap = a.lightMap; this.lightMapIntensity = a.lightMapIntensity; this.aoMap = a.aoMap; this.aoMapIntensity = a.aoMapIntensity; this.specularMap = a.specularMap; this.alphaMap = a.alphaMap; this.envMap = a.envMap; this.combine = a.combine; this.reflectivity = a.reflectivity; this.refractionRatio = a.refractionRatio; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.wireframeLinecap = a.wireframeLinecap;
    this.wireframeLinejoin = a.wireframeLinejoin; this.skinning = a.skinning; this.morphTargets = a.morphTargets; return this;
  }; Object.defineProperty(O.prototype, 'needsUpdate', { set(a) { !0 === a && this.version++; } }); Object.assign(O.prototype, {
    isBufferAttribute: !0,
    onUploadCallback() {},
    setDynamic(a) { this.dynamic = a; return this; },
    copy(a) {
      this.name = a.name; this.array = new a.array.constructor(a.array); this.itemSize = a.itemSize; this.count = a.count; this.normalized = a.normalized; this.dynamic = a.dynamic;
      return this;
    },
    copyAt(a, b, c) { a *= this.itemSize; c *= b.itemSize; for (let d = 0, e = this.itemSize; d < e; d++) this.array[a + d] = b.array[c + d]; return this; },
    copyArray(a) { this.array.set(a); return this; },
    copyColorsArray(a) { for (let b = this.array, c = 0, d = 0, e = a.length; d < e; d++) { let f = a[d]; void 0 === f && (console.warn('THREE.BufferAttribute.copyColorsArray(): color is undefined', d), f = new H()); b[c++] = f.r; b[c++] = f.g; b[c++] = f.b; } return this; },
    copyVector2sArray(a) {
      for (let b = this.array, c = 0, d = 0, e = a.length; d
< e; d++) { let f = a[d]; void 0 === f && (console.warn('THREE.BufferAttribute.copyVector2sArray(): vector is undefined', d), f = new w()); b[c++] = f.x; b[c++] = f.y; } return this;
    },
    copyVector3sArray(a) { for (let b = this.array, c = 0, d = 0, e = a.length; d < e; d++) { let f = a[d]; void 0 === f && (console.warn('THREE.BufferAttribute.copyVector3sArray(): vector is undefined', d), f = new n()); b[c++] = f.x; b[c++] = f.y; b[c++] = f.z; } return this; },
    copyVector4sArray(a) {
      for (let b = this.array, c = 0, d = 0, e = a.length; d < e; d++) {
        let f = a[d]; void 0 === f && (console.warn('THREE.BufferAttribute.copyVector4sArray(): vector is undefined',
          d), f = new aa()); b[c++] = f.x; b[c++] = f.y; b[c++] = f.z; b[c++] = f.w;
      } return this;
    },
    set(a, b) { void 0 === b && (b = 0); this.array.set(a, b); return this; },
    getX(a) { return this.array[a * this.itemSize]; },
    setX(a, b) { this.array[a * this.itemSize] = b; return this; },
    getY(a) { return this.array[a * this.itemSize + 1]; },
    setY(a, b) { this.array[a * this.itemSize + 1] = b; return this; },
    getZ(a) { return this.array[a * this.itemSize + 2]; },
    setZ(a, b) { this.array[a * this.itemSize + 2] = b; return this; },
    getW(a) {
      return this.array[a
* this.itemSize + 3];
    },
    setW(a, b) { this.array[a * this.itemSize + 3] = b; return this; },
    setXY(a, b, c) { a *= this.itemSize; this.array[a + 0] = b; this.array[a + 1] = c; return this; },
    setXYZ(a, b, c, d) { a *= this.itemSize; this.array[a + 0] = b; this.array[a + 1] = c; this.array[a + 2] = d; return this; },
    setXYZW(a, b, c, d, e) { a *= this.itemSize; this.array[a + 0] = b; this.array[a + 1] = c; this.array[a + 2] = d; this.array[a + 3] = e; return this; },
    onUpload(a) { this.onUploadCallback = a; return this; },
    clone() {
      return (new this.constructor(this.array,
        this.itemSize)).copy(this);
    },
    toJSON() {
      return {
        itemSize: this.itemSize, type: this.array.constructor.name, array: Array.prototype.slice.call(this.array), normalized: this.normalized,
      };
    },
  }); xd.prototype = Object.create(O.prototype); xd.prototype.constructor = xd; yd.prototype = Object.create(O.prototype); yd.prototype.constructor = yd; zd.prototype = Object.create(O.prototype); zd.prototype.constructor = zd; Ad.prototype = Object.create(O.prototype); Ad.prototype.constructor = Ad; Tb.prototype = Object.create(O.prototype); Tb.prototype.constructor = Tb; Bd.prototype = Object.create(O.prototype); Bd.prototype.constructor = Bd; Ub.prototype = Object.create(O.prototype); Ub.prototype.constructor = Ub; A.prototype = Object.create(O.prototype); A.prototype.constructor = A; Cd.prototype = Object.create(O.prototype); Cd.prototype.constructor = Cd; Object.assign(jh.prototype, {
    computeGroups(a) {
      const b = []; let c = void 0; a = a.faces; for (var d = 0; d < a.length; d++) { const e = a[d]; if (e.materialIndex !== c) { c = e.materialIndex; void 0 !== f && (f.count = 3 * d - f.start, b.push(f)); var f = { start: 3 * d, materialIndex: c }; } } void 0
!== f && (f.count = 3 * d - f.start, b.push(f)); this.groups = b;
    },
    fromGeometry(a) {
      const b = a.faces; const c = a.vertices; const d = a.faceVertexUvs; const e = d[0] && d[0].length > 0; const f = d[1] && d[1].length > 0; const g = a.morphTargets; const h = g.length; if (h > 0) { var l = []; for (var m = 0; m < h; m++)l[m] = { name: g[m].name, data: [] }; this.morphTargets.position = l; } const k = a.morphNormals; const n = k.length; if (n > 0) { var t = []; for (m = 0; m < n; m++)t[m] = { name: k[m].name, data: [] }; this.morphTargets.normal = t; } const r = a.skinIndices; const p = a.skinWeights; const v = r.length === c.length; const x = p.length === c.length; c.length > 0
&& b.length === 0 && console.error('THREE.DirectGeometry: Faceless geometries are not supported.'); for (m = 0; m < b.length; m++) {
        const z = b[m]; this.vertices.push(c[z.a], c[z.b], c[z.c]); let y = z.vertexNormals; y.length === 3 ? this.normals.push(y[0], y[1], y[2]) : (y = z.normal, this.normals.push(y, y, y)); y = z.vertexColors; y.length === 3 ? this.colors.push(y[0], y[1], y[2]) : (y = z.color, this.colors.push(y, y, y)); !0 === e && (y = d[0][m], void 0 !== y ? this.uvs.push(y[0], y[1], y[2]) : (console.warn('THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ',
          m), this.uvs.push(new w(), new w(), new w()))); !0 === f && (y = d[1][m], void 0 !== y ? this.uvs2.push(y[0], y[1], y[2]) : (console.warn('THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ', m), this.uvs2.push(new w(), new w(), new w()))); for (y = 0; y < h; y++) { var A = g[y].vertices; l[y].data.push(A[z.a], A[z.b], A[z.c]); } for (y = 0; y < n; y++)A = k[y].vertexNormals[m], t[y].data.push(A.a, A.b, A.c); v && this.skinIndices.push(r[z.a], r[z.b], r[z.c]); x && this.skinWeights.push(p[z.a], p[z.b], p[z.c]);
      } this.computeGroups(a); this.verticesNeedUpdate = a.verticesNeedUpdate;
      this.normalsNeedUpdate = a.normalsNeedUpdate; this.colorsNeedUpdate = a.colorsNeedUpdate; this.uvsNeedUpdate = a.uvsNeedUpdate; this.groupsNeedUpdate = a.groupsNeedUpdate; a.boundingSphere !== null && (this.boundingSphere = a.boundingSphere.clone()); a.boundingBox !== null && (this.boundingBox = a.boundingBox.clone()); return this;
    },
  }); var Ui = 1; const kb = new U(); const Vg = new B(); const xf = new n(); const sc = new ab(); const Wg = new ab(); const Za = new n(); E.prototype = Object.assign(Object.create(Ba.prototype), {
    constructor: E,
    isBufferGeometry: !0,
    getIndex() { return this.index; },
    setIndex(a) { Array.isArray(a) ? this.index = new (kh(a) > 65535 ? Ub : Tb)(a, 1) : this.index = a; },
    addAttribute(a, b, c) { return b && b.isBufferAttribute || b && b.isInterleavedBufferAttribute ? a === 'index' ? (console.warn('THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.'), this.setIndex(b), this) : this.setAttribute(a, b) : (console.warn('THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).'), this.addAttribute(a, new O(b, c))); },
    getAttribute(a) { return this.attributes[a]; },
    setAttribute(a, b) { this.attributes[a] = b; return this; },
    removeAttribute(a) { delete this.attributes[a]; return this; },
    addGroup(a, b, c) { this.groups.push({ start: a, count: b, materialIndex: void 0 !== c ? c : 0 }); },
    clearGroups() { this.groups = []; },
    setDrawRange(a, b) { this.drawRange.start = a; this.drawRange.count = b; },
    applyMatrix(a) {
      let b = this.attributes.position; void 0 !== b && (a.applyToBufferAttribute(b), b.needsUpdate = !0); let c = this.attributes.normal; void 0 !== c && (b = (new Y()).getNormalMatrix(a),
      b.applyToBufferAttribute(c), c.needsUpdate = !0); c = this.attributes.tangent; void 0 !== c && (b = (new Y()).getNormalMatrix(a), b.applyToBufferAttribute(c), c.needsUpdate = !0); this.boundingBox !== null && this.computeBoundingBox(); this.boundingSphere !== null && this.computeBoundingSphere(); return this;
    },
    rotateX(a) { kb.makeRotationX(a); this.applyMatrix(kb); return this; },
    rotateY(a) { kb.makeRotationY(a); this.applyMatrix(kb); return this; },
    rotateZ(a) { kb.makeRotationZ(a); this.applyMatrix(kb); return this; },
    translate(a, b, c) { kb.makeTranslation(a, b, c); this.applyMatrix(kb); return this; },
    scale(a, b, c) { kb.makeScale(a, b, c); this.applyMatrix(kb); return this; },
    lookAt(a) { Vg.lookAt(a); Vg.updateMatrix(); this.applyMatrix(Vg.matrix); return this; },
    center() { this.computeBoundingBox(); this.boundingBox.getCenter(xf).negate(); this.translate(xf.x, xf.y, xf.z); return this; },
    setFromObject(a) {
      const b = a.geometry; if (a.isPoints || a.isLine) {
        a = new A(3 * b.vertices.length, 3); const c = new A(3 * b.colors.length,
          3); this.addAttribute('position', a.copyVector3sArray(b.vertices)); this.addAttribute('color', c.copyColorsArray(b.colors)); b.lineDistances && b.lineDistances.length === b.vertices.length && (a = new A(b.lineDistances.length, 1), this.addAttribute('lineDistance', a.copyArray(b.lineDistances))); b.boundingSphere !== null && (this.boundingSphere = b.boundingSphere.clone()); b.boundingBox !== null && (this.boundingBox = b.boundingBox.clone());
      } else a.isMesh && b && b.isGeometry && this.fromGeometry(b); return this;
    },
    setFromPoints(a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) { const e = a[c]; b.push(e.x, e.y, e.z || 0); } this.addAttribute('position', new A(b, 3)); return this;
    },
    updateFromObject(a) {
      let b = a.geometry; if (a.isMesh) {
        var c = b.__directGeometry; !0 === b.elementsNeedUpdate && (c = void 0, b.elementsNeedUpdate = !1); if (void 0 === c) return this.fromGeometry(b); c.verticesNeedUpdate = b.verticesNeedUpdate; c.normalsNeedUpdate = b.normalsNeedUpdate; c.colorsNeedUpdate = b.colorsNeedUpdate; c.uvsNeedUpdate = b.uvsNeedUpdate; c.groupsNeedUpdate = b.groupsNeedUpdate; b.verticesNeedUpdate = !1; b.normalsNeedUpdate = !1; b.colorsNeedUpdate = !1; b.uvsNeedUpdate = !1; b.groupsNeedUpdate = !1; b = c;
      }!0 === b.verticesNeedUpdate && (c = this.attributes.position, void 0 !== c && (c.copyVector3sArray(b.vertices), c.needsUpdate = !0), b.verticesNeedUpdate = !1); !0 === b.normalsNeedUpdate && (c = this.attributes.normal, void 0 !== c && (c.copyVector3sArray(b.normals), c.needsUpdate = !0), b.normalsNeedUpdate = !1); !0 === b.colorsNeedUpdate && (c = this.attributes.color, void 0 !== c && (c.copyColorsArray(b.colors), c.needsUpdate = !0), b.colorsNeedUpdate = !1); b.uvsNeedUpdate && (c = this.attributes.uv, void 0 !== c && (c.copyVector2sArray(b.uvs), c.needsUpdate = !0), b.uvsNeedUpdate = !1); b.lineDistancesNeedUpdate && (c = this.attributes.lineDistance, void 0 !== c && (c.copyArray(b.lineDistances), c.needsUpdate = !0), b.lineDistancesNeedUpdate = !1); b.groupsNeedUpdate && (b.computeGroups(a.geometry), this.groups = b.groups, b.groupsNeedUpdate = !1); return this;
    },
    fromGeometry(a) { a.__directGeometry = (new jh()).fromGeometry(a); return this.fromDirectGeometry(a.__directGeometry); },
    fromDirectGeometry(a) {
      let b = new Float32Array(3 * a.vertices.length); this.addAttribute('position', (new O(b, 3)).copyVector3sArray(a.vertices)); a.normals.length > 0 && (b = new Float32Array(3 * a.normals.length), this.addAttribute('normal', (new O(b, 3)).copyVector3sArray(a.normals))); a.colors.length > 0 && (b = new Float32Array(3 * a.colors.length), this.addAttribute('color', (new O(b, 3)).copyColorsArray(a.colors))); a.uvs.length > 0 && (b = new Float32Array(2 * a.uvs.length), this.addAttribute('uv', (new O(b, 2)).copyVector2sArray(a.uvs))); a.uvs2.length > 0 && (b = new Float32Array(2 * a.uvs2.length), this.addAttribute('uv2', (new O(b, 2)).copyVector2sArray(a.uvs2))); this.groups = a.groups; for (var c in a.morphTargets) { b = []; for (let d = a.morphTargets[c], e = 0, f = d.length; e < f; e++) { const g = d[e]; const h = new A(3 * g.data.length, 3); h.name = g.name; b.push(h.copyVector3sArray(g.data)); } this.morphAttributes[c] = b; }a.skinIndices.length > 0 && (c = new A(4 * a.skinIndices.length, 4), this.addAttribute('skinIndex', c.copyVector4sArray(a.skinIndices))); a.skinWeights.length > 0 && (c = new A(4 * a.skinWeights.length,
        4), this.addAttribute('skinWeight', c.copyVector4sArray(a.skinWeights))); a.boundingSphere !== null && (this.boundingSphere = a.boundingSphere.clone()); a.boundingBox !== null && (this.boundingBox = a.boundingBox.clone()); return this;
    },
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new ab()); let a = this.attributes.position; const b = this.morphAttributes.position; if (void 0 !== a) {
        if (this.boundingBox.setFromBufferAttribute(a), b) {
          a = 0; for (let c = b.length; a < c; a++) {
            sc.setFromBufferAttribute(b[a]), this.boundingBox.expandByPoint(sc.min),
            this.boundingBox.expandByPoint(sc.max);
          }
        }
      } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    },
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new nb()); let a = this.attributes.position; const b = this.morphAttributes.position; if (a) {
        const c = this.boundingSphere.center;
        sc.setFromBufferAttribute(a); if (b) for (var d = 0, e = b.length; d < e; d++) { var f = b[d]; Wg.setFromBufferAttribute(f); sc.expandByPoint(Wg.min); sc.expandByPoint(Wg.max); }sc.getCenter(c); let g = 0; d = 0; for (e = a.count; d < e; d++)Za.fromBufferAttribute(a, d), g = Math.max(g, c.distanceToSquared(Za)); if (b) for (d = 0, e = b.length; d < e; d++) { f = b[d]; a = 0; for (let h = f.count; a < h; a++)Za.fromBufferAttribute(f, a), g = Math.max(g, c.distanceToSquared(Za)); } this.boundingSphere.radius = Math.sqrt(g); isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
          this);
      }
    },
    computeFaceNormals() {},
    computeVertexNormals() {
      let a = this.index; const b = this.attributes; if (b.position) {
        const c = b.position.array; if (void 0 === b.normal) this.addAttribute('normal', new O(new Float32Array(c.length), 3)); else for (var d = b.normal.array, e = 0, f = d.length; e < f; e++)d[e] = 0; d = b.normal.array; const g = new n(); const h = new n(); const l = new n(); const m = new n(); const
          k = new n(); if (a) {
          const u = a.array; e = 0; for (f = a.count; e < f; e += 3) {
            a = 3 * u[e + 0]; const t = 3 * u[e + 1]; const r = 3 * u[e + 2]; g.fromArray(c, a); h.fromArray(c, t); l.fromArray(c, r); m.subVectors(l,
              h); k.subVectors(g, h); m.cross(k); d[a] += m.x; d[a + 1] += m.y; d[a + 2] += m.z; d[t] += m.x; d[t + 1] += m.y; d[t + 2] += m.z; d[r] += m.x; d[r + 1] += m.y; d[r + 2] += m.z;
          }
        } else for (e = 0, f = c.length; e < f; e += 9)g.fromArray(c, e), h.fromArray(c, e + 3), l.fromArray(c, e + 6), m.subVectors(l, h), k.subVectors(g, h), m.cross(k), d[e] = m.x, d[e + 1] = m.y, d[e + 2] = m.z, d[e + 3] = m.x, d[e + 4] = m.y, d[e + 5] = m.z, d[e + 6] = m.x, d[e + 7] = m.y, d[e + 8] = m.z; this.normalizeNormals(); b.normal.needsUpdate = !0;
      }
    },
    merge(a, b) {
      if (a && a.isBufferGeometry) {
        void 0 === b && (b = 0, console.warn('THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.'));
        const c = this.attributes; let d; for (d in c) if (void 0 !== a.attributes[d]) { const e = c[d].array; let f = a.attributes[d]; const g = f.array; let h = f.itemSize * b; f = Math.min(g.length, e.length - h); for (let l = 0; l < f; l++, h++)e[h] = g[l]; } return this;
      }console.error('THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.', a);
    },
    normalizeNormals() { for (let a = this.attributes.normal, b = 0, c = a.count; b < c; b++)Za.x = a.getX(b), Za.y = a.getY(b), Za.z = a.getZ(b), Za.normalize(), a.setXYZ(b, Za.x, Za.y, Za.z); },
    toNonIndexed() {
      function a(a,
        b) { const c = a.array; a = a.itemSize; for (var d = new c.constructor(b.length * a), e, f = 0, g = 0, h = b.length; g < h; g++) { e = b[g] * a; for (let l = 0; l < a; l++)d[f++] = c[e++]; } return new O(d, a); } if (this.index === null) return console.warn('THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.'), this; const b = new E(); let c = this.index.array; let d = this.attributes; let
        e; for (e in d) { var f = d[e]; f = a(f, c); b.addAttribute(e, f); } const g = this.morphAttributes; for (e in g) {
        const h = []; const l = g[e]; d = 0; for (let m = l.length; d < m; d++)f = l[d], f = a(f, c), h.push(f); b.morphAttributes[e] = h;
      }c = this.groups; d = 0; for (e = c.length; d < e; d++)f = c[d], b.addGroup(f.start, f.count, f.materialIndex); return b;
    },
    toJSON() {
      const a = { metadata: { version: 4.5, type: 'BufferGeometry', generator: 'BufferGeometry.toJSON' } }; a.uuid = this.uuid; a.type = this.type; this.name !== '' && (a.name = this.name); Object.keys(this.userData).length > 0 && (a.userData = this.userData); if (void 0 !== this.parameters) { var b = this.parameters; for (m in b) void 0 !== b[m] && (a[m] = b[m]); return a; }a.data = { attributes: {} }; b = this.index; b !== null && (a.data.index = {
        type: b.array.constructor.name,
        array: Array.prototype.slice.call(b.array),
      }); let c = this.attributes; for (m in c) { b = c[m]; var d = b.toJSON(); b.name !== '' && (d.name = b.name); a.data.attributes[m] = d; }c = {}; let e = !1; for (m in this.morphAttributes) { for (var f = this.morphAttributes[m], g = [], h = 0, l = f.length; h < l; h++)b = f[h], d = b.toJSON(), b.name !== '' && (d.name = b.name), g.push(d); g.length > 0 && (c[m] = g, e = !0); }e && (a.data.morphAttributes = c); var m = this.groups; m.length > 0 && (a.data.groups = JSON.parse(JSON.stringify(m))); m = this.boundingSphere; m !== null && (a.data.boundingSphere = { center: m.center.toArray(), radius: m.radius }); return a;
    },
    clone() { return (new E()).copy(this); },
    copy(a) {
      let b; this.index = null; this.attributes = {}; this.morphAttributes = {}; this.groups = []; this.boundingSphere = this.boundingBox = null; this.name = a.name; let c = a.index; c !== null && this.setIndex(c.clone()); c = a.attributes; for (g in c) this.addAttribute(g, c[g].clone()); let d = a.morphAttributes; for (g in d) { const e = []; const f = d[g]; c = 0; for (b = f.length; c < b; c++)e.push(f[c].clone()); this.morphAttributes[g] = e; } var g = a.groups;
      c = 0; for (b = g.length; c < b; c++)d = g[c], this.addGroup(d.start, d.count, d.materialIndex); g = a.boundingBox; g !== null && (this.boundingBox = g.clone()); g = a.boundingSphere; g !== null && (this.boundingSphere = g.clone()); this.drawRange.start = a.drawRange.start; this.drawRange.count = a.drawRange.count; this.userData = a.userData; return this;
    },
    dispose() { this.dispatchEvent({ type: 'dispose' }); },
  }); const ti = new U(); const tc = new Sb(); const Xg = new nb(); var Vb = new n(); var Wb = new n(); var Xb = new n(); var mh = new n(); var nh = new n(); var oh = new n(); var Uf = new n(); var Vf = new n(); var Wf = new n(); var Ac = new w(); var Bc = new w();
  var Cc = new w(); var Dd = new n(); var
    Ee = new n(); ja.prototype = Object.assign(Object.create(B.prototype), {
    constructor: ja,
    isMesh: !0,
    setDrawMode(a) { this.drawMode = a; },
    copy(a) { B.prototype.copy.call(this, a); this.drawMode = a.drawMode; void 0 !== a.morphTargetInfluences && (this.morphTargetInfluences = a.morphTargetInfluences.slice()); void 0 !== a.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, a.morphTargetDictionary)); return this; },
    updateMorphTargets() {
      let a = this.geometry; if (a.isBufferGeometry) {
        a = a.morphAttributes; let b = Object.keys(a); if (b.length > 0) { const c = a[b[0]]; if (void 0 !== c) for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = c.length; a < b; a++) { const d = c[a].name || String(a); this.morphTargetInfluences.push(0); this.morphTargetDictionary[d] = a; } }
      } else a = a.morphTargets, void 0 !== a && a.length > 0 && console.error('THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.');
    },
    raycast(a, b) {
      let c = this.geometry; const d = this.material; let e = this.matrixWorld;
      if (void 0 !== d && (c.boundingSphere === null && c.computeBoundingSphere(), Xg.copy(c.boundingSphere), Xg.applyMatrix4(e), !1 !== a.ray.intersectsSphere(Xg) && (ti.getInverse(e), tc.copy(a.ray).applyMatrix4(ti), c.boundingBox === null || !1 !== tc.intersectsBox(c.boundingBox)))) {
        if (c.isBufferGeometry) {
          var f = c.index; e = c.attributes.position; var g = c.morphAttributes.position; var h = c.attributes.uv; var l = c.attributes.uv2; var m = c.groups; var k = c.drawRange; var n; let t; if (f !== null) {
            if (Array.isArray(d)) {
              var r = 0; for (n = m.length; r < n; r++) {
                var p = m[r]; var v = d[p.materialIndex];
                var x = Math.max(p.start, k.start); for (t = c = Math.min(p.start + p.count, k.start + k.count); x < t; x += 3) { c = f.getX(x); var z = f.getX(x + 1); var y = f.getX(x + 2); if (c = Fe(this, v, a, tc, e, g, h, l, c, z, y))c.faceIndex = Math.floor(x / 3), c.face.materialIndex = p.materialIndex, b.push(c); }
              }
            } else for (x = Math.max(0, k.start), c = Math.min(f.count, k.start + k.count), r = x, n = c; r < n; r += 3) { if (c = f.getX(r), z = f.getX(r + 1), y = f.getX(r + 2), c = Fe(this, d, a, tc, e, g, h, l, c, z, y))c.faceIndex = Math.floor(r / 3), b.push(c); }
          } else if (void 0 !== e) {
            if (Array.isArray(d)) {
              for (r = 0, n = m.length; r
< n; r++) for (p = m[r], v = d[p.materialIndex], x = Math.max(p.start, k.start), t = c = Math.min(p.start + p.count, k.start + k.count); x < t; x += 3) { if (c = x, z = x + 1, y = x + 2, c = Fe(this, v, a, tc, e, g, h, l, c, z, y))c.faceIndex = Math.floor(x / 3), c.face.materialIndex = p.materialIndex, b.push(c); }
            } else for (x = Math.max(0, k.start), c = Math.min(e.count, k.start + k.count), r = x, n = c; r < n; r += 3) if (c = r, z = r + 1, y = r + 2, c = Fe(this, d, a, tc, e, g, h, l, c, z, y))c.faceIndex = Math.floor(r / 3), b.push(c);
          }
        } else if (c.isGeometry) {
          for (e = Array.isArray(d), g = c.vertices, h = c.faces, c = c.faceVertexUvs[0],
          c.length > 0 && (f = c), r = 0, n = h.length; r < n; r++) if (p = h[r], c = e ? d[p.materialIndex] : d, void 0 !== c && (l = g[p.a], m = g[p.b], k = g[p.c], c = lh(this, c, a, tc, l, m, k, Dd)))f && f[r] && (v = f[r], Ac.copy(v[0]), Bc.copy(v[1]), Cc.copy(v[2]), c.uv = R.getUV(Dd, l, m, k, Ac, Bc, Cc, new w())), c.face = p, c.faceIndex = r, b.push(c);
        }
      }
    },
    clone() { return (new this.constructor(this.geometry, this.material)).copy(this); },
  }); var Vi = 0; const lb = new U(); const Yg = new B(); const yf = new n(); F.prototype = Object.assign(Object.create(Ba.prototype), {
    constructor: F,
    isGeometry: !0,
    applyMatrix(a) {
      for (var b = (new Y()).getNormalMatrix(a), c = 0, d = this.vertices.length; c < d; c++) this.vertices[c].applyMatrix4(a); c = 0; for (d = this.faces.length; c < d; c++) { a = this.faces[c]; a.normal.applyMatrix3(b).normalize(); for (let e = 0, f = a.vertexNormals.length; e < f; e++)a.vertexNormals[e].applyMatrix3(b).normalize(); } this.boundingBox !== null && this.computeBoundingBox(); this.boundingSphere !== null && this.computeBoundingSphere(); this.normalsNeedUpdate = this.verticesNeedUpdate = !0; return this;
    },
    rotateX(a) {
      lb.makeRotationX(a); this.applyMatrix(lb);
      return this;
    },
    rotateY(a) { lb.makeRotationY(a); this.applyMatrix(lb); return this; },
    rotateZ(a) { lb.makeRotationZ(a); this.applyMatrix(lb); return this; },
    translate(a, b, c) { lb.makeTranslation(a, b, c); this.applyMatrix(lb); return this; },
    scale(a, b, c) { lb.makeScale(a, b, c); this.applyMatrix(lb); return this; },
    lookAt(a) { Yg.lookAt(a); Yg.updateMatrix(); this.applyMatrix(Yg.matrix); return this; },
    fromBufferGeometry(a) {
      function b(a, b, d, e) {
        const f = void 0 === h ? [] : [c.colors[a].clone(),
          c.colors[b].clone(), c.colors[d].clone()]; const k = void 0 === g ? [] : [(new n()).fromArray(g, 3 * a), (new n()).fromArray(g, 3 * b), (new n()).fromArray(g, 3 * d)]; e = new zc(a, b, d, k, f, e); c.faces.push(e); void 0 !== l && c.faceVertexUvs[0].push([(new w()).fromArray(l, 2 * a), (new w()).fromArray(l, 2 * b), (new w()).fromArray(l, 2 * d)]); void 0 !== m && c.faceVertexUvs[1].push([(new w()).fromArray(m, 2 * a), (new w()).fromArray(m, 2 * b), (new w()).fromArray(m, 2 * d)]);
      } var c = this; const d = a.index !== null ? a.index.array : void 0; let e = a.attributes; if (void 0 === e.position) {
        return console.error('THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion.'),
        this;
      } let f = e.position.array; var g = void 0 !== e.normal ? e.normal.array : void 0; var h = void 0 !== e.color ? e.color.array : void 0; var l = void 0 !== e.uv ? e.uv.array : void 0; var m = void 0 !== e.uv2 ? e.uv2.array : void 0; void 0 !== m && (this.faceVertexUvs[1] = []); for (e = 0; e < f.length; e += 3)c.vertices.push((new n()).fromArray(f, e)), void 0 !== h && c.colors.push((new H()).fromArray(h, e)); const k = a.groups; if (k.length > 0) for (e = 0; e < k.length; e++) { f = k[e]; let u = f.start; let t = u; for (u += f.count; t < u; t += 3) void 0 !== d ? b(d[t], d[t + 1], d[t + 2], f.materialIndex) : b(t, t + 1, t + 2, f.materialIndex); } else if (void 0
!== d) for (e = 0; e < d.length; e += 3)b(d[e], d[e + 1], d[e + 2]); else for (e = 0; e < f.length / 3; e += 3)b(e, e + 1, e + 2); this.computeFaceNormals(); a.boundingBox !== null && (this.boundingBox = a.boundingBox.clone()); a.boundingSphere !== null && (this.boundingSphere = a.boundingSphere.clone()); return this;
    },
    center() { this.computeBoundingBox(); this.boundingBox.getCenter(yf).negate(); this.translate(yf.x, yf.y, yf.z); return this; },
    normalize() {
      this.computeBoundingSphere(); const a = this.boundingSphere.center; let b = this.boundingSphere.radius;
      b = b === 0 ? 1 : 1 / b; const c = new U(); c.set(b, 0, 0, -b * a.x, 0, b, 0, -b * a.y, 0, 0, b, -b * a.z, 0, 0, 0, 1); this.applyMatrix(c); return this;
    },
    computeFaceNormals() { for (let a = new n(), b = new n(), c = 0, d = this.faces.length; c < d; c++) { const e = this.faces[c]; const f = this.vertices[e.a]; const g = this.vertices[e.b]; a.subVectors(this.vertices[e.c], g); b.subVectors(f, g); a.cross(b); a.normalize(); e.normal.copy(a); } },
    computeVertexNormals(a) {
      void 0 === a && (a = !0); let b; const c = Array(this.vertices.length); let d = 0; for (b = this.vertices.length; d < b; d++)c[d] = new n();
      if (a) {
        const e = new n(); const
          f = new n(); a = 0; for (d = this.faces.length; a < d; a++) { b = this.faces[a]; var g = this.vertices[b.a]; const h = this.vertices[b.b]; const l = this.vertices[b.c]; e.subVectors(l, h); f.subVectors(g, h); e.cross(f); c[b.a].add(e); c[b.b].add(e); c[b.c].add(e); }
      } else for (this.computeFaceNormals(), a = 0, d = this.faces.length; a < d; a++)b = this.faces[a], c[b.a].add(b.normal), c[b.b].add(b.normal), c[b.c].add(b.normal); d = 0; for (b = this.vertices.length; d < b; d++)c[d].normalize(); a = 0; for (d = this.faces.length; a < d; a++) {
        b = this.faces[a], g = b.vertexNormals,
        g.length === 3 ? (g[0].copy(c[b.a]), g[1].copy(c[b.b]), g[2].copy(c[b.c])) : (g[0] = c[b.a].clone(), g[1] = c[b.b].clone(), g[2] = c[b.c].clone());
      } this.faces.length > 0 && (this.normalsNeedUpdate = !0);
    },
    computeFlatVertexNormals() {
      let a; this.computeFaceNormals(); let b = 0; for (a = this.faces.length; b < a; b++) { const c = this.faces[b]; const d = c.vertexNormals; d.length === 3 ? (d[0].copy(c.normal), d[1].copy(c.normal), d[2].copy(c.normal)) : (d[0] = c.normal.clone(), d[1] = c.normal.clone(), d[2] = c.normal.clone()); } this.faces.length > 0 && (this.normalsNeedUpdate = !0);
    },
    computeMorphNormals() {
      let a; let b; let c = 0; for (b = this.faces.length; c < b; c++) { var d = this.faces[c]; d.__originalFaceNormal ? d.__originalFaceNormal.copy(d.normal) : d.__originalFaceNormal = d.normal.clone(); d.__originalVertexNormals || (d.__originalVertexNormals = []); var e = 0; for (a = d.vertexNormals.length; e < a; e++)d.__originalVertexNormals[e] ? d.__originalVertexNormals[e].copy(d.vertexNormals[e]) : d.__originalVertexNormals[e] = d.vertexNormals[e].clone(); } const f = new F(); f.faces = this.faces; e = 0; for (a = this.morphTargets.length; e
< a; e++) {
        if (!this.morphNormals[e]) { this.morphNormals[e] = {}; this.morphNormals[e].faceNormals = []; this.morphNormals[e].vertexNormals = []; d = this.morphNormals[e].faceNormals; var g = this.morphNormals[e].vertexNormals; c = 0; for (b = this.faces.length; c < b; c++) { var h = new n(); var l = { a: new n(), b: new n(), c: new n() }; d.push(h); g.push(l); } }g = this.morphNormals[e]; f.vertices = this.morphTargets[e].vertices; f.computeFaceNormals(); f.computeVertexNormals(); c = 0; for (b = this.faces.length; c < b; c++) {
          d = this.faces[c], h = g.faceNormals[c], l = g.vertexNormals[c],
          h.copy(d.normal), l.a.copy(d.vertexNormals[0]), l.b.copy(d.vertexNormals[1]), l.c.copy(d.vertexNormals[2]);
        }
      }c = 0; for (b = this.faces.length; c < b; c++)d = this.faces[c], d.normal = d.__originalFaceNormal, d.vertexNormals = d.__originalVertexNormals;
    },
    computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new ab()); this.boundingBox.setFromPoints(this.vertices); },
    computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new nb()); this.boundingSphere.setFromPoints(this.vertices); },
    merge(a,
      b, c) {
      if (a && a.isGeometry) {
        let d; let e = this.vertices.length; let f = this.vertices; let g = a.vertices; let h = this.faces; let l = a.faces; let m = this.colors; let k = a.colors; void 0 === c && (c = 0); void 0 !== b && (d = (new Y()).getNormalMatrix(b)); for (var n = 0, t = g.length; n < t; n++) { var r = g[n].clone(); void 0 !== b && r.applyMatrix4(b); f.push(r); }n = 0; for (t = k.length; n < t; n++)m.push(k[n].clone()); n = 0; for (t = l.length; n < t; n++) {
          g = l[n]; const p = g.vertexNormals; k = g.vertexColors; m = new zc(g.a + e, g.b + e, g.c + e); m.normal.copy(g.normal); void 0 !== d && m.normal.applyMatrix3(d).normalize();
          b = 0; for (f = p.length; b < f; b++)r = p[b].clone(), void 0 !== d && r.applyMatrix3(d).normalize(), m.vertexNormals.push(r); m.color.copy(g.color); b = 0; for (f = k.length; b < f; b++)r = k[b], m.vertexColors.push(r.clone()); m.materialIndex = g.materialIndex + c; h.push(m);
        }n = 0; for (t = a.faceVertexUvs.length; n < t; n++) for (c = a.faceVertexUvs[n], void 0 === this.faceVertexUvs[n] && (this.faceVertexUvs[n] = []), b = 0, f = c.length; b < f; b++) { d = c[b]; e = []; h = 0; for (l = d.length; h < l; h++)e.push(d[h].clone()); this.faceVertexUvs[n].push(e); }
      } else {
        console.error('THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.',
          a);
      }
    },
    mergeMesh(a) { a && a.isMesh ? (a.matrixAutoUpdate && a.updateMatrix(), this.merge(a.geometry, a.matrix)) : console.error('THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.', a); },
    mergeVertices() {
      let a = {}; const b = []; let c = []; let d = Math.pow(10, 4); let e; let f = 0; for (e = this.vertices.length; f < e; f++) { var g = this.vertices[f]; g = `${Math.round(g.x * d)}_${Math.round(g.y * d)}_${Math.round(g.z * d)}`; void 0 === a[g] ? (a[g] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[g]]; }a = []; f = 0; for (e = this.faces.length; f < e; f++) { for (d = this.faces[f], d.a = c[d.a], d.b = c[d.b], d.c = c[d.c], d = [d.a, d.b, d.c], g = 0; g < 3; g++) if (d[g] === d[(g + 1) % 3]) { a.push(f); break; } } for (f = a.length - 1; f >= 0; f--) for (d = a[f], this.faces.splice(d, 1), c = 0, e = this.faceVertexUvs.length; c < e; c++) this.faceVertexUvs[c].splice(d, 1); f = this.vertices.length - b.length; this.vertices = b; return f;
    },
    setFromPoints(a) { this.vertices = []; for (let b = 0, c = a.length; b < c; b++) { const d = a[b]; this.vertices.push(new n(d.x, d.y, d.z || 0)); } return this; },
    sortFacesByMaterialIndex() {
      for (var a = this.faces,
        b = a.length, c = 0; c < b; c++)a[c]._id = c; a.sort((a, b) => a.materialIndex - b.materialIndex); const d = this.faceVertexUvs[0]; const e = this.faceVertexUvs[1]; let f; let g; d && d.length === b && (f = []); e && e.length === b && (g = []); for (c = 0; c < b; c++) { const h = a[c]._id; f && f.push(d[h]); g && g.push(e[h]); }f && (this.faceVertexUvs[0] = f); g && (this.faceVertexUvs[1] = g);
    },
    toJSON() {
      function a(a, b, c) { return c ? a | 1 << b : a & ~(1 << b); } function b(a) {
        const b = a.x.toString() + a.y.toString() + a.z.toString(); if (void 0 !== k[b]) return k[b]; k[b] = l.length / 3; l.push(a.x,
          a.y, a.z); return k[b];
      } function c(a) { const b = a.r.toString() + a.g.toString() + a.b.toString(); if (void 0 !== u[b]) return u[b]; u[b] = n.length; n.push(a.getHex()); return u[b]; } function d(a) { const b = a.x.toString() + a.y.toString(); if (void 0 !== r[b]) return r[b]; r[b] = t.length / 2; t.push(a.x, a.y); return r[b]; } const e = { metadata: { version: 4.5, type: 'Geometry', generator: 'Geometry.toJSON' } }; e.uuid = this.uuid; e.type = this.type; this.name !== '' && (e.name = this.name); if (void 0 !== this.parameters) {
        var f = this.parameters; var g; for (g in f) {
          void 0 !== f[g]
&& (e[g] = f[g]);
        } return e;
      }f = []; for (g = 0; g < this.vertices.length; g++) { var h = this.vertices[g]; f.push(h.x, h.y, h.z); }h = []; var l = []; var k = {}; var n = []; var u = {}; var t = []; var r = {}; for (g = 0; g < this.faces.length; g++) {
        let p = this.faces[g]; let v = void 0 !== this.faceVertexUvs[0][g]; let x = p.normal.length() > 0; const z = p.vertexNormals.length > 0; const y = p.color.r !== 1 || p.color.g !== 1 || p.color.b !== 1; const w = p.vertexColors.length > 0; let A = 0; A = a(A, 0, 0); A = a(A, 1, !0); A = a(A, 2, !1); A = a(A, 3, v); A = a(A, 4, x); A = a(A, 5, z); A = a(A, 6, y); A = a(A, 7, w); h.push(A); h.push(p.a, p.b, p.c); h.push(p.materialIndex);
        v && (v = this.faceVertexUvs[0][g], h.push(d(v[0]), d(v[1]), d(v[2]))); x && h.push(b(p.normal)); z && (x = p.vertexNormals, h.push(b(x[0]), b(x[1]), b(x[2]))); y && h.push(c(p.color)); w && (p = p.vertexColors, h.push(c(p[0]), c(p[1]), c(p[2])));
      }e.data = {}; e.data.vertices = f; e.data.normals = l; n.length > 0 && (e.data.colors = n); t.length > 0 && (e.data.uvs = [t]); e.data.faces = h; return e;
    },
    clone() { return (new F()).copy(this); },
    copy(a) {
      let b; let c; let d; this.vertices = []; this.colors = []; this.faces = []; this.faceVertexUvs = [[]]; this.morphTargets = []; this.morphNormals = []; this.skinWeights = []; this.skinIndices = []; this.lineDistances = []; this.boundingSphere = this.boundingBox = null; this.name = a.name; let e = a.vertices; let f = 0; for (b = e.length; f < b; f++) this.vertices.push(e[f].clone()); e = a.colors; f = 0; for (b = e.length; f < b; f++) this.colors.push(e[f].clone()); e = a.faces; f = 0; for (b = e.length; f < b; f++) this.faces.push(e[f].clone()); f = 0; for (b = a.faceVertexUvs.length; f < b; f++) {
        var g = a.faceVertexUvs[f]; void 0 === this.faceVertexUvs[f] && (this.faceVertexUvs[f] = []); e = 0; for (c = g.length; e
< c; e++) { var h = g[e]; const l = []; var k = 0; for (d = h.length; k < d; k++)l.push(h[k].clone()); this.faceVertexUvs[f].push(l); }
      }k = a.morphTargets; f = 0; for (b = k.length; f < b; f++) { d = {}; d.name = k[f].name; if (void 0 !== k[f].vertices) for (d.vertices = [], e = 0, c = k[f].vertices.length; e < c; e++)d.vertices.push(k[f].vertices[e].clone()); if (void 0 !== k[f].normals) for (d.normals = [], e = 0, c = k[f].normals.length; e < c; e++)d.normals.push(k[f].normals[e].clone()); this.morphTargets.push(d); }k = a.morphNormals; f = 0; for (b = k.length; f < b; f++) {
        d = {}; if (void 0 !== k[f].vertexNormals) { for (d.vertexNormals = [], e = 0, c = k[f].vertexNormals.length; e < c; e++)g = k[f].vertexNormals[e], h = {}, h.a = g.a.clone(), h.b = g.b.clone(), h.c = g.c.clone(), d.vertexNormals.push(h); } if (void 0 !== k[f].faceNormals) for (d.faceNormals = [], e = 0, c = k[f].faceNormals.length; e < c; e++)d.faceNormals.push(k[f].faceNormals[e].clone()); this.morphNormals.push(d);
      }e = a.skinWeights; f = 0; for (b = e.length; f < b; f++) this.skinWeights.push(e[f].clone()); e = a.skinIndices; f = 0; for (b = e.length; f < b; f++) this.skinIndices.push(e[f].clone()); e = a.lineDistances; f = 0; for (b = e.length; f
< b; f++) this.lineDistances.push(e[f]); f = a.boundingBox; f !== null && (this.boundingBox = f.clone()); f = a.boundingSphere; f !== null && (this.boundingSphere = f.clone()); this.elementsNeedUpdate = a.elementsNeedUpdate; this.verticesNeedUpdate = a.verticesNeedUpdate; this.uvsNeedUpdate = a.uvsNeedUpdate; this.normalsNeedUpdate = a.normalsNeedUpdate; this.colorsNeedUpdate = a.colorsNeedUpdate; this.lineDistancesNeedUpdate = a.lineDistancesNeedUpdate; this.groupsNeedUpdate = a.groupsNeedUpdate; return this;
    },
    dispose() { this.dispatchEvent({ type: 'dispose' }); },
  });
  const Zg = (function (a) {
    function b(b, d, e, f, g, h) {
      a.call(this); this.type = 'BoxGeometry'; this.parameters = {
        width: b, height: d, depth: e, widthSegments: f, heightSegments: g, depthSegments: h,
      }; this.fromBufferGeometry(new Gd(b, d, e, f, g, h)); this.mergeVertices();
    }a && (b.__proto__ = a); b.prototype = Object.create(a && a.prototype); return b.prototype.constructor = b;
  }(F)); var Gd = (function (a) {
    function b(b, d, e, f, g, h) {
      function c(a, b, c, d, e, f, g, h, l, m, w) {
        const x = f / l; const z = g / m; const y = f / 2; const A = g / 2; const C = h / 2; g = l + 1; const B = m + 1; let E = f = 0; let D; let F; const G = new n(); for (F = 0; F < B; F++) {
          const H = F
* z - A; for (D = 0; D < g; D++)G[a] = (D * x - y) * d, G[b] = H * e, G[c] = C, u.push(G.x, G.y, G.z), G[a] = 0, G[b] = 0, G[c] = h > 0 ? 1 : -1, t.push(G.x, G.y, G.z), r.push(D / l), r.push(1 - F / m), f += 1;
        } for (F = 0; F < m; F++) for (D = 0; D < l; D++)a = p + D + g * (F + 1), b = p + (D + 1) + g * (F + 1), c = p + (D + 1) + g * F, q.push(p + D + g * F, a, c), q.push(a, b, c), E += 6; k.addGroup(v, E, w); v += E; p += f;
      }a.call(this); this.type = 'BoxBufferGeometry'; this.parameters = {
        width: b, height: d, depth: e, widthSegments: f, heightSegments: g, depthSegments: h,
      }; var k = this; b = b || 1; d = d || 1; e = e || 1; f = Math.floor(f) || 1; g = Math.floor(g) || 1; h = Math.floor(h) || 1; var q = []; var u = []; var t = []; var r = []; var p = 0; var v = 0; c('z', 'y', 'x', -1, -1, e, d, b, h, g, 0); c('z', 'y', 'x', 1, -1, e, d, -b, h, g, 1); c('x', 'z', 'y', 1, 1, b, e, d, f, h, 2); c('x', 'z', 'y', 1, -1, b, e, -d, f, h, 3); c('x', 'y', 'z', 1, -1, b, d, e, f, g, 4); c('x', 'y', 'z', -1, -1, b, d, -e, f, g, 5); this.setIndex(q); this.addAttribute('position', new A(u, 3)); this.addAttribute('normal', new A(t, 3)); this.addAttribute('uv', new A(r, 2));
    }a && (b.__proto__ = a); b.prototype = Object.create(a && a.prototype); return b.prototype.constructor = b;
  }(E)); const Ak = { clone: Yb, merge: Da }; ma.prototype = Object.create(M.prototype); ma.prototype.constructor = ma; ma.prototype.isShaderMaterial = !0; ma.prototype.copy = function (a) {
    M.prototype.copy.call(this, a); this.fragmentShader = a.fragmentShader; this.vertexShader = a.vertexShader; this.uniforms = Yb(a.uniforms); this.defines = Object.assign({}, a.defines); this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.lights = a.lights; this.clipping = a.clipping; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; this.extensions = a.extensions; return this;
  }; ma.prototype.toJSON = function (a) {
    const b = M.prototype.toJSON.call(this, a); b.uniforms = {}; for (const c in this.uniforms) { const d = this.uniforms[c].value; b.uniforms[c] = d && d.isTexture ? { type: 't', value: d.toJSON(a).uuid } : d && d.isColor ? { type: 'c', value: d.getHex() } : d && d.isVector2 ? { type: 'v2', value: d.toArray() } : d && d.isVector3 ? { type: 'v3', value: d.toArray() } : d && d.isVector4 ? { type: 'v4', value: d.toArray() } : d && d.isMatrix3 ? { type: 'm3', value: d.toArray() } : d && d.isMatrix4 ? { type: 'm4', value: d.toArray() } : { value: d }; }Object.keys(this.defines).length
> 0 && (b.defines = this.defines); b.vertexShader = this.vertexShader; b.fragmentShader = this.fragmentShader; a = {}; for (const e in this.extensions)!0 === this.extensions[e] && (a[e] = !0); Object.keys(a).length > 0 && (b.extensions = a); return b;
  }; bb.prototype = Object.assign(Object.create(B.prototype), {
    constructor: bb,
    isCamera: !0,
    copy(a, b) {
      B.prototype.copy.call(this, a, b); this.matrixWorldInverse.copy(a.matrixWorldInverse); this.projectionMatrix.copy(a.projectionMatrix); this.projectionMatrixInverse.copy(a.projectionMatrixInverse);
      return this;
    },
    getWorldDirection(a) { void 0 === a && (console.warn('THREE.Camera: .getWorldDirection() target is now required'), a = new n()); this.updateMatrixWorld(!0); const b = this.matrixWorld.elements; return a.set(-b[8], -b[9], -b[10]).normalize(); },
    updateMatrixWorld(a) { B.prototype.updateMatrixWorld.call(this, a); this.matrixWorldInverse.getInverse(this.matrixWorld); },
    clone() { return (new this.constructor()).copy(this); },
  }); na.prototype = Object.assign(Object.create(bb.prototype), {
    constructor: na,
    isPerspectiveCamera: !0,
    copy(a, b) { bb.prototype.copy.call(this, a, b); this.fov = a.fov; this.zoom = a.zoom; this.near = a.near; this.far = a.far; this.focus = a.focus; this.aspect = a.aspect; this.view = a.view === null ? null : Object.assign({}, a.view); this.filmGauge = a.filmGauge; this.filmOffset = a.filmOffset; return this; },
    setFocalLength(a) { a = 0.5 * this.getFilmHeight() / a; this.fov = 2 * L.RAD2DEG * Math.atan(a); this.updateProjectionMatrix(); },
    getFocalLength() {
      const a = Math.tan(0.5 * L.DEG2RAD * this.fov); return 0.5 * this.getFilmHeight()
/ a;
    },
    getEffectiveFOV() { return 2 * L.RAD2DEG * Math.atan(Math.tan(0.5 * L.DEG2RAD * this.fov) / this.zoom); },
    getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1); },
    getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1); },
    setViewOffset(a, b, c, d, e, f) {
      this.aspect = a / b; this.view === null && (this.view = {
        enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1,
      }); this.view.enabled = !0; this.view.fullWidth = a; this.view.fullHeight = b; this.view.offsetX = c; this.view.offsetY = d; this.view.width = e; this.view.height = f; this.updateProjectionMatrix();
    },
    clearViewOffset() { this.view !== null && (this.view.enabled = !1); this.updateProjectionMatrix(); },
    updateProjectionMatrix() {
      const a = this.near; let b = a * Math.tan(0.5 * L.DEG2RAD * this.fov) / this.zoom; let c = 2 * b; let d = this.aspect * c; let e = -0.5 * d; let f = this.view; if (this.view !== null && this.view.enabled) { const g = f.fullWidth; const h = f.fullHeight; e += f.offsetX * d / g; b -= f.offsetY * c / h; d *= f.width / g; c *= f.height / h; }f = this.filmOffset; f !== 0 && (e += a * f / this.getFilmWidth()); this.projectionMatrix.makePerspective(e,
        e + d, b, b - c, a, this.far); this.projectionMatrixInverse.getInverse(this.projectionMatrix);
    },
    toJSON(a) { a = B.prototype.toJSON.call(this, a); a.object.fov = this.fov; a.object.zoom = this.zoom; a.object.near = this.near; a.object.far = this.far; a.object.focus = this.focus; a.object.aspect = this.aspect; this.view !== null && (a.object.view = Object.assign({}, this.view)); a.object.filmGauge = this.filmGauge; a.object.filmOffset = this.filmOffset; return a; },
  }); Dc.prototype = Object.create(B.prototype); Dc.prototype.constructor = Dc; Ab.prototype = Object.create(la.prototype); Ab.prototype.constructor = Ab; Ab.prototype.isWebGLRenderTargetCube = !0; Ab.prototype.fromEquirectangularTexture = function (a, b) {
    this.texture.type = b.type; this.texture.format = b.format; this.texture.encoding = b.encoding; const c = new wd(); let
      d = new ma({
        type: 'CubemapFromEquirect',
        uniforms: Yb({ tEquirect: { value: null } }),
        vertexShader: 'varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}',
        fragmentShader: 'uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}',
        side: 1,
        blending: 0,
      }); d.uniforms.tEquirect.value = b; b = new ja(new Gd(5,
      5, 5), d); c.add(b); d = new Dc(1, 10, 1); d.renderTarget = this; d.renderTarget.texture.name = 'CubeCameraTexture'; d.update(a, c); b.geometry.dispose(); b.material.dispose(); return this;
  }; Zb.prototype = Object.create(W.prototype); Zb.prototype.constructor = Zb; Zb.prototype.isDataTexture = !0; const $g = new n(); const Bk = new n(); const
    Ck = new Y(); Object.assign(cb.prototype, {
    isPlane: !0,
    set(a, b) { this.normal.copy(a); this.constant = b; return this; },
    setComponents(a, b, c, d) { this.normal.set(a, b, c); this.constant = d; return this; },
    setFromNormalAndCoplanarPoint(a,
      b) { this.normal.copy(a); this.constant = -b.dot(this.normal); return this; },
    setFromCoplanarPoints(a, b, c) { b = $g.subVectors(c, b).cross(Bk.subVectors(a, b)).normalize(); this.setFromNormalAndCoplanarPoint(b, a); return this; },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) { this.normal.copy(a.normal); this.constant = a.constant; return this; },
    normalize() { const a = 1 / this.normal.length(); this.normal.multiplyScalar(a); this.constant *= a; return this; },
    negate() {
      this.constant
*= -1; this.normal.negate(); return this;
    },
    distanceToPoint(a) { return this.normal.dot(a) + this.constant; },
    distanceToSphere(a) { return this.distanceToPoint(a.center) - a.radius; },
    projectPoint(a, b) { void 0 === b && (console.warn('THREE.Plane: .projectPoint() target is now required'), b = new n()); return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a); },
    intersectLine(a, b) {
      void 0 === b && (console.warn('THREE.Plane: .intersectLine() target is now required'), b = new n()); const c = a.delta($g); let d = this.normal.dot(c); if (d === 0) { if (this.distanceToPoint(a.start) === 0) return b.copy(a.start); } else if (d = -(a.start.dot(this.normal) + this.constant) / d, !(d < 0 || d > 1)) return b.copy(c).multiplyScalar(d).add(a.start);
    },
    intersectsLine(a) { const b = this.distanceToPoint(a.start); a = this.distanceToPoint(a.end); return b < 0 && a > 0 || a < 0 && b > 0; },
    intersectsBox(a) { return a.intersectsPlane(this); },
    intersectsSphere(a) { return a.intersectsPlane(this); },
    coplanarPoint(a) {
      void 0 === a && (console.warn('THREE.Plane: .coplanarPoint() target is now required'),
      a = new n()); return a.copy(this.normal).multiplyScalar(-this.constant);
    },
    applyMatrix4(a, b) { b = b || Ck.getNormalMatrix(a); a = this.coplanarPoint($g).applyMatrix4(a); b = this.normal.applyMatrix3(b).normalize(); this.constant = -a.dot(b); return this; },
    translate(a) { this.constant -= a.dot(this.normal); return this; },
    equals(a) { return a.normal.equals(this.normal) && a.constant === this.constant; },
  }); const td = new nb(); const
    zf = new n(); Object.assign(Ed.prototype, {
    set(a, b, c, d, e, f) {
      const g = this.planes; g[0].copy(a);
      g[1].copy(b); g[2].copy(c); g[3].copy(d); g[4].copy(e); g[5].copy(f); return this;
    },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) { for (let b = this.planes, c = 0; c < 6; c++)b[c].copy(a.planes[c]); return this; },
    setFromMatrix(a) {
      const b = this.planes; let c = a.elements; a = c[0]; const d = c[1]; const e = c[2]; const f = c[3]; const g = c[4]; const h = c[5]; const l = c[6]; const k = c[7]; const n = c[8]; const u = c[9]; const t = c[10]; const r = c[11]; const p = c[12]; const v = c[13]; const x = c[14]; c = c[15]; b[0].setComponents(f - a, k - g, r - n, c - p).normalize(); b[1].setComponents(f + a, k + g, r + n, c + p).normalize(); b[2].setComponents(f
+ d, k + h, r + u, c + v).normalize(); b[3].setComponents(f - d, k - h, r - u, c - v).normalize(); b[4].setComponents(f - e, k - l, r - t, c - x).normalize(); b[5].setComponents(f + e, k + l, r + t, c + x).normalize(); return this;
    },
    intersectsObject(a) { const b = a.geometry; b.boundingSphere === null && b.computeBoundingSphere(); td.copy(b.boundingSphere).applyMatrix4(a.matrixWorld); return this.intersectsSphere(td); },
    intersectsSprite(a) { td.center.set(0, 0, 0); td.radius = 0.7071067811865476; td.applyMatrix4(a.matrixWorld); return this.intersectsSphere(td); },
    intersectsSphere(a) { const b = this.planes; const c = a.center; a = -a.radius; for (let d = 0; d < 6; d++) if (b[d].distanceToPoint(c) < a) return !1; return !0; },
    intersectsBox(a) { for (let b = this.planes, c = 0; c < 6; c++) { const d = b[c]; zf.x = d.normal.x > 0 ? a.max.x : a.min.x; zf.y = d.normal.y > 0 ? a.max.y : a.min.y; zf.z = d.normal.z > 0 ? a.max.z : a.min.z; if (d.distanceToPoint(zf) < 0) return !1; } return !0; },
    containsPoint(a) { for (let b = this.planes, c = 0; c < 6; c++) if (b[c].distanceToPoint(a) < 0) return !1; return !0; },
  }); var N = {
    alphamap_fragment: '#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif',
    alphamap_pars_fragment: '#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif',
    alphatest_fragment: '#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif',
    aomap_fragment: '#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif',
    aomap_pars_fragment: '#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif',
    begin_vertex: 'vec3 transformed = vec3( position );',
    beginnormal_vertex: 'vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif',
    bsdfs: 'vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif',
    bumpmap_pars_fragment: '#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif',
    clipping_planes_fragment: '#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif',
    clipping_planes_pars_fragment: '#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif',
    clipping_planes_pars_vertex: '#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif',
    clipping_planes_vertex: '#if NUM_CLIPPING_PLANES > 0 && ! defined( STANDARD ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif',
    color_fragment: '#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif',
    color_pars_fragment: '#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif',
    color_pars_vertex: '#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif',
    color_vertex: '#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif',
    common: '#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}',
    cube_uv_reflection_fragment: '#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif',
    defaultnormal_vertex: 'vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\ttransformedNormal = mat3( instanceMatrix ) * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif',
    displacementmap_pars_vertex: '#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif',
    displacementmap_vertex: '#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif',
    emissivemap_fragment: '#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif',
    emissivemap_pars_fragment: '#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif',
    encodings_fragment: 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
    encodings_pars_fragment: '\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}',
    envmap_fragment: '#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif',
    envmap_common_pars_fragment: '#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif',
    envmap_pars_fragment: '#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif',
    envmap_pars_vertex: '#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif',
    envmap_physical_pars_fragment: '#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif',
    envmap_vertex: '#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif',
    fog_vertex: '#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif',
    fog_pars_vertex: '#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif',
    fog_fragment: '#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif',
    fog_pars_fragment: '#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif',
    gradientmap_pars_fragment: '#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif',
    lightmap_fragment: '#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif',
    lightmap_pars_fragment: '#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif',
    lights_lambert_vertex: 'vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif',
    lights_pars_begin: 'uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif',
    lights_phong_fragment: 'BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;',
    lights_phong_pars_fragment: 'varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)',
    lights_physical_fragment: 'PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = saturate( clearcoat );\tmaterial.clearcoatRoughness = clamp( clearcoatRoughness, 0.04, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif',
    lights_physical_pars_fragment: 'struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}',
    lights_fragment_begin: '\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( pointLight.shadow, directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( spotLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif',
    lights_fragment_maps: '#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif',
    lights_fragment_end: '#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif',
    logdepthbuf_fragment: '#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 1.0 ? log2( vFragDepth ) * logDepthBufFC * 0.5 : gl_FragCoord.z;\n#endif',
    logdepthbuf_pars_fragment: '#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif',
    logdepthbuf_pars_vertex: '#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif',
    logdepthbuf_vertex: '#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif',
    map_fragment: '#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif',
    map_pars_fragment: '#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif',
    map_particle_fragment: '#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif',
    map_particle_pars_fragment: '#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif',
    metalnessmap_fragment: 'float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif',
    metalnessmap_pars_fragment: '#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif',
    morphnormal_vertex: '#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif',
    morphtarget_pars_vertex: '#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif',
    morphtarget_vertex: '#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif',
    normal_fragment_begin: '#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;',
    normal_fragment_maps: '#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, normalScale, normalMap );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif',
    normalmap_pars_fragment: '#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 normalScale, in sampler2D normalMap ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy *= normalScale;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tbool frontFacing = dot( cross( S, T ), N ) > 0.0;\n\t\t\tmapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );\n\t\t#else\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif',
    clearcoat_normal_fragment_begin: '#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif',
    clearcoat_normal_fragment_maps: '#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = clearcoatNormalScale * mapN.xy;\n\t\tclearcoatNormal = normalize( vTBN * mapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatNormalScale, clearcoatNormalMap );\n\t#endif\n#endif',
    clearcoat_normalmap_pars_fragment: '#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif',
    packing: 'vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 encodeHalfRGBA ( vec2 v ) {\n\tvec4 encoded = vec4( 0.0 );\n\tconst vec2 offset = vec2( 1.0 / 255.0, 0.0 );\n\tencoded.xy = vec2( v.x, fract( v.x * 255.0 ) );\n\tencoded.xy = encoded.xy - ( encoded.yy * offset );\n\tencoded.zw = vec2( v.y, fract( v.y * 255.0 ) );\n\tencoded.zw = encoded.zw - ( encoded.ww * offset );\n\treturn encoded;\n}\nvec2 decodeHalfRGBA( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}',
    premultiplied_alpha_fragment: '#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif',
    project_vertex: 'vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;',
    dithering_fragment: '#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif',
    dithering_pars_fragment: '#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif',
    roughnessmap_fragment: 'float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif',
    roughnessmap_pars_fragment: '#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif',
    shadowmap_pars_fragment: '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn decodeHalfRGBA( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = ( floor( uv * size - 0.5 ) + 0.5 ) * texelSize;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif',
    shadowmap_pars_vertex: '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif',
    shadowmap_vertex: '#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif',
    shadowmask_pars_fragment: 'float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= all( bvec2( directionalLight.shadow, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= all( bvec2( spotLight.shadow, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= all( bvec2( pointLight.shadow, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}',
    skinbase_vertex: '#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif',
    skinning_pars_vertex: '#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif',
    skinning_vertex: '#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif',
    skinnormal_vertex: '#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif',
    specularmap_fragment: 'float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif',
    specularmap_pars_fragment: '#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif',
    tonemapping_fragment: '#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif',
    tonemapping_pars_fragment: '#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}',
    uv_pars_fragment: '#ifdef USE_UV\n\tvarying vec2 vUv;\n#endif',
    uv_pars_vertex: '#ifdef USE_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif',
    uv_vertex: '#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif',
    uv2_pars_fragment: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif',
    uv2_pars_vertex: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif',
    uv2_vertex: '#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif',
    worldpos_vertex: '#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif',
    background_frag: 'uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
    background_vert: 'varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}',
    cube_frag: 'uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
    cube_vert: 'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}',
    depth_frag: '#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}',
    depth_vert: '#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}',
    distanceRGBA_frag: '#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}',
    distanceRGBA_vert: '#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}',
    equirect_frag: 'uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
    equirect_vert: 'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}',
    linedashed_frag: 'uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
    linedashed_vert: 'uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}',
    meshbasic_frag: 'uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
    meshbasic_vert: '#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}',
    meshlambert_frag: 'uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
    meshlambert_vert: '#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
    meshmatcap_frag: '#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
    meshmatcap_vert: '#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}',
    meshphong_frag: '#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
    meshphong_vert: '#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
    meshphysical_frag: '#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
    meshphysical_vert: '#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
    normal_frag: '#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}',
    normal_vert: '#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}',
    points_frag: 'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
    points_vert: 'uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}',
    shadow_frag: 'uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}',
    shadow_vert: '#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
    sprite_frag: 'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
    sprite_vert: 'uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}',
  };
  var I = {
    common: {
      diffuse: { value: new H(15658734) }, opacity: { value: 1 }, map: { value: null }, uvTransform: { value: new Y() }, alphaMap: { value: null },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, refractionRatio: { value: 0.98 }, maxMipLevel: { value: 0 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new w(1, 1) },
    },
    displacementmap: { displacementMap: { value: null }, displacementScale: { value: 1 }, displacementBias: { value: 0 } },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 2.5E-4 }, fogNear: { value: 1 }, fogFar: { value: 2E3 }, fogColor: { value: new H(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: {
          direction: {},
          color: {},
          shadow: {},
          shadowBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {},
        },
      },
      spotShadowMap: { value: [] },
      spotShadowMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: {
          color: {}, position: {}, decay: {}, distance: {}, shadow: {}, shadowBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
      rectAreaLights: {
        value: [],
        properties: {
          color: {}, position: {}, width: {}, height: {},
        },
      },
    },
    points: {
      diffuse: { value: new H(15658734) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, uvTransform: { value: new Y() },
    },
    sprite: {
      diffuse: { value: new H(15658734) }, opacity: { value: 1 }, center: { value: new w(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, uvTransform: { value: new Y() },
    },
  }; var db = {
    basic: { uniforms: Da([I.common, I.specularmap, I.envmap, I.aomap, I.lightmap, I.fog]), vertexShader: N.meshbasic_vert, fragmentShader: N.meshbasic_frag },
    lambert: { uniforms: Da([I.common, I.specularmap, I.envmap, I.aomap, I.lightmap, I.emissivemap, I.fog, I.lights, { emissive: { value: new H(0) } }]), vertexShader: N.meshlambert_vert, fragmentShader: N.meshlambert_frag },
    phong: {
      uniforms: Da([I.common, I.specularmap, I.envmap, I.aomap, I.lightmap, I.emissivemap, I.bumpmap, I.normalmap, I.displacementmap, I.gradientmap, I.fog, I.lights, {
        emissive: { value: new H(0) },
        specular: { value: new H(1118481) },
        shininess: { value: 30 },
      }]),
      vertexShader: N.meshphong_vert,
      fragmentShader: N.meshphong_frag,
    },
    standard: {
      uniforms: Da([I.common, I.envmap, I.aomap, I.lightmap, I.emissivemap, I.bumpmap, I.normalmap, I.displacementmap, I.roughnessmap, I.metalnessmap, I.fog, I.lights, {
        emissive: { value: new H(0) }, roughness: { value: 0.5 }, metalness: { value: 0.5 }, envMapIntensity: { value: 1 },
      }]),
      vertexShader: N.meshphysical_vert,
      fragmentShader: N.meshphysical_frag,
    },
    matcap: {
      uniforms: Da([I.common, I.bumpmap, I.normalmap, I.displacementmap,
        I.fog, { matcap: { value: null } }]),
      vertexShader: N.meshmatcap_vert,
      fragmentShader: N.meshmatcap_frag,
    },
    points: { uniforms: Da([I.points, I.fog]), vertexShader: N.points_vert, fragmentShader: N.points_frag },
    dashed: { uniforms: Da([I.common, I.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: N.linedashed_vert, fragmentShader: N.linedashed_frag },
    depth: { uniforms: Da([I.common, I.displacementmap]), vertexShader: N.depth_vert, fragmentShader: N.depth_frag },
    normal: {
      uniforms: Da([I.common, I.bumpmap, I.normalmap,
        I.displacementmap, { opacity: { value: 1 } }]),
      vertexShader: N.normal_vert,
      fragmentShader: N.normal_frag,
    },
    sprite: { uniforms: Da([I.sprite, I.fog]), vertexShader: N.sprite_vert, fragmentShader: N.sprite_frag },
    background: { uniforms: { uvTransform: { value: new Y() }, t2D: { value: null } }, vertexShader: N.background_vert, fragmentShader: N.background_frag },
    cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: N.cube_vert, fragmentShader: N.cube_frag },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: N.equirect_vert,
      fragmentShader: N.equirect_frag,
    },
    distanceRGBA: { uniforms: Da([I.common, I.displacementmap, { referencePosition: { value: new n() }, nearDistance: { value: 1 }, farDistance: { value: 1E3 } }]), vertexShader: N.distanceRGBA_vert, fragmentShader: N.distanceRGBA_frag },
    shadow: { uniforms: Da([I.lights, I.fog, { color: { value: new H(0) }, opacity: { value: 1 } }]), vertexShader: N.shadow_vert, fragmentShader: N.shadow_frag },
  }; db.physical = {
    uniforms: Da([db.standard.uniforms, {
      transparency: { value: 0 },
      clearcoat: { value: 0 },
      clearcoatRoughness: { value: 0 },
      sheen: { value: new H(0) },
      clearcoatNormalScale: { value: new w(1, 1) },
      clearcoatNormalMap: { value: null },
    }]),
    vertexShader: N.meshphysical_vert,
    fragmentShader: N.meshphysical_frag,
  }; Fd.prototype = Object.create(F.prototype); Fd.prototype.constructor = Fd; $b.prototype = Object.create(E.prototype); $b.prototype.constructor = $b; ob.prototype = Object.create(W.prototype); ob.prototype.constructor = ob; ob.prototype.isCubeTexture = !0; Object.defineProperty(ob.prototype, 'images', { get() { return this.image; }, set(a) { this.image = a; } }); Ec.prototype = Object.create(W.prototype); Ec.prototype.constructor = Ec; Ec.prototype.isDataTexture2DArray = !0; Fc.prototype = Object.create(W.prototype); Fc.prototype.constructor = Fc; Fc.prototype.isDataTexture3D = !0; var vh = new W(); var qj = new Ec(); var sj = new Fc(); var wh = new ob(); var ph = []; var rh = []; var uh = new Float32Array(16); var th = new Float32Array(9); var
    sh = new Float32Array(4); xh.prototype.updateCache = function (a) { const b = this.cache; a instanceof Float32Array && b.length !== a.length && (this.cache = new Float32Array(a.length)); Ha(b, a); }; yh.prototype.setValue = function (a,
    b, c) { for (let d = this.seq, e = 0, f = d.length; e !== f; ++e) { const g = d[e]; g.setValue(a, b[g.id], c); } }; var Yf = /([\w\d_]+)(\])?(\[|\.)?/g; Bb.prototype.setValue = function (a, b, c, d) { b = this.map[b]; void 0 !== b && b.setValue(a, c, d); }; Bb.prototype.setOptional = function (a, b, c) { b = b[c]; void 0 !== b && this.setValue(a, c, b); }; Bb.upload = function (a, b, c, d) { for (let e = 0, f = b.length; e !== f; ++e) { const g = b[e]; const h = c[g.id]; !1 !== h.needsUpdate && g.setValue(a, h.value, d); } }; Bb.seqWithValue = function (a, b) {
    for (var c = [], d = 0, e = a.length; d !== e; ++d) {
      const f = a[d]; f.id
in b && c.push(f);
    } return c;
  }; var Xj = 0; var $f = /^[ \t]*#include +<([\w\d./]+)>/gm; var Gh = /#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g; var gk = 0; Db.prototype = Object.create(M.prototype); Db.prototype.constructor = Db; Db.prototype.isMeshDepthMaterial = !0; Db.prototype.copy = function (a) {
    M.prototype.copy.call(this, a); this.depthPacking = a.depthPacking; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.map = a.map; this.alphaMap = a.alphaMap; this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; return this;
  }; Eb.prototype = Object.create(M.prototype); Eb.prototype.constructor = Eb; Eb.prototype.isMeshDistanceMaterial = !0; Eb.prototype.copy = function (a) {
    M.prototype.copy.call(this, a); this.referencePosition.copy(a.referencePosition); this.nearDistance = a.nearDistance; this.farDistance = a.farDistance; this.skinning = a.skinning; this.morphTargets = a.morphTargets;
    this.map = a.map; this.alphaMap = a.alphaMap; this.displacementMap = a.displacementMap; this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias; return this;
  }; fg.prototype = Object.assign(Object.create(la.prototype), {
    constructor: fg, isWebGLMultiviewRenderTarget: !0, copy(a) { la.prototype.copy.call(this, a); this.numViews = a.numViews; return this; }, setNumViews(a) { this.numViews !== a && (this.numViews = a, this.dispose()); return this; },
  }); Hc.prototype = Object.assign(Object.create(B.prototype),
    { constructor: Hc, isGroup: !0 }); Jd.prototype = Object.assign(Object.create(na.prototype), { constructor: Jd, isArrayCamera: !0 }); var Mh = new n(); var
    Nh = new n(); Object.assign(gg.prototype, Ba.prototype); Object.assign(Oh.prototype, Ba.prototype); Object.assign(Ie.prototype, { isFogExp2: !0, clone() { return new Ie(this.color, this.density); }, toJSON() { return { type: 'FogExp2', color: this.color.getHex(), density: this.density }; } }); Object.assign(Je.prototype, {
    isFog: !0,
    clone() {
      return new Je(this.color, this.near,
        this.far);
    },
    toJSON() {
      return {
        type: 'Fog', color: this.color.getHex(), near: this.near, far: this.far,
      };
    },
  }); Object.defineProperty(Gb.prototype, 'needsUpdate', { set(a) { !0 === a && this.version++; } }); Object.assign(Gb.prototype, {
    isInterleavedBuffer: !0,
    onUploadCallback() {},
    setDynamic(a) { this.dynamic = a; return this; },
    copy(a) { this.array = new a.array.constructor(a.array); this.count = a.count; this.stride = a.stride; this.dynamic = a.dynamic; return this; },
    copyAt(a, b, c) {
      a *= this.stride;
      c *= b.stride; for (let d = 0, e = this.stride; d < e; d++) this.array[a + d] = b.array[c + d]; return this;
    },
    set(a, b) { void 0 === b && (b = 0); this.array.set(a, b); return this; },
    clone() { return (new this.constructor()).copy(this); },
    onUpload(a) { this.onUploadCallback = a; return this; },
  }); Object.defineProperties(Kd.prototype, { count: { get() { return this.data.count; } }, array: { get() { return this.data.array; } } }); Object.assign(Kd.prototype, {
    isInterleavedBufferAttribute: !0,
    setX(a, b) {
      this.data.array[a
* this.data.stride + this.offset] = b; return this;
    },
    setY(a, b) { this.data.array[a * this.data.stride + this.offset + 1] = b; return this; },
    setZ(a, b) { this.data.array[a * this.data.stride + this.offset + 2] = b; return this; },
    setW(a, b) { this.data.array[a * this.data.stride + this.offset + 3] = b; return this; },
    getX(a) { return this.data.array[a * this.data.stride + this.offset]; },
    getY(a) { return this.data.array[a * this.data.stride + this.offset + 1]; },
    getZ(a) {
      return this.data.array[a * this.data.stride
+ this.offset + 2];
    },
    getW(a) { return this.data.array[a * this.data.stride + this.offset + 3]; },
    setXY(a, b, c) { a = a * this.data.stride + this.offset; this.data.array[a + 0] = b; this.data.array[a + 1] = c; return this; },
    setXYZ(a, b, c, d) { a = a * this.data.stride + this.offset; this.data.array[a + 0] = b; this.data.array[a + 1] = c; this.data.array[a + 2] = d; return this; },
    setXYZW(a, b, c, d, e) { a = a * this.data.stride + this.offset; this.data.array[a + 0] = b; this.data.array[a + 1] = c; this.data.array[a + 2] = d; this.data.array[a + 3] = e; return this; },
  });
  Hb.prototype = Object.create(M.prototype); Hb.prototype.constructor = Hb; Hb.prototype.isSpriteMaterial = !0; Hb.prototype.copy = function (a) { M.prototype.copy.call(this, a); this.color.copy(a.color); this.map = a.map; this.rotation = a.rotation; this.sizeAttenuation = a.sizeAttenuation; return this; }; let Ic; const ze = new n(); const ud = new n(); const vd = new n(); var Jc = new w(); var Md = new w(); var Qh = new U(); const Af = new n(); const Ae = new n(); const Bf = new n(); const ui = new w(); const ah = new w(); const vi = new w(); Ld.prototype = Object.assign(Object.create(B.prototype), {
    constructor: Ld,
    isSprite: !0,
    raycast(a, b) {
      a.camera
=== null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'); ud.setFromMatrixScale(this.matrixWorld); Qh.copy(a.camera.matrixWorld); this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse, this.matrixWorld); vd.setFromMatrixPosition(this.modelViewMatrix); a.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && ud.multiplyScalar(-vd.z); let c = this.material.rotation; if (c !== 0) { var d = Math.cos(c); var e = Math.sin(c); }c = this.center; Ke(Af.set(-0.5,
        -0.5, 0), vd, c, ud, e, d); Ke(Ae.set(0.5, -0.5, 0), vd, c, ud, e, d); Ke(Bf.set(0.5, 0.5, 0), vd, c, ud, e, d); ui.set(0, 0); ah.set(1, 0); vi.set(1, 1); let f = a.ray.intersectTriangle(Af, Ae, Bf, !1, ze); if (f === null && (Ke(Ae.set(-0.5, 0.5, 0), vd, c, ud, e, d), ah.set(0, 1), f = a.ray.intersectTriangle(Af, Bf, Ae, !1, ze), f === null)) return; e = a.ray.origin.distanceTo(ze); e < a.near || e > a.far || b.push({
        distance: e, point: ze.clone(), uv: R.getUV(ze, Af, Ae, Bf, ui, ah, vi, new w()), face: null, object: this,
      });
    },
    clone() { return (new this.constructor(this.material)).copy(this); },
    copy(a) { B.prototype.copy.call(this, a); void 0 !== a.center && this.center.copy(a.center); return this; },
  }); const Cf = new n(); const
    wi = new n(); Nd.prototype = Object.assign(Object.create(B.prototype), {
    constructor: Nd,
    isLOD: !0,
    copy(a) { B.prototype.copy.call(this, a, !1); a = a.levels; for (let b = 0, c = a.length; b < c; b++) { const d = a[b]; this.addLevel(d.object.clone(), d.distance); } return this; },
    addLevel(a, b) {
      void 0 === b && (b = 0); b = Math.abs(b); for (var c = this.levels, d = 0; d < c.length && !(b < c[d].distance); d++);c.splice(d, 0, {
        distance: b,
        object: a,
      }); this.add(a); return this;
    },
    getObjectForDistance(a) { for (var b = this.levels, c = 1, d = b.length; c < d && !(a < b[c].distance); c++);return b[c - 1].object; },
    raycast(a, b) { Cf.setFromMatrixPosition(this.matrixWorld); const c = a.ray.origin.distanceTo(Cf); this.getObjectForDistance(c).raycast(a, b); },
    update(a) {
      const b = this.levels; if (b.length > 1) {
        Cf.setFromMatrixPosition(a.matrixWorld); wi.setFromMatrixPosition(this.matrixWorld); a = Cf.distanceTo(wi); b[0].object.visible = !0; for (var c = 1, d = b.length; c
< d; c++) if (a >= b[c].distance)b[c - 1].object.visible = !1, b[c].object.visible = !0; else break; for (;c < d; c++)b[c].object.visible = !1;
      }
    },
    toJSON(a) { a = B.prototype.toJSON.call(this, a); a.object.levels = []; for (let b = this.levels, c = 0, d = b.length; c < d; c++) { const e = b[c]; a.object.levels.push({ object: e.object.uuid, distance: e.distance }); } return a; },
  }); Od.prototype = Object.assign(Object.create(ja.prototype), {
    constructor: Od,
    isSkinnedMesh: !0,
    bind(a, b) {
      this.skeleton = a; void 0 === b && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(),
      b = this.matrixWorld); this.bindMatrix.copy(b); this.bindMatrixInverse.getInverse(b);
    },
    pose() { this.skeleton.pose(); },
    normalizeSkinWeights() { for (let a = new aa(), b = this.geometry.attributes.skinWeight, c = 0, d = b.count; c < d; c++) { a.x = b.getX(c); a.y = b.getY(c); a.z = b.getZ(c); a.w = b.getW(c); const e = 1 / a.manhattanLength(); Infinity !== e ? a.multiplyScalar(e) : a.set(1, 0, 0, 0); b.setXYZW(c, a.x, a.y, a.z, a.w); } },
    updateMatrixWorld(a) {
      ja.prototype.updateMatrixWorld.call(this, a); this.bindMode === 'attached' ? this.bindMatrixInverse.getInverse(this.matrixWorld)
        : this.bindMode === 'detached' ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn(`THREE.SkinnedMesh: Unrecognized bindMode: ${this.bindMode}`);
    },
    clone() { return (new this.constructor(this.geometry, this.material)).copy(this); },
  }); const xi = new U(); const
    Dk = new U(); Object.assign(Le.prototype, {
    calculateInverses() { this.boneInverses = []; for (let a = 0, b = this.bones.length; a < b; a++) { const c = new U(); this.bones[a] && c.getInverse(this.bones[a].matrixWorld); this.boneInverses.push(c); } },
    pose() {
      let a; let b;
      let c = 0; for (b = this.bones.length; c < b; c++)(a = this.bones[c]) && a.matrixWorld.getInverse(this.boneInverses[c]); c = 0; for (b = this.bones.length; c < b; c++) if (a = this.bones[c])a.parent && a.parent.isBone ? (a.matrix.getInverse(a.parent.matrixWorld), a.matrix.multiply(a.matrixWorld)) : a.matrix.copy(a.matrixWorld), a.matrix.decompose(a.position, a.quaternion, a.scale);
    },
    update() {
      for (var a = this.bones, b = this.boneInverses, c = this.boneMatrices, d = this.boneTexture, e = 0, f = a.length; e < f; e++) {
        xi.multiplyMatrices(a[e] ? a[e].matrixWorld
          : Dk, b[e]), xi.toArray(c, 16 * e);
      } void 0 !== d && (d.needsUpdate = !0);
    },
    clone() { return new Le(this.bones, this.boneInverses); },
    getBoneByName(a) { for (let b = 0, c = this.bones.length; b < c; b++) { const d = this.bones[b]; if (d.name === a) return d; } },
  }); ig.prototype = Object.assign(Object.create(B.prototype), { constructor: ig, isBone: !0 }); jg.prototype = Object.assign(Object.create(ja.prototype), {
    constructor: jg, isInstancedMesh: !0, raycast() {}, setMatrixAt(a, b) { b.toArray(this.instanceMatrix.array, 16 * a); }, updateMorphTargets() {},
  });
  Q.prototype = Object.create(M.prototype); Q.prototype.constructor = Q; Q.prototype.isLineBasicMaterial = !0; Q.prototype.copy = function (a) { M.prototype.copy.call(this, a); this.color.copy(a.color); this.linewidth = a.linewidth; this.linecap = a.linecap; this.linejoin = a.linejoin; return this; }; const yi = new n(); const zi = new n(); const Ai = new U(); const Df = new Sb(); const
    Be = new nb(); xa.prototype = Object.assign(Object.create(B.prototype), {
    constructor: xa,
    isLine: !0,
    computeLineDistances() {
      const a = this.geometry; if (a.isBufferGeometry) {
        if (a.index === null) {
          for (var b = a.attributes.position, c = [0], d = 1, e = b.count; d < e; d++)yi.fromBufferAttribute(b, d - 1), zi.fromBufferAttribute(b, d), c[d] = c[d - 1], c[d] += yi.distanceTo(zi); a.addAttribute('lineDistance', new A(c, 1));
        } else console.warn('THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.');
      } else if (a.isGeometry) for (b = a.vertices, c = a.lineDistances, c[0] = 0, d = 1, e = b.length; d < e; d++)c[d] = c[d - 1], c[d] += b[d - 1].distanceTo(b[d]); return this;
    },
    raycast(a, b) {
      let c = a.linePrecision; let d = this.geometry;
      let e = this.matrixWorld; d.boundingSphere === null && d.computeBoundingSphere(); Be.copy(d.boundingSphere); Be.applyMatrix4(e); Be.radius += c; if (!1 !== a.ray.intersectsSphere(Be)) {
        Ai.getInverse(e); Df.copy(a.ray).applyMatrix4(Ai); c /= (this.scale.x + this.scale.y + this.scale.z) / 3; c *= c; let f = new n(); let
          g = new n(); e = new n(); const h = new n(); const
          l = this && this.isLineSegments ? 2 : 1; if (d.isBufferGeometry) {
          let k = d.index; const q = d.attributes.position.array; if (k !== null) {
            k = k.array; d = 0; for (var u = k.length - 1; d < u; d += l) {
              var t = k[d + 1]; f.fromArray(q, 3 * k[d]); g.fromArray(q,
                3 * t); t = Df.distanceSqToSegment(f, g, h, e); t > c || (h.applyMatrix4(this.matrixWorld), t = a.ray.origin.distanceTo(h), t < a.near || t > a.far || b.push({
                distance: t, point: e.clone().applyMatrix4(this.matrixWorld), index: d, face: null, faceIndex: null, object: this,
              }));
            }
          } else {
            for (d = 0, u = q.length / 3 - 1; d < u; d += l) {
              f.fromArray(q, 3 * d), g.fromArray(q, 3 * d + 3), t = Df.distanceSqToSegment(f, g, h, e), t > c || (h.applyMatrix4(this.matrixWorld), t = a.ray.origin.distanceTo(h), t < a.near || t > a.far || b.push({
                distance: t,
                point: e.clone().applyMatrix4(this.matrixWorld),
                index: d,
                face: null,
                faceIndex: null,
                object: this,
              }));
            }
          }
        } else if (d.isGeometry) {
          for (f = d.vertices, g = f.length, d = 0; d < g - 1; d += l) {
            t = Df.distanceSqToSegment(f[d], f[d + 1], h, e), t > c || (h.applyMatrix4(this.matrixWorld), t = a.ray.origin.distanceTo(h), t < a.near || t > a.far || b.push({
              distance: t, point: e.clone().applyMatrix4(this.matrixWorld), index: d, face: null, faceIndex: null, object: this,
            }));
          }
        }
      }
    },
    clone() { return (new this.constructor(this.geometry, this.material)).copy(this); },
  }); const Ef = new n(); const
    Ff = new n(); ca.prototype = Object.assign(Object.create(xa.prototype),
    {
      constructor: ca,
      isLineSegments: !0,
      computeLineDistances() {
        const a = this.geometry; if (a.isBufferGeometry) if (a.index === null) { for (var b = a.attributes.position, c = [], d = 0, e = b.count; d < e; d += 2)Ef.fromBufferAttribute(b, d), Ff.fromBufferAttribute(b, d + 1), c[d] = d === 0 ? 0 : c[d - 1], c[d + 1] = c[d] + Ef.distanceTo(Ff); a.addAttribute('lineDistance', new A(c, 1)); } else console.warn('THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'); else if (a.isGeometry) {
          for (b = a.vertices, c = a.lineDistances,
          d = 0, e = b.length; d < e; d += 2)Ef.copy(b[d]), Ff.copy(b[d + 1]), c[d] = d === 0 ? 0 : c[d - 1], c[d + 1] = c[d] + Ef.distanceTo(Ff);
        } return this;
      },
    }); Me.prototype = Object.assign(Object.create(xa.prototype), { constructor: Me, isLineLoop: !0 }); Qa.prototype = Object.create(M.prototype); Qa.prototype.constructor = Qa; Qa.prototype.isPointsMaterial = !0; Qa.prototype.copy = function (a) { M.prototype.copy.call(this, a); this.color.copy(a.color); this.map = a.map; this.size = a.size; this.sizeAttenuation = a.sizeAttenuation; this.morphTargets = a.morphTargets; return this; };
  const Bi = new U(); var lg = new Sb(); const Ce = new nb(); const
    Gf = new n(); Kc.prototype = Object.assign(Object.create(B.prototype), {
    constructor: Kc,
    isPoints: !0,
    raycast(a, b) {
      let c = this.geometry; const d = this.matrixWorld; let e = a.params.Points.threshold; c.boundingSphere === null && c.computeBoundingSphere(); Ce.copy(c.boundingSphere); Ce.applyMatrix4(d); Ce.radius += e; if (!1 !== a.ray.intersectsSphere(Ce)) {
        if (Bi.getInverse(d), lg.copy(a.ray).applyMatrix4(Bi), e /= (this.scale.x + this.scale.y + this.scale.z) / 3, e *= e, c.isBufferGeometry) {
          var f = c.index; c = c.attributes.position.array;
          if (f !== null) { var g = f.array; f = 0; for (let h = g.length; f < h; f++) { const l = g[f]; Gf.fromArray(c, 3 * l); kg(Gf, l, e, d, a, b, this); } } else for (f = 0, g = c.length / 3; f < g; f++)Gf.fromArray(c, 3 * f), kg(Gf, f, e, d, a, b, this);
        } else for (c = c.vertices, f = 0, g = c.length; f < g; f++)kg(c[f], f, e, d, a, b, this);
      }
    },
    updateMorphTargets() {
      let a = this.geometry; if (a.isBufferGeometry) {
        a = a.morphAttributes; let b = Object.keys(a); if (b.length > 0) {
          const c = a[b[0]]; if (void 0 !== c) {
            for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, a = 0, b = c.length; a < b; a++) {
              const d = c[a].name || String(a); this.morphTargetInfluences.push(0); this.morphTargetDictionary[d] = a;
            }
          }
        }
      } else a = a.morphTargets, void 0 !== a && a.length > 0 && console.error('THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.');
    },
    clone() { return (new this.constructor(this.geometry, this.material)).copy(this); },
  }); mg.prototype = Object.assign(Object.create(W.prototype), {
    constructor: mg,
    isVideoTexture: !0,
    update() {
      const a = this.image; a.readyState >= a.HAVE_CURRENT_DATA
&& (this.needsUpdate = !0);
    },
  }); Lc.prototype = Object.create(W.prototype); Lc.prototype.constructor = Lc; Lc.prototype.isCompressedTexture = !0; Pd.prototype = Object.create(W.prototype); Pd.prototype.constructor = Pd; Pd.prototype.isCanvasTexture = !0; Qd.prototype = Object.create(W.prototype); Qd.prototype.constructor = Qd; Qd.prototype.isDepthTexture = !0; Mc.prototype = Object.create(E.prototype); Mc.prototype.constructor = Mc; Rd.prototype = Object.create(F.prototype); Rd.prototype.constructor = Rd; Nc.prototype = Object.create(E.prototype);
  Nc.prototype.constructor = Nc; Sd.prototype = Object.create(F.prototype); Sd.prototype.constructor = Sd; Ca.prototype = Object.create(E.prototype); Ca.prototype.constructor = Ca; Td.prototype = Object.create(F.prototype); Td.prototype.constructor = Td; Oc.prototype = Object.create(Ca.prototype); Oc.prototype.constructor = Oc; Ud.prototype = Object.create(F.prototype); Ud.prototype.constructor = Ud; cc.prototype = Object.create(Ca.prototype); cc.prototype.constructor = cc; Vd.prototype = Object.create(F.prototype); Vd.prototype.constructor = Vd; Pc.prototype = Object.create(Ca.prototype); Pc.prototype.constructor = Pc; Wd.prototype = Object.create(F.prototype); Wd.prototype.constructor = Wd; Qc.prototype = Object.create(Ca.prototype); Qc.prototype.constructor = Qc; Xd.prototype = Object.create(F.prototype); Xd.prototype.constructor = Xd; dc.prototype = Object.create(E.prototype); dc.prototype.constructor = dc; dc.prototype.toJSON = function () { const a = E.prototype.toJSON.call(this); a.path = this.parameters.path.toJSON(); return a; }; Yd.prototype = Object.create(F.prototype); Yd.prototype.constructor = Yd; Rc.prototype = Object.create(E.prototype); Rc.prototype.constructor = Rc; Zd.prototype = Object.create(F.prototype); Zd.prototype.constructor = Zd; Sc.prototype = Object.create(E.prototype); Sc.prototype.constructor = Sc; const Ek = {
    triangulate(a, b, c) {
      c = c || 2; let d = b && b.length; const e = d ? b[0] * c : a.length; let f = Rh(a, 0, e, c, !0); const g = []; if (!f || f.next === f.prev) return g; let h; if (d) {
        var l = c; d = []; let k; var n = 0; for (k = b.length; n < k; n++) { let u = b[n] * l; const t = n < k - 1 ? b[n + 1] * l : a.length; u = Rh(a, u, t, l, !1); u === u.next && (u.steiner = !0); d.push(ok(u)); }d.sort(mk);
        for (n = 0; n < d.length; n++) { b = d[n]; l = f; if (l = nk(b, l))b = Uh(l, b), ae(b, b.next); f = ae(f, f.next); }
      } if (a.length > 80 * c) { var r = h = a[0]; var p = d = a[1]; for (l = c; l < e; l += c)n = a[l], b = a[l + 1], n < r && (r = n), b < p && (p = b), n > h && (h = n), b > d && (d = b); h = Math.max(h - r, d - p); h = h !== 0 ? 1 / h : 0; }be(f, g, c, r, p, h); return g;
    },
  }; var pb = {
    area(a) { for (var b = a.length, c = 0, d = b - 1, e = 0; e < b; d = e++)c += a[d].x * a[e].y - a[e].x * a[d].y; return 0.5 * c; },
    isClockWise(a) { return pb.area(a) < 0; },
    triangulateShape(a, b) {
      const c = []; const d = []; const e = []; Vh(a); Wh(c, a); let f = a.length; b.forEach(Vh);
      for (a = 0; a < b.length; a++)d.push(f), f += b[a].length, Wh(c, b[a]); b = Ek.triangulate(c, d); for (a = 0; a < b.length; a += 3)e.push(b.slice(a, a + 3)); return e;
    },
  }; fc.prototype = Object.create(F.prototype); fc.prototype.constructor = fc; fc.prototype.toJSON = function () { const a = F.prototype.toJSON.call(this); return Xh(this.parameters.shapes, this.parameters.options, a); }; eb.prototype = Object.create(E.prototype); eb.prototype.constructor = eb; eb.prototype.toJSON = function () {
    const a = E.prototype.toJSON.call(this); return Xh(this.parameters.shapes,
      this.parameters.options, a);
  }; var pk = { generateTopUV(a, b, c, d, e) { a = b[3 * d]; d = b[3 * d + 1]; const f = b[3 * e]; e = b[3 * e + 1]; return [new w(b[3 * c], b[3 * c + 1]), new w(a, d), new w(f, e)]; }, generateSideWallUV(a, b, c, d, e, f) { a = b[3 * c]; const g = b[3 * c + 1]; c = b[3 * c + 2]; const h = b[3 * d]; const l = b[3 * d + 1]; d = b[3 * d + 2]; const k = b[3 * e]; const n = b[3 * e + 1]; e = b[3 * e + 2]; const u = b[3 * f]; const t = b[3 * f + 1]; b = b[3 * f + 2]; return Math.abs(g - l) < 0.01 ? [new w(a, 1 - c), new w(h, 1 - d), new w(k, 1 - e), new w(u, 1 - b)] : [new w(g, 1 - c), new w(l, 1 - d), new w(n, 1 - e), new w(t, 1 - b)]; } }; de.prototype = Object.create(F.prototype);
  de.prototype.constructor = de; Uc.prototype = Object.create(eb.prototype); Uc.prototype.constructor = Uc; ee.prototype = Object.create(F.prototype); ee.prototype.constructor = ee; Ib.prototype = Object.create(E.prototype); Ib.prototype.constructor = Ib; fe.prototype = Object.create(F.prototype); fe.prototype.constructor = fe; Vc.prototype = Object.create(E.prototype); Vc.prototype.constructor = Vc; ge.prototype = Object.create(F.prototype); ge.prototype.constructor = ge; Wc.prototype = Object.create(E.prototype); Wc.prototype.constructor = Wc; gc.prototype = Object.create(F.prototype); gc.prototype.constructor = gc; gc.prototype.toJSON = function () { const a = F.prototype.toJSON.call(this); return Yh(this.parameters.shapes, a); }; hc.prototype = Object.create(E.prototype); hc.prototype.constructor = hc; hc.prototype.toJSON = function () { const a = E.prototype.toJSON.call(this); return Yh(this.parameters.shapes, a); }; Xc.prototype = Object.create(E.prototype); Xc.prototype.constructor = Xc; ic.prototype = Object.create(F.prototype); ic.prototype.constructor = ic; qb.prototype = Object.create(E.prototype);
  qb.prototype.constructor = qb; he.prototype = Object.create(ic.prototype); he.prototype.constructor = he; ie.prototype = Object.create(qb.prototype); ie.prototype.constructor = ie; je.prototype = Object.create(F.prototype); je.prototype.constructor = je; Yc.prototype = Object.create(E.prototype); Yc.prototype.constructor = Yc; const ta = Object.freeze({
    WireframeGeometry: Mc,
    ParametricGeometry: Rd,
    ParametricBufferGeometry: Nc,
    TetrahedronGeometry: Td,
    TetrahedronBufferGeometry: Oc,
    OctahedronGeometry: Ud,
    OctahedronBufferGeometry: cc,
    IcosahedronGeometry: Vd,
    IcosahedronBufferGeometry: Pc,
    DodecahedronGeometry: Wd,
    DodecahedronBufferGeometry: Qc,
    PolyhedronGeometry: Sd,
    PolyhedronBufferGeometry: Ca,
    TubeGeometry: Xd,
    TubeBufferGeometry: dc,
    TorusKnotGeometry: Yd,
    TorusKnotBufferGeometry: Rc,
    TorusGeometry: Zd,
    TorusBufferGeometry: Sc,
    TextGeometry: de,
    TextBufferGeometry: Uc,
    SphereGeometry: ee,
    SphereBufferGeometry: Ib,
    RingGeometry: fe,
    RingBufferGeometry: Vc,
    PlaneGeometry: Fd,
    PlaneBufferGeometry: $b,
    LatheGeometry: ge,
    LatheBufferGeometry: Wc,
    ShapeGeometry: gc,
    ShapeBufferGeometry: hc,
    ExtrudeGeometry: fc,
    ExtrudeBufferGeometry: eb,
    EdgesGeometry: Xc,
    ConeGeometry: he,
    ConeBufferGeometry: ie,
    CylinderGeometry: ic,
    CylinderBufferGeometry: qb,
    CircleGeometry: je,
    CircleBufferGeometry: Yc,
    BoxGeometry: Zg,
    BoxBufferGeometry: Gd,
  }); jc.prototype = Object.create(M.prototype); jc.prototype.constructor = jc; jc.prototype.isShadowMaterial = !0; jc.prototype.copy = function (a) { M.prototype.copy.call(this, a); this.color.copy(a.color); return this; }; Zc.prototype = Object.create(ma.prototype); Zc.prototype.constructor = Zc; Zc.prototype.isRawShaderMaterial = !0; fb.prototype = Object.create(M.prototype); fb.prototype.constructor = fb; fb.prototype.isMeshStandardMaterial = !0; fb.prototype.copy = function (a) {
    M.prototype.copy.call(this, a); this.defines = { STANDARD: '' }; this.color.copy(a.color); this.roughness = a.roughness; this.metalness = a.metalness; this.map = a.map; this.lightMap = a.lightMap; this.lightMapIntensity = a.lightMapIntensity; this.aoMap = a.aoMap; this.aoMapIntensity = a.aoMapIntensity; this.emissive.copy(a.emissive); this.emissiveMap = a.emissiveMap; this.emissiveIntensity = a.emissiveIntensity;
    this.bumpMap = a.bumpMap; this.bumpScale = a.bumpScale; this.normalMap = a.normalMap; this.normalMapType = a.normalMapType; this.normalScale.copy(a.normalScale); this.displacementMap = a.displacementMap; this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias; this.roughnessMap = a.roughnessMap; this.metalnessMap = a.metalnessMap; this.alphaMap = a.alphaMap; this.envMap = a.envMap; this.envMapIntensity = a.envMapIntensity; this.refractionRatio = a.refractionRatio; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.wireframeLinecap = a.wireframeLinecap; this.wireframeLinejoin = a.wireframeLinejoin; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; return this;
  }; kc.prototype = Object.create(fb.prototype); kc.prototype.constructor = kc; kc.prototype.isMeshPhysicalMaterial = !0; kc.prototype.copy = function (a) {
    fb.prototype.copy.call(this, a); this.defines = { STANDARD: '', PHYSICAL: '' }; this.reflectivity = a.reflectivity; this.clearcoat = a.clearcoat; this.clearcoatRoughness = a.clearcoatRoughness; this.sheen = a.sheen ? (this.sheen || new H()).copy(a.sheen) : null; this.clearcoatNormalMap = a.clearcoatNormalMap; this.clearcoatNormalScale.copy(a.clearcoatNormalScale); this.transparency = a.transparency; return this;
  }; Ra.prototype = Object.create(M.prototype); Ra.prototype.constructor = Ra; Ra.prototype.isMeshPhongMaterial = !0; Ra.prototype.copy = function (a) {
    M.prototype.copy.call(this, a); this.color.copy(a.color); this.specular.copy(a.specular); this.shininess = a.shininess; this.map = a.map; this.lightMap = a.lightMap; this.lightMapIntensity = a.lightMapIntensity; this.aoMap = a.aoMap; this.aoMapIntensity = a.aoMapIntensity; this.emissive.copy(a.emissive); this.emissiveMap = a.emissiveMap; this.emissiveIntensity = a.emissiveIntensity; this.bumpMap = a.bumpMap; this.bumpScale = a.bumpScale; this.normalMap = a.normalMap; this.normalMapType = a.normalMapType; this.normalScale.copy(a.normalScale); this.displacementMap = a.displacementMap; this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias; this.specularMap = a.specularMap; this.alphaMap = a.alphaMap; this.envMap = a.envMap; this.combine = a.combine; this.reflectivity = a.reflectivity; this.refractionRatio = a.refractionRatio; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.wireframeLinecap = a.wireframeLinecap; this.wireframeLinejoin = a.wireframeLinejoin; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; return this;
  }; lc.prototype = Object.create(Ra.prototype); lc.prototype.constructor = lc; lc.prototype.isMeshToonMaterial = !0; lc.prototype.copy = function (a) { Ra.prototype.copy.call(this, a); this.gradientMap = a.gradientMap; return this; }; mc.prototype = Object.create(M.prototype); mc.prototype.constructor = mc; mc.prototype.isMeshNormalMaterial = !0; mc.prototype.copy = function (a) {
    M.prototype.copy.call(this, a); this.bumpMap = a.bumpMap; this.bumpScale = a.bumpScale; this.normalMap = a.normalMap; this.normalMapType = a.normalMapType; this.normalScale.copy(a.normalScale); this.displacementMap = a.displacementMap; this.displacementScale = a.displacementScale;
    this.displacementBias = a.displacementBias; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; return this;
  }; nc.prototype = Object.create(M.prototype); nc.prototype.constructor = nc; nc.prototype.isMeshLambertMaterial = !0; nc.prototype.copy = function (a) {
    M.prototype.copy.call(this, a); this.color.copy(a.color); this.map = a.map; this.lightMap = a.lightMap; this.lightMapIntensity = a.lightMapIntensity; this.aoMap = a.aoMap; this.aoMapIntensity = a.aoMapIntensity; this.emissive.copy(a.emissive); this.emissiveMap = a.emissiveMap; this.emissiveIntensity = a.emissiveIntensity; this.specularMap = a.specularMap; this.alphaMap = a.alphaMap; this.envMap = a.envMap; this.combine = a.combine; this.reflectivity = a.reflectivity; this.refractionRatio = a.refractionRatio; this.wireframe = a.wireframe; this.wireframeLinewidth = a.wireframeLinewidth; this.wireframeLinecap = a.wireframeLinecap; this.wireframeLinejoin = a.wireframeLinejoin; this.skinning = a.skinning;
    this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; return this;
  }; oc.prototype = Object.create(M.prototype); oc.prototype.constructor = oc; oc.prototype.isMeshMatcapMaterial = !0; oc.prototype.copy = function (a) {
    M.prototype.copy.call(this, a); this.defines = { MATCAP: '' }; this.color.copy(a.color); this.matcap = a.matcap; this.map = a.map; this.bumpMap = a.bumpMap; this.bumpScale = a.bumpScale; this.normalMap = a.normalMap; this.normalMapType = a.normalMapType; this.normalScale.copy(a.normalScale); this.displacementMap = a.displacementMap;
    this.displacementScale = a.displacementScale; this.displacementBias = a.displacementBias; this.alphaMap = a.alphaMap; this.skinning = a.skinning; this.morphTargets = a.morphTargets; this.morphNormals = a.morphNormals; return this;
  }; pc.prototype = Object.create(Q.prototype); pc.prototype.constructor = pc; pc.prototype.isLineDashedMaterial = !0; pc.prototype.copy = function (a) { Q.prototype.copy.call(this, a); this.scale = a.scale; this.dashSize = a.dashSize; this.gapSize = a.gapSize; return this; }; const Fk = Object.freeze({
    ShadowMaterial: jc,
    SpriteMaterial: Hb,
    RawShaderMaterial: Zc,
    ShaderMaterial: ma,
    PointsMaterial: Qa,
    MeshPhysicalMaterial: kc,
    MeshStandardMaterial: fb,
    MeshPhongMaterial: Ra,
    MeshToonMaterial: lc,
    MeshNormalMaterial: mc,
    MeshLambertMaterial: nc,
    MeshDepthMaterial: Db,
    MeshDistanceMaterial: Eb,
    MeshBasicMaterial: Ga,
    MeshMatcapMaterial: oc,
    LineDashedMaterial: pc,
    LineBasicMaterial: Q,
    Material: M,
  }); var pa = {
    arraySlice(a, b, c) { return pa.isTypedArray(a) ? new a.constructor(a.subarray(b, void 0 !== c ? c : a.length)) : a.slice(b, c); },
    convertArray(a, b, c) {
      return !a || !c
&& a.constructor === b ? a : typeof b.BYTES_PER_ELEMENT === 'number' ? new b(a) : Array.prototype.slice.call(a);
    },
    isTypedArray(a) { return ArrayBuffer.isView(a) && !(a instanceof DataView); },
    getKeyframeOrder(a) { for (var b = a.length, c = Array(b), d = 0; d !== b; ++d)c[d] = d; c.sort((b, c) => a[b] - a[c]); return c; },
    sortedArray(a, b, c) { for (var d = a.length, e = new a.constructor(d), f = 0, g = 0; g !== d; ++f) for (let h = c[f] * b, l = 0; l !== b; ++l)e[g++] = a[h + l]; return e; },
    flattenJSON(a, b, c, d) {
      for (var e = 1, f = a[0]; void 0
!== f && void 0 === f[d];)f = a[e++]; if (void 0 !== f) { let g = f[d]; if (void 0 !== g) if (Array.isArray(g)) { do g = f[d], void 0 !== g && (b.push(f.time), c.push.apply(c, g)), f = a[e++]; while (void 0 !== f); } else if (void 0 !== g.toArray) { do g = f[d], void 0 !== g && (b.push(f.time), g.toArray(c, c.length)), f = a[e++]; while (void 0 !== f); } else { do g = f[d], void 0 !== g && (b.push(f.time), c.push(g)), f = a[e++]; while (void 0 !== f); } }
    },
  }; Object.assign(Ia.prototype, {
    evaluate(a) {
      const b = this.parameterPositions; let c = this._cachedIndex; let d = b[c]; let e = b[c - 1]; a: {
        b: {
          c: {
            d:if (!(a
< d)) { for (var f = c + 2; ;) { if (void 0 === d) { if (a < e) break d; this._cachedIndex = c = b.length; return this.afterEnd_(c - 1, a, e); } if (c === f) break; e = d; d = b[++c]; if (a < d) break b; }d = b.length; break c; } if (a >= e) break a; else { f = b[1]; a < f && (c = 2, e = f); for (f = c - 2; ;) { if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d); if (c === f) break; d = e; e = b[--c - 1]; if (a >= e) break b; }d = c; c = 0; }
          } for (;c < d;)e = c + d >>> 1, a < b[e] ? d = e : c = e + 1; d = b[c]; e = b[c - 1]; if (void 0 === e) return this._cachedIndex = 0, this.beforeStart_(0, a, d); if (void 0 === d) { return this._cachedIndex = c = b.length, this.afterEnd_(c - 1, e, a); }
        } this._cachedIndex = c; this.intervalChanged_(c, e, d);
      } return this.interpolate_(c, e, a, d);
    },
    settings: null,
    DefaultSettings_: {},
    getSettings_() { return this.settings || this.DefaultSettings_; },
    copySampleValue_(a) { const b = this.resultBuffer; const c = this.sampleValues; const d = this.valueSize; a *= d; for (let e = 0; e !== d; ++e)b[e] = c[a + e]; return b; },
    interpolate_() { throw Error('call to abstract method'); },
    intervalChanged_() {},
  }); Object.assign(Ia.prototype, {
    beforeStart_: Ia.prototype.copySampleValue_,
    afterEnd_: Ia.prototype.copySampleValue_,
  }); Ne.prototype = Object.assign(Object.create(Ia.prototype), {
    constructor: Ne,
    DefaultSettings_: { endingStart: 2400, endingEnd: 2400 },
    intervalChanged_(a, b, c) {
      let d = this.parameterPositions; let e = a - 2; let f = a + 1; let g = d[e]; let h = d[f]; if (void 0 === g) switch (this.getSettings_().endingStart) { case 2401: e = a; g = 2 * b - c; break; case 2402: e = d.length - 2; g = b + d[e] - d[e + 1]; break; default: e = a, g = c; } if (void 0 === h) {
        switch (this.getSettings_().endingEnd) {
          case 2401: f = a; h = 2 * c - b; break; case 2402: f = 1; h = c + d[1] - d[0];
            break; default: f = a - 1, h = b;
        }
      }a = 0.5 * (c - b); d = this.valueSize; this._weightPrev = a / (b - g); this._weightNext = a / (h - c); this._offsetPrev = e * d; this._offsetNext = f * d;
    },
    interpolate_(a, b, c, d) {
      const e = this.resultBuffer; const f = this.sampleValues; const g = this.valueSize; a *= g; const h = a - g; const l = this._offsetPrev; const k = this._offsetNext; let n = this._weightPrev; let u = this._weightNext; let t = (c - b) / (d - b); c = t * t; d = c * t; b = -n * d + 2 * n * c - n * t; n = (1 + n) * d + (-1.5 - 2 * n) * c + (-0.5 + n) * t + 1; t = (-1 - u) * d + (1.5 + u) * c + 0.5 * t; u = u * d - u * c; for (c = 0; c !== g; ++c)e[c] = b * f[l + c] + n * f[h + c] + t * f[a + c] + u * f[k + c];
      return e;
    },
  }); ke.prototype = Object.assign(Object.create(Ia.prototype), { constructor: ke, interpolate_(a, b, c, d) { const e = this.resultBuffer; const f = this.sampleValues; const g = this.valueSize; a *= g; const h = a - g; b = (c - b) / (d - b); c = 1 - b; for (d = 0; d !== g; ++d)e[d] = f[h + d] * c + f[a + d] * b; return e; } }); Oe.prototype = Object.assign(Object.create(Ia.prototype), { constructor: Oe, interpolate_(a) { return this.copySampleValue_(a - 1); } }); Object.assign(oa, {
    toJSON(a) {
      let b = a.constructor; if (void 0 !== b.toJSON)b = b.toJSON(a); else {
        b = {
          name: a.name,
          times: pa.convertArray(a.times, Array),
          values: pa.convertArray(a.values, Array),
        }; const c = a.getInterpolation(); c !== a.DefaultInterpolation && (b.interpolation = c);
      }b.type = a.ValueTypeName; return b;
    },
  }); Object.assign(oa.prototype, {
    constructor: oa,
    TimeBufferType: Float32Array,
    ValueBufferType: Float32Array,
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodDiscrete(a) { return new Oe(this.times, this.values, this.getValueSize(), a); },
    InterpolantFactoryMethodLinear(a) {
      return new ke(this.times, this.values, this.getValueSize(),
        a);
    },
    InterpolantFactoryMethodSmooth(a) { return new Ne(this.times, this.values, this.getValueSize(), a); },
    setInterpolation(a) {
      switch (a) { case 2300: var b = this.InterpolantFactoryMethodDiscrete; break; case 2301: b = this.InterpolantFactoryMethodLinear; break; case 2302: b = this.InterpolantFactoryMethodSmooth; } if (void 0 === b) {
        b = `unsupported interpolation for ${this.ValueTypeName} keyframe track named ${this.name}`; if (void 0 === this.createInterpolant) {
          if (a !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
          else throw Error(b);
        } console.warn('THREE.KeyframeTrack:', b); return this;
      } this.createInterpolant = b; return this;
    },
    getInterpolation() { switch (this.createInterpolant) { case this.InterpolantFactoryMethodDiscrete: return 2300; case this.InterpolantFactoryMethodLinear: return 2301; case this.InterpolantFactoryMethodSmooth: return 2302; } },
    getValueSize() { return this.values.length / this.times.length; },
    shift(a) { if (a !== 0) for (let b = this.times, c = 0, d = b.length; c !== d; ++c)b[c] += a; return this; },
    scale(a) {
      if (a
!== 1) for (let b = this.times, c = 0, d = b.length; c !== d; ++c)b[c] *= a; return this;
    },
    trim(a, b) { for (var c = this.times, d = c.length, e = 0, f = d - 1; e !== d && c[e] < a;)++e; for (;f !== -1 && c[f] > b;)--f; ++f; if (e !== 0 || f !== d)e >= f && (f = Math.max(f, 1), e = f - 1), a = this.getValueSize(), this.times = pa.arraySlice(c, e, f), this.values = pa.arraySlice(this.values, e * a, f * a); return this; },
    validate() {
      let a = !0; let b = this.getValueSize(); b - Math.floor(b) !== 0 && (console.error('THREE.KeyframeTrack: Invalid value size in track.', this), a = !1); let c = this.times;
      b = this.values; let d = c.length; d === 0 && (console.error('THREE.KeyframeTrack: Track is empty.', this), a = !1); for (var e = null, f = 0; f !== d; f++) { const g = c[f]; if (typeof g === 'number' && isNaN(g)) { console.error('THREE.KeyframeTrack: Time is not a valid number.', this, f, g); a = !1; break; } if (e !== null && e > g) { console.error('THREE.KeyframeTrack: Out of order keys.', this, f, g, e); a = !1; break; }e = g; } if (void 0 !== b && pa.isTypedArray(b)) {
        for (f = 0, c = b.length; f !== c; ++f) {
          if (d = b[f], isNaN(d)) {
            console.error('THREE.KeyframeTrack: Value is not a valid number.',
              this, f, d); a = !1; break;
          }
        }
      } return a;
    },
    optimize() {
      for (var a = this.times, b = this.values, c = this.getValueSize(), d = this.getInterpolation() === 2302, e = 1, f = a.length - 1, g = 1; g < f; ++g) { var h = !1; var l = a[g]; if (l !== a[g + 1] && (g !== 1 || l !== l[0])) if (d)h = !0; else { var k = g * c; const n = k - c; const u = k + c; for (l = 0; l !== c; ++l) { const t = b[k + l]; if (t !== b[n + l] || t !== b[u + l]) { h = !0; break; } } } if (h) { if (g !== e) for (a[e] = a[g], h = g * c, k = e * c, l = 0; l !== c; ++l)b[k + l] = b[h + l]; ++e; } } if (f > 0) { a[e] = a[f]; h = f * c; k = e * c; for (l = 0; l !== c; ++l)b[k + l] = b[h + l]; ++e; }e !== a.length && (this.times = pa.arraySlice(a,
        0, e), this.values = pa.arraySlice(b, 0, e * c)); return this;
    },
    clone() { let a = pa.arraySlice(this.times, 0); const b = pa.arraySlice(this.values, 0); a = new this.constructor(this.name, a, b); a.createInterpolant = this.createInterpolant; return a; },
  }); Pe.prototype = Object.assign(Object.create(oa.prototype), {
    constructor: Pe, ValueTypeName: 'bool', ValueBufferType: Array, DefaultInterpolation: 2300, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0,
  }); Qe.prototype = Object.assign(Object.create(oa.prototype),
    { constructor: Qe, ValueTypeName: 'color' }); $c.prototype = Object.assign(Object.create(oa.prototype), { constructor: $c, ValueTypeName: 'number' }); Re.prototype = Object.assign(Object.create(Ia.prototype), { constructor: Re, interpolate_(a, b, c, d) { const e = this.resultBuffer; const f = this.sampleValues; const g = this.valueSize; a *= g; b = (c - b) / (d - b); for (c = a + g; a !== c; a += 4)ua.slerpFlat(e, 0, f, a - g, f, a, b); return e; } }); le.prototype = Object.assign(Object.create(oa.prototype), {
    constructor: le,
    ValueTypeName: 'quaternion',
    DefaultInterpolation: 2301,
    InterpolantFactoryMethodLinear(a) { return new Re(this.times, this.values, this.getValueSize(), a); },
    InterpolantFactoryMethodSmooth: void 0,
  }); Se.prototype = Object.assign(Object.create(oa.prototype), {
    constructor: Se, ValueTypeName: 'string', ValueBufferType: Array, DefaultInterpolation: 2300, InterpolantFactoryMethodLinear: void 0, InterpolantFactoryMethodSmooth: void 0,
  }); ad.prototype = Object.assign(Object.create(oa.prototype), { constructor: ad, ValueTypeName: 'vector' }); Object.assign(Ma, {
    parse(a) {
      for (var b = [], c = a.tracks, d = 1 / (a.fps || 1), e = 0, f = c.length; e !== f; ++e)b.push(rk(c[e]).scale(d)); return new Ma(a.name, a.duration, b);
    },
    toJSON(a) {
      const b = []; const c = a.tracks; a = {
        name: a.name, duration: a.duration, tracks: b, uuid: a.uuid,
      }; for (let d = 0, e = c.length; d !== e; ++d)b.push(oa.toJSON(c[d])); return a;
    },
    CreateFromMorphTargetSequence(a, b, c, d) {
      for (var e = b.length, f = [], g = 0; g < e; g++) {
        let h = []; let l = []; h.push((g + e - 1) % e, g, (g + 1) % e); l.push(0, 1, 0); const k = pa.getKeyframeOrder(h); h = pa.sortedArray(h, 1, k); l = pa.sortedArray(l, 1, k); d || h[0]
!== 0 || (h.push(e), l.push(l[0])); f.push((new $c(`.morphTargetInfluences[${b[g].name}]`, h, l)).scale(1 / c));
      } return new Ma(a, -1, f);
    },
    findByName(a, b) { let c = a; Array.isArray(a) || (c = a.geometry && a.geometry.animations || a.animations); for (a = 0; a < c.length; a++) if (c[a].name === b) return c[a]; return null; },
    CreateClipsFromMorphTargetSequences(a, b, c) {
      for (var d = {}, e = /^([\w-]*?)([\d]+)$/, f = 0, g = a.length; f < g; f++) { const h = a[f]; let l = h.name.match(e); if (l && l.length > 1) { var k = l[1]; (l = d[k]) || (d[k] = l = []); l.push(h); } }a = [];
      for (k in d)a.push(Ma.CreateFromMorphTargetSequence(k, d[k], b, c)); return a;
    },
    parseAnimation(a, b) {
      if (!a) return console.error('THREE.AnimationClip: No animation in JSONLoader data.'), null; const c = function (a, b, c, d, e) { if (c.length !== 0) { const f = []; const g = []; pa.flattenJSON(c, f, g, d); f.length !== 0 && e.push(new a(b, f, g)); } }; const d = []; const e = a.name || 'default'; let f = a.length || -1; const g = a.fps || 30; a = a.hierarchy || []; for (let h = 0; h < a.length; h++) {
        const l = a[h].keys; if (l && l.length !== 0) {
          if (l[0].morphTargets) {
            f = {}; for (var k = 0; k < l.length; k++) {
              if (l[k].morphTargets) { for (var n = 0; n < l[k].morphTargets.length; n++)f[l[k].morphTargets[n]] = -1; }
            } for (const u in f) { const t = []; const r = []; for (n = 0; n !== l[k].morphTargets.length; ++n) { const p = l[k]; t.push(p.time); r.push(p.morphTarget === u ? 1 : 0); }d.push(new $c(`.morphTargetInfluence[${u}]`, t, r)); }f = f.length * (g || 1);
          } else k = `.bones[${b[h].name}]`, c(ad, `${k}.position`, l, 'pos', d), c(le, `${k}.quaternion`, l, 'rot', d), c(ad, `${k}.scale`, l, 'scl', d);
        }
      } return d.length === 0 ? null : new Ma(e, f, d);
    },
  }); Object.assign(Ma.prototype, {
    resetDuration() {
      for (var a = 0, b = 0, c = this.tracks.length; b
!== c; ++b) { const d = this.tracks[b]; a = Math.max(a, d.times[d.times.length - 1]); } this.duration = a; return this;
    },
    trim() { for (let a = 0; a < this.tracks.length; a++) this.tracks[a].trim(0, this.duration); return this; },
    validate() { for (var a = !0, b = 0; b < this.tracks.length; b++)a = a && this.tracks[b].validate(); return a; },
    optimize() { for (let a = 0; a < this.tracks.length; a++) this.tracks[a].optimize(); return this; },
    clone() {
      for (var a = [], b = 0; b < this.tracks.length; b++)a.push(this.tracks[b].clone()); return new Ma(this.name,
        this.duration, a);
    },
  }); const uc = {
    enabled: !1, files: {}, add(a, b) { !1 !== this.enabled && (this.files[a] = b); }, get(a) { if (!1 !== this.enabled) return this.files[a]; }, remove(a) { delete this.files[a]; }, clear() { this.files = {}; },
  }; var Zh = new pg(); Object.assign(S.prototype, {
    load() {}, parse() {}, setCrossOrigin(a) { this.crossOrigin = a; return this; }, setPath(a) { this.path = a; return this; }, setResourcePath(a) { this.resourcePath = a; return this; },
  }); const $a = {}; Na.prototype = Object.assign(Object.create(S.prototype), {
    constructor: Na,
    load(a, b, c, d) {
      void 0 === a && (a = ''); void 0 !== this.path && (a = this.path + a); a = this.manager.resolveURL(a); const e = this; const f = uc.get(a); if (void 0 !== f) return e.manager.itemStart(a), setTimeout(() => { b && b(f); e.manager.itemEnd(a); }, 0), f; if (void 0 !== $a[a])$a[a].push({ onLoad: b, onProgress: c, onError: d }); else {
        let g = a.match(/^data:(.*?)(;base64)?,(.*)$/); if (g) {
          c = g[1]; var h = !!g[2]; g = g[3]; g = decodeURIComponent(g); h && (g = atob(g)); try {
            const l = (this.responseType
|| '').toLowerCase(); switch (l) { case 'arraybuffer': case 'blob': var k = new Uint8Array(g.length); for (h = 0; h < g.length; h++)k[h] = g.charCodeAt(h); var n = l === 'blob' ? new Blob([k.buffer], { type: c }) : k.buffer; break; case 'document': n = (new DOMParser()).parseFromString(g, c); break; case 'json': n = JSON.parse(g); break; default: n = g; }setTimeout(() => { b && b(n); e.manager.itemEnd(a); }, 0);
          } catch (t) { setTimeout(() => { d && d(t); e.manager.itemError(a); e.manager.itemEnd(a); }, 0); }
        } else {
          $a[a] = []; $a[a].push({ onLoad: b, onProgress: c, onError: d });
          var u = new XMLHttpRequest(); u.open('GET', a, !0); u.addEventListener('load', function (b) { const c = this.response; uc.add(a, c); const d = $a[a]; delete $a[a]; if (this.status === 200 || this.status === 0) { this.status === 0 && console.warn('THREE.FileLoader: HTTP Status 0 received.'); for (var f = 0, g = d.length; f < g; f++) { var h = d[f]; if (h.onLoad)h.onLoad(c); } } else { f = 0; for (g = d.length; f < g; f++) if (h = d[f], h.onError)h.onError(b); e.manager.itemError(a); }e.manager.itemEnd(a); }, !1); u.addEventListener('progress', (b) => {
            for (let c = $a[a], d = 0, e = c.length; d
< e; d++) { const f = c[d]; if (f.onProgress)f.onProgress(b); }
          }, !1); u.addEventListener('error', (b) => { const c = $a[a]; delete $a[a]; for (let d = 0, f = c.length; d < f; d++) { const g = c[d]; if (g.onError)g.onError(b); }e.manager.itemError(a); e.manager.itemEnd(a); }, !1); u.addEventListener('abort', (b) => { const c = $a[a]; delete $a[a]; for (let d = 0, f = c.length; d < f; d++) { const g = c[d]; if (g.onError)g.onError(b); }e.manager.itemError(a); e.manager.itemEnd(a); }, !1); void 0 !== this.responseType && (u.responseType = this.responseType); void 0 !== this.withCredentials
&& (u.withCredentials = this.withCredentials); u.overrideMimeType && u.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : 'text/plain'); for (h in this.requestHeader)u.setRequestHeader(h, this.requestHeader[h]); u.send(null);
        }e.manager.itemStart(a); return u;
      }
    },
    setResponseType(a) { this.responseType = a; return this; },
    setWithCredentials(a) { this.withCredentials = a; return this; },
    setMimeType(a) { this.mimeType = a; return this; },
    setRequestHeader(a) { this.requestHeader = a; return this; },
  }); qg.prototype = Object.assign(Object.create(S.prototype), { constructor: qg, load(a, b, c, d) { const e = this; const f = new Na(e.manager); f.setPath(e.path); f.load(a, (a) => { b(e.parse(JSON.parse(a))); }, c, d); }, parse(a) { for (var b = [], c = 0; c < a.length; c++) { const d = Ma.parse(a[c]); b.push(d); } return b; } }); rg.prototype = Object.assign(Object.create(S.prototype), {
    constructor: rg,
    load(a, b, c, d) {
      function e(e) {
        l.load(a[e], (a) => {
          a = f.parse(a, !0); g[e] = {
            width: a.width, height: a.height, format: a.format, mipmaps: a.mipmaps,
          }; k += 1; k
=== 6 && (a.mipmapCount === 1 && (h.minFilter = 1006), h.format = a.format, h.needsUpdate = !0, b && b(h));
        }, c, d);
      } var f = this; var g = []; var h = new Lc(); h.image = g; var l = new Na(this.manager); l.setPath(this.path); l.setResponseType('arraybuffer'); if (Array.isArray(a)) for (var k = 0, n = 0, u = a.length; n < u; ++n)e(n); else {
        l.load(a, (a) => {
          a = f.parse(a, !0); if (a.isCubemap) {
            for (let c = a.mipmaps.length / a.mipmapCount, d = 0; d < c; d++) {
              g[d] = { mipmaps: [] }; for (let e = 0; e < a.mipmapCount; e++) {
                g[d].mipmaps.push(a.mipmaps[d * a.mipmapCount + e]), g[d].format = a.format, g[d].width = a.width, g[d].height = a.height;
              }
            }
          } else h.image.width = a.width, h.image.height = a.height, h.mipmaps = a.mipmaps; a.mipmapCount === 1 && (h.minFilter = 1006); h.format = a.format; h.needsUpdate = !0; b && b(h);
        }, c, d);
      } return h;
    },
  }); Te.prototype = Object.assign(Object.create(S.prototype), {
    constructor: Te,
    load(a, b, c, d) {
      const e = this; const f = new Zb(); const g = new Na(this.manager); g.setResponseType('arraybuffer'); g.setPath(this.path); g.load(a, (a) => {
        if (a = e.parse(a)) { void 0 !== a.image ? f.image = a.image : void 0 !== a.data && (f.image.width = a.width, f.image.height = a.height, f.image.data = a.data), f.wrapS = void 0 !== a.wrapS ? a.wrapS : 1001, f.wrapT = void 0 !== a.wrapT ? a.wrapT : 1001, f.magFilter = void 0 !== a.magFilter ? a.magFilter : 1006, f.minFilter = void 0 !== a.minFilter ? a.minFilter : 1008, f.anisotropy = void 0 !== a.anisotropy ? a.anisotropy : 1, void 0 !== a.format && (f.format = a.format), void 0 !== a.type && (f.type = a.type), void 0 !== a.mipmaps && (f.mipmaps = a.mipmaps), a.mipmapCount === 1 && (f.minFilter = 1006), f.needsUpdate = !0, b && b(f, a); }
      }, c, d); return f;
    },
  }); bd.prototype = Object.assign(Object.create(S.prototype),
    {
      constructor: bd,
      load(a, b, c, d) {
        function e() { l.removeEventListener('load', e, !1); l.removeEventListener('error', f, !1); uc.add(a, this); b && b(this); g.manager.itemEnd(a); } function f(b) { l.removeEventListener('load', e, !1); l.removeEventListener('error', f, !1); d && d(b); g.manager.itemError(a); g.manager.itemEnd(a); } void 0 !== this.path && (a = this.path + a); a = this.manager.resolveURL(a); var g = this; const h = uc.get(a); if (void 0 !== h) return g.manager.itemStart(a), setTimeout(() => { b && b(h); g.manager.itemEnd(a); }, 0), h; var l = document.createElementNS('http://www.w3.org/1999/xhtml', 'img'); l.addEventListener('load', e, !1); l.addEventListener('error', f, !1); a.substr(0, 5) !== 'data:' && void 0 !== this.crossOrigin && (l.crossOrigin = this.crossOrigin); g.manager.itemStart(a); l.src = a; return l;
      },
    }); Ue.prototype = Object.assign(Object.create(S.prototype), {
    constructor: Ue,
    load(a, b, c, d) {
      function e(c) { g.load(a[c], (a) => { f.images[c] = a; h++; h === 6 && (f.needsUpdate = !0, b && b(f)); }, void 0, d); } var f = new ob(); var
        g = new bd(this.manager); g.setCrossOrigin(this.crossOrigin);
      g.setPath(this.path); var h = 0; for (c = 0; c < a.length; ++c)e(c); return f;
    },
  }); Ve.prototype = Object.assign(Object.create(S.prototype), {
    constructor: Ve,
    load(a, b, c, d) {
      const e = new W(); const
        f = new bd(this.manager); f.setCrossOrigin(this.crossOrigin); f.setPath(this.path); f.load(a, (c) => { e.image = c; c = a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data:image\/jpeg/) === 0; e.format = c ? 1022 : 1023; e.needsUpdate = !0; void 0 !== b && b(e); }, c, d); return e;
    },
  }); Object.assign(D.prototype, {
    getPoint() {
      console.warn('THREE.Curve: .getPoint() not implemented.');
      return null;
    },
    getPointAt(a, b) { a = this.getUtoTmapping(a); return this.getPoint(a, b); },
    getPoints(a) { void 0 === a && (a = 5); for (var b = [], c = 0; c <= a; c++)b.push(this.getPoint(c / a)); return b; },
    getSpacedPoints(a) { void 0 === a && (a = 5); for (var b = [], c = 0; c <= a; c++)b.push(this.getPointAt(c / a)); return b; },
    getLength() { const a = this.getLengths(); return a[a.length - 1]; },
    getLengths(a) {
      void 0 === a && (a = this.arcLengthDivisions); if (this.cacheArcLengths && this.cacheArcLengths.length === a + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1; const b = []; let c = this.getPoint(0); let d; let e = 0; b.push(0); for (d = 1; d <= a; d++) { const f = this.getPoint(d / a); e += f.distanceTo(c); b.push(e); c = f; } return this.cacheArcLengths = b;
    },
    updateArcLengths() { this.needsUpdate = !0; this.getLengths(); },
    getUtoTmapping(a, b) { const c = this.getLengths(); const d = c.length; b = b || a * c[d - 1]; for (var e = 0, f = d - 1, g; e <= f;) if (a = Math.floor(e + (f - e) / 2), g = c[a] - b, g < 0)e = a + 1; else if (g > 0)f = a - 1; else { f = a; break; }a = f; if (c[a] === b) return a / (d - 1); e = c[a]; return (a + (b - e) / (c[a + 1] - e)) / (d - 1); },
    getTangent(a) {
      let b = a - 1E-4; a += 1E-4; b < 0 && (b = 0); a > 1 && (a = 1); b = this.getPoint(b); return this.getPoint(a).clone().sub(b).normalize();
    },
    getTangentAt(a) { a = this.getUtoTmapping(a); return this.getTangent(a); },
    computeFrenetFrames(a, b) {
      let c = new n(); const d = []; const e = []; const f = []; const g = new n(); const h = new U(); let
        l; for (l = 0; l <= a; l++) { var k = l / a; d[l] = this.getTangentAt(k); d[l].normalize(); }e[0] = new n(); f[0] = new n(); l = Number.MAX_VALUE; k = Math.abs(d[0].x); const q = Math.abs(d[0].y); const u = Math.abs(d[0].z); k <= l && (l = k, c.set(1, 0, 0)); q <= l && (l = q, c.set(0, 1, 0)); u <= l && c.set(0,
        0, 1); g.crossVectors(d[0], c).normalize(); e[0].crossVectors(d[0], g); f[0].crossVectors(d[0], e[0]); for (l = 1; l <= a; l++)e[l] = e[l - 1].clone(), f[l] = f[l - 1].clone(), g.crossVectors(d[l - 1], d[l]), g.length() > Number.EPSILON && (g.normalize(), c = Math.acos(L.clamp(d[l - 1].dot(d[l]), -1, 1)), e[l].applyMatrix4(h.makeRotationAxis(g, c))), f[l].crossVectors(d[l], e[l]); if (!0 === b) {
        for (c = Math.acos(L.clamp(e[0].dot(e[a]), -1, 1)), c /= a, d[0].dot(g.crossVectors(e[0], e[a])) > 0 && (c = -c), l = 1; l <= a; l++) {
          e[l].applyMatrix4(h.makeRotationAxis(d[l],
            c * l)), f[l].crossVectors(d[l], e[l]);
        }
      } return { tangents: d, normals: e, binormals: f };
    },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) { this.arcLengthDivisions = a.arcLengthDivisions; return this; },
    toJSON() { const a = { metadata: { version: 4.5, type: 'Curve', generator: 'Curve.toJSON' } }; a.arcLengthDivisions = this.arcLengthDivisions; a.type = this.type; return a; },
    fromJSON(a) { this.arcLengthDivisions = a.arcLengthDivisions; return this; },
  }); Ja.prototype = Object.create(D.prototype); Ja.prototype.constructor = Ja; Ja.prototype.isEllipseCurve = !0; Ja.prototype.getPoint = function (a, b) {
    b = b || new w(); for (var c = 2 * Math.PI, d = this.aEndAngle - this.aStartAngle, e = Math.abs(d) < Number.EPSILON; d < 0;)d += c; for (;d > c;)d -= c; d < Number.EPSILON && (d = e ? 0 : c); !0 !== this.aClockwise || e || (d = d === c ? -c : d - c); c = this.aStartAngle + a * d; a = this.aX + this.xRadius * Math.cos(c); let f = this.aY + this.yRadius * Math.sin(c); this.aRotation !== 0 && (c = Math.cos(this.aRotation), d = Math.sin(this.aRotation), e = a - this.aX, f -= this.aY, a = e * c - f * d + this.aX, f = e * d + f * c + this.aY); return b.set(a,
      f);
  }; Ja.prototype.copy = function (a) { D.prototype.copy.call(this, a); this.aX = a.aX; this.aY = a.aY; this.xRadius = a.xRadius; this.yRadius = a.yRadius; this.aStartAngle = a.aStartAngle; this.aEndAngle = a.aEndAngle; this.aClockwise = a.aClockwise; this.aRotation = a.aRotation; return this; }; Ja.prototype.toJSON = function () {
    const a = D.prototype.toJSON.call(this); a.aX = this.aX; a.aY = this.aY; a.xRadius = this.xRadius; a.yRadius = this.yRadius; a.aStartAngle = this.aStartAngle; a.aEndAngle = this.aEndAngle; a.aClockwise = this.aClockwise; a.aRotation = this.aRotation; return a;
  }; Ja.prototype.fromJSON = function (a) { D.prototype.fromJSON.call(this, a); this.aX = a.aX; this.aY = a.aY; this.xRadius = a.xRadius; this.yRadius = a.yRadius; this.aStartAngle = a.aStartAngle; this.aEndAngle = a.aEndAngle; this.aClockwise = a.aClockwise; this.aRotation = a.aRotation; return this; }; cd.prototype = Object.create(Ja.prototype); cd.prototype.constructor = cd; cd.prototype.isArcCurve = !0; const Hf = new n(); const bh = new sg(); const ch = new sg(); const
    dh = new sg(); ya.prototype = Object.create(D.prototype); ya.prototype.constructor = ya; ya.prototype.isCatmullRomCurve3 = !0; ya.prototype.getPoint = function (a, b) {
    b = b || new n(); let c = this.points; let d = c.length; a *= d - (this.closed ? 0 : 1); let e = Math.floor(a); a -= e; this.closed ? e += e > 0 ? 0 : (Math.floor(Math.abs(e) / d) + 1) * d : a === 0 && e === d - 1 && (e = d - 2, a = 1); if (this.closed || e > 0) var f = c[(e - 1) % d]; else Hf.subVectors(c[0], c[1]).add(c[0]), f = Hf; const g = c[e % d]; const h = c[(e + 1) % d]; this.closed || e + 2 < d ? c = c[(e + 2) % d] : (Hf.subVectors(c[d - 1], c[d - 2]).add(c[d - 1]), c = Hf); if (this.curveType === 'centripetal' || this.curveType === 'chordal') {
      let l = this.curveType === 'chordal' ? 0.5 : 0.25;
      d = Math.pow(f.distanceToSquared(g), l); e = Math.pow(g.distanceToSquared(h), l); l = Math.pow(h.distanceToSquared(c), l); e < 1E-4 && (e = 1); d < 1E-4 && (d = e); l < 1E-4 && (l = e); bh.initNonuniformCatmullRom(f.x, g.x, h.x, c.x, d, e, l); ch.initNonuniformCatmullRom(f.y, g.y, h.y, c.y, d, e, l); dh.initNonuniformCatmullRom(f.z, g.z, h.z, c.z, d, e, l);
    } else this.curveType === 'catmullrom' && (bh.initCatmullRom(f.x, g.x, h.x, c.x, this.tension), ch.initCatmullRom(f.y, g.y, h.y, c.y, this.tension), dh.initCatmullRom(f.z, g.z, h.z, c.z, this.tension)); b.set(bh.calc(a),
      ch.calc(a), dh.calc(a)); return b;
  }; ya.prototype.copy = function (a) { D.prototype.copy.call(this, a); this.points = []; for (let b = 0, c = a.points.length; b < c; b++) this.points.push(a.points[b].clone()); this.closed = a.closed; this.curveType = a.curveType; this.tension = a.tension; return this; }; ya.prototype.toJSON = function () { const a = D.prototype.toJSON.call(this); a.points = []; for (let b = 0, c = this.points.length; b < c; b++)a.points.push(this.points[b].toArray()); a.closed = this.closed; a.curveType = this.curveType; a.tension = this.tension; return a; };
  ya.prototype.fromJSON = function (a) { D.prototype.fromJSON.call(this, a); this.points = []; for (let b = 0, c = a.points.length; b < c; b++) { const d = a.points[b]; this.points.push((new n()).fromArray(d)); } this.closed = a.closed; this.curveType = a.curveType; this.tension = a.tension; return this; }; Sa.prototype = Object.create(D.prototype); Sa.prototype.constructor = Sa; Sa.prototype.isCubicBezierCurve = !0; Sa.prototype.getPoint = function (a, b) {
    b = b || new w(); const c = this.v0; const d = this.v1; const e = this.v2; const f = this.v3; b.set(ne(a, c.x, d.x, e.x, f.x), ne(a, c.y, d.y, e.y,
      f.y)); return b;
  }; Sa.prototype.copy = function (a) { D.prototype.copy.call(this, a); this.v0.copy(a.v0); this.v1.copy(a.v1); this.v2.copy(a.v2); this.v3.copy(a.v3); return this; }; Sa.prototype.toJSON = function () { const a = D.prototype.toJSON.call(this); a.v0 = this.v0.toArray(); a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray(); a.v3 = this.v3.toArray(); return a; }; Sa.prototype.fromJSON = function (a) { D.prototype.fromJSON.call(this, a); this.v0.fromArray(a.v0); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2); this.v3.fromArray(a.v3); return this; };
  gb.prototype = Object.create(D.prototype); gb.prototype.constructor = gb; gb.prototype.isCubicBezierCurve3 = !0; gb.prototype.getPoint = function (a, b) { b = b || new n(); const c = this.v0; const d = this.v1; const e = this.v2; const f = this.v3; b.set(ne(a, c.x, d.x, e.x, f.x), ne(a, c.y, d.y, e.y, f.y), ne(a, c.z, d.z, e.z, f.z)); return b; }; gb.prototype.copy = function (a) { D.prototype.copy.call(this, a); this.v0.copy(a.v0); this.v1.copy(a.v1); this.v2.copy(a.v2); this.v3.copy(a.v3); return this; }; gb.prototype.toJSON = function () {
    const a = D.prototype.toJSON.call(this); a.v0 = this.v0.toArray();
    a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray(); a.v3 = this.v3.toArray(); return a;
  }; gb.prototype.fromJSON = function (a) { D.prototype.fromJSON.call(this, a); this.v0.fromArray(a.v0); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2); this.v3.fromArray(a.v3); return this; }; za.prototype = Object.create(D.prototype); za.prototype.constructor = za; za.prototype.isLineCurve = !0; za.prototype.getPoint = function (a, b) { b = b || new w(); a === 1 ? b.copy(this.v2) : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1)); return b; }; za.prototype.getPointAt = function (a, b) { return this.getPoint(a, b); }; za.prototype.getTangent = function () { return this.v2.clone().sub(this.v1).normalize(); }; za.prototype.copy = function (a) { D.prototype.copy.call(this, a); this.v1.copy(a.v1); this.v2.copy(a.v2); return this; }; za.prototype.toJSON = function () { const a = D.prototype.toJSON.call(this); a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray(); return a; }; za.prototype.fromJSON = function (a) { D.prototype.fromJSON.call(this, a); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2); return this; }; Ta.prototype = Object.create(D.prototype); Ta.prototype.constructor = Ta; Ta.prototype.isLineCurve3 = !0; Ta.prototype.getPoint = function (a, b) { b = b || new n(); a === 1 ? b.copy(this.v2) : (b.copy(this.v2).sub(this.v1), b.multiplyScalar(a).add(this.v1)); return b; }; Ta.prototype.getPointAt = function (a, b) { return this.getPoint(a, b); }; Ta.prototype.copy = function (a) { D.prototype.copy.call(this, a); this.v1.copy(a.v1); this.v2.copy(a.v2); return this; }; Ta.prototype.toJSON = function () {
    const a = D.prototype.toJSON.call(this); a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray();
    return a;
  }; Ta.prototype.fromJSON = function (a) { D.prototype.fromJSON.call(this, a); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2); return this; }; Ua.prototype = Object.create(D.prototype); Ua.prototype.constructor = Ua; Ua.prototype.isQuadraticBezierCurve = !0; Ua.prototype.getPoint = function (a, b) { b = b || new w(); const c = this.v0; const d = this.v1; const e = this.v2; b.set(me(a, c.x, d.x, e.x), me(a, c.y, d.y, e.y)); return b; }; Ua.prototype.copy = function (a) { D.prototype.copy.call(this, a); this.v0.copy(a.v0); this.v1.copy(a.v1); this.v2.copy(a.v2); return this; };
  Ua.prototype.toJSON = function () { const a = D.prototype.toJSON.call(this); a.v0 = this.v0.toArray(); a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray(); return a; }; Ua.prototype.fromJSON = function (a) { D.prototype.fromJSON.call(this, a); this.v0.fromArray(a.v0); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2); return this; }; hb.prototype = Object.create(D.prototype); hb.prototype.constructor = hb; hb.prototype.isQuadraticBezierCurve3 = !0; hb.prototype.getPoint = function (a, b) {
    b = b || new n(); const c = this.v0; const d = this.v1; const e = this.v2; b.set(me(a, c.x,
      d.x, e.x), me(a, c.y, d.y, e.y), me(a, c.z, d.z, e.z)); return b;
  }; hb.prototype.copy = function (a) { D.prototype.copy.call(this, a); this.v0.copy(a.v0); this.v1.copy(a.v1); this.v2.copy(a.v2); return this; }; hb.prototype.toJSON = function () { const a = D.prototype.toJSON.call(this); a.v0 = this.v0.toArray(); a.v1 = this.v1.toArray(); a.v2 = this.v2.toArray(); return a; }; hb.prototype.fromJSON = function (a) { D.prototype.fromJSON.call(this, a); this.v0.fromArray(a.v0); this.v1.fromArray(a.v1); this.v2.fromArray(a.v2); return this; }; Va.prototype = Object.create(D.prototype);
  Va.prototype.constructor = Va; Va.prototype.isSplineCurve = !0; Va.prototype.getPoint = function (a, b) { b = b || new w(); let c = this.points; let d = (c.length - 1) * a; a = Math.floor(d); d -= a; const e = c[a === 0 ? a : a - 1]; const f = c[a]; const g = c[a > c.length - 2 ? c.length - 1 : a + 1]; c = c[a > c.length - 3 ? c.length - 1 : a + 2]; b.set($h(d, e.x, f.x, g.x, c.x), $h(d, e.y, f.y, g.y, c.y)); return b; }; Va.prototype.copy = function (a) { D.prototype.copy.call(this, a); this.points = []; for (let b = 0, c = a.points.length; b < c; b++) this.points.push(a.points[b].clone()); return this; }; Va.prototype.toJSON = function () {
    const a = D.prototype.toJSON.call(this); a.points = []; for (let b = 0, c = this.points.length; b < c; b++)a.points.push(this.points[b].toArray()); return a;
  }; Va.prototype.fromJSON = function (a) { D.prototype.fromJSON.call(this, a); this.points = []; for (let b = 0, c = a.points.length; b < c; b++) { const d = a.points[b]; this.points.push((new w()).fromArray(d)); } return this; }; const eh = Object.freeze({
    ArcCurve: cd,
    CatmullRomCurve3: ya,
    CubicBezierCurve: Sa,
    CubicBezierCurve3: gb,
    EllipseCurve: Ja,
    LineCurve: za,
    LineCurve3: Ta,
    QuadraticBezierCurve: Ua,
    QuadraticBezierCurve3: hb,
    SplineCurve: Va,
  }); rb.prototype = Object.assign(Object.create(D.prototype), {
    constructor: rb,
    add(a) { this.curves.push(a); },
    closePath() { const a = this.curves[0].getPoint(0); const b = this.curves[this.curves.length - 1].getPoint(1); a.equals(b) || this.curves.push(new za(b, a)); },
    getPoint(a) { let b = a * this.getLength(); let c = this.getCurveLengths(); for (a = 0; a < c.length;) { if (c[a] >= b) return b = c[a] - b, a = this.curves[a], c = a.getLength(), a.getPointAt(c === 0 ? 0 : 1 - b / c); a++; } return null; },
    getLength() {
      const a = this.getCurveLengths();
      return a[a.length - 1];
    },
    updateArcLengths() { this.needsUpdate = !0; this.cacheLengths = null; this.getCurveLengths(); },
    getCurveLengths() { if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths; for (var a = [], b = 0, c = 0, d = this.curves.length; c < d; c++)b += this.curves[c].getLength(), a.push(b); return this.cacheLengths = a; },
    getSpacedPoints(a) { void 0 === a && (a = 40); for (var b = [], c = 0; c <= a; c++)b.push(this.getPoint(c / a)); this.autoClose && b.push(b[0]); return b; },
    getPoints(a) {
      a = a || 12; for (var b = [], c, d = 0, e = this.curves; d < e.length; d++) { let f = e[d]; f = f.getPoints(f && f.isEllipseCurve ? 2 * a : f && (f.isLineCurve || f.isLineCurve3) ? 1 : f && f.isSplineCurve ? a * f.points.length : a); for (let g = 0; g < f.length; g++) { const h = f[g]; c && c.equals(h) || (b.push(h), c = h); } } this.autoClose && b.length > 1 && !b[b.length - 1].equals(b[0]) && b.push(b[0]); return b;
    },
    copy(a) { D.prototype.copy.call(this, a); this.curves = []; for (let b = 0, c = a.curves.length; b < c; b++) this.curves.push(a.curves[b].clone()); this.autoClose = a.autoClose; return this; },
    toJSON() { const a = D.prototype.toJSON.call(this); a.autoClose = this.autoClose; a.curves = []; for (let b = 0, c = this.curves.length; b < c; b++)a.curves.push(this.curves[b].toJSON()); return a; },
    fromJSON(a) { D.prototype.fromJSON.call(this, a); this.autoClose = a.autoClose; this.curves = []; for (let b = 0, c = a.curves.length; b < c; b++) { const d = a.curves[b]; this.curves.push((new eh[d.type]()).fromJSON(d)); } return this; },
  }); Wa.prototype = Object.assign(Object.create(rb.prototype), {
    constructor: Wa,
    setFromPoints(a) {
      this.moveTo(a[0].x,
        a[0].y); for (let b = 1, c = a.length; b < c; b++) this.lineTo(a[b].x, a[b].y);
    },
    moveTo(a, b) { this.currentPoint.set(a, b); },
    lineTo(a, b) { const c = new za(this.currentPoint.clone(), new w(a, b)); this.curves.push(c); this.currentPoint.set(a, b); },
    quadraticCurveTo(a, b, c, d) { a = new Ua(this.currentPoint.clone(), new w(a, b), new w(c, d)); this.curves.push(a); this.currentPoint.set(c, d); },
    bezierCurveTo(a, b, c, d, e, f) {
      a = new Sa(this.currentPoint.clone(), new w(a, b), new w(c, d), new w(e, f)); this.curves.push(a);
      this.currentPoint.set(e, f);
    },
    splineThru(a) { let b = [this.currentPoint.clone()].concat(a); b = new Va(b); this.curves.push(b); this.currentPoint.copy(a[a.length - 1]); },
    arc(a, b, c, d, e, f) { this.absarc(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f); },
    absarc(a, b, c, d, e, f) { this.absellipse(a, b, c, c, d, e, f); },
    ellipse(a, b, c, d, e, f, g, h) { this.absellipse(a + this.currentPoint.x, b + this.currentPoint.y, c, d, e, f, g, h); },
    absellipse(a, b, c, d, e, f, g, h) {
      a = new Ja(a, b, c, d, e, f, g, h); this.curves.length > 0
&& (b = a.getPoint(0), b.equals(this.currentPoint) || this.lineTo(b.x, b.y)); this.curves.push(a); a = a.getPoint(1); this.currentPoint.copy(a);
    },
    copy(a) { rb.prototype.copy.call(this, a); this.currentPoint.copy(a.currentPoint); return this; },
    toJSON() { const a = rb.prototype.toJSON.call(this); a.currentPoint = this.currentPoint.toArray(); return a; },
    fromJSON(a) { rb.prototype.fromJSON.call(this, a); this.currentPoint.fromArray(a.currentPoint); return this; },
  }); Jb.prototype = Object.assign(Object.create(Wa.prototype),
    {
      constructor: Jb,
      getPointsHoles(a) { for (var b = [], c = 0, d = this.holes.length; c < d; c++)b[c] = this.holes[c].getPoints(a); return b; },
      extractPoints(a) { return { shape: this.getPoints(a), holes: this.getPointsHoles(a) }; },
      copy(a) { Wa.prototype.copy.call(this, a); this.holes = []; for (let b = 0, c = a.holes.length; b < c; b++) this.holes.push(a.holes[b].clone()); return this; },
      toJSON() {
        const a = Wa.prototype.toJSON.call(this); a.uuid = this.uuid; a.holes = []; for (let b = 0, c = this.holes.length; b < c; b++)a.holes.push(this.holes[b].toJSON());
        return a;
      },
      fromJSON(a) { Wa.prototype.fromJSON.call(this, a); this.uuid = a.uuid; this.holes = []; for (let b = 0, c = a.holes.length; b < c; b++) { const d = a.holes[b]; this.holes.push((new Wa()).fromJSON(d)); } return this; },
    }); da.prototype = Object.assign(Object.create(B.prototype), {
    constructor: da,
    isLight: !0,
    copy(a) { B.prototype.copy.call(this, a); this.color.copy(a.color); this.intensity = a.intensity; return this; },
    toJSON(a) {
      a = B.prototype.toJSON.call(this, a); a.object.color = this.color.getHex(); a.object.intensity = this.intensity; void 0 !== this.groundColor && (a.object.groundColor = this.groundColor.getHex()); void 0 !== this.distance && (a.object.distance = this.distance); void 0 !== this.angle && (a.object.angle = this.angle); void 0 !== this.decay && (a.object.decay = this.decay); void 0 !== this.penumbra && (a.object.penumbra = this.penumbra); void 0 !== this.shadow && (a.object.shadow = this.shadow.toJSON()); return a;
    },
  }); We.prototype = Object.assign(Object.create(da.prototype), {
    constructor: We,
    isHemisphereLight: !0,
    copy(a) {
      da.prototype.copy.call(this,
        a); this.groundColor.copy(a.groundColor); return this;
    },
  }); Object.assign(ib.prototype, {
    _projScreenMatrix: new U(),
    _lightPositionWorld: new n(),
    _lookTarget: new n(),
    getViewportCount() { return this._viewportCount; },
    getFrustum() { return this._frustum; },
    updateMatrices(a) {
      const b = this.camera; const c = this.matrix; const d = this._projScreenMatrix; const e = this._lookTarget; const f = this._lightPositionWorld; f.setFromMatrixPosition(a.matrixWorld); b.position.copy(f); e.setFromMatrixPosition(a.target.matrixWorld); b.lookAt(e); b.updateMatrixWorld();
      d.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse); this._frustum.setFromMatrix(d); c.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1); c.multiply(b.projectionMatrix); c.multiply(b.matrixWorldInverse);
    },
    getViewport(a) { return this._viewports[a]; },
    getFrameExtents() { return this._frameExtents; },
    copy(a) { this.camera = a.camera.clone(); this.bias = a.bias; this.radius = a.radius; this.mapSize.copy(a.mapSize); return this; },
    clone() { return (new this.constructor()).copy(this); },
    toJSON() {
      const a = {}; this.bias !== 0 && (a.bias = this.bias); this.radius !== 1 && (a.radius = this.radius); if (this.mapSize.x !== 512 || this.mapSize.y !== 512)a.mapSize = this.mapSize.toArray(); a.camera = this.camera.toJSON(!1).object; delete a.camera.matrix; return a;
    },
  }); Xe.prototype = Object.assign(Object.create(ib.prototype), {
    constructor: Xe,
    isSpotLightShadow: !0,
    updateMatrices(a, b, c) {
      const d = this.camera; const e = 2 * L.RAD2DEG * a.angle; const f = this.mapSize.width / this.mapSize.height; const g = a.distance || d.far; if (e !== d.fov || f !== d.aspect || g !== d.far) {
        d.fov = e, d.aspect = f, d.far = g, d.updateProjectionMatrix();
      }ib.prototype.updateMatrices.call(this, a, b, c);
    },
  }); Ye.prototype = Object.assign(Object.create(da.prototype), { constructor: Ye, isSpotLight: !0, copy(a) { da.prototype.copy.call(this, a); this.distance = a.distance; this.angle = a.angle; this.penumbra = a.penumbra; this.decay = a.decay; this.target = a.target.clone(); this.shadow = a.shadow.clone(); return this; } }); tg.prototype = Object.assign(Object.create(ib.prototype), {
    constructor: tg,
    isPointLightShadow: !0,
    updateMatrices(a, b,
      c) { b = this.camera; const d = this.matrix; const e = this._lightPositionWorld; const f = this._lookTarget; const g = this._projScreenMatrix; e.setFromMatrixPosition(a.matrixWorld); b.position.copy(e); f.copy(b.position); f.add(this._cubeDirections[c]); b.up.copy(this._cubeUps[c]); b.lookAt(f); b.updateMatrixWorld(); d.makeTranslation(-e.x, -e.y, -e.z); g.multiplyMatrices(b.projectionMatrix, b.matrixWorldInverse); this._frustum.setFromMatrix(g); },
  }); Ze.prototype = Object.assign(Object.create(da.prototype), {
    constructor: Ze,
    isPointLight: !0,
    copy(a) {
      da.prototype.copy.call(this,
        a); this.distance = a.distance; this.decay = a.decay; this.shadow = a.shadow.clone(); return this;
    },
  }); oe.prototype = Object.assign(Object.create(bb.prototype), {
    constructor: oe,
    isOrthographicCamera: !0,
    copy(a, b) { bb.prototype.copy.call(this, a, b); this.left = a.left; this.right = a.right; this.top = a.top; this.bottom = a.bottom; this.near = a.near; this.far = a.far; this.zoom = a.zoom; this.view = a.view === null ? null : Object.assign({}, a.view); return this; },
    setViewOffset(a, b, c, d, e, f) {
      this.view === null && (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }); this.view.enabled = !0; this.view.fullWidth = a; this.view.fullHeight = b; this.view.offsetX = c; this.view.offsetY = d; this.view.width = e; this.view.height = f; this.updateProjectionMatrix();
    },
    clearViewOffset() { this.view !== null && (this.view.enabled = !1); this.updateProjectionMatrix(); },
    updateProjectionMatrix() {
      let a = (this.right - this.left) / (2 * this.zoom); let b = (this.top - this.bottom) / (2 * this.zoom); let c = (this.right + this.left) / 2; let d = (this.top + this.bottom)
/ 2; let e = c - a; c += a; a = d + b; b = d - b; if (this.view !== null && this.view.enabled) { c = this.zoom / (this.view.width / this.view.fullWidth); b = this.zoom / (this.view.height / this.view.fullHeight); const f = (this.right - this.left) / this.view.width; d = (this.top - this.bottom) / this.view.height; e += this.view.offsetX / c * f; c = e + this.view.width / c * f; a -= this.view.offsetY / b * d; b = a - this.view.height / b * d; } this.projectionMatrix.makeOrthographic(e, c, a, b, this.near, this.far); this.projectionMatrixInverse.getInverse(this.projectionMatrix);
    },
    toJSON(a) {
      a = B.prototype.toJSON.call(this, a); a.object.zoom = this.zoom; a.object.left = this.left; a.object.right = this.right; a.object.top = this.top; a.object.bottom = this.bottom; a.object.near = this.near; a.object.far = this.far; this.view !== null && (a.object.view = Object.assign({}, this.view)); return a;
    },
  }); $e.prototype = Object.assign(Object.create(ib.prototype), { constructor: $e, isDirectionalLightShadow: !0, updateMatrices(a, b, c) { ib.prototype.updateMatrices.call(this, a, b, c); } }); af.prototype = Object.assign(Object.create(da.prototype),
    { constructor: af, isDirectionalLight: !0, copy(a) { da.prototype.copy.call(this, a); this.target = a.target.clone(); this.shadow = a.shadow.clone(); return this; } }); bf.prototype = Object.assign(Object.create(da.prototype), { constructor: bf, isAmbientLight: !0 }); cf.prototype = Object.assign(Object.create(da.prototype), {
    constructor: cf,
    isRectAreaLight: !0,
    copy(a) { da.prototype.copy.call(this, a); this.width = a.width; this.height = a.height; return this; },
    toJSON(a) {
      a = da.prototype.toJSON.call(this, a); a.object.width = this.width; a.object.height = this.height; return a;
    },
  }); df.prototype = Object.assign(Object.create(S.prototype), {
    constructor: df,
    load(a, b, c, d) { const e = this; const f = new Na(e.manager); f.setPath(e.path); f.load(a, (a) => { b(e.parse(JSON.parse(a))); }, c, d); },
    parse(a) {
      function b(a) { void 0 === c[a] && console.warn('THREE.MaterialLoader: Undefined texture', a); return c[a]; } var c = this.textures; const d = new Fk[a.type](); void 0 !== a.uuid && (d.uuid = a.uuid); void 0 !== a.name && (d.name = a.name); void 0 !== a.color && d.color.setHex(a.color);
      void 0 !== a.roughness && (d.roughness = a.roughness); void 0 !== a.metalness && (d.metalness = a.metalness); void 0 !== a.sheen && (d.sheen = (new H()).setHex(a.sheen)); void 0 !== a.emissive && d.emissive.setHex(a.emissive); void 0 !== a.specular && d.specular.setHex(a.specular); void 0 !== a.shininess && (d.shininess = a.shininess); void 0 !== a.clearcoat && (d.clearcoat = a.clearcoat); void 0 !== a.clearcoatRoughness && (d.clearcoatRoughness = a.clearcoatRoughness); void 0 !== a.vertexColors && (d.vertexColors = a.vertexColors); void 0 !== a.fog && (d.fog = a.fog); void 0 !== a.flatShading && (d.flatShading = a.flatShading); void 0 !== a.blending && (d.blending = a.blending); void 0 !== a.combine && (d.combine = a.combine); void 0 !== a.side && (d.side = a.side); void 0 !== a.opacity && (d.opacity = a.opacity); void 0 !== a.transparent && (d.transparent = a.transparent); void 0 !== a.alphaTest && (d.alphaTest = a.alphaTest); void 0 !== a.depthTest && (d.depthTest = a.depthTest); void 0 !== a.depthWrite && (d.depthWrite = a.depthWrite); void 0 !== a.colorWrite && (d.colorWrite = a.colorWrite); void 0 !== a.stencilWrite && (d.stencilWrite = a.stencilWrite); void 0 !== a.stencilWriteMask && (d.stencilWriteMask = a.stencilWriteMask); void 0 !== a.stencilFunc && (d.stencilFunc = a.stencilFunc); void 0 !== a.stencilRef && (d.stencilRef = a.stencilRef); void 0 !== a.stencilFuncMask && (d.stencilFuncMask = a.stencilFuncMask); void 0 !== a.stencilFail && (d.stencilFail = a.stencilFail); void 0 !== a.stencilZFail && (d.stencilZFail = a.stencilZFail); void 0 !== a.stencilZPass && (d.stencilZPass = a.stencilZPass); void 0 !== a.wireframe && (d.wireframe = a.wireframe); void 0 !== a.wireframeLinewidth
&& (d.wireframeLinewidth = a.wireframeLinewidth); void 0 !== a.wireframeLinecap && (d.wireframeLinecap = a.wireframeLinecap); void 0 !== a.wireframeLinejoin && (d.wireframeLinejoin = a.wireframeLinejoin); void 0 !== a.rotation && (d.rotation = a.rotation); a.linewidth !== 1 && (d.linewidth = a.linewidth); void 0 !== a.dashSize && (d.dashSize = a.dashSize); void 0 !== a.gapSize && (d.gapSize = a.gapSize); void 0 !== a.scale && (d.scale = a.scale); void 0 !== a.polygonOffset && (d.polygonOffset = a.polygonOffset); void 0 !== a.polygonOffsetFactor && (d.polygonOffsetFactor = a.polygonOffsetFactor); void 0 !== a.polygonOffsetUnits && (d.polygonOffsetUnits = a.polygonOffsetUnits); void 0 !== a.skinning && (d.skinning = a.skinning); void 0 !== a.morphTargets && (d.morphTargets = a.morphTargets); void 0 !== a.morphNormals && (d.morphNormals = a.morphNormals); void 0 !== a.dithering && (d.dithering = a.dithering); void 0 !== a.visible && (d.visible = a.visible); void 0 !== a.toneMapped && (d.toneMapped = a.toneMapped); void 0 !== a.userData && (d.userData = a.userData); if (void 0 !== a.uniforms) {
        for (var e in a.uniforms) {
          const f = a.uniforms[e];
          d.uniforms[e] = {}; switch (f.type) { case 't': d.uniforms[e].value = b(f.value); break; case 'c': d.uniforms[e].value = (new H()).setHex(f.value); break; case 'v2': d.uniforms[e].value = (new w()).fromArray(f.value); break; case 'v3': d.uniforms[e].value = (new n()).fromArray(f.value); break; case 'v4': d.uniforms[e].value = (new aa()).fromArray(f.value); break; case 'm3': d.uniforms[e].value = (new Y()).fromArray(f.value); case 'm4': d.uniforms[e].value = (new U()).fromArray(f.value); break; default: d.uniforms[e].value = f.value; }
        }
      } void 0 !== a.defines
&& (d.defines = a.defines); void 0 !== a.vertexShader && (d.vertexShader = a.vertexShader); void 0 !== a.fragmentShader && (d.fragmentShader = a.fragmentShader); if (void 0 !== a.extensions) for (const g in a.extensions)d.extensions[g] = a.extensions[g]; void 0 !== a.shading && (d.flatShading = a.shading === 1); void 0 !== a.size && (d.size = a.size); void 0 !== a.sizeAttenuation && (d.sizeAttenuation = a.sizeAttenuation); void 0 !== a.map && (d.map = b(a.map)); void 0 !== a.matcap && (d.matcap = b(a.matcap)); void 0 !== a.alphaMap && (d.alphaMap = b(a.alphaMap), d.transparent = !0); void 0 !== a.bumpMap && (d.bumpMap = b(a.bumpMap)); void 0 !== a.bumpScale && (d.bumpScale = a.bumpScale); void 0 !== a.normalMap && (d.normalMap = b(a.normalMap)); void 0 !== a.normalMapType && (d.normalMapType = a.normalMapType); void 0 !== a.normalScale && (e = a.normalScale, !1 === Array.isArray(e) && (e = [e, e]), d.normalScale = (new w()).fromArray(e)); void 0 !== a.displacementMap && (d.displacementMap = b(a.displacementMap)); void 0 !== a.displacementScale && (d.displacementScale = a.displacementScale); void 0 !== a.displacementBias && (d.displacementBias = a.displacementBias); void 0 !== a.roughnessMap && (d.roughnessMap = b(a.roughnessMap)); void 0 !== a.metalnessMap && (d.metalnessMap = b(a.metalnessMap)); void 0 !== a.emissiveMap && (d.emissiveMap = b(a.emissiveMap)); void 0 !== a.emissiveIntensity && (d.emissiveIntensity = a.emissiveIntensity); void 0 !== a.specularMap && (d.specularMap = b(a.specularMap)); void 0 !== a.envMap && (d.envMap = b(a.envMap)); void 0 !== a.envMapIntensity && (d.envMapIntensity = a.envMapIntensity); void 0 !== a.reflectivity && (d.reflectivity = a.reflectivity); void 0 !== a.refractionRatio
&& (d.refractionRatio = a.refractionRatio); void 0 !== a.lightMap && (d.lightMap = b(a.lightMap)); void 0 !== a.lightMapIntensity && (d.lightMapIntensity = a.lightMapIntensity); void 0 !== a.aoMap && (d.aoMap = b(a.aoMap)); void 0 !== a.aoMapIntensity && (d.aoMapIntensity = a.aoMapIntensity); void 0 !== a.gradientMap && (d.gradientMap = b(a.gradientMap)); void 0 !== a.clearcoatNormalMap && (d.clearcoatNormalMap = b(a.clearcoatNormalMap)); void 0 !== a.clearcoatNormalScale && (d.clearcoatNormalScale = (new w()).fromArray(a.clearcoatNormalScale)); return d;
    },
    setTextures(a) { this.textures = a; return this; },
  }); const fh = { decodeText(a) { if (typeof TextDecoder !== 'undefined') return (new TextDecoder()).decode(a); for (var b = '', c = 0, d = a.length; c < d; c++)b += String.fromCharCode(a[c]); try { return decodeURIComponent(escape(b)); } catch (e) { return b; } }, extractUrlBase(a) { const b = a.lastIndexOf('/'); return b === -1 ? './' : a.substr(0, b + 1); } }; ef.prototype = Object.assign(Object.create(E.prototype), {
    constructor: ef,
    isInstancedBufferGeometry: !0,
    copy(a) {
      E.prototype.copy.call(this,
        a); this.maxInstancedCount = a.maxInstancedCount; return this;
    },
    clone() { return (new this.constructor()).copy(this); },
    toJSON() { const a = E.prototype.toJSON.call(this); a.maxInstancedCount = this.maxInstancedCount; a.isInstancedBufferGeometry = !0; return a; },
  }); ff.prototype = Object.assign(Object.create(O.prototype), {
    constructor: ff,
    isInstancedBufferAttribute: !0,
    copy(a) { O.prototype.copy.call(this, a); this.meshPerAttribute = a.meshPerAttribute; return this; },
    toJSON() {
      const a = O.prototype.toJSON.call(this);
      a.meshPerAttribute = this.meshPerAttribute; a.isInstancedBufferAttribute = !0; return a;
    },
  }); gf.prototype = Object.assign(Object.create(S.prototype), {
    constructor: gf,
    load(a, b, c, d) { const e = this; const f = new Na(e.manager); f.setPath(e.path); f.load(a, (a) => { b(e.parse(JSON.parse(a))); }, c, d); },
    parse(a) {
      const b = a.isInstancedBufferGeometry ? new ef() : new E(); let
        c = a.data.index; if (void 0 !== c) { var d = new gh[c.type](c.array); b.setIndex(new O(d, 1)); }c = a.data.attributes; for (var e in c) {
        var f = c[e]; d = new gh[f.type](f.array);
        d = new (f.isInstancedBufferAttribute ? ff : O)(d, f.itemSize, f.normalized); void 0 !== f.name && (d.name = f.name); b.addAttribute(e, d);
      } const g = a.data.morphAttributes; if (g) for (e in g) { const h = g[e]; const l = []; c = 0; for (let k = h.length; c < k; c++)f = h[c], d = new gh[f.type](f.array), d = new O(d, f.itemSize, f.normalized), void 0 !== f.name && (d.name = f.name), l.push(d); b.morphAttributes[e] = l; }e = a.data.groups || a.data.drawcalls || a.data.offsets; if (void 0 !== e) for (c = 0, f = e.length; c !== f; ++c)d = e[c], b.addGroup(d.start, d.count, d.materialIndex); c = a.data.boundingSphere;
      void 0 !== c && (e = new n(), void 0 !== c.center && e.fromArray(c.center), b.boundingSphere = new nb(e, c.radius)); a.name && (b.name = a.name); a.userData && (b.userData = a.userData); return b;
    },
  }); var gh = {
    Int8Array, Uint8Array, Uint8ClampedArray: typeof Uint8ClampedArray !== 'undefined' ? Uint8ClampedArray : Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array,
  }; hf.prototype = Object.assign(Object.create(S.prototype),
    {
      constructor: hf,
      load(a, b, c, d) { const e = this; let f = this.path === '' ? fh.extractUrlBase(a) : this.path; this.resourcePath = this.resourcePath || f; f = new Na(e.manager); f.setPath(this.path); f.load(a, (c) => { let f = null; try { f = JSON.parse(c); } catch (l) { void 0 !== d && d(l); console.error(`THREE:ObjectLoader: Can't parse ${a}.`, l.message); return; }c = f.metadata; void 0 === c || void 0 === c.type || c.type.toLowerCase() === 'geometry' ? console.error(`THREE.ObjectLoader: Can't load ${a}`) : e.parse(f, b); }, c, d); },
      parse(a, b) {
        let c = this.parseShape(a.shapes); c = this.parseGeometries(a.geometries, c); let d = this.parseImages(a.images, () => { void 0 !== b && b(e); }); d = this.parseTextures(a.textures, d); d = this.parseMaterials(a.materials, d); var e = this.parseObject(a.object, c, d); a.animations && (e.animations = this.parseAnimations(a.animations)); void 0 !== a.images && a.images.length !== 0 || void 0 === b || b(e); return e;
      },
      parseShape(a) { const b = {}; if (void 0 !== a) for (let c = 0, d = a.length; c < d; c++) { const e = (new Jb()).fromJSON(a[c]); b[e.uuid] = e; } return b; },
      parseGeometries(a,
        b) {
        const c = {}; if (void 0 !== a) {
          for (let d = new gf(), e = 0, f = a.length; e < f; e++) {
            const g = a[e]; switch (g.type) {
              case 'PlaneGeometry': case 'PlaneBufferGeometry': var h = new ta[g.type](g.width, g.height, g.widthSegments, g.heightSegments); break; case 'BoxGeometry': case 'BoxBufferGeometry': case 'CubeGeometry': h = new ta[g.type](g.width, g.height, g.depth, g.widthSegments, g.heightSegments, g.depthSegments); break; case 'CircleGeometry': case 'CircleBufferGeometry': h = new ta[g.type](g.radius, g.segments, g.thetaStart, g.thetaLength); break;
              case 'CylinderGeometry': case 'CylinderBufferGeometry': h = new ta[g.type](g.radiusTop, g.radiusBottom, g.height, g.radialSegments, g.heightSegments, g.openEnded, g.thetaStart, g.thetaLength); break; case 'ConeGeometry': case 'ConeBufferGeometry': h = new ta[g.type](g.radius, g.height, g.radialSegments, g.heightSegments, g.openEnded, g.thetaStart, g.thetaLength); break; case 'SphereGeometry': case 'SphereBufferGeometry': h = new ta[g.type](g.radius, g.widthSegments, g.heightSegments, g.phiStart, g.phiLength, g.thetaStart, g.thetaLength);
                break; case 'DodecahedronGeometry': case 'DodecahedronBufferGeometry': case 'IcosahedronGeometry': case 'IcosahedronBufferGeometry': case 'OctahedronGeometry': case 'OctahedronBufferGeometry': case 'TetrahedronGeometry': case 'TetrahedronBufferGeometry': h = new ta[g.type](g.radius, g.detail); break; case 'RingGeometry': case 'RingBufferGeometry': h = new ta[g.type](g.innerRadius, g.outerRadius, g.thetaSegments, g.phiSegments, g.thetaStart, g.thetaLength); break; case 'TorusGeometry': case 'TorusBufferGeometry': h = new ta[g.type](g.radius,
                g.tube, g.radialSegments, g.tubularSegments, g.arc); break; case 'TorusKnotGeometry': case 'TorusKnotBufferGeometry': h = new ta[g.type](g.radius, g.tube, g.tubularSegments, g.radialSegments, g.p, g.q); break; case 'TubeGeometry': case 'TubeBufferGeometry': h = new ta[g.type]((new eh[g.path.type]()).fromJSON(g.path), g.tubularSegments, g.radius, g.radialSegments, g.closed); break; case 'LatheGeometry': case 'LatheBufferGeometry': h = new ta[g.type](g.points, g.segments, g.phiStart, g.phiLength); break; case 'PolyhedronGeometry': case 'PolyhedronBufferGeometry': h = new ta[g.type](g.vertices, g.indices, g.radius, g.details); break; case 'ShapeGeometry': case 'ShapeBufferGeometry': h = []; for (var l = 0, k = g.shapes.length; l < k; l++) { var n = b[g.shapes[l]]; h.push(n); }h = new ta[g.type](h, g.curveSegments); break; case 'ExtrudeGeometry': case 'ExtrudeBufferGeometry': h = []; l = 0; for (k = g.shapes.length; l < k; l++)n = b[g.shapes[l]], h.push(n); l = g.options.extrudePath; void 0 !== l && (g.options.extrudePath = (new eh[l.type]()).fromJSON(l)); h = new ta[g.type](h, g.options); break; case 'BufferGeometry': case 'InstancedBufferGeometry': h = d.parse(g); break; case 'Geometry': 'THREE' in window && 'LegacyJSONLoader' in THREE ? h = (new THREE.LegacyJSONLoader()).parse(g, this.resourcePath).geometry : console.error('THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type "Geometry".'); break; default: console.warn(`THREE.ObjectLoader: Unsupported geometry type "${g.type}"`); continue;
            }h.uuid = g.uuid; void 0 !== g.name && (h.name = g.name); !0 === h.isBufferGeometry && void 0 !== g.userData && (h.userData = g.userData); c[g.uuid] = h;
          }
        } return c;
      },
      parseMaterials(a, b) { const c = {}; const d = {}; if (void 0 !== a) { const e = new df(); e.setTextures(b); b = 0; for (let f = a.length; b < f; b++) { const g = a[b]; if (g.type === 'MultiMaterial') { for (var h = [], l = 0; l < g.materials.length; l++) { const k = g.materials[l]; void 0 === c[k.uuid] && (c[k.uuid] = e.parse(k)); h.push(c[k.uuid]); }d[g.uuid] = h; } else void 0 === c[g.uuid] && (c[g.uuid] = e.parse(g)), d[g.uuid] = c[g.uuid]; } } return d; },
      parseAnimations(a) { for (var b = [], c = 0; c < a.length; c++) { const d = a[c]; const e = Ma.parse(d); void 0 !== d.uuid && (e.uuid = d.uuid); b.push(e); } return b; },
      parseImages(a, b) {
        function c(a) { d.manager.itemStart(a); return f.load(a, () => { d.manager.itemEnd(a); }, void 0, () => { d.manager.itemError(a); d.manager.itemEnd(a); }); } var d = this; const e = {}; if (void 0 !== a && a.length > 0) {
          b = new pg(b); var f = new bd(b); f.setCrossOrigin(this.crossOrigin); b = 0; for (let g = a.length; b < g; b++) {
            const h = a[b]; const l = h.url; if (Array.isArray(l)) { e[h.uuid] = []; for (let k = 0, n = l.length; k < n; k++) { var u = l[k]; u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(u) ? u : d.resourcePath + u; e[h.uuid].push(c(u)); } } else {
              u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)
                ? h.url : d.resourcePath + h.url, e[h.uuid] = c(u);
            }
          }
        } return e;
      },
      parseTextures(a, b) {
        function c(a, b) { if (typeof a === 'number') return a; console.warn('THREE.ObjectLoader.parseTexture: Constant should be in numeric form.', a); return b[a]; } const d = {}; if (void 0 !== a) {
          for (let e = 0, f = a.length; e < f; e++) {
            const g = a[e]; void 0 === g.image && console.warn('THREE.ObjectLoader: No "image" specified for', g.uuid); void 0 === b[g.image] && console.warn('THREE.ObjectLoader: Undefined image', g.image); const h = Array.isArray(b[g.image]) ? new ob(b[g.image])
              : new W(b[g.image]); h.needsUpdate = !0; h.uuid = g.uuid; void 0 !== g.name && (h.name = g.name); void 0 !== g.mapping && (h.mapping = c(g.mapping, Gk)); void 0 !== g.offset && h.offset.fromArray(g.offset); void 0 !== g.repeat && h.repeat.fromArray(g.repeat); void 0 !== g.center && h.center.fromArray(g.center); void 0 !== g.rotation && (h.rotation = g.rotation); void 0 !== g.wrap && (h.wrapS = c(g.wrap[0], Ci), h.wrapT = c(g.wrap[1], Ci)); void 0 !== g.format && (h.format = g.format); void 0 !== g.type && (h.type = g.type); void 0 !== g.encoding && (h.encoding = g.encoding);
            void 0 !== g.minFilter && (h.minFilter = c(g.minFilter, Di)); void 0 !== g.magFilter && (h.magFilter = c(g.magFilter, Di)); void 0 !== g.anisotropy && (h.anisotropy = g.anisotropy); void 0 !== g.flipY && (h.flipY = g.flipY); void 0 !== g.premultiplyAlpha && (h.premultiplyAlpha = g.premultiplyAlpha); void 0 !== g.unpackAlignment && (h.unpackAlignment = g.unpackAlignment); d[g.uuid] = h;
          }
        } return d;
      },
      parseObject(a, b, c) {
        function d(a) { void 0 === b[a] && console.warn('THREE.ObjectLoader: Undefined geometry', a); return b[a]; } function e(a) {
          if (void 0
!== a) { if (Array.isArray(a)) { for (var b = [], d = 0, e = a.length; d < e; d++) { const f = a[d]; void 0 === c[f] && console.warn('THREE.ObjectLoader: Undefined material', f); b.push(c[f]); } return b; } void 0 === c[a] && console.warn('THREE.ObjectLoader: Undefined material', a); return c[a]; }
        } switch (a.type) {
          case 'Scene': var f = new wd(); void 0 !== a.background && Number.isInteger(a.background) && (f.background = new H(a.background)); void 0 !== a.fog && (a.fog.type === 'Fog' ? f.fog = new Je(a.fog.color, a.fog.near, a.fog.far) : a.fog.type === 'FogExp2' && (f.fog = new Ie(a.fog.color,
            a.fog.density))); break; case 'PerspectiveCamera': f = new na(a.fov, a.aspect, a.near, a.far); void 0 !== a.focus && (f.focus = a.focus); void 0 !== a.zoom && (f.zoom = a.zoom); void 0 !== a.filmGauge && (f.filmGauge = a.filmGauge); void 0 !== a.filmOffset && (f.filmOffset = a.filmOffset); void 0 !== a.view && (f.view = Object.assign({}, a.view)); break; case 'OrthographicCamera': f = new oe(a.left, a.right, a.top, a.bottom, a.near, a.far); void 0 !== a.zoom && (f.zoom = a.zoom); void 0 !== a.view && (f.view = Object.assign({}, a.view)); break; case 'AmbientLight': f = new bf(a.color, a.intensity); break; case 'DirectionalLight': f = new af(a.color, a.intensity); break; case 'PointLight': f = new Ze(a.color, a.intensity, a.distance, a.decay); break; case 'RectAreaLight': f = new cf(a.color, a.intensity, a.width, a.height); break; case 'SpotLight': f = new Ye(a.color, a.intensity, a.distance, a.angle, a.penumbra, a.decay); break; case 'HemisphereLight': f = new We(a.color, a.groundColor, a.intensity); break; case 'SkinnedMesh': console.warn('THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.');
          case 'Mesh': f = d(a.geometry); var g = e(a.material); f = f.bones && f.bones.length > 0 ? new Od(f, g) : new ja(f, g); void 0 !== a.drawMode && f.setDrawMode(a.drawMode); break; case 'LOD': f = new Nd(); break; case 'Line': f = new xa(d(a.geometry), e(a.material), a.mode); break; case 'LineLoop': f = new Me(d(a.geometry), e(a.material)); break; case 'LineSegments': f = new ca(d(a.geometry), e(a.material)); break; case 'PointCloud': case 'Points': f = new Kc(d(a.geometry), e(a.material)); break; case 'Sprite': f = new Ld(e(a.material)); break; case 'Group': f = new Hc(); break; default: f = new B();
        }f.uuid = a.uuid; void 0 !== a.name && (f.name = a.name); void 0 !== a.matrix ? (f.matrix.fromArray(a.matrix), void 0 !== a.matrixAutoUpdate && (f.matrixAutoUpdate = a.matrixAutoUpdate), f.matrixAutoUpdate && f.matrix.decompose(f.position, f.quaternion, f.scale)) : (void 0 !== a.position && f.position.fromArray(a.position), void 0 !== a.rotation && f.rotation.fromArray(a.rotation), void 0 !== a.quaternion && f.quaternion.fromArray(a.quaternion), void 0 !== a.scale && f.scale.fromArray(a.scale)); void 0 !== a.castShadow
&& (f.castShadow = a.castShadow); void 0 !== a.receiveShadow && (f.receiveShadow = a.receiveShadow); a.shadow && (void 0 !== a.shadow.bias && (f.shadow.bias = a.shadow.bias), void 0 !== a.shadow.radius && (f.shadow.radius = a.shadow.radius), void 0 !== a.shadow.mapSize && f.shadow.mapSize.fromArray(a.shadow.mapSize), void 0 !== a.shadow.camera && (f.shadow.camera = this.parseObject(a.shadow.camera))); void 0 !== a.visible && (f.visible = a.visible); void 0 !== a.frustumCulled && (f.frustumCulled = a.frustumCulled); void 0 !== a.renderOrder && (f.renderOrder = a.renderOrder); void 0 !== a.userData && (f.userData = a.userData); void 0 !== a.layers && (f.layers.mask = a.layers); if (void 0 !== a.children) { g = a.children; for (var h = 0; h < g.length; h++)f.add(this.parseObject(g[h], b, c)); } if (a.type === 'LOD') for (a = a.levels, g = 0; g < a.length; g++) { h = a[g]; const l = f.getObjectByProperty('uuid', h.object); void 0 !== l && f.addLevel(l, h.distance); } return f;
      },
    }); var Gk = {
    UVMapping: 300,
    CubeReflectionMapping: 301,
    CubeRefractionMapping: 302,
    EquirectangularReflectionMapping: 303,
    EquirectangularRefractionMapping: 304,
    SphericalReflectionMapping: 305,
    CubeUVReflectionMapping: 306,
    CubeUVRefractionMapping: 307,
  }; var Ci = { RepeatWrapping: 1E3, ClampToEdgeWrapping: 1001, MirroredRepeatWrapping: 1002 }; var Di = {
    NearestFilter: 1003, NearestMipmapNearestFilter: 1004, NearestMipmapLinearFilter: 1005, LinearFilter: 1006, LinearMipmapNearestFilter: 1007, LinearMipmapLinearFilter: 1008,
  }; ug.prototype = Object.assign(Object.create(S.prototype), {
    constructor: ug,
    setOptions(a) { this.options = a; return this; },
    load(a, b, c, d) {
      void 0 === a && (a = ''); void 0
!== this.path && (a = this.path + a); a = this.manager.resolveURL(a); const e = this; const f = uc.get(a); if (void 0 !== f) return e.manager.itemStart(a), setTimeout(() => { b && b(f); e.manager.itemEnd(a); }, 0), f; fetch(a).then(a => a.blob()).then(a => (void 0 === e.options ? createImageBitmap(a) : createImageBitmap(a, e.options))).then((c) => { uc.add(a, c); b && b(c); e.manager.itemEnd(a); })
        .catch((b) => { d && d(b); e.manager.itemError(a); e.manager.itemEnd(a); }); e.manager.itemStart(a);
    },
  }); Object.assign(vg.prototype,
    {
      moveTo(a, b) { this.currentPath = new Wa(); this.subPaths.push(this.currentPath); this.currentPath.moveTo(a, b); },
      lineTo(a, b) { this.currentPath.lineTo(a, b); },
      quadraticCurveTo(a, b, c, d) { this.currentPath.quadraticCurveTo(a, b, c, d); },
      bezierCurveTo(a, b, c, d, e, f) { this.currentPath.bezierCurveTo(a, b, c, d, e, f); },
      splineThru(a) { this.currentPath.splineThru(a); },
      toShapes(a, b) {
        function c(a) { for (var b = [], c = 0, d = a.length; c < d; c++) { const e = a[c]; const f = new Jb(); f.curves = e.curves; b.push(f); } return b; }
        function d(a, b) { for (var c = b.length, d = !1, e = c - 1, f = 0; f < c; e = f++) { let g = b[e]; let h = b[f]; let l = h.x - g.x; let k = h.y - g.y; if (Math.abs(k) > Number.EPSILON) { if (k < 0 && (g = b[f], l = -l, h = b[e], k = -k), !(a.y < g.y || a.y > h.y)) if (a.y === g.y) { if (a.x === g.x) return !0; } else { e = k * (a.x - g.x) - l * (a.y - g.y); if (e === 0) return !0; e < 0 || (d = !d); } } else if (a.y === g.y && (h.x <= a.x && a.x <= g.x || g.x <= a.x && a.x <= h.x)) return !0; } return d; } let e = pb.isClockWise; let f = this.subPaths; if (f.length === 0) return []; if (!0 === b) return c(f); b = []; if (f.length === 1) {
          var g = f[0]; var h = new Jb(); h.curves = g.curves;
          b.push(h); return b;
        } let l = !e(f[0].getPoints()); l = a ? !l : l; h = []; const k = []; let n = []; let u = 0; k[u] = void 0; n[u] = []; for (var t = 0, r = f.length; t < r; t++) { g = f[t]; var p = g.getPoints(); var v = e(p); (v = a ? !v : v) ? (!l && k[u] && u++, k[u] = { s: new Jb(), p }, k[u].s.curves = g.curves, l && u++, n[u] = []) : n[u].push({ h: g, p: p[0] }); } if (!k[0]) return c(f); if (k.length > 1) {
          t = !1; a = []; e = 0; for (f = k.length; e < f; e++)h[e] = []; e = 0; for (f = k.length; e < f; e++) {
            for (g = n[e], v = 0; v < g.length; v++) {
              l = g[v]; u = !0; for (p = 0; p < k.length; p++) {
                d(l.p, k[p].p) && (e !== p && a.push({ froms: e, tos: p, hole: v }),
                u ? (u = !1, h[p].push(l)) : t = !0);
              }u && h[e].push(l);
            }
          }a.length > 0 && (t || (n = h));
        }t = 0; for (e = k.length; t < e; t++) for (h = k[t].s, b.push(h), a = n[t], f = 0, g = a.length; f < g; f++)h.holes.push(a[f].h); return b;
      },
    }); Object.assign(wg.prototype, {
    isFont: !0,
    generateShapes(a, b) {
      void 0 === b && (b = 100); const c = []; let d = b; b = this.data; let e = Array.from ? Array.from(a) : String(a).split(''); d /= b.resolution; const f = (b.boundingBox.yMax - b.boundingBox.yMin + b.underlineThickness) * d; a = []; for (let g = 0, h = 0, l = 0; l < e.length; l++) {
        let k = e[l]; if (k === '\n')g = 0, h -= f;
        else {
          let n = k; k = d; const u = g; const t = h; let r = b; const p = r.glyphs[n] || r.glyphs['?']; if (p) {
            n = new vg(); if (p.o) {
              r = p._cachedOutline || (p._cachedOutline = p.o.split(' ')); for (let v = 0, x = r.length; v < x;) {
                switch (r[v++]) {
                  case 'm': var w = r[v++] * k + u; var y = r[v++] * k + t; n.moveTo(w, y); break; case 'l': w = r[v++] * k + u; y = r[v++] * k + t; n.lineTo(w, y); break; case 'q': var A = r[v++] * k + u; var B = r[v++] * k + t; var C = r[v++] * k + u; var D = r[v++] * k + t; n.quadraticCurveTo(C, D, A, B); break; case 'b': A = r[v++] * k + u, B = r[v++] * k + t, C = r[v++] * k + u, D = r[v++] * k + t, w = r[v++] * k + u, y = r[v++] * k + t, n.bezierCurveTo(C,
                    D, w, y, A, B);
                }
              }
            }k = { offsetX: p.ha * k, path: n };
          } else console.error(`THREE.Font: character "${n}" does not exists in font family ${r.familyName}.`), k = void 0; g += k.offsetX; a.push(k.path);
        }
      }b = 0; for (e = a.length; b < e; b++)Array.prototype.push.apply(c, a[b].toShapes()); return c;
    },
  }); xg.prototype = Object.assign(Object.create(S.prototype), {
    constructor: xg,
    load(a, b, c, d) {
      const e = this; const f = new Na(this.manager); f.setPath(this.path); f.load(a, (a) => {
        try { var c = JSON.parse(a); } catch (l) {
          console.warn('THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.'),
          c = JSON.parse(a.substring(65, a.length - 2));
        }a = e.parse(c); b && b(a);
      }, c, d);
    },
    parse(a) { return new wg(a); },
  }); let If; var Cg = { getContext() { void 0 === If && (If = new (window.AudioContext || window.webkitAudioContext)()); return If; }, setContext(a) { If = a; } }; jf.prototype = Object.assign(Object.create(S.prototype), {
    constructor: jf,
    load(a, b, c, d) {
      const e = new Na(this.manager); e.setResponseType('arraybuffer'); e.setPath(this.path); e.load(a, (a) => { a = a.slice(0); Cg.getContext().decodeAudioData(a, (a) => { b(a); }); },
        c, d);
    },
  }); Object.assign(kf.prototype, {
    isSphericalHarmonics3: !0,
    set(a) { for (let b = 0; b < 9; b++) this.coefficients[b].copy(a[b]); return this; },
    zero() { for (let a = 0; a < 9; a++) this.coefficients[a].set(0, 0, 0); return this; },
    getAt(a, b) {
      const c = a.x; const d = a.y; a = a.z; const e = this.coefficients; b.copy(e[0]).multiplyScalar(0.282095); b.addScale(e[1], 0.488603 * d); b.addScale(e[2], 0.488603 * a); b.addScale(e[3], 0.488603 * c); b.addScale(e[4], 1.092548 * c * d); b.addScale(e[5], 1.092548 * d * a); b.addScale(e[6], 0.315392 * (3 * a * a - 1));
      b.addScale(e[7], 1.092548 * c * a); b.addScale(e[8], 0.546274 * (c * c - d * d)); return b;
    },
    getIrradianceAt(a, b) { const c = a.x; const d = a.y; a = a.z; const e = this.coefficients; b.copy(e[0]).multiplyScalar(0.886227); b.addScale(e[1], 1.023328 * d); b.addScale(e[2], 1.023328 * a); b.addScale(e[3], 1.023328 * c); b.addScale(e[4], 0.858086 * c * d); b.addScale(e[5], 0.858086 * d * a); b.addScale(e[6], 0.743125 * a * a - 0.247708); b.addScale(e[7], 0.858086 * c * a); b.addScale(e[8], 0.429043 * (c * c - d * d)); return b; },
    add(a) {
      for (let b = 0; b < 9; b++) this.coefficients[b].add(a.coefficients[b]);
      return this;
    },
    scale(a) { for (let b = 0; b < 9; b++) this.coefficients[b].multiplyScalar(a); return this; },
    lerp(a, b) { for (let c = 0; c < 9; c++) this.coefficients[c].lerp(a.coefficients[c], b); return this; },
    equals(a) { for (let b = 0; b < 9; b++) if (!this.coefficients[b].equals(a.coefficients[b])) return !1; return !0; },
    copy(a) { return this.set(a.coefficients); },
    clone() { return (new this.constructor()).copy(this); },
    fromArray(a, b) {
      void 0 === b && (b = 0); for (let c = this.coefficients, d = 0; d < 9; d++) {
        c[d].fromArray(a,
          b + 3 * d);
      } return this;
    },
    toArray(a, b) { void 0 === a && (a = []); void 0 === b && (b = 0); for (let c = this.coefficients, d = 0; d < 9; d++)c[d].toArray(a, b + 3 * d); return a; },
  }); Object.assign(kf, { getBasisAt(a, b) { const c = a.x; const d = a.y; a = a.z; b[0] = 0.282095; b[1] = 0.488603 * d; b[2] = 0.488603 * a; b[3] = 0.488603 * c; b[4] = 1.092548 * c * d; b[5] = 1.092548 * d * a; b[6] = 0.315392 * (3 * a * a - 1); b[7] = 1.092548 * c * a; b[8] = 0.546274 * (c * c - d * d); } }); Xa.prototype = Object.assign(Object.create(da.prototype), {
    constructor: Xa,
    isLightProbe: !0,
    copy(a) {
      da.prototype.copy.call(this,
        a); this.sh.copy(a.sh); this.intensity = a.intensity; return this;
    },
    toJSON(a) { return da.prototype.toJSON.call(this, a); },
  }); yg.prototype = Object.assign(Object.create(Xa.prototype), {
    constructor: yg, isHemisphereLightProbe: !0, copy(a) { Xa.prototype.copy.call(this, a); return this; }, toJSON(a) { return Xa.prototype.toJSON.call(this, a); },
  }); zg.prototype = Object.assign(Object.create(Xa.prototype), {
    constructor: zg,
    isAmbientLightProbe: !0,
    copy(a) { Xa.prototype.copy.call(this, a); return this; },
    toJSON(a) {
      return Xa.prototype.toJSON.call(this,
        a);
    },
  }); const Ei = new U(); const
    Fi = new U(); Object.assign(ai.prototype, {
    update(a) {
      const b = this._cache; if (b.focus !== a.focus || b.fov !== a.fov || b.aspect !== a.aspect * this.aspect || b.near !== a.near || b.far !== a.far || b.zoom !== a.zoom || b.eyeSep !== this.eyeSep) {
        b.focus = a.focus; b.fov = a.fov; b.aspect = a.aspect * this.aspect; b.near = a.near; b.far = a.far; b.zoom = a.zoom; b.eyeSep = this.eyeSep; const c = a.projectionMatrix.clone(); let d = b.eyeSep / 2; const e = d * b.near / b.focus; const f = b.near * Math.tan(L.DEG2RAD * b.fov * 0.5) / b.zoom; Fi.elements[12] = -d; Ei.elements[12] = d;
        d = -f * b.aspect + e; let g = f * b.aspect + e; c.elements[0] = 2 * b.near / (g - d); c.elements[8] = (g + d) / (g - d); this.cameraL.projectionMatrix.copy(c); d = -f * b.aspect - e; g = f * b.aspect - e; c.elements[0] = 2 * b.near / (g - d); c.elements[8] = (g + d) / (g - d); this.cameraR.projectionMatrix.copy(c);
      } this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(Fi); this.cameraR.matrixWorld.copy(a.matrixWorld).multiply(Ei);
    },
  }); Object.assign(Ag.prototype, {
    start() {
      this.oldTime = this.startTime = (typeof performance === 'undefined' ? Date : performance).now();
      this.elapsedTime = 0; this.running = !0;
    },
    stop() { this.getElapsedTime(); this.autoStart = this.running = !1; },
    getElapsedTime() { this.getDelta(); return this.elapsedTime; },
    getDelta() { let a = 0; if (this.autoStart && !this.running) return this.start(), 0; if (this.running) { const b = (typeof performance === 'undefined' ? Date : performance).now(); a = (b - this.oldTime) / 1E3; this.oldTime = b; this.elapsedTime += a; } return a; },
  }); const vc = new n(); const Gi = new ua(); const Hk = new n(); const
    wc = new n(); Bg.prototype = Object.assign(Object.create(B.prototype),
    {
      constructor: Bg,
      getInput() { return this.gain; },
      removeFilter() { this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null); return this; },
      getFilter() { return this.filter; },
      setFilter(a) {
        this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination); this.filter = a; this.gain.connect(this.filter);
        this.filter.connect(this.context.destination); return this;
      },
      getMasterVolume() { return this.gain.gain.value; },
      setMasterVolume(a) { this.gain.gain.setTargetAtTime(a, this.context.currentTime, 0.01); return this; },
      updateMatrixWorld(a) {
        B.prototype.updateMatrixWorld.call(this, a); a = this.context.listener; const b = this.up; this.timeDelta = this._clock.getDelta(); this.matrixWorld.decompose(vc, Gi, Hk); wc.set(0, 0, -1).applyQuaternion(Gi); if (a.positionX) {
          const c = this.context.currentTime + this.timeDelta;
          a.positionX.linearRampToValueAtTime(vc.x, c); a.positionY.linearRampToValueAtTime(vc.y, c); a.positionZ.linearRampToValueAtTime(vc.z, c); a.forwardX.linearRampToValueAtTime(wc.x, c); a.forwardY.linearRampToValueAtTime(wc.y, c); a.forwardZ.linearRampToValueAtTime(wc.z, c); a.upX.linearRampToValueAtTime(b.x, c); a.upY.linearRampToValueAtTime(b.y, c); a.upZ.linearRampToValueAtTime(b.z, c);
        } else a.setPosition(vc.x, vc.y, vc.z), a.setOrientation(wc.x, wc.y, wc.z, b.x, b.y, b.z);
      },
    }); dd.prototype = Object.assign(Object.create(B.prototype),
    {
      constructor: dd,
      getOutput() { return this.gain; },
      setNodeSource(a) { this.hasPlaybackControl = !1; this.sourceType = 'audioNode'; this.source = a; this.connect(); return this; },
      setMediaElementSource(a) { this.hasPlaybackControl = !1; this.sourceType = 'mediaNode'; this.source = this.context.createMediaElementSource(a); this.connect(); return this; },
      setMediaStreamSource(a) {
        this.hasPlaybackControl = !1; this.sourceType = 'mediaStreamNode'; this.source = this.context.createMediaStreamSource(a); this.connect();
        return this;
      },
      setBuffer(a) { this.buffer = a; this.sourceType = 'buffer'; this.autoplay && this.play(); return this; },
      play() {
        if (!0 === this.isPlaying)console.warn('THREE.Audio: Audio is already playing.'); else if (!1 === this.hasPlaybackControl)console.warn('THREE.Audio: this Audio has no playback control.'); else {
          const a = this.context.createBufferSource(); a.buffer = this.buffer; a.loop = this.loop; a.onended = this.onEnded.bind(this); this.startTime = this.context.currentTime; a.start(this.startTime, this.offset,
            this.duration); this.isPlaying = !0; this.source = a; this.setDetune(this.detune); this.setPlaybackRate(this.playbackRate); return this.connect();
        }
      },
      pause() { if (!1 === this.hasPlaybackControl)console.warn('THREE.Audio: this Audio has no playback control.'); else return !0 === this.isPlaying && (this.source.stop(), this.source.onended = null, this.offset += (this.context.currentTime - this.startTime) * this.playbackRate, this.isPlaying = !1), this; },
      stop() {
        if (!1 === this.hasPlaybackControl)console.warn('THREE.Audio: this Audio has no playback control.');
        else return this.source.stop(), this.source.onended = null, this.offset = 0, this.isPlaying = !1, this;
      },
      connect() { if (this.filters.length > 0) { this.source.connect(this.filters[0]); for (let a = 1, b = this.filters.length; a < b; a++) this.filters[a - 1].connect(this.filters[a]); this.filters[this.filters.length - 1].connect(this.getOutput()); } else this.source.connect(this.getOutput()); return this; },
      disconnect() {
        if (this.filters.length > 0) {
          this.source.disconnect(this.filters[0]); for (let a = 1, b = this.filters.length; a
< b; a++) this.filters[a - 1].disconnect(this.filters[a]); this.filters[this.filters.length - 1].disconnect(this.getOutput());
        } else this.source.disconnect(this.getOutput()); return this;
      },
      getFilters() { return this.filters; },
      setFilters(a) { a || (a = []); !0 === this.isPlaying ? (this.disconnect(), this.filters = a, this.connect()) : this.filters = a; return this; },
      setDetune(a) {
        this.detune = a; if (void 0 !== this.source.detune) {
          return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime,
            0.01), this;
        }
      },
      getDetune() { return this.detune; },
      getFilter() { return this.getFilters()[0]; },
      setFilter(a) { return this.setFilters(a ? [a] : []); },
      setPlaybackRate(a) { if (!1 === this.hasPlaybackControl)console.warn('THREE.Audio: this Audio has no playback control.'); else return this.playbackRate = a, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this; },
      getPlaybackRate() { return this.playbackRate; },
      onEnded() {
        this.isPlaying = !1;
      },
      getLoop() { return !1 === this.hasPlaybackControl ? (console.warn('THREE.Audio: this Audio has no playback control.'), !1) : this.loop; },
      setLoop(a) { if (!1 === this.hasPlaybackControl)console.warn('THREE.Audio: this Audio has no playback control.'); else return this.loop = a, !0 === this.isPlaying && (this.source.loop = this.loop), this; },
      getVolume() { return this.gain.gain.value; },
      setVolume(a) { this.gain.gain.setTargetAtTime(a, this.context.currentTime, 0.01); return this; },
    }); const xc = new n(); const Hi = new ua(); const Ik = new n(); const
    yc = new n(); Dg.prototype = Object.assign(Object.create(dd.prototype), {
    constructor: Dg,
    getOutput() { return this.panner; },
    getRefDistance() { return this.panner.refDistance; },
    setRefDistance(a) { this.panner.refDistance = a; return this; },
    getRolloffFactor() { return this.panner.rolloffFactor; },
    setRolloffFactor(a) { this.panner.rolloffFactor = a; return this; },
    getDistanceModel() { return this.panner.distanceModel; },
    setDistanceModel(a) {
      this.panner.distanceModel = a; return this;
    },
    getMaxDistance() { return this.panner.maxDistance; },
    setMaxDistance(a) { this.panner.maxDistance = a; return this; },
    setDirectionalCone(a, b, c) { this.panner.coneInnerAngle = a; this.panner.coneOuterAngle = b; this.panner.coneOuterGain = c; return this; },
    updateMatrixWorld(a) {
      B.prototype.updateMatrixWorld.call(this, a); if (!0 !== this.hasPlaybackControl || !1 !== this.isPlaying) {
        if (this.matrixWorld.decompose(xc, Hi, Ik), yc.set(0, 0, 1).applyQuaternion(Hi), a = this.panner, a.positionX) {
          const b = this.context.currentTime + this.listener.timeDelta; a.positionX.linearRampToValueAtTime(xc.x, b); a.positionY.linearRampToValueAtTime(xc.y, b); a.positionZ.linearRampToValueAtTime(xc.z, b); a.orientationX.linearRampToValueAtTime(yc.x, b); a.orientationY.linearRampToValueAtTime(yc.y, b); a.orientationZ.linearRampToValueAtTime(yc.z, b);
        } else a.setPosition(xc.x, xc.y, xc.z), a.setOrientation(yc.x, yc.y, yc.z);
      }
    },
  }); Object.assign(Eg.prototype, {
    getFrequencyData() { this.analyser.getByteFrequencyData(this.data); return this.data; },
    getAverageFrequency() { for (var a = 0, b = this.getFrequencyData(), c = 0; c < b.length; c++)a += b[c]; return a / b.length; },
  }); Object.assign(Fg.prototype, {
    accumulate(a, b) { const c = this.buffer; const d = this.valueSize; a = a * d + d; let e = this.cumulativeWeight; if (e === 0) { for (e = 0; e !== d; ++e)c[a + e] = c[e]; e = b; } else e += b, this._mixBufferRegion(c, a, 0, b / e, d); this.cumulativeWeight = e; },
    apply(a) {
      const b = this.valueSize; const c = this.buffer; a = a * b + b; let d = this.cumulativeWeight; const e = this.binding; this.cumulativeWeight = 0; d < 1 && this._mixBufferRegion(c,
        a, 3 * b, 1 - d, b); d = b; for (let f = b + b; d !== f; ++d) if (c[d] !== c[d + b]) { e.setValue(c, a); break; }
    },
    saveOriginalState() { const a = this.buffer; const b = this.valueSize; const c = 3 * b; this.binding.getValue(a, c); for (let d = b; d !== c; ++d)a[d] = a[c + d % b]; this.cumulativeWeight = 0; },
    restoreOriginalState() { this.binding.setValue(this.buffer, 3 * this.valueSize); },
    _select(a, b, c, d, e) { if (d >= 0.5) for (d = 0; d !== e; ++d)a[b + d] = a[c + d]; },
    _slerp(a, b, c, d) { ua.slerpFlat(a, b, a, b, a, c, d); },
    _lerp(a, b, c, d, e) {
      for (let f = 1 - d, g = 0; g !== e; ++g) {
        const h = b + g; a[h] = a[h] * f + a[c + g] * d;
      }
    },
  }); const Jk = /[\[\]\.:\/]/g; const Kk = `[^${'\\[\\]\\.:\\/'.replace('\\.', '')}]`; const Lk = /((?:WC+[\/:])*)/.source.replace('WC', '[^\\[\\]\\.:\\/]'); const Mk = /(WCOD+)?/.source.replace('WCOD', Kk); const Nk = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace('WC', '[^\\[\\]\\.:\\/]'); const Ok = /\.(WC+)(?:\[(.+)\])?/.source.replace('WC', '[^\\[\\]\\.:\\/]'); const Pk = new RegExp(`^${Lk}${Mk}${Nk}${Ok}$`); const Qk = ['material', 'materials', 'bones']; Object.assign(bi.prototype, {
    getValue(a, b) {
      this.bind(); const c = this._bindings[this._targetGroup.nCachedObjects_];
      void 0 !== c && c.getValue(a, b);
    },
    setValue(a, b) { for (let c = this._bindings, d = this._targetGroup.nCachedObjects_, e = c.length; d !== e; ++d)c[d].setValue(a, b); },
    bind() { for (let a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)a[b].bind(); },
    unbind() { for (let a = this._bindings, b = this._targetGroup.nCachedObjects_, c = a.length; b !== c; ++b)a[b].unbind(); },
  }); Object.assign(Aa, {
    Composite: bi,
    create(a, b, c) {
      return a && a.isAnimationObjectGroup ? new Aa.Composite(a, b, c) : new Aa(a,
        b, c);
    },
    sanitizeNodeName(a) { return a.replace(/\s/g, '_').replace(Jk, ''); },
    parseTrackName(a) {
      let b = Pk.exec(a); if (!b) throw Error(`PropertyBinding: Cannot parse trackName: ${a}`); b = {
        nodeName: b[2], objectName: b[3], objectIndex: b[4], propertyName: b[5], propertyIndex: b[6],
      }; const c = b.nodeName && b.nodeName.lastIndexOf('.'); if (void 0 !== c && c !== -1) { const d = b.nodeName.substring(c + 1); Qk.indexOf(d) !== -1 && (b.nodeName = b.nodeName.substring(0, c), b.objectName = d); } if (b.propertyName === null || b.propertyName.length === 0) {
        throw Error(`PropertyBinding: can not parse propertyName from trackName: ${
          a}`);
      } return b;
    },
    findNode(a, b) { if (!b || b === '' || b === 'root' || b === '.' || b === -1 || b === a.name || b === a.uuid) return a; if (a.skeleton) { const c = a.skeleton.getBoneByName(b); if (void 0 !== c) return c; } if (a.children) { var d = function (a) { for (let c = 0; c < a.length; c++) { let e = a[c]; if (e.name === b || e.uuid === b || (e = d(e.children))) return e; } return null; }; if (a = d(a.children)) return a; } return null; },
  }); Object.assign(Aa.prototype, {
    _getValue_unavailable() {},
    _setValue_unavailable() {},
    BindingType: {
      Direct: 0,
      EntireArray: 1,
      ArrayElement: 2,
      HasFromToArray: 3,
    },
    Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
    GetterByBindingType: [function (a, b) { a[b] = this.node[this.propertyName]; }, function (a, b) { for (let c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)a[b++] = c[d]; }, function (a, b) { a[b] = this.resolvedProperty[this.propertyIndex]; }, function (a, b) { this.resolvedProperty.toArray(a, b); }],
    SetterByBindingTypeAndVersioning: [[function (a, b) { this.targetObject[this.propertyName] = a[b]; }, function (a, b) {
      this.targetObject[this.propertyName] = a[b]; this.targetObject.needsUpdate = !0;
    }, function (a, b) { this.targetObject[this.propertyName] = a[b]; this.targetObject.matrixWorldNeedsUpdate = !0; }], [function (a, b) { for (let c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)c[d] = a[b++]; }, function (a, b) { for (let c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)c[d] = a[b++]; this.targetObject.needsUpdate = !0; }, function (a, b) { for (let c = this.resolvedProperty, d = 0, e = c.length; d !== e; ++d)c[d] = a[b++]; this.targetObject.matrixWorldNeedsUpdate = !0; }], [function (a, b) { this.resolvedProperty[this.propertyIndex] = a[b]; }, function (a,
      b) { this.resolvedProperty[this.propertyIndex] = a[b]; this.targetObject.needsUpdate = !0; }, function (a, b) { this.resolvedProperty[this.propertyIndex] = a[b]; this.targetObject.matrixWorldNeedsUpdate = !0; }], [function (a, b) { this.resolvedProperty.fromArray(a, b); }, function (a, b) { this.resolvedProperty.fromArray(a, b); this.targetObject.needsUpdate = !0; }, function (a, b) { this.resolvedProperty.fromArray(a, b); this.targetObject.matrixWorldNeedsUpdate = !0; }]],
    getValue(a, b) { this.bind(); this.getValue(a, b); },
    setValue(a,
      b) { this.bind(); this.setValue(a, b); },
    bind() {
      let a = this.node; let b = this.parsedPath; let c = b.objectName; const d = b.propertyName; let e = b.propertyIndex; a || (this.node = a = Aa.findNode(this.rootNode, b.nodeName) || this.rootNode); this.getValue = this._getValue_unavailable; this.setValue = this._setValue_unavailable; if (a) {
        if (c) {
          var f = b.objectIndex; switch (c) {
            case 'materials': if (!a.material) { console.error('THREE.PropertyBinding: Can not bind to material as node does not have a material.', this); return; } if (!a.material.materials) {
              console.error('THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.',
                this); return;
            }a = a.material.materials; break; case 'bones': if (!a.skeleton) { console.error('THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.', this); return; }a = a.skeleton.bones; for (c = 0; c < a.length; c++) if (a[c].name === f) { f = c; break; } break; default: if (void 0 === a[c]) { console.error('THREE.PropertyBinding: Can not bind to objectName of node undefined.', this); return; }a = a[c];
          } if (void 0 !== f) {
            if (void 0 === a[f]) {
              console.error('THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.',
                this, a); return;
            }a = a[f];
          }
        }f = a[d]; if (void 0 === f)console.error(`THREE.PropertyBinding: Trying to update property for track: ${b.nodeName}.${d} but it wasn't found.`, a); else {
          b = this.Versioning.None; this.targetObject = a; void 0 !== a.needsUpdate ? b = this.Versioning.NeedsUpdate : void 0 !== a.matrixWorldNeedsUpdate && (b = this.Versioning.MatrixWorldNeedsUpdate); c = this.BindingType.Direct; if (void 0 !== e) {
            if (d === 'morphTargetInfluences') {
              if (!a.geometry) {
                console.error('THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.',
                  this); return;
              } if (a.geometry.isBufferGeometry) { if (!a.geometry.morphAttributes) { console.error('THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.', this); return; } for (c = 0; c < this.node.geometry.morphAttributes.position.length; c++) if (a.geometry.morphAttributes.position[c].name === e) { e = c; break; } } else {
                if (!a.geometry.morphTargets) {
                  console.error('THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.',
                    this); return;
                } for (c = 0; c < this.node.geometry.morphTargets.length; c++) if (a.geometry.morphTargets[c].name === e) { e = c; break; }
              }
            }c = this.BindingType.ArrayElement; this.resolvedProperty = f; this.propertyIndex = e;
          } else void 0 !== f.fromArray && void 0 !== f.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = f) : Array.isArray(f) ? (c = this.BindingType.EntireArray, this.resolvedProperty = f) : this.propertyName = d; this.getValue = this.GetterByBindingType[c]; this.setValue = this.SetterByBindingTypeAndVersioning[c][b];
        }
      } else {
        console.error(`THREE.PropertyBinding: Trying to update node for track: ${
          this.path} but it wasn't found.`);
      }
    },
    unbind() { this.node = null; this.getValue = this._getValue_unbound; this.setValue = this._setValue_unbound; },
  }); Object.assign(Aa.prototype, { _getValue_unbound: Aa.prototype.getValue, _setValue_unbound: Aa.prototype.setValue }); Object.assign(ci.prototype, {
    isAnimationObjectGroup: !0,
    add() {
      for (var a = this._objects, b = a.length, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._paths, f = this._parsedPaths, g = this._bindings, h = g.length, l = void 0, k = 0, n = arguments.length; k
!== n; ++k) { const u = arguments[k]; let t = u.uuid; let r = d[t]; if (void 0 === r) { r = b++; d[t] = r; a.push(u); t = 0; for (var p = h; t !== p; ++t)g[t].push(new Aa(u, e[t], f[t])); } else if (r < c) { l = a[r]; const v = --c; p = a[v]; d[p.uuid] = r; a[r] = p; d[t] = v; a[v] = u; t = 0; for (p = h; t !== p; ++t) { const w = g[t]; let z = w[r]; w[r] = w[v]; void 0 === z && (z = new Aa(u, e[t], f[t])); w[v] = z; } } else a[r] !== l && console.error('THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.'); } this.nCachedObjects_ = c;
    },
    remove() { for (var a = this._objects, b = this.nCachedObjects_, c = this._indicesByUUID, d = this._bindings, e = d.length, f = 0, g = arguments.length; f !== g; ++f) { let h = arguments[f]; let l = h.uuid; const k = c[l]; if (void 0 !== k && k >= b) { const n = b++; let u = a[n]; c[u.uuid] = k; a[k] = u; c[l] = n; a[n] = h; h = 0; for (l = e; h !== l; ++h) { u = d[h]; const t = u[k]; u[k] = u[n]; u[n] = t; } } } this.nCachedObjects_ = b; },
    uncache() {
      for (var a = this._objects, b = a.length, c = this.nCachedObjects_, d = this._indicesByUUID, e = this._bindings, f = e.length, g = 0, h = arguments.length; g !== h; ++g) {
        let l = arguments[g].uuid; const k = d[l]; if (void 0 !== k) if (delete d[l], k < c) { l = --c; var n = a[l]; var u = --b; var t = a[u]; d[n.uuid] = k; a[k] = n; d[t.uuid] = l; a[l] = t; a.pop(); n = 0; for (t = f; n !== t; ++n) { var r = e[n]; const p = r[u]; r[k] = r[l]; r[l] = p; r.pop(); } } else for (u = --b, t = a[u], d[t.uuid] = k, a[k] = t, a.pop(), n = 0, t = f; n !== t; ++n)r = e[n], r[k] = r[u], r.pop();
      } this.nCachedObjects_ = c;
    },
    subscribe_(a, b) {
      let c = this._bindingsIndicesByPath; let d = c[a]; const e = this._bindings; if (void 0 !== d) return e[d]; const f = this._paths; const g = this._parsedPaths; const h = this._objects; const l = this.nCachedObjects_;
      const k = Array(h.length); d = e.length; c[a] = d; f.push(a); g.push(b); e.push(k); c = l; for (d = h.length; c !== d; ++c)k[c] = new Aa(h[c], a, b); return k;
    },
    unsubscribe_(a) { const b = this._bindingsIndicesByPath; const c = b[a]; if (void 0 !== c) { const d = this._paths; const e = this._parsedPaths; const f = this._bindings; const g = f.length - 1; const h = f[g]; b[a[g]] = c; f[c] = h; f.pop(); e[c] = e[g]; e.pop(); d[c] = d[g]; d.pop(); } },
  }); Object.assign(di.prototype, {
    play() { this._mixer._activateAction(this); return this; },
    stop() { this._mixer._deactivateAction(this); return this.reset(); },
    reset() { this.paused = !1; this.enabled = !0; this.time = 0; this._loopCount = -1; this._startTime = null; return this.stopFading().stopWarping(); },
    isRunning() { return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this); },
    isScheduled() { return this._mixer._isActiveAction(this); },
    startAt(a) { this._startTime = a; return this; },
    setLoop(a, b) { this.loop = a; this.repetitions = b; return this; },
    setEffectiveWeight(a) {
      this.weight = a;
      this._effectiveWeight = this.enabled ? a : 0; return this.stopFading();
    },
    getEffectiveWeight() { return this._effectiveWeight; },
    fadeIn(a) { return this._scheduleFading(a, 0, 1); },
    fadeOut(a) { return this._scheduleFading(a, 1, 0); },
    crossFadeFrom(a, b, c) { a.fadeOut(b); this.fadeIn(b); if (c) { c = this._clip.duration; const d = a._clip.duration; const e = c / d; a.warp(1, d / c, b); this.warp(e, 1, b); } return this; },
    crossFadeTo(a, b, c) { return a.crossFadeFrom(this, b, c); },
    stopFading() {
      const a = this._weightInterpolant;
      a !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(a)); return this;
    },
    setEffectiveTimeScale(a) { this.timeScale = a; this._effectiveTimeScale = this.paused ? 0 : a; return this.stopWarping(); },
    getEffectiveTimeScale() { return this._effectiveTimeScale; },
    setDuration(a) { this.timeScale = this._clip.duration / a; return this.stopWarping(); },
    syncWith(a) { this.time = a.time; this.timeScale = a.timeScale; return this.stopWarping(); },
    halt(a) {
      return this.warp(this._effectiveTimeScale,
        0, a);
    },
    warp(a, b, c) { let d = this._mixer; const e = d.time; let f = this._timeScaleInterpolant; const g = this.timeScale; f === null && (this._timeScaleInterpolant = f = d._lendControlInterpolant()); d = f.parameterPositions; f = f.sampleValues; d[0] = e; d[1] = e + c; f[0] = a / g; f[1] = b / g; return this; },
    stopWarping() { const a = this._timeScaleInterpolant; a !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(a)); return this; },
    getMixer() { return this._mixer; },
    getClip() { return this._clip; },
    getRoot() {
      return this._localRoot
|| this._mixer._root;
    },
    _update(a, b, c, d) { if (this.enabled) { let e = this._startTime; if (e !== null) { b = (a - e) * c; if (b < 0 || c === 0) return; this._startTime = null; b *= c; }b *= this._updateTimeScale(a); c = this._updateTime(b); a = this._updateWeight(a); if (a > 0) { b = this._interpolants; e = this._propertyBindings; for (let f = 0, g = b.length; f !== g; ++f)b[f].evaluate(c), e[f].accumulate(d, a); } } else this._updateWeight(a); },
    _updateWeight(a) {
      let b = 0; if (this.enabled) {
        b = this.weight; const c = this._weightInterpolant; if (c !== null) {
          const d = c.evaluate(a)[0];
          b *= d; a > c.parameterPositions[1] && (this.stopFading(), d === 0 && (this.enabled = !1));
        }
      } return this._effectiveWeight = b;
    },
    _updateTimeScale(a) { let b = 0; if (!this.paused) { b = this.timeScale; const c = this._timeScaleInterpolant; if (c !== null) { const d = c.evaluate(a)[0]; b *= d; a > c.parameterPositions[1] && (this.stopWarping(), b === 0 ? this.paused = !0 : this.timeScale = b); } } return this._effectiveTimeScale = b; },
    _updateTime(a) {
      let b = this.time + a; const c = this._clip.duration; let d = this.loop; let e = this._loopCount; const f = d === 2202; if (a === 0) {
        return e
=== -1 ? b : f && (e & 1) === 1 ? c - b : b;
      } if (d === 2200)a: { if (e === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1)), b >= c)b = c; else if (b < 0)b = 0; else { this.time = b; break a; } this.clampWhenFinished ? this.paused = !0 : this.enabled = !1; this.time = b; this._mixer.dispatchEvent({ type: 'finished', action: this, direction: a < 0 ? -1 : 1 }); } else {
        e === -1 && (a >= 0 ? (e = 0, this._setEndings(!0, this.repetitions === 0, f)) : this._setEndings(this.repetitions === 0, !0, f)); if (b >= c || b < 0) {
          d = Math.floor(b / c); b -= c * d; e += Math.abs(d); const g = this.repetitions - e; g <= 0 ? (this.clampWhenFinished
            ? this.paused = !0 : this.enabled = !1, this.time = b = a > 0 ? c : 0, this._mixer.dispatchEvent({ type: 'finished', action: this, direction: a > 0 ? 1 : -1 })) : (g === 1 ? (a = a < 0, this._setEndings(a, !a, f)) : this._setEndings(!1, !1, f), this._loopCount = e, this.time = b, this._mixer.dispatchEvent({ type: 'loop', action: this, loopDelta: d }));
        } else this.time = b; if (f && (e & 1) === 1) return c - b;
      } return b;
    },
    _setEndings(a, b, c) {
      const d = this._interpolantSettings; c ? (d.endingStart = 2401, d.endingEnd = 2401) : (d.endingStart = a ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, d.endingEnd = b ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402);
    },
    _scheduleFading(a, b, c) { let d = this._mixer; const e = d.time; let f = this._weightInterpolant; f === null && (this._weightInterpolant = f = d._lendControlInterpolant()); d = f.parameterPositions; f = f.sampleValues; d[0] = e; f[0] = b; d[1] = e + a; f[1] = c; return this; },
  }); Gg.prototype = Object.assign(Object.create(Ba.prototype), {
    constructor: Gg,
    _bindAction(a, b) {
      const c = a._localRoot || this._root; const d = a._clip.tracks; const e = d.length; const f = a._propertyBindings; a = a._interpolants; const g = c.uuid; let h = this._bindingsByRootAndName;
      let k = h[g]; void 0 === k && (k = {}, h[g] = k); for (h = 0; h !== e; ++h) { const m = d[h]; const n = m.name; let u = k[n]; if (void 0 === u) { u = f[h]; if (void 0 !== u) { u._cacheIndex === null && (++u.referenceCount, this._addInactiveBinding(u, g, n)); continue; }u = new Fg(Aa.create(c, n, b && b._propertyBindings[h].binding.parsedPath), m.ValueTypeName, m.getValueSize()); ++u.referenceCount; this._addInactiveBinding(u, g, n); }f[h] = u; a[h].resultBuffer = u.buffer; }
    },
    _activateAction(a) {
      if (!this._isActiveAction(a)) {
        if (a._cacheIndex === null) {
          var b = (a._localRoot || this._root).uuid;
          var c = a._clip.uuid; var d = this._actionsByClip[c]; this._bindAction(a, d && d.knownActions[0]); this._addInactiveAction(a, c, b);
        }b = a._propertyBindings; c = 0; for (d = b.length; c !== d; ++c) { const e = b[c]; e.useCount++ === 0 && (this._lendBinding(e), e.saveOriginalState()); } this._lendAction(a);
      }
    },
    _deactivateAction(a) { if (this._isActiveAction(a)) { for (let b = a._propertyBindings, c = 0, d = b.length; c !== d; ++c) { const e = b[c]; --e.useCount === 0 && (e.restoreOriginalState(), this._takeBackBinding(e)); } this._takeBackAction(a); } },
    _initMemoryManager() {
      this._actions = []; this._nActiveActions = 0; this._actionsByClip = {}; this._bindings = []; this._nActiveBindings = 0; this._bindingsByRootAndName = {}; this._controlInterpolants = []; this._nActiveControlInterpolants = 0; const a = this; this.stats = { actions: { get total() { return a._actions.length; }, get inUse() { return a._nActiveActions; } }, bindings: { get total() { return a._bindings.length; }, get inUse() { return a._nActiveBindings; } }, controlInterpolants: { get total() { return a._controlInterpolants.length; }, get inUse() { return a._nActiveControlInterpolants; } } };
    },
    _isActiveAction(a) { a = a._cacheIndex; return a !== null && a < this._nActiveActions; },
    _addInactiveAction(a, b, c) { const d = this._actions; const e = this._actionsByClip; let f = e[b]; void 0 === f ? (f = { knownActions: [a], actionByRoot: {} }, a._byClipCacheIndex = 0, e[b] = f) : (b = f.knownActions, a._byClipCacheIndex = b.length, b.push(a)); a._cacheIndex = d.length; d.push(a); f.actionByRoot[c] = a; },
    _removeInactiveAction(a) {
      let b = this._actions; let c = b[b.length - 1]; let d = a._cacheIndex; c._cacheIndex = d; b[d] = c; b.pop(); a._cacheIndex = null; b = a._clip.uuid;
      c = this._actionsByClip; d = c[b]; const e = d.knownActions; const f = e[e.length - 1]; const g = a._byClipCacheIndex; f._byClipCacheIndex = g; e[g] = f; e.pop(); a._byClipCacheIndex = null; delete d.actionByRoot[(a._localRoot || this._root).uuid]; e.length === 0 && delete c[b]; this._removeInactiveBindingsForAction(a);
    },
    _removeInactiveBindingsForAction(a) { a = a._propertyBindings; for (let b = 0, c = a.length; b !== c; ++b) { const d = a[b]; --d.referenceCount === 0 && this._removeInactiveBinding(d); } },
    _lendAction(a) {
      const b = this._actions; const c = a._cacheIndex;
      const d = this._nActiveActions++; const e = b[d]; a._cacheIndex = d; b[d] = a; e._cacheIndex = c; b[c] = e;
    },
    _takeBackAction(a) { const b = this._actions; const c = a._cacheIndex; const d = --this._nActiveActions; const e = b[d]; a._cacheIndex = d; b[d] = a; e._cacheIndex = c; b[c] = e; },
    _addInactiveBinding(a, b, c) { const d = this._bindingsByRootAndName; let e = d[b]; const f = this._bindings; void 0 === e && (e = {}, d[b] = e); e[c] = a; a._cacheIndex = f.length; f.push(a); },
    _removeInactiveBinding(a) {
      const b = this._bindings; let c = a.binding; const d = c.rootNode.uuid; c = c.path; const e = this._bindingsByRootAndName;
      const f = e[d]; const g = b[b.length - 1]; a = a._cacheIndex; g._cacheIndex = a; b[a] = g; b.pop(); delete f[c]; Object.keys(f).length === 0 && delete e[d];
    },
    _lendBinding(a) { const b = this._bindings; const c = a._cacheIndex; const d = this._nActiveBindings++; const e = b[d]; a._cacheIndex = d; b[d] = a; e._cacheIndex = c; b[c] = e; },
    _takeBackBinding(a) { const b = this._bindings; const c = a._cacheIndex; const d = --this._nActiveBindings; const e = b[d]; a._cacheIndex = d; b[d] = a; e._cacheIndex = c; b[c] = e; },
    _lendControlInterpolant() {
      const a = this._controlInterpolants; const b = this._nActiveControlInterpolants++;
      let c = a[b]; void 0 === c && (c = new ke(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), c.__cacheIndex = b, a[b] = c); return c;
    },
    _takeBackControlInterpolant(a) { const b = this._controlInterpolants; const c = a.__cacheIndex; const d = --this._nActiveControlInterpolants; const e = b[d]; a.__cacheIndex = d; b[d] = a; e.__cacheIndex = c; b[c] = e; },
    _controlInterpolantsResultBuffer: new Float32Array(1),
    clipAction(a, b) {
      let c = b || this._root; const d = c.uuid; c = typeof a === 'string' ? Ma.findByName(c, a) : a; a = c !== null ? c.uuid : a; const e = this._actionsByClip[a]; let f = null; if (void 0 !== e) { f = e.actionByRoot[d]; if (void 0 !== f) return f; f = e.knownActions[0]; c === null && (c = f._clip); } if (c === null) return null; b = new di(this, c, b); this._bindAction(b, f); this._addInactiveAction(b, a, d); return b;
    },
    existingAction(a, b) { let c = b || this._root; b = c.uuid; c = typeof a === 'string' ? Ma.findByName(c, a) : a; a = this._actionsByClip[c ? c.uuid : a]; return void 0 !== a ? a.actionByRoot[b] || null : null; },
    stopAllAction() {
      for (var a = this._actions, b = this._nActiveActions, c = this._bindings,
        d = this._nActiveBindings, e = this._nActiveBindings = this._nActiveActions = 0; e !== b; ++e)a[e].reset(); for (e = 0; e !== d; ++e)c[e].useCount = 0; return this;
    },
    update(a) { a *= this.timeScale; for (var b = this._actions, c = this._nActiveActions, d = this.time += a, e = Math.sign(a), f = this._accuIndex ^= 1, g = 0; g !== c; ++g)b[g]._update(d, a, e, f); a = this._bindings; b = this._nActiveBindings; for (g = 0; g !== b; ++g)a[g].apply(f); return this; },
    setTime(a) { for (let b = this.time = 0; b < this._actions.length; b++) this._actions[b].time = 0; return this.update(a); },
    getRoot() { return this._root; },
    uncacheClip(a) { const b = this._actions; a = a.uuid; const c = this._actionsByClip; let d = c[a]; if (void 0 !== d) { d = d.knownActions; for (let e = 0, f = d.length; e !== f; ++e) { const g = d[e]; this._deactivateAction(g); const h = g._cacheIndex; const k = b[b.length - 1]; g._cacheIndex = null; g._byClipCacheIndex = null; k._cacheIndex = h; b[h] = k; b.pop(); this._removeInactiveBindingsForAction(g); } delete c[a]; } },
    uncacheRoot(a) {
      a = a.uuid; const b = this._actionsByClip; for (d in b) {
        const c = b[d].actionByRoot[a]; void 0 !== c
&& (this._deactivateAction(c), this._removeInactiveAction(c));
      } var d = this._bindingsByRootAndName[a]; if (void 0 !== d) for (const e in d)a = d[e], a.restoreOriginalState(), this._removeInactiveBinding(a);
    },
    uncacheAction(a, b) { a = this.existingAction(a, b); a !== null && (this._deactivateAction(a), this._removeInactiveAction(a)); },
  }); lf.prototype.clone = function () { return new lf(void 0 === this.value.clone ? this.value : this.value.clone()); }; Hg.prototype = Object.assign(Object.create(Gb.prototype), {
    constructor: Hg,
    isInstancedInterleavedBuffer: !0,
    copy(a) { Gb.prototype.copy.call(this, a); this.meshPerAttribute = a.meshPerAttribute; return this; },
  }); Object.assign(ei.prototype, {
    linePrecision: 1,
    set(a, b) { this.ray.set(a, b); },
    setFromCamera(a, b) {
      b && b.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(b.matrixWorld), this.ray.direction.set(a.x, a.y, 0.5).unproject(b).sub(this.ray.origin).normalize(), this.camera = b) : b && b.isOrthographicCamera ? (this.ray.origin.set(a.x, a.y, (b.near + b.far) / (b.near - b.far)).unproject(b), this.ray.direction.set(0,
        0, -1).transformDirection(b.matrixWorld), this.camera = b) : console.error('THREE.Raycaster: Unsupported camera type.');
    },
    intersectObject(a, b, c) { c = c || []; Ig(a, this, c, b); c.sort(fi); return c; },
    intersectObjects(a, b, c) { c = c || []; if (!1 === Array.isArray(a)) return console.warn('THREE.Raycaster.intersectObjects: objects is not an Array.'), c; for (let d = 0, e = a.length; d < e; d++)Ig(a[d], this, c, b); c.sort(fi); return c; },
  }); Object.assign(gi.prototype, {
    set(a, b, c) { this.radius = a; this.phi = b; this.theta = c; return this; },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) { this.radius = a.radius; this.phi = a.phi; this.theta = a.theta; return this; },
    makeSafe() { this.phi = Math.max(1E-6, Math.min(Math.PI - 1E-6, this.phi)); return this; },
    setFromVector3(a) { return this.setFromCartesianCoords(a.x, a.y, a.z); },
    setFromCartesianCoords(a, b, c) { this.radius = Math.sqrt(a * a + b * b + c * c); this.radius === 0 ? this.phi = this.theta = 0 : (this.theta = Math.atan2(a, c), this.phi = Math.acos(L.clamp(b / this.radius, -1, 1))); return this; },
  });
  Object.assign(hi.prototype, {
    set(a, b, c) { this.radius = a; this.theta = b; this.y = c; return this; }, clone() { return (new this.constructor()).copy(this); }, copy(a) { this.radius = a.radius; this.theta = a.theta; this.y = a.y; return this; }, setFromVector3(a) { return this.setFromCartesianCoords(a.x, a.y, a.z); }, setFromCartesianCoords(a, b, c) { this.radius = Math.sqrt(a * a + c * c); this.theta = Math.atan2(a, c); this.y = b; return this; },
  }); const Ii = new w(); Object.assign(Jg.prototype, {
    set(a, b) {
      this.min.copy(a);
      this.max.copy(b); return this;
    },
    setFromPoints(a) { this.makeEmpty(); for (let b = 0, c = a.length; b < c; b++) this.expandByPoint(a[b]); return this; },
    setFromCenterAndSize(a, b) { b = Ii.copy(b).multiplyScalar(0.5); this.min.copy(a).sub(b); this.max.copy(a).add(b); return this; },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) { this.min.copy(a.min); this.max.copy(a.max); return this; },
    makeEmpty() { this.min.x = this.min.y = Infinity; this.max.x = this.max.y = -Infinity; return this; },
    isEmpty() {
      return this.max.x
< this.min.x || this.max.y < this.min.y;
    },
    getCenter(a) { void 0 === a && (console.warn('THREE.Box2: .getCenter() target is now required'), a = new w()); return this.isEmpty() ? a.set(0, 0) : a.addVectors(this.min, this.max).multiplyScalar(0.5); },
    getSize(a) { void 0 === a && (console.warn('THREE.Box2: .getSize() target is now required'), a = new w()); return this.isEmpty() ? a.set(0, 0) : a.subVectors(this.max, this.min); },
    expandByPoint(a) { this.min.min(a); this.max.max(a); return this; },
    expandByVector(a) {
      this.min.sub(a);
      this.max.add(a); return this;
    },
    expandByScalar(a) { this.min.addScalar(-a); this.max.addScalar(a); return this; },
    containsPoint(a) { return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y ? !1 : !0; },
    containsBox(a) { return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y; },
    getParameter(a, b) {
      void 0 === b && (console.warn('THREE.Box2: .getParameter() target is now required'), b = new w()); return b.set((a.x - this.min.x) / (this.max.x - this.min.x),
        (a.y - this.min.y) / (this.max.y - this.min.y));
    },
    intersectsBox(a) { return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y ? !1 : !0; },
    clampPoint(a, b) { void 0 === b && (console.warn('THREE.Box2: .clampPoint() target is now required'), b = new w()); return b.copy(a).clamp(this.min, this.max); },
    distanceToPoint(a) { return Ii.copy(a).clamp(this.min, this.max).sub(a).length(); },
    intersect(a) { this.min.max(a.min); this.max.min(a.max); return this; },
    union(a) {
      this.min.min(a.min);
      this.max.max(a.max); return this;
    },
    translate(a) { this.min.add(a); this.max.add(a); return this; },
    equals(a) { return a.min.equals(this.min) && a.max.equals(this.max); },
  }); const Ji = new n(); const
    Jf = new n(); Object.assign(Kg.prototype, {
    set(a, b) { this.start.copy(a); this.end.copy(b); return this; },
    clone() { return (new this.constructor()).copy(this); },
    copy(a) { this.start.copy(a.start); this.end.copy(a.end); return this; },
    getCenter(a) {
      void 0 === a && (console.warn('THREE.Line3: .getCenter() target is now required'),
      a = new n()); return a.addVectors(this.start, this.end).multiplyScalar(0.5);
    },
    delta(a) { void 0 === a && (console.warn('THREE.Line3: .delta() target is now required'), a = new n()); return a.subVectors(this.end, this.start); },
    distanceSq() { return this.start.distanceToSquared(this.end); },
    distance() { return this.start.distanceTo(this.end); },
    at(a, b) { void 0 === b && (console.warn('THREE.Line3: .at() target is now required'), b = new n()); return this.delta(b).multiplyScalar(a).add(this.start); },
    closestPointToPointParameter(a,
      b) { Ji.subVectors(a, this.start); Jf.subVectors(this.end, this.start); a = Jf.dot(Jf); a = Jf.dot(Ji) / a; b && (a = L.clamp(a, 0, 1)); return a; },
    closestPointToPoint(a, b, c) { a = this.closestPointToPointParameter(a, b); void 0 === c && (console.warn('THREE.Line3: .closestPointToPoint() target is now required'), c = new n()); return this.delta(c).multiplyScalar(a).add(this.start); },
    applyMatrix4(a) { this.start.applyMatrix4(a); this.end.applyMatrix4(a); return this; },
    equals(a) { return a.start.equals(this.start) && a.end.equals(this.end); },
  });
  pe.prototype = Object.create(B.prototype); pe.prototype.constructor = pe; pe.prototype.isImmediateRenderObject = !0; const mb = new n(); const zb = new n(); const hh = new Y(); const
    Rk = ['a', 'b', 'c']; qe.prototype = Object.create(ca.prototype); qe.prototype.constructor = qe; qe.prototype.update = function () {
    this.object.updateMatrixWorld(!0); hh.getNormalMatrix(this.object.matrixWorld); const a = this.object.matrixWorld; const b = this.geometry.attributes.position; let c = this.object.geometry; if (c && c.isGeometry) {
      for (var d = c.vertices, e = c.faces, f = c = 0, g = e.length; f < g; f++) {
        for (var h = e[f], k = 0, m = h.vertexNormals.length; k < m; k++) {
          const n = h.vertexNormals[k]; mb.copy(d[h[Rk[k]]]).applyMatrix4(a); zb.copy(n).applyMatrix3(hh).normalize().multiplyScalar(this.size)
            .add(mb); b.setXYZ(c, mb.x, mb.y, mb.z); c += 1; b.setXYZ(c, zb.x, zb.y, zb.z); c += 1;
        }
      }
    } else if (c && c.isBufferGeometry) {
      for (d = c.attributes.position, e = c.attributes.normal, k = c = 0, m = d.count; k < m; k++) {
        mb.set(d.getX(k), d.getY(k), d.getZ(k)).applyMatrix4(a), zb.set(e.getX(k), e.getY(k), e.getZ(k)), zb.applyMatrix3(hh).normalize().multiplyScalar(this.size).add(mb),
        b.setXYZ(c, mb.x, mb.y, mb.z), c += 1, b.setXYZ(c, zb.x, zb.y, zb.z), c += 1;
      }
    }b.needsUpdate = !0;
  }; const Ki = new n(); ed.prototype = Object.create(B.prototype); ed.prototype.constructor = ed; ed.prototype.dispose = function () { this.cone.geometry.dispose(); this.cone.material.dispose(); }; ed.prototype.update = function () {
    this.light.updateMatrixWorld(); const a = this.light.distance ? this.light.distance : 1E3; const b = a * Math.tan(this.light.angle); this.cone.scale.set(b, b, a); Ki.setFromMatrixPosition(this.light.target.matrixWorld); this.cone.lookAt(Ki);
    void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }; const Pb = new n(); const Kf = new U(); const
    ih = new U(); fd.prototype = Object.create(ca.prototype); fd.prototype.constructor = fd; fd.prototype.updateMatrixWorld = function (a) {
    const b = this.bones; const c = this.geometry; const d = c.getAttribute('position'); ih.getInverse(this.root.matrixWorld); for (let e = 0, f = 0; e < b.length; e++) {
      const g = b[e]; g.parent && g.parent.isBone && (Kf.multiplyMatrices(ih, g.matrixWorld), Pb.setFromMatrixPosition(Kf), d.setXYZ(f,
        Pb.x, Pb.y, Pb.z), Kf.multiplyMatrices(ih, g.parent.matrixWorld), Pb.setFromMatrixPosition(Kf), d.setXYZ(f + 1, Pb.x, Pb.y, Pb.z), f += 2);
    }c.getAttribute('position').needsUpdate = !0; B.prototype.updateMatrixWorld.call(this, a);
  }; gd.prototype = Object.create(ja.prototype); gd.prototype.constructor = gd; gd.prototype.dispose = function () { this.geometry.dispose(); this.material.dispose(); }; gd.prototype.update = function () { void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color); }; hd.prototype = Object.create(xa.prototype); hd.prototype.constructor = hd; hd.prototype.update = function () { this.scale.set(0.5 * this.light.width, 0.5 * this.light.height, 1); if (void 0 !== this.color) this.material.color.set(this.color), this.children[0].material.color.set(this.color); else { this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity); const a = this.material.color; const b = Math.max(a.r, a.g, a.b); b > 1 && a.multiplyScalar(1 / b); this.children[0].material.color.copy(this.material.color); } }; hd.prototype.dispose = function () {
    this.geometry.dispose();
    this.material.dispose(); this.children[0].geometry.dispose(); this.children[0].material.dispose();
  }; const Sk = new n(); const Li = new H(); const
    Mi = new H(); id.prototype = Object.create(B.prototype); id.prototype.constructor = id; id.prototype.dispose = function () { this.children[0].geometry.dispose(); this.children[0].material.dispose(); }; id.prototype.update = function () {
    const a = this.children[0]; if (void 0 !== this.color) this.material.color.set(this.color); else {
      const b = a.geometry.getAttribute('color'); Li.copy(this.light.color); Mi.copy(this.light.groundColor);
      for (let c = 0, d = b.count; c < d; c++) { const e = c < d / 2 ? Li : Mi; b.setXYZ(c, e.r, e.g, e.b); }b.needsUpdate = !0;
    }a.lookAt(Sk.setFromMatrixPosition(this.light.matrixWorld).negate());
  }; jd.prototype = Object.create(ja.prototype); jd.prototype.constructor = jd; jd.prototype.dispose = function () { this.geometry.dispose(); this.material.dispose(); }; jd.prototype.onBeforeRender = function () { this.position.copy(this.lightProbe.position); this.scale.set(1, 1, 1).multiplyScalar(this.size); this.material.uniforms.intensity.value = this.lightProbe.intensity; };
  mf.prototype = Object.assign(Object.create(ca.prototype), { constructor: mf, copy(a) { ca.prototype.copy.call(this, a); this.geometry.copy(a.geometry); this.material.copy(a.material); return this; }, clone() { return (new this.constructor()).copy(this); } }); nf.prototype = Object.create(ca.prototype); nf.prototype.constructor = nf; kd.prototype = Object.create(xa.prototype); kd.prototype.constructor = kd; kd.prototype.update = function () {
    function a(a, b, d, e) {
      d = (b - a) / d; r.setXYZ(k, 0, 0, 0); m++; for (n = a; n < b; n += d) {
        u = k + m, r.setXYZ(u,
          Math.sin(n) * c, 0, Math.cos(n) * c), r.setXYZ(u + 1, Math.sin(Math.min(n + d, b)) * c, 0, Math.cos(Math.min(n + d, b)) * c), r.setXYZ(u + 2, 0, 0, 0), m += 3;
      }t.addGroup(k, m, e); k += m; m = 0;
    } let b = this.audio; var c = this.range; const d = this.divisionsInnerAngle; const e = this.divisionsOuterAngle; const f = L.degToRad(b.panner.coneInnerAngle); b = L.degToRad(b.panner.coneOuterAngle); const g = f / 2; const h = b / 2; var k = 0; var m = 0; let n; let u; var t = this.geometry; var r = t.attributes.position; t.clearGroups(); a(-h, -g, e, 0); a(-g, g, d, 1); a(g, h, e, 0); r.needsUpdate = !0; f === b && (this.material[0].visible = !1);
  }; kd.prototype.dispose = function () { this.geometry.dispose(); this.material[0].dispose(); this.material[1].dispose(); }; const De = new n(); const Lf = new n(); const
    Ni = new Y(); re.prototype = Object.create(ca.prototype); re.prototype.constructor = re; re.prototype.update = function () {
    this.object.updateMatrixWorld(!0); Ni.getNormalMatrix(this.object.matrixWorld); const a = this.object.matrixWorld; const b = this.geometry.attributes.position; let c = this.object.geometry; const d = c.vertices; c = c.faces; for (let e = 0, f = 0, g = c.length; f < g; f++) {
      const h = c[f]; const k = h.normal; De.copy(d[h.a]).add(d[h.b]).add(d[h.c]).divideScalar(3)
        .applyMatrix4(a);
      Lf.copy(k).applyMatrix3(Ni).normalize().multiplyScalar(this.size)
        .add(De); b.setXYZ(e, De.x, De.y, De.z); e += 1; b.setXYZ(e, Lf.x, Lf.y, Lf.z); e += 1;
    }b.needsUpdate = !0;
  }; const Oi = new n(); const Mf = new n(); const
    Pi = new n(); ld.prototype = Object.create(B.prototype); ld.prototype.constructor = ld; ld.prototype.dispose = function () { this.lightPlane.geometry.dispose(); this.lightPlane.material.dispose(); this.targetLine.geometry.dispose(); this.targetLine.material.dispose(); }; ld.prototype.update = function () {
    Oi.setFromMatrixPosition(this.light.matrixWorld);
    Mf.setFromMatrixPosition(this.light.target.matrixWorld); Pi.subVectors(Mf, Oi); this.lightPlane.lookAt(Mf); void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)); this.targetLine.lookAt(Mf); this.targetLine.scale.z = Pi.length();
  }; var of = new n(); const
    ia = new bb(); se.prototype = Object.create(ca.prototype); se.prototype.constructor = se; se.prototype.update = function () {
    const a = this.geometry; const b = this.pointMap; ia.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse); qa('c', b, a, ia, 0, 0, -1); qa('t', b, a, ia, 0, 0, 1); qa('n1', b, a, ia, -1, -1, -1); qa('n2', b, a, ia, 1, -1, -1); qa('n3', b, a, ia, -1, 1, -1); qa('n4', b, a, ia, 1, 1, -1); qa('f1', b, a, ia, -1, -1, 1); qa('f2', b, a, ia, 1, -1, 1); qa('f3', b, a, ia, -1, 1, 1); qa('f4', b, a, ia, 1, 1, 1); qa('u1', b, a, ia, 0.7, 1.1, -1); qa('u2', b, a, ia, -0.7, 1.1, -1); qa('u3', b, a, ia, 0, 2, -1); qa('cf1', b, a, ia, -1, 0, 1); qa('cf2', b, a, ia, 1, 0, 1); qa('cf3', b, a, ia, 0, -1, 1); qa('cf4',
      b, a, ia, 0, 1, 1); qa('cn1', b, a, ia, -1, 0, -1); qa('cn2', b, a, ia, 1, 0, -1); qa('cn3', b, a, ia, 0, -1, -1); qa('cn4', b, a, ia, 0, 1, -1); a.getAttribute('position').needsUpdate = !0;
  }; const Nf = new ab(); sb.prototype = Object.create(ca.prototype); sb.prototype.constructor = sb; sb.prototype.update = function (a) {
    void 0 !== a && console.warn('THREE.BoxHelper: .update() has no longer arguments.'); void 0 !== this.object && Nf.setFromObject(this.object); if (!Nf.isEmpty()) {
      a = Nf.min; const b = Nf.max; const c = this.geometry.attributes.position; const d = c.array; d[0] = b.x; d[1] = b.y; d[2] = b.z; d[3] = a.x; d[4] = b.y; d[5] = b.z; d[6] = a.x; d[7] = a.y; d[8] = b.z; d[9] = b.x; d[10] = a.y; d[11] = b.z; d[12] = b.x; d[13] = b.y; d[14] = a.z; d[15] = a.x; d[16] = b.y; d[17] = a.z; d[18] = a.x; d[19] = a.y; d[20] = a.z; d[21] = b.x; d[22] = a.y; d[23] = a.z; c.needsUpdate = !0; this.geometry.computeBoundingSphere();
    }
  }; sb.prototype.setFromObject = function (a) { this.object = a; this.update(); return this; }; sb.prototype.copy = function (a) { ca.prototype.copy.call(this, a); this.object = a.object; return this; }; sb.prototype.clone = function () { return (new this.constructor()).copy(this); };
  te.prototype = Object.create(ca.prototype); te.prototype.constructor = te; te.prototype.updateMatrixWorld = function (a) { const b = this.box; b.isEmpty() || (b.getCenter(this.position), b.getSize(this.scale), this.scale.multiplyScalar(0.5), B.prototype.updateMatrixWorld.call(this, a)); }; ue.prototype = Object.create(xa.prototype); ue.prototype.constructor = ue; ue.prototype.updateMatrixWorld = function (a) {
    let b = -this.plane.constant; Math.abs(b) < 1E-8 && (b = 1E-8); this.scale.set(0.5 * this.size, 0.5 * this.size, b); this.children[0].material.side = b < 0 ? 1 : 0; this.lookAt(this.plane.normal); B.prototype.updateMatrixWorld.call(this, a);
  }; const Qi = new n(); let pf; let
    Lg; tb.prototype = Object.create(B.prototype); tb.prototype.constructor = tb; tb.prototype.setDirection = function (a) { a.y > 0.99999 ? this.quaternion.set(0, 0, 0, 1) : a.y < -0.99999 ? this.quaternion.set(1, 0, 0, 0) : (Qi.set(a.z, 0, -a.x).normalize(), this.quaternion.setFromAxisAngle(Qi, Math.acos(a.y))); }; tb.prototype.setLength = function (a, b, c) {
    void 0 === b && (b = 0.2 * a); void 0 === c && (c = 0.2 * b); this.line.scale.set(1, Math.max(1E-4, a - b), 1); this.line.updateMatrix();
    this.cone.scale.set(c, b, c); this.cone.position.y = a; this.cone.updateMatrix();
  }; tb.prototype.setColor = function (a) { this.line.material.color.set(a); this.cone.material.color.set(a); }; tb.prototype.copy = function (a) { B.prototype.copy.call(this, a, !1); this.line.copy(a.line); this.cone.copy(a.cone); return this; }; tb.prototype.clone = function () { return (new this.constructor()).copy(this); }; ve.prototype = Object.create(ca.prototype); ve.prototype.constructor = ve; D.create = function (a, b) {
    console.log('THREE.Curve.create() has been deprecated');
    a.prototype = Object.create(D.prototype); a.prototype.constructor = a; a.prototype.getPoint = b; return a;
  }; Object.assign(rb.prototype, {
    createPointsGeometry(a) { console.warn('THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.'); a = this.getPoints(a); return this.createGeometry(a); },
    createSpacedPointsGeometry(a) {
      console.warn('THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.');
      a = this.getSpacedPoints(a); return this.createGeometry(a);
    },
    createGeometry(a) { console.warn('THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.'); for (var b = new F(), c = 0, d = a.length; c < d; c++) { const e = a[c]; b.vertices.push(new n(e.x, e.y, e.z || 0)); } return b; },
  }); Object.assign(Wa.prototype, { fromPoints(a) { console.warn('THREE.Path: .fromPoints() has been renamed to .setFromPoints().'); this.setFromPoints(a); } }); ji.prototype = Object.create(ya.prototype);
  ki.prototype = Object.create(ya.prototype); Mg.prototype = Object.create(ya.prototype); Object.assign(Mg.prototype, { initFromArray() { console.error('THREE.Spline: .initFromArray() has been removed.'); }, getControlPointsArray() { console.error('THREE.Spline: .getControlPointsArray() has been removed.'); }, reparametrizeByArcLength() { console.error('THREE.Spline: .reparametrizeByArcLength() has been removed.'); } }); mf.prototype.setColors = function () { console.error('THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.'); };
  fd.prototype.update = function () { console.error('THREE.SkeletonHelper: update() no longer needs to be called.'); }; Object.assign(S.prototype, { extractUrlBase(a) { console.warn('THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.'); return fh.extractUrlBase(a); } }); S.Handlers = { add() { console.error('THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.'); }, get() { console.error('THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.'); } };
  Object.assign(hf.prototype, { setTexturePath(a) { console.warn('THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().'); return this.setResourcePath(a); } }); Object.assign(Jg.prototype, {
    center(a) { console.warn('THREE.Box2: .center() has been renamed to .getCenter().'); return this.getCenter(a); },
    empty() { console.warn('THREE.Box2: .empty() has been renamed to .isEmpty().'); return this.isEmpty(); },
    isIntersectionBox(a) {
      console.warn('THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().');
      return this.intersectsBox(a);
    },
    size(a) { console.warn('THREE.Box2: .size() has been renamed to .getSize().'); return this.getSize(a); },
  }); Object.assign(ab.prototype, {
    center(a) { console.warn('THREE.Box3: .center() has been renamed to .getCenter().'); return this.getCenter(a); },
    empty() { console.warn('THREE.Box3: .empty() has been renamed to .isEmpty().'); return this.isEmpty(); },
    isIntersectionBox(a) {
      console.warn('THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().');
      return this.intersectsBox(a);
    },
    isIntersectionSphere(a) { console.warn('THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().'); return this.intersectsSphere(a); },
    size(a) { console.warn('THREE.Box3: .size() has been renamed to .getSize().'); return this.getSize(a); },
  }); Kg.prototype.center = function (a) { console.warn('THREE.Line3: .center() has been renamed to .getCenter().'); return this.getCenter(a); }; Object.assign(L, {
    random16() {
      console.warn('THREE.Math: .random16() has been deprecated. Use Math.random() instead.');
      return Math.random();
    },
    nearestPowerOfTwo(a) { console.warn('THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().'); return L.floorPowerOfTwo(a); },
    nextPowerOfTwo(a) { console.warn('THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().'); return L.ceilPowerOfTwo(a); },
  }); Object.assign(Y.prototype, {
    flattenToArrayOffset(a, b) { console.warn('THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'); return this.toArray(a, b); },
    multiplyVector3(a) {
      console.warn('THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.');
      return a.applyMatrix3(this);
    },
    multiplyVector3Array() { console.error('THREE.Matrix3: .multiplyVector3Array() has been removed.'); },
    applyToBuffer(a) { console.warn('THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.'); return this.applyToBufferAttribute(a); },
    applyToVector3Array() { console.error('THREE.Matrix3: .applyToVector3Array() has been removed.'); },
  }); Object.assign(U.prototype, {
    extractPosition(a) {
      console.warn('THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().');
      return this.copyPosition(a);
    },
    flattenToArrayOffset(a, b) { console.warn('THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'); return this.toArray(a, b); },
    getPosition() { console.warn('THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.'); return (new n()).setFromMatrixColumn(this, 3); },
    setRotationFromQuaternion(a) {
      console.warn('THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().');
      return this.makeRotationFromQuaternion(a);
    },
    multiplyToArray() { console.warn('THREE.Matrix4: .multiplyToArray() has been removed.'); },
    multiplyVector3(a) { console.warn('THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.'); return a.applyMatrix4(this); },
    multiplyVector4(a) { console.warn('THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.'); return a.applyMatrix4(this); },
    multiplyVector3Array() { console.error('THREE.Matrix4: .multiplyVector3Array() has been removed.'); },
    rotateAxis(a) { console.warn('THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.'); a.transformDirection(this); },
    crossVector(a) { console.warn('THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.'); return a.applyMatrix4(this); },
    translate() { console.error('THREE.Matrix4: .translate() has been removed.'); },
    rotateX() { console.error('THREE.Matrix4: .rotateX() has been removed.'); },
    rotateY() { console.error('THREE.Matrix4: .rotateY() has been removed.'); },
    rotateZ() { console.error('THREE.Matrix4: .rotateZ() has been removed.'); },
    rotateByAxis() { console.error('THREE.Matrix4: .rotateByAxis() has been removed.'); },
    applyToBuffer(a) { console.warn('THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.'); return this.applyToBufferAttribute(a); },
    applyToVector3Array() { console.error('THREE.Matrix4: .applyToVector3Array() has been removed.'); },
    makeFrustum(a, b, c, d, e, f) {
      console.warn('THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.');
      return this.makePerspective(a, b, d, c, e, f);
    },
  }); cb.prototype.isIntersectionLine = function (a) { console.warn('THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().'); return this.intersectsLine(a); }; ua.prototype.multiplyVector3 = function (a) { console.warn('THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.'); return a.applyQuaternion(this); }; Object.assign(Sb.prototype, {
    isIntersectionBox(a) {
      console.warn('THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().');
      return this.intersectsBox(a);
    },
    isIntersectionPlane(a) { console.warn('THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().'); return this.intersectsPlane(a); },
    isIntersectionSphere(a) { console.warn('THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().'); return this.intersectsSphere(a); },
  }); Object.assign(R.prototype, {
    area() { console.warn('THREE.Triangle: .area() has been renamed to .getArea().'); return this.getArea(); },
    barycoordFromPoint(a,
      b) { console.warn('THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'); return this.getBarycoord(a, b); },
    midpoint(a) { console.warn('THREE.Triangle: .midpoint() has been renamed to .getMidpoint().'); return this.getMidpoint(a); },
    normal(a) { console.warn('THREE.Triangle: .normal() has been renamed to .getNormal().'); return this.getNormal(a); },
    plane(a) { console.warn('THREE.Triangle: .plane() has been renamed to .getPlane().'); return this.getPlane(a); },
  }); Object.assign(R,
    { barycoordFromPoint(a, b, c, d, e) { console.warn('THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'); return R.getBarycoord(a, b, c, d, e); }, normal(a, b, c, d) { console.warn('THREE.Triangle: .normal() has been renamed to .getNormal().'); return R.getNormal(a, b, c, d); } }); Object.assign(Jb.prototype, {
    extractAllPoints(a) { console.warn('THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.'); return this.extractPoints(a); },
    extrude(a) {
      console.warn('THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.');
      return new fc(this, a);
    },
    makeGeometry(a) { console.warn('THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.'); return new gc(this, a); },
  }); Object.assign(w.prototype, {
    fromAttribute(a, b, c) { console.warn('THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().'); return this.fromBufferAttribute(a, b, c); },
    distanceToManhattan(a) { console.warn('THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().'); return this.manhattanDistanceTo(a); },
    lengthManhattan() { console.warn('THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().'); return this.manhattanLength(); },
  }); Object.assign(n.prototype, {
    setEulerFromRotationMatrix() { console.error('THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.'); },
    setEulerFromQuaternion() { console.error('THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.'); },
    getPositionFromMatrix(a) {
      console.warn('THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().');
      return this.setFromMatrixPosition(a);
    },
    getScaleFromMatrix(a) { console.warn('THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().'); return this.setFromMatrixScale(a); },
    getColumnFromMatrix(a, b) { console.warn('THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().'); return this.setFromMatrixColumn(b, a); },
    applyProjection(a) { console.warn('THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.'); return this.applyMatrix4(a); },
    fromAttribute(a, b, c) { console.warn('THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().'); return this.fromBufferAttribute(a, b, c); },
    distanceToManhattan(a) { console.warn('THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().'); return this.manhattanDistanceTo(a); },
    lengthManhattan() { console.warn('THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().'); return this.manhattanLength(); },
  }); Object.assign(aa.prototype,
    { fromAttribute(a, b, c) { console.warn('THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().'); return this.fromBufferAttribute(a, b, c); }, lengthManhattan() { console.warn('THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().'); return this.manhattanLength(); } }); Object.assign(F.prototype, { computeTangents() { console.error('THREE.Geometry: .computeTangents() has been removed.'); }, computeLineDistances() { console.error('THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.'); } });
  Object.assign(B.prototype, {
    getChildByName(a) { console.warn('THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().'); return this.getObjectByName(a); }, renderDepth() { console.warn('THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.'); }, translate(a, b) { console.warn('THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.'); return this.translateOnAxis(b, a); }, getWorldRotation() { console.error('THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.'); },
  });
  Object.defineProperties(B.prototype, { eulerOrder: { get() { console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'); return this.rotation.order; }, set(a) { console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'); this.rotation.order = a; } }, useQuaternion: { get() { console.warn('THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'); }, set() { console.warn('THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'); } } });
  Object.defineProperties(Nd.prototype, { objects: { get() { console.warn('THREE.LOD: .objects has been renamed to .levels.'); return this.levels; } } }); Object.defineProperty(Le.prototype, 'useVertexTexture', { get() { console.warn('THREE.Skeleton: useVertexTexture has been removed.'); }, set() { console.warn('THREE.Skeleton: useVertexTexture has been removed.'); } }); Od.prototype.initBones = function () { console.error('THREE.SkinnedMesh: initBones() has been removed.'); }; Object.defineProperty(D.prototype,
    '__arcLengthDivisions', { get() { console.warn('THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.'); return this.arcLengthDivisions; }, set(a) { console.warn('THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.'); this.arcLengthDivisions = a; } }); na.prototype.setLens = function (a, b) { console.warn('THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.'); void 0 !== b && (this.filmGauge = b); this.setFocalLength(a); }; Object.defineProperties(da.prototype,
    {
      onlyShadow: { set() { console.warn('THREE.Light: .onlyShadow has been removed.'); } },
      shadowCameraFov: { set(a) { console.warn('THREE.Light: .shadowCameraFov is now .shadow.camera.fov.'); this.shadow.camera.fov = a; } },
      shadowCameraLeft: { set(a) { console.warn('THREE.Light: .shadowCameraLeft is now .shadow.camera.left.'); this.shadow.camera.left = a; } },
      shadowCameraRight: { set(a) { console.warn('THREE.Light: .shadowCameraRight is now .shadow.camera.right.'); this.shadow.camera.right = a; } },
      shadowCameraTop: {
        set(a) {
          console.warn('THREE.Light: .shadowCameraTop is now .shadow.camera.top.');
          this.shadow.camera.top = a;
        },
      },
      shadowCameraBottom: { set(a) { console.warn('THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.'); this.shadow.camera.bottom = a; } },
      shadowCameraNear: { set(a) { console.warn('THREE.Light: .shadowCameraNear is now .shadow.camera.near.'); this.shadow.camera.near = a; } },
      shadowCameraFar: { set(a) { console.warn('THREE.Light: .shadowCameraFar is now .shadow.camera.far.'); this.shadow.camera.far = a; } },
      shadowCameraVisible: { set() { console.warn('THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.'); } },
      shadowBias: { set(a) { console.warn('THREE.Light: .shadowBias is now .shadow.bias.'); this.shadow.bias = a; } },
      shadowDarkness: { set() { console.warn('THREE.Light: .shadowDarkness has been removed.'); } },
      shadowMapWidth: { set(a) { console.warn('THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.'); this.shadow.mapSize.width = a; } },
      shadowMapHeight: { set(a) { console.warn('THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.'); this.shadow.mapSize.height = a; } },
    }); Object.defineProperties(O.prototype,
    { length: { get() { console.warn('THREE.BufferAttribute: .length has been deprecated. Use .count instead.'); return this.array.length; } } }); Object.assign(O.prototype, { copyIndicesArray() { console.error('THREE.BufferAttribute: .copyIndicesArray() has been removed.'); }, setArray(a) { console.warn('THREE.BufferAttribute: .setArray has been deprecated. Use BufferGeometry .setAttribute to replace/resize attribute buffers'); this.count = void 0 !== a ? a.length / this.itemSize : 0; this.array = a; return this; } });
  Object.assign(E.prototype, {
    addIndex(a) { console.warn('THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().'); this.setIndex(a); },
    addDrawCall(a, b, c) { void 0 !== c && console.warn('THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.'); console.warn('THREE.BufferGeometry: .addDrawCall() is now .addGroup().'); this.addGroup(a, b); },
    clearDrawCalls() { console.warn('THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().'); this.clearGroups(); },
    computeTangents() { console.warn('THREE.BufferGeometry: .computeTangents() has been removed.'); },
    computeOffsets() { console.warn('THREE.BufferGeometry: .computeOffsets() has been removed.'); },
  }); Object.defineProperties(E.prototype, { drawcalls: { get() { console.error('THREE.BufferGeometry: .drawcalls has been renamed to .groups.'); return this.groups; } }, offsets: { get() { console.warn('THREE.BufferGeometry: .offsets has been renamed to .groups.'); return this.groups; } } }); Object.assign(Gb.prototype, {
    setArray(a) {
      console.warn('THREE.InterleavedBuffer: .setArray has been deprecated. Use BufferGeometry .setAttribute to replace/resize attribute buffers');
      this.count = void 0 !== a ? a.length / this.stride : 0; this.array = a; return this;
    },
  }); Object.assign(eb.prototype, { getArrays() { console.error('THREE.ExtrudeBufferGeometry: .getArrays() has been removed.'); }, addShapeList() { console.error('THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.'); }, addShape() { console.error('THREE.ExtrudeBufferGeometry: .addShape() has been removed.'); } }); Object.defineProperties(lf.prototype, {
    dynamic: { set() { console.warn('THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.'); } },
    onUpdate: { value() { console.warn('THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.'); return this; } },
  }); Object.defineProperties(M.prototype, {
    wrapAround: { get() { console.warn('THREE.Material: .wrapAround has been removed.'); }, set() { console.warn('THREE.Material: .wrapAround has been removed.'); } },
    overdraw: { get() { console.warn('THREE.Material: .overdraw has been removed.'); }, set() { console.warn('THREE.Material: .overdraw has been removed.'); } },
    wrapRGB: { get() { console.warn('THREE.Material: .wrapRGB has been removed.'); return new H(); } },
    shading: { get() { console.error(`THREE.${this.type}: .shading has been removed. Use the boolean .flatShading instead.`); }, set(a) { console.warn(`THREE.${this.type}: .shading has been removed. Use the boolean .flatShading instead.`); this.flatShading = a === 1; } },
    stencilMask: {
      get() { console.warn(`THREE.${this.type}: .stencilMask has been removed. Use .stencilFuncMask instead.`); return this.stencilFuncMask; },
      set(a) { console.warn(`THREE.${this.type}: .stencilMask has been removed. Use .stencilFuncMask instead.`); this.stencilFuncMask = a; },
    },
  }); Object.defineProperties(Ra.prototype, { metal: { get() { console.warn('THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.'); return !1; }, set() { console.warn('THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead'); } } }); Object.defineProperties(ma.prototype, {
    derivatives: {
      get() {
        console.warn('THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.');
        return this.extensions.derivatives;
      },
      set(a) { console.warn('THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.'); this.extensions.derivatives = a; },
    },
  }); Object.assign(hg.prototype, {
    clearTarget(a, b, c, d) { console.warn('THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.'); this.setRenderTarget(a); this.clear(b, c, d); },
    animate(a) { console.warn('THREE.WebGLRenderer: .animate() is now .setAnimationLoop().'); this.setAnimationLoop(a); },
    getCurrentRenderTarget() { console.warn('THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().'); return this.getRenderTarget(); },
    getMaxAnisotropy() { console.warn('THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().'); return this.capabilities.getMaxAnisotropy(); },
    getPrecision() { console.warn('THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.'); return this.capabilities.precision; },
    resetGLState() {
      console.warn('THREE.WebGLRenderer: .resetGLState() is now .state.reset().');
      return this.state.reset();
    },
    supportsFloatTextures() { console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."); return this.extensions.get('OES_texture_float'); },
    supportsHalfFloatTextures() { console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."); return this.extensions.get('OES_texture_half_float'); },
    supportsStandardDerivatives() {
      console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
      return this.extensions.get('OES_standard_derivatives');
    },
    supportsCompressedTextureS3TC() { console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."); return this.extensions.get('WEBGL_compressed_texture_s3tc'); },
    supportsCompressedTexturePVRTC() { console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."); return this.extensions.get('WEBGL_compressed_texture_pvrtc'); },
    supportsBlendMinMax() { console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."); return this.extensions.get('EXT_blend_minmax'); },
    supportsVertexTextures() { console.warn('THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.'); return this.capabilities.vertexTextures; },
    supportsInstancedArrays() {
      console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
      return this.extensions.get('ANGLE_instanced_arrays');
    },
    enableScissorTest(a) { console.warn('THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().'); this.setScissorTest(a); },
    initMaterial() { console.warn('THREE.WebGLRenderer: .initMaterial() has been removed.'); },
    addPrePlugin() { console.warn('THREE.WebGLRenderer: .addPrePlugin() has been removed.'); },
    addPostPlugin() { console.warn('THREE.WebGLRenderer: .addPostPlugin() has been removed.'); },
    updateShadowMap() { console.warn('THREE.WebGLRenderer: .updateShadowMap() has been removed.'); },
    setFaceCulling() { console.warn('THREE.WebGLRenderer: .setFaceCulling() has been removed.'); },
    allocTextureUnit() { console.warn('THREE.WebGLRenderer: .allocTextureUnit() has been removed.'); },
    setTexture() { console.warn('THREE.WebGLRenderer: .setTexture() has been removed.'); },
    setTexture2D() { console.warn('THREE.WebGLRenderer: .setTexture2D() has been removed.'); },
    setTextureCube() { console.warn('THREE.WebGLRenderer: .setTextureCube() has been removed.'); },
    getActiveMipMapLevel() {
      console.warn('THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().');
      return this.getActiveMipmapLevel();
    },
  }); Object.defineProperties(hg.prototype, {
    shadowMapEnabled: { get() { return this.shadowMap.enabled; }, set(a) { console.warn('THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.'); this.shadowMap.enabled = a; } },
    shadowMapType: { get() { return this.shadowMap.type; }, set(a) { console.warn('THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.'); this.shadowMap.type = a; } },
    shadowMapCullFace: {
      get() { console.warn('THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.'); },
      set() { console.warn('THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.'); },
    },
    context: { get() { console.warn('THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.'); return this.getContext(); } },
  }); Object.defineProperties(Jh.prototype, {
    cullFace: { get() { console.warn('THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.'); }, set() { console.warn('THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.'); } },
    renderReverseSided: { get() { console.warn('THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.'); }, set() { console.warn('THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.'); } },
    renderSingleSided: { get() { console.warn('THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.'); }, set() { console.warn('THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.'); } },
  });
  Object.defineProperties(Ab.prototype, { activeCubeFace: { set() { console.warn('THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().'); } }, activeMipMapLevel: { set() { console.warn('THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().'); } } }); Object.defineProperties(la.prototype, {
    wrapS: {
      get() {
        console.warn('THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.');
        return this.texture.wrapS;
      },
      set(a) { console.warn('THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.'); this.texture.wrapS = a; },
    },
    wrapT: { get() { console.warn('THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.'); return this.texture.wrapT; }, set(a) { console.warn('THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.'); this.texture.wrapT = a; } },
    magFilter: {
      get() { console.warn('THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'); return this.texture.magFilter; },
      set(a) { console.warn('THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'); this.texture.magFilter = a; },
    },
    minFilter: { get() { console.warn('THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'); return this.texture.minFilter; }, set(a) { console.warn('THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'); this.texture.minFilter = a; } },
    anisotropy: {
      get() { console.warn('THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'); return this.texture.anisotropy; },
      set(a) { console.warn('THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'); this.texture.anisotropy = a; },
    },
    offset: { get() { console.warn('THREE.WebGLRenderTarget: .offset is now .texture.offset.'); return this.texture.offset; }, set(a) { console.warn('THREE.WebGLRenderTarget: .offset is now .texture.offset.'); this.texture.offset = a; } },
    repeat: {
      get() { console.warn('THREE.WebGLRenderTarget: .repeat is now .texture.repeat.'); return this.texture.repeat; },
      set(a) {
        console.warn('THREE.WebGLRenderTarget: .repeat is now .texture.repeat.');
        this.texture.repeat = a;
      },
    },
    format: { get() { console.warn('THREE.WebGLRenderTarget: .format is now .texture.format.'); return this.texture.format; }, set(a) { console.warn('THREE.WebGLRenderTarget: .format is now .texture.format.'); this.texture.format = a; } },
    type: { get() { console.warn('THREE.WebGLRenderTarget: .type is now .texture.type.'); return this.texture.type; }, set(a) { console.warn('THREE.WebGLRenderTarget: .type is now .texture.type.'); this.texture.type = a; } },
    generateMipmaps: {
      get() {
        console.warn('THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.');
        return this.texture.generateMipmaps;
      },
      set(a) { console.warn('THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.'); this.texture.generateMipmaps = a; },
    },
  }); Object.defineProperties(gg.prototype, { standing: { set() { console.warn('THREE.WebVRManager: .standing has been removed.'); } }, userHeight: { set() { console.warn('THREE.WebVRManager: .userHeight has been removed.'); } } }); dd.prototype.load = function (a) {
    console.warn('THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.');
    const b = this; (new jf()).load(a, (a) => { b.setBuffer(a); }); return this;
  }; Eg.prototype.getData = function () { console.warn('THREE.AudioAnalyser: .getData() is now .getFrequencyData().'); return this.getFrequencyData(); }; Dc.prototype.updateCubeMap = function (a, b) { console.warn('THREE.CubeCamera: .updateCubeMap() is now .update().'); return this.update(a, b); }; Kb.crossOrigin = void 0; Kb.loadTexture = function (a, b, c, d) {
    console.warn('THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.'); const e = new Ve(); e.setCrossOrigin(this.crossOrigin); a = e.load(a, c, void 0, d); b && (a.mapping = b); return a;
  }; Kb.loadTextureCube = function (a, b, c, d) { console.warn('THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.'); const e = new Ue(); e.setCrossOrigin(this.crossOrigin); a = e.load(a, c, void 0, d); b && (a.mapping = b); return a; }; Kb.loadCompressedTexture = function () { console.error('THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.'); }; Kb.loadCompressedTextureCube = function () { console.error('THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.'); }; typeof __THREE_DEVTOOLS__ !== 'undefined' && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('register', { detail: { revision: '109' } })); k.ACESFilmicToneMapping = 5; k.AddEquation = 100; k.AddOperation = 2; k.AdditiveBlending = 2; k.AlphaFormat = 1021; k.AlwaysDepth = 1; k.AlwaysStencilFunc = 519; k.AmbientLight = bf; k.AmbientLightProbe = zg; k.AnimationClip = Ma; k.AnimationLoader = qg; k.AnimationMixer = Gg; k.AnimationObjectGroup = ci; k.AnimationUtils = pa; k.ArcCurve = cd; k.ArrayCamera = Jd; k.ArrowHelper = tb; k.Audio = dd; k.AudioAnalyser = Eg; k.AudioContext = Cg; k.AudioListener = Bg; k.AudioLoader = jf; k.AxesHelper = ve; k.AxisHelper = function (a) { console.warn('THREE.AxisHelper has been renamed to THREE.AxesHelper.'); return new ve(a); }; k.BackSide = 1; k.BasicDepthPacking = 3200; k.BasicShadowMap = 0; k.BinaryTextureLoader = function (a) { console.warn('THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.'); return new Te(a); }; k.Bone = ig; k.BooleanKeyframeTrack = Pe; k.BoundingBoxHelper = function (a, b) { console.warn('THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.'); return new sb(a, b); }; k.Box2 = Jg; k.Box3 = ab; k.Box3Helper = te; k.BoxBufferGeometry = Gd; k.BoxGeometry = Zg; k.BoxHelper = sb; k.BufferAttribute = O; k.BufferGeometry = E; k.BufferGeometryLoader = gf; k.ByteType = 1010; k.Cache = uc; k.Camera = bb; k.CameraHelper = se; k.CanvasRenderer = function () { console.error('THREE.CanvasRenderer has been removed'); }; k.CanvasTexture = Pd; k.CatmullRomCurve3 = ya; k.CineonToneMapping = 4; k.CircleBufferGeometry = Yc; k.CircleGeometry = je; k.ClampToEdgeWrapping = 1001; k.Clock = Ag; k.ClosedSplineCurve3 = ji; k.Color = H; k.ColorKeyframeTrack = Qe; k.CompressedTexture = Lc; k.CompressedTextureLoader = rg; k.ConeBufferGeometry = ie; k.ConeGeometry = he; k.CubeCamera = Dc; k.CubeGeometry = Zg; k.CubeReflectionMapping = 301; k.CubeRefractionMapping = 302; k.CubeTexture = ob; k.CubeTextureLoader = Ue; k.CubeUVReflectionMapping = 306; k.CubeUVRefractionMapping = 307; k.CubicBezierCurve = Sa; k.CubicBezierCurve3 = gb; k.CubicInterpolant = Ne; k.CullFaceBack = 1; k.CullFaceFront = 2; k.CullFaceFrontBack = 3; k.CullFaceNone = 0; k.Curve = D; k.CurvePath = rb; k.CustomBlending = 5; k.CylinderBufferGeometry = qb; k.CylinderGeometry = ic; k.Cylindrical = hi; k.DataTexture = Zb; k.DataTexture2DArray = Ec; k.DataTexture3D = Fc; k.DataTextureLoader = Te; k.DecrementStencilOp = 7683; k.DecrementWrapStencilOp = 34056; k.DefaultLoadingManager = Zh; k.DepthFormat = 1026; k.DepthStencilFormat = 1027; k.DepthTexture = Qd; k.DirectionalLight = af; k.DirectionalLightHelper = ld; k.DirectionalLightShadow = $e; k.DiscreteInterpolant = Oe;
  k.DodecahedronBufferGeometry = Qc; k.DodecahedronGeometry = Wd; k.DoubleSide = 2; k.DstAlphaFactor = 206; k.DstColorFactor = 208; k.DynamicBufferAttribute = function (a, b) { console.warn('THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.'); return (new O(a, b)).setDynamic(!0); }; k.EdgesGeometry = Xc; k.EdgesHelper = function (a, b) {
    console.warn('THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.'); return new ca(new Xc(a.geometry), new Q({
      color: void 0 !== b
        ? b : 16777215,
    }));
  }; k.EllipseCurve = Ja; k.EqualDepth = 4; k.EqualStencilFunc = 514; k.EquirectangularReflectionMapping = 303; k.EquirectangularRefractionMapping = 304; k.Euler = Qb; k.EventDispatcher = Ba; k.ExtrudeBufferGeometry = eb; k.ExtrudeGeometry = fc; k.Face3 = zc; k.Face4 = function (a, b, c, d, e, f, g) { console.warn('THREE.Face4 has been removed. A THREE.Face3 will be created instead.'); return new zc(a, b, c, e, f, g); }; k.FaceColors = 1; k.FaceNormalsHelper = re; k.FileLoader = Na; k.FlatShading = 1; k.Float32Attribute = function (a, b) {
    console.warn('THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.');
    return new A(a, b);
  }; k.Float32BufferAttribute = A; k.Float64Attribute = function (a, b) { console.warn('THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.'); return new Cd(a, b); }; k.Float64BufferAttribute = Cd; k.FloatType = 1015; k.Fog = Je; k.FogExp2 = Ie; k.Font = wg; k.FontLoader = xg; k.FrontFaceDirectionCCW = 1; k.FrontFaceDirectionCW = 0; k.FrontSide = 0; k.Frustum = Ed; k.GammaEncoding = 3007; k.Geometry = F; k.GeometryUtils = {
    merge(a, b, c) {
      console.warn('THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.');
      if (b.isMesh) { b.matrixAutoUpdate && b.updateMatrix(); var d = b.matrix; b = b.geometry; }a.merge(b, d, c);
    },
    center(a) { console.warn('THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.'); return a.center(); },
  }; k.GreaterDepth = 6; k.GreaterEqualDepth = 5; k.GreaterEqualStencilFunc = 518; k.GreaterStencilFunc = 516; k.GridHelper = mf; k.Group = Hc; k.HalfFloatType = 1016; k.HemisphereLight = We; k.HemisphereLightHelper = id; k.HemisphereLightProbe = yg; k.IcosahedronBufferGeometry = Pc; k.IcosahedronGeometry = Vd; k.ImageBitmapLoader = ug; k.ImageLoader = bd; k.ImageUtils = Kb; k.ImmediateRenderObject = pe; k.IncrementStencilOp = 7682; k.IncrementWrapStencilOp = 34055; k.InstancedBufferAttribute = ff; k.InstancedBufferGeometry = ef; k.InstancedInterleavedBuffer = Hg; k.InstancedMesh = jg; k.Int16Attribute = function (a, b) { console.warn('THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.'); return new Ad(a, b); }; k.Int16BufferAttribute = Ad; k.Int32Attribute = function (a, b) {
    console.warn('THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.');
    return new Bd(a, b);
  }; k.Int32BufferAttribute = Bd; k.Int8Attribute = function (a, b) { console.warn('THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.'); return new xd(a, b); }; k.Int8BufferAttribute = xd; k.IntType = 1013; k.InterleavedBuffer = Gb; k.InterleavedBufferAttribute = Kd; k.Interpolant = Ia; k.InterpolateDiscrete = 2300; k.InterpolateLinear = 2301; k.InterpolateSmooth = 2302; k.InvertStencilOp = 5386; k.JSONLoader = function () { console.error('THREE.JSONLoader has been removed.'); }; k.KeepStencilOp = 7680;
  k.KeyframeTrack = oa; k.LOD = Nd; k.LatheBufferGeometry = Wc; k.LatheGeometry = ge; k.Layers = Pf; k.LensFlare = function () { console.error('THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js'); }; k.LessDepth = 2; k.LessEqualDepth = 3; k.LessEqualStencilFunc = 515; k.LessStencilFunc = 513; k.Light = da; k.LightProbe = Xa; k.LightProbeHelper = jd; k.LightShadow = ib; k.Line = xa; k.Line3 = Kg; k.LineBasicMaterial = Q; k.LineCurve = za; k.LineCurve3 = Ta; k.LineDashedMaterial = pc; k.LineLoop = Me; k.LinePieces = 1; k.LineSegments = ca; k.LineStrip = 0; k.LinearEncoding = 3E3; k.LinearFilter = 1006; k.LinearInterpolant = ke; k.LinearMipMapLinearFilter = 1008; k.LinearMipMapNearestFilter = 1007; k.LinearMipmapLinearFilter = 1008; k.LinearMipmapNearestFilter = 1007; k.LinearToneMapping = 1; k.Loader = S; k.LoaderUtils = fh; k.LoadingManager = pg; k.LogLuvEncoding = 3003; k.LoopOnce = 2200; k.LoopPingPong = 2202; k.LoopRepeat = 2201; k.LuminanceAlphaFormat = 1025; k.LuminanceFormat = 1024; k.MOUSE = {
    LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2,
  }; k.Material = M; k.MaterialLoader = df; k.Math = L; k.Matrix3 = Y; k.Matrix4 = U; k.MaxEquation = 104; k.Mesh = ja; k.MeshBasicMaterial = Ga; k.MeshDepthMaterial = Db; k.MeshDistanceMaterial = Eb; k.MeshFaceMaterial = function (a) { console.warn('THREE.MeshFaceMaterial has been removed. Use an Array instead.'); return a; }; k.MeshLambertMaterial = nc; k.MeshMatcapMaterial = oc; k.MeshNormalMaterial = mc; k.MeshPhongMaterial = Ra; k.MeshPhysicalMaterial = kc; k.MeshStandardMaterial = fb; k.MeshToonMaterial = lc; k.MinEquation = 103; k.MirroredRepeatWrapping = 1002; k.MixOperation = 1; k.MultiMaterial = function (a) {
    void 0 === a && (a = []); console.warn('THREE.MultiMaterial has been removed. Use an Array instead.');
    a.isMultiMaterial = !0; a.materials = a; a.clone = function () { return a.slice(); }; return a;
  }; k.MultiplyBlending = 4; k.MultiplyOperation = 0; k.NearestFilter = 1003; k.NearestMipMapLinearFilter = 1005; k.NearestMipMapNearestFilter = 1004; k.NearestMipmapLinearFilter = 1005; k.NearestMipmapNearestFilter = 1004; k.NeverDepth = 0; k.NeverStencilFunc = 512; k.NoBlending = 0; k.NoColors = 0; k.NoToneMapping = 0; k.NormalBlending = 1; k.NotEqualDepth = 7; k.NotEqualStencilFunc = 517; k.NumberKeyframeTrack = $c; k.Object3D = B; k.ObjectLoader = hf; k.ObjectSpaceNormalMap = 1; k.OctahedronBufferGeometry = cc; k.OctahedronGeometry = Ud; k.OneFactor = 201; k.OneMinusDstAlphaFactor = 207; k.OneMinusDstColorFactor = 209; k.OneMinusSrcAlphaFactor = 205; k.OneMinusSrcColorFactor = 203; k.OrthographicCamera = oe; k.PCFShadowMap = 1; k.PCFSoftShadowMap = 2; k.ParametricBufferGeometry = Nc; k.ParametricGeometry = Rd; k.Particle = function (a) { console.warn('THREE.Particle has been renamed to THREE.Sprite.'); return new Ld(a); }; k.ParticleBasicMaterial = function (a) {
    console.warn('THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.');
    return new Qa(a);
  }; k.ParticleSystem = function (a, b) { console.warn('THREE.ParticleSystem has been renamed to THREE.Points.'); return new Kc(a, b); }; k.ParticleSystemMaterial = function (a) { console.warn('THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.'); return new Qa(a); }; k.Path = Wa; k.PerspectiveCamera = na; k.Plane = cb; k.PlaneBufferGeometry = $b; k.PlaneGeometry = Fd; k.PlaneHelper = ue; k.PointCloud = function (a, b) { console.warn('THREE.PointCloud has been renamed to THREE.Points.'); return new Kc(a, b); };
  k.PointCloudMaterial = function (a) { console.warn('THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.'); return new Qa(a); }; k.PointLight = Ze; k.PointLightHelper = gd; k.Points = Kc; k.PointsMaterial = Qa; k.PolarGridHelper = nf; k.PolyhedronBufferGeometry = Ca; k.PolyhedronGeometry = Sd; k.PositionalAudio = Dg; k.PositionalAudioHelper = kd; k.PropertyBinding = Aa; k.PropertyMixer = Fg; k.QuadraticBezierCurve = Ua; k.QuadraticBezierCurve3 = hb; k.Quaternion = ua; k.QuaternionKeyframeTrack = le; k.QuaternionLinearInterpolant = Re; k.REVISION = '109'; k.RGBADepthPacking = 3201; k.RGBAFormat = 1023; k.RGBA_ASTC_10x10_Format = 37819; k.RGBA_ASTC_10x5_Format = 37816; k.RGBA_ASTC_10x6_Format = 37817; k.RGBA_ASTC_10x8_Format = 37818; k.RGBA_ASTC_12x10_Format = 37820; k.RGBA_ASTC_12x12_Format = 37821; k.RGBA_ASTC_4x4_Format = 37808; k.RGBA_ASTC_5x4_Format = 37809; k.RGBA_ASTC_5x5_Format = 37810; k.RGBA_ASTC_6x5_Format = 37811; k.RGBA_ASTC_6x6_Format = 37812; k.RGBA_ASTC_8x5_Format = 37813; k.RGBA_ASTC_8x6_Format = 37814; k.RGBA_ASTC_8x8_Format = 37815; k.RGBA_PVRTC_2BPPV1_Format = 35843; k.RGBA_PVRTC_4BPPV1_Format = 35842; k.RGBA_S3TC_DXT1_Format = 33777; k.RGBA_S3TC_DXT3_Format = 33778; k.RGBA_S3TC_DXT5_Format = 33779; k.RGBDEncoding = 3006; k.RGBEEncoding = 3002; k.RGBEFormat = 1023; k.RGBFormat = 1022; k.RGBM16Encoding = 3005; k.RGBM7Encoding = 3004; k.RGB_ETC1_Format = 36196; k.RGB_PVRTC_2BPPV1_Format = 35841; k.RGB_PVRTC_4BPPV1_Format = 35840; k.RGB_S3TC_DXT1_Format = 33776; k.RawShaderMaterial = Zc; k.Ray = Sb; k.Raycaster = ei; k.RectAreaLight = cf; k.RectAreaLightHelper = hd; k.RedFormat = 1028; k.ReinhardToneMapping = 2; k.RepeatWrapping = 1E3; k.ReplaceStencilOp = 7681; k.ReverseSubtractEquation = 102; k.RingBufferGeometry = Vc; k.RingGeometry = fe; k.Scene = wd; k.SceneUtils = { createMultiMaterialObject() { console.error('THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js'); }, detach() { console.error('THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js'); }, attach() { console.error('THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js'); } }; k.ShaderChunk = N; k.ShaderLib = db; k.ShaderMaterial = ma; k.ShadowMaterial = jc; k.Shape = Jb; k.ShapeBufferGeometry = hc; k.ShapeGeometry = gc; k.ShapePath = vg; k.ShapeUtils = pb; k.ShortType = 1011; k.Skeleton = Le; k.SkeletonHelper = fd; k.SkinnedMesh = Od; k.SmoothShading = 2; k.Sphere = nb; k.SphereBufferGeometry = Ib; k.SphereGeometry = ee; k.Spherical = gi; k.SphericalHarmonics3 = kf; k.SphericalReflectionMapping = 305; k.Spline = Mg; k.SplineCurve = Va; k.SplineCurve3 = ki; k.SpotLight = Ye; k.SpotLightHelper = ed; k.SpotLightShadow = Xe; k.Sprite = Ld; k.SpriteMaterial = Hb; k.SrcAlphaFactor = 204; k.SrcAlphaSaturateFactor = 210; k.SrcColorFactor = 202; k.StereoCamera = ai; k.StringKeyframeTrack = Se; k.SubtractEquation = 101; k.SubtractiveBlending = 3; k.TOUCH = {
    ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3,
  }; k.TangentSpaceNormalMap = 0; k.TetrahedronBufferGeometry = Oc; k.TetrahedronGeometry = Td; k.TextBufferGeometry = Uc; k.TextGeometry = de; k.Texture = W; k.TextureLoader = Ve; k.TorusBufferGeometry = Sc; k.TorusGeometry = Zd; k.TorusKnotBufferGeometry = Rc; k.TorusKnotGeometry = Yd; k.Triangle = R; k.TriangleFanDrawMode = 2; k.TriangleStripDrawMode = 1; k.TrianglesDrawMode = 0; k.TubeBufferGeometry = dc; k.TubeGeometry = Xd; k.UVMapping = 300; k.Uint16Attribute = function (a, b) { console.warn('THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.'); return new Tb(a, b); }; k.Uint16BufferAttribute = Tb; k.Uint32Attribute = function (a, b) { console.warn('THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.'); return new Ub(a, b); }; k.Uint32BufferAttribute = Ub; k.Uint8Attribute = function (a, b) {
    console.warn('THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.');
    return new yd(a, b);
  }; k.Uint8BufferAttribute = yd; k.Uint8ClampedAttribute = function (a, b) { console.warn('THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.'); return new zd(a, b); }; k.Uint8ClampedBufferAttribute = zd; k.Uncharted2ToneMapping = 3; k.Uniform = lf; k.UniformsLib = I; k.UniformsUtils = Ak; k.UnsignedByteType = 1009; k.UnsignedInt248Type = 1020; k.UnsignedIntType = 1014; k.UnsignedShort4444Type = 1017; k.UnsignedShort5551Type = 1018; k.UnsignedShort565Type = 1019; k.UnsignedShortType = 1012; k.VSMShadowMap = 3; k.Vector2 = w; k.Vector3 = n; k.Vector4 = aa; k.VectorKeyframeTrack = ad; k.Vertex = function (a, b, c) { console.warn('THREE.Vertex has been removed. Use THREE.Vector3 instead.'); return new n(a, b, c); }; k.VertexColors = 2; k.VertexNormalsHelper = qe; k.VideoTexture = mg; k.WebGLMultisampleRenderTarget = Of; k.WebGLRenderTarget = la; k.WebGLRenderTargetCube = Ab; k.WebGLRenderer = hg; k.WebGLUtils = Kh; k.WireframeGeometry = Mc; k.WireframeHelper = function (a, b) {
    console.warn('THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.');
    return new ca(new Mc(a.geometry), new Q({ color: void 0 !== b ? b : 16777215 }));
  }; k.WrapAroundEnding = 2402; k.XHRLoader = function (a) { console.warn('THREE.XHRLoader has been renamed to THREE.FileLoader.'); return new Na(a); }; k.ZeroCurvatureEnding = 2400; k.ZeroFactor = 200; k.ZeroSlopeEnding = 2401; k.ZeroStencilOp = 0; k.sRGBEncoding = 3001; Object.defineProperty(k, '__esModule', { value: !0 });
}));
