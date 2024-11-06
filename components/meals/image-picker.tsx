'use client';

import React, { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export interface ImagePickerProps {
    label: string;
    name: string;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ label, name }) => {

    // state to store the image picked by the user
    const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(null);

    // forwards the reference of button(click) to the input element
    const imageInput = useRef<HTMLInputElement>(null);

    // event-handlers can't be used server components
    const handlePickClick = () => {
        imageInput.current?.click();
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            setPickedImage(null);
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setPickedImage(reader.result);
        }               // generated url

        reader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && (<p>No image picked yet.</p>)}
                    {pickedImage && (<Image src={pickedImage as string} alt='The image selected by the user' fill />)}
                </div>
                <input className={classes.input} type="file" id={name} accept='image/png, image/jpeg' name={name} ref={imageInput} onChange={handleImageChange} required />
            </div>
            <button className={classes.button} type='button' onClick={handlePickClick}>Pick an Image</button>
        </div>
    )
}

export default ImagePicker;
