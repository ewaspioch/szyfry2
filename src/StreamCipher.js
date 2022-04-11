import React, { useState, useEffect } from 'react';

function StreamCipher(props) {
    const [message, setMessage] = useState('')
    const [key, setKey] = useState('')
    const [encrypted, setEncrypted] = useState('')

    const isBinary = (message) => {
        for(let char of message) {
            if(isNaN(parseInt(char))) {
                console.log("not binary")
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
        console.log(converted)
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
        console.log(encrypted)
        setEncrypted(encrypted.join(' '))
    }

    return (
        <div>
            <label>message</label>
            <input onChange={(e) => { setMessage(e.target.value) }}></input>
            <div />
            <label>key</label>
            <input onChange={(e) => setKey(e.target.value) }></input>
            <button onClick={() => ciphering(message, key) }>encrypt</button>
            <div className='result'>
                <span>result: </span>
                <span>{encrypted}</span>
            </div>
        </div>
    );
}

export default StreamCipher;