module.exports = {
  sequence: ['ver', 'cat', 's', 'ip', 'c', 'ua', 'refer', 'v', 'tag', 'dg', 't', 'a', 'link', 'dr', 'x', 'y', 'rs', 'lang', 'flash', 'br', 'p', 'proj', 'ad', 'ssid'],
  relation: {
    ip: {
      type: 'IP'
    },
    ua: {
      key: 'user-agent',
      type: 'headers'
    },
    refer: {
      key: 'referer',
      type: 'headers'
    }
  },
  field: ['ver', 'cat', 's', 'ip', 'c', 'ua', 'refer', 'v', 'tag', 'dg', 't', 'a', 'link', 'dr', 'x', 'y', 'rs', 'lang', 'flash', 'br', 'p', 'proj', 'ad', 'ssid'],
  format: 'created,version,cat,service,ip,client,ua,refer,video,tag,dg,type,appkey,link,duration,x,y,resolution,language,flash,brand,program,project,ad,ssid',
  params: ['ver', 'cat', 's', 'ip', 'c', 'ua', 'refer', 'v', 'tag', 'dg', 't', 'p', 'link', 'dr', 'x', 'y', 'rs', 'lang', 'flash', 'br', 'ch', 'proj', 'n', 'a', 'ad', 'ssid'],
  separator: '\t',
  created: true
}
