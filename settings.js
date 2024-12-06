/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpETWRJdlZqZThrcnBEYytlQVdoeHNpcVR2OWllNkR4NFNLalo5bm1tOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXNEODh0YmN0K1ZYQWdDUHZ2MXE3V0RudkpVYmNMeVVwTkNWYkJWdnlYWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQ2g2K0xmdklDMWRyRlAxQ1pBRWNtMWU3U09jb211SGpJQU9WUEErZVVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpU1dyMFpjQXRVV3hHQkxsTmxrcWVDQXhqaGV2Vnd6QTZhTUxSU1d5bUY0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRCODkrUEZhR0VrMjlqdUF3bWhoUkoyRWxOVnVTUzN2RjlrMVJzaS82MnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlWSWhmVVdzVlh4dndaUWYyOEx0MjdackF1WnhZMVQvdnNlVHMvYjcyalU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0JJZ2JIZ3lCZUgwQWs0SU5VZUkrcjBGVzFRWnZUMGtNOVJOMTNqY3lHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnA2MFkrWUFPRjMyWlZsZEJHenlLWjg0RU5Zb3haT3VnOHhtZ3BkOHV6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGY0x1Tk9vRkxJMEkzbEpXWTIzK2MxWWFRR3BqZy9mTmVFVFVPSmdXUjZsUU9YRkp4aGtISGtEWWFmK3U5bHBqL2tiOGRvbFpwQmtkVHBHQWJvaGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJGZzhhU2N2T01zb2lUM2szaHN2eXBYeDdlRTllWmxKYnRTLzVuZ2ZiWmVrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk5NDQwMjI1OTY4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEM0ExQUJGQThBQkUzQ0FDOTk0NDU2ODdEOEE5QzUyMyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzNDYyOTk0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5OTQ0MDIyNTk2ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTMwRjRDMzFBRkRERDlERkJCNzFCNjNGRERDMUM2QkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzQ2Mjk5NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaXVxWXpPbjFSZy1SWWxJM1l0dDNDQSIsInBob25lSWQiOiI3YzJiYzUyNS0xYWNhLTRiMDAtOGQ1NC02ZGJmYzVkMTFlMGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdncGViNWYrdzdscUJyTittdEJOVyt0SDBVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc5VkZ3bmRGR0U4MjYxY0VuZkV0MG9UTTkrND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI4WlRKTkg1NiIsIm1lIjp7ImlkIjoiOTk0NDAyMjU5Njg4OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4o6v4o6v1rzvuK0gICDwn6e44aqyzLwg8J2Qi/CdkIDwnZCD8J2QmCDwnZCB8J2QlPCdkIYgIOKdnOKdnCDhqrYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05lWHJlc0hFTUtYeXJvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRmVUJDWC90dVhvZmVnNWZ3QVpVMU9KOTlEdGFiWEtBR1BXT2ZRZ1pXRjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBpUmI4ZlAxc1Q3WFVURi9uMkkrQ0hDMEpsYldYMnQrZzlhSFI2TnYyMkJnbFozaWVIaUYzYWZ1Qm5nOWhLeDk5R2lXR2RMRHRlbFVlV3VTMEJTVUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrTW9ua3o1VzZHZ09TdzRBU0h5RjZYS1pEa3VyRjRnSElCbVRhMzRMYUhSNks4S252YUxITERubTJxb09ab2NBUTRHNmhYMDFwQ1grU0Jsajd0emRoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk5NDQwMjI1OTY4ODo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlUzMUFRbC83Ymw2SDNvT1g4QUdWTlRpZmZRN1dtMXlnQmoxam4wSUdWaGUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM0NjI5OTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2Q1In0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "91";
const author = process.env.STICKER_AUTHOR || '⎯⎯ּ︭   🧸̼᪲ 𝐍𝐎𝐈𝐑  ❜❜ ᪶';
const packname = process.env.PACKNAME || '(⁠ ⁠◜⁠‿⁠◝⁠ ⁠)⁠♡';
const dev = process.env.DEV || '917439317360';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'false';
const antibot = process.env.ANTIBOT || 'false';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  anticall,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
