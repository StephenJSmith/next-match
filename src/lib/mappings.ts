import { formatShortDateTime } from './utils'
import { MessageDto, MessageWithSenderRecipient } from '@/types'

export const mapMessageToMessageDto = (message: MessageWithSenderRecipient): MessageDto => {
  return {
    id: message.id,
    text: message.text,
    created: formatShortDateTime(message.created),
    dateRead: message.dateRead
      ? formatShortDateTime(message.dateRead)
      : null,
    senderId: message.sender?.userId,
    senderName: message.sender?.name,
    senderImage: message.sender?.image,
    recipientId: message.recipient?.userId,
    recipientName: message.recipient?.name,
    recipientImages: message.recipient?.image,    
  };
}