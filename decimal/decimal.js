class Decimal {
  // compact decimal
  static get NaN() {
        const x = Object.create(Decimal.prototype);
        x.man = NaN;
        x.exp = NaN;
        x.sign = 1
        return x;
  }
  static set NaN(_) {
    throw new Error("This number is readonly")
  }
  static get Inf() {
        const x = Object.create(Decimal.prototype);
        x.man = NaN;
        x.exp = Infinity;
        x.sign = 1
        return x;
  }
  static set Inf(_) {
    throw new Error("This number is readonly")
  }
  static E = new Decimal(Math.E)
  static PI = new Decimal(Math.PI)
  static TAU = Decimal.PI.clone().mul(2)
  static PHI = new Decimal(1).add(new Decimal(5).sqrt()).div(2)
  constructor(n) {
    // from websim: Incremental: Infinities
    const raw = (typeof n === "string") ? n : (n == null ? "NaN" : String(n));
    const s = raw.trim();
    const isNum = /^([+-])?((\d+)(?:\.(\d*))?|\.(\d+))(?:[Ee]([+-])?(\d+))?$/;
    const m = s.match(isNum);
    if (!m) {
      return Decimal.NaN;
    }
    const sign = m[1] === "-" ? -1 : 1;
    const expSign = m[6] === "-" ? -1 : 1;
    const fPart = (m[4] ?? m[5] ?? "");
    let digits = (m[3] ?? "0") + fPart;
    digits = digits.replace(/^0+/, "");
    this.man = Number(digits || 0);
    this.exp = expSign * Number(m[7] || 0) - fPart.length;
    this.sign = (this.man === 0) ? 0 : sign;
    this.fix();
    if ((m[7] ?? "0").toString().toLowerCase().includes("inf") ||
        (digits ?? "0").toString().toLowerCase().includes("inf")) {
      return (expSign == 1) ? Decimal.Inf : new Decimal(0);
    }
  }
  add(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    let c = this.copy()
    if(this.exp-v.exp>15)return c
    if(this.exp-v.exp<-15)return v
    c.man += v.sign*v.man/10**(c.exp-v.exp)
    c.fix()
    return c
  }
  sub(v) { 
    v = v instanceof Decimal ? v : new Decimal(v)
    let c = this.copy()
    return c.add(v.neg())
  }
  mul(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    let c = this.copy()
    c.man *= v.man
    c.exp += v.exp
    if(v.sign===-1)c.sign*=-1
    c.fix()
    return c
  }
  div(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    let c = this.copy()
    c.man /= v.man
    c.exp -= v.exp
    if(v.sign===-1)c.sign*=-1
    c.fix()
    return c
  }
  recip() {
    let c = this.copy()
    return new Decimal(1).div(c)
  }
  pow10() {
    var c = this.copy()
    if (this.sign!==-1){
      this.man = 10**((c.man*10**c.exp)%1)
    }else{
      this.man = 10**(1-(c.man*10**c.exp)%1)
    }
    this.exp = Math.floor(c.man*10**c.exp)
    return this;
  }
  pow(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    let c = this.copy()
    if(v.sign===-1) {
      return c.pow(v.neg()).recip()
    }else if(v.eq(0)){
      return new Decimal(1)
    }else if(v.lt(1023)&&v.gte(1)){
      return c.mul(c.pow(v.sub(1)))
    }else{
      return v.mul(c.log10()).pow10()
    }
  }
  log10() {
    let c = this.copy()
    return (c.sign===1||c.sign===0)?new Decimal(c.exp+Math.log10(c.man)):Decimal.NaN
  }
  log(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    let c = this.copy()
    return c.log10().div(v.log10())
  }
  sqrt() {
    let c = this.copy()
    return c.root(2)
  }
  cbrt() {
    let c = this.copy()
    return c.root(3)
  }
  root(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    let c = c.copy()
    return c.pow(v.recip())
  }
  neg() {
    let c = this.copy()
    c.sign = 0-c.sign;
    return c
  }
  abs() {
    let c = this.copy()
    c.sign = (c.sign===-1)?1:c.sign;
    return c
  }
  comp(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    var sigman = this.man*this.sign
    var vsigman = v.man*v.sign
    if(this.exp==v.exp&&sigman>vsigman) {return 1};
    if(this.exp>v.exp) {return 1};
    if(this.exp==v.exp&&sigman<vsigman) {return -1};
    if(this.exp<v.exp) {return -1};
    return 0
  }
  eq(v) {
    return this.comp(v)===0
  }
  gt(v) {
    return this.comp(v)===1
  }
  lt(v) {
    return this.comp(v)===-1
  }
  gte(v) { return !this.lt(v) }
  lte(v) { return !this.gt(v) }
  succs(v) { return this.sub(1).eq(v) }
  precs(v) { return this.add(1).eq(v) }
  seq(v) { return this.succs(v)||this.eq(v) }
  peq(v) { return this.precs(v)||this.eq(v) }
  aprx(v) { return (this.sub(v).abs().lt(1)) }
  naprx(v) { return !this.aprx(v) }
  copy() {
        const x = Object.create(Decimal.prototype);
        x.man = this.man;
        x.exp = this.exp;
        x.sign = this.sign
        return x;
  }
  clone() { return this.copy() }
  fix() {
    if(this.man===0){this.exp=0;this.sign=0;return}
    if(this.man<0){
      this.man=0-this.man
      this.sign=0-this.sign
    }
    while (true) {
      if(this.man===NaN&&this.exp===Infinity)return Decimal.Inf
      if(this.man===NaN&&this.exp===NaN)return Decimal.NaN
      if(this.comp(0)===0)return
      if (this.man>=10) {
        this.man/=10
        this.exp++
      } else if (this.man<1) {
        this.man*=10
        this.exp--
      } else {
        break;
      }
    }
    return;
  }
  toString() {
    if(this.exp===Infinity)return "inf"
    if (Math.abs(this.exp)>=1000000){
      return "e"+this.log10()
    }else if(Math.abs(this.exp)>=15){
      return (this.sign*this.man)+"e"+this.exp
    }else{
      return (this.sign*this.man*10**this.exp).toString()
    }
  }
  toFixed(fixed=3) {
    var k = (this.sign*this.man*10**this.exp).toString().split(".")
    var m = (this.sign*this.man).toString().split(".")
    k[1] = Math.floor(Math.abs((this.sign*this.man*10**(this.exp+fixed))%10**fixed)).toString().padStart(fixed,0)
    m[1] = Math.floor(Math.abs((this.sign*this.man*10**fixed)%10**fixed)).toString().padStart(fixed,0)
    if(this.eq(0))return "0."+"0".repeat(fixed)
    if(this.exp===Infinity)return "inf"
    if (Math.abs(this.exp)>=1000000){
      return "e"+this.log10().toFixed(fixed)
    }else if(Math.abs(this.exp)>=6){
      return m.join(".")+"e"+this.exp
    }else{
      return k.join(".")
    }
  }
}
window.Decimal = Decimal
