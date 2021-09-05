declare module "Minecraft" {
  /* @module Minecraft */
  /** 
    * Contains information related to changes to a piston expanding or retracting.
    * @public
    */
  export class ActivatePistonEvent {
    /**
      * True if the piston is the process of expanding.
      */
    "isExpanding": boolean
    /**
      * Contains additional properties and details of the piston.
      */
    "piston": BlockPistonComponent
    
  }
  
  /** 
    * Manages callbacks that are connected to piston activations.
    * @public
    */
  export class ActivatePistonEventSignal {
    
  /**
    * @remarks
    * Adds a callback that will be called when a piston expands or retracts.
    *
    * @param callback 
    *
    *
    */
  subscribe(callback: (arg: ActivatePistonEvent) => void): (arg: ActivatePistonEvent) => void;
  /**
    * @remarks
    * Removes a callback from being called when a piston expands or retracts.
    *
    * @param callback 
    *
    *
    * @throws This function can throw errors.
    */
  unsubscribe(callback: (arg: ActivatePistonEvent) => void): void;
  }
  
  /** 
    * @public
    */
  export class ActorAddEffectEvent {
    /**
      */
    "effect": Effect
    /**
      */
    "effectState": number
    /**
      */
    "entity": Entity
    
  }
  
  /** 
    * Manages callbacks that are connected to when an effect is added to an entity.
    * @public
    */
  export class AddEffectEventSignal {
    
  /**
    * @remarks
    * Adds a callback that will be called when an effect is added to an entity.
    *
    * @param callback 
    *
    *
    */
  subscribe(callback: (arg: ActorAddEffectEvent) => void): (arg: ActorAddEffectEvent) => void;
  /**
    * @remarks
    * Removes a callback from being called when an effect is added to an entity.
    *
    * @param callback 
    *
    *
    * @throws This function can throw errors.
    */
  unsubscribe(callback: (arg: ActorAddEffectEvent) => void): void;
  }
  
  /** 
    * When added, this component makes the entity spawn with a rider of the specified entityType.
    * @public
    */
  export class AddRider {
    /**
      * The type of entity that is added as a rider for this entity when spawned under certain conditions.
      * @throws This property can throw when used.
      */
    "entityType": string
    /**
      * Identifier of this component. Should always be minecraft:addrider.
      */
    "id": string
    /**
      * Optional spawn event to trigger on the rider when that rider is spawned for this entity.
      * @throws This property can throw when used.
      */
    "spawnEvent": string
    
  }
  
  /** 
    * Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.
    * @public
    */
  export class Ageable {
    /**
      * List of items that the entity drops when it grows up.
      * @throws This property can throw when used.
      */
    "dropItems": Array<any>
    /**
      * Amount of time before the entity grows up, -1 for always a baby.
      * @throws This property can throw when used.
      */
    "duration": number
    /**
      * List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by.
      * @throws This property can throw when used.
      */
    "feedItems": Array<EntityDefinitionFeedItem>
    /**
      * Event to run when this entity grows up.
      * @throws This property can throw when used.
      */
    "growUp": Trigger
    /**
      * Identifier of this component. Should always be minecraft:ageable.
      */
    "id": string
    
  }
  
  /** 
    * Contains information related to changes before a piston expands or retracts.
    * @public
    */
  export class BeforeActivatePistonEvent {
    /**
      * If this is set to true within an event handler, the piston activation is canceled.
      */
    "cancel": boolean
    /**
      * True if the piston is the process of expanding.
      */
    "isExpanding": boolean
    /**
      * Contains additional properties and details of the piston.
      */
    "piston": BlockPistonComponent
    
  }
  
  /** 
    * Manages callbacks that are connected to an event that fires before a piston is activated.
    * @public
    */
  export class BeforeActivatePistonEventSignal {
    
  /**
    * @remarks
    * Adds a callback that will be called before a piston expands or retracts.
    *
    * @param callback 
    *
    *
    */
  subscribe(callback: (arg: BeforeActivatePistonEvent) => void): (arg: BeforeActivatePistonEvent) => void;
  /**
    * @remarks
    * Removes a callback from being called before a piston expands or retracts.
    *
    * @param callback 
    *
    *
    * @throws This function can throw errors.
    */
  unsubscribe(callback: (arg: BeforeActivatePistonEvent) => void): void;
  }
  
  /** 
    * An event that fires as players enter chat messages.
    * @public
    */
  export class BeforeChatEvent {
    /**
      * If set to true in a beforeChat event handler, this message is not broadcast out.
      */
    "canceled": boolean
    /**
      * Message that is being broadcast. In a beforeChat event handler, _message_ can be updated with edits before the message is displayed to players.
      */
    "message": string
    /**
      * Player that sent the chat message.
      */
    "sender": Player
    /**
      * If true, this message is directly targeted to one or more players (i.e., is not broadcast.)
      */
    "sendToTargets": boolean
    /**
      * List of players that will receive this message.
      */
    "targets": Array<Player>
    
  }
  
  /** 
    * Manages callbacks that are connected to an event that fires before chat messages are sent.
    * @public
    */
  export class BeforeChatEventSignal {
    
  /**
    * @remarks
    * Adds a callback that will be called before new chat messages are sent.
    *
    * @param callback 
    *
    *
    */
  subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void;
  /**
    * @remarks
    * Removes a callback from being called before new chat messages are sent.
    *
    * @param callback 
    *
    *
    * @throws This function can throw errors.
    */
  unsubscribe(callback: (arg: BeforeChatEvent) => void): void;
  }
  
  /** 
    * @public
    */
  export class BeforeExplosionEvent {
    /**
      */
    "cancel": boolean
    /**
      */
    "dimension": Dimension
    /**
      */
    "impactedBlocks": Array<BlockLocation>
    /**
      */
    "source": Entity
    
  }
  
  /** 
    * @public
    */
  export class BeforeExplosionEventSignal {
    
  /**
    *
    * @param callback 
    *
    *
    */
  subscribe(callback: (arg: BeforeExplosionEvent) => void): (arg: BeforeExplosionEvent) => void;
  /**
    *
    * @param callback 
    *
    *
    * @throws This function can throw errors.
    */
  unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void;
  }
  
  /** 
    * Represents a block in a dimension. A block represents a unique X, Y, and Z within a dimension and get/sets the state of the block at that location. This type was significantly updated in version 1.17.10.21.
    * @public
    */
  export class Block {
    /**
      */
    "x": number
    /**
      */
    "y": number
    /**
      */
    "z": number
    
  /**
    *
    *
    * @returns Whether this particular block, based on its block type, can be waterlogged.
    *
    */
  canBeWaterlogged(): boolean;
  /**
    *
    *
    * @returns Additional block configuration data that describes the block.
    *
    * @throws This function can throw errors.
    */
  getBlockData(): BlockPermutation;
  /**
    *
    *
    *
    * @throws This function can throw errors.
    */
  getComponent(): any;
  /**
    *
    *
    *
    */
  getDimension(): Dimension;
  /**
    *
    *
    * @returns Coordinates of the specified block.
    *
    */
  getLocation(): BlockLocation;
  /**
    *
    *
    * @returns The list of tags that the block has.
    *
    */
  getTags(): Array<any>;
  /**
    * @remarks
    * Checks to see if the permutation of this block has a specific tag.
    *
    *
    * @returns Returns `true` if the permutation of this block has the tag, else `false`.
    *
    * @example check_block_tags.js
    * ```typescript
    *    import { World, BlockTypes, BlockLocation } from "Minecraft";
    *    
    *    // Fetch the block
    *    const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
    *    
    *    console.log(`Block is dirt: ${block.hasTag("dirt")}`);
    *    console.log(`Block is wood: ${block.hasTag("wood")}`);
    *    console.log(`Block is stone: ${block.hasTag("stone")}`);
    *    
    * ```
    */
  hasTag(): boolean;
  /**
    *
    *
    * @returns Whether this particular block is empty (air).
    *
    */
  isEmpty(): boolean;
  /**
    *
    *
    * @returns Whether this particular block is in a waterlogged state.
    *
    */
  isWaterlogged(): boolean;
  /**
    * @remarks
    * Sets the block in the dimension to the state of the permutation.
    *
    * @param permutation 
    *
    *
    * @example place_bottom_stone_slab.js
    * ```typescript
    *    import { World, BlockTypes, BlockProperties, BlockLocation } from "Minecraft";
    *    
    *    // Create the permutation
    *    let bottomStoneSlab = BlockTypes.stoneSlab.createDefaultBlockPermutation();
    *    bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
    *    bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;
    *    
    *    // Fetch the block
    *    const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
    *    
    *    // Set the permutation
    *    block.setPermutation(bottomStoneSlab);
    *    
    * ```
    */
  setPermutation(permutation: BlockPermutation): void;
  /**
    * @remarks
    * Sets the type of block.
    *
    *
    *
    */
  setType(): void;
  /**
    * @remarks
    * Sets the waterlogged state of the block.
    *
    * @param setWaterlogged If set to true, and if the block can be waterlogged, then the block becomes waterlogged.
    *
    *
    * @throws This function can throw errors.
    */
  setWaterlogged(setWaterlogged: boolean): void;
  }
  
  /** 
    * Base type for components associated with blocks.
    * @public
    */
  export class BlockComponent {
    
  }
  
  /** 
    * Represents the inventory of a block in the world. Used with blocks like chests.
    * @public
    */
  export class BlockInventoryComponent {
    /**
      * The container which holds an {@link Minecraft.ItemStack}.
      * @throws This property can throw when used.
      */
    "container": BlockInventoryComponentContainer
    /**
      * Coordinates of the specified block.
      */
    "location": BlockLocation
    
  }
  
  /** 
    * Represents the inventory of a {@link Minecraft.Block} in the world. Used with blocks like chests.
    * @public
    */
  export class BlockInventoryComponentContainer {
    /**
      * Contains a count of the slots in the container that are empty.
      * @throws This property can throw when used.
      */
    "emptySlotsCount": number
    /**
      * Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.
      * @throws This property can throw when used.
      */
    "size": number
    
  /**
    * @remarks
    * Adds an item to the specified container. Item will be placed in the first available empty slot. (use .setItem if you wish to set items in a particular slot.)
    *
    * @param itemStack The stack of items to add.
    *
    *
    * @throws This function can throw errors.
    */
  addItem(itemStack: ItemStack): void;
  /**
    * @remarks
    * Gets the item stack for the set of items at the specified slot. If the slot is empty, returns undefined. This method does not change or clear the contents of the specified slot.
    *
    * @param slot Zero-based index of the slot to retrieve items from.
    *
    *
    * @throws This function can throw errors.
    * @example getItem.js
    * ```typescript
    *    const itemStack = rightChestContainer.getItem(0);
    *    test.assert(itemStack.id === "apple", "Expected apple");
    *    test.assert(itemStack.amount === 10, "Expected 10 apples");
    *    
    * ```
    */
  getItem(slot: number): ItemStack;
  /**
    * @remarks
    * Sets an item stack within a particular slot.
    *
    * @param slot Zero-based index of the slot to set an item at.
    * @param itemStack Stack of items to place within the specified slot.
    *
    *
    * @throws This function can throw errors.
    */
  setItem(slot: number, itemStack: ItemStack): void;
  /**
    * @remarks
    * Swaps items between two different slots within containers.
    *
    * @param slot Zero-based index of the slot to swap from this container.
    * @param otherSlot Zero-based index of the slot to swap with.
    * @param otherContainer Target container to swap with. Note this can be the same container as this source.
    *
    *
    * @throws This function can throw errors.
    * @example swapItems.js
    * ```typescript
    *    rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
    *    
    * ```
    */
  swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
  /**
    * @remarks
    * Moves an item from one slot to another, potentially across containers.
    *
    * @param fromSlot 
    * @param toSlot Zero-based index of the slot to move to.
    * @param toContainer Target container to transfer to. Note this can be the same container as the source.
    *
    *
    * @throws This function can throw errors.
    * @example transferItem.js
    * ```typescript
    *    rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
    *    
    * ```
    */
  transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
  }
  
  /** 
    * Contains the integer X, Y, Z coordinates for a block. For decimal locations useful for entities, items, and more, see {@link Minecraft.Location}.
    * @public
    */
  export class BlockLocation {
    /**
      * The X coordinate.
      */
    "x": number
    /**
      * The integer-based Y position.
      */
    "y": number
    /**
      * The integer-based Z position.
      */
    "z": number
    
  /**
    * @remarks
    * Returns a BlockLocation for a block above this BlockLocation (that is, y - 1).
    *
    *
    *
    */
  above(): BlockLocation;
  /**
    *
    * @param x 
    * @param y 
    * @param z 
    *
    *
    */
  constructor(x: number, y: number, z: number);
  /**
    * @remarks
    * Compares this BlockLocation and another BlockLocation to one another.
    *
    * @param other Other block location to compare this BlockLocation to.
    *
    * @returns True if the two block locations are equal.
    *
    */
  equals(other: BlockLocation): boolean;
  /**
    * @remarks
    * Returns a block location using a position relative to this block location
    *
    * @param x X offset relative to this BlockLocation.
    * @param y Y offset relative to this BlockLocation.
    * @param z Z offset relative to this BlockLocation.
    *
    * @returns BlockLocation that is positioned relative to this BlockLocation.
    *
    */
  offset(x: number, y: number, z: number): BlockLocation;
  }
  
  /** 
    * Contains the combination of type {@link Minecraft.BlockType} and properties (also sometimes called block state) which describe a block (but does not belong to a specific {@link Minecraft.Block}). This type was introduced as of version 1.17.10.21.
    * @public
    */
  export class BlockPermutation {
    
  /**
    * @remarks
    * Creates a copy of this permutation.
    *
    *
    * @returns A copy of the permutation.
    *
    */
  clone(): BlockPermutation;
  /**
    *
    *
    * @returns Returns the list of all of the properties that the permutation has.
    *
    */
  getAllProperties(): Array<any>;
  /**
    * @remarks
    * Gets a property for the permutation.
    *
    * @param propertyName 
    *
    * @returns Returns the property if the permutation has it, else `null`.
    *
    * @throws This function can throw errors.
    * @example place_bottom_stone_slab.js
    * ```typescript
    *    import { World, BlockTypes, BlockProperties, BlockLocation } from "Minecraft";
    *    
    *    // Create the permutation
    *    let bottomStoneSlab = BlockTypes.stoneSlab.createDefaultBlockPermutation();
    *    bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
    *    bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;
    *    
    *    // Fetch the block
    *    const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
    *    
    *    // Set the permutation
    *    block.setPermutation(bottomStoneSlab);
    *    
    * ```
    */
  getProperty(propertyName: string): any;
  /**
    * @remarks
    * Creates a copy of the permutation.
    *
    *
    *
    */
  getTags(): Array<any>;
  /**
    *
    *
    * @returns The {@link Minecraft.BlockType} that the permutation has.
    *
    * @throws This function can throw errors.
    */
  getType(): BlockType;
  /**
    * @remarks
    * Checks to see if the permutation has a specific tag.
    *
    * @param tag 
    *
    * @returns Returns `true` if the permutation has the tag, else `false`.
    *
    * @example check_block_tags.js
    * ```typescript
    *    import { World, BlockTypes, BlockLocation } from "Minecraft";
    *    
    *    // Fetch the block
    *    const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
    *    const blockPerm = block.getPermutation();
    *    
    *    console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
    *    console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
    *    console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
    *    
    * ```
    */
  hasTag(tag: string): boolean;
  }
  
  /** 
    * Represents the inventory of a block in the world. Used with blocks like chests.
    * @public
    */
  export class BlockPistonComponent {
    /**
      * A set of locations for blocks that are impacted by the activation of this piston.
      * @throws This property can throw when used.
      */
    "attachedBlocks": Array<BlockLocation>
    /**
      * Whether the piston is fully expanded.
      * @throws This property can throw when used.
      */
    "isExpanded": boolean
    /**
      * Whether the piston is in the process of expanding.
      * @throws This property can throw when used.
      */
    "isExpanding": boolean
    /**
      * Whether the piston is in the process of expanding or retracting.
      * @throws This property can throw when used.
      */
    "isMoving": boolean
    /**
      * Whether the piston is fully retracted.
      * @throws This property can throw when used.
      */
    "isRetracted": boolean
    /**
      * Whether the piston is in the process of retracting.
      * @throws This property can throw when used.
      */
    "isRetracting": boolean
    /**
      */
    "location": BlockLocation
    
  }
  
  /** 
    * @public
    */
  export class BlockProperties {
    /**
      */
    "age": string
    /**
      */
    "ageBit": string
    /**
      */
    "allowUnderwaterBit": string
    /**
      */
    "attachedBit": string
    /**
      */
    "attachment": string
    /**
      */
    "bambooLeafSize": string
    /**
      */
    "bambooStalkThickness": string
    /**
      */
    "bigDripleafHead": string
    /**
      */
    "bigDripleafTilt": string
    /**
      */
    "biteCounter": string
    /**
      */
    "blockLightLevel": string
    /**
      */
    "brewingStandSlotABit": string
    /**
      */
    "brewingStandSlotBBit": string
    /**
      */
    "brewingStandSlotCBit": string
    /**
      */
    "buttonPressedBit": string
    /**
      */
    "candles": string
    /**
      */
    "cauldronLiquid": string
    /**
      */
    "chemistryTableType": string
    /**
      */
    "chiselType": string
    /**
      */
    "clusterCount": string
    /**
      */
    "color": string
    /**
      */
    "colorBit": string
    /**
      */
    "composterFillLevel": string
    /**
      */
    "conditionalBit": string
    /**
      */
    "coralColor": string
    /**
      */
    "coralDirection": string
    /**
      */
    "coralFanDirection": string
    /**
      */
    "coralHangTypeBit": string
    /**
      */
    "coveredBit": string
    /**
      */
    "crackedState": string
    /**
      */
    "damage": string
    /**
      */
    "deadBit": string
    /**
      */
    "deprecated": string
    /**
      */
    "direction": string
    /**
      */
    "dirtType": string
    /**
      */
    "disarmedBit": string
    /**
      */
    "doorHingeBit": string
    /**
      */
    "doublePlantType": string
    /**
      */
    "dragDown": string
    /**
      */
    "dripstoneThickness": string
    /**
      */
    "endPortalEyeBit": string
    /**
      */
    "explodeBit": string
    /**
      */
    "extinguished": string
    /**
      */
    "facingDirection": string
    /**
      */
    "fillLevel": string
    /**
      */
    "flowerType": string
    /**
      */
    "groundSignDirection": string
    /**
      */
    "growingPlantAge": string
    /**
      */
    "growth": string
    /**
      */
    "hanging": string
    /**
      */
    "headPieceBit": string
    /**
      */
    "height": string
    /**
      */
    "honeyLevel": string
    /**
      */
    "hugeMushroomBits": string
    /**
      */
    "infiniburnBit": string
    /**
      */
    "inWallBit": string
    /**
      */
    "itemFrameMapBit": string
    /**
      */
    "kelpAge": string
    /**
      */
    "leverDirection": string
    /**
      */
    "liquidDepth": string
    /**
      */
    "lit": string
    /**
      */
    "moisturizedAmount": string
    /**
      */
    "monsterEggStoneType": string
    /**
      */
    "multiFaceDirectionBits": string
    /**
      */
    "newLeafType": string
    /**
      */
    "newLogType": string
    /**
      */
    "noDropBit": string
    /**
      */
    "occupiedBit": string
    /**
      */
    "oldLeafType": string
    /**
      */
    "oldLogType": string
    /**
      */
    "openBit": string
    /**
      */
    "outputLitBit": string
    /**
      */
    "outputSubtractBit": string
    /**
      */
    "persistentBit": string
    /**
      */
    "pillarAxis": string
    /**
      */
    "portalAxis": string
    /**
      */
    "poweredBit": string
    /**
      */
    "prismarineBlockType": string
    /**
      */
    "railDataBit": string
    /**
      */
    "railDirection": string
    /**
      */
    "redstoneSignal": string
    /**
      */
    "repeaterDelay": string
    /**
      */
    "respawnAnchorCharge": string
    /**
      */
    "rotation": string
    /**
      */
    "sandStoneType": string
    /**
      */
    "sandType": string
    /**
      */
    "saplingType": string
    /**
      */
    "seaGrassType": string
    /**
      */
    "spongeType": string
    /**
      */
    "stability": string
    /**
      */
    "stabilityCheck": string
    /**
      */
    "stoneBrickType": string
    /**
      */
    "stoneSlabType": string
    /**
      */
    "stoneSlabType2": string
    /**
      */
    "stoneSlabType3": string
    /**
      */
    "stoneSlabType4": string
    /**
      */
    "stoneType": string
    /**
      */
    "strippedBit": string
    /**
      */
    "structureBlockType": string
    /**
      */
    "structureVoidType": string
    /**
      */
    "suspendedBit": string
    /**
      */
    "tallGrassType": string
    /**
      */
    "toggleBit": string
    /**
      */
    "topSlotBit": string
    /**
      */
    "torchFacingDirection": string
    /**
      */
    "triggeredBit": string
    /**
      */
    "turtleEggCount": string
    /**
      */
    "twistingVinesAge": string
    /**
      */
    "updateBit": string
    /**
      */
    "upperBlockBit": string
    /**
      */
    "upsideDownBit": string
    /**
      */
    "vineDirectionBits": string
    /**
      */
    "wallBlockType": string
    /**
      */
    "wallConnectionTypeEast": string
    /**
      */
    "wallConnectionTypeNorth": string
    /**
      */
    "wallConnectionTypeSouth": string
    /**
      */
    "wallConnectionTypeWest": string
    /**
      */
    "wallPostBit": string
    /**
      */
    "weepingVinesAge": string
    /**
      */
    "weirdoDirection": string
    /**
      */
    "woodType": string
    
  }
  
  /** 
    * The type (or template) of a block. Does not contain permutation data (state) other than the type of block it represents. This type was introduced as of version 1.17.10.21.
    * @public
    */
  export class BlockType {
    
  /**
    *
    *
    *
    */
  canBeWaterlogged(): boolean;
  /**
    * @remarks
    * Creates the default {@link Minecraft.BlockPermutation} for this type which uses the default values for all properties.
    *
    *
    * @returns Returns created permutation.
    *
    * @throws This function can throw errors.
    * @example place_bottom_stone_slab.js
    * ```typescript
    *    import { World, BlockTypes, BlockProperties, BlockLocation } from "Minecraft";
    *    
    *    // Create the permutation
    *    let bottomStoneSlab = BlockTypes.stoneSlab.createDefaultBlockPermutation();
    *    bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
    *    bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;
    *    
    *    // Fetch the block
    *    const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
    *    
    *    // Set the permutation
    *    block.setPermutation(bottomStoneSlab);
    *    
    * ```
    */
  createDefaultBlockPermutation(): BlockPermutation;
  /**
    * @remarks
    * Name of the block type.
    *
    *
    * @returns Block type name - for example, `minecraft:acacia_stairs`.
    *
    */
  getName(): string;
  }
  
  /** 
    * @public
    */
  export class BlockTypes {
    /**
      */
    "acaciaButton": BlockType
    /**
      */
    "acaciaDoor": BlockType
    /**
      */
    "acaciaFenceGate": BlockType
    /**
      */
    "acaciaPressurePlate": BlockType
    /**
      */
    "acaciaStairs": BlockType
    /**
      */
    "acaciaStandingSign": BlockType
    /**
      */
    "acaciaTrapdoor": BlockType
    /**
      */
    "acaciaWallSign": BlockType
    /**
      */
    "activatorRail": BlockType
    /**
      */
    "air": BlockType
    /**
      */
    "allow": BlockType
    /**
      */
    "amethystBlock": BlockType
    /**
      */
    "amethystCluster": BlockType
    /**
      */
    "ancientDebris": BlockType
    /**
      */
    "andesiteStairs": BlockType
    /**
      */
    "anvil": BlockType
    /**
      */
    "azalea": BlockType
    /**
      */
    "azaleaLeaves": BlockType
    /**
      */
    "azaleaLeavesFlowered": BlockType
    /**
      */
    "bamboo": BlockType
    /**
      */
    "bambooSapling": BlockType
    /**
      */
    "barrel": BlockType
    /**
      */
    "barrier": BlockType
    /**
      */
    "basalt": BlockType
    /**
      */
    "beacon": BlockType
    /**
      */
    "bed": BlockType
    /**
      */
    "bedrock": BlockType
    /**
      */
    "beehive": BlockType
    /**
      */
    "beeNest": BlockType
    /**
      */
    "beetroot": BlockType
    /**
      */
    "bell": BlockType
    /**
      */
    "bigDripleaf": BlockType
    /**
      */
    "birchButton": BlockType
    /**
      */
    "birchDoor": BlockType
    /**
      */
    "birchFenceGate": BlockType
    /**
      */
    "birchPressurePlate": BlockType
    /**
      */
    "birchStairs": BlockType
    /**
      */
    "birchStandingSign": BlockType
    /**
      */
    "birchTrapdoor": BlockType
    /**
      */
    "birchWallSign": BlockType
    /**
      */
    "blackCandle": BlockType
    /**
      */
    "blackCandleCake": BlockType
    /**
      */
    "blackGlazedTerracotta": BlockType
    /**
      */
    "blackstone": BlockType
    /**
      */
    "blackstoneDoubleSlab": BlockType
    /**
      */
    "blackstoneSlab": BlockType
    /**
      */
    "blackstoneStairs": BlockType
    /**
      */
    "blackstoneWall": BlockType
    /**
      */
    "blastFurnace": BlockType
    /**
      */
    "blueCandle": BlockType
    /**
      */
    "blueCandleCake": BlockType
    /**
      */
    "blueGlazedTerracotta": BlockType
    /**
      */
    "blueIce": BlockType
    /**
      */
    "boneBlock": BlockType
    /**
      */
    "bookshelf": BlockType
    /**
      */
    "borderBlock": BlockType
    /**
      */
    "brewingStand": BlockType
    /**
      */
    "brickBlock": BlockType
    /**
      */
    "brickStairs": BlockType
    /**
      */
    "brownCandle": BlockType
    /**
      */
    "brownCandleCake": BlockType
    /**
      */
    "brownGlazedTerracotta": BlockType
    /**
      */
    "brownMushroom": BlockType
    /**
      */
    "brownMushroomBlock": BlockType
    /**
      */
    "bubbleColumn": BlockType
    /**
      */
    "buddingAmethyst": BlockType
    /**
      */
    "cactus": BlockType
    /**
      */
    "cake": BlockType
    /**
      */
    "calcite": BlockType
    /**
      */
    "camera": BlockType
    /**
      */
    "campfire": BlockType
    /**
      */
    "candle": BlockType
    /**
      */
    "candleCake": BlockType
    /**
      */
    "carpet": BlockType
    /**
      */
    "carrots": BlockType
    /**
      */
    "cartographyTable": BlockType
    /**
      */
    "carvedPumpkin": BlockType
    /**
      */
    "cauldron": BlockType
    /**
      */
    "caveVines": BlockType
    /**
      */
    "caveVinesBodyWithBerries": BlockType
    /**
      */
    "caveVinesHeadWithBerries": BlockType
    /**
      */
    "chain": BlockType
    /**
      */
    "chainCommandBlock": BlockType
    /**
      */
    "chemicalHeat": BlockType
    /**
      */
    "chemistryTable": BlockType
    /**
      */
    "chest": BlockType
    /**
      */
    "chiseledDeepslate": BlockType
    /**
      */
    "chiseledNetherBricks": BlockType
    /**
      */
    "chiseledPolishedBlackstone": BlockType
    /**
      */
    "chorusFlower": BlockType
    /**
      */
    "chorusPlant": BlockType
    /**
      */
    "clay": BlockType
    /**
      */
    "coalBlock": BlockType
    /**
      */
    "coalOre": BlockType
    /**
      */
    "cobbledDeepslate": BlockType
    /**
      */
    "cobbledDeepslateDoubleSlab": BlockType
    /**
      */
    "cobbledDeepslateSlab": BlockType
    /**
      */
    "cobbledDeepslateStairs": BlockType
    /**
      */
    "cobbledDeepslateWall": BlockType
    /**
      */
    "cobblestone": BlockType
    /**
      */
    "cobblestoneWall": BlockType
    /**
      */
    "cocoa": BlockType
    /**
      */
    "coloredTorchBp": BlockType
    /**
      */
    "coloredTorchRg": BlockType
    /**
      */
    "commandBlock": BlockType
    /**
      */
    "composter": BlockType
    /**
      */
    "concrete": BlockType
    /**
      */
    "concretepowder": BlockType
    /**
      */
    "conduit": BlockType
    /**
      */
    "copperBlock": BlockType
    /**
      */
    "copperOre": BlockType
    /**
      */
    "coral": BlockType
    /**
      */
    "coralBlock": BlockType
    /**
      */
    "coralFan": BlockType
    /**
      */
    "coralFanDead": BlockType
    /**
      */
    "coralFanHang": BlockType
    /**
      */
    "coralFanHang2": BlockType
    /**
      */
    "coralFanHang3": BlockType
    /**
      */
    "crackedDeepslateBricks": BlockType
    /**
      */
    "crackedDeepslateTiles": BlockType
    /**
      */
    "crackedNetherBricks": BlockType
    /**
      */
    "crackedPolishedBlackstoneBricks": BlockType
    /**
      */
    "craftingTable": BlockType
    /**
      */
    "crimsonButton": BlockType
    /**
      */
    "crimsonDoor": BlockType
    /**
      */
    "crimsonDoubleSlab": BlockType
    /**
      */
    "crimsonFence": BlockType
    /**
      */
    "crimsonFenceGate": BlockType
    /**
      */
    "crimsonFungus": BlockType
    /**
      */
    "crimsonHyphae": BlockType
    /**
      */
    "crimsonNylium": BlockType
    /**
      */
    "crimsonPlanks": BlockType
    /**
      */
    "crimsonPressurePlate": BlockType
    /**
      */
    "crimsonRoots": BlockType
    /**
      */
    "crimsonSlab": BlockType
    /**
      */
    "crimsonStairs": BlockType
    /**
      */
    "crimsonStandingSign": BlockType
    /**
      */
    "crimsonStem": BlockType
    /**
      */
    "crimsonTrapdoor": BlockType
    /**
      */
    "crimsonWallSign": BlockType
    /**
      */
    "cryingObsidian": BlockType
    /**
      */
    "cutCopper": BlockType
    /**
      */
    "cutCopperSlab": BlockType
    /**
      */
    "cutCopperStairs": BlockType
    /**
      */
    "cyanCandle": BlockType
    /**
      */
    "cyanCandleCake": BlockType
    /**
      */
    "cyanGlazedTerracotta": BlockType
    /**
      */
    "darkOakButton": BlockType
    /**
      */
    "darkOakDoor": BlockType
    /**
      */
    "darkOakFenceGate": BlockType
    /**
      */
    "darkOakPressurePlate": BlockType
    /**
      */
    "darkOakStairs": BlockType
    /**
      */
    "darkoakStandingSign": BlockType
    /**
      */
    "darkOakTrapdoor": BlockType
    /**
      */
    "darkoakWallSign": BlockType
    /**
      */
    "darkPrismarineStairs": BlockType
    /**
      */
    "daylightDetector": BlockType
    /**
      */
    "daylightDetectorInverted": BlockType
    /**
      */
    "deadbush": BlockType
    /**
      */
    "deepslate": BlockType
    /**
      */
    "deepslateBrickDoubleSlab": BlockType
    /**
      */
    "deepslateBricks": BlockType
    /**
      */
    "deepslateBrickSlab": BlockType
    /**
      */
    "deepslateBrickStairs": BlockType
    /**
      */
    "deepslateBrickWall": BlockType
    /**
      */
    "deepslateCoalOre": BlockType
    /**
      */
    "deepslateCopperOre": BlockType
    /**
      */
    "deepslateDiamondOre": BlockType
    /**
      */
    "deepslateEmeraldOre": BlockType
    /**
      */
    "deepslateGoldOre": BlockType
    /**
      */
    "deepslateIronOre": BlockType
    /**
      */
    "deepslateLapisOre": BlockType
    /**
      */
    "deepslateRedstoneOre": BlockType
    /**
      */
    "deepslateTileDoubleSlab": BlockType
    /**
      */
    "deepslateTiles": BlockType
    /**
      */
    "deepslateTileSlab": BlockType
    /**
      */
    "deepslateTileStairs": BlockType
    /**
      */
    "deepslateTileWall": BlockType
    /**
      */
    "deny": BlockType
    /**
      */
    "detectorRail": BlockType
    /**
      */
    "diamondBlock": BlockType
    /**
      */
    "diamondOre": BlockType
    /**
      */
    "dioriteStairs": BlockType
    /**
      */
    "dirt": BlockType
    /**
      */
    "dirtWithRoots": BlockType
    /**
      */
    "dispenser": BlockType
    /**
      */
    "doubleCutCopperSlab": BlockType
    /**
      */
    "doublePlant": BlockType
    /**
      */
    "doubleStoneSlab": BlockType
    /**
      */
    "doubleStoneSlab2": BlockType
    /**
      */
    "doubleStoneSlab3": BlockType
    /**
      */
    "doubleStoneSlab4": BlockType
    /**
      */
    "doubleWoodenSlab": BlockType
    /**
      */
    "dragonEgg": BlockType
    /**
      */
    "driedKelpBlock": BlockType
    /**
      */
    "dripstoneBlock": BlockType
    /**
      */
    "dropper": BlockType
    /**
      */
    "element0": BlockType
    /**
      */
    "element1": BlockType
    /**
      */
    "element10": BlockType
    /**
      */
    "element100": BlockType
    /**
      */
    "element101": BlockType
    /**
      */
    "element102": BlockType
    /**
      */
    "element103": BlockType
    /**
      */
    "element104": BlockType
    /**
      */
    "element105": BlockType
    /**
      */
    "element106": BlockType
    /**
      */
    "element107": BlockType
    /**
      */
    "element108": BlockType
    /**
      */
    "element109": BlockType
    /**
      */
    "element11": BlockType
    /**
      */
    "element110": BlockType
    /**
      */
    "element111": BlockType
    /**
      */
    "element112": BlockType
    /**
      */
    "element113": BlockType
    /**
      */
    "element114": BlockType
    /**
      */
    "element115": BlockType
    /**
      */
    "element116": BlockType
    /**
      */
    "element117": BlockType
    /**
      */
    "element118": BlockType
    /**
      */
    "element12": BlockType
    /**
      */
    "element13": BlockType
    /**
      */
    "element14": BlockType
    /**
      */
    "element15": BlockType
    /**
      */
    "element16": BlockType
    /**
      */
    "element17": BlockType
    /**
      */
    "element18": BlockType
    /**
      */
    "element19": BlockType
    /**
      */
    "element2": BlockType
    /**
      */
    "element20": BlockType
    /**
      */
    "element21": BlockType
    /**
      */
    "element22": BlockType
    /**
      */
    "element23": BlockType
    /**
      */
    "element24": BlockType
    /**
      */
    "element25": BlockType
    /**
      */
    "element26": BlockType
    /**
      */
    "element27": BlockType
    /**
      */
    "element28": BlockType
    /**
      */
    "element29": BlockType
    /**
      */
    "element3": BlockType
    /**
      */
    "element30": BlockType
    /**
      */
    "element31": BlockType
    /**
      */
    "element32": BlockType
    /**
      */
    "element33": BlockType
    /**
      */
    "element34": BlockType
    /**
      */
    "element35": BlockType
    /**
      */
    "element36": BlockType
    /**
      */
    "element37": BlockType
    /**
      */
    "element38": BlockType
    /**
      */
    "element39": BlockType
    /**
      */
    "element4": BlockType
    /**
      */
    "element40": BlockType
    /**
      */
    "element41": BlockType
    /**
      */
    "element42": BlockType
    /**
      */
    "element43": BlockType
    /**
      */
    "element44": BlockType
    /**
      */
    "element45": BlockType
    /**
      */
    "element46": BlockType
    /**
      */
    "element47": BlockType
    /**
      */
    "element48": BlockType
    /**
      */
    "element49": BlockType
    /**
      */
    "element5": BlockType
    /**
      */
    "element50": BlockType
    /**
      */
    "element51": BlockType
    /**
      */
    "element52": BlockType
    /**
      */
    "element53": BlockType
    /**
      */
    "element54": BlockType
    /**
      */
    "element55": BlockType
    /**
      */
    "element56": BlockType
    /**
      */
    "element57": BlockType
    /**
      */
    "element58": BlockType
    /**
      */
    "element59": BlockType
    /**
      */
    "element6": BlockType
    /**
      */
    "element60": BlockType
    /**
      */
    "element61": BlockType
    /**
      */
    "element62": BlockType
    /**
      */
    "element63": BlockType
    /**
      */
    "element64": BlockType
    /**
      */
    "element65": BlockType
    /**
      */
    "element66": BlockType
    /**
      */
    "element67": BlockType
    /**
      */
    "element68": BlockType
    /**
      */
    "element69": BlockType
    /**
      */
    "element7": BlockType
    /**
      */
    "element70": BlockType
    /**
      */
    "element71": BlockType
    /**
      */
    "element72": BlockType
    /**
      */
    "element73": BlockType
    /**
      */
    "element74": BlockType
    /**
      */
    "element75": BlockType
    /**
      */
    "element76": BlockType
    /**
      */
    "element77": BlockType
    /**
      */
    "element78": BlockType
    /**
      */
    "element79": BlockType
    /**
      */
    "element8": BlockType
    /**
      */
    "element80": BlockType
    /**
      */
    "element81": BlockType
    /**
      */
    "element82": BlockType
    /**
      */
    "element83": BlockType
    /**
      */
    "element84": BlockType
    /**
      */
    "element85": BlockType
    /**
      */
    "element86": BlockType
    /**
      */
    "element87": BlockType
    /**
      */
    "element88": BlockType
    /**
      */
    "element89": BlockType
    /**
      */
    "element9": BlockType
    /**
      */
    "element90": BlockType
    /**
      */
    "element91": BlockType
    /**
      */
    "element92": BlockType
    /**
      */
    "element93": BlockType
    /**
      */
    "element94": BlockType
    /**
      */
    "element95": BlockType
    /**
      */
    "element96": BlockType
    /**
      */
    "element97": BlockType
    /**
      */
    "element98": BlockType
    /**
      */
    "element99": BlockType
    /**
      */
    "emeraldBlock": BlockType
    /**
      */
    "emeraldOre": BlockType
    /**
      */
    "enchantingTable": BlockType
    /**
      */
    "endBricks": BlockType
    /**
      */
    "endBrickStairs": BlockType
    /**
      */
    "enderChest": BlockType
    /**
      */
    "endGateway": BlockType
    /**
      */
    "endPortal": BlockType
    /**
      */
    "endPortalFrame": BlockType
    /**
      */
    "endRod": BlockType
    /**
      */
    "endStone": BlockType
    /**
      */
    "exposedCopper": BlockType
    /**
      */
    "exposedCutCopper": BlockType
    /**
      */
    "exposedCutCopperSlab": BlockType
    /**
      */
    "exposedCutCopperStairs": BlockType
    /**
      */
    "exposedDoubleCutCopperSlab": BlockType
    /**
      */
    "farmland": BlockType
    /**
      */
    "fence": BlockType
    /**
      */
    "fenceGate": BlockType
    /**
      */
    "fire": BlockType
    /**
      */
    "fletchingTable": BlockType
    /**
      */
    "floweringAzalea": BlockType
    /**
      */
    "flowerPot": BlockType
    /**
      */
    "flowingLava": BlockType
    /**
      */
    "flowingWater": BlockType
    /**
      */
    "frame": BlockType
    /**
      */
    "frostedIce": BlockType
    /**
      */
    "furnace": BlockType
    /**
      */
    "gildedBlackstone": BlockType
    /**
      */
    "glass": BlockType
    /**
      */
    "glassPane": BlockType
    /**
      */
    "glowFrame": BlockType
    /**
      */
    "glowingobsidian": BlockType
    /**
      */
    "glowLichen": BlockType
    /**
      */
    "glowstone": BlockType
    /**
      */
    "goldBlock": BlockType
    /**
      */
    "goldenRail": BlockType
    /**
      */
    "goldOre": BlockType
    /**
      */
    "graniteStairs": BlockType
    /**
      */
    "grass": BlockType
    /**
      */
    "grassPath": BlockType
    /**
      */
    "gravel": BlockType
    /**
      */
    "grayCandle": BlockType
    /**
      */
    "grayCandleCake": BlockType
    /**
      */
    "grayGlazedTerracotta": BlockType
    /**
      */
    "greenCandle": BlockType
    /**
      */
    "greenCandleCake": BlockType
    /**
      */
    "greenGlazedTerracotta": BlockType
    /**
      */
    "grindstone": BlockType
    /**
      */
    "hangingRoots": BlockType
    /**
      */
    "hardenedClay": BlockType
    /**
      */
    "hardGlass": BlockType
    /**
      */
    "hardGlassPane": BlockType
    /**
      */
    "hardStainedGlass": BlockType
    /**
      */
    "hardStainedGlassPane": BlockType
    /**
      */
    "hayBlock": BlockType
    /**
      */
    "heavyWeightedPressurePlate": BlockType
    /**
      */
    "honeyBlock": BlockType
    /**
      */
    "honeycombBlock": BlockType
    /**
      */
    "hopper": BlockType
    /**
      */
    "ice": BlockType
    /**
      */
    "infestedDeepslate": BlockType
    /**
      */
    "infoUpdate": BlockType
    /**
      */
    "infoUpdate2": BlockType
    /**
      */
    "invisiblebedrock": BlockType
    /**
      */
    "ironBars": BlockType
    /**
      */
    "ironBlock": BlockType
    /**
      */
    "ironDoor": BlockType
    /**
      */
    "ironOre": BlockType
    /**
      */
    "ironTrapdoor": BlockType
    /**
      */
    "jigsaw": BlockType
    /**
      */
    "jukebox": BlockType
    /**
      */
    "jungleButton": BlockType
    /**
      */
    "jungleDoor": BlockType
    /**
      */
    "jungleFenceGate": BlockType
    /**
      */
    "junglePressurePlate": BlockType
    /**
      */
    "jungleStairs": BlockType
    /**
      */
    "jungleStandingSign": BlockType
    /**
      */
    "jungleTrapdoor": BlockType
    /**
      */
    "jungleWallSign": BlockType
    /**
      */
    "kelp": BlockType
    /**
      */
    "ladder": BlockType
    /**
      */
    "lantern": BlockType
    /**
      */
    "lapisBlock": BlockType
    /**
      */
    "lapisOre": BlockType
    /**
      */
    "largeAmethystBud": BlockType
    /**
      */
    "lava": BlockType
    /**
      */
    "lavaCauldron": BlockType
    /**
      */
    "leaves": BlockType
    /**
      */
    "leaves2": BlockType
    /**
      */
    "lectern": BlockType
    /**
      */
    "lever": BlockType
    /**
      */
    "lightBlock": BlockType
    /**
      */
    "lightBlueCandle": BlockType
    /**
      */
    "lightBlueCandleCake": BlockType
    /**
      */
    "lightBlueGlazedTerracotta": BlockType
    /**
      */
    "lightGrayCandle": BlockType
    /**
      */
    "lightGrayCandleCake": BlockType
    /**
      */
    "lightningRod": BlockType
    /**
      */
    "lightWeightedPressurePlate": BlockType
    /**
      */
    "limeCandle": BlockType
    /**
      */
    "limeCandleCake": BlockType
    /**
      */
    "limeGlazedTerracotta": BlockType
    /**
      */
    "litBlastFurnace": BlockType
    /**
      */
    "litDeepslateRedstoneOre": BlockType
    /**
      */
    "litFurnace": BlockType
    /**
      */
    "litPumpkin": BlockType
    /**
      */
    "litRedstoneLamp": BlockType
    /**
      */
    "litRedstoneOre": BlockType
    /**
      */
    "litSmoker": BlockType
    /**
      */
    "lodestone": BlockType
    /**
      */
    "log": BlockType
    /**
      */
    "log2": BlockType
    /**
      */
    "loom": BlockType
    /**
      */
    "magentaCandle": BlockType
    /**
      */
    "magentaCandleCake": BlockType
    /**
      */
    "magentaGlazedTerracotta": BlockType
    /**
      */
    "magma": BlockType
    /**
      */
    "mediumAmethystBud": BlockType
    /**
      */
    "melonBlock": BlockType
    /**
      */
    "melonStem": BlockType
    /**
      */
    "mobSpawner": BlockType
    /**
      */
    "monsterEgg": BlockType
    /**
      */
    "mossBlock": BlockType
    /**
      */
    "mossCarpet": BlockType
    /**
      */
    "mossyCobblestone": BlockType
    /**
      */
    "mossyCobblestoneStairs": BlockType
    /**
      */
    "mossyStoneBrickStairs": BlockType
    /**
      */
    "movingblock": BlockType
    /**
      */
    "mycelium": BlockType
    /**
      */
    "netherBrick": BlockType
    /**
      */
    "netherBrickFence": BlockType
    /**
      */
    "netherBrickStairs": BlockType
    /**
      */
    "netherGoldOre": BlockType
    /**
      */
    "netheriteBlock": BlockType
    /**
      */
    "netherrack": BlockType
    /**
      */
    "netherreactor": BlockType
    /**
      */
    "netherSprouts": BlockType
    /**
      */
    "netherWart": BlockType
    /**
      */
    "netherWartBlock": BlockType
    /**
      */
    "normalStoneStairs": BlockType
    /**
      */
    "noteblock": BlockType
    /**
      */
    "oakStairs": BlockType
    /**
      */
    "observer": BlockType
    /**
      */
    "obsidian": BlockType
    /**
      */
    "orangeCandle": BlockType
    /**
      */
    "orangeCandleCake": BlockType
    /**
      */
    "orangeGlazedTerracotta": BlockType
    /**
      */
    "oxidizedCopper": BlockType
    /**
      */
    "oxidizedCutCopper": BlockType
    /**
      */
    "oxidizedCutCopperSlab": BlockType
    /**
      */
    "oxidizedCutCopperStairs": BlockType
    /**
      */
    "oxidizedDoubleCutCopperSlab": BlockType
    /**
      */
    "packedIce": BlockType
    /**
      */
    "pinkCandle": BlockType
    /**
      */
    "pinkCandleCake": BlockType
    /**
      */
    "pinkGlazedTerracotta": BlockType
    /**
      */
    "piston": BlockType
    /**
      */
    "pistonarmcollision": BlockType
    /**
      */
    "planks": BlockType
    /**
      */
    "podzol": BlockType
    /**
      */
    "pointedDripstone": BlockType
    /**
      */
    "polishedAndesiteStairs": BlockType
    /**
      */
    "polishedBasalt": BlockType
    /**
      */
    "polishedBlackstone": BlockType
    /**
      */
    "polishedBlackstoneBrickDoubleSlab": BlockType
    /**
      */
    "polishedBlackstoneBricks": BlockType
    /**
      */
    "polishedBlackstoneBrickSlab": BlockType
    /**
      */
    "polishedBlackstoneBrickStairs": BlockType
    /**
      */
    "polishedBlackstoneBrickWall": BlockType
    /**
      */
    "polishedBlackstoneButton": BlockType
    /**
      */
    "polishedBlackstoneDoubleSlab": BlockType
    /**
      */
    "polishedBlackstonePressurePlate": BlockType
    /**
      */
    "polishedBlackstoneSlab": BlockType
    /**
      */
    "polishedBlackstoneStairs": BlockType
    /**
      */
    "polishedBlackstoneWall": BlockType
    /**
      */
    "polishedDeepslate": BlockType
    /**
      */
    "polishedDeepslateDoubleSlab": BlockType
    /**
      */
    "polishedDeepslateSlab": BlockType
    /**
      */
    "polishedDeepslateStairs": BlockType
    /**
      */
    "polishedDeepslateWall": BlockType
    /**
      */
    "polishedDioriteStairs": BlockType
    /**
      */
    "polishedGraniteStairs": BlockType
    /**
      */
    "portal": BlockType
    /**
      */
    "potatoes": BlockType
    /**
      */
    "powderSnow": BlockType
    /**
      */
    "poweredComparator": BlockType
    /**
      */
    "poweredRepeater": BlockType
    /**
      */
    "prismarine": BlockType
    /**
      */
    "prismarineBricksStairs": BlockType
    /**
      */
    "prismarineStairs": BlockType
    /**
      */
    "pumpkin": BlockType
    /**
      */
    "pumpkinStem": BlockType
    /**
      */
    "purpleCandle": BlockType
    /**
      */
    "purpleCandleCake": BlockType
    /**
      */
    "purpleGlazedTerracotta": BlockType
    /**
      */
    "purpurBlock": BlockType
    /**
      */
    "purpurStairs": BlockType
    /**
      */
    "quartzBlock": BlockType
    /**
      */
    "quartzBricks": BlockType
    /**
      */
    "quartzOre": BlockType
    /**
      */
    "quartzStairs": BlockType
    /**
      */
    "rail": BlockType
    /**
      */
    "rawCopperBlock": BlockType
    /**
      */
    "rawGoldBlock": BlockType
    /**
      */
    "rawIronBlock": BlockType
    /**
      */
    "redCandle": BlockType
    /**
      */
    "redCandleCake": BlockType
    /**
      */
    "redFlower": BlockType
    /**
      */
    "redGlazedTerracotta": BlockType
    /**
      */
    "redMushroom": BlockType
    /**
      */
    "redMushroomBlock": BlockType
    /**
      */
    "redNetherBrick": BlockType
    /**
      */
    "redNetherBrickStairs": BlockType
    /**
      */
    "redSandstone": BlockType
    /**
      */
    "redSandstoneStairs": BlockType
    /**
      */
    "redstoneBlock": BlockType
    /**
      */
    "redstoneLamp": BlockType
    /**
      */
    "redstoneOre": BlockType
    /**
      */
    "redstoneTorch": BlockType
    /**
      */
    "redstoneWire": BlockType
    /**
      */
    "reeds": BlockType
    /**
      */
    "repeatingCommandBlock": BlockType
    /**
      */
    "reserved6": BlockType
    /**
      */
    "respawnAnchor": BlockType
    /**
      */
    "sand": BlockType
    /**
      */
    "sandstone": BlockType
    /**
      */
    "sandstoneStairs": BlockType
    /**
      */
    "sapling": BlockType
    /**
      */
    "scaffolding": BlockType
    /**
      */
    "sculkSensor": BlockType
    /**
      */
    "seagrass": BlockType
    /**
      */
    "sealantern": BlockType
    /**
      */
    "seaPickle": BlockType
    /**
      */
    "shroomlight": BlockType
    /**
      */
    "shulkerBox": BlockType
    /**
      */
    "silverGlazedTerracotta": BlockType
    /**
      */
    "skull": BlockType
    /**
      */
    "slime": BlockType
    /**
      */
    "smallAmethystBud": BlockType
    /**
      */
    "smallDripleafBlock": BlockType
    /**
      */
    "smithingTable": BlockType
    /**
      */
    "smoker": BlockType
    /**
      */
    "smoothBasalt": BlockType
    /**
      */
    "smoothQuartzStairs": BlockType
    /**
      */
    "smoothRedSandstoneStairs": BlockType
    /**
      */
    "smoothSandstoneStairs": BlockType
    /**
      */
    "smoothStone": BlockType
    /**
      */
    "snow": BlockType
    /**
      */
    "snowLayer": BlockType
    /**
      */
    "soulCampfire": BlockType
    /**
      */
    "soulFire": BlockType
    /**
      */
    "soulLantern": BlockType
    /**
      */
    "soulSand": BlockType
    /**
      */
    "soulSoil": BlockType
    /**
      */
    "soulTorch": BlockType
    /**
      */
    "sponge": BlockType
    /**
      */
    "sporeBlossom": BlockType
    /**
      */
    "spruceButton": BlockType
    /**
      */
    "spruceDoor": BlockType
    /**
      */
    "spruceFenceGate": BlockType
    /**
      */
    "sprucePressurePlate": BlockType
    /**
      */
    "spruceStairs": BlockType
    /**
      */
    "spruceStandingSign": BlockType
    /**
      */
    "spruceTrapdoor": BlockType
    /**
      */
    "spruceWallSign": BlockType
    /**
      */
    "stainedGlass": BlockType
    /**
      */
    "stainedGlassPane": BlockType
    /**
      */
    "stainedHardenedClay": BlockType
    /**
      */
    "standingBanner": BlockType
    /**
      */
    "standingSign": BlockType
    /**
      */
    "stickyPiston": BlockType
    /**
      */
    "stickypistonarmcollision": BlockType
    /**
      */
    "stone": BlockType
    /**
      */
    "stonebrick": BlockType
    /**
      */
    "stoneBrickStairs": BlockType
    /**
      */
    "stoneButton": BlockType
    /**
      */
    "stonecutter": BlockType
    /**
      */
    "stonecutterBlock": BlockType
    /**
      */
    "stonePressurePlate": BlockType
    /**
      */
    "stoneSlab": BlockType
    /**
      */
    "stoneSlab2": BlockType
    /**
      */
    "stoneSlab3": BlockType
    /**
      */
    "stoneSlab4": BlockType
    /**
      */
    "stoneStairs": BlockType
    /**
      */
    "strippedAcaciaLog": BlockType
    /**
      */
    "strippedBirchLog": BlockType
    /**
      */
    "strippedCrimsonHyphae": BlockType
    /**
      */
    "strippedCrimsonStem": BlockType
    /**
      */
    "strippedDarkOakLog": BlockType
    /**
      */
    "strippedJungleLog": BlockType
    /**
      */
    "strippedOakLog": BlockType
    /**
      */
    "strippedSpruceLog": BlockType
    /**
      */
    "strippedWarpedHyphae": BlockType
    /**
      */
    "strippedWarpedStem": BlockType
    /**
      */
    "structureBlock": BlockType
    /**
      */
    "structureVoid": BlockType
    /**
      */
    "sweetBerryBush": BlockType
    /**
      */
    "tallgrass": BlockType
    /**
      */
    "target": BlockType
    /**
      */
    "tintedGlass": BlockType
    /**
      */
    "tnt": BlockType
    /**
      */
    "torch": BlockType
    /**
      */
    "trapdoor": BlockType
    /**
      */
    "trappedChest": BlockType
    /**
      */
    "tripwire": BlockType
    /**
      */
    "tripwireHook": BlockType
    /**
      */
    "tuff": BlockType
    /**
      */
    "turtleEgg": BlockType
    /**
      */
    "twistingVines": BlockType
    /**
      */
    "underwaterTorch": BlockType
    /**
      */
    "undyedShulkerBox": BlockType
    /**
      */
    "unknown": BlockType
    /**
      */
    "unlitRedstoneTorch": BlockType
    /**
      */
    "unpoweredComparator": BlockType
    /**
      */
    "unpoweredRepeater": BlockType
    /**
      */
    "vine": BlockType
    /**
      */
    "wallBanner": BlockType
    /**
      */
    "wallSign": BlockType
    /**
      */
    "warpedButton": BlockType
    /**
      */
    "warpedDoor": BlockType
    /**
      */
    "warpedDoubleSlab": BlockType
    /**
      */
    "warpedFence": BlockType
    /**
      */
    "warpedFenceGate": BlockType
    /**
      */
    "warpedFungus": BlockType
    /**
      */
    "warpedHyphae": BlockType
    /**
      */
    "warpedNylium": BlockType
    /**
      */
    "warpedPlanks": BlockType
    /**
      */
    "warpedPressurePlate": BlockType
    /**
      */
    "warpedRoots": BlockType
    /**
      */
    "warpedSlab": BlockType
    /**
      */
    "warpedStairs": BlockType
    /**
      */
    "warpedStandingSign": BlockType
    /**
      */
    "warpedStem": BlockType
    /**
      */
    "warpedTrapdoor": BlockType
    /**
      */
    "warpedWallSign": BlockType
    /**
      */
    "warpedWartBlock": BlockType
    /**
      */
    "water": BlockType
    /**
      */
    "waterlily": BlockType
    /**
      */
    "waxedCopper": BlockType
    /**
      */
    "waxedCutCopper": BlockType
    /**
      */
    "waxedCutCopperSlab": BlockType
    /**
      */
    "waxedCutCopperStairs": BlockType
    /**
      */
    "waxedDoubleCutCopperSlab": BlockType
    /**
      */
    "waxedExposedCopper": BlockType
    /**
      */
    "waxedExposedCutCopper": BlockType
    /**
      */
    "waxedExposedCutCopperSlab": BlockType
    /**
      */
    "waxedExposedCutCopperStairs": BlockType
    /**
      */
    "waxedExposedDoubleCutCopperSlab": BlockType
    /**
      */
    "waxedOxidizedCopper": BlockType
    /**
      */
    "waxedOxidizedCutCopper": BlockType
    /**
      */
    "waxedOxidizedCutCopperSlab": BlockType
    /**
      */
    "waxedOxidizedCutCopperStairs": BlockType
    /**
      */
    "waxedOxidizedDoubleCutCopperSlab": BlockType
    /**
      */
    "waxedWeatheredCopper": BlockType
    /**
      */
    "waxedWeatheredCutCopper": BlockType
    /**
      */
    "waxedWeatheredCutCopperSlab": BlockType
    /**
      */
    "waxedWeatheredCutCopperStairs": BlockType
    /**
      */
    "waxedWeatheredDoubleCutCopperSlab": BlockType
    /**
      */
    "weatheredCopper": BlockType
    /**
      */
    "weatheredCutCopper": BlockType
    /**
      */
    "weatheredCutCopperSlab": BlockType
    /**
      */
    "weatheredCutCopperStairs": BlockType
    /**
      */
    "weatheredDoubleCutCopperSlab": BlockType
    /**
      */
    "web": BlockType
    /**
      */
    "weepingVines": BlockType
    /**
      */
    "wheat": BlockType
    /**
      */
    "whiteCandle": BlockType
    /**
      */
    "whiteCandleCake": BlockType
    /**
      */
    "whiteGlazedTerracotta": BlockType
    /**
      */
    "witherRose": BlockType
    /**
      */
    "wood": BlockType
    /**
      */
    "woodenButton": BlockType
    /**
      */
    "woodenDoor": BlockType
    /**
      */
    "woodenPressurePlate": BlockType
    /**
      */
    "woodenSlab": BlockType
    /**
      */
    "wool": BlockType
    /**
      */
    "yellowCandle": BlockType
    /**
      */
    "yellowCandleCake": BlockType
    /**
      */
    "yellowFlower": BlockType
    /**
      */
    "yellowGlazedTerracotta": BlockType
    
  /**
    *
    * @param typeName 
    *
    *
    */
  get(typeName: string): BlockType;
  /**
    *
    *
    *
    */
  getAllBlockTypes(): Array<BlockType>;
  }
  
  /** 
    * Contains the state of a boolean-based property for a {@link Minecraft.BlockPermutation}.
    * @public
    */
  export class BoolBlockProperty {
    /**
      */
    "name": string
    /**
      */
    "validValues": Array<boolean>
    /**
      * The current value of this property.
      */
    "value": boolean
    
  }
  
  /** 
    * Defines what blocks this entity can breathe in and gives them the ability to suffocate.
    * @public
    */
  export class Breathable {
    /**
      * List of blocks this entity can breathe in, in addition to the separate properties for classes of blocks.
      * @throws This property can throw when used.
      */
    "breatheBlocks": Array<BlockPermutation>
    /**
      * If true, this entity can breathe in air.
      * @throws This property can throw when used.
      */
    "breathesAir": boolean
    /**
      * If true, this entity can breathe in lava.
      * @throws This property can throw when used.
      */
    "breathesLava": boolean
    /**
      * If true, this entity can breathe in solid blocks.
      * @throws This property can throw when used.
      */
    "breathesSolids": boolean
    /**
      * If true, this entity can breathe in water.
      * @throws This property can throw when used.
      */
    "breathesWater": boolean
    /**
      * If true, this entity will have visible bubbles while in water.
      * @throws This property can throw when used.
      */
    "generatesBubbles": boolean
    /**
      * Identifier of this component. Should always be minecraft:breathable.
      */
    "id": string
    /**
      * Time in seconds to recover breath to maximum.
      * @throws This property can throw when used.
      */
    "inhaleTime": number
    /**
      * List of blocks this entity can't breathe in.
      * @throws This property can throw when used.
      */
    "nonBreatheBlocks": Array<BlockPermutation>
    /**
      * Time in seconds between suffocation damage.
      * @throws This property can throw when used.
      */
    "suffocateTime": number
    /**
      * Time in seconds the entity can hold its breath.
      * @throws This property can throw when used.
      */
    "totalSupply": number
    
  /**
    * @remarks
    * Sets the current air supply of the entity.
    *
    * @param value New air supply for the entity.
    *
    *
    * @throws This function can throw errors.
    */
  setAirSupply(value: number): void;
  }
  
  /** 
    * @public
    */
  export class ChangeWeatherEventSignal {
    
  /**
    *
    * @param callback 
    *
    *
    */
  subscribe(callback: (arg: WeatherChangedEvent) => void): (arg: WeatherChangedEvent) => void;
  /**
    *
    * @param callback 
    *
    *
    * @throws This function can throw errors.
    */
  unsubscribe(callback: (arg: WeatherChangedEvent) => void): void;
  }
  
  /** 
    * An event that fires as players enter chat messages.
    * @public
    */
  export class ChatEvent {
    /**
      * Message that is being broadcast. In a beforeChat event handler, _message_ can be updated with edits before the message is displayed to players.
      */
    "message": string
    /**
      * Player that sent the chat message.
      */
    "sender": Player
    /**
      * If true, this message is directly targeted to one or more players (i.e., is not broadcast.)
      */
    "sendToTargets": boolean
    /**
      * List of players that will receive this message.
      */
    "targets": Array<Player>
    
  }
  
  /** 
    * Manages callbacks that are connected to chat messages being sent.
    * @public
    */
  export class ChatEventSignal {
    
  /**
    * @remarks
    * Adds a callback that will be called when new chat messages are sent.
    *
    * @param callback 
    *
    *
    * @example custom_command.js
    * ```typescript
    *    // Kills the chatting player if they type "!killme"
    *    const chatCallback = World.events.beforeChat.subscribe((eventData) => {
    *      if (eventData.message.includes("cancel")) {
    *        // Cancel event if the message contains "cancel"
    *        eventData.canceled = true;
    *      } else {
    *        // Modify chat message being sent
    *        eventData.message = `Modified '${eventData.message}'`;
    *      }
    *    });
    *    
    * ```
    */
  subscribe(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void;
  /**
    * @remarks
    * Removes a callback from being called when new chat messages are sent.
    *
    * @param callback 
    *
    *
    * @throws This function can throw errors.
    */
  unsubscribe(callback: (arg: ChatEvent) => void): void;
  }
  
  /** 
    * Defines the entity's color. Only works on vanilla entities that have predefined color values (sheep, llama, shulker).
    * @public
    */
  export class Color {
    /**
      * Identifier of this component. Should always be minecraft:color.
      */
    "id": string
    /**
      * The palette color value of the entity.
      */
    "value": number
    
  }
  
  /** 
    * Contains a method that lets you run console commands within Minecraft.
    * @public
    */
  export class Commands {
    
  /**
    * @remarks
    * Runs a particular command from the context of the server. Command strings should not start with slash.
    *
    * @param commandString 
    *
    * @returns For commands that return data, returns a structure with command response values.
    *
    * @throws This function can throw errors.
    * @example commands.js
    * ```typescript
    *    Commands.run("say You got a new high score!");
    *    Commands.run("scoreboard players set @p score 10");
    *    
    * ```
    */
  static run(commandString: string): any;
  }
  
  /** 
    * Represents a container that can hold sets of items. Used with entities such as Players, Chest Minecarts, Llamas, and more.
    * @public
    */
  export class Container {
    /**
      * Contains a count of the slots in the container that are empty.
      * @throws This property can throw when used.
      */
    "emptySlotsCount": number
    /**
      * Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.
      * @throws This property can throw when used.
      */
    "size": number
    
  /**
    * @remarks
    * Adds an item to the specified container. Item will be placed in the first available empty slot. (use .setItem if you wish to set items in a particular slot.)
    *
    * @param itemStack The stack of items to add.
    *
    *
    * @throws This function can throw errors.
    */
  addItem(itemStack: ItemStack): void;
  /**
    * @remarks
    * Gets the item stack for the set of items at the specified slot. If the slot is empty, returns undefined. This method does not change or clear the contents of the specified slot.
    *
    * @param slot Zero-based index of the slot to retrieve items from.
    *
    *
    * @throws This function can throw errors.
    * @example getItem.js
    * ```typescript
    *    const itemStack = rightChestContainer.getItem(0);
    *    test.assert(itemStack.id === "apple", "Expected apple");
    *    test.assert(itemStack.amount === 10, "Expected 10 apples");
    *    
    * ```
    */
  getItem(slot: number): ItemStack;
  /**
    * @remarks
    * Sets an item stack within a particular slot.
    *
    * @param slot Zero-based index of the slot to set an item at.
    * @param itemStack Stack of items to place within the specified slot.
    *
    *
    * @throws This function can throw errors.
    */
  setItem(slot: number, itemStack: ItemStack): void;
  /**
    * @remarks
    * Swaps items between two different slots within containers.
    *
    * @param slot Zero-based index of the slot to swap from this container.
    * @param otherSlot Zero-based index of the slot to swap with.
    * @param otherContainer Target container to swap with. Note this can be the same container as this source.
    *
    *
    * @throws This function can throw errors.
    * @example swapItems.js
    * ```typescript
    *    rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
    *    
    * ```
    */
  swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
  /**
    * @remarks
    * Moves an item from one slot to another, potentially across containers.
    *
    * @param fromSlot 
    * @param toSlot Zero-based index of the slot to move to.
    * @param toContainer Target container to transfer to. Note this can be the same container as the source.
    *
    *
    * @throws This function can throw errors.
    * @example transferItem.js
    * ```typescript
    *    rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
    *    
    * ```
    */
  transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
  }
  
  /** 
    * A class that represents a particular dimension (e.g., The End) within a world.
    * @public
    */
  export class Dimension {
    
  /**
    * @remarks
    * Creates an explosion at the specified location.
    *
    * @param location The location of the explosion.
    * @param radius Radius, in blocks, of the explosion to create.
    * @param explosionOptions Additional configurable options for the explosion.
    *
    *
    * @throws This function can throw errors.
    */
  createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void;
  /**
    * @remarks
    * Returns a block instance at the given location. This method was introduced as of version 1.17.10.21.
    *
    * @param location The location at which to return a block.
    *
    * @returns Block at the specified location.
    *
    */
  getBlock(location: BlockLocation): Block;
  /**
    *
    * @param location 
    *
    *
    */
  getEntitiesAtBlockLocation(location: BlockLocation): Array<Entity>;
  /**
    * @remarks
    * Tests whether a particular location contains an Air (empty) block.
    *
    * @param location The location at which to check for emptiness
    *
    * @returns True if the block at the location is air (empty)
    *
    */
  isEmpty(location: BlockLocation): boolean;
  /**
    * @remarks
    * Creates a new entity (e.g., a mob) at the specified location. This method was introduced as of version 1.17.10.21.
    *
    * @param identifier Identifier of the type of entity to spawn. If no namespace is specified, 'minecraft:' is assumed.
    * @param location The location at which to create the entity.
    *
    * @returns Newly created entity at the specified location.
    *
    * @throws This function can throw errors.
    */
  spawnEntity(identifier: string, location: BlockLocation): Entity;
  }
  
  /** 
    * @public
    */
  export class Direction {
    /**
      */
    "down": number
    /**
      */
    "east": number
    /**
      */
    "north": number
    /**
      */
    "south": number
    /**
      */
    "up": number
    /**
      */
    "west": number
    
  }
  
  /** 
    * Represents an effect - like poison - that has been added to an Entity.
    * @public
    */
  export class Effect {
    /**
      * Gets an amplifier that may have been applied to this effect. Sample values range typically from 0 to 4. Example: The effect 'Jump Boost II' will have an amplifier value of 1.
      */
    "amplifier": number
    /**
      * Gets the player-friendly name of this effect.
      */
    "displayName": string
    /**
      * Gets the entire specified duration, in seconds, of this effect.
      */
    "duration": number
    
  }
  
  /** 
    * @public
    */
  export class Effects {
    /**
      */
    "absorption": EffectType
    /**
      */
    "badOmen": EffectType
    /**
      */
    "blindness": EffectType
    /**
      */
    "conduitPower": EffectType
    /**
      */
    "empty": EffectType
    /**
      */
    "fatalPoison": EffectType
    /**
      */
    "fireResistance": EffectType
    /**
      */
    "haste": EffectType
    /**
      */
    "healthBoost": EffectType
    /**
      */
    "hunger": EffectType
    /**
      */
    "instantDamage": EffectType
    /**
      */
    "instantHealth": EffectType
    /**
      */
    "invisibility": EffectType
    /**
      */
    "jumpBoost": EffectType
    /**
      */
    "levitation": EffectType
    /**
      */
    "miningFatigue": EffectType
    /**
      */
    "nausea": EffectType
    /**
      */
    "nightVision": EffectType
    /**
      */
    "poison": EffectType
    /**
      */
    "regeneration": EffectType
    /**
      */
    "resistance": EffectType
    /**
      */
    "saturation": EffectType
    /**
      */
    "slowFalling": EffectType
    /**
      */
    "slowness": EffectType
    /**
      */
    "speed": EffectType
    /**
      */
    "strength": EffectType
    /**
      */
    "villageHero": EffectType
    /**
      */
    "waterBreathing": EffectType
    /**
      */
    "weakness": EffectType
    /**
      */
    "wither": EffectType
    
  }
  
  /** 
    * Represents a type of effect - like poison - that can be applied to an entity.
    * @public
    */
  export class EffectType {
    
  /**
    * @remarks
    * Identifier name of this effect type.
    *
    *
    * @returns Identifier of the effect type.
    *
    */
  getName(): string;
  }
  
  /** 
    * Manages callbacks associated with simple events, like Tick.
    * @public
    */
  export class EmptySignal {
    
  /**
    * @remarks
    * Adds a callback that will be called for basic events that take no arguments, like Tick.
    *
    * @param callback 
    *
    *
    */
  subscribe(callback: () => void): () => void;
  /**
    * @remarks
    * Removes a callback from being called for basic events.
    *
    * @param callback 
    *
    *
    * @throws This function can throw errors.
    */
  unsubscribe(callback: () => void): void;
  }
  
  /** 
    * Represents the state of an entity (a mob, the player, or other moving objects like Minecarts) in the world.
    * @public
    */
  export class Entity {
    /**
      * @throws This property can throw when used.
      */
    "id": string
    /**
      */
    "isSneaking": boolean
    /**
      * @throws This property can throw when used.
      */
    "location": Location
    /**
      */
    "nameTag": string
    /**
      * @throws This property can throw when used.
      */
    "velocity": Location
    
  /**
    * @remarks
    * Adds an effect, like poison, to the entity.
    *
    * @param effectType Type of effect to add to the entity.
    * @param duration Amount of time, in seconds, for the effect to apply.
    * @param amplifier Optional amplification of the effect to apply.
    *
    *
    * @throws This function can throw errors.
    * @example addEffect.js
    * ```typescript
    *    const villagerId = "minecraft:villager_v2<minecraft:ageable_grow_up>";
    *    const villagerLoc = new BlockLocation(1, 2, 1);
    *    const villager = test.spawn(villagerId, villagerLoc);
    *    const duration = 20;
    *    
    *    villager.addEffect(Effects.poison, duration, 1);
    *    
    * ```
    */
  addEffect(effectType: EffectType, duration: number, amplifier: number): void;
  /**
    * @remarks
    * Gets a component (that represents additional capabilities) for an entity.
    *
    * @param componentId The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed. If the component is not present on the entity, undefined is returned.
    *
    *
    */
  getComponent(componentId: string): any;
  /**
    * @remarks
    * Returns all components that are both present on this entity and supported by the API.
    *
    *
    *
    */
  getComponents(): Array<any>;
  /**
    * @remarks
    * Returns the effect for the specified EffectType on the entity, or undefined if the effect is not present.
    *
    * @param effectType 
    *
    * @returns Effect object for the specified effect, or undefined if the effect is not present.
    *
    * @throws This function can throw errors.
    */
  getEffect(effectType: EffectType): Effect;
  /**
    * @remarks
    * Returns true if the specified component is present on this entity.
    *
    * @param componentId The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed.
    *
    *
    */
  hasComponent(componentId: string): boolean;
  /**
    * @remarks
    * Kills this entity. The entity will drop loot as normal.
    *
    *
    *
    * @throws This function can throw errors.
    */
  kill(): void;
  /**
    * @remarks
    * Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event.
    *
    * @param eventName Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed.
    *
    *
    * @throws This function can throw errors.
    */
  triggerEvent(eventName: string): void;
  }
  
  /** 
    * As part of the Ageable component, represents a set of items that can be fed to an entity and the rate at which that causes them to grow.
    * @public
    */
  export class EntityDefinitionFeedItem {
    /**
      * The amount by which an entity's age will increase when fed this item. Values usually range between 0 and 1.
      */
    "growth": number
    /**
      * Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.
      */
    "item": string
    
  }
  
  /** 
    * @public
    */
  export class EntityEvent {
    /**
      */
    "entity": Entity
    
  }
  
  /** 
    * @public
    */
  export class EntityEventSignal {
    
  /**
    *
    * @param callback 
    *
    *
    */
  subscribe(callback: (arg: EntityEvent) => void): (arg: EntityEvent) => void;
  /**
    *
    * @param callback 
    *
    *
    * @throws This function can throw errors.
    */
  unsubscribe(callback: (arg: EntityEvent) => void): void;
  }
  
  /** 
    * Contains a set of events that are available across the scope of the World.
    * @public
    */
  export class Events {
    /**
      * This event fires when a piston expands or retracts.
      */
    "activatePiston": ActivatePistonEventSignal
    /**
      * This event fires when an effect, like poisoning, is added to an entity.
      */
    "addEffect": AddEffectEventSignal
    /**
      * Fires before a piston is activated.
      */
    "beforeActivatePiston": BeforeActivatePistonEventSignal
    /**
      * This event fires before a chat message is broadcast or delivered. The event can be canceled, and the message can also be updated.
      */
    "beforeChat": BeforeChatEventSignal
    /**
      */
    "beforeExplosion": BeforeExplosionEventSignal
    /**
      * This event will be triggered when the weather changes within Minecraft.
      */
    "changeWeather": ChangeWeatherEventSignal
    /**
      * This event is triggered after a chat message has been broadcast or sent to players.
      */
    "chat": ChatEventSignal
    /**
      * This event fires when a new entity is created.
      */
    "createEntity": EntityEventSignal
    /**
      */
    "explodeBlock": ExplodeBlockSignal
    /**
      */
    "explosion": ExplosionEventSignal
    /**
      * This event fires every tick - which is 20 times per second.
      */
    "tick": EmptySignal
    
  }
  
  /** 
    * @public
    */
  export class ExplodeBlockEvent {
    /**
      */
    "destroyedBlock": Block
    /**
      */
    "source": Entity
    
  }
  
  /** 
    * @public
    */
  export class ExplodeBlockSignal {
    
  /**
    *
    * @param callback 
    *
    *
    */
  subscribe(callback: (arg: ExplodeBlockEvent) => void): (arg: ExplodeBlockEvent) => void;
  /**
    *
    * @param callback 
    *
    *
    * @throws This function can throw errors.
    */
  unsubscribe(callback: (arg: ExplodeBlockEvent) => void): void;
  }
  
  /** 
    * @public
    */
  export class ExplosionEvent {
    /**
      */
    "dimension": Dimension
    /**
      */
    "impactedBlocks": Array<BlockLocation>
    /**
      */
    "source": Entity
    
  }
  
  /** 
    * @public
    */
  export class ExplosionEventSignal {
    
  /**
    *
    * @param callback 
    *
    *
    */
  subscribe(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void;
  /**
    *
    * @param callback 
    *
    *
    * @throws This function can throw errors.
    */
  unsubscribe(callback: (arg: ExplosionEvent) => void): void;
  }
  
  /** 
    * Additional configuration options for the {@link Minecraft.Dimension.createExplosion} method.
    * @public
    */
  export class ExplosionOptions {
    /**
      * Whether parts of the explosion also impact underwater.
      */
    "allowUnderwater": boolean
    /**
      * Whether the explosion will break blocks within the blast radius.
      */
    "breaksBlocks": boolean
    /**
      * If true, the explosion is accompanied by fires within or near the blast radius.
      */
    "causesFire": boolean
    /**
      * Optional source of the explosion.
      */
    "source": Entity
    
  /**
    *
    *
    *
    */
  constructor();
  }
  
  /** 
    * As part of the Healable component, represents a specific item that can be fed to an entity to cause health effects.
    * @public
    */
  export class FeedItem {
    /**
      * As part of the Healable component, an optional collection of side effects that can occur from being fed an item.
      */
    "effects": Array<FeedItemEffect>
    /**
      * The amount of health this entity gains when fed this item. This number is an integer starting at 0. Sample values can go as high as 40.
      */
    "healAmount": number
    /**
      * Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.
      */
    "item": string
    
  }
  
  /** 
    * @public
    */
  export class FeedItemEffect {
    /**
      * Gets an amplifier that may have been applied to this effect. Valid values are integers starting at 0 and up - but usually ranging between 0 and 4.
      */
    "amplifier": number
    /**
      * Chance that this effect is applied as a result of the entity being fed this item. Valid values range between 0 and 1.
      */
    "chance": number
    /**
      * Gets the duration, in seconds, of this effect.
      */
    "duration": number
    /**
      * Gets the identifier of the effect to apply. Example values include 'fire_resistance' or 'regeneration'.
      */
    "name": string
    
  }
  
  /** 
    * Represents a set of filters for when an event should occur.
    * @public
    */
  export class FilterGroup {
    
  }
  
  /** 
    * Represents the flying speed of an entity.
    * @public
    */
  export class FlyingSpeed {
    /**
      * Identifier of this component. Should always be minecraft:flying_speed.
      */
    "id": string
    /**
      * Speed while flying value of the entity.
      */
    "value": number
    
  }
  
  /** 
    * Defines the interactions with this entity for healing it.
    * @public
    */
  export class Healable {
    /**
      * A set of filters for when these Healable items would apply.
      * @throws This property can throw when used.
      */
    "filters": FilterGroup
    /**
      * Determines if an item can be used regardless of the entity being at full health.
      * @throws This property can throw when used.
      */
    "forceUse": boolean
    /**
      * Identifier of this component. Should always be minecraft:healable.
      */
    "id": string
    /**
      * A set of items that can specifically heal this entity.
      * @throws This property can throw when used.
      */
    "items": Array<FeedItem>
    
  }
  
  /** 
    * Defines the health properties of an entity.
    * @public
    */
  export class Health {
    /**
      * Read-only. Returns the current value of health for the entity.
      * @throws This property can throw when used.
      */
    "current": number
    /**
      * Identifier of this component. Should always be minecraft:health.
      */
    "id": string
    /**
      * Value for health as defined through entity components.
      * @throws This property can throw when used.
      */
    "value": number
    
  /**
    * @remarks
    * Resets the current health value of the entity to its default value.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToDefaultValue(): void;
  /**
    * @remarks
    * Resets the current health of the entity to its maximum value.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToMaxValue(): void;
  /**
    * @remarks
    * Resets the current health to the minimum value.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToMinValue(): void;
  /**
    * @remarks
    * Sets the current health of the entity.
    *
    *
    *
    * @throws This function can throw errors.
    */
  setCurrent(): void;
  }
  
  /** 
    * Contains the state of an integer-based property for a {@link Minecraft.BlockPermutation}.
    * @public
    */
  export class IntBlockProperty {
    /**
      * The name of this property.
      */
    "name": string
    /**
      * A list of valid values for this particular property.
      */
    "validValues": Array<number>
    /**
      * The current value of this property.
      */
    "value": number
    
  }
  
  /** 
    * Defines this entity's inventory properties.
    * @public
    */
  export class Inventory {
    /**
      * Number of slots that this entity can gain per extra strength.
      * @throws This property can throw when used.
      */
    "additionalSlotsPerStrength": number
    /**
      * If true, the contents of this inventory can be removed by a hopper.
      * @throws This property can throw when used.
      */
    "canBeSiphonedFrom": boolean
    /**
      * Defines the interactions with this entity for healing it.
      * @throws This property can throw when used.
      */
    "container": InventoryComponentContainer
    /**
      * Type of container this entity has.
      * @throws This property can throw when used.
      */
    "containerType": string
    /**
      * Number of slots the container has.
      * @throws This property can throw when used.
      */
    "inventorySize": number
    /**
      * If true, the entity will not drop it's inventory on death.
      * @throws This property can throw when used.
      */
    "private": boolean
    /**
      * If true, the entity's inventory can only be accessed by its owner or itself.
      * @throws This property can throw when used.
      */
    "restrictToOwner": boolean
    
  }
  
  /** 
    * Represents a container that can hold stacks of items. Used for entities like Players, Chest Minecarts, Llamas, and more.
    * @public
    */
  export class InventoryComponentContainer {
    /**
      * The number of empty slots in the container.
      * @throws This property can throw when used.
      */
    "emptySlotsCount": number
    /**
      * Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.
      * @throws This property can throw when used.
      */
    "size": number
    
  /**
    * @remarks
    * Adds an item to the specified container. Items will be placed in the first available empty slot. (Use {@link Minecraft.InventoryComponentContainer.setItem} if you wish to set items in a particular slot.)
    *
    * @param itemStack The stack of items to add.
    *
    *
    * @throws This function can throw errors.
    */
  addItem(itemStack: ItemStack): void;
  /**
    * @remarks
    * Gets the item stack for the set of items at the specified slot. If the slot is empty, returns undefined. This method does not change or clear the contents of the specified slot.
    *
    * @param slot Zero-based index of the slot to retrieve items from.
    *
    *
    * @throws This function can throw errors.
    * @example getItem.js
    * ```typescript
    *    const itemStack = rightChestContainer.getItem(0);
    *    test.assert(itemStack.id === "apple", "Expected apple");
    *    test.assert(itemStack.amount === 10, "Expected 10 apples");
    *    
    * ```
    */
  getItem(slot: number): ItemStack;
  /**
    * @remarks
    * Sets an item stack within a particular slot.
    *
    * @param slot Zero-based index of the slot to set an item at.
    * @param itemStack Stack of items to place within the specified slot.
    *
    *
    * @throws This function can throw errors.
    */
  setItem(slot: number, itemStack: ItemStack): void;
  /**
    * @remarks
    * Swaps items between two different slots within containers.
    *
    * @param slot Zero-based index of the slot to swap from this container.
    * @param otherSlot Zero-based index of the slot to swap with.
    * @param otherContainer Target container to swap with. Note this can be the same container as this source.
    *
    *
    * @throws This function can throw errors.
    * @example swapItems.js
    * ```typescript
    *    rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
    *    
    * ```
    */
  swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean;
  /**
    * @remarks
    * Moves an item from one slot to another, potentially across containers.
    *
    * @param fromSlot 
    * @param toSlot Zero-based index of the slot to move to.
    * @param toContainer Target container to transfer to. Note this can be the same container as the source.
    *
    *
    * @throws This function can throw errors.
    * @example transferItem.js
    * ```typescript
    *    rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
    *    
    * ```
    */
  transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean;
  }
  
  /** 
    * @public
    */
  export class Items {
    /**
      */
    "acaciaBoat": ItemType
    /**
      */
    "acaciaButton": ItemType
    /**
      */
    "acaciaDoor": ItemType
    /**
      */
    "acaciaFenceGate": ItemType
    /**
      */
    "acaciaPressurePlate": ItemType
    /**
      */
    "acaciaSign": ItemType
    /**
      */
    "acaciaStairs": ItemType
    /**
      */
    "acaciaStandingSign": ItemType
    /**
      */
    "acaciaTrapdoor": ItemType
    /**
      */
    "acaciaWallSign": ItemType
    /**
      */
    "activatorRail": ItemType
    /**
      */
    "agentSpawnEgg": ItemType
    /**
      */
    "air": ItemType
    /**
      */
    "allow": ItemType
    /**
      */
    "amethystBlock": ItemType
    /**
      */
    "amethystCluster": ItemType
    /**
      */
    "amethystShard": ItemType
    /**
      */
    "ancientDebris": ItemType
    /**
      */
    "andesiteStairs": ItemType
    /**
      */
    "anvil": ItemType
    /**
      */
    "apple": ItemType
    /**
      */
    "armorStand": ItemType
    /**
      */
    "arrow": ItemType
    /**
      */
    "axolotlBucket": ItemType
    /**
      */
    "axolotlSpawnEgg": ItemType
    /**
      */
    "azalea": ItemType
    /**
      */
    "azaleaLeaves": ItemType
    /**
      */
    "azaleaLeavesFlowered": ItemType
    /**
      */
    "bakedPotato": ItemType
    /**
      */
    "balloon": ItemType
    /**
      */
    "bamboo": ItemType
    /**
      */
    "bambooSapling": ItemType
    /**
      */
    "banner": ItemType
    /**
      */
    "bannerPattern": ItemType
    /**
      */
    "barrel": ItemType
    /**
      */
    "barrier": ItemType
    /**
      */
    "basalt": ItemType
    /**
      */
    "batSpawnEgg": ItemType
    /**
      */
    "beacon": ItemType
    /**
      */
    "bed": ItemType
    /**
      */
    "bedrock": ItemType
    /**
      */
    "beef": ItemType
    /**
      */
    "beehive": ItemType
    /**
      */
    "beeNest": ItemType
    /**
      */
    "beeSpawnEgg": ItemType
    /**
      */
    "beetroot": ItemType
    /**
      */
    "beetrootSeeds": ItemType
    /**
      */
    "beetrootSoup": ItemType
    /**
      */
    "bell": ItemType
    /**
      */
    "bigDripleaf": ItemType
    /**
      */
    "birchBoat": ItemType
    /**
      */
    "birchButton": ItemType
    /**
      */
    "birchDoor": ItemType
    /**
      */
    "birchFenceGate": ItemType
    /**
      */
    "birchPressurePlate": ItemType
    /**
      */
    "birchSign": ItemType
    /**
      */
    "birchStairs": ItemType
    /**
      */
    "birchStandingSign": ItemType
    /**
      */
    "birchTrapdoor": ItemType
    /**
      */
    "birchWallSign": ItemType
    /**
      */
    "blackCandle": ItemType
    /**
      */
    "blackCandleCake": ItemType
    /**
      */
    "blackDye": ItemType
    /**
      */
    "blackGlazedTerracotta": ItemType
    /**
      */
    "blackstone": ItemType
    /**
      */
    "blackstoneDoubleSlab": ItemType
    /**
      */
    "blackstoneSlab": ItemType
    /**
      */
    "blackstoneStairs": ItemType
    /**
      */
    "blackstoneWall": ItemType
    /**
      */
    "blastFurnace": ItemType
    /**
      */
    "blazePowder": ItemType
    /**
      */
    "blazeRod": ItemType
    /**
      */
    "blazeSpawnEgg": ItemType
    /**
      */
    "bleach": ItemType
    /**
      */
    "blueCandle": ItemType
    /**
      */
    "blueCandleCake": ItemType
    /**
      */
    "blueDye": ItemType
    /**
      */
    "blueGlazedTerracotta": ItemType
    /**
      */
    "blueIce": ItemType
    /**
      */
    "boat": ItemType
    /**
      */
    "bone": ItemType
    /**
      */
    "boneBlock": ItemType
    /**
      */
    "boneMeal": ItemType
    /**
      */
    "book": ItemType
    /**
      */
    "bookshelf": ItemType
    /**
      */
    "borderBlock": ItemType
    /**
      */
    "bordureIndentedBannerPattern": ItemType
    /**
      */
    "bow": ItemType
    /**
      */
    "bowl": ItemType
    /**
      */
    "bread": ItemType
    /**
      */
    "brewingStand": ItemType
    /**
      */
    "brewingstandblock": ItemType
    /**
      */
    "brick": ItemType
    /**
      */
    "brickBlock": ItemType
    /**
      */
    "brickStairs": ItemType
    /**
      */
    "brownCandle": ItemType
    /**
      */
    "brownCandleCake": ItemType
    /**
      */
    "brownDye": ItemType
    /**
      */
    "brownGlazedTerracotta": ItemType
    /**
      */
    "brownMushroom": ItemType
    /**
      */
    "brownMushroomBlock": ItemType
    /**
      */
    "bubbleColumn": ItemType
    /**
      */
    "bucket": ItemType
    /**
      */
    "buddingAmethyst": ItemType
    /**
      */
    "cactus": ItemType
    /**
      */
    "cake": ItemType
    /**
      */
    "calcite": ItemType
    /**
      */
    "camera": ItemType
    /**
      */
    "campfire": ItemType
    /**
      */
    "candle": ItemType
    /**
      */
    "candleCake": ItemType
    /**
      */
    "carpet": ItemType
    /**
      */
    "carrot": ItemType
    /**
      */
    "carrotOnAStick": ItemType
    /**
      */
    "carrots": ItemType
    /**
      */
    "cartographyTable": ItemType
    /**
      */
    "carvedPumpkin": ItemType
    /**
      */
    "catSpawnEgg": ItemType
    /**
      */
    "cauldron": ItemType
    /**
      */
    "caveSpiderSpawnEgg": ItemType
    /**
      */
    "caveVines": ItemType
    /**
      */
    "caveVinesBodyWithBerries": ItemType
    /**
      */
    "caveVinesHeadWithBerries": ItemType
    /**
      */
    "chain": ItemType
    /**
      */
    "chainCommandBlock": ItemType
    /**
      */
    "chainmailBoots": ItemType
    /**
      */
    "chainmailChestplate": ItemType
    /**
      */
    "chainmailHelmet": ItemType
    /**
      */
    "chainmailLeggings": ItemType
    /**
      */
    "charcoal": ItemType
    /**
      */
    "chemicalHeat": ItemType
    /**
      */
    "chemistryTable": ItemType
    /**
      */
    "chest": ItemType
    /**
      */
    "chestMinecart": ItemType
    /**
      */
    "chicken": ItemType
    /**
      */
    "chickenSpawnEgg": ItemType
    /**
      */
    "chiseledDeepslate": ItemType
    /**
      */
    "chiseledNetherBricks": ItemType
    /**
      */
    "chiseledPolishedBlackstone": ItemType
    /**
      */
    "chorusFlower": ItemType
    /**
      */
    "chorusFruit": ItemType
    /**
      */
    "chorusPlant": ItemType
    /**
      */
    "clay": ItemType
    /**
      */
    "clayBall": ItemType
    /**
      */
    "clock": ItemType
    /**
      */
    "coal": ItemType
    /**
      */
    "coalBlock": ItemType
    /**
      */
    "coalOre": ItemType
    /**
      */
    "cobbledDeepslate": ItemType
    /**
      */
    "cobbledDeepslateDoubleSlab": ItemType
    /**
      */
    "cobbledDeepslateSlab": ItemType
    /**
      */
    "cobbledDeepslateStairs": ItemType
    /**
      */
    "cobbledDeepslateWall": ItemType
    /**
      */
    "cobblestone": ItemType
    /**
      */
    "cobblestoneWall": ItemType
    /**
      */
    "cocoa": ItemType
    /**
      */
    "cocoaBeans": ItemType
    /**
      */
    "cod": ItemType
    /**
      */
    "codBucket": ItemType
    /**
      */
    "codSpawnEgg": ItemType
    /**
      */
    "coloredTorchBp": ItemType
    /**
      */
    "coloredTorchRg": ItemType
    /**
      */
    "commandBlock": ItemType
    /**
      */
    "commandBlockMinecart": ItemType
    /**
      */
    "comparator": ItemType
    /**
      */
    "compass": ItemType
    /**
      */
    "composter": ItemType
    /**
      */
    "compound": ItemType
    /**
      */
    "concrete": ItemType
    /**
      */
    "concretePowder": ItemType
    /**
      */
    "conduit": ItemType
    /**
      */
    "cookedBeef": ItemType
    /**
      */
    "cookedChicken": ItemType
    /**
      */
    "cookedCod": ItemType
    /**
      */
    "cookedMutton": ItemType
    /**
      */
    "cookedPorkchop": ItemType
    /**
      */
    "cookedRabbit": ItemType
    /**
      */
    "cookedSalmon": ItemType
    /**
      */
    "cookie": ItemType
    /**
      */
    "copperBlock": ItemType
    /**
      */
    "copperIngot": ItemType
    /**
      */
    "copperOre": ItemType
    /**
      */
    "coral": ItemType
    /**
      */
    "coralBlock": ItemType
    /**
      */
    "coralFan": ItemType
    /**
      */
    "coralFanDead": ItemType
    /**
      */
    "coralFanHang": ItemType
    /**
      */
    "coralFanHang2": ItemType
    /**
      */
    "coralFanHang3": ItemType
    /**
      */
    "cowSpawnEgg": ItemType
    /**
      */
    "crackedDeepslateBricks": ItemType
    /**
      */
    "crackedDeepslateTiles": ItemType
    /**
      */
    "crackedNetherBricks": ItemType
    /**
      */
    "crackedPolishedBlackstoneBricks": ItemType
    /**
      */
    "craftingTable": ItemType
    /**
      */
    "creeperBannerPattern": ItemType
    /**
      */
    "creeperSpawnEgg": ItemType
    /**
      */
    "crimsonButton": ItemType
    /**
      */
    "crimsonDoor": ItemType
    /**
      */
    "crimsonDoubleSlab": ItemType
    /**
      */
    "crimsonFence": ItemType
    /**
      */
    "crimsonFenceGate": ItemType
    /**
      */
    "crimsonFungus": ItemType
    /**
      */
    "crimsonHyphae": ItemType
    /**
      */
    "crimsonNylium": ItemType
    /**
      */
    "crimsonPlanks": ItemType
    /**
      */
    "crimsonPressurePlate": ItemType
    /**
      */
    "crimsonRoots": ItemType
    /**
      */
    "crimsonSign": ItemType
    /**
      */
    "crimsonSlab": ItemType
    /**
      */
    "crimsonStairs": ItemType
    /**
      */
    "crimsonStandingSign": ItemType
    /**
      */
    "crimsonStem": ItemType
    /**
      */
    "crimsonTrapdoor": ItemType
    /**
      */
    "crimsonWallSign": ItemType
    /**
      */
    "crossbow": ItemType
    /**
      */
    "cryingObsidian": ItemType
    /**
      */
    "cutCopper": ItemType
    /**
      */
    "cutCopperSlab": ItemType
    /**
      */
    "cutCopperStairs": ItemType
    /**
      */
    "cyanCandle": ItemType
    /**
      */
    "cyanCandleCake": ItemType
    /**
      */
    "cyanDye": ItemType
    /**
      */
    "cyanGlazedTerracotta": ItemType
    /**
      */
    "darkOakBoat": ItemType
    /**
      */
    "darkOakButton": ItemType
    /**
      */
    "darkOakDoor": ItemType
    /**
      */
    "darkOakFenceGate": ItemType
    /**
      */
    "darkOakPressurePlate": ItemType
    /**
      */
    "darkOakSign": ItemType
    /**
      */
    "darkOakStairs": ItemType
    /**
      */
    "darkoakStandingSign": ItemType
    /**
      */
    "darkOakTrapdoor": ItemType
    /**
      */
    "darkoakWallSign": ItemType
    /**
      */
    "darkPrismarineStairs": ItemType
    /**
      */
    "daylightDetector": ItemType
    /**
      */
    "daylightDetectorInverted": ItemType
    /**
      */
    "deadbush": ItemType
    /**
      */
    "debugStick": ItemType
    /**
      */
    "deepslate": ItemType
    /**
      */
    "deepslateBrickDoubleSlab": ItemType
    /**
      */
    "deepslateBricks": ItemType
    /**
      */
    "deepslateBrickSlab": ItemType
    /**
      */
    "deepslateBrickStairs": ItemType
    /**
      */
    "deepslateBrickWall": ItemType
    /**
      */
    "deepslateCoalOre": ItemType
    /**
      */
    "deepslateCopperOre": ItemType
    /**
      */
    "deepslateDiamondOre": ItemType
    /**
      */
    "deepslateEmeraldOre": ItemType
    /**
      */
    "deepslateGoldOre": ItemType
    /**
      */
    "deepslateIronOre": ItemType
    /**
      */
    "deepslateLapisOre": ItemType
    /**
      */
    "deepslateRedstoneOre": ItemType
    /**
      */
    "deepslateTileDoubleSlab": ItemType
    /**
      */
    "deepslateTiles": ItemType
    /**
      */
    "deepslateTileSlab": ItemType
    /**
      */
    "deepslateTileStairs": ItemType
    /**
      */
    "deepslateTileWall": ItemType
    /**
      */
    "deny": ItemType
    /**
      */
    "detectorRail": ItemType
    /**
      */
    "diamond": ItemType
    /**
      */
    "diamondAxe": ItemType
    /**
      */
    "diamondBlock": ItemType
    /**
      */
    "diamondBoots": ItemType
    /**
      */
    "diamondChestplate": ItemType
    /**
      */
    "diamondHelmet": ItemType
    /**
      */
    "diamondHoe": ItemType
    /**
      */
    "diamondHorseArmor": ItemType
    /**
      */
    "diamondLeggings": ItemType
    /**
      */
    "diamondOre": ItemType
    /**
      */
    "diamondPickaxe": ItemType
    /**
      */
    "diamondShovel": ItemType
    /**
      */
    "diamondSword": ItemType
    /**
      */
    "dioriteStairs": ItemType
    /**
      */
    "dirt": ItemType
    /**
      */
    "dirtWithRoots": ItemType
    /**
      */
    "dispenser": ItemType
    /**
      */
    "dolphinSpawnEgg": ItemType
    /**
      */
    "donkeySpawnEgg": ItemType
    /**
      */
    "doubleCutCopperSlab": ItemType
    /**
      */
    "doublePlant": ItemType
    /**
      */
    "doubleStoneSlab": ItemType
    /**
      */
    "doubleStoneSlab2": ItemType
    /**
      */
    "doubleStoneSlab3": ItemType
    /**
      */
    "doubleStoneSlab4": ItemType
    /**
      */
    "doubleWoodenSlab": ItemType
    /**
      */
    "dragonBreath": ItemType
    /**
      */
    "dragonEgg": ItemType
    /**
      */
    "driedKelp": ItemType
    /**
      */
    "driedKelpBlock": ItemType
    /**
      */
    "dripstoneBlock": ItemType
    /**
      */
    "dropper": ItemType
    /**
      */
    "drownedSpawnEgg": ItemType
    /**
      */
    "dye": ItemType
    /**
      */
    "egg": ItemType
    /**
      */
    "elderGuardianSpawnEgg": ItemType
    /**
      */
    "element0": ItemType
    /**
      */
    "element1": ItemType
    /**
      */
    "element10": ItemType
    /**
      */
    "element100": ItemType
    /**
      */
    "element101": ItemType
    /**
      */
    "element102": ItemType
    /**
      */
    "element103": ItemType
    /**
      */
    "element104": ItemType
    /**
      */
    "element105": ItemType
    /**
      */
    "element106": ItemType
    /**
      */
    "element107": ItemType
    /**
      */
    "element108": ItemType
    /**
      */
    "element109": ItemType
    /**
      */
    "element11": ItemType
    /**
      */
    "element110": ItemType
    /**
      */
    "element111": ItemType
    /**
      */
    "element112": ItemType
    /**
      */
    "element113": ItemType
    /**
      */
    "element114": ItemType
    /**
      */
    "element115": ItemType
    /**
      */
    "element116": ItemType
    /**
      */
    "element117": ItemType
    /**
      */
    "element118": ItemType
    /**
      */
    "element12": ItemType
    /**
      */
    "element13": ItemType
    /**
      */
    "element14": ItemType
    /**
      */
    "element15": ItemType
    /**
      */
    "element16": ItemType
    /**
      */
    "element17": ItemType
    /**
      */
    "element18": ItemType
    /**
      */
    "element19": ItemType
    /**
      */
    "element2": ItemType
    /**
      */
    "element20": ItemType
    /**
      */
    "element21": ItemType
    /**
      */
    "element22": ItemType
    /**
      */
    "element23": ItemType
    /**
      */
    "element24": ItemType
    /**
      */
    "element25": ItemType
    /**
      */
    "element26": ItemType
    /**
      */
    "element27": ItemType
    /**
      */
    "element28": ItemType
    /**
      */
    "element29": ItemType
    /**
      */
    "element3": ItemType
    /**
      */
    "element30": ItemType
    /**
      */
    "element31": ItemType
    /**
      */
    "element32": ItemType
    /**
      */
    "element33": ItemType
    /**
      */
    "element34": ItemType
    /**
      */
    "element35": ItemType
    /**
      */
    "element36": ItemType
    /**
      */
    "element37": ItemType
    /**
      */
    "element38": ItemType
    /**
      */
    "element39": ItemType
    /**
      */
    "element4": ItemType
    /**
      */
    "element40": ItemType
    /**
      */
    "element41": ItemType
    /**
      */
    "element42": ItemType
    /**
      */
    "element43": ItemType
    /**
      */
    "element44": ItemType
    /**
      */
    "element45": ItemType
    /**
      */
    "element46": ItemType
    /**
      */
    "element47": ItemType
    /**
      */
    "element48": ItemType
    /**
      */
    "element49": ItemType
    /**
      */
    "element5": ItemType
    /**
      */
    "element50": ItemType
    /**
      */
    "element51": ItemType
    /**
      */
    "element52": ItemType
    /**
      */
    "element53": ItemType
    /**
      */
    "element54": ItemType
    /**
      */
    "element55": ItemType
    /**
      */
    "element56": ItemType
    /**
      */
    "element57": ItemType
    /**
      */
    "element58": ItemType
    /**
      */
    "element59": ItemType
    /**
      */
    "element6": ItemType
    /**
      */
    "element60": ItemType
    /**
      */
    "element61": ItemType
    /**
      */
    "element62": ItemType
    /**
      */
    "element63": ItemType
    /**
      */
    "element64": ItemType
    /**
      */
    "element65": ItemType
    /**
      */
    "element66": ItemType
    /**
      */
    "element67": ItemType
    /**
      */
    "element68": ItemType
    /**
      */
    "element69": ItemType
    /**
      */
    "element7": ItemType
    /**
      */
    "element70": ItemType
    /**
      */
    "element71": ItemType
    /**
      */
    "element72": ItemType
    /**
      */
    "element73": ItemType
    /**
      */
    "element74": ItemType
    /**
      */
    "element75": ItemType
    /**
      */
    "element76": ItemType
    /**
      */
    "element77": ItemType
    /**
      */
    "element78": ItemType
    /**
      */
    "element79": ItemType
    /**
      */
    "element8": ItemType
    /**
      */
    "element80": ItemType
    /**
      */
    "element81": ItemType
    /**
      */
    "element82": ItemType
    /**
      */
    "element83": ItemType
    /**
      */
    "element84": ItemType
    /**
      */
    "element85": ItemType
    /**
      */
    "element86": ItemType
    /**
      */
    "element87": ItemType
    /**
      */
    "element88": ItemType
    /**
      */
    "element89": ItemType
    /**
      */
    "element9": ItemType
    /**
      */
    "element90": ItemType
    /**
      */
    "element91": ItemType
    /**
      */
    "element92": ItemType
    /**
      */
    "element93": ItemType
    /**
      */
    "element94": ItemType
    /**
      */
    "element95": ItemType
    /**
      */
    "element96": ItemType
    /**
      */
    "element97": ItemType
    /**
      */
    "element98": ItemType
    /**
      */
    "element99": ItemType
    /**
      */
    "elytra": ItemType
    /**
      */
    "emerald": ItemType
    /**
      */
    "emeraldBlock": ItemType
    /**
      */
    "emeraldOre": ItemType
    /**
      */
    "emptyMap": ItemType
    /**
      */
    "enchantedBook": ItemType
    /**
      */
    "enchantedGoldenApple": ItemType
    /**
      */
    "enchantingTable": ItemType
    /**
      */
    "endBricks": ItemType
    /**
      */
    "endBrickStairs": ItemType
    /**
      */
    "endCrystal": ItemType
    /**
      */
    "enderChest": ItemType
    /**
      */
    "enderEye": ItemType
    /**
      */
    "endermanSpawnEgg": ItemType
    /**
      */
    "endermiteSpawnEgg": ItemType
    /**
      */
    "enderPearl": ItemType
    /**
      */
    "endGateway": ItemType
    /**
      */
    "endPortal": ItemType
    /**
      */
    "endPortalFrame": ItemType
    /**
      */
    "endRod": ItemType
    /**
      */
    "endStone": ItemType
    /**
      */
    "evokerSpawnEgg": ItemType
    /**
      */
    "experienceBottle": ItemType
    /**
      */
    "exposedCopper": ItemType
    /**
      */
    "exposedCutCopper": ItemType
    /**
      */
    "exposedCutCopperSlab": ItemType
    /**
      */
    "exposedCutCopperStairs": ItemType
    /**
      */
    "exposedDoubleCutCopperSlab": ItemType
    /**
      */
    "farmland": ItemType
    /**
      */
    "feather": ItemType
    /**
      */
    "fence": ItemType
    /**
      */
    "fenceGate": ItemType
    /**
      */
    "fermentedSpiderEye": ItemType
    /**
      */
    "fieldMasonedBannerPattern": ItemType
    /**
      */
    "filledMap": ItemType
    /**
      */
    "fire": ItemType
    /**
      */
    "fireCharge": ItemType
    /**
      */
    "fireworkRocket": ItemType
    /**
      */
    "fireworkStar": ItemType
    /**
      */
    "fishingRod": ItemType
    /**
      */
    "fletchingTable": ItemType
    /**
      */
    "flint": ItemType
    /**
      */
    "flintAndSteel": ItemType
    /**
      */
    "flowerBannerPattern": ItemType
    /**
      */
    "floweringAzalea": ItemType
    /**
      */
    "flowerPot": ItemType
    /**
      */
    "flowingLava": ItemType
    /**
      */
    "flowingWater": ItemType
    /**
      */
    "foxSpawnEgg": ItemType
    /**
      */
    "frame": ItemType
    /**
      */
    "frostedIce": ItemType
    /**
      */
    "furnace": ItemType
    /**
      */
    "ghastSpawnEgg": ItemType
    /**
      */
    "ghastTear": ItemType
    /**
      */
    "gildedBlackstone": ItemType
    /**
      */
    "glass": ItemType
    /**
      */
    "glassBottle": ItemType
    /**
      */
    "glassPane": ItemType
    /**
      */
    "glisteringMelonSlice": ItemType
    /**
      */
    "glowBerries": ItemType
    /**
      */
    "glowFrame": ItemType
    /**
      */
    "glowingobsidian": ItemType
    /**
      */
    "glowInkSac": ItemType
    /**
      */
    "glowLichen": ItemType
    /**
      */
    "glowSquidSpawnEgg": ItemType
    /**
      */
    "glowStick": ItemType
    /**
      */
    "glowstone": ItemType
    /**
      */
    "glowstoneDust": ItemType
    /**
      */
    "goatHorn": ItemType
    /**
      */
    "goatSpawnEgg": ItemType
    /**
      */
    "goldBlock": ItemType
    /**
      */
    "goldenApple": ItemType
    /**
      */
    "goldenAxe": ItemType
    /**
      */
    "goldenBoots": ItemType
    /**
      */
    "goldenCarrot": ItemType
    /**
      */
    "goldenChestplate": ItemType
    /**
      */
    "goldenHelmet": ItemType
    /**
      */
    "goldenHoe": ItemType
    /**
      */
    "goldenHorseArmor": ItemType
    /**
      */
    "goldenLeggings": ItemType
    /**
      */
    "goldenPickaxe": ItemType
    /**
      */
    "goldenRail": ItemType
    /**
      */
    "goldenShovel": ItemType
    /**
      */
    "goldenSword": ItemType
    /**
      */
    "goldIngot": ItemType
    /**
      */
    "goldNugget": ItemType
    /**
      */
    "goldOre": ItemType
    /**
      */
    "graniteStairs": ItemType
    /**
      */
    "grass": ItemType
    /**
      */
    "grassPath": ItemType
    /**
      */
    "gravel": ItemType
    /**
      */
    "grayCandle": ItemType
    /**
      */
    "grayCandleCake": ItemType
    /**
      */
    "grayDye": ItemType
    /**
      */
    "grayGlazedTerracotta": ItemType
    /**
      */
    "greenCandle": ItemType
    /**
      */
    "greenCandleCake": ItemType
    /**
      */
    "greenDye": ItemType
    /**
      */
    "greenGlazedTerracotta": ItemType
    /**
      */
    "grindstone": ItemType
    /**
      */
    "guardianSpawnEgg": ItemType
    /**
      */
    "gunpowder": ItemType
    /**
      */
    "hangingRoots": ItemType
    /**
      */
    "hardenedClay": ItemType
    /**
      */
    "hardGlass": ItemType
    /**
      */
    "hardGlassPane": ItemType
    /**
      */
    "hardStainedGlass": ItemType
    /**
      */
    "hardStainedGlassPane": ItemType
    /**
      */
    "hayBlock": ItemType
    /**
      */
    "heartOfTheSea": ItemType
    /**
      */
    "heavyWeightedPressurePlate": ItemType
    /**
      */
    "hoglinSpawnEgg": ItemType
    /**
      */
    "honeyBlock": ItemType
    /**
      */
    "honeyBottle": ItemType
    /**
      */
    "honeycomb": ItemType
    /**
      */
    "honeycombBlock": ItemType
    /**
      */
    "hopper": ItemType
    /**
      */
    "hopperMinecart": ItemType
    /**
      */
    "horseSpawnEgg": ItemType
    /**
      */
    "huskSpawnEgg": ItemType
    /**
      */
    "ice": ItemType
    /**
      */
    "iceBomb": ItemType
    /**
      */
    "infestedDeepslate": ItemType
    /**
      */
    "infoUpdate": ItemType
    /**
      */
    "infoUpdate2": ItemType
    /**
      */
    "inkSac": ItemType
    /**
      */
    "invisiblebedrock": ItemType
    /**
      */
    "ironAxe": ItemType
    /**
      */
    "ironBars": ItemType
    /**
      */
    "ironBlock": ItemType
    /**
      */
    "ironBoots": ItemType
    /**
      */
    "ironChestplate": ItemType
    /**
      */
    "ironDoor": ItemType
    /**
      */
    "ironHelmet": ItemType
    /**
      */
    "ironHoe": ItemType
    /**
      */
    "ironHorseArmor": ItemType
    /**
      */
    "ironIngot": ItemType
    /**
      */
    "ironLeggings": ItemType
    /**
      */
    "ironNugget": ItemType
    /**
      */
    "ironOre": ItemType
    /**
      */
    "ironPickaxe": ItemType
    /**
      */
    "ironShovel": ItemType
    /**
      */
    "ironSword": ItemType
    /**
      */
    "ironTrapdoor": ItemType
    /**
      */
    "item.acaciaDoor": ItemType
    /**
      */
    "item.bed": ItemType
    /**
      */
    "item.beetroot": ItemType
    /**
      */
    "item.birchDoor": ItemType
    /**
      */
    "item.cake": ItemType
    /**
      */
    "item.camera": ItemType
    /**
      */
    "item.campfire": ItemType
    /**
      */
    "item.cauldron": ItemType
    /**
      */
    "item.chain": ItemType
    /**
      */
    "item.crimsonDoor": ItemType
    /**
      */
    "item.darkOakDoor": ItemType
    /**
      */
    "item.flowerPot": ItemType
    /**
      */
    "item.frame": ItemType
    /**
      */
    "item.glowFrame": ItemType
    /**
      */
    "item.hopper": ItemType
    /**
      */
    "item.ironDoor": ItemType
    /**
      */
    "item.jungleDoor": ItemType
    /**
      */
    "item.kelp": ItemType
    /**
      */
    "item.netherSprouts": ItemType
    /**
      */
    "item.netherWart": ItemType
    /**
      */
    "item.reeds": ItemType
    /**
      */
    "item.skull": ItemType
    /**
      */
    "item.soulCampfire": ItemType
    /**
      */
    "item.spruceDoor": ItemType
    /**
      */
    "item.warpedDoor": ItemType
    /**
      */
    "item.wheat": ItemType
    /**
      */
    "item.woodenDoor": ItemType
    /**
      */
    "jigsaw": ItemType
    /**
      */
    "jukebox": ItemType
    /**
      */
    "jungleBoat": ItemType
    /**
      */
    "jungleButton": ItemType
    /**
      */
    "jungleDoor": ItemType
    /**
      */
    "jungleFenceGate": ItemType
    /**
      */
    "junglePressurePlate": ItemType
    /**
      */
    "jungleSign": ItemType
    /**
      */
    "jungleStairs": ItemType
    /**
      */
    "jungleStandingSign": ItemType
    /**
      */
    "jungleTrapdoor": ItemType
    /**
      */
    "jungleWallSign": ItemType
    /**
      */
    "kelp": ItemType
    /**
      */
    "ladder": ItemType
    /**
      */
    "lantern": ItemType
    /**
      */
    "lapisBlock": ItemType
    /**
      */
    "lapisLazuli": ItemType
    /**
      */
    "lapisOre": ItemType
    /**
      */
    "largeAmethystBud": ItemType
    /**
      */
    "lava": ItemType
    /**
      */
    "lavaBucket": ItemType
    /**
      */
    "lavaCauldron": ItemType
    /**
      */
    "lead": ItemType
    /**
      */
    "leather": ItemType
    /**
      */
    "leatherBoots": ItemType
    /**
      */
    "leatherChestplate": ItemType
    /**
      */
    "leatherHelmet": ItemType
    /**
      */
    "leatherHorseArmor": ItemType
    /**
      */
    "leatherLeggings": ItemType
    /**
      */
    "leaves": ItemType
    /**
      */
    "leaves2": ItemType
    /**
      */
    "lectern": ItemType
    /**
      */
    "lever": ItemType
    /**
      */
    "lightBlock": ItemType
    /**
      */
    "lightBlueCandle": ItemType
    /**
      */
    "lightBlueCandleCake": ItemType
    /**
      */
    "lightBlueDye": ItemType
    /**
      */
    "lightBlueGlazedTerracotta": ItemType
    /**
      */
    "lightGrayCandle": ItemType
    /**
      */
    "lightGrayCandleCake": ItemType
    /**
      */
    "lightGrayDye": ItemType
    /**
      */
    "lightningRod": ItemType
    /**
      */
    "lightWeightedPressurePlate": ItemType
    /**
      */
    "limeCandle": ItemType
    /**
      */
    "limeCandleCake": ItemType
    /**
      */
    "limeDye": ItemType
    /**
      */
    "limeGlazedTerracotta": ItemType
    /**
      */
    "lingeringPotion": ItemType
    /**
      */
    "litBlastFurnace": ItemType
    /**
      */
    "litDeepslateRedstoneOre": ItemType
    /**
      */
    "litFurnace": ItemType
    /**
      */
    "litPumpkin": ItemType
    /**
      */
    "litRedstoneLamp": ItemType
    /**
      */
    "litRedstoneOre": ItemType
    /**
      */
    "litSmoker": ItemType
    /**
      */
    "llamaSpawnEgg": ItemType
    /**
      */
    "lodestone": ItemType
    /**
      */
    "lodestoneCompass": ItemType
    /**
      */
    "log": ItemType
    /**
      */
    "log2": ItemType
    /**
      */
    "loom": ItemType
    /**
      */
    "magentaCandle": ItemType
    /**
      */
    "magentaCandleCake": ItemType
    /**
      */
    "magentaDye": ItemType
    /**
      */
    "magentaGlazedTerracotta": ItemType
    /**
      */
    "magma": ItemType
    /**
      */
    "magmaCream": ItemType
    /**
      */
    "magmaCubeSpawnEgg": ItemType
    /**
      */
    "medicine": ItemType
    /**
      */
    "mediumAmethystBud": ItemType
    /**
      */
    "melonBlock": ItemType
    /**
      */
    "melonSeeds": ItemType
    /**
      */
    "melonSlice": ItemType
    /**
      */
    "melonStem": ItemType
    /**
      */
    "milkBucket": ItemType
    /**
      */
    "minecart": ItemType
    /**
      */
    "minecraft:acacia_boat": ItemType
    /**
      */
    "minecraft:acacia_button": ItemType
    /**
      */
    "minecraft:acacia_door": ItemType
    /**
      */
    "minecraft:acacia_fence_gate": ItemType
    /**
      */
    "minecraft:acacia_pressure_plate": ItemType
    /**
      */
    "minecraft:acacia_sign": ItemType
    /**
      */
    "minecraft:acacia_stairs": ItemType
    /**
      */
    "minecraft:acacia_standing_sign": ItemType
    /**
      */
    "minecraft:acacia_trapdoor": ItemType
    /**
      */
    "minecraft:acacia_wall_sign": ItemType
    /**
      */
    "minecraft:activator_rail": ItemType
    /**
      */
    "minecraft:agent_spawn_egg": ItemType
    /**
      */
    "minecraft:air": ItemType
    /**
      */
    "minecraft:allow": ItemType
    /**
      */
    "minecraft:amethyst_block": ItemType
    /**
      */
    "minecraft:amethyst_cluster": ItemType
    /**
      */
    "minecraft:amethyst_shard": ItemType
    /**
      */
    "minecraft:ancient_debris": ItemType
    /**
      */
    "minecraft:andesite_stairs": ItemType
    /**
      */
    "minecraft:anvil": ItemType
    /**
      */
    "minecraft:apple": ItemType
    /**
      */
    "minecraft:armor_stand": ItemType
    /**
      */
    "minecraft:arrow": ItemType
    /**
      */
    "minecraft:axolotl_bucket": ItemType
    /**
      */
    "minecraft:axolotl_spawn_egg": ItemType
    /**
      */
    "minecraft:azalea": ItemType
    /**
      */
    "minecraft:azalea_leaves": ItemType
    /**
      */
    "minecraft:azalea_leaves_flowered": ItemType
    /**
      */
    "minecraft:baked_potato": ItemType
    /**
      */
    "minecraft:balloon": ItemType
    /**
      */
    "minecraft:bamboo": ItemType
    /**
      */
    "minecraft:bamboo_sapling": ItemType
    /**
      */
    "minecraft:banner": ItemType
    /**
      */
    "minecraft:banner_pattern": ItemType
    /**
      */
    "minecraft:barrel": ItemType
    /**
      */
    "minecraft:barrier": ItemType
    /**
      */
    "minecraft:basalt": ItemType
    /**
      */
    "minecraft:bat_spawn_egg": ItemType
    /**
      */
    "minecraft:beacon": ItemType
    /**
      */
    "minecraft:bed": ItemType
    /**
      */
    "minecraft:bedrock": ItemType
    /**
      */
    "minecraft:bee_nest": ItemType
    /**
      */
    "minecraft:bee_spawn_egg": ItemType
    /**
      */
    "minecraft:beef": ItemType
    /**
      */
    "minecraft:beehive": ItemType
    /**
      */
    "minecraft:beetroot": ItemType
    /**
      */
    "minecraft:beetroot_seeds": ItemType
    /**
      */
    "minecraft:beetroot_soup": ItemType
    /**
      */
    "minecraft:bell": ItemType
    /**
      */
    "minecraft:big_dripleaf": ItemType
    /**
      */
    "minecraft:birch_boat": ItemType
    /**
      */
    "minecraft:birch_button": ItemType
    /**
      */
    "minecraft:birch_door": ItemType
    /**
      */
    "minecraft:birch_fence_gate": ItemType
    /**
      */
    "minecraft:birch_pressure_plate": ItemType
    /**
      */
    "minecraft:birch_sign": ItemType
    /**
      */
    "minecraft:birch_stairs": ItemType
    /**
      */
    "minecraft:birch_standing_sign": ItemType
    /**
      */
    "minecraft:birch_trapdoor": ItemType
    /**
      */
    "minecraft:birch_wall_sign": ItemType
    /**
      */
    "minecraft:black_candle": ItemType
    /**
      */
    "minecraft:black_candle_cake": ItemType
    /**
      */
    "minecraft:black_dye": ItemType
    /**
      */
    "minecraft:black_glazed_terracotta": ItemType
    /**
      */
    "minecraft:blackstone": ItemType
    /**
      */
    "minecraft:blackstone_double_slab": ItemType
    /**
      */
    "minecraft:blackstone_slab": ItemType
    /**
      */
    "minecraft:blackstone_stairs": ItemType
    /**
      */
    "minecraft:blackstone_wall": ItemType
    /**
      */
    "minecraft:blast_furnace": ItemType
    /**
      */
    "minecraft:blaze_powder": ItemType
    /**
      */
    "minecraft:blaze_rod": ItemType
    /**
      */
    "minecraft:blaze_spawn_egg": ItemType
    /**
      */
    "minecraft:bleach": ItemType
    /**
      */
    "minecraft:blue_candle": ItemType
    /**
      */
    "minecraft:blue_candle_cake": ItemType
    /**
      */
    "minecraft:blue_dye": ItemType
    /**
      */
    "minecraft:blue_glazed_terracotta": ItemType
    /**
      */
    "minecraft:blue_ice": ItemType
    /**
      */
    "minecraft:boat": ItemType
    /**
      */
    "minecraft:bone": ItemType
    /**
      */
    "minecraft:bone_block": ItemType
    /**
      */
    "minecraft:bone_meal": ItemType
    /**
      */
    "minecraft:book": ItemType
    /**
      */
    "minecraft:bookshelf": ItemType
    /**
      */
    "minecraft:border_block": ItemType
    /**
      */
    "minecraft:bordure_indented_banner_pattern": ItemType
    /**
      */
    "minecraft:bow": ItemType
    /**
      */
    "minecraft:bowl": ItemType
    /**
      */
    "minecraft:bread": ItemType
    /**
      */
    "minecraft:brewing_stand": ItemType
    /**
      */
    "minecraft:brewingstandblock": ItemType
    /**
      */
    "minecraft:brick": ItemType
    /**
      */
    "minecraft:brick_block": ItemType
    /**
      */
    "minecraft:brick_stairs": ItemType
    /**
      */
    "minecraft:brown_candle": ItemType
    /**
      */
    "minecraft:brown_candle_cake": ItemType
    /**
      */
    "minecraft:brown_dye": ItemType
    /**
      */
    "minecraft:brown_glazed_terracotta": ItemType
    /**
      */
    "minecraft:brown_mushroom": ItemType
    /**
      */
    "minecraft:brown_mushroom_block": ItemType
    /**
      */
    "minecraft:bubble_column": ItemType
    /**
      */
    "minecraft:bucket": ItemType
    /**
      */
    "minecraft:budding_amethyst": ItemType
    /**
      */
    "minecraft:cactus": ItemType
    /**
      */
    "minecraft:cake": ItemType
    /**
      */
    "minecraft:calcite": ItemType
    /**
      */
    "minecraft:camera": ItemType
    /**
      */
    "minecraft:campfire": ItemType
    /**
      */
    "minecraft:candle": ItemType
    /**
      */
    "minecraft:candle_cake": ItemType
    /**
      */
    "minecraft:carpet": ItemType
    /**
      */
    "minecraft:carrot": ItemType
    /**
      */
    "minecraft:carrot_on_a_stick": ItemType
    /**
      */
    "minecraft:carrots": ItemType
    /**
      */
    "minecraft:cartography_table": ItemType
    /**
      */
    "minecraft:carved_pumpkin": ItemType
    /**
      */
    "minecraft:cat_spawn_egg": ItemType
    /**
      */
    "minecraft:cauldron": ItemType
    /**
      */
    "minecraft:cave_spider_spawn_egg": ItemType
    /**
      */
    "minecraft:cave_vines": ItemType
    /**
      */
    "minecraft:cave_vines_body_with_berries": ItemType
    /**
      */
    "minecraft:cave_vines_head_with_berries": ItemType
    /**
      */
    "minecraft:chain": ItemType
    /**
      */
    "minecraft:chain_command_block": ItemType
    /**
      */
    "minecraft:chainmail_boots": ItemType
    /**
      */
    "minecraft:chainmail_chestplate": ItemType
    /**
      */
    "minecraft:chainmail_helmet": ItemType
    /**
      */
    "minecraft:chainmail_leggings": ItemType
    /**
      */
    "minecraft:charcoal": ItemType
    /**
      */
    "minecraft:chemical_heat": ItemType
    /**
      */
    "minecraft:chemistry_table": ItemType
    /**
      */
    "minecraft:chest": ItemType
    /**
      */
    "minecraft:chest_minecart": ItemType
    /**
      */
    "minecraft:chicken": ItemType
    /**
      */
    "minecraft:chicken_spawn_egg": ItemType
    /**
      */
    "minecraft:chiseled_deepslate": ItemType
    /**
      */
    "minecraft:chiseled_nether_bricks": ItemType
    /**
      */
    "minecraft:chiseled_polished_blackstone": ItemType
    /**
      */
    "minecraft:chorus_flower": ItemType
    /**
      */
    "minecraft:chorus_fruit": ItemType
    /**
      */
    "minecraft:chorus_plant": ItemType
    /**
      */
    "minecraft:clay": ItemType
    /**
      */
    "minecraft:clay_ball": ItemType
    /**
      */
    "minecraft:clock": ItemType
    /**
      */
    "minecraft:coal": ItemType
    /**
      */
    "minecraft:coal_block": ItemType
    /**
      */
    "minecraft:coal_ore": ItemType
    /**
      */
    "minecraft:cobbled_deepslate": ItemType
    /**
      */
    "minecraft:cobbled_deepslate_double_slab": ItemType
    /**
      */
    "minecraft:cobbled_deepslate_slab": ItemType
    /**
      */
    "minecraft:cobbled_deepslate_stairs": ItemType
    /**
      */
    "minecraft:cobbled_deepslate_wall": ItemType
    /**
      */
    "minecraft:cobblestone": ItemType
    /**
      */
    "minecraft:cobblestone_wall": ItemType
    /**
      */
    "minecraft:cocoa": ItemType
    /**
      */
    "minecraft:cocoa_beans": ItemType
    /**
      */
    "minecraft:cod": ItemType
    /**
      */
    "minecraft:cod_bucket": ItemType
    /**
      */
    "minecraft:cod_spawn_egg": ItemType
    /**
      */
    "minecraft:colored_torch_bp": ItemType
    /**
      */
    "minecraft:colored_torch_rg": ItemType
    /**
      */
    "minecraft:command_block": ItemType
    /**
      */
    "minecraft:command_block_minecart": ItemType
    /**
      */
    "minecraft:comparator": ItemType
    /**
      */
    "minecraft:compass": ItemType
    /**
      */
    "minecraft:composter": ItemType
    /**
      */
    "minecraft:compound": ItemType
    /**
      */
    "minecraft:concrete": ItemType
    /**
      */
    "minecraft:concrete_powder": ItemType
    /**
      */
    "minecraft:conduit": ItemType
    /**
      */
    "minecraft:cooked_beef": ItemType
    /**
      */
    "minecraft:cooked_chicken": ItemType
    /**
      */
    "minecraft:cooked_cod": ItemType
    /**
      */
    "minecraft:cooked_mutton": ItemType
    /**
      */
    "minecraft:cooked_porkchop": ItemType
    /**
      */
    "minecraft:cooked_rabbit": ItemType
    /**
      */
    "minecraft:cooked_salmon": ItemType
    /**
      */
    "minecraft:cookie": ItemType
    /**
      */
    "minecraft:copper_block": ItemType
    /**
      */
    "minecraft:copper_ingot": ItemType
    /**
      */
    "minecraft:copper_ore": ItemType
    /**
      */
    "minecraft:coral": ItemType
    /**
      */
    "minecraft:coral_block": ItemType
    /**
      */
    "minecraft:coral_fan": ItemType
    /**
      */
    "minecraft:coral_fan_dead": ItemType
    /**
      */
    "minecraft:coral_fan_hang": ItemType
    /**
      */
    "minecraft:coral_fan_hang2": ItemType
    /**
      */
    "minecraft:coral_fan_hang3": ItemType
    /**
      */
    "minecraft:cow_spawn_egg": ItemType
    /**
      */
    "minecraft:cracked_deepslate_bricks": ItemType
    /**
      */
    "minecraft:cracked_deepslate_tiles": ItemType
    /**
      */
    "minecraft:cracked_nether_bricks": ItemType
    /**
      */
    "minecraft:cracked_polished_blackstone_bricks": ItemType
    /**
      */
    "minecraft:crafting_table": ItemType
    /**
      */
    "minecraft:creeper_banner_pattern": ItemType
    /**
      */
    "minecraft:creeper_spawn_egg": ItemType
    /**
      */
    "minecraft:crimson_button": ItemType
    /**
      */
    "minecraft:crimson_door": ItemType
    /**
      */
    "minecraft:crimson_double_slab": ItemType
    /**
      */
    "minecraft:crimson_fence": ItemType
    /**
      */
    "minecraft:crimson_fence_gate": ItemType
    /**
      */
    "minecraft:crimson_fungus": ItemType
    /**
      */
    "minecraft:crimson_hyphae": ItemType
    /**
      */
    "minecraft:crimson_nylium": ItemType
    /**
      */
    "minecraft:crimson_planks": ItemType
    /**
      */
    "minecraft:crimson_pressure_plate": ItemType
    /**
      */
    "minecraft:crimson_roots": ItemType
    /**
      */
    "minecraft:crimson_sign": ItemType
    /**
      */
    "minecraft:crimson_slab": ItemType
    /**
      */
    "minecraft:crimson_stairs": ItemType
    /**
      */
    "minecraft:crimson_standing_sign": ItemType
    /**
      */
    "minecraft:crimson_stem": ItemType
    /**
      */
    "minecraft:crimson_trapdoor": ItemType
    /**
      */
    "minecraft:crimson_wall_sign": ItemType
    /**
      */
    "minecraft:crossbow": ItemType
    /**
      */
    "minecraft:crying_obsidian": ItemType
    /**
      */
    "minecraft:cut_copper": ItemType
    /**
      */
    "minecraft:cut_copper_slab": ItemType
    /**
      */
    "minecraft:cut_copper_stairs": ItemType
    /**
      */
    "minecraft:cyan_candle": ItemType
    /**
      */
    "minecraft:cyan_candle_cake": ItemType
    /**
      */
    "minecraft:cyan_dye": ItemType
    /**
      */
    "minecraft:cyan_glazed_terracotta": ItemType
    /**
      */
    "minecraft:dark_oak_boat": ItemType
    /**
      */
    "minecraft:dark_oak_button": ItemType
    /**
      */
    "minecraft:dark_oak_door": ItemType
    /**
      */
    "minecraft:dark_oak_fence_gate": ItemType
    /**
      */
    "minecraft:dark_oak_pressure_plate": ItemType
    /**
      */
    "minecraft:dark_oak_sign": ItemType
    /**
      */
    "minecraft:dark_oak_stairs": ItemType
    /**
      */
    "minecraft:dark_oak_trapdoor": ItemType
    /**
      */
    "minecraft:dark_prismarine_stairs": ItemType
    /**
      */
    "minecraft:darkoak_standing_sign": ItemType
    /**
      */
    "minecraft:darkoak_wall_sign": ItemType
    /**
      */
    "minecraft:daylight_detector": ItemType
    /**
      */
    "minecraft:daylight_detector_inverted": ItemType
    /**
      */
    "minecraft:deadbush": ItemType
    /**
      */
    "minecraft:debug_stick": ItemType
    /**
      */
    "minecraft:deepslate": ItemType
    /**
      */
    "minecraft:deepslate_brick_double_slab": ItemType
    /**
      */
    "minecraft:deepslate_brick_slab": ItemType
    /**
      */
    "minecraft:deepslate_brick_stairs": ItemType
    /**
      */
    "minecraft:deepslate_brick_wall": ItemType
    /**
      */
    "minecraft:deepslate_bricks": ItemType
    /**
      */
    "minecraft:deepslate_coal_ore": ItemType
    /**
      */
    "minecraft:deepslate_copper_ore": ItemType
    /**
      */
    "minecraft:deepslate_diamond_ore": ItemType
    /**
      */
    "minecraft:deepslate_emerald_ore": ItemType
    /**
      */
    "minecraft:deepslate_gold_ore": ItemType
    /**
      */
    "minecraft:deepslate_iron_ore": ItemType
    /**
      */
    "minecraft:deepslate_lapis_ore": ItemType
    /**
      */
    "minecraft:deepslate_redstone_ore": ItemType
    /**
      */
    "minecraft:deepslate_tile_double_slab": ItemType
    /**
      */
    "minecraft:deepslate_tile_slab": ItemType
    /**
      */
    "minecraft:deepslate_tile_stairs": ItemType
    /**
      */
    "minecraft:deepslate_tile_wall": ItemType
    /**
      */
    "minecraft:deepslate_tiles": ItemType
    /**
      */
    "minecraft:deny": ItemType
    /**
      */
    "minecraft:detector_rail": ItemType
    /**
      */
    "minecraft:diamond": ItemType
    /**
      */
    "minecraft:diamond_axe": ItemType
    /**
      */
    "minecraft:diamond_block": ItemType
    /**
      */
    "minecraft:diamond_boots": ItemType
    /**
      */
    "minecraft:diamond_chestplate": ItemType
    /**
      */
    "minecraft:diamond_helmet": ItemType
    /**
      */
    "minecraft:diamond_hoe": ItemType
    /**
      */
    "minecraft:diamond_horse_armor": ItemType
    /**
      */
    "minecraft:diamond_leggings": ItemType
    /**
      */
    "minecraft:diamond_ore": ItemType
    /**
      */
    "minecraft:diamond_pickaxe": ItemType
    /**
      */
    "minecraft:diamond_shovel": ItemType
    /**
      */
    "minecraft:diamond_sword": ItemType
    /**
      */
    "minecraft:diorite_stairs": ItemType
    /**
      */
    "minecraft:dirt": ItemType
    /**
      */
    "minecraft:dirt_with_roots": ItemType
    /**
      */
    "minecraft:dispenser": ItemType
    /**
      */
    "minecraft:dolphin_spawn_egg": ItemType
    /**
      */
    "minecraft:donkey_spawn_egg": ItemType
    /**
      */
    "minecraft:double_cut_copper_slab": ItemType
    /**
      */
    "minecraft:double_plant": ItemType
    /**
      */
    "minecraft:double_stone_slab": ItemType
    /**
      */
    "minecraft:double_stone_slab2": ItemType
    /**
      */
    "minecraft:double_stone_slab3": ItemType
    /**
      */
    "minecraft:double_stone_slab4": ItemType
    /**
      */
    "minecraft:double_wooden_slab": ItemType
    /**
      */
    "minecraft:dragon_breath": ItemType
    /**
      */
    "minecraft:dragon_egg": ItemType
    /**
      */
    "minecraft:dried_kelp": ItemType
    /**
      */
    "minecraft:dried_kelp_block": ItemType
    /**
      */
    "minecraft:dripstone_block": ItemType
    /**
      */
    "minecraft:dropper": ItemType
    /**
      */
    "minecraft:drowned_spawn_egg": ItemType
    /**
      */
    "minecraft:dye": ItemType
    /**
      */
    "minecraft:egg": ItemType
    /**
      */
    "minecraft:elder_guardian_spawn_egg": ItemType
    /**
      */
    "minecraft:element_0": ItemType
    /**
      */
    "minecraft:element_1": ItemType
    /**
      */
    "minecraft:element_10": ItemType
    /**
      */
    "minecraft:element_100": ItemType
    /**
      */
    "minecraft:element_101": ItemType
    /**
      */
    "minecraft:element_102": ItemType
    /**
      */
    "minecraft:element_103": ItemType
    /**
      */
    "minecraft:element_104": ItemType
    /**
      */
    "minecraft:element_105": ItemType
    /**
      */
    "minecraft:element_106": ItemType
    /**
      */
    "minecraft:element_107": ItemType
    /**
      */
    "minecraft:element_108": ItemType
    /**
      */
    "minecraft:element_109": ItemType
    /**
      */
    "minecraft:element_11": ItemType
    /**
      */
    "minecraft:element_110": ItemType
    /**
      */
    "minecraft:element_111": ItemType
    /**
      */
    "minecraft:element_112": ItemType
    /**
      */
    "minecraft:element_113": ItemType
    /**
      */
    "minecraft:element_114": ItemType
    /**
      */
    "minecraft:element_115": ItemType
    /**
      */
    "minecraft:element_116": ItemType
    /**
      */
    "minecraft:element_117": ItemType
    /**
      */
    "minecraft:element_118": ItemType
    /**
      */
    "minecraft:element_12": ItemType
    /**
      */
    "minecraft:element_13": ItemType
    /**
      */
    "minecraft:element_14": ItemType
    /**
      */
    "minecraft:element_15": ItemType
    /**
      */
    "minecraft:element_16": ItemType
    /**
      */
    "minecraft:element_17": ItemType
    /**
      */
    "minecraft:element_18": ItemType
    /**
      */
    "minecraft:element_19": ItemType
    /**
      */
    "minecraft:element_2": ItemType
    /**
      */
    "minecraft:element_20": ItemType
    /**
      */
    "minecraft:element_21": ItemType
    /**
      */
    "minecraft:element_22": ItemType
    /**
      */
    "minecraft:element_23": ItemType
    /**
      */
    "minecraft:element_24": ItemType
    /**
      */
    "minecraft:element_25": ItemType
    /**
      */
    "minecraft:element_26": ItemType
    /**
      */
    "minecraft:element_27": ItemType
    /**
      */
    "minecraft:element_28": ItemType
    /**
      */
    "minecraft:element_29": ItemType
    /**
      */
    "minecraft:element_3": ItemType
    /**
      */
    "minecraft:element_30": ItemType
    /**
      */
    "minecraft:element_31": ItemType
    /**
      */
    "minecraft:element_32": ItemType
    /**
      */
    "minecraft:element_33": ItemType
    /**
      */
    "minecraft:element_34": ItemType
    /**
      */
    "minecraft:element_35": ItemType
    /**
      */
    "minecraft:element_36": ItemType
    /**
      */
    "minecraft:element_37": ItemType
    /**
      */
    "minecraft:element_38": ItemType
    /**
      */
    "minecraft:element_39": ItemType
    /**
      */
    "minecraft:element_4": ItemType
    /**
      */
    "minecraft:element_40": ItemType
    /**
      */
    "minecraft:element_41": ItemType
    /**
      */
    "minecraft:element_42": ItemType
    /**
      */
    "minecraft:element_43": ItemType
    /**
      */
    "minecraft:element_44": ItemType
    /**
      */
    "minecraft:element_45": ItemType
    /**
      */
    "minecraft:element_46": ItemType
    /**
      */
    "minecraft:element_47": ItemType
    /**
      */
    "minecraft:element_48": ItemType
    /**
      */
    "minecraft:element_49": ItemType
    /**
      */
    "minecraft:element_5": ItemType
    /**
      */
    "minecraft:element_50": ItemType
    /**
      */
    "minecraft:element_51": ItemType
    /**
      */
    "minecraft:element_52": ItemType
    /**
      */
    "minecraft:element_53": ItemType
    /**
      */
    "minecraft:element_54": ItemType
    /**
      */
    "minecraft:element_55": ItemType
    /**
      */
    "minecraft:element_56": ItemType
    /**
      */
    "minecraft:element_57": ItemType
    /**
      */
    "minecraft:element_58": ItemType
    /**
      */
    "minecraft:element_59": ItemType
    /**
      */
    "minecraft:element_6": ItemType
    /**
      */
    "minecraft:element_60": ItemType
    /**
      */
    "minecraft:element_61": ItemType
    /**
      */
    "minecraft:element_62": ItemType
    /**
      */
    "minecraft:element_63": ItemType
    /**
      */
    "minecraft:element_64": ItemType
    /**
      */
    "minecraft:element_65": ItemType
    /**
      */
    "minecraft:element_66": ItemType
    /**
      */
    "minecraft:element_67": ItemType
    /**
      */
    "minecraft:element_68": ItemType
    /**
      */
    "minecraft:element_69": ItemType
    /**
      */
    "minecraft:element_7": ItemType
    /**
      */
    "minecraft:element_70": ItemType
    /**
      */
    "minecraft:element_71": ItemType
    /**
      */
    "minecraft:element_72": ItemType
    /**
      */
    "minecraft:element_73": ItemType
    /**
      */
    "minecraft:element_74": ItemType
    /**
      */
    "minecraft:element_75": ItemType
    /**
      */
    "minecraft:element_76": ItemType
    /**
      */
    "minecraft:element_77": ItemType
    /**
      */
    "minecraft:element_78": ItemType
    /**
      */
    "minecraft:element_79": ItemType
    /**
      */
    "minecraft:element_8": ItemType
    /**
      */
    "minecraft:element_80": ItemType
    /**
      */
    "minecraft:element_81": ItemType
    /**
      */
    "minecraft:element_82": ItemType
    /**
      */
    "minecraft:element_83": ItemType
    /**
      */
    "minecraft:element_84": ItemType
    /**
      */
    "minecraft:element_85": ItemType
    /**
      */
    "minecraft:element_86": ItemType
    /**
      */
    "minecraft:element_87": ItemType
    /**
      */
    "minecraft:element_88": ItemType
    /**
      */
    "minecraft:element_89": ItemType
    /**
      */
    "minecraft:element_9": ItemType
    /**
      */
    "minecraft:element_90": ItemType
    /**
      */
    "minecraft:element_91": ItemType
    /**
      */
    "minecraft:element_92": ItemType
    /**
      */
    "minecraft:element_93": ItemType
    /**
      */
    "minecraft:element_94": ItemType
    /**
      */
    "minecraft:element_95": ItemType
    /**
      */
    "minecraft:element_96": ItemType
    /**
      */
    "minecraft:element_97": ItemType
    /**
      */
    "minecraft:element_98": ItemType
    /**
      */
    "minecraft:element_99": ItemType
    /**
      */
    "minecraft:elytra": ItemType
    /**
      */
    "minecraft:emerald": ItemType
    /**
      */
    "minecraft:emerald_block": ItemType
    /**
      */
    "minecraft:emerald_ore": ItemType
    /**
      */
    "minecraft:empty_map": ItemType
    /**
      */
    "minecraft:enchanted_book": ItemType
    /**
      */
    "minecraft:enchanted_golden_apple": ItemType
    /**
      */
    "minecraft:enchanting_table": ItemType
    /**
      */
    "minecraft:end_brick_stairs": ItemType
    /**
      */
    "minecraft:end_bricks": ItemType
    /**
      */
    "minecraft:end_crystal": ItemType
    /**
      */
    "minecraft:end_gateway": ItemType
    /**
      */
    "minecraft:end_portal": ItemType
    /**
      */
    "minecraft:end_portal_frame": ItemType
    /**
      */
    "minecraft:end_rod": ItemType
    /**
      */
    "minecraft:end_stone": ItemType
    /**
      */
    "minecraft:ender_chest": ItemType
    /**
      */
    "minecraft:ender_eye": ItemType
    /**
      */
    "minecraft:ender_pearl": ItemType
    /**
      */
    "minecraft:enderman_spawn_egg": ItemType
    /**
      */
    "minecraft:endermite_spawn_egg": ItemType
    /**
      */
    "minecraft:evoker_spawn_egg": ItemType
    /**
      */
    "minecraft:experience_bottle": ItemType
    /**
      */
    "minecraft:exposed_copper": ItemType
    /**
      */
    "minecraft:exposed_cut_copper": ItemType
    /**
      */
    "minecraft:exposed_cut_copper_slab": ItemType
    /**
      */
    "minecraft:exposed_cut_copper_stairs": ItemType
    /**
      */
    "minecraft:exposed_double_cut_copper_slab": ItemType
    /**
      */
    "minecraft:farmland": ItemType
    /**
      */
    "minecraft:feather": ItemType
    /**
      */
    "minecraft:fence": ItemType
    /**
      */
    "minecraft:fence_gate": ItemType
    /**
      */
    "minecraft:fermented_spider_eye": ItemType
    /**
      */
    "minecraft:field_masoned_banner_pattern": ItemType
    /**
      */
    "minecraft:filled_map": ItemType
    /**
      */
    "minecraft:fire": ItemType
    /**
      */
    "minecraft:fire_charge": ItemType
    /**
      */
    "minecraft:firework_rocket": ItemType
    /**
      */
    "minecraft:firework_star": ItemType
    /**
      */
    "minecraft:fishing_rod": ItemType
    /**
      */
    "minecraft:fletching_table": ItemType
    /**
      */
    "minecraft:flint": ItemType
    /**
      */
    "minecraft:flint_and_steel": ItemType
    /**
      */
    "minecraft:flower_banner_pattern": ItemType
    /**
      */
    "minecraft:flower_pot": ItemType
    /**
      */
    "minecraft:flowering_azalea": ItemType
    /**
      */
    "minecraft:flowing_lava": ItemType
    /**
      */
    "minecraft:flowing_water": ItemType
    /**
      */
    "minecraft:fox_spawn_egg": ItemType
    /**
      */
    "minecraft:frame": ItemType
    /**
      */
    "minecraft:frosted_ice": ItemType
    /**
      */
    "minecraft:furnace": ItemType
    /**
      */
    "minecraft:ghast_spawn_egg": ItemType
    /**
      */
    "minecraft:ghast_tear": ItemType
    /**
      */
    "minecraft:gilded_blackstone": ItemType
    /**
      */
    "minecraft:glass": ItemType
    /**
      */
    "minecraft:glass_bottle": ItemType
    /**
      */
    "minecraft:glass_pane": ItemType
    /**
      */
    "minecraft:glistering_melon_slice": ItemType
    /**
      */
    "minecraft:glow_berries": ItemType
    /**
      */
    "minecraft:glow_frame": ItemType
    /**
      */
    "minecraft:glow_ink_sac": ItemType
    /**
      */
    "minecraft:glow_lichen": ItemType
    /**
      */
    "minecraft:glow_squid_spawn_egg": ItemType
    /**
      */
    "minecraft:glow_stick": ItemType
    /**
      */
    "minecraft:glowingobsidian": ItemType
    /**
      */
    "minecraft:glowstone": ItemType
    /**
      */
    "minecraft:glowstone_dust": ItemType
    /**
      */
    "minecraft:goat_horn": ItemType
    /**
      */
    "minecraft:goat_spawn_egg": ItemType
    /**
      */
    "minecraft:gold_block": ItemType
    /**
      */
    "minecraft:gold_ingot": ItemType
    /**
      */
    "minecraft:gold_nugget": ItemType
    /**
      */
    "minecraft:gold_ore": ItemType
    /**
      */
    "minecraft:golden_apple": ItemType
    /**
      */
    "minecraft:golden_axe": ItemType
    /**
      */
    "minecraft:golden_boots": ItemType
    /**
      */
    "minecraft:golden_carrot": ItemType
    /**
      */
    "minecraft:golden_chestplate": ItemType
    /**
      */
    "minecraft:golden_helmet": ItemType
    /**
      */
    "minecraft:golden_hoe": ItemType
    /**
      */
    "minecraft:golden_horse_armor": ItemType
    /**
      */
    "minecraft:golden_leggings": ItemType
    /**
      */
    "minecraft:golden_pickaxe": ItemType
    /**
      */
    "minecraft:golden_rail": ItemType
    /**
      */
    "minecraft:golden_shovel": ItemType
    /**
      */
    "minecraft:golden_sword": ItemType
    /**
      */
    "minecraft:granite_stairs": ItemType
    /**
      */
    "minecraft:grass": ItemType
    /**
      */
    "minecraft:grass_path": ItemType
    /**
      */
    "minecraft:gravel": ItemType
    /**
      */
    "minecraft:gray_candle": ItemType
    /**
      */
    "minecraft:gray_candle_cake": ItemType
    /**
      */
    "minecraft:gray_dye": ItemType
    /**
      */
    "minecraft:gray_glazed_terracotta": ItemType
    /**
      */
    "minecraft:green_candle": ItemType
    /**
      */
    "minecraft:green_candle_cake": ItemType
    /**
      */
    "minecraft:green_dye": ItemType
    /**
      */
    "minecraft:green_glazed_terracotta": ItemType
    /**
      */
    "minecraft:grindstone": ItemType
    /**
      */
    "minecraft:guardian_spawn_egg": ItemType
    /**
      */
    "minecraft:gunpowder": ItemType
    /**
      */
    "minecraft:hanging_roots": ItemType
    /**
      */
    "minecraft:hard_glass": ItemType
    /**
      */
    "minecraft:hard_glass_pane": ItemType
    /**
      */
    "minecraft:hard_stained_glass": ItemType
    /**
      */
    "minecraft:hard_stained_glass_pane": ItemType
    /**
      */
    "minecraft:hardened_clay": ItemType
    /**
      */
    "minecraft:hay_block": ItemType
    /**
      */
    "minecraft:heart_of_the_sea": ItemType
    /**
      */
    "minecraft:heavy_weighted_pressure_plate": ItemType
    /**
      */
    "minecraft:hoglin_spawn_egg": ItemType
    /**
      */
    "minecraft:honey_block": ItemType
    /**
      */
    "minecraft:honey_bottle": ItemType
    /**
      */
    "minecraft:honeycomb": ItemType
    /**
      */
    "minecraft:honeycomb_block": ItemType
    /**
      */
    "minecraft:hopper": ItemType
    /**
      */
    "minecraft:hopper_minecart": ItemType
    /**
      */
    "minecraft:horse_spawn_egg": ItemType
    /**
      */
    "minecraft:husk_spawn_egg": ItemType
    /**
      */
    "minecraft:ice": ItemType
    /**
      */
    "minecraft:ice_bomb": ItemType
    /**
      */
    "minecraft:infested_deepslate": ItemType
    /**
      */
    "minecraft:info_update": ItemType
    /**
      */
    "minecraft:info_update2": ItemType
    /**
      */
    "minecraft:ink_sac": ItemType
    /**
      */
    "minecraft:invisiblebedrock": ItemType
    /**
      */
    "minecraft:iron_axe": ItemType
    /**
      */
    "minecraft:iron_bars": ItemType
    /**
      */
    "minecraft:iron_block": ItemType
    /**
      */
    "minecraft:iron_boots": ItemType
    /**
      */
    "minecraft:iron_chestplate": ItemType
    /**
      */
    "minecraft:iron_door": ItemType
    /**
      */
    "minecraft:iron_helmet": ItemType
    /**
      */
    "minecraft:iron_hoe": ItemType
    /**
      */
    "minecraft:iron_horse_armor": ItemType
    /**
      */
    "minecraft:iron_ingot": ItemType
    /**
      */
    "minecraft:iron_leggings": ItemType
    /**
      */
    "minecraft:iron_nugget": ItemType
    /**
      */
    "minecraft:iron_ore": ItemType
    /**
      */
    "minecraft:iron_pickaxe": ItemType
    /**
      */
    "minecraft:iron_shovel": ItemType
    /**
      */
    "minecraft:iron_sword": ItemType
    /**
      */
    "minecraft:iron_trapdoor": ItemType
    /**
      */
    "minecraft:item.acacia_door": ItemType
    /**
      */
    "minecraft:item.bed": ItemType
    /**
      */
    "minecraft:item.beetroot": ItemType
    /**
      */
    "minecraft:item.birch_door": ItemType
    /**
      */
    "minecraft:item.cake": ItemType
    /**
      */
    "minecraft:item.camera": ItemType
    /**
      */
    "minecraft:item.campfire": ItemType
    /**
      */
    "minecraft:item.cauldron": ItemType
    /**
      */
    "minecraft:item.chain": ItemType
    /**
      */
    "minecraft:item.crimson_door": ItemType
    /**
      */
    "minecraft:item.dark_oak_door": ItemType
    /**
      */
    "minecraft:item.flower_pot": ItemType
    /**
      */
    "minecraft:item.frame": ItemType
    /**
      */
    "minecraft:item.glow_frame": ItemType
    /**
      */
    "minecraft:item.hopper": ItemType
    /**
      */
    "minecraft:item.iron_door": ItemType
    /**
      */
    "minecraft:item.jungle_door": ItemType
    /**
      */
    "minecraft:item.kelp": ItemType
    /**
      */
    "minecraft:item.nether_sprouts": ItemType
    /**
      */
    "minecraft:item.nether_wart": ItemType
    /**
      */
    "minecraft:item.reeds": ItemType
    /**
      */
    "minecraft:item.skull": ItemType
    /**
      */
    "minecraft:item.soul_campfire": ItemType
    /**
      */
    "minecraft:item.spruce_door": ItemType
    /**
      */
    "minecraft:item.warped_door": ItemType
    /**
      */
    "minecraft:item.wheat": ItemType
    /**
      */
    "minecraft:item.wooden_door": ItemType
    /**
      */
    "minecraft:jigsaw": ItemType
    /**
      */
    "minecraft:jukebox": ItemType
    /**
      */
    "minecraft:jungle_boat": ItemType
    /**
      */
    "minecraft:jungle_button": ItemType
    /**
      */
    "minecraft:jungle_door": ItemType
    /**
      */
    "minecraft:jungle_fence_gate": ItemType
    /**
      */
    "minecraft:jungle_pressure_plate": ItemType
    /**
      */
    "minecraft:jungle_sign": ItemType
    /**
      */
    "minecraft:jungle_stairs": ItemType
    /**
      */
    "minecraft:jungle_standing_sign": ItemType
    /**
      */
    "minecraft:jungle_trapdoor": ItemType
    /**
      */
    "minecraft:jungle_wall_sign": ItemType
    /**
      */
    "minecraft:kelp": ItemType
    /**
      */
    "minecraft:ladder": ItemType
    /**
      */
    "minecraft:lantern": ItemType
    /**
      */
    "minecraft:lapis_block": ItemType
    /**
      */
    "minecraft:lapis_lazuli": ItemType
    /**
      */
    "minecraft:lapis_ore": ItemType
    /**
      */
    "minecraft:large_amethyst_bud": ItemType
    /**
      */
    "minecraft:lava": ItemType
    /**
      */
    "minecraft:lava_bucket": ItemType
    /**
      */
    "minecraft:lava_cauldron": ItemType
    /**
      */
    "minecraft:lead": ItemType
    /**
      */
    "minecraft:leather": ItemType
    /**
      */
    "minecraft:leather_boots": ItemType
    /**
      */
    "minecraft:leather_chestplate": ItemType
    /**
      */
    "minecraft:leather_helmet": ItemType
    /**
      */
    "minecraft:leather_horse_armor": ItemType
    /**
      */
    "minecraft:leather_leggings": ItemType
    /**
      */
    "minecraft:leaves": ItemType
    /**
      */
    "minecraft:leaves2": ItemType
    /**
      */
    "minecraft:lectern": ItemType
    /**
      */
    "minecraft:lever": ItemType
    /**
      */
    "minecraft:light_block": ItemType
    /**
      */
    "minecraft:light_blue_candle": ItemType
    /**
      */
    "minecraft:light_blue_candle_cake": ItemType
    /**
      */
    "minecraft:light_blue_dye": ItemType
    /**
      */
    "minecraft:light_blue_glazed_terracotta": ItemType
    /**
      */
    "minecraft:light_gray_candle": ItemType
    /**
      */
    "minecraft:light_gray_candle_cake": ItemType
    /**
      */
    "minecraft:light_gray_dye": ItemType
    /**
      */
    "minecraft:light_weighted_pressure_plate": ItemType
    /**
      */
    "minecraft:lightning_rod": ItemType
    /**
      */
    "minecraft:lime_candle": ItemType
    /**
      */
    "minecraft:lime_candle_cake": ItemType
    /**
      */
    "minecraft:lime_dye": ItemType
    /**
      */
    "minecraft:lime_glazed_terracotta": ItemType
    /**
      */
    "minecraft:lingering_potion": ItemType
    /**
      */
    "minecraft:lit_blast_furnace": ItemType
    /**
      */
    "minecraft:lit_deepslate_redstone_ore": ItemType
    /**
      */
    "minecraft:lit_furnace": ItemType
    /**
      */
    "minecraft:lit_pumpkin": ItemType
    /**
      */
    "minecraft:lit_redstone_lamp": ItemType
    /**
      */
    "minecraft:lit_redstone_ore": ItemType
    /**
      */
    "minecraft:lit_smoker": ItemType
    /**
      */
    "minecraft:llama_spawn_egg": ItemType
    /**
      */
    "minecraft:lodestone": ItemType
    /**
      */
    "minecraft:lodestone_compass": ItemType
    /**
      */
    "minecraft:log": ItemType
    /**
      */
    "minecraft:log2": ItemType
    /**
      */
    "minecraft:loom": ItemType
    /**
      */
    "minecraft:magenta_candle": ItemType
    /**
      */
    "minecraft:magenta_candle_cake": ItemType
    /**
      */
    "minecraft:magenta_dye": ItemType
    /**
      */
    "minecraft:magenta_glazed_terracotta": ItemType
    /**
      */
    "minecraft:magma": ItemType
    /**
      */
    "minecraft:magma_cream": ItemType
    /**
      */
    "minecraft:magma_cube_spawn_egg": ItemType
    /**
      */
    "minecraft:medicine": ItemType
    /**
      */
    "minecraft:medium_amethyst_bud": ItemType
    /**
      */
    "minecraft:melon_block": ItemType
    /**
      */
    "minecraft:melon_seeds": ItemType
    /**
      */
    "minecraft:melon_slice": ItemType
    /**
      */
    "minecraft:melon_stem": ItemType
    /**
      */
    "minecraft:milk_bucket": ItemType
    /**
      */
    "minecraft:minecart": ItemType
    /**
      */
    "minecraft:mob_spawner": ItemType
    /**
      */
    "minecraft:mojang_banner_pattern": ItemType
    /**
      */
    "minecraft:monster_egg": ItemType
    /**
      */
    "minecraft:mooshroom_spawn_egg": ItemType
    /**
      */
    "minecraft:moss_block": ItemType
    /**
      */
    "minecraft:moss_carpet": ItemType
    /**
      */
    "minecraft:mossy_cobblestone": ItemType
    /**
      */
    "minecraft:mossy_cobblestone_stairs": ItemType
    /**
      */
    "minecraft:mossy_stone_brick_stairs": ItemType
    /**
      */
    "minecraft:movingblock": ItemType
    /**
      */
    "minecraft:mule_spawn_egg": ItemType
    /**
      */
    "minecraft:mushroom_stew": ItemType
    /**
      */
    "minecraft:music_disc_11": ItemType
    /**
      */
    "minecraft:music_disc_13": ItemType
    /**
      */
    "minecraft:music_disc_blocks": ItemType
    /**
      */
    "minecraft:music_disc_cat": ItemType
    /**
      */
    "minecraft:music_disc_chirp": ItemType
    /**
      */
    "minecraft:music_disc_far": ItemType
    /**
      */
    "minecraft:music_disc_mall": ItemType
    /**
      */
    "minecraft:music_disc_mellohi": ItemType
    /**
      */
    "minecraft:music_disc_pigstep": ItemType
    /**
      */
    "minecraft:music_disc_stal": ItemType
    /**
      */
    "minecraft:music_disc_strad": ItemType
    /**
      */
    "minecraft:music_disc_wait": ItemType
    /**
      */
    "minecraft:music_disc_ward": ItemType
    /**
      */
    "minecraft:mutton": ItemType
    /**
      */
    "minecraft:mycelium": ItemType
    /**
      */
    "minecraft:name_tag": ItemType
    /**
      */
    "minecraft:nautilus_shell": ItemType
    /**
      */
    "minecraft:nether_brick": ItemType
    /**
      */
    "minecraft:nether_brick_fence": ItemType
    /**
      */
    "minecraft:nether_brick_stairs": ItemType
    /**
      */
    "minecraft:nether_gold_ore": ItemType
    /**
      */
    "minecraft:nether_sprouts": ItemType
    /**
      */
    "minecraft:nether_star": ItemType
    /**
      */
    "minecraft:nether_wart": ItemType
    /**
      */
    "minecraft:nether_wart_block": ItemType
    /**
      */
    "minecraft:netherbrick": ItemType
    /**
      */
    "minecraft:netherite_axe": ItemType
    /**
      */
    "minecraft:netherite_block": ItemType
    /**
      */
    "minecraft:netherite_boots": ItemType
    /**
      */
    "minecraft:netherite_chestplate": ItemType
    /**
      */
    "minecraft:netherite_helmet": ItemType
    /**
      */
    "minecraft:netherite_hoe": ItemType
    /**
      */
    "minecraft:netherite_ingot": ItemType
    /**
      */
    "minecraft:netherite_leggings": ItemType
    /**
      */
    "minecraft:netherite_pickaxe": ItemType
    /**
      */
    "minecraft:netherite_scrap": ItemType
    /**
      */
    "minecraft:netherite_shovel": ItemType
    /**
      */
    "minecraft:netherite_sword": ItemType
    /**
      */
    "minecraft:netherrack": ItemType
    /**
      */
    "minecraft:netherreactor": ItemType
    /**
      */
    "minecraft:normal_stone_stairs": ItemType
    /**
      */
    "minecraft:noteblock": ItemType
    /**
      */
    "minecraft:npc_spawn_egg": ItemType
    /**
      */
    "minecraft:oak_boat": ItemType
    /**
      */
    "minecraft:oak_sign": ItemType
    /**
      */
    "minecraft:oak_stairs": ItemType
    /**
      */
    "minecraft:observer": ItemType
    /**
      */
    "minecraft:obsidian": ItemType
    /**
      */
    "minecraft:ocelot_spawn_egg": ItemType
    /**
      */
    "minecraft:orange_candle": ItemType
    /**
      */
    "minecraft:orange_candle_cake": ItemType
    /**
      */
    "minecraft:orange_dye": ItemType
    /**
      */
    "minecraft:orange_glazed_terracotta": ItemType
    /**
      */
    "minecraft:oxidized_copper": ItemType
    /**
      */
    "minecraft:oxidized_cut_copper": ItemType
    /**
      */
    "minecraft:oxidized_cut_copper_slab": ItemType
    /**
      */
    "minecraft:oxidized_cut_copper_stairs": ItemType
    /**
      */
    "minecraft:oxidized_double_cut_copper_slab": ItemType
    /**
      */
    "minecraft:packed_ice": ItemType
    /**
      */
    "minecraft:painting": ItemType
    /**
      */
    "minecraft:panda_spawn_egg": ItemType
    /**
      */
    "minecraft:paper": ItemType
    /**
      */
    "minecraft:parrot_spawn_egg": ItemType
    /**
      */
    "minecraft:phantom_membrane": ItemType
    /**
      */
    "minecraft:phantom_spawn_egg": ItemType
    /**
      */
    "minecraft:pig_spawn_egg": ItemType
    /**
      */
    "minecraft:piglin_banner_pattern": ItemType
    /**
      */
    "minecraft:piglin_brute_spawn_egg": ItemType
    /**
      */
    "minecraft:piglin_spawn_egg": ItemType
    /**
      */
    "minecraft:pillager_spawn_egg": ItemType
    /**
      */
    "minecraft:pink_candle": ItemType
    /**
      */
    "minecraft:pink_candle_cake": ItemType
    /**
      */
    "minecraft:pink_dye": ItemType
    /**
      */
    "minecraft:pink_glazed_terracotta": ItemType
    /**
      */
    "minecraft:piston": ItemType
    /**
      */
    "minecraft:pistonarmcollision": ItemType
    /**
      */
    "minecraft:planks": ItemType
    /**
      */
    "minecraft:podzol": ItemType
    /**
      */
    "minecraft:pointed_dripstone": ItemType
    /**
      */
    "minecraft:poisonous_potato": ItemType
    /**
      */
    "minecraft:polar_bear_spawn_egg": ItemType
    /**
      */
    "minecraft:polished_andesite_stairs": ItemType
    /**
      */
    "minecraft:polished_basalt": ItemType
    /**
      */
    "minecraft:polished_blackstone": ItemType
    /**
      */
    "minecraft:polished_blackstone_brick_double_slab": ItemType
    /**
      */
    "minecraft:polished_blackstone_brick_slab": ItemType
    /**
      */
    "minecraft:polished_blackstone_brick_stairs": ItemType
    /**
      */
    "minecraft:polished_blackstone_brick_wall": ItemType
    /**
      */
    "minecraft:polished_blackstone_bricks": ItemType
    /**
      */
    "minecraft:polished_blackstone_button": ItemType
    /**
      */
    "minecraft:polished_blackstone_double_slab": ItemType
    /**
      */
    "minecraft:polished_blackstone_pressure_plate": ItemType
    /**
      */
    "minecraft:polished_blackstone_slab": ItemType
    /**
      */
    "minecraft:polished_blackstone_stairs": ItemType
    /**
      */
    "minecraft:polished_blackstone_wall": ItemType
    /**
      */
    "minecraft:polished_deepslate": ItemType
    /**
      */
    "minecraft:polished_deepslate_double_slab": ItemType
    /**
      */
    "minecraft:polished_deepslate_slab": ItemType
    /**
      */
    "minecraft:polished_deepslate_stairs": ItemType
    /**
      */
    "minecraft:polished_deepslate_wall": ItemType
    /**
      */
    "minecraft:polished_diorite_stairs": ItemType
    /**
      */
    "minecraft:polished_granite_stairs": ItemType
    /**
      */
    "minecraft:popped_chorus_fruit": ItemType
    /**
      */
    "minecraft:porkchop": ItemType
    /**
      */
    "minecraft:portal": ItemType
    /**
      */
    "minecraft:potato": ItemType
    /**
      */
    "minecraft:potatoes": ItemType
    /**
      */
    "minecraft:potion": ItemType
    /**
      */
    "minecraft:powder_snow": ItemType
    /**
      */
    "minecraft:powder_snow_bucket": ItemType
    /**
      */
    "minecraft:powered_comparator": ItemType
    /**
      */
    "minecraft:powered_repeater": ItemType
    /**
      */
    "minecraft:prismarine": ItemType
    /**
      */
    "minecraft:prismarine_bricks_stairs": ItemType
    /**
      */
    "minecraft:prismarine_crystals": ItemType
    /**
      */
    "minecraft:prismarine_shard": ItemType
    /**
      */
    "minecraft:prismarine_stairs": ItemType
    /**
      */
    "minecraft:pufferfish": ItemType
    /**
      */
    "minecraft:pufferfish_bucket": ItemType
    /**
      */
    "minecraft:pufferfish_spawn_egg": ItemType
    /**
      */
    "minecraft:pumpkin": ItemType
    /**
      */
    "minecraft:pumpkin_pie": ItemType
    /**
      */
    "minecraft:pumpkin_seeds": ItemType
    /**
      */
    "minecraft:pumpkin_stem": ItemType
    /**
      */
    "minecraft:purple_candle": ItemType
    /**
      */
    "minecraft:purple_candle_cake": ItemType
    /**
      */
    "minecraft:purple_dye": ItemType
    /**
      */
    "minecraft:purple_glazed_terracotta": ItemType
    /**
      */
    "minecraft:purpur_block": ItemType
    /**
      */
    "minecraft:purpur_stairs": ItemType
    /**
      */
    "minecraft:quartz": ItemType
    /**
      */
    "minecraft:quartz_block": ItemType
    /**
      */
    "minecraft:quartz_bricks": ItemType
    /**
      */
    "minecraft:quartz_ore": ItemType
    /**
      */
    "minecraft:quartz_stairs": ItemType
    /**
      */
    "minecraft:rabbit": ItemType
    /**
      */
    "minecraft:rabbit_foot": ItemType
    /**
      */
    "minecraft:rabbit_hide": ItemType
    /**
      */
    "minecraft:rabbit_spawn_egg": ItemType
    /**
      */
    "minecraft:rabbit_stew": ItemType
    /**
      */
    "minecraft:rail": ItemType
    /**
      */
    "minecraft:rapid_fertilizer": ItemType
    /**
      */
    "minecraft:ravager_spawn_egg": ItemType
    /**
      */
    "minecraft:raw_copper": ItemType
    /**
      */
    "minecraft:raw_copper_block": ItemType
    /**
      */
    "minecraft:raw_gold": ItemType
    /**
      */
    "minecraft:raw_gold_block": ItemType
    /**
      */
    "minecraft:raw_iron": ItemType
    /**
      */
    "minecraft:raw_iron_block": ItemType
    /**
      */
    "minecraft:real_double_stone_slab": ItemType
    /**
      */
    "minecraft:real_double_stone_slab2": ItemType
    /**
      */
    "minecraft:real_double_stone_slab3": ItemType
    /**
      */
    "minecraft:real_double_stone_slab4": ItemType
    /**
      */
    "minecraft:red_candle": ItemType
    /**
      */
    "minecraft:red_candle_cake": ItemType
    /**
      */
    "minecraft:red_dye": ItemType
    /**
      */
    "minecraft:red_flower": ItemType
    /**
      */
    "minecraft:red_glazed_terracotta": ItemType
    /**
      */
    "minecraft:red_mushroom": ItemType
    /**
      */
    "minecraft:red_mushroom_block": ItemType
    /**
      */
    "minecraft:red_nether_brick": ItemType
    /**
      */
    "minecraft:red_nether_brick_stairs": ItemType
    /**
      */
    "minecraft:red_sandstone": ItemType
    /**
      */
    "minecraft:red_sandstone_stairs": ItemType
    /**
      */
    "minecraft:redstone": ItemType
    /**
      */
    "minecraft:redstone_block": ItemType
    /**
      */
    "minecraft:redstone_lamp": ItemType
    /**
      */
    "minecraft:redstone_ore": ItemType
    /**
      */
    "minecraft:redstone_torch": ItemType
    /**
      */
    "minecraft:redstone_wire": ItemType
    /**
      */
    "minecraft:repeater": ItemType
    /**
      */
    "minecraft:repeating_command_block": ItemType
    /**
      */
    "minecraft:reserved6": ItemType
    /**
      */
    "minecraft:respawn_anchor": ItemType
    /**
      */
    "minecraft:rotten_flesh": ItemType
    /**
      */
    "minecraft:saddle": ItemType
    /**
      */
    "minecraft:salmon": ItemType
    /**
      */
    "minecraft:salmon_bucket": ItemType
    /**
      */
    "minecraft:salmon_spawn_egg": ItemType
    /**
      */
    "minecraft:sand": ItemType
    /**
      */
    "minecraft:sandstone": ItemType
    /**
      */
    "minecraft:sandstone_stairs": ItemType
    /**
      */
    "minecraft:sapling": ItemType
    /**
      */
    "minecraft:scaffolding": ItemType
    /**
      */
    "minecraft:sculk_sensor": ItemType
    /**
      */
    "minecraft:scute": ItemType
    /**
      */
    "minecraft:sea_pickle": ItemType
    /**
      */
    "minecraft:seagrass": ItemType
    /**
      */
    "minecraft:sealantern": ItemType
    /**
      */
    "minecraft:shears": ItemType
    /**
      */
    "minecraft:sheep_spawn_egg": ItemType
    /**
      */
    "minecraft:shield": ItemType
    /**
      */
    "minecraft:shroomlight": ItemType
    /**
      */
    "minecraft:shulker_box": ItemType
    /**
      */
    "minecraft:shulker_shell": ItemType
    /**
      */
    "minecraft:shulker_spawn_egg": ItemType
    /**
      */
    "minecraft:silver_glazed_terracotta": ItemType
    /**
      */
    "minecraft:silverfish_spawn_egg": ItemType
    /**
      */
    "minecraft:skeleton_horse_spawn_egg": ItemType
    /**
      */
    "minecraft:skeleton_spawn_egg": ItemType
    /**
      */
    "minecraft:skull": ItemType
    /**
      */
    "minecraft:skull_banner_pattern": ItemType
    /**
      */
    "minecraft:slime": ItemType
    /**
      */
    "minecraft:slime_ball": ItemType
    /**
      */
    "minecraft:slime_spawn_egg": ItemType
    /**
      */
    "minecraft:small_amethyst_bud": ItemType
    /**
      */
    "minecraft:small_dripleaf_block": ItemType
    /**
      */
    "minecraft:smithing_table": ItemType
    /**
      */
    "minecraft:smoker": ItemType
    /**
      */
    "minecraft:smooth_basalt": ItemType
    /**
      */
    "minecraft:smooth_quartz_stairs": ItemType
    /**
      */
    "minecraft:smooth_red_sandstone_stairs": ItemType
    /**
      */
    "minecraft:smooth_sandstone_stairs": ItemType
    /**
      */
    "minecraft:smooth_stone": ItemType
    /**
      */
    "minecraft:snow": ItemType
    /**
      */
    "minecraft:snow_layer": ItemType
    /**
      */
    "minecraft:snowball": ItemType
    /**
      */
    "minecraft:soul_campfire": ItemType
    /**
      */
    "minecraft:soul_fire": ItemType
    /**
      */
    "minecraft:soul_lantern": ItemType
    /**
      */
    "minecraft:soul_sand": ItemType
    /**
      */
    "minecraft:soul_soil": ItemType
    /**
      */
    "minecraft:soul_torch": ItemType
    /**
      */
    "minecraft:sparkler": ItemType
    /**
      */
    "minecraft:spawn_egg": ItemType
    /**
      */
    "minecraft:spider_eye": ItemType
    /**
      */
    "minecraft:spider_spawn_egg": ItemType
    /**
      */
    "minecraft:splash_potion": ItemType
    /**
      */
    "minecraft:sponge": ItemType
    /**
      */
    "minecraft:spore_blossom": ItemType
    /**
      */
    "minecraft:spruce_boat": ItemType
    /**
      */
    "minecraft:spruce_button": ItemType
    /**
      */
    "minecraft:spruce_door": ItemType
    /**
      */
    "minecraft:spruce_fence_gate": ItemType
    /**
      */
    "minecraft:spruce_pressure_plate": ItemType
    /**
      */
    "minecraft:spruce_sign": ItemType
    /**
      */
    "minecraft:spruce_stairs": ItemType
    /**
      */
    "minecraft:spruce_standing_sign": ItemType
    /**
      */
    "minecraft:spruce_trapdoor": ItemType
    /**
      */
    "minecraft:spruce_wall_sign": ItemType
    /**
      */
    "minecraft:spyglass": ItemType
    /**
      */
    "minecraft:squid_spawn_egg": ItemType
    /**
      */
    "minecraft:stained_glass": ItemType
    /**
      */
    "minecraft:stained_glass_pane": ItemType
    /**
      */
    "minecraft:stained_hardened_clay": ItemType
    /**
      */
    "minecraft:standing_banner": ItemType
    /**
      */
    "minecraft:standing_sign": ItemType
    /**
      */
    "minecraft:stick": ItemType
    /**
      */
    "minecraft:sticky_piston": ItemType
    /**
      */
    "minecraft:stickypistonarmcollision": ItemType
    /**
      */
    "minecraft:stone": ItemType
    /**
      */
    "minecraft:stone_axe": ItemType
    /**
      */
    "minecraft:stone_brick_stairs": ItemType
    /**
      */
    "minecraft:stone_button": ItemType
    /**
      */
    "minecraft:stone_hoe": ItemType
    /**
      */
    "minecraft:stone_pickaxe": ItemType
    /**
      */
    "minecraft:stone_pressure_plate": ItemType
    /**
      */
    "minecraft:stone_shovel": ItemType
    /**
      */
    "minecraft:stone_stairs": ItemType
    /**
      */
    "minecraft:stone_sword": ItemType
    /**
      */
    "minecraft:stonebrick": ItemType
    /**
      */
    "minecraft:stonecutter": ItemType
    /**
      */
    "minecraft:stonecutter_block": ItemType
    /**
      */
    "minecraft:stray_spawn_egg": ItemType
    /**
      */
    "minecraft:strider_spawn_egg": ItemType
    /**
      */
    "minecraft:string": ItemType
    /**
      */
    "minecraft:stripped_acacia_log": ItemType
    /**
      */
    "minecraft:stripped_birch_log": ItemType
    /**
      */
    "minecraft:stripped_crimson_hyphae": ItemType
    /**
      */
    "minecraft:stripped_crimson_stem": ItemType
    /**
      */
    "minecraft:stripped_dark_oak_log": ItemType
    /**
      */
    "minecraft:stripped_jungle_log": ItemType
    /**
      */
    "minecraft:stripped_oak_log": ItemType
    /**
      */
    "minecraft:stripped_spruce_log": ItemType
    /**
      */
    "minecraft:stripped_warped_hyphae": ItemType
    /**
      */
    "minecraft:stripped_warped_stem": ItemType
    /**
      */
    "minecraft:structure_block": ItemType
    /**
      */
    "minecraft:structure_void": ItemType
    /**
      */
    "minecraft:sugar": ItemType
    /**
      */
    "minecraft:sugar_cane": ItemType
    /**
      */
    "minecraft:suspicious_stew": ItemType
    /**
      */
    "minecraft:sweet_berries": ItemType
    /**
      */
    "minecraft:sweet_berry_bush": ItemType
    /**
      */
    "minecraft:tallgrass": ItemType
    /**
      */
    "minecraft:target": ItemType
    /**
      */
    "minecraft:tinted_glass": ItemType
    /**
      */
    "minecraft:tnt": ItemType
    /**
      */
    "minecraft:tnt_minecart": ItemType
    /**
      */
    "minecraft:torch": ItemType
    /**
      */
    "minecraft:totem_of_undying": ItemType
    /**
      */
    "minecraft:trapdoor": ItemType
    /**
      */
    "minecraft:trapped_chest": ItemType
    /**
      */
    "minecraft:trident": ItemType
    /**
      */
    "minecraft:tripwire": ItemType
    /**
      */
    "minecraft:tripwire_hook": ItemType
    /**
      */
    "minecraft:tropical_fish": ItemType
    /**
      */
    "minecraft:tropical_fish_bucket": ItemType
    /**
      */
    "minecraft:tropical_fish_spawn_egg": ItemType
    /**
      */
    "minecraft:tuff": ItemType
    /**
      */
    "minecraft:turtle_egg": ItemType
    /**
      */
    "minecraft:turtle_helmet": ItemType
    /**
      */
    "minecraft:turtle_spawn_egg": ItemType
    /**
      */
    "minecraft:twisting_vines": ItemType
    /**
      */
    "minecraft:underwater_torch": ItemType
    /**
      */
    "minecraft:undyed_shulker_box": ItemType
    /**
      */
    "minecraft:unknown": ItemType
    /**
      */
    "minecraft:unlit_redstone_torch": ItemType
    /**
      */
    "minecraft:unpowered_comparator": ItemType
    /**
      */
    "minecraft:unpowered_repeater": ItemType
    /**
      */
    "minecraft:vex_spawn_egg": ItemType
    /**
      */
    "minecraft:villager_spawn_egg": ItemType
    /**
      */
    "minecraft:vindicator_spawn_egg": ItemType
    /**
      */
    "minecraft:vine": ItemType
    /**
      */
    "minecraft:wall_banner": ItemType
    /**
      */
    "minecraft:wall_sign": ItemType
    /**
      */
    "minecraft:wandering_trader_spawn_egg": ItemType
    /**
      */
    "minecraft:warped_button": ItemType
    /**
      */
    "minecraft:warped_door": ItemType
    /**
      */
    "minecraft:warped_double_slab": ItemType
    /**
      */
    "minecraft:warped_fence": ItemType
    /**
      */
    "minecraft:warped_fence_gate": ItemType
    /**
      */
    "minecraft:warped_fungus": ItemType
    /**
      */
    "minecraft:warped_fungus_on_a_stick": ItemType
    /**
      */
    "minecraft:warped_hyphae": ItemType
    /**
      */
    "minecraft:warped_nylium": ItemType
    /**
      */
    "minecraft:warped_planks": ItemType
    /**
      */
    "minecraft:warped_pressure_plate": ItemType
    /**
      */
    "minecraft:warped_roots": ItemType
    /**
      */
    "minecraft:warped_sign": ItemType
    /**
      */
    "minecraft:warped_slab": ItemType
    /**
      */
    "minecraft:warped_stairs": ItemType
    /**
      */
    "minecraft:warped_standing_sign": ItemType
    /**
      */
    "minecraft:warped_stem": ItemType
    /**
      */
    "minecraft:warped_trapdoor": ItemType
    /**
      */
    "minecraft:warped_wall_sign": ItemType
    /**
      */
    "minecraft:warped_wart_block": ItemType
    /**
      */
    "minecraft:water": ItemType
    /**
      */
    "minecraft:water_bucket": ItemType
    /**
      */
    "minecraft:waterlily": ItemType
    /**
      */
    "minecraft:waxed_copper": ItemType
    /**
      */
    "minecraft:waxed_cut_copper": ItemType
    /**
      */
    "minecraft:waxed_cut_copper_slab": ItemType
    /**
      */
    "minecraft:waxed_cut_copper_stairs": ItemType
    /**
      */
    "minecraft:waxed_double_cut_copper_slab": ItemType
    /**
      */
    "minecraft:waxed_exposed_copper": ItemType
    /**
      */
    "minecraft:waxed_exposed_cut_copper": ItemType
    /**
      */
    "minecraft:waxed_exposed_cut_copper_slab": ItemType
    /**
      */
    "minecraft:waxed_exposed_cut_copper_stairs": ItemType
    /**
      */
    "minecraft:waxed_exposed_double_cut_copper_slab": ItemType
    /**
      */
    "minecraft:waxed_oxidized_copper": ItemType
    /**
      */
    "minecraft:waxed_oxidized_cut_copper": ItemType
    /**
      */
    "minecraft:waxed_oxidized_cut_copper_slab": ItemType
    /**
      */
    "minecraft:waxed_oxidized_cut_copper_stairs": ItemType
    /**
      */
    "minecraft:waxed_oxidized_double_cut_copper_slab": ItemType
    /**
      */
    "minecraft:waxed_weathered_copper": ItemType
    /**
      */
    "minecraft:waxed_weathered_cut_copper": ItemType
    /**
      */
    "minecraft:waxed_weathered_cut_copper_slab": ItemType
    /**
      */
    "minecraft:waxed_weathered_cut_copper_stairs": ItemType
    /**
      */
    "minecraft:waxed_weathered_double_cut_copper_slab": ItemType
    /**
      */
    "minecraft:weathered_copper": ItemType
    /**
      */
    "minecraft:weathered_cut_copper": ItemType
    /**
      */
    "minecraft:weathered_cut_copper_slab": ItemType
    /**
      */
    "minecraft:weathered_cut_copper_stairs": ItemType
    /**
      */
    "minecraft:weathered_double_cut_copper_slab": ItemType
    /**
      */
    "minecraft:web": ItemType
    /**
      */
    "minecraft:weeping_vines": ItemType
    /**
      */
    "minecraft:wheat": ItemType
    /**
      */
    "minecraft:wheat_seeds": ItemType
    /**
      */
    "minecraft:white_candle": ItemType
    /**
      */
    "minecraft:white_candle_cake": ItemType
    /**
      */
    "minecraft:white_dye": ItemType
    /**
      */
    "minecraft:white_glazed_terracotta": ItemType
    /**
      */
    "minecraft:witch_spawn_egg": ItemType
    /**
      */
    "minecraft:wither_rose": ItemType
    /**
      */
    "minecraft:wither_skeleton_spawn_egg": ItemType
    /**
      */
    "minecraft:wolf_spawn_egg": ItemType
    /**
      */
    "minecraft:wood": ItemType
    /**
      */
    "minecraft:wooden_axe": ItemType
    /**
      */
    "minecraft:wooden_button": ItemType
    /**
      */
    "minecraft:wooden_door": ItemType
    /**
      */
    "minecraft:wooden_hoe": ItemType
    /**
      */
    "minecraft:wooden_pickaxe": ItemType
    /**
      */
    "minecraft:wooden_pressure_plate": ItemType
    /**
      */
    "minecraft:wooden_shovel": ItemType
    /**
      */
    "minecraft:wooden_slab": ItemType
    /**
      */
    "minecraft:wooden_sword": ItemType
    /**
      */
    "minecraft:wool": ItemType
    /**
      */
    "minecraft:writable_book": ItemType
    /**
      */
    "minecraft:written_book": ItemType
    /**
      */
    "minecraft:yellow_candle": ItemType
    /**
      */
    "minecraft:yellow_candle_cake": ItemType
    /**
      */
    "minecraft:yellow_dye": ItemType
    /**
      */
    "minecraft:yellow_flower": ItemType
    /**
      */
    "minecraft:yellow_glazed_terracotta": ItemType
    /**
      */
    "minecraft:zoglin_spawn_egg": ItemType
    /**
      */
    "minecraft:zombie_horse_spawn_egg": ItemType
    /**
      */
    "minecraft:zombie_pigman_spawn_egg": ItemType
    /**
      */
    "minecraft:zombie_spawn_egg": ItemType
    /**
      */
    "minecraft:zombie_villager_spawn_egg": ItemType
    /**
      */
    "mobSpawner": ItemType
    /**
      */
    "mojangBannerPattern": ItemType
    /**
      */
    "monsterEgg": ItemType
    /**
      */
    "mooshroomSpawnEgg": ItemType
    /**
      */
    "mossBlock": ItemType
    /**
      */
    "mossCarpet": ItemType
    /**
      */
    "mossyCobblestone": ItemType
    /**
      */
    "mossyCobblestoneStairs": ItemType
    /**
      */
    "mossyStoneBrickStairs": ItemType
    /**
      */
    "movingblock": ItemType
    /**
      */
    "muleSpawnEgg": ItemType
    /**
      */
    "mushroomStew": ItemType
    /**
      */
    "musicDisc11": ItemType
    /**
      */
    "musicDisc13": ItemType
    /**
      */
    "musicDiscBlocks": ItemType
    /**
      */
    "musicDiscCat": ItemType
    /**
      */
    "musicDiscChirp": ItemType
    /**
      */
    "musicDiscFar": ItemType
    /**
      */
    "musicDiscMall": ItemType
    /**
      */
    "musicDiscMellohi": ItemType
    /**
      */
    "musicDiscPigstep": ItemType
    /**
      */
    "musicDiscStal": ItemType
    /**
      */
    "musicDiscStrad": ItemType
    /**
      */
    "musicDiscWait": ItemType
    /**
      */
    "musicDiscWard": ItemType
    /**
      */
    "mutton": ItemType
    /**
      */
    "mycelium": ItemType
    /**
      */
    "nameTag": ItemType
    /**
      */
    "nautilusShell": ItemType
    /**
      */
    "netherbrick": ItemType
    /**
      */
    "netherBrick": ItemType
    /**
      */
    "netherBrickFence": ItemType
    /**
      */
    "netherBrickStairs": ItemType
    /**
      */
    "netherGoldOre": ItemType
    /**
      */
    "netheriteAxe": ItemType
    /**
      */
    "netheriteBlock": ItemType
    /**
      */
    "netheriteBoots": ItemType
    /**
      */
    "netheriteChestplate": ItemType
    /**
      */
    "netheriteHelmet": ItemType
    /**
      */
    "netheriteHoe": ItemType
    /**
      */
    "netheriteIngot": ItemType
    /**
      */
    "netheriteLeggings": ItemType
    /**
      */
    "netheritePickaxe": ItemType
    /**
      */
    "netheriteScrap": ItemType
    /**
      */
    "netheriteShovel": ItemType
    /**
      */
    "netheriteSword": ItemType
    /**
      */
    "netherrack": ItemType
    /**
      */
    "netherreactor": ItemType
    /**
      */
    "netherSprouts": ItemType
    /**
      */
    "netherStar": ItemType
    /**
      */
    "netherWart": ItemType
    /**
      */
    "netherWartBlock": ItemType
    /**
      */
    "normalStoneStairs": ItemType
    /**
      */
    "noteblock": ItemType
    /**
      */
    "npcSpawnEgg": ItemType
    /**
      */
    "oakBoat": ItemType
    /**
      */
    "oakSign": ItemType
    /**
      */
    "oakStairs": ItemType
    /**
      */
    "observer": ItemType
    /**
      */
    "obsidian": ItemType
    /**
      */
    "ocelotSpawnEgg": ItemType
    /**
      */
    "orangeCandle": ItemType
    /**
      */
    "orangeCandleCake": ItemType
    /**
      */
    "orangeDye": ItemType
    /**
      */
    "orangeGlazedTerracotta": ItemType
    /**
      */
    "oxidizedCopper": ItemType
    /**
      */
    "oxidizedCutCopper": ItemType
    /**
      */
    "oxidizedCutCopperSlab": ItemType
    /**
      */
    "oxidizedCutCopperStairs": ItemType
    /**
      */
    "oxidizedDoubleCutCopperSlab": ItemType
    /**
      */
    "packedIce": ItemType
    /**
      */
    "painting": ItemType
    /**
      */
    "pandaSpawnEgg": ItemType
    /**
      */
    "paper": ItemType
    /**
      */
    "parrotSpawnEgg": ItemType
    /**
      */
    "phantomMembrane": ItemType
    /**
      */
    "phantomSpawnEgg": ItemType
    /**
      */
    "piglinBannerPattern": ItemType
    /**
      */
    "piglinBruteSpawnEgg": ItemType
    /**
      */
    "piglinSpawnEgg": ItemType
    /**
      */
    "pigSpawnEgg": ItemType
    /**
      */
    "pillagerSpawnEgg": ItemType
    /**
      */
    "pinkCandle": ItemType
    /**
      */
    "pinkCandleCake": ItemType
    /**
      */
    "pinkDye": ItemType
    /**
      */
    "pinkGlazedTerracotta": ItemType
    /**
      */
    "piston": ItemType
    /**
      */
    "pistonarmcollision": ItemType
    /**
      */
    "planks": ItemType
    /**
      */
    "podzol": ItemType
    /**
      */
    "pointedDripstone": ItemType
    /**
      */
    "poisonousPotato": ItemType
    /**
      */
    "polarBearSpawnEgg": ItemType
    /**
      */
    "polishedAndesiteStairs": ItemType
    /**
      */
    "polishedBasalt": ItemType
    /**
      */
    "polishedBlackstone": ItemType
    /**
      */
    "polishedBlackstoneBrickDoubleSlab": ItemType
    /**
      */
    "polishedBlackstoneBricks": ItemType
    /**
      */
    "polishedBlackstoneBrickSlab": ItemType
    /**
      */
    "polishedBlackstoneBrickStairs": ItemType
    /**
      */
    "polishedBlackstoneBrickWall": ItemType
    /**
      */
    "polishedBlackstoneButton": ItemType
    /**
      */
    "polishedBlackstoneDoubleSlab": ItemType
    /**
      */
    "polishedBlackstonePressurePlate": ItemType
    /**
      */
    "polishedBlackstoneSlab": ItemType
    /**
      */
    "polishedBlackstoneStairs": ItemType
    /**
      */
    "polishedBlackstoneWall": ItemType
    /**
      */
    "polishedDeepslate": ItemType
    /**
      */
    "polishedDeepslateDoubleSlab": ItemType
    /**
      */
    "polishedDeepslateSlab": ItemType
    /**
      */
    "polishedDeepslateStairs": ItemType
    /**
      */
    "polishedDeepslateWall": ItemType
    /**
      */
    "polishedDioriteStairs": ItemType
    /**
      */
    "polishedGraniteStairs": ItemType
    /**
      */
    "poppedChorusFruit": ItemType
    /**
      */
    "porkchop": ItemType
    /**
      */
    "portal": ItemType
    /**
      */
    "potato": ItemType
    /**
      */
    "potatoes": ItemType
    /**
      */
    "potion": ItemType
    /**
      */
    "powderSnow": ItemType
    /**
      */
    "powderSnowBucket": ItemType
    /**
      */
    "poweredComparator": ItemType
    /**
      */
    "poweredRepeater": ItemType
    /**
      */
    "prismarine": ItemType
    /**
      */
    "prismarineBricksStairs": ItemType
    /**
      */
    "prismarineCrystals": ItemType
    /**
      */
    "prismarineShard": ItemType
    /**
      */
    "prismarineStairs": ItemType
    /**
      */
    "pufferfish": ItemType
    /**
      */
    "pufferfishBucket": ItemType
    /**
      */
    "pufferfishSpawnEgg": ItemType
    /**
      */
    "pumpkin": ItemType
    /**
      */
    "pumpkinPie": ItemType
    /**
      */
    "pumpkinSeeds": ItemType
    /**
      */
    "pumpkinStem": ItemType
    /**
      */
    "purpleCandle": ItemType
    /**
      */
    "purpleCandleCake": ItemType
    /**
      */
    "purpleDye": ItemType
    /**
      */
    "purpleGlazedTerracotta": ItemType
    /**
      */
    "purpurBlock": ItemType
    /**
      */
    "purpurStairs": ItemType
    /**
      */
    "quartz": ItemType
    /**
      */
    "quartzBlock": ItemType
    /**
      */
    "quartzBricks": ItemType
    /**
      */
    "quartzOre": ItemType
    /**
      */
    "quartzStairs": ItemType
    /**
      */
    "rabbit": ItemType
    /**
      */
    "rabbitFoot": ItemType
    /**
      */
    "rabbitHide": ItemType
    /**
      */
    "rabbitSpawnEgg": ItemType
    /**
      */
    "rabbitStew": ItemType
    /**
      */
    "rail": ItemType
    /**
      */
    "rapidFertilizer": ItemType
    /**
      */
    "ravagerSpawnEgg": ItemType
    /**
      */
    "rawCopper": ItemType
    /**
      */
    "rawCopperBlock": ItemType
    /**
      */
    "rawGold": ItemType
    /**
      */
    "rawGoldBlock": ItemType
    /**
      */
    "rawIron": ItemType
    /**
      */
    "rawIronBlock": ItemType
    /**
      */
    "realDoubleStoneSlab": ItemType
    /**
      */
    "realDoubleStoneSlab2": ItemType
    /**
      */
    "realDoubleStoneSlab3": ItemType
    /**
      */
    "realDoubleStoneSlab4": ItemType
    /**
      */
    "redCandle": ItemType
    /**
      */
    "redCandleCake": ItemType
    /**
      */
    "redDye": ItemType
    /**
      */
    "redFlower": ItemType
    /**
      */
    "redGlazedTerracotta": ItemType
    /**
      */
    "redMushroom": ItemType
    /**
      */
    "redMushroomBlock": ItemType
    /**
      */
    "redNetherBrick": ItemType
    /**
      */
    "redNetherBrickStairs": ItemType
    /**
      */
    "redSandstone": ItemType
    /**
      */
    "redSandstoneStairs": ItemType
    /**
      */
    "redstone": ItemType
    /**
      */
    "redstoneBlock": ItemType
    /**
      */
    "redstoneLamp": ItemType
    /**
      */
    "redstoneOre": ItemType
    /**
      */
    "redstoneTorch": ItemType
    /**
      */
    "redstoneWire": ItemType
    /**
      */
    "repeater": ItemType
    /**
      */
    "repeatingCommandBlock": ItemType
    /**
      */
    "reserved6": ItemType
    /**
      */
    "respawnAnchor": ItemType
    /**
      */
    "rottenFlesh": ItemType
    /**
      */
    "saddle": ItemType
    /**
      */
    "salmon": ItemType
    /**
      */
    "salmonBucket": ItemType
    /**
      */
    "salmonSpawnEgg": ItemType
    /**
      */
    "sand": ItemType
    /**
      */
    "sandstone": ItemType
    /**
      */
    "sandstoneStairs": ItemType
    /**
      */
    "sapling": ItemType
    /**
      */
    "scaffolding": ItemType
    /**
      */
    "sculkSensor": ItemType
    /**
      */
    "scute": ItemType
    /**
      */
    "seagrass": ItemType
    /**
      */
    "sealantern": ItemType
    /**
      */
    "seaPickle": ItemType
    /**
      */
    "shears": ItemType
    /**
      */
    "sheepSpawnEgg": ItemType
    /**
      */
    "shield": ItemType
    /**
      */
    "shroomlight": ItemType
    /**
      */
    "shulkerBox": ItemType
    /**
      */
    "shulkerShell": ItemType
    /**
      */
    "shulkerSpawnEgg": ItemType
    /**
      */
    "silverfishSpawnEgg": ItemType
    /**
      */
    "silverGlazedTerracotta": ItemType
    /**
      */
    "skeletonHorseSpawnEgg": ItemType
    /**
      */
    "skeletonSpawnEgg": ItemType
    /**
      */
    "skull": ItemType
    /**
      */
    "skullBannerPattern": ItemType
    /**
      */
    "slime": ItemType
    /**
      */
    "slimeBall": ItemType
    /**
      */
    "slimeSpawnEgg": ItemType
    /**
      */
    "smallAmethystBud": ItemType
    /**
      */
    "smallDripleafBlock": ItemType
    /**
      */
    "smithingTable": ItemType
    /**
      */
    "smoker": ItemType
    /**
      */
    "smoothBasalt": ItemType
    /**
      */
    "smoothQuartzStairs": ItemType
    /**
      */
    "smoothRedSandstoneStairs": ItemType
    /**
      */
    "smoothSandstoneStairs": ItemType
    /**
      */
    "smoothStone": ItemType
    /**
      */
    "snow": ItemType
    /**
      */
    "snowball": ItemType
    /**
      */
    "snowLayer": ItemType
    /**
      */
    "soulCampfire": ItemType
    /**
      */
    "soulFire": ItemType
    /**
      */
    "soulLantern": ItemType
    /**
      */
    "soulSand": ItemType
    /**
      */
    "soulSoil": ItemType
    /**
      */
    "soulTorch": ItemType
    /**
      */
    "sparkler": ItemType
    /**
      */
    "spawnEgg": ItemType
    /**
      */
    "spiderEye": ItemType
    /**
      */
    "spiderSpawnEgg": ItemType
    /**
      */
    "splashPotion": ItemType
    /**
      */
    "sponge": ItemType
    /**
      */
    "sporeBlossom": ItemType
    /**
      */
    "spruceBoat": ItemType
    /**
      */
    "spruceButton": ItemType
    /**
      */
    "spruceDoor": ItemType
    /**
      */
    "spruceFenceGate": ItemType
    /**
      */
    "sprucePressurePlate": ItemType
    /**
      */
    "spruceSign": ItemType
    /**
      */
    "spruceStairs": ItemType
    /**
      */
    "spruceStandingSign": ItemType
    /**
      */
    "spruceTrapdoor": ItemType
    /**
      */
    "spruceWallSign": ItemType
    /**
      */
    "spyglass": ItemType
    /**
      */
    "squidSpawnEgg": ItemType
    /**
      */
    "stainedGlass": ItemType
    /**
      */
    "stainedGlassPane": ItemType
    /**
      */
    "stainedHardenedClay": ItemType
    /**
      */
    "standingBanner": ItemType
    /**
      */
    "standingSign": ItemType
    /**
      */
    "stick": ItemType
    /**
      */
    "stickyPiston": ItemType
    /**
      */
    "stickypistonarmcollision": ItemType
    /**
      */
    "stone": ItemType
    /**
      */
    "stoneAxe": ItemType
    /**
      */
    "stonebrick": ItemType
    /**
      */
    "stoneBrickStairs": ItemType
    /**
      */
    "stoneButton": ItemType
    /**
      */
    "stonecutter": ItemType
    /**
      */
    "stonecutterBlock": ItemType
    /**
      */
    "stoneHoe": ItemType
    /**
      */
    "stonePickaxe": ItemType
    /**
      */
    "stonePressurePlate": ItemType
    /**
      */
    "stoneShovel": ItemType
    /**
      */
    "stoneStairs": ItemType
    /**
      */
    "stoneSword": ItemType
    /**
      */
    "straySpawnEgg": ItemType
    /**
      */
    "striderSpawnEgg": ItemType
    /**
      */
    "string": ItemType
    /**
      */
    "strippedAcaciaLog": ItemType
    /**
      */
    "strippedBirchLog": ItemType
    /**
      */
    "strippedCrimsonHyphae": ItemType
    /**
      */
    "strippedCrimsonStem": ItemType
    /**
      */
    "strippedDarkOakLog": ItemType
    /**
      */
    "strippedJungleLog": ItemType
    /**
      */
    "strippedOakLog": ItemType
    /**
      */
    "strippedSpruceLog": ItemType
    /**
      */
    "strippedWarpedHyphae": ItemType
    /**
      */
    "strippedWarpedStem": ItemType
    /**
      */
    "structureBlock": ItemType
    /**
      */
    "structureVoid": ItemType
    /**
      */
    "sugar": ItemType
    /**
      */
    "sugarCane": ItemType
    /**
      */
    "suspiciousStew": ItemType
    /**
      */
    "sweetBerries": ItemType
    /**
      */
    "sweetBerryBush": ItemType
    /**
      */
    "tallgrass": ItemType
    /**
      */
    "target": ItemType
    /**
      */
    "tintedGlass": ItemType
    /**
      */
    "tnt": ItemType
    /**
      */
    "tntMinecart": ItemType
    /**
      */
    "torch": ItemType
    /**
      */
    "totemOfUndying": ItemType
    /**
      */
    "trapdoor": ItemType
    /**
      */
    "trappedChest": ItemType
    /**
      */
    "trident": ItemType
    /**
      */
    "tripwire": ItemType
    /**
      */
    "tripwireHook": ItemType
    /**
      */
    "tropicalFish": ItemType
    /**
      */
    "tropicalFishBucket": ItemType
    /**
      */
    "tropicalFishSpawnEgg": ItemType
    /**
      */
    "tuff": ItemType
    /**
      */
    "turtleEgg": ItemType
    /**
      */
    "turtleHelmet": ItemType
    /**
      */
    "turtleSpawnEgg": ItemType
    /**
      */
    "twistingVines": ItemType
    /**
      */
    "underwaterTorch": ItemType
    /**
      */
    "undyedShulkerBox": ItemType
    /**
      */
    "unknown": ItemType
    /**
      */
    "unlitRedstoneTorch": ItemType
    /**
      */
    "unpoweredComparator": ItemType
    /**
      */
    "unpoweredRepeater": ItemType
    /**
      */
    "vexSpawnEgg": ItemType
    /**
      */
    "villagerSpawnEgg": ItemType
    /**
      */
    "vindicatorSpawnEgg": ItemType
    /**
      */
    "vine": ItemType
    /**
      */
    "wallBanner": ItemType
    /**
      */
    "wallSign": ItemType
    /**
      */
    "wanderingTraderSpawnEgg": ItemType
    /**
      */
    "warpedButton": ItemType
    /**
      */
    "warpedDoor": ItemType
    /**
      */
    "warpedDoubleSlab": ItemType
    /**
      */
    "warpedFence": ItemType
    /**
      */
    "warpedFenceGate": ItemType
    /**
      */
    "warpedFungus": ItemType
    /**
      */
    "warpedFungusOnAStick": ItemType
    /**
      */
    "warpedHyphae": ItemType
    /**
      */
    "warpedNylium": ItemType
    /**
      */
    "warpedPlanks": ItemType
    /**
      */
    "warpedPressurePlate": ItemType
    /**
      */
    "warpedRoots": ItemType
    /**
      */
    "warpedSign": ItemType
    /**
      */
    "warpedSlab": ItemType
    /**
      */
    "warpedStairs": ItemType
    /**
      */
    "warpedStandingSign": ItemType
    /**
      */
    "warpedStem": ItemType
    /**
      */
    "warpedTrapdoor": ItemType
    /**
      */
    "warpedWallSign": ItemType
    /**
      */
    "warpedWartBlock": ItemType
    /**
      */
    "water": ItemType
    /**
      */
    "waterBucket": ItemType
    /**
      */
    "waterlily": ItemType
    /**
      */
    "waxedCopper": ItemType
    /**
      */
    "waxedCutCopper": ItemType
    /**
      */
    "waxedCutCopperSlab": ItemType
    /**
      */
    "waxedCutCopperStairs": ItemType
    /**
      */
    "waxedDoubleCutCopperSlab": ItemType
    /**
      */
    "waxedExposedCopper": ItemType
    /**
      */
    "waxedExposedCutCopper": ItemType
    /**
      */
    "waxedExposedCutCopperSlab": ItemType
    /**
      */
    "waxedExposedCutCopperStairs": ItemType
    /**
      */
    "waxedExposedDoubleCutCopperSlab": ItemType
    /**
      */
    "waxedOxidizedCopper": ItemType
    /**
      */
    "waxedOxidizedCutCopper": ItemType
    /**
      */
    "waxedOxidizedCutCopperSlab": ItemType
    /**
      */
    "waxedOxidizedCutCopperStairs": ItemType
    /**
      */
    "waxedOxidizedDoubleCutCopperSlab": ItemType
    /**
      */
    "waxedWeatheredCopper": ItemType
    /**
      */
    "waxedWeatheredCutCopper": ItemType
    /**
      */
    "waxedWeatheredCutCopperSlab": ItemType
    /**
      */
    "waxedWeatheredCutCopperStairs": ItemType
    /**
      */
    "waxedWeatheredDoubleCutCopperSlab": ItemType
    /**
      */
    "weatheredCopper": ItemType
    /**
      */
    "weatheredCutCopper": ItemType
    /**
      */
    "weatheredCutCopperSlab": ItemType
    /**
      */
    "weatheredCutCopperStairs": ItemType
    /**
      */
    "weatheredDoubleCutCopperSlab": ItemType
    /**
      */
    "web": ItemType
    /**
      */
    "weepingVines": ItemType
    /**
      */
    "wheat": ItemType
    /**
      */
    "wheatSeeds": ItemType
    /**
      */
    "whiteCandle": ItemType
    /**
      */
    "whiteCandleCake": ItemType
    /**
      */
    "whiteDye": ItemType
    /**
      */
    "whiteGlazedTerracotta": ItemType
    /**
      */
    "witchSpawnEgg": ItemType
    /**
      */
    "witherRose": ItemType
    /**
      */
    "witherSkeletonSpawnEgg": ItemType
    /**
      */
    "wolfSpawnEgg": ItemType
    /**
      */
    "wood": ItemType
    /**
      */
    "woodenAxe": ItemType
    /**
      */
    "woodenButton": ItemType
    /**
      */
    "woodenDoor": ItemType
    /**
      */
    "woodenHoe": ItemType
    /**
      */
    "woodenPickaxe": ItemType
    /**
      */
    "woodenPressurePlate": ItemType
    /**
      */
    "woodenShovel": ItemType
    /**
      */
    "woodenSlab": ItemType
    /**
      */
    "woodenSword": ItemType
    /**
      */
    "wool": ItemType
    /**
      */
    "writableBook": ItemType
    /**
      */
    "writtenBook": ItemType
    /**
      */
    "yellowCandle": ItemType
    /**
      */
    "yellowCandleCake": ItemType
    /**
      */
    "yellowDye": ItemType
    /**
      */
    "yellowFlower": ItemType
    /**
      */
    "yellowGlazedTerracotta": ItemType
    /**
      */
    "zoglinSpawnEgg": ItemType
    /**
      */
    "zombieHorseSpawnEgg": ItemType
    /**
      */
    "zombiePigmanSpawnEgg": ItemType
    /**
      */
    "zombieSpawnEgg": ItemType
    /**
      */
    "zombieVillagerSpawnEgg": ItemType
    
  }
  
  /** 
    * Defines a collection of items.
    * @public
    */
  export class ItemStack {
    /**
      * Number of the items in the stack. Valid values range between 0 and 64.
      */
    "amount": number
    /**
      * A data value used to configure alternate states of the item.
      */
    "data": number
    /**
      * Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.
      */
    "id": string
    
  /**
    *
    * @param itemType 
    * @param amount 
    * @param data 
    *
    *
    */
  constructor(itemType: ItemType, amount: number, data: number);
  }
  
  /** 
    * Represents the type of an item - for example, Wool.
    * @public
    */
  export class ItemType {
    
  /**
    * @remarks
    * Returns the identifier of the item type - for example, 'apple'.
    *
    *
    * @returns Identifier of the item type.
    *
    */
  getName(): string;
  }
  
  /** 
    * Defines the base movement speed in lava of this entity.
    * @public
    */
  export class LavaMovement {
    /**
      * Read-only. Returns the current value of movement speed on lava for the entity.
      * @throws This property can throw when used.
      */
    "current": number
    /**
      * Identifier of this component. Should always be minecraft:lava_movement.
      */
    "id": string
    /**
      * Value for movement speed on lava as defined through entity components.
      * @throws This property can throw when used.
      */
    "value": number
    
  /**
    * @remarks
    * Resets the current movement speed on lava for the entity to its default value.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToDefaultValue(): void;
  /**
    * @remarks
    * Resets the movement speed on lava to the maximum value for the entity.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToMaxValue(): void;
  /**
    * @remarks
    * Resets the movement speed on lava speed to the minimum value.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToMinValue(): void;
  /**
    * @remarks
    * Sets the current value of movement speed on lava for the entity.
    *
    *
    *
    * @throws This function can throw errors.
    */
  setCurrent(): void;
  }
  
  /** 
    * Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.
    * @public
    */
  export class Leashable {
    /**
      * Identifier of this component. Should always be minecraft:leashable.
      */
    "id": string
    /**
      * Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.
      * @throws This property can throw when used.
      */
    "softDistance": number
    
  /**
    * @remarks
    * Leashes this entity to another entity.
    *
    * @param leashHolder The entity to leash this entity to.
    *
    *
    * @throws This function can throw errors.
    */
  leash(leashHolder: Entity): void;
  /**
    * @remarks
    * Unleashes this entity if it is leashed to another entity.
    *
    *
    *
    * @throws This function can throw errors.
    */
  unleash(): void;
  }
  
  /** 
    * Contains a location description that is useful for entities and other items. X, Y, and Z can contain decimal fractions. For integer-based locations useful for blocks, see {@link Minecraft.BlockLocation}.
    * @public
    */
  export class Location {
    /**
      * X component of this location.
      */
    "x": number
    /**
      * Y component of this location.
      */
    "y": number
    /**
      * Z component of this location.
      */
    "z": number
    
  /**
    *
    * @param x 
    * @param y 
    * @param z 
    *
    *
    */
  constructor(x: number, y: number, z: number);
  /**
    * @remarks
    * Compares this Location and another Location to one another.
    *
    * @param other Other location to compare this Location to.
    *
    * @returns True if the two locations are equal.
    *
    */
  equals(other: Location): boolean;
  /**
    *
    * @param other 
    * @param epsilon 
    *
    *
    */
  isNear(other: Location, epsilon: number): boolean;
  }
  
  /** 
    * Contains options for taming a rideable entity based on the entity that mounts it.
    * @public
    */
  export class MountTaming {
    /**
      * Identifier of this component. Should always be minecraft:mount_taming.
      */
    "id": string
    
  /**
    * @remarks
    * Sets this rideable entity as tamed.
    *
    * @param showParticles Whether to show effect particles when this entity is tamed.
    *
    *
    * @throws This function can throw errors.
    */
  setTamed(showParticles: boolean): void;
  }
  
  /** 
    * Defines the general movement speed of this entity.
    * @public
    */
  export class Movement {
    /**
      * Read-only. Returns the current value of default movement speed for the entity.
      * @throws This property can throw when used.
      */
    "current": number
    /**
      * Identifier of this component. Should always be minecraft:movement.
      */
    "id": string
    /**
      * Value for default movement speed as defined through entity components.
      * @throws This property can throw when used.
      */
    "value": number
    
  /**
    * @remarks
    * Resets the current default movement speed value for the entity to the default value.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToDefaultValue(): void;
  /**
    * @remarks
    * Resets the default movement speed to the maximum value for the entity.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToMaxValue(): void;
  /**
    * @remarks
    * Resets the default movement speed to the minimum value.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToMinValue(): void;
  /**
    * @remarks
    * Sets the current value of default movement speed for the entity.
    *
    *
    *
    * @throws This function can throw errors.
    */
  setCurrent(): void;
  }
  
  /** 
    * When added, this movement control allows the mob to swim in water and walk on land.
    * @public
    */
  export class MovementAmphibious {
    /**
      * Identifier of this component. Should always be minecraft:movement.amphibious.
      */
    "id": string
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @throws This property can throw when used.
      */
    "maxTurn": number
    
  }
  
  /** 
    * This component accents the movement of an entity.
    * @public
    */
  export class MovementBasic {
    /**
      * Identifier of this component. Should always be minecraft:movement.basic.
      */
    "id": string
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @throws This property can throw when used.
      */
    "maxTurn": number
    
  }
  
  /** 
    * When added, this move control causes the mob to fly.
    * @public
    */
  export class MovementFly {
    /**
      * Identifier of this component. Should always be minecraft:movement.fly.
      */
    "id": string
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @throws This property can throw when used.
      */
    "maxTurn": number
    
  }
  
  /** 
    * When added, this move control allows a mob to fly, swim, climb, etc.
    * @public
    */
  export class MovementGeneric {
    /**
      * Identifier of this component. Should always be minecraft:movement.generic.
      */
    "id": string
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @throws This property can throw when used.
      */
    "maxTurn": number
    
  }
  
  /** 
    * When added, this movement control allows the mob to glide.
    * @public
    */
  export class MovementGlide {
    /**
      * Identifier of this component. Should always be minecraft:movement.glide.
      */
    "id": string
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @throws This property can throw when used.
      */
    "maxTurn": number
    /**
      * Speed in effect when the entity is turning.
      * @throws This property can throw when used.
      */
    "speedWhenTurning": number
    /**
      * Start speed during a glide.
      * @throws This property can throw when used.
      */
    "startSpeed": number
    
  }
  
  /** 
    * When added, this move control causes the mob to hover.
    * @public
    */
  export class MovementHover {
    /**
      * Identifier of this component. Should always be minecraft:movement.hover.
      */
    "id": string
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @throws This property can throw when used.
      */
    "maxTurn": number
    
  }
  
  /** 
    * Move control that causes the mob to jump as it moves with a specified delay between jumps.
    * @public
    */
  export class MovementJump {
    /**
      * Identifier of this component. Should always be minecraft:movement.jump.
      */
    "id": string
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @throws This property can throw when used.
      */
    "maxTurn": number
    
  }
  
  /** 
    * When added, this move control causes the mob to hop as it moves.
    * @public
    */
  export class MovementSkip {
    /**
      * Identifier of this component. Should always be minecraft:movement.skip.
      */
    "id": string
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @throws This property can throw when used.
      */
    "maxTurn": number
    
  }
  
  /** 
    * When added, this move control causes the mob to sway side to side giving the impression it is swimming.
    * @public
    */
  export class MovementSway {
    /**
      * Identifier of this component. Should always be minecraft:movement.sway.
      */
    "id": string
    /**
      * The maximum number in degrees the mob can turn per tick.
      * @throws This property can throw when used.
      */
    "maxTurn": number
    /**
      * Amplitude of the sway motion.
      * @throws This property can throw when used.
      */
    "swayAmplitude": number
    /**
      * Amount of sway frequency.
      * @throws This property can throw when used.
      */
    "swayFrequency": number
    
  }
  
  /** 
    * Allows this entity to generate paths that include vertical walls (for example, like Minecraft spiders do.)
    * @public
    */
  export class NavigationClimb {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @throws This property can throw when used.
      */
    "avoidDamageBlocks": boolean
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @throws This property can throw when used.
      */
    "avoidPortals": boolean
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @throws This property can throw when used.
      */
    "avoidSun": boolean
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @throws This property can throw when used.
      */
    "avoidWater": boolean
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @throws This property can throw when used.
      */
    "canBreach": boolean
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @throws This property can throw when used.
      */
    "canBreakDoors": boolean
    /**
      * Tells the pathfinder whether or not it can float.
      * @throws This property can throw when used.
      */
    "canFloat": boolean
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @throws This property can throw when used.
      */
    "canJump": boolean
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenDoors": boolean
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenIronDoors": boolean
    /**
      * Whether a path can be created through a door.
      * @throws This property can throw when used.
      */
    "canPassDoors": boolean
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @throws This property can throw when used.
      */
    "canPathFromAir": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @throws This property can throw when used.
      */
    "canPathOverLava": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @throws This property can throw when used.
      */
    "canPathOverWater": boolean
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @throws This property can throw when used.
      */
    "canSink": boolean
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @throws This property can throw when used.
      */
    "canSwim": boolean
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @throws This property can throw when used.
      */
    "canWalk": boolean
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @throws This property can throw when used.
      */
    "canWalkInLava": boolean
    /**
      * Identifier of this component. Should always be minecraft:navigation.climb.
      */
    "id": string
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @throws This property can throw when used.
      */
    "isAmphibious": boolean
    
  }
  
  /** 
    * Allows this entity to generate paths by flying around the air like the regular Ghast.
    * @public
    */
  export class NavigationFloat {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @throws This property can throw when used.
      */
    "avoidDamageBlocks": boolean
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @throws This property can throw when used.
      */
    "avoidPortals": boolean
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @throws This property can throw when used.
      */
    "avoidSun": boolean
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @throws This property can throw when used.
      */
    "avoidWater": boolean
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @throws This property can throw when used.
      */
    "canBreach": boolean
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @throws This property can throw when used.
      */
    "canBreakDoors": boolean
    /**
      * Tells the pathfinder whether or not it can float.
      * @throws This property can throw when used.
      */
    "canFloat": boolean
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @throws This property can throw when used.
      */
    "canJump": boolean
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenDoors": boolean
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenIronDoors": boolean
    /**
      * Whether a path can be created through a door.
      * @throws This property can throw when used.
      */
    "canPassDoors": boolean
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @throws This property can throw when used.
      */
    "canPathFromAir": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @throws This property can throw when used.
      */
    "canPathOverLava": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @throws This property can throw when used.
      */
    "canPathOverWater": boolean
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @throws This property can throw when used.
      */
    "canSink": boolean
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @throws This property can throw when used.
      */
    "canSwim": boolean
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @throws This property can throw when used.
      */
    "canWalk": boolean
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @throws This property can throw when used.
      */
    "canWalkInLava": boolean
    /**
      * Identifier of this component. Should always be minecraft:navigation.float.
      */
    "id": string
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @throws This property can throw when used.
      */
    "isAmphibious": boolean
    
  }
  
  /** 
    * Allows this entity to generate paths in the air (for example, like Minecraft Parrots do.)
    * @public
    */
  export class NavigationFly {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @throws This property can throw when used.
      */
    "avoidDamageBlocks": boolean
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @throws This property can throw when used.
      */
    "avoidPortals": boolean
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @throws This property can throw when used.
      */
    "avoidSun": boolean
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @throws This property can throw when used.
      */
    "avoidWater": boolean
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @throws This property can throw when used.
      */
    "canBreach": boolean
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @throws This property can throw when used.
      */
    "canBreakDoors": boolean
    /**
      * Tells the pathfinder whether or not it can float.
      * @throws This property can throw when used.
      */
    "canFloat": boolean
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @throws This property can throw when used.
      */
    "canJump": boolean
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenDoors": boolean
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenIronDoors": boolean
    /**
      * Whether a path can be created through a door.
      * @throws This property can throw when used.
      */
    "canPassDoors": boolean
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @throws This property can throw when used.
      */
    "canPathFromAir": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @throws This property can throw when used.
      */
    "canPathOverLava": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @throws This property can throw when used.
      */
    "canPathOverWater": boolean
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @throws This property can throw when used.
      */
    "canSink": boolean
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @throws This property can throw when used.
      */
    "canSwim": boolean
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @throws This property can throw when used.
      */
    "canWalk": boolean
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @throws This property can throw when used.
      */
    "canWalkInLava": boolean
    /**
      * Identifier of this component. Should always be minecraft:navigation.fly.
      */
    "id": string
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @throws This property can throw when used.
      */
    "isAmphibious": boolean
    
  }
  
  /** 
    * Allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block.
    * @public
    */
  export class NavigationGeneric {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @throws This property can throw when used.
      */
    "avoidDamageBlocks": boolean
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @throws This property can throw when used.
      */
    "avoidPortals": boolean
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @throws This property can throw when used.
      */
    "avoidSun": boolean
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @throws This property can throw when used.
      */
    "avoidWater": boolean
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @throws This property can throw when used.
      */
    "canBreach": boolean
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @throws This property can throw when used.
      */
    "canBreakDoors": boolean
    /**
      * Tells the pathfinder whether or not it can float.
      * @throws This property can throw when used.
      */
    "canFloat": boolean
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @throws This property can throw when used.
      */
    "canJump": boolean
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenDoors": boolean
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenIronDoors": boolean
    /**
      * Whether a path can be created through a door.
      * @throws This property can throw when used.
      */
    "canPassDoors": boolean
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @throws This property can throw when used.
      */
    "canPathFromAir": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @throws This property can throw when used.
      */
    "canPathOverLava": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @throws This property can throw when used.
      */
    "canPathOverWater": boolean
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @throws This property can throw when used.
      */
    "canSink": boolean
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @throws This property can throw when used.
      */
    "canSwim": boolean
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @throws This property can throw when used.
      */
    "canWalk": boolean
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @throws This property can throw when used.
      */
    "canWalkInLava": boolean
    /**
      * Identifier of this component. Should always be minecraft:navigation.generic.
      */
    "id": string
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @throws This property can throw when used.
      */
    "isAmphibious": boolean
    
  }
  
  /** 
    * Allows this entity to generate paths in the air (for example, like the Minecraft Bees do.) Keeps them from falling out of the skies and doing predictive movement.
    * @public
    */
  export class NavigationHover {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @throws This property can throw when used.
      */
    "avoidDamageBlocks": boolean
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @throws This property can throw when used.
      */
    "avoidPortals": boolean
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @throws This property can throw when used.
      */
    "avoidSun": boolean
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @throws This property can throw when used.
      */
    "avoidWater": boolean
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @throws This property can throw when used.
      */
    "canBreach": boolean
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @throws This property can throw when used.
      */
    "canBreakDoors": boolean
    /**
      * Tells the pathfinder whether or not it can float.
      * @throws This property can throw when used.
      */
    "canFloat": boolean
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @throws This property can throw when used.
      */
    "canJump": boolean
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenDoors": boolean
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenIronDoors": boolean
    /**
      * Whether a path can be created through a door.
      * @throws This property can throw when used.
      */
    "canPassDoors": boolean
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @throws This property can throw when used.
      */
    "canPathFromAir": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @throws This property can throw when used.
      */
    "canPathOverLava": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @throws This property can throw when used.
      */
    "canPathOverWater": boolean
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @throws This property can throw when used.
      */
    "canSink": boolean
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @throws This property can throw when used.
      */
    "canSwim": boolean
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @throws This property can throw when used.
      */
    "canWalk": boolean
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @throws This property can throw when used.
      */
    "canWalkInLava": boolean
    /**
      * Identifier of this component. Should always be minecraft:navigation.hover.
      */
    "id": string
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @throws This property can throw when used.
      */
    "isAmphibious": boolean
    
  }
  
  /** 
    * Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.
    * @public
    */
  export class NavigationWalk {
    /**
      * Tells the pathfinder to avoid blocks that cause damage when finding a path.
      * @throws This property can throw when used.
      */
    "avoidDamageBlocks": boolean
    /**
      * Tells the pathfinder to avoid portals (like nether portals) when finding a path.
      * @throws This property can throw when used.
      */
    "avoidPortals": boolean
    /**
      * Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.
      * @throws This property can throw when used.
      */
    "avoidSun": boolean
    /**
      * Tells the pathfinder to avoid water when creating a path.
      * @throws This property can throw when used.
      */
    "avoidWater": boolean
    /**
      * Tells the pathfinder whether or not it can jump out of water (like a dolphin).
      * @throws This property can throw when used.
      */
    "canBreach": boolean
    /**
      * Tells the pathfinder that it can path through a closed door and break it.
      * @throws This property can throw when used.
      */
    "canBreakDoors": boolean
    /**
      * Tells the pathfinder whether or not it can float.
      * @throws This property can throw when used.
      */
    "canFloat": boolean
    /**
      * Tells the pathfinder whether or not it can jump up blocks.
      * @throws This property can throw when used.
      */
    "canJump": boolean
    /**
      * Tells the pathfinder that it can path through a closed door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenDoors": boolean
    /**
      * Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.
      * @throws This property can throw when used.
      */
    "canOpenIronDoors": boolean
    /**
      * Whether a path can be created through a door.
      * @throws This property can throw when used.
      */
    "canPassDoors": boolean
    /**
      * Tells the pathfinder that it can start pathing when in the air.
      * @throws This property can throw when used.
      */
    "canPathFromAir": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the lava.
      * @throws This property can throw when used.
      */
    "canPathOverLava": boolean
    /**
      * Tells the pathfinder whether or not it can travel on the surface of the water.
      * @throws This property can throw when used.
      */
    "canPathOverWater": boolean
    /**
      * Tells the pathfinder whether or not it will be pulled down by gravity while in water.
      * @throws This property can throw when used.
      */
    "canSink": boolean
    /**
      * Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.
      * @throws This property can throw when used.
      */
    "canSwim": boolean
    /**
      * Tells the pathfinder whether or not it can walk on the ground outside water.
      * @throws This property can throw when used.
      */
    "canWalk": boolean
    /**
      * Tells the pathfinder whether or not it can travel in lava like walking on ground.
      * @throws This property can throw when used.
      */
    "canWalkInLava": boolean
    /**
      * Identifier of this component. Should always be minecraft:navigation.swim.
      */
    "id": string
    /**
      * Tells the pathfinder whether or not it can walk on the ground or go underwater.
      * @throws This property can throw when used.
      */
    "isAmphibious": boolean
    
  }
  
  /** 
    * Represents a player within the world.
    * @public
    */
  export class Player {
    /**
      * Identifier for the player.
      * @throws This property can throw when used.
      */
    "id": string
    /**
      * True if the player is currently using a sneaking movement.
      */
    "isSneaking": boolean
    /**
      * Current location of the player.
      * @throws This property can throw when used.
      */
    "location": Location
    /**
      * Name of the player.
      * @throws This property can throw when used.
      */
    "name": string
    /**
      * Optional name tag of the player.
      */
    "nameTag": string
    /**
      * Current speed of the player across X, Y, and Z dimensions.
      * @throws This property can throw when used.
      */
    "velocity": Location
    
  /**
    * @remarks
    * Adds an effect, like poison, to the entity.
    *
    * @param effectType Type of effect to add to the entity.
    * @param duration Amount of time, in seconds, for the effect to apply.
    * @param amplifier Optional amplification of the effect to apply.
    *
    *
    * @throws This function can throw errors.
    */
  addEffect(effectType: EffectType, duration: number, amplifier: number): void;
  /**
    *
    * @param componentId 
    *
    *
    */
  getComponent(componentId: string): any;
  /**
    *
    *
    *
    */
  getComponents(): Array<any>;
  /**
    *
    * @param effectType 
    *
    *
    * @throws This function can throw errors.
    */
  getEffect(effectType: EffectType): Effect;
  /**
    *
    * @param componentId 
    *
    *
    */
  hasComponent(componentId: string): boolean;
  /**
    *
    *
    *
    * @throws This function can throw errors.
    */
  kill(): void;
  /**
    * @remarks
    * Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event.
    *
    * @param eventName Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed.
    *
    *
    * @throws This function can throw errors.
    */
  triggerEvent(eventName: string): void;
  }
  
  /** 
    * When added, this component adds the capability that an entity can be ridden by another entity.
    * @public
    */
  export class Rideable {
    /**
      * Zero-based index of the seat that can used to control this entity.
      * @throws This property can throw when used.
      */
    "controllingSeat": number
    /**
      * Determines whether interactions are not supported if the entity is crouching.
      * @throws This property can throw when used.
      */
    "crouchingSkipInteract": boolean
    /**
      * A string-list of entity types that this entity can support as riders.
      * @throws This property can throw when used.
      */
    "familyTypes": Array<any>
    /**
      * Identifier of this component. Should always be minecraft:rideable.
      */
    "id": string
    /**
      * Set of text that should be displayed when a player is looking to ride on this entity (commonly with touch-screen controls).
      * @throws This property can throw when used.
      */
    "interactText": string
    /**
      * If true, this entity will pull in entities that are in the correct family_types into any available seat.
      * @throws This property can throw when used.
      */
    "pullInEntities": boolean
    /**
      * If true, this entity will be picked when looked at by the rider.
      * @throws This property can throw when used.
      */
    "riderCanInteract": boolean
    /**
      * Number of seats for riders defined for this entity.
      * @throws This property can throw when used.
      */
    "seatCount": number
    /**
      * The list of positions and number of riders for each position for entities riding this entity.
      * @throws This property can throw when used.
      */
    "seats": Array<Seat>
    
  /**
    * @remarks
    * Adds an entity to this entity as a rider.
    *
    * @param rider Entity that will become the rider of this entity.
    *
    * @returns True if the rider entity was successfully added.
    *
    * @throws This function can throw errors.
    */
  addRider(rider: Entity): boolean;
  /**
    * @remarks
    * Ejects the specified rider of this entity.
    *
    * @param rider Entity that should be ejected from this entity.
    *
    *
    * @throws This function can throw errors.
    */
  ejectRider(rider: Entity): void;
  /**
    * @remarks
    * Ejects all riders of this entity.
    *
    *
    *
    * @throws This function can throw errors.
    */
  ejectRiders(): void;
  }
  
  /** 
    * Describes a particular seating position on this rideable entity.
    * @public
    */
  export class Seat {
    /**
      * If specified, contains a forced rotation that the riders in this seat are facing.
      */
    "lockRiderRotation": number
    /**
      * A maximum number of riders that this seat can support.
      */
    "maxRiderCount": number
    /**
      * A minimum number of riders that can be placed in this seat position, if this seat is to be filled.
      */
    "minRiderCount": number
    /**
      * Physical location of this seat, relative to the entity's location.
      */
    "position": Location
    
  }
  
  /** 
    * Defines the entity's strength to carry items.
    * @public
    */
  export class Strength {
    /**
      * Identifier of this component. Should always be minecraft:strength.
      */
    "id": string
    /**
      * Maximum strength of this entity, as defined in the entity type definition.
      * @throws This property can throw when used.
      */
    "max": number
    /**
      * Current strength value of this entity, after any effects or component updates are applied.
      * @throws This property can throw when used.
      */
    "value": number
    
  }
  
  /** 
    * Contains the state of a string-based property for a {@link Minecraft.BlockPermutation}.
    * @public
    */
  export class StringBlockProperty {
    /**
      * Name of this property.
      */
    "name": string
    /**
      * A list of allowed values for this string property.
      */
    "validValues": Array<any>
    /**
      * The current value of this property.
      */
    "value": string
    
  }
  
  /** 
    * Defines the rules for a mob to be tamed by the player.
    * @public
    */
  export class Tameable {
    /**
      * Identifier of this component. Should always be minecraft:tameable.
      */
    "id": string
    /**
      * The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%
      * @throws This property can throw when used.
      */
    "probability": number
    /**
      * Event to run when this entity becomes tamed.
      * @throws This property can throw when used.
      */
    "tameEvent": Trigger
    /**
      * The list of items that can be used to tame this entity.
      * @throws This property can throw when used.
      */
    "tameItems": Array<any>
    
  /**
    * @remarks
    * Tames this entity.
    *
    *
    * @returns Returns true if the entity was tamed.
    *
    * @throws This function can throw errors.
    */
  tame(): boolean;
  }
  
  /** 
    * Represents a trigger for firing an event.
    * @public
    */
  export class Trigger {
    
  }
  
  /** 
    * Defines the general movement speed underwater of this entity.
    * @public
    */
  export class UnderwaterMovement {
    /**
      * Read-only. Returns the current value of movement speed underwater for the entity.
      * @throws This property can throw when used.
      */
    "current": number
    /**
      * Identifier of this component. Should always be minecraft:underwater_movement.
      */
    "id": string
    /**
      * Value for movement speed underwater as defined through entity components.
      * @throws This property can throw when used.
      */
    "value": number
    
  /**
    * @remarks
    * Resets the current movement speed underwater for the entity to the default value implied by the current component state of the entity.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToDefaultValue(): void;
  /**
    * @remarks
    * Resets the movement speed underwater to the maximum value for the entity, as determined by the set of components that are on the entity.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToMaxValue(): void;
  /**
    * @remarks
    * Resets the movement speed underwater to the minimum value as defined by the component state of this entity.
    *
    *
    *
    * @throws This function can throw errors.
    */
  resetToMinValue(): void;
  /**
    * @remarks
    * Sets the current value of movement speed underwater for the entity.
    *
    *
    *
    * @throws This function can throw errors.
    */
  setCurrent(): void;
  }
  
  /** 
    * Contains information related to changes in weather in the environment.
    * @public
    */
  export class WeatherChangedEvent {
    /**
      * Dimension in which the weather has changed.
      */
    "dimension": string
    /**
      * Whether it is lightning after the change in weather.
      */
    "lightning": boolean
    /**
      * Whether it is raining after the change in weather.
      */
    "raining": boolean
    
  }
  
  /** 
    * A class that wraps the state of a dimension (such as the overworld, the nether, or the end)
    * @public
    */
  export class World {
    /**
      * Contains a set of events that are applicable to the entirety of the world.
      */
    static "events": Events
    
  /**
    *
    * @param dimensionName The name of the Dimension
    *
    * @returns The requested dimension
    *
    * @throws Throws if the given dimension name is invalid
    */
  static getDimension(dimensionName: ('overworld'|'nether'|'the end')): Dimension;
  /**
    * @remarks
    * Returns all players currently in the world.
    *
    *
    * @returns All players currently in the world.
    *
    */
  getPlayers(): Array<Player>;
  }
  
}


