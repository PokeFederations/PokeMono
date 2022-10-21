import React from 'react';
import { makeStyles } from 'tss-react/mui';
import PokemonType from '../../PokemonType';
import { PokemonTypesEnum } from '../../../types';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    width: 'fit-content',

    div: {
      marginRight: '4px',
    },
    'div:nth-last-of-type(1)': {
      marginRight: 0,
    },
  },
}));

interface TTypesSectionProps {
  types: Array<PokemonTypesEnum>;
  onTypeClick: (type: PokemonTypesEnum) => void;
}

const TypesSection = ({ types, onTypeClick }: TTypesSectionProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      {types.map((type, index) => (
        <PokemonType key={`${type}-${index}`} type={type} onClick={() => onTypeClick(type)} />
      ))}
    </div>
  );
};

export default TypesSection;
