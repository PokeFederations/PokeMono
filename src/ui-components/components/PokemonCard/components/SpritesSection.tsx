import React, { useState, useEffect } from 'react';
import { makeStyles } from 'tss-react/mui';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const useStyles = makeStyles()(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'inherit',
    border: 'none',
    borderRadius: '100%',
    cursor: 'pointer',
    height: 'fit-content',
    padding: 0,
    width: 'fit-content',
  },
}));

interface TSpritesSectionProps {
  sprites: Array<string>;
}

const SpritesSection = ({ sprites }: TSpritesSectionProps) => {
  const [spriteNumber, setSpriteNumber] = useState(0);
  const { classes } = useStyles();

  useEffect(() => {
    setSpriteNumber(0);
  }, [sprites, setSpriteNumber]);

  return (
    <div className={classes.container}>
      <button
        className={classes.button}
        onClick={() => setSpriteNumber((prevState) => prevState - 1)}
        disabled={spriteNumber === 0}
      >
        <ArrowCircleLeftOutlinedIcon />
      </button>
      <img src={sprites[spriteNumber]} alt={`sprite-${spriteNumber}`} />
      <button
        className={classes.button}
        onClick={() => setSpriteNumber((prevState) => prevState + 1)}
        disabled={spriteNumber === sprites.length - 1}
      >
        <ArrowCircleRightOutlinedIcon />
      </button>
    </div>
  );
};

export default SpritesSection;
