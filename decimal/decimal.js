class Decimal {
  // compact decimal
  static get NaN() {
        const x = Object.create(Decimal.prototype);
        x.man = NaN;
        x.exp = NaN;
        x.sign = NaN
        return x;
  }
  static get Inf() {
        const x = Object.create(Decimal.prototype);
        x.man = NaN;
        x.exp = Infinity;
        x.sign = 1
        return x;
  }
  static E = new Decimal(Math.E)
  static PI = new Decimal(Math.PI)
  static TAU = Decimal.PI.mul(2)
  static PHI = new Decimal(1).add(new Decimal(5).sqrt()).div(2)
  constructor(n) {
    const isNum = /^(?<s>[+-])?(?:(?<i>\d+)(?:\.(?<f>\d*))?|\.(?<f2>\d+))(?:[Ee](?<es>[+-])?(?<e>\d+))?$/;
    const s = typeof n === "string" ? n : (n??"NaN").toString()
        const ss = s.trim();
        const m = ss.match(isNum);
        if (!m) {
            return Decimal.NaN
        }
        const g = m.groups;
        const sign = g.s === "-" ? -1 : 1;
        const expSign = g.es === "-" ? -1 : 1;
        this.exp = 0;
        // Extract fraction
        let fPart = g.f ?? g.f2 ?? "";
        // Combine integer with fraction
        let digits = (g.i ?? "0") + fPart;
        digits = digits.replace(/^0+/, ""); // Remove leading zeros
        this.man = Number(digits || 0);
        this.exp = expSign * Number(g.e||0) - fPart.length;
        this.sign = (this.man===0)?0:sign
        this.fix()
        if ((g.e??"0").replaceAll(/i[\s]n[\s]f/gi,"Inf").includes("inf")||(digits??"0").replaceAll(/i[\s]n[\s]f/gi,"Inf").includes("inf")) { return (expSign==1)?Decimal.Inf:new Decimal(0) }
  }
  add(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    if(this.exp-v.exp>15)return this
    if(this.exp-v.exp<-15)return v
    this.man += v.sign*v.man/10**(this.exp-v.exp)
    this.fix()
    return this
  }
  sub(v) { 
    v = v instanceof Decimal ? v : new Decimal(v)
    return this.add(v.neg())
  }
  mul(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    this.man *= v.man
    this.exp += v.exp
    if(v.sign===-1)this.sign*=-1
    this.fix()
    return this
  }
  div(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    this.man /= v.man
    this.exp -= v.exp
    if(v.sign===-1)this.sign*=-1
    this.fix()
    return this
  }
  recip(v) {
    return new Decimal(1).div(v)
  }
  pow10() {
    var c = this.copy()
    if(this.gte(0)) {
      this.man = 10**((c.man*10**c.exp)%1)
      this.exp = Math.floor(c.man*10**c.exp)
      return this;
    }
    return this.neg().pow10().recip()
  }
  pow(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    if(v.sign===-1) {
      return this.pow(v.neg()).recip()
    }else if(v.sign===0){
      return new Decimal(1)
    }else if(v.lt(1023)&&v.gte(1)){
      return this.mul(this.pow(v.sub(1)))
    }else{
      return v.mul(this.log10()).pow10()
    }
  }
  log10() {
    return (this.sign===1||this.sign===0)?new Decimal(this.exp+Math.log10(this.man)):Decimal.NaN
  }
  log(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    return this.log10().div(v.log10())
  }
  sqrt() {
    return this.root(2)
  }
  cbrt() {
    return this.root(3)
  }
  root(v) {
    v = v instanceof Decimal ? v : new Decimal(v)
    return this.pow(v.recip())
  }
  neg() {
    this.sign = 0-this.sign;
    return this
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
  fix() {
    if(this.man===0){this.exp=0;this.sign=0;return}
    while (true) {
      if(this===Decimal.NaN&&this===Decimal.Inf)return
      if(this.comp(0)===0)return
      if (this.man>=10) {
        this.man/=10
        this.exp++
      } else if (this.man<1) {
        this.man*=10
        this.exp--
      } else {
        return;
      }
    }
  }
  toString() {
    if (Math.abs(this.exp)>=1000000){
      return "e"+this.log10()
    }else if(Math.abs(this.exp)>=15){
      return (this.sign*this.mantissa)+"e"+this.exponent
    }else{
      return (this.mantissa*10**this.exponent).toString()
    }
  }
}
window.Decimal = Decimal
