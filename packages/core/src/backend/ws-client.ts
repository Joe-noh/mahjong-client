import Phoenix from 'phoenix'
import { decamelize } from '@ridi/object-case-converter'

export class WSClient {
  private socket: Phoenix.Socket
  private channel: Phoenix.Channel

  public constructor(opts: { baseUrl: string; authToken: string }) {
    const url = opts.baseUrl.replace(/^http/, 'ws').replace(/\/$/, '') + '/socket'
    const params = decamelize({ authToken: opts.authToken })

    this.socket = new Phoenix.Socket(url, { params })
  }

  public connect(): void {
    this.socket.connect()
  }

  public join(topic: string): void {
    this.channel = this.socket.channel(topic)
    this.channel.join()
  }

  public push(params: object): void {
    this.channel.push(decamelize(params))
  }
}
