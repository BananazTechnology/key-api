import { ApiKey } from './ApiKey'

// eslint-disable-next-line no-unused-vars
export class Queue<ApiKeyT> {
    private storage: ApiKey[] = [];

    enqueue (item: ApiKey): void {
      this.storage.push(item)
    }

    dequeue (): ApiKey | undefined {
      return this.storage.shift()
    }

    rotate (): ApiKey | undefined {
      const lastUse = this.storage[0].getLastUse()
      if (!lastUse || this.timeCheck(lastUse)) {
        const val = this.dequeue()
        val?.getKey()
        if (val) {
          this.enqueue(val)
        }
        return val
      }
      return undefined
    }

    size (): number {
      return this.storage.length
    }

    private timeCheck (date: Date) {
      const timePassed = new Date().valueOf() - date.valueOf()
      const limit = 1000 * 15

      return timePassed > limit
    }
}
