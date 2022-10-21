import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '..';
import { SpritesSection, TypesSection } from './components';
import { PokemonTypesEnum } from '../../types';

const useStyles = makeStyles()(({ palette: { grey } }) => ({
  root: {
    alignItems: 'center',
    border: `1px solid ${grey[500]}`,
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    padding: '16px 8px',
    width: 'fit-content',
  },
  numberContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    color: grey[700],
  },
  name: {
    marginTop: '8px',
    fontSize: '16px',
    textTransform: 'capitalize',
    userSelect: 'none',
    cursor: 'pointer',
  },
}));

interface TPokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    types: Array<PokemonTypesEnum>;
    sprites: Array<string>;
  };
  onNameClick: (id: number) => void;
  onTypeClick: (type: PokemonTypesEnum) => void;
}

const PokemonCard = ({ pokemon, onNameClick, onTypeClick }: TPokemonCardProps) => {
  const { id, name, types, sprites } = pokemon;
  const { classes } = useStyles();

  const getPokemonNumberFormatted = () => {
    if (id < 10) return `00${id}`;

    if (id < 100) return `0${id}`;

    return id;
  };

  return (
    <div id={`pokemon-card-${id}`} className={classes.root}>
      <div className={classes.numberContainer}>
        <Typography fontSize={12} text={`N. ${getPokemonNumberFormatted()}`} />
      </div>

      <SpritesSection sprites={sprites} />
      <TypesSection types={types} onTypeClick={onTypeClick} />
      <Typography onClick={() => onNameClick(id)} className={classes.name} text={name} />
    </div>
  );
};

export default PokemonCard;
