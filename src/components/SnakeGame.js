import React, { useEffect, useState } from 'react';
import { SnakeGame } from 'react-game-snake';

SnakeGame.prototype.onLoose = function ( context ) {
    if ( this.gameLogic ) {
        this.gameLogic.stop();
        this.gameLogic = null;
    }

    if ( this.props.onLoose ) {
        this.props.onLoose( context );
    }
};


const keyDown = function ( e ) {
    if ( [ "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight" ].indexOf( e.code ) > -1 ) {
        e.preventDefault();
    }
};

const toggleArrowKeys = isOn => {
    if ( isOn ) {
        window.addEventListener( "keydown", keyDown, false );
    } else {
        window.removeEventListener( "keydown", keyDown, false );
    }
};
const controls = 'Refresh to restart';

const SnakeGameComponent = () => {
    const [ msg, setMsg ] = useState( '' );

    const handleOnLoose = context => {
        toggleArrowKeys( false );
        setMsg( `You loosed with ${ context.game.points } point(s).` );
    };
    const handleOnPause = context => {
        toggleArrowKeys( false );
    };
    const handleOnRestart = context => {
        setMsg( '' );
        toggleArrowKeys( true );
    };
    const handleOnResume = context => {
        toggleArrowKeys( true );
    };
    const handleOnWin = context => {
        toggleArrowKeys( false );
        setMsg( `You won with ${ context.game.points } point(s).` )
    };
    // start game automatically and disable arrow keys
    useEffect( () => {
        toggleArrowKeys( true );
        return () => {
            toggleArrowKeys( false );
        };
    }, [] );

    return (
        <div className="gameWrap">

            <SnakeGame
                colors={ {
                    field: "#ffffff55",
                    food: "#9b59b6",
                    snake: "#3498db",
                } }
                countOfHorizontalFields={ 15 }
                countOfVerticalFields={ 15 }
                fieldSize={ 20 }
                loopTime={ 200 }
                pauseAllowed={ true }
                restartAllowed={ true }
                onLoose={ handleOnLoose }
                onPause={ handleOnPause }
                onRestart={ handleOnRestart }
                onResume={ handleOnResume }
                onWin={ handleOnWin }
            />
            <h6>{ controls }</h6>
            <h3>{ msg }</h3>

        </div>
    );
};

export default SnakeGameComponent;