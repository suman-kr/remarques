import * as React from 'react';
import '../styles/notepad.css';
import { MdCheck, MdClose, MdDelete } from 'react-icons/md';
import { graphql } from '../helpers/index';
import { notesMutation, notesQuery } from '../components/constant';
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
    this.divRef.current.innerHTML = '';
    this.titleRef.current!.value = '';
    let { currentContent, currentTitle } = this.state;
    currentContent = '';
    currentTitle = '';
    this.setState({ currentContent, currentTitle });
  }

  save = () => {
    let { items, currentContent, currentTitle } = this.state;
    if (currentTitle.length) {
      const variables = {
        input:{
          url: localStorage.getItem('url_path'),
          notes: JSON.stringify({ title: currentTitle, content: currentContent })
        }
      };
      graphql(notesMutation, variables);
      items.push({ title: currentTitle, content: currentContent });
      this.setState({ items, currentContent, currentTitle });
      this.clear();
    }
  }

  displayNotes = (title: string, content: string) => {
    let { currentTitle, currentContent } = this.state;
    this.titleRef.current!.value = title;
    this.divRef.current.innerHTML = content;
    currentTitle = title;
    currentContent = content;
    this.setState({ currentTitle, currentContent });
  }

  deleteNote = (ind: number) => {
    const { items } = this.state;
    items.splice(ind, 1);
    this.setState({ items });
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
            <div
              style={{
                textAlign: 'center',
                padding: '10px',
                fontWeight: 'bold',
              }}
            >
              NOTES
            </div>
            <hr style={{ borderBottom: 0, width: '90%' }} />
            {this.state.items.length ? (
              <ul>
                {this.state.items.map((e, i) => (
                  <>
                    <li
                      className='list'
                      onClick={() => this.displayNotes(e.title, e.content)}
                    >
                      {e.title}
                    </li>
                    <span>
                      <div
                        className='delete'
                        onClick={() => {
                          this.clear();
                          this.deleteNote(i);
                        }}
                      >
                        <MdDelete />
                      </div>
                    </span>
                  </>
                ))}
              </ul>
            ) : (
              <div
                style={{
                  margin: '50% 0 50% 0',
                  textAlign: 'center',
                  height: 'auto',
                  color: '#908f8f',
                }}
              >
                Nothing here!
                <p>¯\_(ツ)_/¯</p>
              </div>
            )}
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
