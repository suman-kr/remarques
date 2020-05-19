import * as React from 'react';
import '../styles/notepad.css';
import { Dialog, DialogTitle, TextField, Button } from '@material-ui/core';
import { MdCheck, MdClose } from 'react-icons/md';
export class Notepad extends React.Component<Props, State> {
  divRef: React.RefObject<any> = React.createRef();
  titleRef: React.RefObject<HTMLInputElement> = React.createRef();
  constructor(props: Props) {
    super(props);
    this.state = {
      toggleDialog: false,
      linkName: '',
      linkURL: '',
      items: [],
      toggleBold: false,
      boldClass: 0,
      toggleTheme: true,
      currentContent: '',
      currentTitle: '',
    };
  }
  createLink = () => {
    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', this.state.linkURL);
    const textNode = document.createTextNode(this.state.linkName);
    anchorTag.appendChild(textNode);
    const span = document.createElement('span');
    span.setAttribute('contenteditable', 'false');
    span.appendChild(anchorTag);
    const notepadId = document.getElementById('table');
    notepadId?.appendChild(span);
  }

  boldText = () => {
    let { boldClass } = this.state;
    let { toggleBold } = this.state;
    toggleBold = !toggleBold;
    this.setState({ toggleBold });
    if (toggleBold) {
      boldClass += 1;
      this.setState({ boldClass });
      const boldTag = document.createElement('b');
      boldTag.setAttribute('class', `bold-${boldClass}`);
      const notepadId = document.getElementById('table');
      notepadId?.appendChild(boldTag);
    }
  }

  insertLinkDialog = () => (
    <Dialog
      onClose={this.toggleDialog}
      open={this.state.toggleDialog}
      className={'dialog'}
    >
      <DialogTitle
        style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
      >
        Insert Link
      </DialogTitle>
      <TextField
        style={{ width: '80px', padding: '10px' }}
        placeholder={'Name:'}
        onChange={(e) => {
          this.setState({ linkName: e.target.value });
        }}
      ></TextField>
      <TextField
        style={{ padding: '10px' }}
        placeholder={'https://www.example.com'}
        onChange={(e) => {
          this.setState({ linkURL: e.target.value });
        }}
      ></TextField>
      <Button
        style={{
          textTransform: 'capitalize',
          borderRadius: '0px',
          display: 'block',
          margin: 'auto',
          marginBottom: '6px',
        }}
        variant='contained'
        color='primary'
        onClick={() => {
          this.toggleDialog();
          this.createLink();
        }}
      >
        Insert
      </Button>
    </Dialog>
  )

  toggleDialog = () => {
    this.setState({ toggleDialog: !this.state.toggleDialog });
  }
  onChangeDivContent = (e: string) => {
    let { currentContent } = this.state;
    currentContent = e;
    this.setState({ currentContent });
  }
  onChangeTitleContent = (e: string) => {
    let { currentTitle } = this.state;
    currentTitle = e;
    this.setState({ currentTitle });
  }
  onPressKey = (key: string, code: number, which: number) => {
    const { toggleBold } = this.state;
    const { boldClass } = this.state;
    console.log(code);
    console.log(which);
    if (toggleBold) {
      const a = document.getElementsByClassName(`bold-${boldClass}`);
      a[0].innerHTML += key;
    }
  }

  clear = () => {
    const title = document.getElementById('note-title') as HTMLInputElement;
    const table = document.getElementById('table');
    if (table) table.innerHTML = '';
    if (title) title.value = '';
  }

  save = () => {
    let { items, currentContent, currentTitle } = this.state;
    if (currentTitle.length) {
      items.push({ title: currentTitle, content: currentContent });
      currentTitle = '';
      currentContent = '';
      this.setState({ items, currentContent, currentTitle });
      this.clear();
    }
  }

  displayNotes = (title: string, content: string) => {
    this.titleRef.current!.value = title;
    this.divRef.current.innerHTML = content;
  }
  render() {
    return (
      <div>
        <div
          style={{
            marginBottom: '0.5em',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={this.toggleDialog}
            style={{
              color: 'black',
              background: 'white',
              fontSize: '16px',
              padding: '8px',
              border: 'none',
              borderLeft: '5px solid',
              borderLeftColor: 'red',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Link
          </button>
          <button
            onClick={() => this.boldText()}
            style={{
              color: 'black',
              background: 'white',
              fontSize: '16px',
              padding: '8px',
              border: 'none',
              borderLeft: '5px solid',
              borderLeftColor: 'red',
              cursor: 'pointer',
              fontWeight: this.state.toggleBold ? 'bolder' : 'normal',
              marginRight: '10px',
            }}
          >
            B
          </button>
          <button
            onClick={() => {
              this.setState({ toggleTheme: !this.state.toggleTheme });
            }}
            style={{
              color: this.state.toggleTheme ? 'white' : 'black',
              background: this.state.toggleTheme ? 'black' : 'white',
              fontSize: '16px',
              padding: '8px',
              border: 'none',
              borderLeft: '5px solid',
              borderLeftColor: 'red',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            {this.state.toggleTheme ? 'Dark' : 'Light'}
          </button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '20% 80%' }}>
          <div
            className='pane'
            style={{
              background: this.state.toggleTheme ? '#272525' : 'whitesmoke',
              color: this.state.toggleTheme ? 'white' : 'black',
            }}
          >
            <ul>
              {this.state.items.map((e) => (
                <li
                  className='list'
                  onClick={() => this.displayNotes(e.title, e.content)}
                >
                  {e.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              style={{
                borderBottom: this.state.toggleTheme
                  ? '1px solid white'
                  : '1px solid black',
              }}
            >
              <input
                style={{
                  background: this.state.toggleTheme ? '#272525' : 'white',
                  color: this.state.toggleTheme ? 'white' : 'black',
                  width: '100%',
                  border: 0,
                  padding: '10px',
                  fontSize: '16px',
                  borderLeft: this.state.toggleTheme
                    ? '1px solid white'
                    : 'none',
                }}
                className='title'
                id='note-title'
                type='text'
                placeholder='Title'
                onChange={(e) => this.onChangeTitleContent(e.target.value)}
                ref={this.titleRef}
              />
            </div>
            <div
              style={{
                color: this.state.toggleTheme ? 'white' : 'black',
                background: this.state.toggleTheme ? 'black' : 'white',
                borderLeft: this.state.toggleTheme ? '1px solid white' : 'none',
              }}
              contentEditable={true}
              id='table'
              suppressContentEditableWarning
              placeholder='Write from here...'
              onInput={(e) =>
                this.onChangeDivContent(e.currentTarget.textContent as string)
              }
              ref={this.divRef}
            ></div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                background: this.state.toggleTheme ? '#272525' : 'whitesmoke',
                borderTop: this.state.toggleTheme
                  ? '1px solid white'
                  : '2px solid black',
                borderLeft: this.state.toggleTheme ? '1px solid white' : 'none',
              }}
            >
              <MdClose
                color='red'
                className='notepad-icons'
                onClick={this.clear}
              />
              <MdCheck
                color='green'
                className='notepad-icons'
                onClick={() => {
                  this.save();
                }}
              />
            </div>
          </div>
        </div>
        {this.insertLinkDialog()}
      </div>
    );
  }
}
interface Props {}

interface State {
  toggleDialog: boolean;
  linkName: string;
  linkURL: string;
  items: { title: string; content: string }[];
  toggleBold: boolean;
  boldClass: number;
  toggleTheme: boolean;
  currentContent: string;
  currentTitle: string;
}
