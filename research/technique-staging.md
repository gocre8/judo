# Technique Staging

Use this file as the source-backed holding area before adding techniques to the app.

## Working Goal

Build a study model that does not only store isolated moves.

We want to be able to answer:
- What position am I in?
- What position is my opponent in?
- What reaction did they give me?
- What action potential opens next?
- If the move fails, where do I usually land?

That means the file should organize around:
- `position`
- `opponent action`
- `action potential`
- `resulting position`
- `best next links`

## Working Map

Use this order when organizing or adding material:

1. `Position`
2. `Opponent reaction / trigger`
3. `Primary move`
4. `Likely follow-up`
5. `Likely fallback position`

This is the structure we should eventually mirror in the app.

## Positional Hierarchy

These are working models for study and decision-making.
They are not claims that Judo and Jiu-Jitsu use one identical official hierarchy.

### Judo

Judo needs two separate hierarchies:
- `Tachi-waza` decision hierarchy
- `Ne-waza` control hierarchy

#### Judo Tachi-waza Hierarchy

Think of standing Judo as a hierarchy of increasing directional control:

1. `Neutral distance`
   - no stable grip or no clear angle
2. `Grip advantage`
   - one player has the preferred sleeve/collar/inside control or dominant side entry
3. `Kuzushi advantage`
   - posture or direction is already compromised
4. `Tsukuri advantage`
   - entry position is achieved and hips/angle/leg line are in place
5. `Kake / throw exposure`
   - the opponent is already being projected or forced into emergency reaction

Useful study question:
- In Judo standing, the most important “position” may be `grip + direction + weight distribution`, not body location alone.

#### Judo Ne-waza Hierarchy

For groundwork Judo, a more positional hierarchy is useful:

1. `Neutral scramble`
2. `Top chest-to-chest control`
3. `Osaekomi threat`
4. `Stable pin`
5. `Submission exposure`
6. `Shime-waza / Kansetsu-waza finish`

Useful study question:
- In Judo groundwork, does a pin create a submission, or does an escape attempt create a submission?

### Jiu-Jitsu

Jiu-Jitsu has no single official family system like Kodokan Judo, so the most useful study model is positional.

#### Jiu-Jitsu Top Hierarchy

1. `Standing / neutral engagement`
2. `Passing position`
3. `Pinning position`
4. `Mount`
5. `Back control`
6. `Submission finish`

#### Jiu-Jitsu Bottom Hierarchy

1. `Bad defensive position`
2. `Survival frames`
3. `Guard recovery`
4. `Guard control`
5. `Off-balancing / kuzushi`
6. `Sweep or submission chain`

Useful study question:
- In Jiu-Jitsu, the real “position” is often not just the named position, but whether your frames, head position, inside space, and angle are winning or losing.

## Action Potential Model

Use `action potential` to mean:
- the next realistic attack, transition, or recovery opened by the current position plus the opponent's reaction

### Minimal Link Model

Each move or position should eventually capture:
- `fromPosition`
- `toPosition`
- `opponentReaction`
- `primaryAction`
- `secondaryAction`
- `ifBlocked`
- `ifCountered`
- `resetTo`

### Practical Link Types

For app and research purposes, we should standardize these:
- `from position`
- `opens when opponent`
- `sets up`
- `follows from`
- `counters`
- `if defended, look for`
- `usually lands in`
- `works with`

## Position-First Entry Template

Use this when adding or rewriting entries:

```md
#### Move or Position Name

- practice:
- positionContext:
- fromPosition:
- opponentReaction:
- primaryAction:
- toPosition:
- ifBlocked:
- ifCountered:
- resetTo:
- worksWellWith:
- samePositionOptions:
- source:
- reviewStatus:
```

## Position Buckets To Use

These are the reusable buckets we should keep organizing around.

### Judo Position Buckets

- `Neutral distance`
- `Standard sleeve-and-collar`
- `Dominant grip`
- `Broken posture`
- `Forward pressure`
- `Backward pressure`
- `Rotational entry`
- `Head-side top control`
- `Side pin`
- `Back exposure`
- `Arm isolation`
- `Collar control`

### Jiu-Jitsu Position Buckets

- `Standing neutral`
- `Closed guard top`
- `Closed guard bottom`
- `Open guard top`
- `Open guard bottom`
- `Half guard top`
- `Half guard bottom`
- `Side control top`
- `Side control bottom`
- `Mount top`
- `Mount bottom`
- `Back control top`
- `Back control bottom`

## Opponent Action Buckets

These should be reused instead of rewriting the same idea ten different ways.

- `posts hand`
- `withdraws leg`
- `bases wide`
- `drives forward`
- `pulls back`
- `circles away`
- `turns in`
- `turns away`
- `bridges hard`
- `frames on neck`
- `frames on hips`
- `recovers elbow-knee connection`
- `exposes arm`
- `exposes neck`
- `stands posture up`

## Source Index

