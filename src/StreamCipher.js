import React, { useState, useEffect } from 'react';
import StreamCipherImg from './StreamCipherImg';

function StreamCipher(props) {
    const [message, setMessage] = useState('')
    const [key, setKey] = useState('')
    const [encrypted, setEncrypted] = useState('')

    const isBinary = (message) => {
        for(let char of message) {
            if(isNaN(parseInt(char))) {
                return false
            }
        }
        return true
    }

    const convertToBin = (message) => {
        if(isBinary(message)) {
            return [message]
        }
        let converted = []
        for(let char of message) {
            converted.push(char.charCodeAt().toString(2))
        }
        return converted
    }

    const ciphering = (message, key) => {
        const keyLen = key.length
        let converted = convertToBin(message)
        let encrypted = []
        let keyIdx = 0
        let encryptedChar = ""
        for(let char of converted) {
            encryptedChar = ""
            for(let bin of char) {
                encryptedChar += bin ^ key[keyIdx]
                keyIdx = (keyIdx + 1) % keyLen
            }
            encrypted.push(encryptedChar)
        }
        setEncrypted(encrypted.join(' '))
    }

    const deciphering = (message, key) => {
        const keyLen = key.length
        let words = message.split(" ")
        let encrypted = []
        let decrypted = []
        let keyIdx = 0
        let encryptedChar = ""
        for(let word of words) {
            encryptedChar = ""
            for(let char of word) {
                encryptedChar += char ^ key[keyIdx]
                keyIdx = (keyIdx + 1) % keyLen
            }
            decrypted.push(String.fromCharCode(parseInt(encryptedChar, 2)))            
        }
        setEncrypted(decrypted.join(''))
    }

    return (
        <div>
            <StreamCipherImg setMessage={setMessage} />
            <label>message</label>
            <input value={message} onChange={(e) => { setMessage(e.target.value) }}></input>
            <div />
            <label>key</label>
            <input onChange={(e) => setKey(e.target.value) }></input>
            <button onClick={() => ciphering(message, key) }>encrypt</button>
            <button onClick={() => deciphering(message, key) }>decipher</button>
            <div className='result'>
                <span>result: </span>
                <span>{encrypted}</span>
            </div>
        </div>
    );
}

export default StreamCipher;