class Move {
    img: Image[]
    damage: number    
    angle: number
    knockback: number
    lifespan: number

    constructor(img: Image[],damage:number, angle: number, knockback: number, lifespan: number) {
        this.img = img;
        this.damage = damage
        this.angle = angle;
        this.knockback = knockback;
        this.lifespan = lifespan;
    }
}

class Moveset {
    neutralAttack: Move
    sideAttack: Move
    upAttack: Move
    downAttack: Move
    neutralSpecial: Move
    sideSpecial: Move
    upSpecial: Move
    downSpecial: Move
    constructor(
        neutralAttack: Move,
        sideAttack: Move,
        upAttack: Move,
        downAttack: Move,
        neutralSpecial: Move,
        sideSpecial: Move,
        upSpecial: Move,
        downSpecial: Move
    ) {
        this.neutralAttack = neutralAttack;
        this.sideAttack = sideAttack;
        this.upAttack = upAttack;
        this.downAttack = downAttack;
        this.neutralSpecial = neutralSpecial;
        this.sideSpecial = sideSpecial;
        this.upSpecial = upSpecial;
        this.downSpecial = downSpecial;
    }
}

enum NumProperties {
    //%block="damage"
    damage,
    //% block="angle"
    angle,
    //% block="knockback"
    knockback,
    //% block="lifespan"
    lifespan
}
enum MovesList{
    //%block="Neutral Attack"
    na,
    //%block="Side Attack"
    sa,
    //%block="Up Attack"
    ua,
    //%block="Down Attack"
    da,
    //%block="Neutral Special"
    ns,
    //%block="Side Special"
    ss,
    //%block="Up Special"
    us,
    //%block="Down Special"
    ds
}

//% color="#ff0000" icon="\uf3ed"
namespace fighter {
    //% img.shadow="animation_editor"
    //% block="create move with animation $img damage $damage angle $angle knockback $knockback lifespan $lifespan"
    export function move(img: Image[], angle: number,damage:number,  knockback: number, lifespan: number): Move {
        return new Move(img,damage, angle, knockback, lifespan);
    }

    //% block="get $prop from $move"
    //% move.shadow="variables_get"
    //% move.defl="myMove"
    export function returnValues(prop: NumProperties, move: Move): number {
        switch (prop) {
            case NumProperties.damage: return move.damage;
            case NumProperties.angle: return move.angle;
            case NumProperties.knockback: return move.knockback;
            case NumProperties.lifespan: return move.lifespan;
        }
    }

    //% block="get animation from $move"
    //% move.shadow="variables_get"
    //% move.defl="myMove"
    export function returnmoveimage(move: Move) {
        return move.img;
    }

    //% block="create moveset neutral attack$neutralAttack side attack $sideAttack up attack$upAttack down attack$downAttack neutral special $neutralSpecial side special $sideSpecial up special $upSpecial down special $downSpecial"
    //% neutralAttack.shadow="variables_get" neutralAttack.defl="myMove"
    //% sideAttack.shadow="variables_get" sideAttack.defl="myMove"
    //% upAttack.shadow="variables_get" upAttack.defl="myMove"
    //% downAttack.shadow="variables_get" downAttack.defl="myMove"
    //% neutralSpecial.shadow="variables_get" neutralSpecial.defl="myMove"
    //% sideSpecial.shadow="variables_get" sideSpecial.defl="myMove"
    //% upSpecial.shadow="variables_get" upSpecial.defl="myMove"
    //% downSpecial.shadow="variables_get" downSpecial.defl="myMove"
    export function createMoveset(
        neutralAttack: Move,
        sideAttack: Move,
        upAttack: Move,
        downAttack: Move,
        neutralSpecial: Move,
        sideSpecial: Move,
        upSpecial: Move,
        downSpecial: Move
    ): Moveset {
        return new Moveset(
            neutralAttack,
            sideAttack,
            upAttack,
            downAttack,
            neutralSpecial,
            sideSpecial,
            upSpecial,
            downSpecial
        )
    }
    //%moveset.shadow="variables_get"
    //%moveset.defl="myMoveset"
    //%block="get move $prop from $moveset"
    export function getMove(prop: MovesList,moveset: Moveset){
        switch (prop){
            case MovesList.na: return moveset.neutralAttack;
            case MovesList.sa: return moveset.sideAttack;
            case MovesList.ua: return moveset.upAttack;
            case MovesList.da: return moveset.downAttack;
            case MovesList.ns: return moveset.neutralSpecial;
            case MovesList.ss: return moveset.sideSpecial;
            case MovesList.us: return moveset.upSpecial;
            case MovesList.ds: return moveset.downSpecial
            
        }
    }
}