Primary and recurring sources worth keeping near the top:
- Kodokan Global names and family structure
- Kodokan official technique demos
- IBJJF positional and terminology baseline
- [BJJ Equipment: Jiu-Jitsu Moves](https://bjjequipment.com/jiu-jitsu-moves/) for move browsing and plain-language cross-checking

## Best Next Workflow

Use this order when continuing the file:

1. Write or revise the `positionContext`
2. Add `fromPosition`
3. Add the most common `opponentReaction`
4. Add the `primaryAction`
5. Add `ifBlocked` and `ifCountered`
6. Add `toPosition` or `resetTo`
7. Only after that, polish the prose steps

This should keep the file useful for decision trees and app linking, instead of becoming only a move encyclopedia.

## Judo Directionality

This section is the core working model for Judo action potentials.

Use these directional buckets:
- `forward`
- `backward`
- `right-front corner`
- `left-front corner`
- `right-rear corner`
- `left-rear corner`
- `rotational right`
- `rotational left`

When possible, every standing Judo entry should identify:
- `grip state`
- `weight-bearing leg`
- `direction of kuzushi`
- `entry line`
- `best follow-up if the direction changes`

### Judo Action-Potential Questions

Before choosing a throw, ask:
- Which leg is light?
- Which direction is uke already moving?
- Are they pulling back, stiff-arming, circling, or stepping?
- Is the action potential timing-based, grip-based, or posture-based?

## Jiu-Jitsu Action-Potential Section

This section is the core working model for Jiu-Jitsu action potentials.

In Jiu-Jitsu, the action potential usually comes from:
- posture change
- posting limb
- elbow-knee connection opening
- head position change
- turn-in or turn-away reaction
- frame direction

### Jiu-Jitsu Action-Potential Questions

Before choosing the next move, ask:
- Did they post?
- Did they widen base?
- Did they stand posture up?
- Did they turn toward me or away from me?
- Did they expose the arm or neck?
- If my attack fails, what position am I still safe in?

## Worked Example Flow: Judo

### Deashi Harai Cluster

- practice: `Judo`
- fromPosition: `Standard sleeve-and-collar with lateral or diagonal movement`
- actionPotential: `The stepping foot becomes light during movement`
- primaryAction: `Deashi Harai`
- branches:
  - if opponent keeps the stepping foot available:
    - action: `Finish Deashi Harai`
    - toPosition: `Throw completion`
  - if opponent shortens the step but knee line stays exposed:
    - action: `Hiza Guruma`
    - toPosition: `Wheel-style throw exposure`
  - if opponent continues moving sideways with both feet traveling:
    - action: `Okuriashi Harai`
    - toPosition: `Double-foot sweep exposure`
  - if stepping foot is gone but ankle line is available:
    - action: `Sasae Tsurikomi Ashi`
    - toPosition: `Ankle block rotation`
- resetTo: `Re-establish movement and timing rather than attacking a planted foot`
- reviewStatus: `clarified`

## Worked Example Flow: Jiu-Jitsu

### Closed Guard Cluster

- practice: `Jiu-Jitsu`
- fromPosition: `Closed guard bottom with posture control`
- actionPotential: `Opponent reacts to posture break by posting, widening base, or leaving one arm in / one arm out`
- primaryAction: `Closed guard attack chain`
- branches:
  - if opponent leans forward with wide base:
    - action: `Scissor Sweep`
    - toPosition: `Top position / mount route`
  - if opponent postures and gives a sit-up lane:
    - action: `Hip Bump Sweep`
    - toPosition: `Top position`
  - if one arm is in and one arm is out:
    - action: `Triangle Choke`
    - toPosition: `Submission threat`
  - if the triangle defense exposes the elbow line:
    - action: `Armbar from Guard`
    - toPosition: `Arm isolation finish`
- resetTo: `Re-break posture and recover angle before opening the guard again`
- reviewStatus: `clarified`

## App Guide Notes

These notes should stay aligned with the in-app guide page.

### Export Notes

- `Export notes` creates a readable Markdown file for a person.
- `Backup JSON` keeps the full machine-readable browser backup for future import or restore work.
- The Markdown export should include moves with notes, pinned state, or studied state.
- The JSON backup may include moves that were only opened, because it preserves full saved state such as `lastViewedAt`.

### Connection Terms

- `Connects to` is a generalized fallback bucket.
- `Sets up` means this move tends to lead into the next one.
- `Follows from` means this move is often available after the listed move/reaction.
- `Counters` means this move answers the other move.
- `If defended, look for` means a failed or blocked attack may open those options.
- `Works with` means they pair well but are less directional.

Review status:
- `seeded`: listed with source and rough notes
- `verified`: source checked and naming confirmed
- `clarified`: teaching text edited for clarity
- `ready`: safe to import into app data

## How To Add Your Notes

Use this format directly under any move entry:

```md
> USER NOTE
- target: `move name`
- type: `accuracy` | `wording` | `sequence` | `linking` | `media` | `priority`
- note: `your comment here`
- preference: `optional`
```

Example:

```md
> USER NOTE
- target: `Osoto Gari`
- type: `linking`
- note: `I use this more often after Ouchi Gari than after Kosoto Gari.`
- preference: `Show Ouchi Gari first in alternates.`
```

If you want to suggest a new move, use:

```md
> USER ADD
- practice: `Judo` or `Jiu-Jitsu`
- move: `name`
- family/position: `family or position`
- why add it: `short reason`
- related to: `existing move names if any`
```

## Schema

Each entry should capture:
- `practice`
- `section`
- `family`
- `trainingContext` such as `Gi`, `No-gi`, or `Gi and No-gi` when relevant
- `japaneseName` or canonical name
- `englishName`
- `positionContext`
- `setup`
- `steps`
- `commonMistakes`
- `safetyNotes`
- `youtubeUrl`
- `imageStatus`
- `setupFor`
- `followUps`
- `commonCounters`
- `counterTo`
- `worksWellWith`
- `samePositionOptions`
- `source`
- `reviewStatus`

## Judo Structure

Source:
- Kodokan Global technique names and family structure

Families to support:
- `Te-waza`
- `Koshi-waza`
- `Ashi-waza`
- `Ma-sutemi-waza`
- `Yoko-sutemi-waza`
- `Osaekomi-waza`
- `Shime-waza`
- `Kansetsu-waza`

### Ready To Expand Next

#### Judo throws

- `Ippon-seoi-nage`
  - practice: `Judo`
  - section: `Nage-waza`
  - family: `Te-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Seoi-otoshi`
  - practice: `Judo`
  - section: `Nage-waza`
  - family: `Te-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Kata-guruma`
  - practice: `Judo`
  - section: `Nage-waza`
  - family: `Te-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Ashi-guruma`
  - practice: `Judo`
  - section: `Nage-waza`
  - family: `Ashi-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Harai-tsurikomi-ashi`
  - practice: `Judo`
  - section: `Nage-waza`
  - family: `Ashi-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `O-guruma`
  - practice: `Judo`
  - section: `Nage-waza`
  - family: `Ashi-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Ko-soto-gake`
  - practice: `Judo`
  - section: `Nage-waza`
  - family: `Ashi-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Utsuri-goshi`
  - practice: `Judo`
  - section: `Nage-waza`
  - family: `Koshi-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Tsuri-goshi`
  - practice: `Judo`
  - section: `Nage-waza`
  - family: `Koshi-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Hane-goshi`
  - practice: `Judo`
  - section: `Nage-waza`
  - family: `Koshi-waza`
  - source: Kodokan
  - reviewStatus: `seeded`

#### Judo groundwork

- `Kesa-gatame`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Osaekomi-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Kata-gatame`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Osaekomi-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Kami-shiho-gatame`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Osaekomi-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Yoko-shiho-gatame`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Osaekomi-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Hadaka-jime`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Shime-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Okuri-eri-jime`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Shime-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Kata-ha-jime`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Shime-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Juji-gatame`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Kansetsu-waza`
  - source: Kodokan
  - reviewStatus: `seeded`
- `Ude-garami`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Kansetsu-waza`
  - source: Kodokan
  - reviewStatus: `seeded`

#### Judo groundwork links to research next

- `Kata-gatame`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Osaekomi-waza`
  - setupFor: `Shoulder pressure pin`, `arm isolation`, `head-and-arm control`
  - followUps: `Arm attacks when uke turns`, `mount transitions`
  - worksWellWith: `Kesa-gatame`, `Yoko-shiho-gatame`
  - source: Kodokan names list
  - reviewStatus: `seeded`
- `Kami-shiho-gatame`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Osaekomi-waza`
  - setupFor: `North-south style top control`, `head-and-shoulder control`
  - followUps: `Choke entries when uke defends high`
  - worksWellWith: `Yoko-shiho-gatame`, `Kesa-gatame`
  - source: Kodokan names list
  - reviewStatus: `seeded`
- `Yoko-shiho-gatame`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Osaekomi-waza`
  - setupFor: `Side control style chest-to-chest pin`
  - followUps: `Kesa-gatame`, `Kami-shiho-gatame`, `arm attacks`
  - worksWellWith: `Kata-gatame`, `Kesa-gatame`
  - source: Kodokan names list
  - reviewStatus: `seeded`
- `Okuri-eri-jime`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Shime-waza`
  - setupFor: `Back exposure`, `collar control`
  - followUps: `Back retention and choke chains`
  - worksWellWith: `Hadaka-jime`, `Kata-ha-jime`
  - source: Kodokan names list
  - reviewStatus: `seeded`
- `Juji-gatame`
  - practice: `Judo`
  - section: `Katame-waza`
  - family: `Kansetsu-waza`
  - setupFor: `Arm isolation from pins or turnovers`
  - followUps: `Pin if opponent stacks or slips elbow free`
  - worksWellWith: `Kesa-gatame`, `Yoko-shiho-gatame`
  - source: Kodokan names list
  - reviewStatus: `seeded`

## IBJJF Baseline Structure

Source baseline:
- IBJJF rules and common competition position language
- [BJJ Equipment: Jiu-Jitsu Moves](https://bjjequipment.com/jiu-jitsu-moves/) for additional move list browsing and plain-language cross-checking

Sections to support:
- `Standing`
- `Guard`
- `Passing`
- `Pins`
- `Back control`
- `Submissions`
- `Escapes`

### Starter BJJ Set

- `Closed guard`
  - practice: `Jiu-Jitsu`
  - section: `Guard`
  - family: `Closed guard`
  - trainingContext: `Gi and No-gi`
  - samePositionOptions: `Scissor sweep`, `Hip bump sweep`, `Triangle`, `Armbar`, `Kimura`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`
- `Scissor sweep`
  - practice: `Jiu-Jitsu`
  - section: `Guard`
  - family: `Closed guard`
  - trainingContext: `Gi and No-gi`
  - setupFor: `Triangle`, `Cross collar choke`
  - followUps: `Mount`, `Combat base top`
  - commonCounters: `Opponent postures`, `Opponent bases wide`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`
- `Hip bump sweep`
  - practice: `Jiu-Jitsu`
  - section: `Guard`
  - family: `Closed guard`
  - trainingContext: `Gi and No-gi`
  - setupFor: `Kimura`, `Guillotine`
  - followUps: `Mount`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`
- `Triangle choke`
  - practice: `Jiu-Jitsu`
  - section: `Submissions`
  - family: `Closed guard`
  - trainingContext: `Gi and No-gi`
  - worksWellWith: `Armbar`, `Omoplata`, `Hip bump sweep`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`
- `Armbar from guard`
  - practice: `Jiu-Jitsu`
  - section: `Submissions`
  - family: `Closed guard`
  - trainingContext: `Gi and No-gi`
  - worksWellWith: `Triangle`, `Kimura`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`
- `Knee cut pass`
  - practice: `Jiu-Jitsu`
  - section: `Passing`
  - family: `Open guard passing`
  - followUps: `Side control`, `Mount`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`
- `Toreando pass`
  - practice: `Jiu-Jitsu`
  - section: `Passing`
  - family: `Open guard passing`
  - followUps: `Side control`, `North-south`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`
- `Side control`
  - practice: `Jiu-Jitsu`
  - section: `Pins`
  - family: `Top pins`
  - setupFor: `Kimura`, `Americana`, `Mount`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`
- `Mount`
  - practice: `Jiu-Jitsu`
  - section: `Pins`
  - family: `Top pins`
  - setupFor: `Armbar`, `Cross-collar choke`, `Back take`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`
- `Back control`
  - practice: `Jiu-Jitsu`
  - section: `Back control`
  - family: `Control`
  - setupFor: `Rear naked choke`, `Bow and arrow choke`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`
- `Rear naked choke`
  - practice: `Jiu-Jitsu`
  - section: `Submissions`
  - family: `Back control`
  - worksWellWith: `Back retention`, `Short choke`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`
- `Upa escape`
  - practice: `Jiu-Jitsu`
  - section: `Escapes`
  - family: `Mount escapes`
  - worksWellWith: `Elbow escape`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`

### Guard Passing Batch

#### Knee Cut Pass

- practice: `Jiu-Jitsu`
- section: `Passing`
- family: `Open guard passing`
- englishName: `Knee Cut Pass`
- positionContext: `Top open guard / half guard style passing`
- setup: Win inside position, control the upper body, and aim your knee line across rather than trying to jump around the guard.
- steps:
  - Control the upper body with collar, head, underhook, or crossface style grips.
  - Pin or redirect the bottom leg so your cutting knee can enter.
  - Slide the knee across the thigh line while lowering shoulder pressure.
  - Clear the hips and settle into side control or a chest-to-chest pin.
- commonMistakes:
  - Leaving the head too high.
  - Cutting without controlling the far hip or upper body.
  - Trying to move around the legs without pressure.
- safetyNotes:
  - Keep forward pressure steady rather than diving with the knee.
  - Avoid twisting your partner's knee when clearing the lower leg.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Side control`, `mount`
- followUps: `Backstep if the bottom knee shield stays strong`, `leg drag if the hips turn`
- commonCounters: `Knee shield`, `underhook from bottom`, `hip escape to recover guard`
- counterTo: `Loose open guard frames`
- worksWellWith: `Toreando pass`, `Leg drag`
- samePositionOptions: `Toreando pass`, `Over-under pass`
- source:
  - IBJJF positional baseline
  - Editorial summary for teaching language
- reviewStatus: `clarified`

#### Toreando Pass

- practice: `Jiu-Jitsu`
- section: `Passing`
- family: `Open guard passing`
- englishName: `Toreando Pass`
- positionContext: `Top open guard`
- setup: Control both pant legs or ankles, move the feet off line, and get your chest around the legs before the guard can reset.
- steps:
  - Establish two-on-two leg control near the ankles or pant line.
  - Push the legs to one side while stepping your body to the other.
  - Keep your elbows connected and your chest moving around the knees.
  - Drop into side control before the opponent can square up again.
- commonMistakes:
  - Staying directly in front of the guard.
  - Throwing the legs aside without moving your body.
  - Releasing leg control too early.
- safetyNotes:
  - Keep your own posture balanced to avoid head-first collisions.
  - Use control when dropping into top position.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Side control`, `north-south`, `leg drag follow-up`
- followUps: `Knee cut if the opponent turns back in`, `north-south if hips stay flat`
- commonCounters: `Lasso hooks`, `frames on the shoulder line`, `inversion or hip recovery`
- counterTo: `Loose open guard with exposed ankles`
- worksWellWith: `Knee cut pass`, `Leg drag`
- samePositionOptions: `Knee cut pass`, `Bullfighter style pass`
- source:
  - IBJJF positional baseline
  - Editorial summary for teaching language
- reviewStatus: `clarified`

#### Side Control

- practice: `Jiu-Jitsu`
- section: `Pins`
- family: `Top pins`
- englishName: `Side Control`
- positionContext: `Top pin after pass or sweep`
- setup: Clear the legs, win head-and-hip control, and settle your chest so the opponent carries your weight rather than being able to turn immediately.
- steps:
  - Control the head and far-side shoulder line.
  - Block the near hip so the opponent cannot recover guard easily.
  - Keep your hips low and adjust your base as the opponent bridges.
  - Advance to a submission or to mount/back when the reaction opens.
- commonMistakes:
  - Sitting too high with no hip control.
  - Chasing submissions before pinning.
  - Letting the near elbow and knee reconnect.
- safetyNotes:
  - Apply chest pressure progressively.
  - Avoid driving your weight into the face or neck recklessly.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Kimura`, `Americana`, `Mount`, `Knee on belly`
- followUps: `Mount`, `Knee on belly`, `Far-side arm attacks`
- commonCounters: `Frames and hip escape`, `underhook recovery`, `turning to knees`
- counterTo: `Opponent who gives lateral exposure during passing exchanges`
- worksWellWith: `Knee cut pass`, `Toreando pass`, `Mount`
- samePositionOptions: `North-south`, `Kesa-style hold`
- source:
  - IBJJF positional baseline
  - Editorial summary for teaching language
- reviewStatus: `clarified`

#### Leg Drag

- practice: `Jiu-Jitsu`
- section: `Passing`
- family: `Open guard passing`
- englishName: `Leg Drag`
- positionContext: `Top open guard`
- setup: Pull both legs across your center line so the opponent's hips twist away, then close distance before the guard can re-square.
- steps:
  - Control the lower legs or pant line and drag them across your hip line.
  - Staple the legs so the hips point away from you.
  - Step in tight with chest pressure and head position controlling the upper body.
  - Settle into side control, back exposure, or knee-on-belly style pressure.
- commonMistakes:
  - Dragging the legs without closing distance.
  - Standing too upright over the guard.
  - Letting the opponent square the hips back in.
- safetyNotes:
  - Keep pressure controlled over the knees and hips.
  - Avoid falling heavily when switching to top control.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Side control`, `back exposure`, `knee-on-belly`
- followUps: `Back take if opponent turns away`, `knee cut if opponent re-pummels`
- commonCounters: `Hip inversion`, `frames at the shoulder`, `recovering inside knee position`
- counterTo: `Wide open guard with disconnected legs`
- worksWellWith: `Toreando pass`, `Knee cut pass`
- samePositionOptions: `Knee cut pass`, `Toreando pass`
- source:
  - IBJJF positional baseline
  - Editorial summary for teaching language
- reviewStatus: `clarified`

#### Over-Under Pass

- practice: `Jiu-Jitsu`
- section: `Passing`
- family: `Open guard passing`
- englishName: `Over-Under Pass`
- positionContext: `Top open guard`
- setup: Trap one leg over your shoulder, control the far leg underneath, and stack the hips so the bottom player loses mobility.
- steps:
  - Thread one arm under a leg and clamp the other leg over your shoulder.
  - Bring your head and chest low to pin the hips.
  - Walk around the controlled hips without giving the knees back space.
  - Clear the legs and settle into side control.
- commonMistakes:
  - Keeping the head too high.
  - Failing to staple the hips before walking around.
  - Moving around the legs without dominating the far leg.
- safetyNotes:
  - Apply stacking pressure gradually.
  - Avoid sudden neck pressure on your partner while pinning the hips.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Side control`, `pass completion from stubborn open guards`
- followUps: `Side control`, `north-south if hips stay pinned flat`
- commonCounters: `Frames on the head`, `inversion`, `recovery of the far knee line`
- counterTo: `Open guard players who keep the knees between you and the torso`
- worksWellWith: `Knee cut pass`, `Toreando pass`
- samePositionOptions: `Leg drag`, `Knee cut pass`
- source:
  - IBJJF positional baseline
  - Editorial summary for teaching language
- reviewStatus: `clarified`

#### Knee-on-Belly

- practice: `Jiu-Jitsu`
- section: `Pins`
- family: `Top pins`
- englishName: `Knee-on-Belly`
- positionContext: `Top transition pin`
- setup: Use upper-body control and place the knee across the torso so the opponent has to react, giving you either points, submissions, or a more dominant follow-up.
- steps:
  - Establish top control after passing or from side control.
  - Place the near-side knee across the torso while the far leg bases out wide.
  - Keep one hand controlling the collar, head, or far shoulder line.
  - Float with the opponent's movement and switch to mount, side control, or attacks as reactions open.
- commonMistakes:
  - Placing the knee too low with no chest control.
  - Sitting too upright and losing balance.
  - Treating it as a static pin instead of a transition platform.
- safetyNotes:
  - Apply torso pressure progressively.
  - Be mindful of ribs and breathing, especially with smaller partners.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Mount`, `Armbar`, `Far-side attacks`
- followUps: `Mount`, `side control`, `spinning armlocks`
- commonCounters: `Bridge and trap`, `hip escape under the knee`, `turning to recover half guard`
- counterTo: `Defensive side-control reactions`
- worksWellWith: `Side control`, `Mount`, `Leg drag`
- samePositionOptions: `Side control`, `Mount`
- source:
  - IBJJF positional baseline
  - Editorial summary for teaching language
- reviewStatus: `clarified`

#### Mount

- practice: `Jiu-Jitsu`
- section: `Pins`
- family: `Top pins`
- englishName: `Mount`
- positionContext: `Top dominant pin`
- setup: Climb the knees high enough to control the hips and shoulders, and force the opponent to carry your weight before you attack.
- steps:
  - Arrive from a pass, sweep, or transition with knees tight around the torso.
  - Drop your hips and connect to the opponent rather than floating too high.
  - Climb higher when the opponent bridges so the shoulders become exposed.
  - Attack submissions or back takes once the elbows separate from the ribs.
- commonMistakes:
  - Staying low on the hips with no upper-body control.
  - Chasing submissions before stabilizing base.
  - Letting knees drift wide enough for easy elbow escapes.
- safetyNotes:
  - Keep pressure controlled and responsive.
  - Avoid driving weight abruptly onto the face or throat.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Armbar`, `Cross-collar choke`, `Back take`
- followUps: `Armbar`, `Head-and-arm attacks`, `Back take as opponent turns`
- commonCounters: `Upa escape`, `Elbow escape`, `Framing and knee insertion`
- counterTo: `Opponent flattened after pass or sweep`
- worksWellWith: `Knee-on-Belly`, `Side control`, `Back control`
- samePositionOptions: `Side control`, `Knee-on-Belly`
- source:
  - IBJJF positional baseline
  - Editorial summary for teaching language
- reviewStatus: `clarified`
- `Elbow escape`
  - practice: `Jiu-Jitsu`
  - section: `Escapes`
  - family: `Mount escapes`
  - worksWellWith: `Upa escape`
  - source: IBJJF baseline terminology
  - reviewStatus: `seeded`

## Collection Rules

- Judo names and family placement should default to Kodokan.
- Judo teaching text should be checked against Kodokan wording, then rewritten for clarity.
- Jiu-jitsu names should use common IBJJF competition terminology.
- Do not import a move until the naming, section, and at least one relationship field are checked.
- Prefer no video over a bad video.
- Prefer no image over a misleading image.

## First Verified Batch

These are the first fuller entries to review before import.

### Judo

#### Osoto Gari

- practice: `Judo`
- section: `Nage-waza`
- family: `Ashi-waza`
- japaneseName: `Osoto Gari`
- englishName: `Large Outer Reaping`
- positionContext: `Standing`
- setup: Break uke backward and slightly to the rear corner so the weight settles onto the reaped-side heel. Keep chest contact close enough that your upper body continues to drive through the throw.
- steps:
  - Pull uke backward onto the heel with sleeve-and-collar action.
  - Step in close so your support leg is planted near uke's foot and your chest pressure stays connected.
  - Swing the reaping leg high and long through the outside of uke's leg.
  - Continue driving with the hands and chest until uke falls backward.
- commonMistakes:
  - Reaping before uke's weight is on the heel.
  - Leaning away and losing chest pressure.
  - Stopping the hands when the leg makes contact.
- safetyNotes:
  - Practice only with reliable ukemi.
  - Keep the throw continuous rather than spiking uke backward.
- youtubeUrl: `https://www.youtube.com/watch?v=c-A_nP7mKAc`
- imageStatus: `good existing image in app`
- setupFor: `Kosoto Gari`
- followUps: `If uke retracts the target leg, switch to Ouchi Gari or attack the far side.`
- commonCounters: `Uke steps off line, squares stance, or blocks the reaping leg.`
- counterTo: `Can punish upright retreating posture.`
- worksWellWith: `Kosoto Gari`, `Ouchi Gari`, `Kouchi Gari`
- samePositionOptions: `Kosoto Gari`, `Ouchi Gari`
- source:
  - Kodokan Global names/definitions page
  - Kodokan official YouTube demo
- reviewStatus: `clarified`

#### O Goshi

- practice: `Judo`
- section: `Nage-waza`
- family: `Koshi-waza`
- japaneseName: `O Goshi`
- englishName: `Major Hip Throw`
- positionContext: `Standing`
- setup: Pull uke forward so the weight rises onto the toes, then turn in deeply enough that your hips arrive underneath uke's center before you lift.
- steps:
  - Pull uke forward and upward to create forward kuzushi.
  - Turn in close, bringing your back tight to uke with bent knees.
  - Wrap firmly around the back or waist and fit your hips below uke's belt line.
  - Straighten the legs and rotate so uke rolls over the hip shelf.
- commonMistakes:
  - Leaving space between your back and uke.
  - Trying to deadlift with the lower back.
  - Rotating before uke is loaded onto the hips.
- safetyNotes:
  - Keep knees bent during the fit-in.
  - Use cooperative pace while learning the hip placement.
- youtubeUrl: `https://www.youtube.com/watch?v=yhu1mfy2vJ4`
- imageStatus: `good existing image in app`
- setupFor: `Harai Goshi`, `Tsurikomi Goshi`
- followUps: `If uke keeps weight too light for a full load, transition to Uki Goshi.`
- commonCounters: `Uke blocks the hip or circles away from the turn.`
- counterTo: `Strong upright defensive posture that yields to forward pull.`
- worksWellWith: `Uki Goshi`, `Tsurikomi Goshi`, `Harai Goshi`
- samePositionOptions: `Uki Goshi`, `Tsurikomi Goshi`
- source:
  - Kodokan official YouTube demo
  - Kodokan Global names/definitions page
- reviewStatus: `clarified`

#### Deashi Harai

- practice: `Judo`
- section: `Nage-waza`
- family: `Ashi-waza`
- japaneseName: `Deashi Harai`
- englishName: `Forward Foot Sweep`
- positionContext: `Standing`
- setup: Create movement first. Watch the foot that is traveling, not the one that is planted, and catch it just before it settles.
- steps:
  - Move with uke laterally or diagonally until one foot glides forward.
  - Time the attack for the instant the advancing foot becomes light.
  - Sweep at ankle level across the mat, not upward.
  - Direct the upper body in the same direction as the sweep using sleeve-and-collar control.
- commonMistakes:
  - Sweeping a planted foot.
  - Kicking upward instead of skimming across the mat.
  - Attacking before uke commits weight transfer.
- safetyNotes:
  - Drill movement rhythm before adding speed.
  - Avoid knee collisions during early reps.
- youtubeUrl: `https://www.youtube.com/watch?v=4BUUvqxi_Kk`
- imageStatus: `good existing image in app`
- setupFor: `Okuriashi Harai`
- followUps: `If uke withdraws the foot, change to Hiza Guruma or Sasae Tsurikomi Ashi.`
- commonCounters: `Uke shortens the step or squares up.`
- counterTo: `Forward stepping movement.`
- worksWellWith: `Okuriashi Harai`, `Hiza Guruma`, `Sasae Tsurikomi Ashi`
- samePositionOptions: `Okuriashi Harai`, `Hiza Guruma`
- source:
  - Kodokan official YouTube demo
  - Kodokan Global names/definitions page
- reviewStatus: `clarified`

#### Seoi Nage

- practice: `Judo`
- section: `Nage-waza`
- family: `Te-waza`
- japaneseName: `Seoi Nage`
- englishName: `Two Arm Shoulder Throw`
- positionContext: `Standing`
- setup: Pull uke forward until the balance breaks in front, then spin tightly underneath the arm so uke loads across your back and shoulder line.
- steps:
  - Pull uke straight forward with both hands to create forward off-balance.
  - Step in and turn so your back comes tight to uke's chest.
  - Bend the knees and place your elbow under uke's armpit while locking the arm to your body.
  - Lift with both hands and legs, then project uke over the shoulder line.
- commonMistakes:
  - Turning in with space between your back and uke.
  - Failing to get under uke's center of gravity.
  - Trying to throw with the arms alone.
- safetyNotes:
  - Learn the fit-in and lift separately before adding speed.
  - Protect uke's shoulder and landing with controlled rotation.
- youtubeUrl: `needs verified official link`
- imageStatus: `good existing image in app`
- setupFor: `Tai Otoshi`, `Ippon Seoi Nage`
- followUps: `If uke resists forward by widening base, Tai Otoshi becomes more available.`
- commonCounters: `Uke stiff-arms, circles away, or blocks the turn.`
- counterTo: `Forward defensive pressure.`
- worksWellWith: `Tai Otoshi`, `Ippon Seoi Nage`, `Tomoe Nage`
- samePositionOptions: `Tai Otoshi`, `Ippon Seoi Nage`
- source:
  - Kodokan Global `Seoi-Nage (hand technique)`
  - Kodokan names/definitions page
- reviewStatus: `clarified`

#### Kesa Gatame

- practice: `Judo`
- section: `Katame-waza`
- family: `Osaekomi-waza`
- japaneseName: `Kesa Gatame`
- englishName: `Scarf Hold`
- positionContext: `Groundwork / top pin`
- setup: Arrive from side control or a turnover, trap the head and one arm, then angle your hips low so your weight pours diagonally through uke's chest.
- steps:
  - Secure head-and-arm control before trying to settle.
  - Turn your body so your chest points toward uke's head rather than facing square across the torso.
  - Drop your hips low and widen the base with one bent leg and one extended leg.
  - Keep shoulder pressure heavy and follow uke's attempts to turn in or bridge.
- commonMistakes:
  - Sitting too upright.
  - Letting the trapped arm slip free.
  - Keeping the knees too narrow and becoming easy to roll.
- safetyNotes:
  - Apply pressure gradually.
  - Reset if neck pressure becomes sharp or uncontrolled.
- youtubeUrl: `needs verified official link`
- imageStatus: `no app image yet`
- setupFor: `Juji Gatame`, `Hadaka Jime` transitions after exposure or escape attempts
- followUps: `If uke frames hard or turns, arm attacks and back exposure may open.`
- commonCounters: `Bridge-and-roll attempts`, `shrimping to recover guard`, `head push escapes`
- counterTo: `Loose side-control transitions`
- worksWellWith: `Kata Gatame`, `Juji Gatame`
- samePositionOptions: `Kata Gatame`, `Kami-shiho-gatame`, `Yoko-shiho-gatame`
- source:
  - Kodokan names/definitions page
  - Kodokan kata material for positional reference
- reviewStatus: `clarified`

#### Kata Gatame

- practice: `Judo`
- section: `Katame-waza`
- family: `Osaekomi-waza`
- japaneseName: `Kata Gatame`
- englishName: `Shoulder Hold`
- positionContext: `Groundwork / side pin`
- setup: Wrap the opponent's arm and head together so the shoulder line and neck line are pinned under your upper body from the side.
- steps:
  - Isolate one arm and bring it toward the opponent's head.
  - Thread your arms around the trapped arm-and-head connection.
  - Drop shoulder pressure and settle your chest low from the side.
  - Widen your base and adjust with the hips as uke bridges or turns.
- commonMistakes:
  - Leaving too much space under the head and shoulder.
  - Squeezing with the arms without settling body weight.
  - Letting the trapped elbow slip free.
- safetyNotes:
  - Apply pressure gradually, especially around the neck and jaw.
  - Reset if your partner cannot move safely or communicate.
- youtubeUrl: `needs verified official link`
- imageStatus: `no app image yet`
- setupFor: `Arm exposure`, `transition pin control`
- followUps: `Juji-gatame`, `mount transition if uke turns away`
- commonCounters: `Frames against the neck`, `bridge and hip escape`, `turning to knees`
- counterTo: `Loose underhook and side-control recovery attempts`
- worksWellWith: `Kesa Gatame`, `Yoko-shiho-gatame`
- samePositionOptions: `Kesa Gatame`, `Yoko-shiho-gatame`
- source:
  - Kodokan Global names/definitions page
  - Kodokan Katame-no-Kata positional references
- reviewStatus: `clarified`

#### Kami Shiho Gatame

- practice: `Judo`
- section: `Katame-waza`
- family: `Osaekomi-waza`
- japaneseName: `Kami Shiho Gatame`
- englishName: `Upper Four-Corner Hold`
- positionContext: `Groundwork / top of head-side pin`
- setup: Move to the head side, control both sides of the belt or trunk line, and spread your weight across the chest and upper abdomen.
- steps:
  - Circle to the top of the head so your chest faces uke's torso.
  - Secure the belt, jacket, or trunk line on both sides.
  - Drop your hips low and widen the knees for base.
  - Follow uke's bridging motion without letting the elbows disconnect from control.
- commonMistakes:
  - Kneeling too tall over uke.
  - Reaching wide and losing trunk control.
  - Letting uke insert elbows to turn back to guard.
- safetyNotes:
  - Keep pressure gradual through the chest and ribs.
  - Avoid driving weight sharply onto the face or throat.
- youtubeUrl: `needs verified official link`
- imageStatus: `no app image yet`
- setupFor: `Shime-waza entries`, `transition to kuzure-kami-shiho-gatame`
- followUps: `Collar attacks if uke exposes the neck`, `switch to Yoko-shiho-gatame if uke turns`
- commonCounters: `Bridge toward one shoulder`, `elbow insertion`, `hip-walk escape`
- counterTo: `Opponent flattening underneath and giving head-side access`
- worksWellWith: `Yoko-shiho-gatame`, `Kata-gatame`
- samePositionOptions: `Yoko-shiho-gatame`, `Kuzure-kami-shiho-gatame`
- source:
  - Kodokan Global names/definitions page
  - Kodokan Katame-no-Kata positional references
- reviewStatus: `clarified`

#### Yoko Shiho Gatame

- practice: `Judo`
- section: `Katame-waza`
- family: `Osaekomi-waza`
- japaneseName: `Yoko Shiho Gatame`
- englishName: `Side Four-Corner Hold`
- positionContext: `Groundwork / side-control style pin`
- setup: Approach from the side, control around the far collar and lower body, and flatten uke under the chest and abdomen line.
- steps:
  - Establish side control from chest-to-chest alignment.
  - Control the far upper body while anchoring the hips or belt line.
  - Lower your hips and spread your base to prevent rolling.
  - Track uke's frames and recoveries with shoulder and hip pressure.
- commonMistakes:
  - Leaving the near hip unblocked.
  - Keeping elbows too wide and giving space.
  - Focusing only on chest pressure while neglecting hip control.
- safetyNotes:
  - Pressure should be progressive, not sudden.
  - Adjust if your partner cannot turn the head or breathe comfortably.
- youtubeUrl: `needs verified official link`
- imageStatus: `no app image yet`
- setupFor: `Kata Gatame`, `Juji Gatame`, `Kami Shiho Gatame`
- followUps: `Mount transition`, `arm attack when uke frames upward`
- commonCounters: `Hip escape`, `underhook recovery`, `turn to knees`
- counterTo: `Opponent who concedes side exposure during transition`
- worksWellWith: `Kata Gatame`, `Juji Gatame`, `Kesa Gatame`
- samePositionOptions: `Kesa Gatame`, `Kata Gatame`, `Kami Shiho Gatame`
- source:
  - Kodokan Global names/definitions page
  - Kodokan Katame-no-Kata positional references
- reviewStatus: `clarified`

#### Okuri Eri Jime

- practice: `Judo`
- section: `Katame-waza`
- family: `Shime-waza`
- japaneseName: `Okuri Eri Jime`
- englishName: `Sliding Collar Choke`
- positionContext: `Groundwork / back exposure`
- setup: Establish upper-body control from behind and feed one hand deep into the collar before the finishing hand slides across the second side.
- steps:
  - Secure back control or a strong seatbelt-style hold.
  - Insert the first hand deep into the collar with the palm orientation that fits your preferred finish.
  - Slide the second hand across the opposite collar or shoulder line.
  - Pull the elbows in and expand the chest while keeping head connection tight.
- commonMistakes:
  - Reaching for the choke before stabilizing the back.
  - Leaving the first hand too shallow.
  - Pulling outward instead of closing the collar line inward.
- safetyNotes:
  - Apply slowly and release immediately on tap.
  - Avoid violent collar yanks during setup.
- youtubeUrl: `needs verified official link`
- imageStatus: `no app image yet`
- setupFor: `Back control finish`, `collar choke chains`
- followUps: `Kata-ha-jime`, `Hadaka-jime if collars are lost`
- commonCounters: `Two-on-one grip fighting`, `chin tuck`, `shoulder escape to the mat`
- counterTo: `Opponent exposing the back in gi grips`
- worksWellWith: `Hadaka-jime`, `Kata-ha-jime`
- samePositionOptions: `Hadaka-jime`, `Kata-ha-jime`
- source:
  - Kodokan names list
  - Kodokan Global classification references
- reviewStatus: `clarified`

#### Ude-Hishigi-Juji-Gatame

- practice: `Judo`
- section: `Katame-waza`
- family: `Kansetsu-waza`
- japaneseName: `Ude-Hishigi-Juji-Gatame`
- englishName: `Cross Armlock`
- positionContext: `Groundwork / arm lock`
- setup: Trap the arm, get your hips underneath the elbow line, and control the shoulder before trying to finish.
- steps:
  - Secure one arm tightly to your chest and pivot so the elbow line points over your hips.
  - Bring one leg over the head and the other over the torso.
  - Pinch the knees and control the wrist with the thumb pointing upward.
  - Lift the hips gradually while keeping the elbow isolated.
- commonMistakes:
  - Crossing the feet.
  - Finishing before shoulder control is established.
  - Letting the elbow slip below the hip line.
- safetyNotes:
  - Apply slowly and stop immediately on tap.
  - Never bridge explosively into the finish.
- youtubeUrl: `https://www.youtube.com/watch?v=OWgSOlCuMXw`
- imageStatus: `no app image yet`
- setupFor: `Arm exposure from pins`
- followUps: `Pin recovery if the arm slips`, `triangle-style controls if uke turns`
- commonCounters: `Stacking`, `hiding the thumb line`, `turning the elbow free`
- counterTo: `Extended arm frames from top pins`
- worksWellWith: `Kesa Gatame`, `Yoko-shiho-gatame`, `Kata Gatame`
- samePositionOptions: `Ude-garami`, `Hiza-gatame`
- source:
  - Kodokan names/definitions page
  - Kodokan official YouTube demo
- reviewStatus: `clarified`

### IBJJF-Aligned Jiu-Jitsu

These are editorial teaching summaries aligned to IBJJF position/rules terminology, not official IBJJF technique definitions.

#### Closed Guard

- practice: `Jiu-Jitsu`
- section: `Guard`
- family: `Closed guard`
- englishName: `Closed Guard`
- positionContext: `Bottom guard`
- setup: Lock the legs behind the opponent and use your knees, hips, and grips to keep posture broken or at least controlled.
- steps:
  - Close your legs behind the opponent's waist.
  - Control posture with sleeve, collar, head, or overhook control.
  - Angle your hips before attacking rather than staying flat underneath.
  - Combine posture control with one attacking lane: sweep, submission, or back take.
- commonMistakes:
  - Staying square and flat.
  - Unlocking the legs without a purpose.
  - Attacking without first controlling posture or an arm.
- safetyNotes:
  - Avoid cranking on the neck when pulling posture.
  - Release pressure immediately on any submission finish.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Scissor sweep`, `Hip bump sweep`, `Triangle choke`, `Armbar from guard`
- followUps: `Sit-up attacks`, `cross-collar attacks`, `kimura/guillotine reactions`
- commonCounters: `Opponent postures tall`, `opens knees`, `stands to open guard`
- counterTo: `Loose top posture`
- worksWellWith: `Scissor sweep`, `Hip bump sweep`, `Triangle choke`, `Armbar from guard`
- samePositionOptions: `Scissor sweep`, `Hip bump sweep`, `Kimura`, `Triangle choke`
- source:
  - IBJJF rules baseline for positional terminology and scoring context
  - Editorial summary for teaching language
- reviewStatus: `clarified`

#### Scissor Sweep

- practice: `Jiu-Jitsu`
- section: `Guard`
- family: `Closed guard`
- englishName: `Scissor Sweep`
- positionContext: `Closed guard`
- setup: Break posture, open the guard with an angle, and place one shin across the torso while the other leg loads under the opponent's base.
- steps:
  - Break posture and create an angle to one side.
  - Open the guard and place your top shin across the chest or sternum line.
  - Pull the opponent forward while chopping with the lower leg.
  - Come up immediately to top position as the opponent falls.
- commonMistakes:
  - Staying flat instead of angling out.
  - Letting the shin drift too low.
  - Trying to sweep without loading the opponent's weight forward.
- safetyNotes:
  - Do not twist the opponent's knee when chopping the lower leg.
  - Come up with balance rather than jumping wildly to top.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Mount`, `cross-collar follow-up`, `armbar reactions`
- followUps: `Mount`, `top closed guard pass sequence`
- commonCounters: `Opponent widens base`, `postures tall`, `staples the bottom leg`
- counterTo: `Opponent leaning forward with one knee available`
- worksWellWith: `Triangle choke`, `Hip bump sweep`
- samePositionOptions: `Hip bump sweep`, `Pendulum sweep`
- source:
  - IBJJF positional baseline
  - Editorial summary for teaching language
- reviewStatus: `clarified`

#### Hip Bump Sweep

- practice: `Jiu-Jitsu`
- section: `Guard`
- family: `Closed guard`
- englishName: `Hip Bump Sweep`
- positionContext: `Closed guard sit-up attack`
- setup: Sit up as the opponent's posture rises, trap the posting arm line, and drive your hips into the opponent rather than pulling sideways with the arms alone.
- steps:
  - Open the guard and sit up tight to the opponent.
  - Clamp over the shoulder/arm line so the posting side becomes weak.
  - Drive your hips diagonally into the opponent while turning the upper body.
  - Follow to mount or top half guard without pausing.
- commonMistakes:
  - Staying too far away after sitting up.
  - Falling sideways instead of driving with the hips.
  - Forgetting to trap or block the posting arm.
- safetyNotes:
  - Keep the sit-up tight so your neck is not exposed unnecessarily.
  - Do not spike your partner with uncontrolled top pressure when finishing.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Kimura`, `Guillotine`, `Mount`
- followUps: `Mount`, `Kimura trap if the opponent posts`
- commonCounters: `Opponent posts wide`, `drives back into you`, `opens angle to stand`
- counterTo: `Opponent posturing inside closed guard`
- worksWellWith: `Kimura`, `Triangle choke`, `Closed guard sit-up attacks`
- samePositionOptions: `Scissor sweep`, `Kimura`
- source:
  - IBJJF positional baseline
  - Editorial summary for teaching language
- reviewStatus: `clarified`

#### Triangle Choke

- practice: `Jiu-Jitsu`
- section: `Submissions`
- family: `Closed guard`
- englishName: `Triangle Choke`
- positionContext: `Closed guard or open guard transition`
- setup: Isolate one arm in and one arm out, angle the hips, and lock the legs high across the neck and trapped shoulder.
- steps:
  - Control one arm so it stays inside while the other arm stays outside.
  - Shoot the attacking leg high across the opponent's shoulder and neck line.
  - Angle the hips and lock the figure-four above the opponent's posture line.
  - Pull the head and adjust the angle before finishing with the knees and hips.
- commonMistakes:
  - Locking the legs without angling out.
  - Letting the trapped arm drift back to safety.
  - Trying to squeeze before the shoulder is inside the choke line.
- safetyNotes:
  - Apply gradually and release immediately on tap.
  - Avoid sudden neck yanks while adjusting the finish.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Armbar`, `Omoplata` when the opponent defends
- followUps: `Armbar`, `Omoplata`, `sweep if stacked`
- commonCounters: `Opponent postures up`, `stacks forward`, `hides trapped shoulder`
- counterTo: `Opponent leaves an arm inside while posturing or pressuring`
- worksWellWith: `Armbar from guard`, `Hip bump sweep`, `Kimura`
- samePositionOptions: `Armbar from guard`, `Omoplata`
- source:
  - IBJJF positional hierarchy article
  - Editorial summary for teaching language
- reviewStatus: `clarified`

#### Rear Naked Choke

- practice: `Jiu-Jitsu`
- section: `Submissions`
- family: `Back control`
- englishName: `Rear Naked Choke`
- positionContext: `Back control`
- setup: Establish chest-to-back connection and control before threading the choking arm. The finish should come from alignment and elbow position, not wild squeezing.
- steps:
  - Secure back control with hooks or body triangle and upper-body connection.
  - Slide the choking arm under the chin and hide the hand behind the shoulder line.
  - Lock the support arm behind the head or on the biceps depending on finish preference.
  - Close the elbows and expand the chest while keeping the head tight.
- commonMistakes:
  - Cranking across the face without a clean choking line.
  - Letting the choking elbow drift wide.
  - Reaching for the neck before controlling the back.
- safetyNotes:
  - Apply slowly and release immediately on tap.
  - Keep training partners safe during body-triangle and neck-control transitions.
- youtubeUrl: `needs curated IBJJF-aligned source`
- imageStatus: `no app image yet`
- setupFor: `Short choke`, `bow-and-arrow style lapel attacks in gi contexts`
- followUps: `Back retention`, `arm trap variations`
- commonCounters: `Opponent hand-fights`, `tucks chin`, `slides shoulders to mat`
- counterTo: `Opponent giving the back while defending mount or turtle`
- worksWellWith: `Back control`, `seatbelt retention`, `short choke`
- samePositionOptions: `Short choke`, `Bow and arrow choke`
- source:
  - IBJJF positional hierarchy / submission article
  - Editorial summary for teaching language
- reviewStatus: `clarified`

## Notes On Source Quality

- Judo entries above are sourced against Kodokan naming and definitions first, then rewritten into shorter teaching language.
- BJJ entries above are not official IBJJF step-by-step definitions. They are IBJJF-aligned editorial summaries built around competition-standard positional language and should be reviewed as such.

## Backup Recommendation For Notes

- Yes, exporting notes is a good idea before larger rewrites.
- The app includes a local `Export notes` action on the progress page.
- Exported notes back up:
  - favorites
  - studied flags
  - class notes


From Gemini:
### Judo Hand Techniques (Te-waza)

#### Ippon-seoi-nage
- practice: `Judo`
- section: `Nage-waza`
- family: `Te-waza`
- englishName: `One-arm Shoulder Throw`
- positionContext: `Standing`
- setup: Pull uke forward to create momentum or wait for them to push into you.
- steps: 
  - Step in with your lead foot and pivot 180 degrees, backing into uke's space.
  - Tuck uke's right arm deep into your right armpit, clamping it tight with your bicep.
  - Drop your center of mass by bending your knees while pulling uke's arm downward.
  - Straighten your legs while bowing forward to wheel uke over your shoulder.
- commonMistakes: Lifting with the back instead of using legs as a fulcrum; looking back at uke instead of over the shoulder.
- source: Kodokan
- reviewStatus: `ready`

#### Seoi-otoshi
- practice: `Judo`
- section: `Nage-waza`
- family: `Te-waza`
- englishName: `Shoulder Drop`
- positionContext: `Standing`
- setup: Similar to Seoi-nage, but used when uke is heavy or resisting the lift.
- steps: 
  - Perform the same entry as Ippon-seoi-nage.
  - Instead of lifting, drop one or both knees to the mat.
  - Pull uke's arm and collar straight down toward the mat in a wheeling motion.
- commonMistakes: Failing to have at least one knee touch the mat; pulling backward instead of down.
- source: Kodokan
- reviewStatus: `ready`

### Jiu-Jitsu Fundamentals (Escapes and Submissions)

#### Upa Escape
- practice: `Jiu-Jitsu`
- section: `Escapes`
- family: `Mount escapes`
- englishName: `Bridge and Roll`
- positionContext: `Bottom of Mount`
- setup: Protect your neck and wait for uke to commit weight forward.
- steps: 
  - Trap uke's arm on one side by pinning their wrist and elbow to your chest.
  - Trap the same-side foot with your leg to prevent them from basing out.
  - Bridge your hips explosively toward the ceiling and roll over your shoulder.
- worksWellWith: `Elbow escape`
- source: IBJJF baseline terminology
- reviewStatus: `ready`

#### Kimura from Side Control
- practice: `Jiu-Jitsu`
- section: `Submissions`
- family: `Top pins`
- trainingContext: `Gi and No-gi`
- positionContext: `Top Side Control`
- setup: Established when the opponent reaches to push your face or frame against your hip.
- steps: 
  - Isolate the far arm and grab the wrist with a thumb-less grip.
  - Thread your other arm under their tricep and grab your own wrist.
  - Step over their head to block movement and rotate their hand toward the back of their head.
- commonMistakes: Leaving space between your chest and their arm; allowing the arm to straighten.
- reviewStatus: `ready`

### Jiu-Jitsu Guard Passing (Expansion)

#### Double Under Pass
- practice: `Jiu-Jitsu`
- section: `Passing`
- family: `Open guard passing`
- englishName: `Double Under Pass`
- positionContext: `Top open guard`
- setup: Dive both arms under the opponent's legs and gable grip your hands behind their lower back to stack their weight.
- steps: 
  - Drive your shoulder into the opponent's tailbone to lift their hips off the mat.
  - Walk your body to one side, forcing their knees toward their own face.
  - Use your shoulder to "wedge" their leg down as you slide your chest over their hip.
- commonMistakes: Letting the opponent triangle you (keep elbows tucked); failing to stack the hips high enough.
- followUps: `Side control`, `North-South`
- reviewStatus: `ready`

#### X-Pass
- practice: `Jiu-Jitsu`
- section: `Passing`
- family: `Open guard passing`
- trainingContext: `Gi`
- setup: Best used against a seated or butterfly guard where you can control the lead knee and opposite lapel.
- steps: 
  - Grip the inside of the opponent's knee and the opposite collar.
  - Kick your leg back (like a literal "X" motion) while pushing their knee across their body.
  - Step quickly to the side to clear the legs and settle into side control.
- worksWellWith: `Toreando pass`
- reviewStatus: `ready`

### Counter-Techniques (The Answers)

#### Kimura Counter: The Re-Kimura
- practice: `Jiu-Jitsu`
- section: `Counters`
- counterTo: `Kimura (from bottom guard)`
- steps: 
  - As the opponent sits up for the Kimura, immediately post your free hand on the mat for base.
  - Reach your other arm deep across their back to "re-wrap" their arm.
  - Roll over your lead shoulder, using the momentum to flip the opponent and end in a top-side Kimura position.
- reviewStatus: `ready`

#### Osoto-Gari Counter: Osoto-Gaeshi
- practice: `Judo`
- section: `Nage-waza`
- family: `Ashi-waza`
- counterTo: `Osoto-gari`
- setup: The moment uke attempts to reap your leg.
- steps: 
  - Brace your weight forward and resist the backward pull.
  - Use your own leg to "re-reap" uke's supporting leg or the reaping leg itself.
  - Twist your body in the opposite direction of their throw to land on top.
- safetyNotes: Requires excellent timing to avoid falling awkwardly on the knee.
- source: Kodokan
- reviewStatus: `ready`

#### Triangle Counter: The Pressure Stack
- practice: `Jiu-Jitsu`
- section: `Counters`
- counterTo: `Triangle choke`
- steps: 
  - Immediately "posture up" by looking at the ceiling to prevent the break of your posture.
  - Grip the opponent's trousers or belt and drive your weight forward, stacking their knees toward their ears.
  - Use your elbow to "wedge" the locked legs open as you move to side control.
- commonMistakes: Allowing the opponent to pull your head down; staying flat on your knees instead of driving forward.
- reviewStatus: `ready`

### Judo Groundwork: Transitions from Turtle

#### Koshi-jime (Clock Choke)
- practice: `Judo / Jiu-Jitsu`
- section: `Katame-waza`
- family: `Shime-waza`
- counterTo: `Defensive Turtle`
- steps: 
  - Reach across the opponent's neck and grab the far-side lapel.
  - Trap the near-side arm or leg.
  - Walk your feet in a circle toward the opponent's head (like a clock) to tighten the lapel tension.
- reviewStatus: `ready`

have found the requested YouTube URLs and reference descriptions for your staging file. For static images, I have provided descriptive labels or Wikimedia links where available, which are standard for reference in app development.

### **Judo Techniques (Kodokan Aligned)**

#### **Ippon Seoi Nage (One-arm Shoulder Throw)**

- **YouTube**: [Ippon Seoi Nage in 5 levels of complexity](https://www.youtube.com/shorts/gim7y77BpBE)
    
- **Reference Image**: [Illustration of Ippon-seoi-nage (Wikimedia Commons)](https://commons.wikimedia.org/wiki/File:Ippon-seoi-nage.jpg) — _Shows the turn-in and trapping of the arm in the crook of the elbow._
    

#### **Ashi Guruma (Leg Wheel)**

- **YouTube**: [Kodokan Judo: Ashi-Guruma](https://www.youtube.com/watch?v=jGg3yjj4CCM)
    
- **Reference Description**: _Static image should show Tori's leg extended as an axis across Uke's lower thighs/knees while wheeling them over._
    

#### **Harai Tsurikomi Ashi (Lift-Pull Foot Sweep)**

- **YouTube**: [HARAI TSURIKOMI ASHI - Technical Breakdown](https://www.youtube.com/watch?v=wP2-1i4_OFU)
    
- **Reference Description**: _Image shows the diagonal forward lift of Uke's torso while the foot sweeps the ankle back._
    

#### **Hane Goshi (Spring Hip Throw)**

- **YouTube**: [IJF Official Hane-goshi Technical Video](https://judo.ijf.org/techniques/Hane-goshi)
    
- **Reference Description**: _Shows the "hip spring" action where Tori's leg is raised against the inside of Uke's leg to assist the hip rotation._
    

---

### **Jiu-Jitsu Passing & Counters (IBJJF Aligned)**

#### **Double Under Pass**

- **YouTube**: [Double Under Guard Pass - Fundamentals and Pressure](https://www.youtube.com/watch?v=JPvwJ0tAVo8)
    
- **Reference Description**: _Image of Tori with both arms under Uke's legs, hands joined at the lower back, stacking Uke's hips._
    

#### **X-Pass**

- **YouTube**: [BJJ X-Pass Series and Combinations](https://www.youtube.com/watch?v=vLdSrrXLcXI)
    
- **Reference Description**: _Image of Tori standing, one hand on Uke's knee and one on the collar, kicking a leg back to clear the guard._
    

#### **Triangle Choke Counter (Pressure Stack)**

- **YouTube**: [Counter the Triangle Choke at Every Stage](https://www.youtube.com/watch?v=PIjyJ081Dlo)
    
- **Reference Description**: _Image of Tori posturing tall with hands on Uke's knees or belt to create space before stacking._
    

#### **Kimura Counter (Back Take)**

- **YouTube**: [Countering the Kimura with a Back Take](https://www.youtube.com/watch?v=_w7JP9VMyvk)
    
- **Reference Description**: _Image showing Tori bridging and reaching over the opponent's back to negate the armlock tension._
### **Judo Directionality & Throw Pairings**

| Direction of Movement          | Off-Balance Target        | Primary Throw Options                      |
| ------------------------------ | ------------------------- | ------------------------------------------ |
| **Opponent Pulls/Retreats**    | **Front / Front Corners** | Seoi Nage, O Goshi, Uchi Mata, Tai Otoshi  |
| **Opponent Pushes/Advances**   | **Back / Rear Corners**   | Osoto Gari, Ouchi Gari, Kosoto Gari        |
| **Opponent Circles / Lateral** | **Side / Side Corners**   | Deashi Harai, Okuriashi Harai, Hiza Guruma |
### Judo Directionality Expansion

#### Uchi Mata (Inner Thigh Reap)
- practice: `Judo`
- section: `Nage-waza`
- family: `Ashi-waza` (sometimes categorized as Koshi-waza)
- directionality: `Forward / Front Corner`
- setup: Pull uke forward or toward their front-right corner. This is most effective when uke is retreating or circling away.
- steps: 
  - Pull uke forward to break balance onto their toes.
  - Pivot 180 degrees while maintaining chest-to-back contact.
  - Insert your reaping leg between uke's thighs and lift upward while bowing forward.
- setupFor: `Ouchi Gari` (if they resist the forward lift by leaning back).
- reviewStatus: `ready`


#### Kouchi Gari (Minor Inner Reap)
- practice: `Judo`
- section: `Nage-waza`
- family: `Ashi-waza`
- directionality: `Rear / Rear Corner`
- setup: Best used when uke is advancing toward you or when they have a wide, stable stance.
- steps: 
  - Drive your chest into uke while pulling their sleeve downward to fix their weight on their heel.
  - Use the sole of your foot to reap the inside of uke's heel in a "shaving" motion across the mat.
- setupFor: `Seoi Nage`, `Ouchi Gari`
- worksWellWith: `Osoto Gari` (as a "circular" combination).
- reviewStatus: `ready`

#### Tai Otoshi (Body Drop)
- practice: `Judo`
- section: `Nage-waza`
- family: `Te-waza`
- directionality: `Front Corner`
- setup: Pull uke diagonally forward. This is a "snap" throw that works best when uke's feet are wide.
- steps: 
  - Use a strong two-handed pull (sleeve and lapel) to bring uke onto their toes.
  - Step across uke's path, placing your leg as a tripping hazard without touching their leg.
  - Use a wheeling motion with your arms to project them over your extended leg.
- reviewStatus: `ready`


#### Tomoe Nage (Circle Throw)
- practice: `Judo / Jiu-Jitsu`
- section: `Nage-waza`
- family: `Ma-sutemi-waza` (Sacrifice Throw)
- directionality: `Directly Forward`
- setup: Pull uke straight forward. Works perfectly if uke is pushing back or stiff-arming.
- steps: 
  - Grip both lapels or sleeve/collar and pull uke onto you while sitting back.
  - Place one foot on uke's lower abdomen/hip.
  - Roll onto your back, using the momentum to flip uke over your head.
- followUps: `Mount` (BJJ context), `Juji-gatame`
- reviewStatus: `ready`
### **1. The Positional Hierarchy (The "Big Picture" Flow)**

This is the fundamental roadmap for every BJJ practitioner. The goal is to move from "Worst" to "Best" while avoiding neutral stalemates.

- **Defensive (Worst):** Rear Mount Bottom → Mount Bottom → Side Control Bottom.
    
- **Neutral:** Guard (Bottom or Top) → Turtle (Bottom or Top).
    
- **Offensive (Best):** Side Control Top → Mount Top → Rear Mount Top.
    

---

### **2. Guard Passing Flowchart (The "Toreador" Logic)**

When you are on top of someone's open guard, your movement follows a specific chain based on their distance and grips.

- **Long Range:** Toreando Pass (Side-to-side movement).
    
- **Mid Range:** Knee Cut Pass (Driving the knee across the thigh).
    
- **Close Range:** Double Under Pass (Stacking the opponent's hips).
    
- **Reaction:** If they frame → Switch sides. If they push → Pin the knees.
    

---

### **3. Submission Chain Flowchart (The "Trap" System)**

Advanced BJJ relies on "chains" rather than single attacks. If the opponent defends one, they usually open themselves up to the next.

**The "Holy Trinity" of Closed Guard:**

1. **Attack:** Armbar.
    
2. **Opponent Defends (Pulls arm out):** → Transition to **Triangle Choke**.
    
3. **Opponent Defends (Postures up/stacks):** → Transition to **Omoplata**.
    

**The Mount Attack Chain:**

1. **Attack:** Americana (Keylock).
    
2. **Opponent Defends (Straightens arm):** → Transition to **Straight Armbar**.
    
3. **Opponent Defends (Turns to side):** → Transition to **Back Take / RNC**.
    

---

### **4. Defensive Escape Flowchart (Survival)**

When you are pinned, your "decision tree" is based on the space available.

- **Scenario A: They are heavy/low:** → **Upa (Bridge and Roll)**.
    
- **Scenario B: They are high/postured:** → **Elbow Escape (Shrimping)** to recover Half Guard.
    
- **Scenario C: They are reaching for your neck:** → **Trap the arm** → Revert to Scenario A.
    

### **Where to Build Your Own**

If you want to create a custom flowchart for your specific "A-Game," these tools are popular in the BJJ community:

- **BJJFlowCharts.com:** Provides pre-made PDF maps of famous instructionals (like Danaher’s).
    
- **JJXF (Jiu-Jitsu X-Factor):** A digital tool specifically for building "decision tree" nodes for grappling.
    
- **Coggle / MindMeister:** General mind-mapping tools that work well for simple submission chains.

#### **Kata-guruma (Shoulder Wheel)**

- **practice**: `Judo`
    
- **family**: `Te-waza`
    
- **positionContext**: `Standing`
    
- **setup**: Pull uke forward to break their balance onto their toes, creating a "window" of space under their center of gravity.
    
- **steps**:
    
    - Step deep between uke's legs and drop your hips lower than theirs.
        
    - Place your shoulder across their lower abdomen/hips and reach through their legs to grab the far thigh.
        
    - Stand up while pulling uke across your shoulders and project them to the side.
        
- **commonMistakes**: Trying to lift with the back instead of the legs; not dropping low enough to get under uke's center.
    
- **safetyNotes**: In modern IJF competition, touching the legs is restricted, so this is often performed as a "fireman's carry" variation without the leg grab.
    
- **reviewStatus**: `ready`
    

#### **Ko-soto-gake (Minor Outer Hook)**

- **practice**: `Judo`
    
- **family**: `Ashi-waza`
    
- **positionContext**: `Standing`
    
- **setup**: Best used when uke is retreating or leaning back, specifically when their weight is heavily on one heel.
    
- **steps**:
    
    - Step to the side of uke and use your sleeve/collar grips to drive them toward their rear corner.
        
    - Hook your calf behind uke's ankle/calf from the outside.
        
    - Drive your chest through the throw while reaping or "hooking" their leg until they fall backward.
        
- **commonMistakes**: Hooking the leg without breaking uke's balance (Kuzushi) first; losing chest-to-chest contact.
    
- **reviewStatus**: `ready`
    

---

### **2. Missing Judo Groundwork (Katame-waza)**

You had several pins listed in your "research next" section. Here is the technical data for those transitions.

#### **Hadaka-jime (Naked Strangle)**

- **practice**: `Judo / Jiu-Jitsu`
    
- **family**: `Shime-waza`
    
- **positionContext**: `Groundwork / Back control`
    
- **setup**: Applied when uke is in a turtle position or when you have established back control.
    
- **steps**:
    
    - Wrap your forearm around uke's neck, placing their windpipe in the crook of your elbow.
        
    - Grip your own palm or bicep and place your other hand behind uke's head to close the loop.
        
    - Squeeze the elbows together and expand your chest to apply pressure to the carotids.
        
- **reviewStatus**: `ready`
    

#### **Ude-garami (Bent Arm Lock)**

- **practice**: `Judo / Jiu-Jitsu`
    
- **family**: `Kansetsu-waza`
    
- **positionContext**: `Groundwork / Top pin`
    
- **setup**: Often used from _Kesa-gatame_ or _Yoko-shiho-gatame_ when uke tries to push or frame with a bent arm.
    
- **steps**:
    
    - Pin uke's wrist to the mat with one hand.
        
    - Thread your other arm under uke's elbow and grab your own wrist (figure-four grip).
        
    - Rotate the arm toward the head (Kimura style) or toward the hips (Americana style) to create shoulder tension.
        
- **reviewStatus**: `ready`
    

---

### **3. Strategic "Bridge" Techniques**

To better connect Judo and BJJ, I recommend adding these moves which were missing from both sections but are essential for a combined app.

#### **Sumi-gaeshi (Corner Throw)**

- **why add it**: It is the premier "sacrifice throw" used in BJJ to counter single-leg takedowns.
    
- **directionality**: `Rear Corner / Sacrifice`
    
- **setup**: As uke shoots for a leg or pushes into you, grab their belt or use a Kimura grip.
    
- **steps**:
    
    - Sit back and pull uke onto your chest.
        
    - Place your instep against uke's inner thigh and "flick" them over your head as you roll to your back.
        
- **reviewStatus**: `ready`
    

#### **Ezekiel Choke (Sode-guruma-jime)**

- **why add it**: A rare choke that can be applied effectively from _inside_ someone's guard or from the top of _Mount_.
    
- **practice**: `Jiu-Jitsu / Judo`
    
- **steps**: Reach behind uke's neck, grab your own sleeve, and use your other forearm to scissor across their throat.
    
- **reviewStatus**: `ready`

Positional Hierachy
https://www.whitebeltclub.com/positional-hierarchy

other
https://www.youtube.com/watch?v=3_rbDiGcyaA

https://www.youtube.com/watch?v=7nquldxUwQI

**Ippon Seoi Nage**[https://www.youtube.com/watch?v=gim7y77BpBE](https://www.google.com/search?q=https://www.youtube.com/watch%3Fv%3Dgim7y77BpBE)**Ashi Guruma**[https://www.youtube.com/watch?v=jGg3yjj4CCM](https://www.youtube.com/watch?v=jGg3yjj4CCM)**Harai Tsurikomi Ashi**[https://www.youtube.com/watch?v=wP2-1i4_OFU](https://www.youtube.com/watch?v=wP2-1i4_OFU)**Hane Goshi**[https://judo.ijf.org/techniques/Hane-goshi](https://judo.ijf.org/techniques/Hane-goshi)**Hadaka Jime**[https://www.youtube.com/watch?v=zgctTFb3XlA](https://www.youtube.com/watch?v=zgctTFb3XlA)**Ude Hishigi Juji Gatame**[https://www.youtube.com/watch?v=OWgSOlCuMXw](https://www.youtube.com/watch?v=OWgSOlCuMXw)**Osoto Gari**[https://www.youtube.com/watch?v=c-A_nP7mKAc](https://www.youtube.com/watch?v=c-A_nP7mKAc)**O Goshi**[https://www.youtube.com/watch?v=yhu1mfy2vJ4](https://www.youtube.com/watch?v=yhu1mfy2vJ4)**Deashi Harai**[https://www.youtube.com/watch?v=4BUUvqxi_Kk](https://www.youtube.com/watch?v=4BUUvqxi_Kk)

**Triangle Choke**[https://www.youtube.com/watch?v=9m9VA9StG4w](https://www.youtube.com/watch?v=9m9VA9StG4w)**Scissor Sweep**[https://www.youtube.com/watch?v=bVBMPm_jE2o](https://www.youtube.com/watch?v=bVBMPm_jE2o)**Hip Bump Sweep**[https://www.youtube.com/watch?v=YvJ-PVhKiWI](https://www.youtube.com/watch?v=YvJ-PVhKiWI)**Knee Cut Pass**[https://www.youtube.com/watch?v=g6MK2Eepjuc](https://www.youtube.com/watch?v=g6MK2Eepjuc)**Toreando Pass**[https://www.youtube.com/watch?v=eQ2BGqyvndU](https://www.youtube.com/watch?v=eQ2BGqyvndU)**Double Under Pass**[https://www.youtube.com/watch?v=JPvwJ0tAVo8](https://www.youtube.com/watch?v=JPvwJ0tAVo8)

### **Final Judo Pins & Chokes (Katame-waza)**

#### **Kami-shiho-gatame (Upper Four-Corner Hold)**

- **YouTube**: [IJF Official: Kami-shiho-gatame](https://judo.ijf.org/techniques/Kami-shiho-gatame)
    
- **Steps**:
    
    - Position yourself above the opponent's head, facing their feet.
        
    - Reach both arms under the opponent's shoulders and grab their belt on both sides.
        
    - Lower your chest onto their face/chest and spread your knees wide for a low, stable base.
        
- **Review Status**: `ready`
    

#### **Yoko-shiho-gatame (Side Four-Corner Hold)**

- **YouTube**: [IJF Official: Yoko-shiho-gatame](https://judo.ijf.org/techniques/Yoko-shiho-gatame)
    
- **Steps**:
    
    - From the side, reach your near arm under the opponent's neck to grab the far collar or shoulder.
        
    - Pass your other arm between their legs to grip the belt or trousers.
        
    - Drive your weight into their solar plexus while keeping your head low.
        
- **Review Status**: `ready`
    

#### **Kata-ha-jime (Single Wing Strangle)**

- **YouTube**: [IJF Official: Kata-ha-jime](https://judo.ijf.org/techniques/Kataha-jime)
    
- **Steps**:
    
    - From behind the opponent (often in Turtle), reach one arm around the neck to grab the far-side lapel.
        
    - Slip your other hand under their armpit and place the back of that hand against the back of their neck.
        
    - Pull the lapel while pushing the head forward to finish.
        
- **Review Status**: `ready`
    

---

### **Final BJJ Essentials (Escapes & Control)**

#### **Elbow Escape from Mount**

- **YouTube**: [Fundamental Elbow Escape Mechanics](https://www.youtube.com/watch?v=tCEL3U6N0GA)
    
- **Steps**:
    
    - Turn onto your side and create a frame with your forearms against the opponent's hip.
        
    - Use your bottom elbow to "push" the opponent's knee down while you shrimp your hips away.
        
    - Slide your bottom leg through the gap to recover half-guard or full guard.
        
- **Review Status**: `ready`
    

#### **Back Retention (Seatbelt Control)**

- **YouTube**: [Seatbelt Details & Back Retention Drills](https://www.youtube.com/watch?v=a_vBCtRDlfY)
    
- **Steps**:
    
    - Wrap one arm over the opponent's shoulder and the other under their armpit (Seatbelt Grip).
        
    - Keep your chest glued to their back and your chin tucked behind their shoulder.
        
    - If they try to slide out, use your "hooks" (legs) and the seatbelt to pull them back to center.
        
- **Review Status**: `ready`
