# NotchNook-crack
## Analysis of NotchNook Registration Key Verification and Bypass Method

Ive never delved into cracking simple desktop applications, but a friend of mine told me about an app called NotchNook, and i wanted to make it free and forever.

So, after downloading app, i extracted a binary.

![2024-07-30 00 10 55](https://github.com/user-attachments/assets/3f6792e8-7105-4f9e-bc1a-e2dfe869ba3e)

Next, open it in IDA, selecting the arch as you prefer; in my case its arm64. The first thing i encountered was this:

![2024-07-30 00 10 04](https://github.com/user-attachments/assets/c0a8704c-2c10-454f-95b3-0a0ce1e8c50c)
_Hmm, a key?_

### Bypass Method #1:
Write your own custom server and replace the key!
Use this script: [https://github.com/devilr33f/knotocnho-patcher](https://github.com/devilr33f/knotocnho-patcher) (im too lazy to explain)

### Bypass Method #2 (created by me):
I managed to quickly find the exact location of key validation check, so just do the tasks below:

![2024-07-30 00 11 24](https://github.com/user-attachments/assets/fba62408-65da-44f8-8781-06858fdfa5e9)

# Your task is as follows:
- Option 1. Use the Frida script from the file `script.js` just once.
- Option 2. Patch the binary by changing bytes at offset `0x537324` from `1F050071` to `1F010071` (you can use HexFiend on macOS or HxD on Windows).
- Option 3. Download patched app from Releases page

# Ready? 
### Now enter random data into the key and email entry form, and voila! 
<img width="722" alt="image" src="https://github.com/user-attachments/assets/a5af246d-b218-442a-804d-9e7db68302e0">

I hope this is helpful, and dont forget to disable auto-updates :3.
