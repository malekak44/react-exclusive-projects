import React, { useState } from 'react';
import './Markdown.scss';
import marked from 'marked';
import { FaFreeCodeCamp, FaExpandArrowsAlt, FaCompressAlt } from 'react-icons/fa';

const Markdown = () => {
    const [markdown, setMarkdown] = useState('');
    const [editorMaximized, setEditorMaximized] = useState(false);
    const [previewMaximized, setpreviewMaximized] = useState(false);

    return (
        <main className="markdown">
            <h2>Markdown Previewer</h2>
            <section className={`markdown-editor ${editorMaximized && "maximized"} ${previewMaximized && "hide"}`}>
                <div className="toolbar">
                    <FaFreeCodeCamp className="icon fcc-icon" />
                    Editor
                    {editorMaximized ? <FaCompressAlt className="icon arrows-alt" onClick={() => setEditorMaximized(false)} /> : <FaExpandArrowsAlt className="icon arrows-alt" onClick={() => setEditorMaximized(true)} />}
                </div>
                <textarea type="text" value={markdown} onChange={(e) => setMarkdown(e.target.value)}>
                </textarea>
            </section>
            <section className={`markdown-preview ${previewMaximized && "maximized"} ${editorMaximized && "hide"}`}>
                <div className="toolbar">
                    <FaFreeCodeCamp className="icon fcc-icon" />
                    Previewer
                    {previewMaximized ? <FaCompressAlt className="icon arrows-alt" onClick={() => setpreviewMaximized(false)} /> : <FaExpandArrowsAlt className="icon arrows-alt" onClick={() => setpreviewMaximized(true)} />}
                </div>
                <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}>

                </div>
            </section>
        </main>
    );
};

export default Markdown;