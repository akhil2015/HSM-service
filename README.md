# API.HSM
This is the HSM API which directly interacts with Thales nShield/SoftHSM.

## Requirements
- Node JS v10 and above
- npm
- MySQL, for database

## Dev. Requirements
Following are only required if you are running this repository locally
- softhsm
    - Mac:
    ```sh
        brew install softhsm
        softhsm2-util --init-token --slot 0 --label "tokenTest" --pin 9540 --so-pin 9540
    ```

## Configuration Instructions
- Specify the default configuration to be selected as either of SoftHSM/Thales NShield Config in __src/Config.ts__.

## Build Instructions
```
    npm install
    npm run compile
    npm run start
```


## API Reference
Check [here](docs/api.md)

## Development Branch
Current development branch is __compact-sigs__