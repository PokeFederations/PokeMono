import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '.';
import { PokemonTypesEnum } from '../types';

const useStyles = makeStyles()(
  ({
    custom: {
      pallete: { types },
    },
    palette: { grey },
  }) => ({
    root: {
      alignItems: 'center',
      borderRadius: '8px',
      display: 'flex',
      height: 'fit-content',
      padding: '4px 16px',
      width: 'fit-content',
    },
    type: {
      cursor: 'pointer',
      fontSize: '12px',
      textTransform: 'capitalize',
      userSelect: 'none',
    },
    normal: {
      backgroundColor: types.normal.main,
      color: types.normal.contrast,
    },
    fighting: {
      backgroundColor: types.fighting.main,
      color: types.fighting.contrast,
    },
    flying: {
      backgroundColor: types.flying.main,
      color: types.flying.contrast,
    },
    poison: {
      backgroundColor: types.poison.main,
      color: types.poison.contrast,
    },
    ground: {
      backgroundColor: types.ground.main,
      color: types.ground.contrast,
    },
    rock: {
      backgroundColor: types.rock.main,
      color: types.rock.contrast,
    },
    bug: {
      backgroundColor: types.bug.main,
      color: types.bug.contrast,
    },
    ghost: {
      backgroundColor: types.ghost.main,
      color: types.ghost.contrast,
    },
    steel: {
      backgroundColor: types.steel.main,
      color: types.steel.contrast,
    },
    fire: {
      backgroundColor: types.fire.main,
      color: types.fire.contrast,
    },
    water: {
      backgroundColor: types.water.main,
      color: types.water.contrast,
    },
    grass: {
      backgroundColor: types.grass.main,
      color: types.grass.contrast,
    },
    electric: {
      backgroundColor: types.electric.main,
      color: types.electric.contrast,
    },
    psychic: {
      backgroundColor: types.psychic.main,
      color: types.psychic.contrast,
    },
    ice: {
      backgroundColor: types.ice.main,
      color: types.ice.contrast,
    },
    dragon: {
      backgroundColor: types.dragon.main,
      color: types.dragon.contrast,
    },
    dark: {
      backgroundColor: types.dark.main,
      color: types.dark.contrast,
    },
    fairy: {
      backgroundColor: types.fairy.main,
      color: types.fairy.contrast,
    },
    unknown: {
      backgroundColor: types.unknown.main,
      color: types.unknown.contrast,
    },
  }),
);

interface TPokemonTypeProps {
  type: PokemonTypesEnum;
  onClick: (type: PokemonTypesEnum) => void;
}

const PokemonType = ({ type, onClick }: TPokemonTypeProps) => {
  const { classes, cx } = useStyles();

  return (
    <div
      id={`pokemon-type-${type}`}
      onClick={() => onClick(type)}
      className={cx(classes.root, classes[`${type}`])}
    >
      <Typography className={classes.type} text={type} />
    </div>
  );
};

export default PokemonType;
