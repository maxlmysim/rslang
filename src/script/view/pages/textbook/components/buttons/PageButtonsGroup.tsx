import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Menu, MenuItem, Fade } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { ArrowIosIconStyle, InsertDriveFileOutlinedIconStyle } from '../theme';
import { PagesLength } from '../../../../../interface/textbook';
import { CSSClass } from '../../../../../interface/freeText';

export default function PageButtonsGroup({ pagesLength }: PagesLength): React.ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [buttonText, setButtonText] = React.useState<string>('Страница 1');
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.currentTarget.className.includes('page-')) {
      const pageNum = (Number(event.currentTarget.innerText.match(/\d+/g)) - 1);
      // updateWords(groupNum, 0);
      console.log(pageNum);
      setButtonText(event.currentTarget.innerText);
    }
    setAnchorEl(null);
  };
  return (
    <ButtonGroup
      variant="contained"
      fullWidth={false}
      color="inherit"
      aria-label="outlined primary button group"
    >
      <Button>
        <ArrowBackIosNewIcon sx={ArrowIosIconStyle} />
      </Button>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        color="inherit"
        className={CSSClass.textbookMenuButton}
      >
        <InsertDriveFileOutlinedIcon sx={InsertDriveFileOutlinedIconStyle} />
        {buttonText}
      </Button>
      <Menu
        className="textbook-pages-menu"
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {
          [...new Array(pagesLength)].map((v, i) => (
            <MenuItem className={`page-${i + 1}`} key={`page-${i + 1}`} onClick={handleClose}>
              <InsertDriveFileOutlinedIcon sx={InsertDriveFileOutlinedIconStyle} />
              Страница
              {' '}
              {i + 1}
            </MenuItem>
          ))
        }

      </Menu>
      <Button>
        <ArrowForwardIosIcon sx={ArrowIosIconStyle} />
      </Button>
    </ButtonGroup>
  );
}