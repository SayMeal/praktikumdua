class Silinder{
    constructor(r,t){
        this.r = r;
        this.t = t;
    }
    luas(){
        return 2 * Math.PI * this.r * (this.r + this.t);
    }
    volume(){
        return Math.PI * Math.pow(this.r,2) * this.t;
    }
    luasPermukaan(){
        return 2 * Math.PI * this.r * (this.r + this.t);
    }

    diagonal(){
        return Math.sqrt(Math.pow(this.r,2) + Math.pow(this.t,2));
    }

    hitungSemua(){
        return {
            Volume: this.volume(),
            Luas: this.luas(),
            LuasPermukaan: this.luasPermukaan()
        };
    }
}
module.exports = Silinder;