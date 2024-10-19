import { Input, Textarea } from "@nextui-org/react";

const AudioTranscriber = () => {
    return (
        <section className="grid grid-rows-2">
            <div>
                <div>
                    <h3>Audio Transcriber</h3>
                    <p>Transcribe audio to text</p>
                    <Textarea
                        isReadOnly
                        label="Description"
                        variant="bordered"
                        labelPlacement="outside"
                        placeholder="Enter your description"
                        defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                        className="max-w-xs"
                    />
                </div>
                <div>
                    <h3>Call Chat</h3>
                    <p>Chat messages from the call will appear here</p>
                    <Textarea
                        isReadOnly
                        label="Chat"
                        variant="bordered"
                        labelPlacement="outside"
                        placeholder="Chat messages will be displayed here"
                        defaultValue="User1: Hello\nUser2: Hi there!"
                        className="max-w-xs"
                    />
                </div>
            </div>
            <div>
                <h3>Transcription</h3>
                <Input
                    isRequired
                    type="email"
                    label="Email"
                    defaultValue="junior@nextui.org"
                    className="max-w-xs"
                />
                <Input
                    isRequired
                    type="email"
                    label="Email"
                    defaultValue="junior@nextui.org"
                    className="max-w-xs"
                />
                <Input
                    isRequired
                    type="email"
                    label="Email"
                    defaultValue="junior@nextui.org"
                    className="max-w-xs"
                />
                <Input
                    isRequired
                    type="email"
                    label="Email"
                    defaultValue="junior@nextui.org"
                    className="max-w-xs"
                />
            </div>
        </section>
    );
};

export default AudioTranscriber;
